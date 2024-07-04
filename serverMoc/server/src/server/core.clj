(ns server.core
  (:require [com.moclojer.adapters :as adapters]
            [com.moclojer.server :as server]
            [cheshire.core :as json])
  (:gen-class))


(defn wrap-cors [response]
  (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))

(defn json-response [data]
  (-> {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (json/generate-string data)}
      wrap-cors))  

(def lista-produtos
  '("Sofá" "Geladeira" "Armario" "Mesa" "TV-200" "Prato", "Computador"))

(def *router
  "Create a router from a config map"
  (adapters/generate-routes
   [{:endpoint
     {:method "GET"
      :path "/example"
      :response (wrap-cors {:status 200
                            :headers {"Content-Type" "application/json"}
                            :body {:id 123}})}}
    {:endpoint
     {:method "GET"
      :path "/produtos"
      :response (json-response lista-produtos)}}]))

(defn -main
  "Start the server"
  [& args]
  (server/start-server! *router)
  (println "Server inicializado com rotas configuradas na porta 8000"))

