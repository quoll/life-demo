// Compiled by ClojureScript 1.10.339 {}
goog.provide('life.evaluator');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.core.matrix');
goog.require('life.matrix');
goog.require('life.display');
life.evaluator.init_forms = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(def reshape clojure.core.matrix/reshape)","(def array clojure.core.matrix/array)","(def emap clojure.core.matrix/emap)","(def nbool life.matrix/nbool)","(def takeof life.matrix/takeof)","(def rotate clojure.core.matrix/rotate)","(def disp life.display/disp)","(def =x life.matrix/=x)","(def and* life.matrix/and*)","(def add clojure.core.matrix/add)","(def or* life.matrix/or*)","(def mget clojure.core.matrix/mget)"], null);
life.evaluator.compiler_state = cljs.js.empty_state.call(null);
var init_18898 = cljs.core.atom.call(null,false);
life.evaluator.read_eval = ((function (init_18898){
return (function life$evaluator$read_eval(s){
var x = cljs.core.atom.call(null,null);
var call_eval = ((function (x,init_18898){
return (function (text){
return cljs.js.eval_str.call(null,life.evaluator.compiler_state,text,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval], null),((function (x,init_18898){
return (function (p1__18893_SHARP_){
return cljs.core.reset_BANG_.call(null,x,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__18893_SHARP_));
});})(x,init_18898))
);
});})(x,init_18898))
;
if(cljs.core.truth_(cljs.core.deref.call(null,init_18898))){
} else {
var seq__18894_18899 = cljs.core.seq.call(null,life.evaluator.init_forms);
var chunk__18895_18900 = null;
var count__18896_18901 = (0);
var i__18897_18902 = (0);
while(true){
if((i__18897_18902 < count__18896_18901)){
var f_18903 = cljs.core._nth.call(null,chunk__18895_18900,i__18897_18902);
call_eval.call(null,f_18903);


var G__18904 = seq__18894_18899;
var G__18905 = chunk__18895_18900;
var G__18906 = count__18896_18901;
var G__18907 = (i__18897_18902 + (1));
seq__18894_18899 = G__18904;
chunk__18895_18900 = G__18905;
count__18896_18901 = G__18906;
i__18897_18902 = G__18907;
continue;
} else {
var temp__5457__auto___18908 = cljs.core.seq.call(null,seq__18894_18899);
if(temp__5457__auto___18908){
var seq__18894_18909__$1 = temp__5457__auto___18908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18894_18909__$1)){
var c__4351__auto___18910 = cljs.core.chunk_first.call(null,seq__18894_18909__$1);
var G__18911 = cljs.core.chunk_rest.call(null,seq__18894_18909__$1);
var G__18912 = c__4351__auto___18910;
var G__18913 = cljs.core.count.call(null,c__4351__auto___18910);
var G__18914 = (0);
seq__18894_18899 = G__18911;
chunk__18895_18900 = G__18912;
count__18896_18901 = G__18913;
i__18897_18902 = G__18914;
continue;
} else {
var f_18915 = cljs.core.first.call(null,seq__18894_18909__$1);
call_eval.call(null,f_18915);


var G__18916 = cljs.core.next.call(null,seq__18894_18909__$1);
var G__18917 = null;
var G__18918 = (0);
var G__18919 = (0);
seq__18894_18899 = G__18916;
chunk__18895_18900 = G__18917;
count__18896_18901 = G__18918;
i__18897_18902 = G__18919;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,init_18898,true);
}

call_eval.call(null,s);

return cljs.core.deref.call(null,x);
});})(init_18898))
;

//# sourceMappingURL=evaluator.js.map
