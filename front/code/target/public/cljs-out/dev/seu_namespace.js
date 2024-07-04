// Compiled by ClojureScript 1.11.54 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('seu_namespace');
goog.require('cljs.core');
seu_namespace.node$module$axios = require('axios');
seu_namespace.node$module$react = require('react');
seu_namespace.node$module$react_dom = require('react-dom');
seu_namespace.e = seu_namespace.node$module$react.createElement;
seu_namespace.renderData = (function seu_namespace$renderData(data){
var container = seu_namespace.e.call(null,"h1",null,data);
var dom_container = document.querySelector("#container");
return seu_namespace.node$module$react_dom.render(container,dom_container);
});
seu_namespace.node$module$axios.get("http://localhost:8000/produtos").then((function (p1__9582_SHARP_){
return seu_namespace.renderData.call(null,p1__9582_SHARP_.data);
}));

//# sourceMappingURL=seu_namespace.js.map
