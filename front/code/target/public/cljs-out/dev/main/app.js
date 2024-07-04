// Compiled by ClojureScript 1.11.54 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('main.app');
goog.require('cljs.core');
main.app.node$module$axios = require('axios');
main.app.node$module$react = require('react');
main.app.node$module$react_dom = require('react-dom');
main.app.e = main.app.node$module$react.createElement;
main.app.renderData = (function main$app$renderData(produtos){
console.log("Renderizando produtos:",produtos);

var produto_elements = cljs.core.map_indexed.call(null,(function (idx,produto){
return main.app.e.call(null,"div",({"key": idx, "className": "card", "style": ({"border": "1px solid #ddd", "borderRadius": "5px", "padding": "15px", "margin": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"})}),main.app.e.call(null,"img",({"src": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", "style": ({"width": "100%", "borderRadius": "5px"}), "alt": "Imagem do produto"})),main.app.e.call(null,"div",({"style": ({"textAlign": "center", "marginTop": "10px"})}),main.app.e.call(null,"h5",null,produto)));
}),produtos);
var dom_container = document.querySelector("#container");
return main.app.node$module$react_dom.render(main.app.e.call(null,"div",({"style": ({"display": "flex", "flexWrap": "wrap"})}),produto_elements),dom_container);
});
main.app.fetch_and_render_products = (function main$app$fetch_and_render_products(){
return main.app.node$module$axios.get("http://localhost:8000/produtos").then((function (p1__9280_SHARP_){
return main.app.renderData.call(null,p1__9280_SHARP_.data);
})).catch((function (p1__9281_SHARP_){
return console.error("Erro ao buscar produtos:",p1__9281_SHARP_);
}));
});
main.app.fetch_and_render_products.call(null);

//# sourceMappingURL=app.js.map
