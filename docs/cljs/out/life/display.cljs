(ns life.display
  (:require [clojure.core.matrix :refer [shape slice slices dimensionality]]))

(defn strof [c l] (apply str (repeat l c)))

(defn disp-3d
  ([a] (disp-3d a true))
  ([a print-first]
   (let [[grids h w] (shape a)
         single (str (strof \- (inc (* 2 w))) "+")
         side (apply str "+" (repeat grids single))]
     (apply str
       (if print-first (str side "\n") "")
       (concat 
         (for [rn (range h)]
           (apply str
                  "|"
                  (concat
                    (for [g (slices a)]
                      (apply str (concat (for [c (slice g rn)] (str " " c))  [" |"])))
                    ["\n"])))
         [side "\n"])))))

(defn disp-4d [a]
  (let [[f & r] (slices a)]
    (apply str
      (disp-3d f)
      (map #(disp-3d % false) r))))

(defn disp [a]
  (let [d (dimensionality a)]
    (case d
      (0 1) (str a)
      2 (disp-3d [a])
      3 (disp-3d a)
      4 (disp-4d a))))

