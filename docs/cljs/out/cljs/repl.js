// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25959){
var map__25960 = p__25959;
var map__25960__$1 = ((((!((map__25960 == null)))?(((((map__25960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25960):map__25960);
var m = map__25960__$1;
var n = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25962_25984 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25963_25985 = null;
var count__25964_25986 = (0);
var i__25965_25987 = (0);
while(true){
if((i__25965_25987 < count__25964_25986)){
var f_25988 = cljs.core._nth.call(null,chunk__25963_25985,i__25965_25987);
cljs.core.println.call(null,"  ",f_25988);


var G__25989 = seq__25962_25984;
var G__25990 = chunk__25963_25985;
var G__25991 = count__25964_25986;
var G__25992 = (i__25965_25987 + (1));
seq__25962_25984 = G__25989;
chunk__25963_25985 = G__25990;
count__25964_25986 = G__25991;
i__25965_25987 = G__25992;
continue;
} else {
var temp__5457__auto___25993 = cljs.core.seq.call(null,seq__25962_25984);
if(temp__5457__auto___25993){
var seq__25962_25994__$1 = temp__5457__auto___25993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25962_25994__$1)){
var c__4351__auto___25995 = cljs.core.chunk_first.call(null,seq__25962_25994__$1);
var G__25996 = cljs.core.chunk_rest.call(null,seq__25962_25994__$1);
var G__25997 = c__4351__auto___25995;
var G__25998 = cljs.core.count.call(null,c__4351__auto___25995);
var G__25999 = (0);
seq__25962_25984 = G__25996;
chunk__25963_25985 = G__25997;
count__25964_25986 = G__25998;
i__25965_25987 = G__25999;
continue;
} else {
var f_26000 = cljs.core.first.call(null,seq__25962_25994__$1);
cljs.core.println.call(null,"  ",f_26000);


var G__26001 = cljs.core.next.call(null,seq__25962_25994__$1);
var G__26002 = null;
var G__26003 = (0);
var G__26004 = (0);
seq__25962_25984 = G__26001;
chunk__25963_25985 = G__26002;
count__25964_25986 = G__26003;
i__25965_25987 = G__26004;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26005 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26005);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26005)))?cljs.core.second.call(null,arglists_26005):arglists_26005));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25966_26006 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25967_26007 = null;
var count__25968_26008 = (0);
var i__25969_26009 = (0);
while(true){
if((i__25969_26009 < count__25968_26008)){
var vec__25970_26010 = cljs.core._nth.call(null,chunk__25967_26007,i__25969_26009);
var name_26011 = cljs.core.nth.call(null,vec__25970_26010,(0),null);
var map__25973_26012 = cljs.core.nth.call(null,vec__25970_26010,(1),null);
var map__25973_26013__$1 = ((((!((map__25973_26012 == null)))?(((((map__25973_26012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25973_26012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25973_26012):map__25973_26012);
var doc_26014 = cljs.core.get.call(null,map__25973_26013__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26015 = cljs.core.get.call(null,map__25973_26013__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26011);

cljs.core.println.call(null," ",arglists_26015);

if(cljs.core.truth_(doc_26014)){
cljs.core.println.call(null," ",doc_26014);
} else {
}


var G__26016 = seq__25966_26006;
var G__26017 = chunk__25967_26007;
var G__26018 = count__25968_26008;
var G__26019 = (i__25969_26009 + (1));
seq__25966_26006 = G__26016;
chunk__25967_26007 = G__26017;
count__25968_26008 = G__26018;
i__25969_26009 = G__26019;
continue;
} else {
var temp__5457__auto___26020 = cljs.core.seq.call(null,seq__25966_26006);
if(temp__5457__auto___26020){
var seq__25966_26021__$1 = temp__5457__auto___26020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25966_26021__$1)){
var c__4351__auto___26022 = cljs.core.chunk_first.call(null,seq__25966_26021__$1);
var G__26023 = cljs.core.chunk_rest.call(null,seq__25966_26021__$1);
var G__26024 = c__4351__auto___26022;
var G__26025 = cljs.core.count.call(null,c__4351__auto___26022);
var G__26026 = (0);
seq__25966_26006 = G__26023;
chunk__25967_26007 = G__26024;
count__25968_26008 = G__26025;
i__25969_26009 = G__26026;
continue;
} else {
var vec__25975_26027 = cljs.core.first.call(null,seq__25966_26021__$1);
var name_26028 = cljs.core.nth.call(null,vec__25975_26027,(0),null);
var map__25978_26029 = cljs.core.nth.call(null,vec__25975_26027,(1),null);
var map__25978_26030__$1 = ((((!((map__25978_26029 == null)))?(((((map__25978_26029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25978_26029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25978_26029):map__25978_26029);
var doc_26031 = cljs.core.get.call(null,map__25978_26030__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26032 = cljs.core.get.call(null,map__25978_26030__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26028);

cljs.core.println.call(null," ",arglists_26032);

if(cljs.core.truth_(doc_26031)){
cljs.core.println.call(null," ",doc_26031);
} else {
}


var G__26033 = cljs.core.next.call(null,seq__25966_26021__$1);
var G__26034 = null;
var G__26035 = (0);
var G__26036 = (0);
seq__25966_26006 = G__26033;
chunk__25967_26007 = G__26034;
count__25968_26008 = G__26035;
i__25969_26009 = G__26036;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__25980 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25981 = null;
var count__25982 = (0);
var i__25983 = (0);
while(true){
if((i__25983 < count__25982)){
var role = cljs.core._nth.call(null,chunk__25981,i__25983);
var temp__5457__auto___26037__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26037__$1)){
var spec_26038 = temp__5457__auto___26037__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26038));
} else {
}


var G__26039 = seq__25980;
var G__26040 = chunk__25981;
var G__26041 = count__25982;
var G__26042 = (i__25983 + (1));
seq__25980 = G__26039;
chunk__25981 = G__26040;
count__25982 = G__26041;
i__25983 = G__26042;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__25980);
if(temp__5457__auto____$1){
var seq__25980__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25980__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25980__$1);
var G__26043 = cljs.core.chunk_rest.call(null,seq__25980__$1);
var G__26044 = c__4351__auto__;
var G__26045 = cljs.core.count.call(null,c__4351__auto__);
var G__26046 = (0);
seq__25980 = G__26043;
chunk__25981 = G__26044;
count__25982 = G__26045;
i__25983 = G__26046;
continue;
} else {
var role = cljs.core.first.call(null,seq__25980__$1);
var temp__5457__auto___26047__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26047__$2)){
var spec_26048 = temp__5457__auto___26047__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26048));
} else {
}


var G__26049 = cljs.core.next.call(null,seq__25980__$1);
var G__26050 = null;
var G__26051 = (0);
var G__26052 = (0);
seq__25980 = G__26049;
chunk__25981 = G__26050;
count__25982 = G__26051;
i__25983 = G__26052;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1532458883379
