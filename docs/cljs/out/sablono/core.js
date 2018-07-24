// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22221__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22218 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__22219 = cljs.core.seq.call(null,vec__22218);
var first__22220 = cljs.core.first.call(null,seq__22219);
var seq__22219__$1 = cljs.core.next.call(null,seq__22219);
var tag = first__22220;
var body = seq__22219__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22222__i = 0, G__22222__a = new Array(arguments.length -  0);
while (G__22222__i < G__22222__a.length) {G__22222__a[G__22222__i] = arguments[G__22222__i + 0]; ++G__22222__i;}
  args = new cljs.core.IndexedSeq(G__22222__a,0,null);
} 
return G__22221__delegate.call(this,args);};
G__22221.cljs$lang$maxFixedArity = 0;
G__22221.cljs$lang$applyTo = (function (arglist__22223){
var args = cljs.core.seq(arglist__22223);
return G__22221__delegate(args);
});
G__22221.cljs$core$IFn$_invoke$arity$variadic = G__22221__delegate;
return G__22221;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__22224(s__22225){
return (new cljs.core.LazySeq(null,(function (){
var s__22225__$1 = s__22225;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22225__$1);
if(temp__5457__auto__){
var s__22225__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22225__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__22225__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__22227 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__22226 = (0);
while(true){
if((i__22226 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__22226);
cljs.core.chunk_append.call(null,b__22227,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22228 = (i__22226 + (1));
i__22226 = G__22228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22227),sablono$core$update_arglists_$_iter__22224.call(null,cljs.core.chunk_rest.call(null,s__22225__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22227),null);
}
} else {
var args = cljs.core.first.call(null,s__22225__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22224.call(null,cljs.core.rest.call(null,s__22225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22234 = arguments.length;
var i__4532__auto___22235 = (0);
while(true){
if((i__4532__auto___22235 < len__4531__auto___22234)){
args__4534__auto__.push((arguments[i__4532__auto___22235]));

var G__22236 = (i__4532__auto___22235 + (1));
i__4532__auto___22235 = G__22236;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__22230(s__22231){
return (new cljs.core.LazySeq(null,(function (){
var s__22231__$1 = s__22231;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22231__$1);
if(temp__5457__auto__){
var s__22231__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22231__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__22231__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__22233 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__22232 = (0);
while(true){
if((i__22232 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__22232);
cljs.core.chunk_append.call(null,b__22233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22237 = (i__22232 + (1));
i__22232 = G__22237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22233),sablono$core$iter__22230.call(null,cljs.core.chunk_rest.call(null,s__22231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22233),null);
}
} else {
var style = cljs.core.first.call(null,s__22231__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22230.call(null,cljs.core.rest.call(null,s__22231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq22229){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22229));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to22238 = (function sablono$core$link_to22238(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22241 = arguments.length;
var i__4532__auto___22242 = (0);
while(true){
if((i__4532__auto___22242 < len__4531__auto___22241)){
args__4534__auto__.push((arguments[i__4532__auto___22242]));

var G__22243 = (i__4532__auto___22242 + (1));
i__4532__auto___22242 = G__22243;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to22238.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to22238.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to22238.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to22238.cljs$lang$applyTo = (function (seq22239){
var G__22240 = cljs.core.first.call(null,seq22239);
var seq22239__$1 = cljs.core.next.call(null,seq22239);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22240,seq22239__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22238);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22244 = (function sablono$core$mail_to22244(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22251 = arguments.length;
var i__4532__auto___22252 = (0);
while(true){
if((i__4532__auto___22252 < len__4531__auto___22251)){
args__4534__auto__.push((arguments[i__4532__auto___22252]));

var G__22253 = (i__4532__auto___22252 + (1));
i__4532__auto___22252 = G__22253;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to22244.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to22244.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22247){
var vec__22248 = p__22247;
var content = cljs.core.nth.call(null,vec__22248,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22244.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to22244.cljs$lang$applyTo = (function (seq22245){
var G__22246 = cljs.core.first.call(null,seq22245);
var seq22245__$1 = cljs.core.next.call(null,seq22245);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22246,seq22245__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22244);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22254 = (function sablono$core$unordered_list22254(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list22254_$_iter__22255(s__22256){
return (new cljs.core.LazySeq(null,(function (){
var s__22256__$1 = s__22256;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22256__$1);
if(temp__5457__auto__){
var s__22256__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22256__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__22256__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__22258 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__22257 = (0);
while(true){
if((i__22257 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__22257);
cljs.core.chunk_append.call(null,b__22258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22259 = (i__22257 + (1));
i__22257 = G__22259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22258),sablono$core$unordered_list22254_$_iter__22255.call(null,cljs.core.chunk_rest.call(null,s__22256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22258),null);
}
} else {
var x = cljs.core.first.call(null,s__22256__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22254_$_iter__22255.call(null,cljs.core.rest.call(null,s__22256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22254);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22260 = (function sablono$core$ordered_list22260(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list22260_$_iter__22261(s__22262){
return (new cljs.core.LazySeq(null,(function (){
var s__22262__$1 = s__22262;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22262__$1);
if(temp__5457__auto__){
var s__22262__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22262__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__22262__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__22264 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__22263 = (0);
while(true){
if((i__22263 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__22263);
cljs.core.chunk_append.call(null,b__22264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22265 = (i__22263 + (1));
i__22263 = G__22265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22264),sablono$core$ordered_list22260_$_iter__22261.call(null,cljs.core.chunk_rest.call(null,s__22262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22264),null);
}
} else {
var x = cljs.core.first.call(null,s__22262__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22260_$_iter__22261.call(null,cljs.core.rest.call(null,s__22262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22260);
/**
 * Create an image element.
 */
sablono.core.image22266 = (function sablono$core$image22266(var_args){
var G__22268 = arguments.length;
switch (G__22268) {
case 1:
return sablono.core.image22266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image22266.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image22266.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image22266.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22266);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22270_SHARP_,p2__22271_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22270_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22271_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22272_SHARP_,p2__22273_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22272_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22273_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__22275 = arguments.length;
switch (G__22275) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field22277 = (function sablono$core$color_field22277(var_args){
var G__22279 = arguments.length;
switch (G__22279) {
case 1:
return sablono.core.color_field22277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field22277.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22208__auto__);
});

sablono.core.color_field22277.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.color_field22277.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22277);

/**
 * Creates a date input field.
 */
sablono.core.date_field22280 = (function sablono$core$date_field22280(var_args){
var G__22282 = arguments.length;
switch (G__22282) {
case 1:
return sablono.core.date_field22280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field22280.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22208__auto__);
});

sablono.core.date_field22280.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.date_field22280.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22280);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22283 = (function sablono$core$datetime_field22283(var_args){
var G__22285 = arguments.length;
switch (G__22285) {
case 1:
return sablono.core.datetime_field22283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field22283.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22208__auto__);
});

sablono.core.datetime_field22283.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.datetime_field22283.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22283);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22286 = (function sablono$core$datetime_local_field22286(var_args){
var G__22288 = arguments.length;
switch (G__22288) {
case 1:
return sablono.core.datetime_local_field22286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field22286.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22208__auto__);
});

sablono.core.datetime_local_field22286.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.datetime_local_field22286.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22286);

/**
 * Creates a email input field.
 */
sablono.core.email_field22289 = (function sablono$core$email_field22289(var_args){
var G__22291 = arguments.length;
switch (G__22291) {
case 1:
return sablono.core.email_field22289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field22289.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22208__auto__);
});

sablono.core.email_field22289.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.email_field22289.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22289);

/**
 * Creates a file input field.
 */
sablono.core.file_field22292 = (function sablono$core$file_field22292(var_args){
var G__22294 = arguments.length;
switch (G__22294) {
case 1:
return sablono.core.file_field22292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field22292.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22208__auto__);
});

sablono.core.file_field22292.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.file_field22292.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22292);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22295 = (function sablono$core$hidden_field22295(var_args){
var G__22297 = arguments.length;
switch (G__22297) {
case 1:
return sablono.core.hidden_field22295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field22295.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22208__auto__);
});

sablono.core.hidden_field22295.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.hidden_field22295.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22295);

/**
 * Creates a month input field.
 */
sablono.core.month_field22298 = (function sablono$core$month_field22298(var_args){
var G__22300 = arguments.length;
switch (G__22300) {
case 1:
return sablono.core.month_field22298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field22298.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22208__auto__);
});

sablono.core.month_field22298.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.month_field22298.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22298);

/**
 * Creates a number input field.
 */
sablono.core.number_field22301 = (function sablono$core$number_field22301(var_args){
var G__22303 = arguments.length;
switch (G__22303) {
case 1:
return sablono.core.number_field22301.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field22301.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22208__auto__);
});

sablono.core.number_field22301.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.number_field22301.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22301);

/**
 * Creates a password input field.
 */
sablono.core.password_field22304 = (function sablono$core$password_field22304(var_args){
var G__22306 = arguments.length;
switch (G__22306) {
case 1:
return sablono.core.password_field22304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field22304.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22208__auto__);
});

sablono.core.password_field22304.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.password_field22304.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22304);

/**
 * Creates a range input field.
 */
sablono.core.range_field22307 = (function sablono$core$range_field22307(var_args){
var G__22309 = arguments.length;
switch (G__22309) {
case 1:
return sablono.core.range_field22307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field22307.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22208__auto__);
});

sablono.core.range_field22307.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.range_field22307.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22307);

/**
 * Creates a search input field.
 */
sablono.core.search_field22310 = (function sablono$core$search_field22310(var_args){
var G__22312 = arguments.length;
switch (G__22312) {
case 1:
return sablono.core.search_field22310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field22310.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22208__auto__);
});

sablono.core.search_field22310.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.search_field22310.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22310);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22313 = (function sablono$core$tel_field22313(var_args){
var G__22315 = arguments.length;
switch (G__22315) {
case 1:
return sablono.core.tel_field22313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field22313.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22208__auto__);
});

sablono.core.tel_field22313.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.tel_field22313.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22313);

/**
 * Creates a text input field.
 */
sablono.core.text_field22316 = (function sablono$core$text_field22316(var_args){
var G__22318 = arguments.length;
switch (G__22318) {
case 1:
return sablono.core.text_field22316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field22316.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22208__auto__);
});

sablono.core.text_field22316.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.text_field22316.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22316);

/**
 * Creates a time input field.
 */
sablono.core.time_field22319 = (function sablono$core$time_field22319(var_args){
var G__22321 = arguments.length;
switch (G__22321) {
case 1:
return sablono.core.time_field22319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field22319.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22208__auto__);
});

sablono.core.time_field22319.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.time_field22319.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22319);

/**
 * Creates a url input field.
 */
sablono.core.url_field22322 = (function sablono$core$url_field22322(var_args){
var G__22324 = arguments.length;
switch (G__22324) {
case 1:
return sablono.core.url_field22322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field22322.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22208__auto__);
});

sablono.core.url_field22322.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.url_field22322.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22322);

/**
 * Creates a week input field.
 */
sablono.core.week_field22325 = (function sablono$core$week_field22325(var_args){
var G__22327 = arguments.length;
switch (G__22327) {
case 1:
return sablono.core.week_field22325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field22325.cljs$core$IFn$_invoke$arity$1 = (function (name__22208__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22208__auto__);
});

sablono.core.week_field22325.cljs$core$IFn$_invoke$arity$2 = (function (name__22208__auto__,value__22209__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22208__auto__,value__22209__auto__);
});

sablono.core.week_field22325.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22325);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22345 = (function sablono$core$check_box22345(var_args){
var G__22347 = arguments.length;
switch (G__22347) {
case 1:
return sablono.core.check_box22345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22345.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box22345.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box22345.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22345.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22345.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22345);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22349 = (function sablono$core$radio_button22349(var_args){
var G__22351 = arguments.length;
switch (G__22351) {
case 1:
return sablono.core.radio_button22349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22349.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button22349.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button22349.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22349.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22349.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22349);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22353 = (function sablono$core$select_options22353(coll){
var iter__4324__auto__ = (function sablono$core$select_options22353_$_iter__22354(s__22355){
return (new cljs.core.LazySeq(null,(function (){
var s__22355__$1 = s__22355;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22355__$1);
if(temp__5457__auto__){
var s__22355__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22355__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__22355__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__22357 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__22356 = (0);
while(true){
if((i__22356 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__22356);
cljs.core.chunk_append.call(null,b__22357,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22358 = x;
var text = cljs.core.nth.call(null,vec__22358,(0),null);
var val = cljs.core.nth.call(null,vec__22358,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22358,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22353.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22364 = (i__22356 + (1));
i__22356 = G__22364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22357),sablono$core$select_options22353_$_iter__22354.call(null,cljs.core.chunk_rest.call(null,s__22355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22357),null);
}
} else {
var x = cljs.core.first.call(null,s__22355__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22361 = x;
var text = cljs.core.nth.call(null,vec__22361,(0),null);
var val = cljs.core.nth.call(null,vec__22361,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22361,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22353.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22353_$_iter__22354.call(null,cljs.core.rest.call(null,s__22355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22353);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22365 = (function sablono$core$drop_down22365(var_args){
var G__22367 = arguments.length;
switch (G__22367) {
case 2:
return sablono.core.drop_down22365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22365.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down22365.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22365.call(null,name,options,null);
});

sablono.core.drop_down22365.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22365.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22365);
/**
 * Creates a text area element.
 */
sablono.core.text_area22369 = (function sablono$core$text_area22369(var_args){
var G__22371 = arguments.length;
switch (G__22371) {
case 1:
return sablono.core.text_area22369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area22369.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area22369.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area22369.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22369);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22373 = (function sablono$core$label22373(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22373);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22374 = (function sablono$core$submit_button22374(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22374);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22375 = (function sablono$core$reset_button22375(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22375);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22376 = (function sablono$core$form_to22376(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22383 = arguments.length;
var i__4532__auto___22384 = (0);
while(true){
if((i__4532__auto___22384 < len__4531__auto___22383)){
args__4534__auto__.push((arguments[i__4532__auto___22384]));

var G__22385 = (i__4532__auto___22384 + (1));
i__4532__auto___22384 = G__22385;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to22376.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to22376.cljs$core$IFn$_invoke$arity$variadic = (function (p__22379,body){
var vec__22380 = p__22379;
var method = cljs.core.nth.call(null,vec__22380,(0),null);
var action = cljs.core.nth.call(null,vec__22380,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22376.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to22376.cljs$lang$applyTo = (function (seq22377){
var G__22378 = cljs.core.first.call(null,seq22377);
var seq22377__$1 = cljs.core.next.call(null,seq22377);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22378,seq22377__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22376);

//# sourceMappingURL=core.js.map
