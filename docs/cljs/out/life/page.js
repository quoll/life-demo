// Compiled by ClojureScript 1.10.339 {}
goog.provide('life.page');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('life.evaluator');
goog.require('goog.string.StringBuffer');

life.page.height = (15);
life.page.width = (35);
life.page.sq = (25);
life.page.pp = (function life$page$pp(o){
var sb = (new goog.string.StringBuffer());
cljs.pprint.pprint.call(null,o,(new cljs.core.StringBufferWriter(sb)));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
});
life.page.stop_timer = (function life$page$stop_timer(app_state){
var timer = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
clearInterval(timer);

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"timer","timer",-1266967739));
});
life.page.next_life = (function life$page$next_life(app_state){
return (function (){
var map__23501 = cljs.core.deref.call(null,app_state);
var map__23501__$1 = ((((!((map__23501 == null)))?(((((map__23501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23501):map__23501);
var stored = cljs.core.get.call(null,map__23501__$1,new cljs.core.Keyword(null,"stored","stored",-892842620));
var gen = cljs.core.get.call(null,map__23501__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var life__$1 = new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(stored);
var next_gen = life__$1.call(null,gen);
if(cljs.core._EQ_.call(null,gen,next_gen)){
return life.page.stop_timer.call(null,app_state);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"gen","gen",142575302),next_gen);
}
});
});
life.page.start_timer = (function life$page$start_timer(app_state){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),setInterval(life.page.next_life.call(null,app_state),(125)));
});
life.page.do_eval = (function life$page$do_eval(app_state,text){
if(cljs.core.truth_(text)){
try{var result = life.evaluator.read_eval.call(null,text);
var op = ((cljs.core.vector_QMARK_.call(null,result))?life.page.pp.call(null,result):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join(''));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"output","output",-1105869043),op,new cljs.core.Keyword(null,"raw","raw",1604651272),result,new cljs.core.Keyword(null,"err","err",-2089457205),null);

var temp__5455__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"stored","stored",-892842620)], null));
if(cljs.core.truth_(temp__5455__auto__)){
var stored = temp__5455__auto__;
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stored","stored",-892842620),stored], null),result);
} else {
return null;
}
}catch (e23503){var e = e23503;
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"raw","raw",1604651272),null,new cljs.core.Keyword(null,"err","err",-2089457205),e);
}} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"output","output",-1105869043),"",new cljs.core.Keyword(null,"raw","raw",1604651272),null,new cljs.core.Keyword(null,"err","err",-2089457205),null);
}
});
life.page.change_page = (function life$page$change_page(app_state,nr){
cljs.core.swap_BANG_.call(null,app_state,(function (p1__23504_SHARP_){
return cljs.core.assoc.call(null,p1__23504_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.nth.call(null,life.page.pages,nr),new cljs.core.Keyword(null,"nr","nr",289850932),nr,new cljs.core.Keyword(null,"output","output",-1105869043),null);
}));

if(cljs.core._EQ_.call(null,nr,(cljs.core.count.call(null,life.page.pages) - (1)))){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stored","stored",-892842620),new cljs.core.Keyword(null,"RR","RR",-1849589574)], null)));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
return life.page.do_eval.call(null,app_state,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"text","text",-1790561697)], null)));
} else {
return null;
}
});
life.page.eval_button = (function life$page$eval_button(app_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),sablono.core.submit_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"eval-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var text_elt = document.getElementById("in");
var text = text_elt.value;
return life.page.do_eval.call(null,app_state,text);
})], null),"Eval")], null);
});
life.page.prev_stop_button = (function life$page$prev_stop_button(app_state){
return sablono.core.submit_button.call(null,(function (){var nr = (new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)) - (1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"prev-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (nr){
return (function (){
life.page.stop_timer.call(null,app_state);

return life.page.change_page.call(null,app_state,nr);
});})(nr))
], null);
})(),"Prev");
});
life.page.run_button = (function life$page$run_button(app_state){
return sablono.core.submit_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"eval-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
return life.page.stop_timer.call(null,app_state);
} else {
return life.page.start_timer.call(null,app_state);
}
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))?"Stop":"Run "));
});
life.page.next_button = (function life$page$next_button(app_state){
return sablono.core.submit_button.call(null,(function (){var nr = (new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)) + (1));
if((nr >= cljs.core.count.call(null,life.page.pages))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dnext-button"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"next-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (nr){
return (function (){
return life.page.change_page.call(null,app_state,nr);
});})(nr))
], null);
}
})(),"Next");
});
life.page.prev_button = (function life$page$prev_button(app_state){
return sablono.core.submit_button.call(null,(function (){var nr = (new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)) - (1));
if((nr < (0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dprev-button"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"prev-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (nr){
return (function (){
return life.page.change_page.call(null,app_state,nr);
});})(nr))
], null);
}
})(),"Prev");
});
life.page.command_field = (function life$page$command_field(app_state){
return sablono.core.text_area.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"cols","cols",-1914801295),(98),new cljs.core.Keyword(null,"id","id",-1388402092),"in",new cljs.core.Keyword(null,"class","class",-2030961996),"rw",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__23505_SHARP_){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"text","text",-1790561697)], null),p1__23505_SHARP_.target.value);
})], null),"cljs.in",new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))));
});
life.page.eval_check = (function life$page$eval_check(app_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"eval-block"], null),sablono.core.check_box.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"eval",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__23506_SHARP_){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"eval","eval",-1103567905),p1__23506_SHARP_.target.checked);
})], null),"eval"),sablono.core.label.call(null,"eval-label","eval automatically")], null);
});
life.page.field = (function life$page$field(app_state){
var pixel_width = (life.page.sq * life.page.width);
var pixel_height = (life.page.sq * life.page.height);
var frame = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((2) + pixel_width),new cljs.core.Keyword(null,"height","height",1025178622),((2) + pixel_height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(pixel_width + (1)),new cljs.core.Keyword(null,"height","height",1025178622),(pixel_height + (1)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null)], null)], null);
var raw = new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
if(cljs.core.truth_((function (){var and__3938__auto__ = raw;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.vector_QMARK_.call(null,raw);
} else {
return and__3938__auto__;
}
})())){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,raw))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,frame,raw));
} else {
return cljs.core.conj.call(null,frame,raw);
}
} else {
return frame;
}
});
life.page.dynamic_field = (function life$page$dynamic_field(app_state){
var pixel_width = (life.page.sq * life.page.width);
var pixel_height = (life.page.sq * life.page.height);
var frame = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((2) + pixel_width),new cljs.core.Keyword(null,"height","height",1025178622),((2) + pixel_height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(pixel_width + (1)),new cljs.core.Keyword(null,"height","height",1025178622),(pixel_height + (1)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null)], null)], null);
var stored = new cljs.core.Keyword(null,"stored","stored",-892842620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var gen = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"RR","RR",-1849589574).cljs$core$IFn$_invoke$arity$1(stored);
}
})();
var draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(stored);
var user_struct = (function (){var and__3938__auto__ = draw;
if(cljs.core.truth_(and__3938__auto__)){
return draw.call(null,gen);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(user_struct)){
try{if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,user_struct))){
return cljs.core.vec.call(null,cljs.core.concat.call(null,frame,user_struct));
} else {
return cljs.core.conj.call(null,frame,user_struct);
}
}catch (e23507){var _ = e23507;
return frame;
}} else {
return frame;
}
});
life.page.paragraph = (function life$page$paragraph(s){
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"p","p",151049309),cljs.core.mapcat.call(null,(function (p1__23508_SHARP_){
if(cljs.core.vector_QMARK_.call(null,p1__23508_SHARP_)){
return p1__23508_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23508_SHARP_], null);
}
}),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),clojure.string.split.call(null,s,/\|/))));
});
life.page.render_page = (function life$page$render_page(app_state,page_type){
var map__23509 = cljs.core.deref.call(null,app_state);
var map__23509__$1 = ((((!((map__23509 == null)))?(((((map__23509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23509):map__23509);
var nr = cljs.core.get.call(null,map__23509__$1,new cljs.core.Keyword(null,"nr","nr",289850932));
var map__23510 = cljs.core.get.call(null,map__23509__$1,new cljs.core.Keyword(null,"page","page",849072397));
var map__23510__$1 = ((((!((map__23510 == null)))?(((((map__23510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23510):map__23510);
var title = cljs.core.get.call(null,map__23510__$1,new cljs.core.Keyword(null,"title","title",636505583));
var desc = cljs.core.get.call(null,map__23510__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var text = cljs.core.get.call(null,map__23510__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("div",({"className": "page"}),sablono.interpreter.interpret.call(null,life.page.prev_button.call(null,app_state)),sablono.interpreter.interpret.call(null,life.page.next_button.call(null,app_state)),React.createElement("br",null),(function (){var attrs23515 = title;
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs23515))?sablono.interpreter.attributes.call(null,attrs23515):null),((cljs.core.map_QMARK_.call(null,attrs23515))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23515)], null)));
})(),React.createElement("div",({"className": "desc"}),sablono.interpreter.interpret.call(null,life.page.paragraph.call(null,desc))),sablono.interpreter.interpret.call(null,life.page.command_field.call(null,app_state)),sablono.interpreter.interpret.call(null,life.page.eval_button.call(null,app_state)),React.createElement("div",({"className": "output"}),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),page_type))?sablono.interpreter.interpret.call(null,(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
if(cljs.core.truth_(temp__5455__auto__)){
var output = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"out"], null),output], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"out"], null),"\u00A0"], null);
}
})()):sablono.interpreter.interpret.call(null,life.page.field.call(null,app_state)))),React.createElement("br",null),sablono.interpreter.interpret.call(null,life.page.eval_check.call(null,app_state)),React.createElement("br",null));
});
life.page.run_page1 = (function life$page$run_page1(app_state){
return life.page.render_page.call(null,app_state,new cljs.core.Keyword(null,"text","text",-1790561697));
});
life.page.run_page2 = (function life$page$run_page2(app_state){
return life.page.render_page.call(null,app_state,new cljs.core.Keyword(null,"graphics","graphics",-2079995979));
});
life.page.run_pagex = (function life$page$run_pagex(app_state){
var map__23520 = cljs.core.deref.call(null,app_state);
var map__23520__$1 = ((((!((map__23520 == null)))?(((((map__23520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23520):map__23520);
var nr = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"nr","nr",289850932));
var map__23521 = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"page","page",849072397));
var map__23521__$1 = ((((!((map__23521 == null)))?(((((map__23521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521):map__23521);
var title = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"title","title",636505583));
var desc = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var text = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("div",({"className": "page"}),sablono.interpreter.interpret.call(null,life.page.prev_stop_button.call(null,app_state)),sablono.interpreter.interpret.call(null,life.page.next_button.call(null,app_state)),React.createElement("br",null),(function (){var attrs23526 = title;
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs23526))?sablono.interpreter.attributes.call(null,attrs23526):null),((cljs.core.map_QMARK_.call(null,attrs23526))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23526)], null)));
})(),React.createElement("div",({"className": "desc"}),sablono.interpreter.interpret.call(null,life.page.paragraph.call(null,desc))),sablono.interpreter.interpret.call(null,sablono.core.text_area.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"cols","cols",-1914801295),(98),new cljs.core.Keyword(null,"id","id",-1388402092),"ro",new cljs.core.Keyword(null,"class","class",-2030961996),"ro"], null),"cljs.ro","(js/setInterval (next-life app-state) 125)")),sablono.interpreter.interpret.call(null,life.page.run_button.call(null,app_state)),React.createElement("div",({"className": "output"}),sablono.interpreter.interpret.call(null,life.page.dynamic_field.call(null,app_state))),React.createElement("br",null));
});
life.page.page_data = new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","Here is a sequence of the first 9 natural numbers","(range 9)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","A 3x3 reshape gives us a 3 row, 3 column matrix","(reshape (array (range 9)) [3 3])"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","Which of the items of this matrix are members of the \"init\" set: 1 for yes, 0 for no.","(def init #{1 2 3 4 7})\n(emap (nbool init) (reshape (array (range 9)) [3 3]))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","We'll call this boolean matrix \"r\"","(def r (emap (nbool init) (reshape (array (range 9)) [3 3])))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","We can embed r is a slightly larger matrix: a 5x7 \"take\" of r which pads below and on the right with zeros.","(takeof [5 7] r)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","We can center our original within this by doing the -2 rotation about a vertical axis (the second, or \"1\" dimension of the matrix)","(rotate (takeof [5 7] r) 1 -2)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","... and a -1 rotation about a horizontal axis (the first, or 0, dimension of the matrix)","(rotate (rotate (takeof [5 7] r) 1 -2) 0 -1)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initial Data","We'll call this larger matrix \"R\"","(def R (rotate (rotate (takeof [5 7] r) 1 -2) 0 -1))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","Here is a vector of 3 matrices","[R R R]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","We can see this more clearly if we use a library function which draws boxes around sub-arrays","(disp [R R R])"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","mapping rotate in the second (or \"1\") dimension onto [1 0 -1] and the matrices distributes the rotation onto corresponding items in the first and second argument vectors. So we see our original \"0 rotation\" in the center, and a 1 and -1 rotation on either side","(disp (map #(rotate %2 1 %1) [1 0 -1] [R R R]))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","Another approach is to create a sequence of vectors for each rotation using a \"for\" loop. So we get the same result","(disp (for [x [1 0 -1]] (rotate R 1 x)))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","By using a \"for\" loop we can easily expand the term to rotate each of these matrices in the first (or \"0\") dimension. This creates a full outer-product of all rotations, which have been flattened into a single sequence of matrices.","(disp (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","And if we sum the sequence we see a \"neighbor count\" for each cell in our original matrix R","(disp (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y))))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","The rules of Conway's Game of Life are that you have a 1 in the following generation if the neighbor count including itself is 3, or if the neighbor count including itself is a 4 and the original cell was occupied.|So first, find the 3s and 4s.|The =x function creates a function on a matrix that will return a boolean matrix where cells are 1 when equal to the given scalar, and 0 otherwise. When the =x function is built on the neighbor-count matrix, it can then be mapped to the values 3 and 4","(disp (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","And we're interested in any 3, and a 4 corresponding to an occupied cell, which is just our original matrix R. So we AND those masks to the 3s and 4s matrices, and with the longer lines, we will start using some formatting with indentation","(disp\n  (map and*\n       [1 R]\n       (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","And both of these matrices contributes to the next generation. So if we OR them together...","(disp\n  (apply or*\n       (map and*\n            [1 R]\n            (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Processing Data","...and disclose the result we see a simple matrix for the next generation of the Game of Life","(apply or*\n       (map and*\n            [1 R]\n            (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Building the Function","So here we have a single array expression for the next generation. You'll notice that the size of the matrix R is not specified anywhere, so that the expression is applicable to a matrix of any size.|Let's extract it as a function, by replacing all occurances of R with a formal parameter o, and the function \"life\"","(defn life [o]\n  (apply or*\n         (map and*\n              [1 o]\n              (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate o 1 x) 0 y)))) [3 4]))))",new cljs.core.Keyword(null,"life","life",939004719)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Building the Function","Test it.|There are the first 3 generations","(disp [R (life R) (life (life R))])"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initializing","Next, let's make a larger arena still, so RR is the 15x35 take of R, rotated by [10,20]","(def RR (rotate (rotate (takeof [15 35] R) 1 20) 0 10))",new cljs.core.Keyword(null,"RR","RR",-1849589574)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Initializing","This is difficult to see, so let's display it","(disp RR)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Drawing","We want to draw this data, so we will start with a SVG field. This is done by rendering Clojure vector data stuctures. We want each cell to be 25 wide, so set the width and height. Let's draw a line diagonally through it.","(def width (* 25 35))\n(def height (* 25 15))\n[:svg {:width width :height height :x 1 :y 1}\n  [:line {:x1 0 :y1 0 :x2 width :y2 height :style {:stroke \"rgb(255,0,0)\" :stroke-width 2}}]]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page2,"Drawing","Now render this SVG","[:svg {:width width :height height :x 1 :y 1}\n  [:line {:x1 0 :y1 0 :x2 width :y2 height :style {:stroke \"rgb(255,0,0)\" :stroke-width 2}}]]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page2,"Drawing the Grid","So now let's render the squares we need to make a grid. We will color them according to even/odd. Note that concatenating vectors is a lazy sequence, but the result must be a vector. The resulting code it a little long, so scroll down in the box to see it all","(vec (concat [:svg {:width width :height height :x 1 :y 1}]\n             (for [x (range 35) y (range 15)]\n               [:rect {:x (* x 25) :y (* y 25) :width 25 :height 25\n                :style {:fill (if (even? (+ x y)) \"white\" \"blue\")\n                        :stroke \"white\"\n                        :stroke-width 1}}])))"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page2,"Drawing the Grid","We can now print these squares based on RR. Matrices are indexed first by y, then by x","(vec (concat [:svg {:width width :height height :x 1 :y 1}]\n             (for [x (range 35) y (range 15)]\n               [:rect {:x (* x 25) :y (* y 25) :width 25 :height 25\n                :style {:fill (if (zero? (mget RR y x)) \"white\" \"blue\")\n                        :stroke \"white\"\n                        :stroke-width 1}}])))"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_page1,"Draw Function","Based on this code, we can create a draw function for any matrix that is [15,35]. This is a library function, so we can just call it from in here","(defn draw [m]\n(vec (concat [:svg {:width width :height height :x 1 :y 1}]\n               (for [x (range 35) y (range 15)]\n                 [:rect {:x (* x 25) :y (* y 25) :width 25 :height 25\n                  :style {:fill (if (zero? (mget m y x)) \"white\" \"blue\")\n                          :stroke \"white\"\n                          :stroke-width 1}}]))))",new cljs.core.Keyword(null,"draw","draw",1358331674)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [life.page.run_pagex,"Conway's Game of Life","We want the page to be modified to dynamically move to successive generations. To do this, we will put the current generation of data into the page \"application state\", and introduce a timer that will execute the \"next-life\" every 1/8 of a second. This uses \"life\" to update the application state from one generation to the next. The \"draw\" function will be called to render the data.|The code shown here is how the timer will be initialized, but because it is part of the page, it cannot be modified",""], null)], null);
life.page.pages = cljs.core.map.call(null,(function (p__23529){
var vec__23530 = p__23529;
var f = cljs.core.nth.call(null,vec__23530,(0),null);
var title = cljs.core.nth.call(null,vec__23530,(1),null);
var desc = cljs.core.nth.call(null,vec__23530,(2),null);
var text = cljs.core.nth.call(null,vec__23530,(3),null);
var stored = cljs.core.nth.call(null,vec__23530,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"desc","desc",2093485764),desc,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"stored","stored",-892842620),stored], null);
}),life.page.page_data);

//# sourceMappingURL=page.js.map
