(ns seu-namespace
  (:require [axios :as axios]
            [react :as react]
            [react-dom :as react-dom]))

(def e react/createElement)

(defn renderData [data]
  (let [container (e "h1" nil data)
        dom-container (.. js/document (querySelector "#container"))]
    (react-dom/render container dom-container)))

(-> (.. axios (get "http://localhost:8000/produtos"))
    (.then #(renderData (.-data %))))
