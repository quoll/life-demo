(ns life.page
  (:require [sablono.core :as sab]
            [cljs.js]
            [cljs.pprint :refer [pprint]]
            [clojure.string :refer [split]]
            [life.evaluator :refer [read-eval]])
  (:import [goog.string StringBuffer]))

(declare pages init-forms)

(def height 15)
(def width 35)
(def sq 25)

(defn pp
  [o]
  (let [sb (StringBuffer.)]
    (pprint o (StringBufferWriter. sb))
    (str sb)))

(defn stop-timer
  [app-state]
  (let [timer (:timer @app-state)]
    (js/clearInterval timer)
    (swap! app-state dissoc :timer)))

(defn next-life
  [app-state]
  (fn []
    (let [{:keys [stored gen]} @app-state
          life (:life stored)
          next-gen (life gen)]
      (if (= gen next-gen)
        (stop-timer app-state)
        (swap! app-state assoc :gen next-gen)))))

(defn start-timer
  [app-state]
  (swap! app-state assoc :timer (js/setInterval (next-life app-state) 125)))

(defn do-eval
  [app-state text]
  (if text
    (try
      (let [result (read-eval text)
            op (if (vector? result) (pp result) (str result))]
        (swap! app-state assoc :output op :raw result :err nil)
        (if-let [stored (get-in @app-state [:page :stored])]
          (swap! app-state assoc-in [:stored stored] result)))
      (catch :default e
        (swap! app-state assoc :output nil :raw nil :err e)))
    (swap! app-state assoc :output "" :raw nil :err nil)))

(defn change-page
  [app-state nr]
  (swap! app-state #(assoc % :page (nth pages nr) :nr nr :output nil))
  (when (= nr (dec (count pages)))
    (swap! app-state assoc :gen (get-in @app-state [:stored :RR])))
  (if (:eval @app-state)
    (do-eval app-state (get-in @app-state [:page :text]))))

(defn eval-button
  [app-state]
  [:div
   (sab/submit-button
    {:class "eval-button"
     :onClick (fn []
                (let [text-elt (.getElementById js/document "in")
                      text (.-value text-elt)]
                  (do-eval app-state text)))}
    "Eval")])

(defn prev-stop-button
  [app-state]
  (sab/submit-button
   (let [nr (dec (:nr @app-state))]
     {:class "prev-button"
      :onClick (fn []
                 (stop-timer app-state)
                 (change-page app-state nr))})
   "Prev"))

(defn run-button
  [app-state]
  (sab/submit-button
   {:class "eval-button"
    :onClick #(if (:timer @app-state)
                (stop-timer app-state)
                (start-timer app-state))}
   (if (:timer @app-state) "Stop" "Run ")))

(defn next-button
  [app-state]
  (sab/submit-button
   (let [nr (inc (:nr @app-state))]
     (if (>= nr (count pages))
       {:class "dnext-button"}
       {:class "next-button"
        :onClick #(change-page app-state nr)}))
   "Next"))

(defn prev-button
  [app-state]
  (sab/submit-button
   (let [nr (dec (:nr @app-state))]
     (if (< nr 0)
       {:class "dprev-button"}
       {:class "prev-button"
        :onClick #(change-page app-state nr)}))
   "Prev"))

(defn command-field
  [app-state]
  (sab/text-area
   {:rows 5 :cols 98 :id "in" :class "rw"
    :onChange #(swap! app-state assoc-in [:page :text] (.. % -target -value))}
   "cljs.in"
   (:text (:page @app-state))))

(defn eval-check
  [app-state]
  [:div {:class "eval-block"}
   (sab/check-box
    {:id "eval"
     :checked (:eval @app-state)
     :onClick #(swap! app-state assoc :eval (.. % -target -checked))}
    "eval")
   (sab/label "eval-label" "eval automatically")])

(defn field
  [app-state]
  (let [pixel-width (* sq width)
        pixel-height (* sq height)
        frame [:svg {:width (+ 2 pixel-width) :height (+ 2 pixel-height)}
               [:rect {:x 0 :y 0 :width (inc pixel-width) :height (inc pixel-height)
                       :style {:stroke "black"
                               :stroke-width 1
                               :fill "white"}}]]
        raw (:raw @app-state)]
    (if (and raw (vector? raw))
      (if (vector? (first raw))
        (vec (concat frame raw))
        (conj frame raw))
      frame)))

(defn dynamic-field
  [app-state]
  (let [pixel-width (* sq width)
        pixel-height (* sq height)
        frame [:svg {:width (+ 2 pixel-width) :height (+ 2 pixel-height)}
               [:rect {:x 0 :y 0 :width (inc pixel-width) :height (inc pixel-height)
                       :style {:stroke "black"
                               :stroke-width 1
                               :fill "white"}}]]
        stored (:stored @app-state)
        gen (or (:gen @app-state) (:RR stored))
        draw (:draw stored)
        user-struct (and draw (draw gen))]
    (if user-struct
      (try
        (if (vector? (first user-struct))
          (vec (concat frame user-struct))
          (conj frame user-struct))
        (catch :default _ frame))
      frame)))

(defn paragraph
  [s]
  (apply vector :p
         (mapcat #(if (vector? %) % [%])
                 (interpose [[:br] [:br]]
                            (split s #"\|")))))

(defn render-page
  [app-state page-type]
  (let [{nr :nr {:keys [title desc text]} :page} @app-state]
    (sab/html [:div {:class "page"}
               (prev-button app-state)
               (next-button app-state)
               [:br]
               [:h2 title]
               [:div {:class "desc"}
                (paragraph desc)]
               (command-field app-state)
               (eval-button app-state)
               [:div {:class "output"}
                (if (= :text page-type)
                  (if-let [output (:output @app-state)]
                    [:pre {:id "out"} output]
                    [:pre {:id "out"} "\u00A0"])
                  (field app-state))]
               [:br]
               (eval-check app-state)
               [:br]])))

(defn run-page1
  [app-state]
  (render-page app-state :text))

(defn run-page2
  [app-state]
  (render-page app-state :graphics))

(defn run-pagex
  [app-state]
  (let [{nr :nr {:keys [title desc text]} :page} @app-state]
    (sab/html [:div {:class "page"}
               (prev-stop-button app-state)
               (next-button app-state)
               [:br]
               [:h2 title]
               [:div {:class "desc"}
                (paragraph desc)]
               (sab/text-area
                {:rows 5 :cols 98 :id "ro" :class "ro"}
                "cljs.ro"
                "(js/setInterval (next-life app-state) 125)")
               (run-button app-state)
               [:div {:class "output"}
                (dynamic-field app-state)]
               [:br]])))

(def page-data
   ;; 0
  [[run-page1 "Initial Data" "Here is a sequence of the first 9 natural numbers" "(range 9)"]
   ;; 1
   [run-page1
    "Initial Data"
    "A 3x3 reshape gives us a 3 row, 3 column matrix" "(reshape (array (range 9)) [3 3])"]
   ;; 2
   [run-page1
    "Initial Data"
    "Which of the items of this matrix are members of the \"init\" set: 1 for yes, 0 for no."
    "(def init #{1 2 3 4 7})\n(emap (nbool init) (reshape (array (range 9)) [3 3]))"]
   ;; 3
   [run-page1
    "Initial Data"
    "We'll call this boolean matrix \"r\""
    "(def r (emap (nbool init) (reshape (array (range 9)) [3 3])))"]
   ;; 4
   [run-page1
    "Initial Data"
    "We can embed r is a slightly larger matrix: a 5x7 \"take\" of r which pads below and on the right with zeros."
    "(takeof [5 7] r)"]
   ;; 5
   [run-page1
    "Initial Data"
    "We can center our original within this by doing the -2 rotation about a vertical axis (the second, or \"1\" dimension of the matrix)"
    "(rotate (takeof [5 7] r) 1 -2)"]
   ;; 6
   [run-page1
    "Initial Data"
    "... and a -1 rotation about a horizontal axis (the first, or 0, dimension of the matrix)"
    "(rotate (rotate (takeof [5 7] r) 1 -2) 0 -1)"]
   ;; 7
   [run-page1
    "Initial Data"
    "We'll call this larger matrix \"R\""
    "(def R (rotate (rotate (takeof [5 7] r) 1 -2) 0 -1))"]
   ;; 8
   [run-page1 "Processing Data" "Here is a vector of 3 matrices" "[R R R]"]
   ;; 9
   [run-page1
    "Processing Data"
    "We can see this more clearly if we use a library function which draws boxes around sub-arrays"
    "(disp [R R R])"]
   ;; 10
   [run-page1
    "Processing Data" "mapping rotate in the second (or \"1\") dimension onto [1 0 -1] and the matrices distributes the rotation onto corresponding items in the first and second argument vectors. So we see our original \"0 rotation\" in the center, and a 1 and -1 rotation on either side"
    "(disp (map #(rotate %2 1 %1) [1 0 -1] [R R R]))"]
   ;; 11
   [run-page1
    "Processing Data"
    "Another approach is to create a sequence of vectors for each rotation using a \"for\" loop. So we get the same result"
    "(disp (for [x [1 0 -1]] (rotate R 1 x)))"]
   ;; 12
   [run-page1
    "Processing Data"
    "By using a \"for\" loop we can easily expand the term to rotate each of these matrices in the first (or \"0\") dimension. This creates a full outer-product of all rotations, which have been flattened into a single sequence of matrices."
    "(disp (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))"]
   ;; 13
   [run-page1 "Processing Data" "And if we sum the sequence we see a \"neighbor count\" for each cell in our original matrix R" "(disp (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y))))"]
   ;; 14
   [run-page1
    "Processing Data"
    "The rules of Conway's Game of Life are that you have a 1 in the following generation if the neighbor count including itself is 3, or if the neighbor count including itself is a 4 and the original cell was occupied.|So first, find the 3s and 4s.|The =x function creates a function on a matrix that will return a boolean matrix where cells are 1 when equal to the given scalar, and 0 otherwise. When the =x function is built on the neighbor-count matrix, it can then be mapped to the values 3 and 4"
    "(disp (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))"]
   ;; 15
   [run-page1
    "Processing Data"
    "And we're interested in any 3, and a 4 corresponding to an occupied cell, which is just our original matrix R. So we AND those masks to the 3s and 4s matrices, and with the longer lines, we will start using some formatting with indentation"
    "(disp\n  (map and*\n       [1 R]\n       (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))"]
   ;; 16
   [run-page1
    "Processing Data"
    "And both of these matrices contributes to the next generation. So if we OR them together..."
    "(disp\n  (apply or*\n       (map and*\n            [1 R]\n            (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))))"]
   ;; 17
   [run-page1
    "Processing Data"
    "...and disclose the result we see a simple matrix for the next generation of the Game of Life"
    "(apply or*\n       (map and*\n            [1 R]\n            (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))"]
   ;; 18
   [run-page1
    "Building the Function"
    "So here we have a single array expression for the next generation. You'll notice that the size of the matrix R is not specified anywhere, so that the expression is applicable to a matrix of any size.|Let's extract it as a function, by replacing all occurances of R with a formal parameter o, and the function \"life\""
    "(defn life [o]\n  (apply or*\n         (map and*\n              [1 o]\n              (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate o 1 x) 0 y)))) [3 4]))))" :life]
   ;; 19
   [run-page1
    "Building the Function"
    "Test it.|There are the first 3 generations"
    "(disp [R (life R) (life (life R))])"]
   ;; 20
   [run-page1
    "Initializing"
    "Next, let's make a larger arena still, so RR is the 15x35 take of R, rotated by [10,20]"
    "(def RR (rotate (rotate (takeof [15 35] R) 1 20) 0 10))" :RR]
   ;; 21
   [run-page1
    "Initializing"
    "This is difficult to see, so let's display it"
    "(disp RR)"]


   ;; 22
   [run-page1
    "Drawing"
    "We want to draw this data, so we will start with a SVG field. This is done by rendering Clojure vector data stuctures. We want each cell to be 25 wide, so set the width and height. Let's draw a line diagonally through it."
    "(def width (* 25 35))\n(def height (* 25 15))\n[:svg {:width width :height height :x 1 :y 1}\n  [:line {:x1 0 :y1 0 :x2 width :y2 height :style {:stroke \"rgb(255,0,0)\" :stroke-width 2}}]]"]
   ;; 23
   [run-page2
    "Drawing"
    "Now render this SVG"
    "[:svg {:width width :height height :x 1 :y 1}\n  [:line {:x1 0 :y1 0 :x2 width :y2 height :style {:stroke \"rgb(255,0,0)\" :stroke-width 2}}]]"]
   ;; 24
   [run-page2
    "Drawing the Grid"
    "So now let's render the squares we need to make a grid. We will color them according to even/odd. Note that concatenating vectors is a lazy sequence, but the result must be a vector. The resulting code it a little long, so scroll down in the box to see it all"
    "(vec (concat [:svg {:width width :height height :x 1 :y 1}]\n             (for [x (range 35) y (range 15)]\n               [:rect {:x (* x 25) :y (* y 25) :width 25 :height 25\n                :style {:fill (if (even? (+ x y)) \"white\" \"blue\")\n                        :stroke \"white\"\n                        :stroke-width 1}}])))"]
   ;; 25
   [run-page2
    "Drawing the Grid"
    "We can now print these squares based on RR. Matrices are indexed first by y, then by x"
    "(vec (concat [:svg {:width width :height height :x 1 :y 1}]\n             (for [x (range 35) y (range 15)]\n               [:rect {:x (* x 25) :y (* y 25) :width 25 :height 25\n                :style {:fill (if (zero? (mget RR y x)) \"white\" \"blue\")\n                        :stroke \"white\"\n                        :stroke-width 1}}])))"]
   ;; 26
   [run-page1
    "Draw Function"
    "Based on this code, we can create a draw function for any matrix that is [15,35]. This is a library function, so we can just call it from in here"
    "(defn draw [m]\n(vec (concat [:svg {:width width :height height :x 1 :y 1}]\n               (for [x (range 35) y (range 15)]\n                 [:rect {:x (* x 25) :y (* y 25) :width 25 :height 25\n                  :style {:fill (if (zero? (mget m y x)) \"white\" \"blue\")\n                          :stroke \"white\"\n                          :stroke-width 1}}]))))" :draw]

   ;; 27
   [run-pagex
    "Conway's Game of Life"
    "We want the page to be modified to dynamically move to successive generations. To do this, we will put the current generation of data into the page \"application state\", and introduce a timer that will execute the \"next-life\" every 1/8 of a second. This uses \"life\" to update the application state from one generation to the next. The \"draw\" function will be called to render the data.|The code shown here is how the timer will be initialized, but because it is part of the page, it cannot be modified"
    ""]])

;; initialize the page data
(def pages (map (fn [[f title desc text stored]]
                  {:fn f
                   :title title
                   :desc desc
                   :text text
                   :stored stored})
                page-data))
