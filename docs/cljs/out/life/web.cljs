(ns life.web
  (:require [react-dom]
            [life.page :as page]))

(defonce app-state (atom {:nr 0 :page (first page/pages) :eval false}))

(defn render! [state]
  (let [page-fn (:fn (:page @state))]
    (.render js/ReactDOM
             (page-fn state)
             (.getElementById js/document "app"))))

(add-watch app-state :on-change (fn [_ _ _ _] (render! app-state)))

(render! app-state)

