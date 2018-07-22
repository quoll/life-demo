(ns life.page
  (:require [sablono.core :as sab]
            [cljs.js]))

(declare pages)

(defn read-eval
  [s]
  (let [x (atom nil)]
    (cljs.js/eval-str (cljs.js/empty-state)
                      s
                      nil
                      {:eval cljs.js/js-eval :source-map true :context :expr}
                      #(reset! x (:value %)))
    (deref x)))

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
                   op (pr-str result)]
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
        :onClick (fn [] (swap! app-state #(assoc % :page (nth pages nr) :nr nr)))}))
   "Next"))

(defn prev-button
  [app-state]
  (sab/submit-button
   (let [nr (dec (:nr @app-state))]
     (if (< nr 0)
       {:class "dprev-button"}
       {:class "prev-button"
        :onClick (fn [] (swap! app-state #(assoc % :page (nth pages nr) :nr nr)))}))
   "Prev"))

(defn command-field
  [app-state]
  (sab/text-area
   {:rows 10 :cols 80 :id "in"
    :onChange #(swap! app-state assoc-in [:page :text] (.. % -target -value))}
   "cljs.in"
   (:text (:page @app-state))))

(defn run-page1
  [app-state]
  (let [{nr :nr {:keys [title hdr text]} :page} @app-state]
    (sab/html [:div
               [:h2 title]
               [:p hdr]
               (command-field app-state)
               (eval-button app-state)
               [:br]
               [:div {:class "output"}
                (if-let [output (:output @app-state)]
                  [:pre {:id "out"} output]
                  [:pre {:id "out"}])]
               [:br]
               (prev-button app-state)
               (next-button app-state)])))

(def page-data
  [[run-page1 "Initial Data" "Here is a sequence of the first 9 natural numbers" "(range 9)"]
   [run-page1 "Initial Data" "A 3x3 reshape gives us a 3 row, 3 column matrix" "(reshape (array (range 9)) [3 3])"]
   ]
  )

(def pages (map (fn [[f title hdr text]]
                  {:fn f
                   :title title
                   :hdr hdr
                   :text text})
                page-data))
