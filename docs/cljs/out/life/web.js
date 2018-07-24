// Compiled by ClojureScript 1.10.339 {}
goog.provide('life.web');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('life.page');
life.web.global$module$react_dom = goog.global["ReactDOM"];
if((typeof life !== 'undefined') && (typeof life.web !== 'undefined') && (typeof life.web.app_state !== 'undefined')){
} else {
life.web.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nr","nr",289850932),(0),new cljs.core.Keyword(null,"page","page",849072397),cljs.core.first.call(null,life.page.pages),new cljs.core.Keyword(null,"eval","eval",-1103567905),false], null));
}
life.web.render_BANG_ = (function life$web$render_BANG_(state){
var page_fn = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
return ReactDOM.render(page_fn.call(null,state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,life.web.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return life.web.render_BANG_.call(null,life.web.app_state);
}));
life.web.render_BANG_.call(null,life.web.app_state);

//# sourceMappingURL=web.js.map
