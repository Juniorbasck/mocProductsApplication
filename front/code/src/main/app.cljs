(ns main.app
  (:require [axios]
            [react]
            [react-dom]))

;; Definindo o elemento de React
(def e react/createElement)

;; Função para renderizar os dados no container
(defn renderData [produtos]
  ;; Log dos produtos recebidos
  (js/console.log "Renderizando produtos:" produtos)

  ;; Criando elementos para cada produto com estilo de card
  (let [produto-elements (map-indexed (fn [idx produto]
                                        (e "div" #js {:key idx :className "card" :style #js {:border "1px solid #ddd"
                                                                                             :borderRadius "5px"
                                                                                             :padding "15px"
                                                                                             :margin "10px"
                                                                                             :boxShadow "0 2px 4px rgba(0,0,0,0.1)"}}
                                           (e "img" #js {:src "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                                         :style #js {:width "100%" :borderRadius "5px"}
                                                         :alt "Imagem do produto"})
                                           (e "div" #js {:style #js {:textAlign "center" :marginTop "10px"}}
                                              (e "h5" nil produto))))
                                      produtos)]
    ;; Selecionando o container pelo ID
    (let [dom-container (.. js/document (querySelector "#container"))]
      ;; Renderizando os elementos dentro do container
      (react-dom/render (e "div" #js {:style #js {:display "flex" :flexWrap "wrap"}} produto-elements) dom-container))))

;; Função para buscar produtos e renderizar os dados
(defn fetch-and-render-products []
  (-> (.. axios (get "http://localhost:8000/produtos"))
      (.then #(renderData (.-data %)))
      (.catch #(js/console.error "Erro ao buscar produtos:" %))))

;; Executar a função para buscar e renderizar os produtos
(fetch-and-render-products)
