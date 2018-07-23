(ns life.matrix
  "Implements functionality to duplicate APL operations used in Life"
  (:require [clojure.core.matrix :refer [shape compute-matrix mget
                                         emap add array]]))

(defn nbool
  "Create a function from a boolean function, mapping a truthy value to 1 or 0.
   e.g. ((nbool not) false) => 1
        ((nbool not) true) => 0"
  [f] (fn [v] (if (f v) 1 0)))

(defn takeof
  "Creates a matrix of a given shape that contains a given matrix 'a'.
   If the new matrix is smaller than the source matrix, then the source
   matrix is truncated.
   If the new matrix is larger than the source matrix in any dimension,
   then it is padded out using the 'default' value, or 0 if not provided."
  ([sh a] (takeof sh a 0))
  ([sh a default]
   (let [src-shape (shape a)]
     (compute-matrix sh
                     (fn [& idx]
                       (if (every? identity (map < idx src-shape))
                         (apply mget a idx)
                         default))))))

(defn and*
  "Performs an element-wise boolean AND operation on matrices
   using numerical boolean values (0/1)"
  [a b] (emap (nbool #(= 2 %)) (add a b)))

(defn or*
  "Performs an element-wise boolean OR operation on matrices
   using numerical boolean values (0/1)"
  [a b] (emap (nbool #(not (zero? %))) (add a b)))

(defn =x
  "Creates a function from a matrix, that when a applied to a scalar will
   return a boolean matrix where every matrix element that matches the
   scalar will be true (1) in the result.
   e.g. ((=x [1 2 3]) 2) => [0 1 0]
        ((=x [1 2 3]) 3) => [0 0 1]"
  [a]
  (fn [x] (emap (nbool #(= x %)) a)))

