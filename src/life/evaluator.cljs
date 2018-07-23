(ns life.evaluator
  (:refer-clojure :exclude [array])
  (:require [cljs.js]
            [clojure.core.matrix]
            [life.matrix]
            [life.display])
  (:require-macros [life.macros :as macros]))

(def init-forms
  ["(def reshape clojure.core.matrix/reshape)"
   "(def array clojure.core.matrix/array)"
   "(def emap clojure.core.matrix/emap)"
   "(def nbool life.matrix/nbool)"
   "(def takeof life.matrix/takeof)"
   "(def rotate clojure.core.matrix/rotate)"
   "(def disp life.display/disp)"
   "(def =x life.matrix/=x)"
   "(def and* life.matrix/and*)"
   "(def add clojure.core.matrix/add)"
   "(def or* life.matrix/or*)"
   ])

(def compiler-state (cljs.js/empty-state))

(let [init (atom false)]
  (defn read-eval
    [s]
    (let [x (atom nil)
          call-eval (fn [text]
                      (cljs.js/eval-str compiler-state text nil
                                        {:eval cljs.js/js-eval}
                        #(reset! x (:value %))))]
      (when-not @init
        (doseq [f init-forms] (call-eval f))
        (reset! init true))
      (call-eval s)
      (deref x))))
