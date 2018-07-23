(ns life.page
  (:require [sablono.core :as sab]
            [cljs.js]
            [cljs.pprint :refer [pprint]]
            [clojure.string :refer [split]]
            [life.evaluator :refer [read-eval]])
  (:require-macros [life.macros :as macros])
  (:import [goog.string StringBuffer]))

(declare pages init-forms)

(defn pp
  [o]
  (let [sb (StringBuffer.)]
    (pprint o (StringBufferWriter. sb))
    (str sb)))

(defn eval-button
  [app-state]
  [:div
   (sab/submit-button
    {:class "eval-button"
     :onClick
     (fn []
       (let [text-elt (.getElementById js/document "in")
             text (.-value text-elt)]
         (if text
           (try
             (let [result (read-eval text)
                   op (if (vector? result) (pp result) (str result))]
               (swap! app-state assoc :output op :err nil))
             (catch :default e
               (swap! app-state assoc :output nil :err e)))
           (swap! app-state assoc :output "" :err nil))))}
    "Eval")])

(defn next-button
  [app-state]
  (sab/submit-button
   (let [nr (inc (:nr @app-state))]
     (if (>= nr (count pages))
       {:class "dnext-button"}
       {:class "next-button"
        :onClick (fn [] (swap! app-state #(assoc % :page (nth pages nr) :nr nr :output nil)))}))
   "Next"))

(defn prev-button
  [app-state]
  (sab/submit-button
   (let [nr (dec (:nr @app-state))]
     (if (< nr 0)
       {:class "dprev-button"}
       {:class "prev-button"
        :onClick (fn [] (swap! app-state #(assoc % :page (nth pages nr) :nr nr :output nil)))}))
   "Prev"))

(defn command-field
  [app-state]
  (sab/text-area
   {:rows 10 :cols 80 :id "in"
    :onChange #(swap! app-state assoc-in [:page :text] (.. % -target -value))}
   "cljs.in"
   (:text (:page @app-state))))

(defn paragraph
  [s]
  (apply vector :p
         (mapcat #(if (vector? %) % [%])
                 (interpose [[:br] [:br]]
                            (split s #"\|")))))

(defn run-page1
  [app-state]
  (let [{nr :nr {:keys [title desc text]} :page} @app-state]
    (sab/html [:div {:class "page"}
               [:h2 title]
               [:div {:class "desc"}
                (paragraph desc)]
               (command-field app-state)
               (eval-button app-state)
               [:br]
               [:div {:class "output"}
                (if-let [output (:output @app-state)]
                  [:pre {:id "out"} output]
                  [:pre {:id "out"} "\u00A0"])]
               [:br]
               (prev-button app-state)
               (next-button app-state)])))

(def page-data
  [[run-page1 "Initial Data" "Here is a sequence of the first 9 natural numbers" "(range 9)"]
   [run-page1
    "Initial Data"
    "A 3x3 reshape gives us a 3 row, 3 column matrix" "(reshape (array (range 9)) [3 3])"]
   [run-page1
    "Initial Data"
    "Which of the items of this matrix are members of the \"init\" set: 1 for yes, 0 for no."
    "(def init #{1 2 3 4 7})\n(emap (nbool init) (reshape (array (range 9)) [3 3]))"]
   [run-page1
    "Initial Data"
    "We'll call this boolean matrix \"r\""
    "(def r (emap (nbool init) (reshape (array (range 9)) [3 3])))"]
   [run-page1
    "Initial Data"
    "We can embed r is a slightly larger matrix: a 5x7 \"take\" of r which pads below and on the right with zeros."
    "(takeof [5 7] r)"]
   [run-page1
    "Initial Data"
    "We can center our original within this by doing the -2 rotation about a vertical axis (the second, or \"1\" dimension of the matrix)"
    "(rotate (takeof [5 7] r) 1 -2)"]
   [run-page1
    "Initial Data"
    "... and a -1 rotation about a horizontal axis (the first, or 0, dimension of the matrix)"
    "(rotate (rotate (takeof [5 7] r) 1 -2) 0 -1)"]
   [run-page1
    "Initial Data"
    "We'll call this larger matrix \"R\""
    "(def R (rotate (rotate (takeof [5 7] r) 1 -2) 0 -1))"]
   [run-page1 "Processing Data" "Here is a vector of 3 matrices" "[R R R]"]
   [run-page1
    "Processing Data"
    "We can see this more clearly if we use a library function which draws boxes around sub-arrays"
    "(disp [R R R])"]
   [run-page1
    "Processing Data" "mapping rotate in the second (or \"1\") dimension onto [1 0 -1] and the matrices distributes the rotation onto corresponding items in the first and second argument vectors. So we see our original \"0 rotation\" in the center, and a 1 and -1 rotation on either side"
    "(disp (map #(rotate %2 1 %1) [1 0 -1] [R R R]))"]
   [run-page1
    "Processing Data"
    "Another approach is to create a sequence of vectors for each rotation using a \"for\" loop. So we get the same result"
    "(disp (for [x [1 0 -1]] (rotate R 1 x)))"]
   [run-page1
    "Processing Data"
    "By using a \"for\" loop we can easily expand the term to rotate each of these matrices in the first (or \"0\") dimension. This creates a full outer-product of all rotations, which have been flattened into a single sequence of matrices."
    "(disp (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))"]
   [run-page1 "Processing Data" "And if we sum the sequence we see a \"neighbor count\" for each cell in our original matrix R" "(disp (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y))))"]
   [run-page1
    "Processing Data"
    "The rules of Conway's Game of Life are that you have a 1 in the following generation if the neighbor count including itself is 3, or if the neighbor count including itself is a 4 and the original cell was occupied.|So first, find the 3s and 4s.|The =x function creates a function on a matrix that will return a boolean matrix where cells are 1 when equal to the given scalar, and 0 otherwise. When the =x function is built on the neighbor-count matrix, it can then be mapped to the values 3 and 4"
    "(disp (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))"]
   [run-page1
    "Processing Data"
    "And we're interested in any 3, and a 4 corresponding to an occupied cell, which is just our original matrix R. So we AND those masks to the 3s and 4s matrices"
    "(disp (map and* [1 R] (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))"]
   [run-page1
    "Processing Data"
    "And both of these matrices contributes to the next generation. So if we OR them together"
    "(disp (apply or* (map and* [1 R] (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))))"]
   [run-page1
    "Processing Data"
    "...and disclose the result we see a simple matrix for the next generation of the Game of Life"
    "(apply or* (map and* [1 R] (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))"]
   [run-page1
    "Building the Function"
    "So here we have a single array expression for the next generation. You'll notice that the size of the matrix R is not specified anywhere, so that the expression is applicable to a matrix of any size.|Let's extract it as a function, by replacing all occurances of R with a formal parameter o, and the function \"life\""
    "(defn life [o]\n  (apply or*\n         (map and*\n              [1 o]\n              (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate o 1 x) 0 y)))) [3 4]))))"]
   [run-page1
    "Building the Function"
    "Test it.|There are the first 3 generations"
    "(disp [R (life R) (life (life R))])"]
   [run-page1
    "Initializing"
    "Next, let's make a larger arena still, so RR is the 15x35 take of R, rotated by 10,20"
    "(def RR (rotate (rotate (takeof [15 35] R) 1 20) 0 10))"]
   ; [run-page1 "Processing Data" "" ""]
   ; [run-page1 "Processing Data" "" ""]
   ; [run-page1 "Processing Data" "" ""]
   ])

;; initialize the page data
(def pages (map (fn [[f title desc text]]
                  {:fn f
                   :title title
                   :desc desc
                   :text text})
                page-data))
