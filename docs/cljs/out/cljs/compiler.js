// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__15062 = s;
var map__15062__$1 = ((((!((map__15062 == null)))?(((((map__15062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15062):map__15062);
var name = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15065 = info;
var map__15066 = G__15065;
var map__15066__$1 = ((((!((map__15066 == null)))?(((((map__15066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15066):map__15066);
var shadow = cljs.core.get.call(null,map__15066__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15065__$1 = G__15065;
while(true){
var d__$2 = d__$1;
var map__15068 = G__15065__$1;
var map__15068__$1 = ((((!((map__15068 == null)))?(((((map__15068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15068):map__15068);
var shadow__$1 = cljs.core.get.call(null,map__15068__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15070 = (d__$2 + (1));
var G__15071 = shadow__$1;
d__$1 = G__15070;
G__15065__$1 = G__15071;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15072){
var map__15073 = p__15072;
var map__15073__$1 = ((((!((map__15073 == null)))?(((((map__15073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15073):map__15073);
var name_var = map__15073__$1;
var name = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__15075 = info;
var map__15075__$1 = ((((!((map__15075 == null)))?(((((map__15075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15075):map__15075);
var ns = cljs.core.get.call(null,map__15075__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15075__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__15078 = arguments.length;
switch (G__15078) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__15080 = cp;
switch (G__15080) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__15082_15086 = cljs.core.seq.call(null,s);
var chunk__15083_15087 = null;
var count__15084_15088 = (0);
var i__15085_15089 = (0);
while(true){
if((i__15085_15089 < count__15084_15088)){
var c_15090 = cljs.core._nth.call(null,chunk__15083_15087,i__15085_15089);
sb.append(cljs.compiler.escape_char.call(null,c_15090));


var G__15091 = seq__15082_15086;
var G__15092 = chunk__15083_15087;
var G__15093 = count__15084_15088;
var G__15094 = (i__15085_15089 + (1));
seq__15082_15086 = G__15091;
chunk__15083_15087 = G__15092;
count__15084_15088 = G__15093;
i__15085_15089 = G__15094;
continue;
} else {
var temp__5457__auto___15095 = cljs.core.seq.call(null,seq__15082_15086);
if(temp__5457__auto___15095){
var seq__15082_15096__$1 = temp__5457__auto___15095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15082_15096__$1)){
var c__4351__auto___15097 = cljs.core.chunk_first.call(null,seq__15082_15096__$1);
var G__15098 = cljs.core.chunk_rest.call(null,seq__15082_15096__$1);
var G__15099 = c__4351__auto___15097;
var G__15100 = cljs.core.count.call(null,c__4351__auto___15097);
var G__15101 = (0);
seq__15082_15086 = G__15098;
chunk__15083_15087 = G__15099;
count__15084_15088 = G__15100;
i__15085_15089 = G__15101;
continue;
} else {
var c_15102 = cljs.core.first.call(null,seq__15082_15096__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15102));


var G__15103 = cljs.core.next.call(null,seq__15082_15096__$1);
var G__15104 = null;
var G__15105 = (0);
var G__15106 = (0);
seq__15082_15086 = G__15103;
chunk__15083_15087 = G__15104;
count__15084_15088 = G__15105;
i__15085_15089 = G__15106;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__13455__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__13455__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15107_15112 = ast;
var map__15107_15113__$1 = ((((!((map__15107_15112 == null)))?(((((map__15107_15112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15107_15112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15107_15112):map__15107_15112);
var env_15114 = cljs.core.get.call(null,map__15107_15113__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15114))){
var map__15109_15115 = env_15114;
var map__15109_15116__$1 = ((((!((map__15109_15115 == null)))?(((((map__15109_15115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15109_15115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15109_15115):map__15109_15115);
var line_15117 = cljs.core.get.call(null,map__15109_15116__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15118 = cljs.core.get.call(null,map__15109_15116__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15109_15115,map__15109_15116__$1,line_15117,column_15118,map__15107_15112,map__15107_15113__$1,env_15114,val__13455__auto__){
return (function (m){
var minfo = (function (){var G__15111 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__15111,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__15111;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15117 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15109_15115,map__15109_15116__$1,line_15117,column_15118,map__15107_15112,map__15107_15113__$1,env_15114,val__13455__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15118)?(column_15118 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15109_15115,map__15109_15116__$1,line_15117,column_15118,map__15107_15112,map__15107_15113__$1,env_15114,val__13455__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15109_15115,map__15109_15116__$1,line_15117,column_15118,map__15107_15112,map__15107_15113__$1,env_15114,val__13455__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15109_15115,map__15109_15116__$1,line_15117,column_15118,map__15107_15112,map__15107_15113__$1,env_15114,val__13455__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__15109_15115,map__15109_15116__$1,line_15117,column_15118,map__15107_15112,map__15107_15113__$1,env_15114,val__13455__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__13455__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15125 = arguments.length;
var i__4532__auto___15126 = (0);
while(true){
if((i__4532__auto___15126 < len__4531__auto___15125)){
args__4534__auto__.push((arguments[i__4532__auto___15126]));

var G__15127 = (i__4532__auto___15126 + (1));
i__4532__auto___15126 = G__15127;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__15121_15128 = cljs.core.seq.call(null,xs);
var chunk__15122_15129 = null;
var count__15123_15130 = (0);
var i__15124_15131 = (0);
while(true){
if((i__15124_15131 < count__15123_15130)){
var x_15132 = cljs.core._nth.call(null,chunk__15122_15129,i__15124_15131);
if((x_15132 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15132)){
cljs.compiler.emit.call(null,x_15132);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15132)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15132);
} else {
if(goog.isFunction(x_15132)){
x_15132.call(null);
} else {
var s_15133 = cljs.core.print_str.call(null,x_15132);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15121_15128,chunk__15122_15129,count__15123_15130,i__15124_15131,s_15133,x_15132){
return (function (p1__15119_SHARP_){
return (p1__15119_SHARP_ + cljs.core.count.call(null,s_15133));
});})(seq__15121_15128,chunk__15122_15129,count__15123_15130,i__15124_15131,s_15133,x_15132))
);
}

cljs.core.print.call(null,s_15133);

}
}
}
}


var G__15134 = seq__15121_15128;
var G__15135 = chunk__15122_15129;
var G__15136 = count__15123_15130;
var G__15137 = (i__15124_15131 + (1));
seq__15121_15128 = G__15134;
chunk__15122_15129 = G__15135;
count__15123_15130 = G__15136;
i__15124_15131 = G__15137;
continue;
} else {
var temp__5457__auto___15138 = cljs.core.seq.call(null,seq__15121_15128);
if(temp__5457__auto___15138){
var seq__15121_15139__$1 = temp__5457__auto___15138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15121_15139__$1)){
var c__4351__auto___15140 = cljs.core.chunk_first.call(null,seq__15121_15139__$1);
var G__15141 = cljs.core.chunk_rest.call(null,seq__15121_15139__$1);
var G__15142 = c__4351__auto___15140;
var G__15143 = cljs.core.count.call(null,c__4351__auto___15140);
var G__15144 = (0);
seq__15121_15128 = G__15141;
chunk__15122_15129 = G__15142;
count__15123_15130 = G__15143;
i__15124_15131 = G__15144;
continue;
} else {
var x_15145 = cljs.core.first.call(null,seq__15121_15139__$1);
if((x_15145 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15145)){
cljs.compiler.emit.call(null,x_15145);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15145)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15145);
} else {
if(goog.isFunction(x_15145)){
x_15145.call(null);
} else {
var s_15146 = cljs.core.print_str.call(null,x_15145);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15121_15128,chunk__15122_15129,count__15123_15130,i__15124_15131,s_15146,x_15145,seq__15121_15139__$1,temp__5457__auto___15138){
return (function (p1__15119_SHARP_){
return (p1__15119_SHARP_ + cljs.core.count.call(null,s_15146));
});})(seq__15121_15128,chunk__15122_15129,count__15123_15130,i__15124_15131,s_15146,x_15145,seq__15121_15139__$1,temp__5457__auto___15138))
);
}

cljs.core.print.call(null,s_15146);

}
}
}
}


var G__15147 = cljs.core.next.call(null,seq__15121_15139__$1);
var G__15148 = null;
var G__15149 = (0);
var G__15150 = (0);
seq__15121_15128 = G__15147;
chunk__15122_15129 = G__15148;
count__15123_15130 = G__15149;
i__15124_15131 = G__15150;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq15120){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15120));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15156 = arguments.length;
var i__4532__auto___15157 = (0);
while(true){
if((i__4532__auto___15157 < len__4531__auto___15156)){
args__4534__auto__.push((arguments[i__4532__auto___15157]));

var G__15158 = (i__4532__auto___15157 + (1));
i__4532__auto___15157 = G__15158;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_15152_15159 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_15152_15159;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15153){
var map__15154 = p__15153;
var map__15154__$1 = ((((!((map__15154 == null)))?(((((map__15154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15154):map__15154);
var m = map__15154__$1;
var gen_line = cljs.core.get.call(null,map__15154__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15151){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15151));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15160_15162 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15161_15163 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15160_15162,_STAR_print_fn_STAR_15161_15163,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_15160_15162,_STAR_print_fn_STAR_15161_15163,sb__4462__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15161_15163;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15160_15162;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant !== 'undefined')){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__15164 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__15164,(0),null);
var flags = cljs.core.nth.call(null,vec__15164,(1),null);
var pattern = cljs.core.nth.call(null,vec__15164,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3938__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3938__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3938__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3938__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__15168){
var map__15169 = p__15168;
var map__15169__$1 = ((((!((map__15169 == null)))?(((((map__15169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15169):map__15169);
var ast = map__15169__$1;
var info = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15171 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15171__$1 = ((((!((map__15171 == null)))?(((((map__15171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15171):map__15171);
var cenv = map__15171__$1;
var options = cljs.core.get.call(null,map__15171__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3949__auto__ = js_module_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__15173 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3938__auto__;
}
})())){
return clojure.set.difference.call(null,G__15173,cljs.analyzer.es5_allowed);
} else {
return G__15173;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3949__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__15174 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15174,reserved);
} else {
return G__15174;
}
})();
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__15175_15176 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15175_15177__$1 = (((G__15175_15176 instanceof cljs.core.Keyword))?G__15175_15176.fqn:null);
switch (G__15175_15177__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3938__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15179){
var map__15180 = p__15179;
var map__15180__$1 = ((((!((map__15180 == null)))?(((((map__15180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15180):map__15180);
var arg = map__15180__$1;
var env = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15180__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15182 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15182__$1 = ((((!((map__15182 == null)))?(((((map__15182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15182):map__15182);
var name = cljs.core.get.call(null,map__15182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15184){
var map__15185 = p__15184;
var map__15185__$1 = ((((!((map__15185 == null)))?(((((map__15185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15185):map__15185);
var expr = cljs.core.get.call(null,map__15185__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15185__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__15187_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15187_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15188){
var map__15189 = p__15188;
var map__15189__$1 = ((((!((map__15189 == null)))?(((((map__15189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15189):map__15189);
var env = cljs.core.get.call(null,map__15189__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15189__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15189__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__15191){
var map__15192 = p__15191;
var map__15192__$1 = ((((!((map__15192 == null)))?(((((map__15192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15192):map__15192);
var items = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15194){
var map__15195 = p__15194;
var map__15195__$1 = ((((!((map__15195 == null)))?(((((map__15195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15195):map__15195);
var items = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_15197 = cljs.core.count.call(null,items);
if((cnt_15197 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_15197,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__15198_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15198_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15199){
var map__15200 = p__15199;
var map__15200__$1 = ((((!((map__15200 == null)))?(((((map__15200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15200):map__15200);
var items = cljs.core.get.call(null,map__15200__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__15202){
var map__15203 = p__15202;
var map__15203__$1 = ((((!((map__15203 == null)))?(((((map__15203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15203):map__15203);
var items = cljs.core.get.call(null,map__15203__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__15203__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__15203__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___15221 = cljs.core.seq.call(null,items);
if(temp__5457__auto___15221){
var items_15222__$1 = temp__5457__auto___15221;
var vec__15205_15223 = items_15222__$1;
var seq__15206_15224 = cljs.core.seq.call(null,vec__15205_15223);
var first__15207_15225 = cljs.core.first.call(null,seq__15206_15224);
var seq__15206_15226__$1 = cljs.core.next.call(null,seq__15206_15224);
var vec__15208_15227 = first__15207_15225;
var k_15228 = cljs.core.nth.call(null,vec__15208_15227,(0),null);
var v_15229 = cljs.core.nth.call(null,vec__15208_15227,(1),null);
var r_15230 = seq__15206_15226__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15228),"\": ",v_15229);

var seq__15211_15231 = cljs.core.seq.call(null,r_15230);
var chunk__15212_15232 = null;
var count__15213_15233 = (0);
var i__15214_15234 = (0);
while(true){
if((i__15214_15234 < count__15213_15233)){
var vec__15215_15235 = cljs.core._nth.call(null,chunk__15212_15232,i__15214_15234);
var k_15236__$1 = cljs.core.nth.call(null,vec__15215_15235,(0),null);
var v_15237__$1 = cljs.core.nth.call(null,vec__15215_15235,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15236__$1),"\": ",v_15237__$1);


var G__15238 = seq__15211_15231;
var G__15239 = chunk__15212_15232;
var G__15240 = count__15213_15233;
var G__15241 = (i__15214_15234 + (1));
seq__15211_15231 = G__15238;
chunk__15212_15232 = G__15239;
count__15213_15233 = G__15240;
i__15214_15234 = G__15241;
continue;
} else {
var temp__5457__auto___15242__$1 = cljs.core.seq.call(null,seq__15211_15231);
if(temp__5457__auto___15242__$1){
var seq__15211_15243__$1 = temp__5457__auto___15242__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15211_15243__$1)){
var c__4351__auto___15244 = cljs.core.chunk_first.call(null,seq__15211_15243__$1);
var G__15245 = cljs.core.chunk_rest.call(null,seq__15211_15243__$1);
var G__15246 = c__4351__auto___15244;
var G__15247 = cljs.core.count.call(null,c__4351__auto___15244);
var G__15248 = (0);
seq__15211_15231 = G__15245;
chunk__15212_15232 = G__15246;
count__15213_15233 = G__15247;
i__15214_15234 = G__15248;
continue;
} else {
var vec__15218_15249 = cljs.core.first.call(null,seq__15211_15243__$1);
var k_15250__$1 = cljs.core.nth.call(null,vec__15218_15249,(0),null);
var v_15251__$1 = cljs.core.nth.call(null,vec__15218_15249,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15250__$1),"\": ",v_15251__$1);


var G__15252 = cljs.core.next.call(null,seq__15211_15243__$1);
var G__15253 = null;
var G__15254 = (0);
var G__15255 = (0);
seq__15211_15231 = G__15252;
chunk__15212_15232 = G__15253;
count__15213_15233 = G__15254;
i__15214_15234 = G__15255;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__15256){
var map__15257 = p__15256;
var map__15257__$1 = ((((!((map__15257 == null)))?(((((map__15257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15257):map__15257);
var items = cljs.core.get.call(null,map__15257__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__15257__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__15257__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15257__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15259){
var map__15260 = p__15259;
var map__15260__$1 = ((((!((map__15260 == null)))?(((((map__15260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15260):map__15260);
var form = cljs.core.get.call(null,map__15260__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15260__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__15262){
var map__15263 = p__15262;
var map__15263__$1 = ((((!((map__15263 == null)))?(((((map__15263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15263):map__15263);
var op = cljs.core.get.call(null,map__15263__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15263__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15263__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__3938__auto__){
var and__3938__auto____$1 = form;
if(cljs.core.truth_(and__3938__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto__ = !((const_expr == null));
if(and__3938__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3938__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__15265){
var map__15266 = p__15265;
var map__15266__$1 = ((((!((map__15266 == null)))?(((((map__15266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15266):map__15266);
var op = cljs.core.get.call(null,map__15266__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15266__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15266__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3949__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto__ = !((const_expr == null));
if(and__3938__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3938__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15268){
var map__15269 = p__15268;
var map__15269__$1 = ((((!((map__15269 == null)))?(((((map__15269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15269):map__15269);
var test = cljs.core.get.call(null,map__15269__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15269__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15269__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15269__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15269__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3949__auto__ = unchecked;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__15271){
var map__15272 = p__15271;
var map__15272__$1 = ((((!((map__15272 == null)))?(((((map__15272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15272):map__15272);
var v = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__15274_15292 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__15275_15293 = null;
var count__15276_15294 = (0);
var i__15277_15295 = (0);
while(true){
if((i__15277_15295 < count__15276_15294)){
var vec__15278_15296 = cljs.core._nth.call(null,chunk__15275_15293,i__15277_15295);
var ts_15297 = cljs.core.nth.call(null,vec__15278_15296,(0),null);
var then_15298 = cljs.core.nth.call(null,vec__15278_15296,(1),null);
var seq__15281_15299 = cljs.core.seq.call(null,ts_15297);
var chunk__15282_15300 = null;
var count__15283_15301 = (0);
var i__15284_15302 = (0);
while(true){
if((i__15284_15302 < count__15283_15301)){
var test_15303 = cljs.core._nth.call(null,chunk__15282_15300,i__15284_15302);
cljs.compiler.emitln.call(null,"case ",test_15303,":");


var G__15304 = seq__15281_15299;
var G__15305 = chunk__15282_15300;
var G__15306 = count__15283_15301;
var G__15307 = (i__15284_15302 + (1));
seq__15281_15299 = G__15304;
chunk__15282_15300 = G__15305;
count__15283_15301 = G__15306;
i__15284_15302 = G__15307;
continue;
} else {
var temp__5457__auto___15308 = cljs.core.seq.call(null,seq__15281_15299);
if(temp__5457__auto___15308){
var seq__15281_15309__$1 = temp__5457__auto___15308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15281_15309__$1)){
var c__4351__auto___15310 = cljs.core.chunk_first.call(null,seq__15281_15309__$1);
var G__15311 = cljs.core.chunk_rest.call(null,seq__15281_15309__$1);
var G__15312 = c__4351__auto___15310;
var G__15313 = cljs.core.count.call(null,c__4351__auto___15310);
var G__15314 = (0);
seq__15281_15299 = G__15311;
chunk__15282_15300 = G__15312;
count__15283_15301 = G__15313;
i__15284_15302 = G__15314;
continue;
} else {
var test_15315 = cljs.core.first.call(null,seq__15281_15309__$1);
cljs.compiler.emitln.call(null,"case ",test_15315,":");


var G__15316 = cljs.core.next.call(null,seq__15281_15309__$1);
var G__15317 = null;
var G__15318 = (0);
var G__15319 = (0);
seq__15281_15299 = G__15316;
chunk__15282_15300 = G__15317;
count__15283_15301 = G__15318;
i__15284_15302 = G__15319;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15298);
} else {
cljs.compiler.emitln.call(null,then_15298);
}

cljs.compiler.emitln.call(null,"break;");


var G__15320 = seq__15274_15292;
var G__15321 = chunk__15275_15293;
var G__15322 = count__15276_15294;
var G__15323 = (i__15277_15295 + (1));
seq__15274_15292 = G__15320;
chunk__15275_15293 = G__15321;
count__15276_15294 = G__15322;
i__15277_15295 = G__15323;
continue;
} else {
var temp__5457__auto___15324 = cljs.core.seq.call(null,seq__15274_15292);
if(temp__5457__auto___15324){
var seq__15274_15325__$1 = temp__5457__auto___15324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15274_15325__$1)){
var c__4351__auto___15326 = cljs.core.chunk_first.call(null,seq__15274_15325__$1);
var G__15327 = cljs.core.chunk_rest.call(null,seq__15274_15325__$1);
var G__15328 = c__4351__auto___15326;
var G__15329 = cljs.core.count.call(null,c__4351__auto___15326);
var G__15330 = (0);
seq__15274_15292 = G__15327;
chunk__15275_15293 = G__15328;
count__15276_15294 = G__15329;
i__15277_15295 = G__15330;
continue;
} else {
var vec__15285_15331 = cljs.core.first.call(null,seq__15274_15325__$1);
var ts_15332 = cljs.core.nth.call(null,vec__15285_15331,(0),null);
var then_15333 = cljs.core.nth.call(null,vec__15285_15331,(1),null);
var seq__15288_15334 = cljs.core.seq.call(null,ts_15332);
var chunk__15289_15335 = null;
var count__15290_15336 = (0);
var i__15291_15337 = (0);
while(true){
if((i__15291_15337 < count__15290_15336)){
var test_15338 = cljs.core._nth.call(null,chunk__15289_15335,i__15291_15337);
cljs.compiler.emitln.call(null,"case ",test_15338,":");


var G__15339 = seq__15288_15334;
var G__15340 = chunk__15289_15335;
var G__15341 = count__15290_15336;
var G__15342 = (i__15291_15337 + (1));
seq__15288_15334 = G__15339;
chunk__15289_15335 = G__15340;
count__15290_15336 = G__15341;
i__15291_15337 = G__15342;
continue;
} else {
var temp__5457__auto___15343__$1 = cljs.core.seq.call(null,seq__15288_15334);
if(temp__5457__auto___15343__$1){
var seq__15288_15344__$1 = temp__5457__auto___15343__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15288_15344__$1)){
var c__4351__auto___15345 = cljs.core.chunk_first.call(null,seq__15288_15344__$1);
var G__15346 = cljs.core.chunk_rest.call(null,seq__15288_15344__$1);
var G__15347 = c__4351__auto___15345;
var G__15348 = cljs.core.count.call(null,c__4351__auto___15345);
var G__15349 = (0);
seq__15288_15334 = G__15346;
chunk__15289_15335 = G__15347;
count__15290_15336 = G__15348;
i__15291_15337 = G__15349;
continue;
} else {
var test_15350 = cljs.core.first.call(null,seq__15288_15344__$1);
cljs.compiler.emitln.call(null,"case ",test_15350,":");


var G__15351 = cljs.core.next.call(null,seq__15288_15344__$1);
var G__15352 = null;
var G__15353 = (0);
var G__15354 = (0);
seq__15288_15334 = G__15351;
chunk__15289_15335 = G__15352;
count__15290_15336 = G__15353;
i__15291_15337 = G__15354;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15333);
} else {
cljs.compiler.emitln.call(null,then_15333);
}

cljs.compiler.emitln.call(null,"break;");


var G__15355 = cljs.core.next.call(null,seq__15274_15325__$1);
var G__15356 = null;
var G__15357 = (0);
var G__15358 = (0);
seq__15274_15292 = G__15355;
chunk__15275_15293 = G__15356;
count__15276_15294 = G__15357;
i__15277_15295 = G__15358;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15359){
var map__15360 = p__15359;
var map__15360__$1 = ((((!((map__15360 == null)))?(((((map__15360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15360):map__15360);
var throw$ = cljs.core.get.call(null,map__15360__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__15360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__15363 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15363,(0),null);
var rstr = cljs.core.nth.call(null,vec__15363,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__15363,fstr,rstr,ret_t,axstr){
return (function (p1__15362_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15362_SHARP_);
});})(idx,vec__15363,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15366 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15366),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__15366;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__15367_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15367_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15368 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15369 = cljs.core.seq.call(null,vec__15368);
var first__15370 = cljs.core.first.call(null,seq__15369);
var seq__15369__$1 = cljs.core.next.call(null,seq__15369);
var p = first__15370;
var first__15370__$1 = cljs.core.first.call(null,seq__15369__$1);
var seq__15369__$2 = cljs.core.next.call(null,seq__15369__$1);
var ts = first__15370__$1;
var first__15370__$2 = cljs.core.first.call(null,seq__15369__$2);
var seq__15369__$3 = cljs.core.next.call(null,seq__15369__$2);
var n = first__15370__$2;
var xs = seq__15369__$3;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3938__auto__){
var and__3938__auto____$1 = ts;
if(cljs.core.truth_(and__3938__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__15371 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15372 = cljs.core.seq.call(null,vec__15371);
var first__15373 = cljs.core.first.call(null,seq__15372);
var seq__15372__$1 = cljs.core.next.call(null,seq__15372);
var p = first__15373;
var first__15373__$1 = cljs.core.first.call(null,seq__15372__$1);
var seq__15372__$2 = cljs.core.next.call(null,seq__15372__$1);
var ts = first__15373__$1;
var xs = seq__15372__$2;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3938__auto__){
var and__3938__auto____$1 = ts;
if(cljs.core.truth_(and__3938__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__15376 = arguments.length;
switch (G__15376) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__15384 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__15374_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15374_SHARP_);
} else {
return p1__15374_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__15385 = cljs.core.seq.call(null,vec__15384);
var first__15386 = cljs.core.first.call(null,seq__15385);
var seq__15385__$1 = cljs.core.next.call(null,seq__15385);
var x = first__15386;
var ys = seq__15385__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15387 = cljs.core.seq.call(null,ys);
var chunk__15388 = null;
var count__15389 = (0);
var i__15390 = (0);
while(true){
if((i__15390 < count__15389)){
var next_line = cljs.core._nth.call(null,chunk__15388,i__15390);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15396 = seq__15387;
var G__15397 = chunk__15388;
var G__15398 = count__15389;
var G__15399 = (i__15390 + (1));
seq__15387 = G__15396;
chunk__15388 = G__15397;
count__15389 = G__15398;
i__15390 = G__15399;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15387);
if(temp__5457__auto__){
var seq__15387__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15387__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__15387__$1);
var G__15400 = cljs.core.chunk_rest.call(null,seq__15387__$1);
var G__15401 = c__4351__auto__;
var G__15402 = cljs.core.count.call(null,c__4351__auto__);
var G__15403 = (0);
seq__15387 = G__15400;
chunk__15388 = G__15401;
count__15389 = G__15402;
i__15390 = G__15403;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15387__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15404 = cljs.core.next.call(null,seq__15387__$1);
var G__15405 = null;
var G__15406 = (0);
var G__15407 = (0);
seq__15387 = G__15404;
chunk__15388 = G__15405;
count__15389 = G__15406;
i__15390 = G__15407;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__15391_15408 = cljs.core.seq.call(null,docs__$2);
var chunk__15392_15409 = null;
var count__15393_15410 = (0);
var i__15394_15411 = (0);
while(true){
if((i__15394_15411 < count__15393_15410)){
var e_15412 = cljs.core._nth.call(null,chunk__15392_15409,i__15394_15411);
if(cljs.core.truth_(e_15412)){
print_comment_lines.call(null,e_15412);
} else {
}


var G__15413 = seq__15391_15408;
var G__15414 = chunk__15392_15409;
var G__15415 = count__15393_15410;
var G__15416 = (i__15394_15411 + (1));
seq__15391_15408 = G__15413;
chunk__15392_15409 = G__15414;
count__15393_15410 = G__15415;
i__15394_15411 = G__15416;
continue;
} else {
var temp__5457__auto___15417 = cljs.core.seq.call(null,seq__15391_15408);
if(temp__5457__auto___15417){
var seq__15391_15418__$1 = temp__5457__auto___15417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15391_15418__$1)){
var c__4351__auto___15419 = cljs.core.chunk_first.call(null,seq__15391_15418__$1);
var G__15420 = cljs.core.chunk_rest.call(null,seq__15391_15418__$1);
var G__15421 = c__4351__auto___15419;
var G__15422 = cljs.core.count.call(null,c__4351__auto___15419);
var G__15423 = (0);
seq__15391_15408 = G__15420;
chunk__15392_15409 = G__15421;
count__15393_15410 = G__15422;
i__15394_15411 = G__15423;
continue;
} else {
var e_15424 = cljs.core.first.call(null,seq__15391_15418__$1);
if(cljs.core.truth_(e_15424)){
print_comment_lines.call(null,e_15424);
} else {
}


var G__15425 = cljs.core.next.call(null,seq__15391_15418__$1);
var G__15426 = null;
var G__15427 = (0);
var G__15428 = (0);
seq__15391_15408 = G__15425;
chunk__15392_15409 = G__15426;
count__15393_15410 = G__15427;
i__15394_15411 = G__15428;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3938__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__15430_SHARP_){
return goog.string.startsWith(p1__15430_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = opts;
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3938__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15431){
var map__15432 = p__15431;
var map__15432__$1 = ((((!((map__15432 == null)))?(((((map__15432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15432):map__15432);
var name = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3949__auto__ = init;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3938__auto__){
return test;
} else {
return and__3938__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15434){
var map__15435 = p__15434;
var map__15435__$1 = ((((!((map__15435 == null)))?(((((map__15435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15435):map__15435);
var name = cljs.core.get.call(null,map__15435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15435__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15437_15455 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15438_15456 = null;
var count__15439_15457 = (0);
var i__15440_15458 = (0);
while(true){
if((i__15440_15458 < count__15439_15457)){
var vec__15441_15459 = cljs.core._nth.call(null,chunk__15438_15456,i__15440_15458);
var i_15460 = cljs.core.nth.call(null,vec__15441_15459,(0),null);
var param_15461 = cljs.core.nth.call(null,vec__15441_15459,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15461);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15462 = seq__15437_15455;
var G__15463 = chunk__15438_15456;
var G__15464 = count__15439_15457;
var G__15465 = (i__15440_15458 + (1));
seq__15437_15455 = G__15462;
chunk__15438_15456 = G__15463;
count__15439_15457 = G__15464;
i__15440_15458 = G__15465;
continue;
} else {
var temp__5457__auto___15466 = cljs.core.seq.call(null,seq__15437_15455);
if(temp__5457__auto___15466){
var seq__15437_15467__$1 = temp__5457__auto___15466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15437_15467__$1)){
var c__4351__auto___15468 = cljs.core.chunk_first.call(null,seq__15437_15467__$1);
var G__15469 = cljs.core.chunk_rest.call(null,seq__15437_15467__$1);
var G__15470 = c__4351__auto___15468;
var G__15471 = cljs.core.count.call(null,c__4351__auto___15468);
var G__15472 = (0);
seq__15437_15455 = G__15469;
chunk__15438_15456 = G__15470;
count__15439_15457 = G__15471;
i__15440_15458 = G__15472;
continue;
} else {
var vec__15444_15473 = cljs.core.first.call(null,seq__15437_15467__$1);
var i_15474 = cljs.core.nth.call(null,vec__15444_15473,(0),null);
var param_15475 = cljs.core.nth.call(null,vec__15444_15473,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15475);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15476 = cljs.core.next.call(null,seq__15437_15467__$1);
var G__15477 = null;
var G__15478 = (0);
var G__15479 = (0);
seq__15437_15455 = G__15476;
chunk__15438_15456 = G__15477;
count__15439_15457 = G__15478;
i__15440_15458 = G__15479;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15447_15480 = cljs.core.seq.call(null,params);
var chunk__15448_15481 = null;
var count__15449_15482 = (0);
var i__15450_15483 = (0);
while(true){
if((i__15450_15483 < count__15449_15482)){
var param_15484 = cljs.core._nth.call(null,chunk__15448_15481,i__15450_15483);
cljs.compiler.emit.call(null,param_15484);

if(cljs.core._EQ_.call(null,param_15484,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15485 = seq__15447_15480;
var G__15486 = chunk__15448_15481;
var G__15487 = count__15449_15482;
var G__15488 = (i__15450_15483 + (1));
seq__15447_15480 = G__15485;
chunk__15448_15481 = G__15486;
count__15449_15482 = G__15487;
i__15450_15483 = G__15488;
continue;
} else {
var temp__5457__auto___15489 = cljs.core.seq.call(null,seq__15447_15480);
if(temp__5457__auto___15489){
var seq__15447_15490__$1 = temp__5457__auto___15489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15447_15490__$1)){
var c__4351__auto___15491 = cljs.core.chunk_first.call(null,seq__15447_15490__$1);
var G__15492 = cljs.core.chunk_rest.call(null,seq__15447_15490__$1);
var G__15493 = c__4351__auto___15491;
var G__15494 = cljs.core.count.call(null,c__4351__auto___15491);
var G__15495 = (0);
seq__15447_15480 = G__15492;
chunk__15448_15481 = G__15493;
count__15449_15482 = G__15494;
i__15450_15483 = G__15495;
continue;
} else {
var param_15496 = cljs.core.first.call(null,seq__15447_15490__$1);
cljs.compiler.emit.call(null,param_15496);

if(cljs.core._EQ_.call(null,param_15496,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15497 = cljs.core.next.call(null,seq__15447_15490__$1);
var G__15498 = null;
var G__15499 = (0);
var G__15500 = (0);
seq__15447_15480 = G__15497;
chunk__15448_15481 = G__15498;
count__15449_15482 = G__15499;
i__15450_15483 = G__15500;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15451_15501 = cljs.core.seq.call(null,params);
var chunk__15452_15502 = null;
var count__15453_15503 = (0);
var i__15454_15504 = (0);
while(true){
if((i__15454_15504 < count__15453_15503)){
var param_15505 = cljs.core._nth.call(null,chunk__15452_15502,i__15454_15504);
cljs.compiler.emit.call(null,param_15505);

if(cljs.core._EQ_.call(null,param_15505,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15506 = seq__15451_15501;
var G__15507 = chunk__15452_15502;
var G__15508 = count__15453_15503;
var G__15509 = (i__15454_15504 + (1));
seq__15451_15501 = G__15506;
chunk__15452_15502 = G__15507;
count__15453_15503 = G__15508;
i__15454_15504 = G__15509;
continue;
} else {
var temp__5457__auto___15510 = cljs.core.seq.call(null,seq__15451_15501);
if(temp__5457__auto___15510){
var seq__15451_15511__$1 = temp__5457__auto___15510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15451_15511__$1)){
var c__4351__auto___15512 = cljs.core.chunk_first.call(null,seq__15451_15511__$1);
var G__15513 = cljs.core.chunk_rest.call(null,seq__15451_15511__$1);
var G__15514 = c__4351__auto___15512;
var G__15515 = cljs.core.count.call(null,c__4351__auto___15512);
var G__15516 = (0);
seq__15451_15501 = G__15513;
chunk__15452_15502 = G__15514;
count__15453_15503 = G__15515;
i__15454_15504 = G__15516;
continue;
} else {
var param_15517 = cljs.core.first.call(null,seq__15451_15511__$1);
cljs.compiler.emit.call(null,param_15517);

if(cljs.core._EQ_.call(null,param_15517,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15518 = cljs.core.next.call(null,seq__15451_15511__$1);
var G__15519 = null;
var G__15520 = (0);
var G__15521 = (0);
seq__15451_15501 = G__15518;
chunk__15452_15502 = G__15519;
count__15453_15503 = G__15520;
i__15454_15504 = G__15521;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__15522 = cljs.core.seq.call(null,params);
var chunk__15523 = null;
var count__15524 = (0);
var i__15525 = (0);
while(true){
if((i__15525 < count__15524)){
var param = cljs.core._nth.call(null,chunk__15523,i__15525);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15526 = seq__15522;
var G__15527 = chunk__15523;
var G__15528 = count__15524;
var G__15529 = (i__15525 + (1));
seq__15522 = G__15526;
chunk__15523 = G__15527;
count__15524 = G__15528;
i__15525 = G__15529;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15522);
if(temp__5457__auto__){
var seq__15522__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15522__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__15522__$1);
var G__15530 = cljs.core.chunk_rest.call(null,seq__15522__$1);
var G__15531 = c__4351__auto__;
var G__15532 = cljs.core.count.call(null,c__4351__auto__);
var G__15533 = (0);
seq__15522 = G__15530;
chunk__15523 = G__15531;
count__15524 = G__15532;
i__15525 = G__15533;
continue;
} else {
var param = cljs.core.first.call(null,seq__15522__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15534 = cljs.core.next.call(null,seq__15522__$1);
var G__15535 = null;
var G__15536 = (0);
var G__15537 = (0);
seq__15522 = G__15534;
chunk__15523 = G__15535;
count__15524 = G__15536;
i__15525 = G__15537;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15538){
var map__15539 = p__15538;
var map__15539__$1 = ((((!((map__15539 == null)))?(((((map__15539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15539):map__15539);
var type = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__15539__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15541){
var map__15542 = p__15541;
var map__15542__$1 = ((((!((map__15542 == null)))?(((((map__15542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15542):map__15542);
var f = map__15542__$1;
var type = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15552__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15553 = cljs.compiler.munge.call(null,name_15552__$1);
var delegate_name_15554 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15553),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15554," = function (");

var seq__15544_15555 = cljs.core.seq.call(null,params);
var chunk__15545_15556 = null;
var count__15546_15557 = (0);
var i__15547_15558 = (0);
while(true){
if((i__15547_15558 < count__15546_15557)){
var param_15559 = cljs.core._nth.call(null,chunk__15545_15556,i__15547_15558);
cljs.compiler.emit.call(null,param_15559);

if(cljs.core._EQ_.call(null,param_15559,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15560 = seq__15544_15555;
var G__15561 = chunk__15545_15556;
var G__15562 = count__15546_15557;
var G__15563 = (i__15547_15558 + (1));
seq__15544_15555 = G__15560;
chunk__15545_15556 = G__15561;
count__15546_15557 = G__15562;
i__15547_15558 = G__15563;
continue;
} else {
var temp__5457__auto___15564 = cljs.core.seq.call(null,seq__15544_15555);
if(temp__5457__auto___15564){
var seq__15544_15565__$1 = temp__5457__auto___15564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15544_15565__$1)){
var c__4351__auto___15566 = cljs.core.chunk_first.call(null,seq__15544_15565__$1);
var G__15567 = cljs.core.chunk_rest.call(null,seq__15544_15565__$1);
var G__15568 = c__4351__auto___15566;
var G__15569 = cljs.core.count.call(null,c__4351__auto___15566);
var G__15570 = (0);
seq__15544_15555 = G__15567;
chunk__15545_15556 = G__15568;
count__15546_15557 = G__15569;
i__15547_15558 = G__15570;
continue;
} else {
var param_15571 = cljs.core.first.call(null,seq__15544_15565__$1);
cljs.compiler.emit.call(null,param_15571);

if(cljs.core._EQ_.call(null,param_15571,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15572 = cljs.core.next.call(null,seq__15544_15565__$1);
var G__15573 = null;
var G__15574 = (0);
var G__15575 = (0);
seq__15544_15555 = G__15572;
chunk__15545_15556 = G__15573;
count__15546_15557 = G__15574;
i__15547_15558 = G__15575;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_15553," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15576 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15576,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15554,".call(this,");

var seq__15548_15577 = cljs.core.seq.call(null,params);
var chunk__15549_15578 = null;
var count__15550_15579 = (0);
var i__15551_15580 = (0);
while(true){
if((i__15551_15580 < count__15550_15579)){
var param_15581 = cljs.core._nth.call(null,chunk__15549_15578,i__15551_15580);
cljs.compiler.emit.call(null,param_15581);

if(cljs.core._EQ_.call(null,param_15581,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15582 = seq__15548_15577;
var G__15583 = chunk__15549_15578;
var G__15584 = count__15550_15579;
var G__15585 = (i__15551_15580 + (1));
seq__15548_15577 = G__15582;
chunk__15549_15578 = G__15583;
count__15550_15579 = G__15584;
i__15551_15580 = G__15585;
continue;
} else {
var temp__5457__auto___15586 = cljs.core.seq.call(null,seq__15548_15577);
if(temp__5457__auto___15586){
var seq__15548_15587__$1 = temp__5457__auto___15586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15548_15587__$1)){
var c__4351__auto___15588 = cljs.core.chunk_first.call(null,seq__15548_15587__$1);
var G__15589 = cljs.core.chunk_rest.call(null,seq__15548_15587__$1);
var G__15590 = c__4351__auto___15588;
var G__15591 = cljs.core.count.call(null,c__4351__auto___15588);
var G__15592 = (0);
seq__15548_15577 = G__15589;
chunk__15549_15578 = G__15590;
count__15550_15579 = G__15591;
i__15551_15580 = G__15592;
continue;
} else {
var param_15593 = cljs.core.first.call(null,seq__15548_15587__$1);
cljs.compiler.emit.call(null,param_15593);

if(cljs.core._EQ_.call(null,param_15593,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15594 = cljs.core.next.call(null,seq__15548_15587__$1);
var G__15595 = null;
var G__15596 = (0);
var G__15597 = (0);
seq__15548_15577 = G__15594;
chunk__15549_15578 = G__15595;
count__15550_15579 = G__15596;
i__15551_15580 = G__15597;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15553,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15553,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15552__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15553,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15554,";");

cljs.compiler.emitln.call(null,"return ",mname_15553,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15601){
var map__15602 = p__15601;
var map__15602__$1 = ((((!((map__15602 == null)))?(((((map__15602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15602):map__15602);
var name = cljs.core.get.call(null,map__15602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15602__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15602__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__15602__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__15602__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__15602__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15598_SHARP_){
var and__3938__auto__ = p1__15598_SHARP_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15598_SHARP_));
} else {
return and__3938__auto__;
}
});})(map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_15637__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15638 = cljs.compiler.munge.call(null,name_15637__$1);
var maxparams_15639 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15640 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_15637__$1,mname_15638,maxparams_15639,loop_locals,map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15638),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15637__$1,mname_15638,maxparams_15639,loop_locals,map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_15641 = cljs.core.sort_by.call(null,((function (name_15637__$1,mname_15638,maxparams_15639,mmap_15640,loop_locals,map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15599_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15599_SHARP_)));
});})(name_15637__$1,mname_15638,maxparams_15639,mmap_15640,loop_locals,map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_15640));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15638," = null;");

var seq__15604_15642 = cljs.core.seq.call(null,ms_15641);
var chunk__15605_15643 = null;
var count__15606_15644 = (0);
var i__15607_15645 = (0);
while(true){
if((i__15607_15645 < count__15606_15644)){
var vec__15608_15646 = cljs.core._nth.call(null,chunk__15605_15643,i__15607_15645);
var n_15647 = cljs.core.nth.call(null,vec__15608_15646,(0),null);
var meth_15648 = cljs.core.nth.call(null,vec__15608_15646,(1),null);
cljs.compiler.emits.call(null,"var ",n_15647," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15648))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15648);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15648);
}

cljs.compiler.emitln.call(null,";");


var G__15649 = seq__15604_15642;
var G__15650 = chunk__15605_15643;
var G__15651 = count__15606_15644;
var G__15652 = (i__15607_15645 + (1));
seq__15604_15642 = G__15649;
chunk__15605_15643 = G__15650;
count__15606_15644 = G__15651;
i__15607_15645 = G__15652;
continue;
} else {
var temp__5457__auto___15653 = cljs.core.seq.call(null,seq__15604_15642);
if(temp__5457__auto___15653){
var seq__15604_15654__$1 = temp__5457__auto___15653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15604_15654__$1)){
var c__4351__auto___15655 = cljs.core.chunk_first.call(null,seq__15604_15654__$1);
var G__15656 = cljs.core.chunk_rest.call(null,seq__15604_15654__$1);
var G__15657 = c__4351__auto___15655;
var G__15658 = cljs.core.count.call(null,c__4351__auto___15655);
var G__15659 = (0);
seq__15604_15642 = G__15656;
chunk__15605_15643 = G__15657;
count__15606_15644 = G__15658;
i__15607_15645 = G__15659;
continue;
} else {
var vec__15611_15660 = cljs.core.first.call(null,seq__15604_15654__$1);
var n_15661 = cljs.core.nth.call(null,vec__15611_15660,(0),null);
var meth_15662 = cljs.core.nth.call(null,vec__15611_15660,(1),null);
cljs.compiler.emits.call(null,"var ",n_15661," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15662))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15662);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15662);
}

cljs.compiler.emitln.call(null,";");


var G__15663 = cljs.core.next.call(null,seq__15604_15654__$1);
var G__15664 = null;
var G__15665 = (0);
var G__15666 = (0);
seq__15604_15642 = G__15663;
chunk__15605_15643 = G__15664;
count__15606_15644 = G__15665;
i__15607_15645 = G__15666;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15638," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15639)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15639));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15614_15667 = cljs.core.seq.call(null,ms_15641);
var chunk__15615_15668 = null;
var count__15616_15669 = (0);
var i__15617_15670 = (0);
while(true){
if((i__15617_15670 < count__15616_15669)){
var vec__15618_15671 = cljs.core._nth.call(null,chunk__15615_15668,i__15617_15670);
var n_15672 = cljs.core.nth.call(null,vec__15618_15671,(0),null);
var meth_15673 = cljs.core.nth.call(null,vec__15618_15671,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15673))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15674 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15674," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15675 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15674," = new cljs.core.IndexedSeq(",a_15675,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15672,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15639)),(((cljs.core.count.call(null,maxparams_15639) > (1)))?", ":null),restarg_15674,");");
} else {
var pcnt_15676 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15673));
cljs.compiler.emitln.call(null,"case ",pcnt_15676,":");

cljs.compiler.emitln.call(null,"return ",n_15672,".call(this",(((pcnt_15676 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15676,maxparams_15639)),null,(1),null)),(2),null))),");");
}


var G__15677 = seq__15614_15667;
var G__15678 = chunk__15615_15668;
var G__15679 = count__15616_15669;
var G__15680 = (i__15617_15670 + (1));
seq__15614_15667 = G__15677;
chunk__15615_15668 = G__15678;
count__15616_15669 = G__15679;
i__15617_15670 = G__15680;
continue;
} else {
var temp__5457__auto___15681 = cljs.core.seq.call(null,seq__15614_15667);
if(temp__5457__auto___15681){
var seq__15614_15682__$1 = temp__5457__auto___15681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15614_15682__$1)){
var c__4351__auto___15683 = cljs.core.chunk_first.call(null,seq__15614_15682__$1);
var G__15684 = cljs.core.chunk_rest.call(null,seq__15614_15682__$1);
var G__15685 = c__4351__auto___15683;
var G__15686 = cljs.core.count.call(null,c__4351__auto___15683);
var G__15687 = (0);
seq__15614_15667 = G__15684;
chunk__15615_15668 = G__15685;
count__15616_15669 = G__15686;
i__15617_15670 = G__15687;
continue;
} else {
var vec__15621_15688 = cljs.core.first.call(null,seq__15614_15682__$1);
var n_15689 = cljs.core.nth.call(null,vec__15621_15688,(0),null);
var meth_15690 = cljs.core.nth.call(null,vec__15621_15688,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15690))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15691 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15691," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15692 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15691," = new cljs.core.IndexedSeq(",a_15692,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15689,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15639)),(((cljs.core.count.call(null,maxparams_15639) > (1)))?", ":null),restarg_15691,");");
} else {
var pcnt_15693 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15690));
cljs.compiler.emitln.call(null,"case ",pcnt_15693,":");

cljs.compiler.emitln.call(null,"return ",n_15689,".call(this",(((pcnt_15693 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15693,maxparams_15639)),null,(1),null)),(2),null))),");");
}


var G__15694 = cljs.core.next.call(null,seq__15614_15682__$1);
var G__15695 = null;
var G__15696 = (0);
var G__15697 = (0);
seq__15614_15667 = G__15694;
chunk__15615_15668 = G__15695;
count__15616_15669 = G__15696;
i__15617_15670 = G__15697;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_15698 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_15641)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_15698,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15638,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15638,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_15637__$1,mname_15638,maxparams_15639,mmap_15640,ms_15641,loop_locals,map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15600_SHARP_){
var vec__15624 = p1__15600_SHARP_;
var n = cljs.core.nth.call(null,vec__15624,(0),null);
var m = cljs.core.nth.call(null,vec__15624,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15637__$1,mname_15638,maxparams_15639,mmap_15640,ms_15641,loop_locals,map__15602,map__15602__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_15641),".cljs$lang$applyTo;");
} else {
}

var seq__15627_15699 = cljs.core.seq.call(null,ms_15641);
var chunk__15628_15700 = null;
var count__15629_15701 = (0);
var i__15630_15702 = (0);
while(true){
if((i__15630_15702 < count__15629_15701)){
var vec__15631_15703 = cljs.core._nth.call(null,chunk__15628_15700,i__15630_15702);
var n_15704 = cljs.core.nth.call(null,vec__15631_15703,(0),null);
var meth_15705 = cljs.core.nth.call(null,vec__15631_15703,(1),null);
var c_15706 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15705));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15705))){
cljs.compiler.emitln.call(null,mname_15638,".cljs$core$IFn$_invoke$arity$variadic = ",n_15704,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15638,".cljs$core$IFn$_invoke$arity$",c_15706," = ",n_15704,";");
}


var G__15707 = seq__15627_15699;
var G__15708 = chunk__15628_15700;
var G__15709 = count__15629_15701;
var G__15710 = (i__15630_15702 + (1));
seq__15627_15699 = G__15707;
chunk__15628_15700 = G__15708;
count__15629_15701 = G__15709;
i__15630_15702 = G__15710;
continue;
} else {
var temp__5457__auto___15711 = cljs.core.seq.call(null,seq__15627_15699);
if(temp__5457__auto___15711){
var seq__15627_15712__$1 = temp__5457__auto___15711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15627_15712__$1)){
var c__4351__auto___15713 = cljs.core.chunk_first.call(null,seq__15627_15712__$1);
var G__15714 = cljs.core.chunk_rest.call(null,seq__15627_15712__$1);
var G__15715 = c__4351__auto___15713;
var G__15716 = cljs.core.count.call(null,c__4351__auto___15713);
var G__15717 = (0);
seq__15627_15699 = G__15714;
chunk__15628_15700 = G__15715;
count__15629_15701 = G__15716;
i__15630_15702 = G__15717;
continue;
} else {
var vec__15634_15718 = cljs.core.first.call(null,seq__15627_15712__$1);
var n_15719 = cljs.core.nth.call(null,vec__15634_15718,(0),null);
var meth_15720 = cljs.core.nth.call(null,vec__15634_15718,(1),null);
var c_15721 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15720));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15720))){
cljs.compiler.emitln.call(null,mname_15638,".cljs$core$IFn$_invoke$arity$variadic = ",n_15719,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15638,".cljs$core$IFn$_invoke$arity$",c_15721," = ",n_15719,";");
}


var G__15722 = cljs.core.next.call(null,seq__15627_15712__$1);
var G__15723 = null;
var G__15724 = (0);
var G__15725 = (0);
seq__15627_15699 = G__15722;
chunk__15628_15700 = G__15723;
count__15629_15701 = G__15724;
i__15630_15702 = G__15725;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15638,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15726){
var map__15727 = p__15726;
var map__15727__$1 = ((((!((map__15727 == null)))?(((((map__15727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15727):map__15727);
var statements = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__15727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3938__auto__ = statements;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3938__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__15729_15733 = cljs.core.seq.call(null,statements);
var chunk__15730_15734 = null;
var count__15731_15735 = (0);
var i__15732_15736 = (0);
while(true){
if((i__15732_15736 < count__15731_15735)){
var s_15737 = cljs.core._nth.call(null,chunk__15730_15734,i__15732_15736);
cljs.compiler.emitln.call(null,s_15737);


var G__15738 = seq__15729_15733;
var G__15739 = chunk__15730_15734;
var G__15740 = count__15731_15735;
var G__15741 = (i__15732_15736 + (1));
seq__15729_15733 = G__15738;
chunk__15730_15734 = G__15739;
count__15731_15735 = G__15740;
i__15732_15736 = G__15741;
continue;
} else {
var temp__5457__auto___15742 = cljs.core.seq.call(null,seq__15729_15733);
if(temp__5457__auto___15742){
var seq__15729_15743__$1 = temp__5457__auto___15742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15729_15743__$1)){
var c__4351__auto___15744 = cljs.core.chunk_first.call(null,seq__15729_15743__$1);
var G__15745 = cljs.core.chunk_rest.call(null,seq__15729_15743__$1);
var G__15746 = c__4351__auto___15744;
var G__15747 = cljs.core.count.call(null,c__4351__auto___15744);
var G__15748 = (0);
seq__15729_15733 = G__15745;
chunk__15730_15734 = G__15746;
count__15731_15735 = G__15747;
i__15732_15736 = G__15748;
continue;
} else {
var s_15749 = cljs.core.first.call(null,seq__15729_15743__$1);
cljs.compiler.emitln.call(null,s_15749);


var G__15750 = cljs.core.next.call(null,seq__15729_15743__$1);
var G__15751 = null;
var G__15752 = (0);
var G__15753 = (0);
seq__15729_15733 = G__15750;
chunk__15730_15734 = G__15751;
count__15731_15735 = G__15752;
i__15732_15736 = G__15753;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3938__auto__ = statements;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3938__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15754){
var map__15755 = p__15754;
var map__15755__$1 = ((((!((map__15755 == null)))?(((((map__15755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15755):map__15755);
var env = cljs.core.get.call(null,map__15755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__15755__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__15755__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__15755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__15755__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15757,is_loop){
var map__15758 = p__15757;
var map__15758__$1 = ((((!((map__15758 == null)))?(((((map__15758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15758):map__15758);
var bindings = cljs.core.get.call(null,map__15758__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__15758__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_15760_15769 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_15760_15769,context,map__15758,map__15758__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_15760_15769,context,map__15758,map__15758__$1,bindings,expr,env))
,bindings):null));

try{var seq__15761_15770 = cljs.core.seq.call(null,bindings);
var chunk__15762_15771 = null;
var count__15763_15772 = (0);
var i__15764_15773 = (0);
while(true){
if((i__15764_15773 < count__15763_15772)){
var map__15765_15774 = cljs.core._nth.call(null,chunk__15762_15771,i__15764_15773);
var map__15765_15775__$1 = ((((!((map__15765_15774 == null)))?(((((map__15765_15774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15765_15774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15765_15774):map__15765_15774);
var binding_15776 = map__15765_15775__$1;
var init_15777 = cljs.core.get.call(null,map__15765_15775__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15776);

cljs.compiler.emitln.call(null," = ",init_15777,";");


var G__15778 = seq__15761_15770;
var G__15779 = chunk__15762_15771;
var G__15780 = count__15763_15772;
var G__15781 = (i__15764_15773 + (1));
seq__15761_15770 = G__15778;
chunk__15762_15771 = G__15779;
count__15763_15772 = G__15780;
i__15764_15773 = G__15781;
continue;
} else {
var temp__5457__auto___15782 = cljs.core.seq.call(null,seq__15761_15770);
if(temp__5457__auto___15782){
var seq__15761_15783__$1 = temp__5457__auto___15782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15761_15783__$1)){
var c__4351__auto___15784 = cljs.core.chunk_first.call(null,seq__15761_15783__$1);
var G__15785 = cljs.core.chunk_rest.call(null,seq__15761_15783__$1);
var G__15786 = c__4351__auto___15784;
var G__15787 = cljs.core.count.call(null,c__4351__auto___15784);
var G__15788 = (0);
seq__15761_15770 = G__15785;
chunk__15762_15771 = G__15786;
count__15763_15772 = G__15787;
i__15764_15773 = G__15788;
continue;
} else {
var map__15767_15789 = cljs.core.first.call(null,seq__15761_15783__$1);
var map__15767_15790__$1 = ((((!((map__15767_15789 == null)))?(((((map__15767_15789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15767_15789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15767_15789):map__15767_15789);
var binding_15791 = map__15767_15790__$1;
var init_15792 = cljs.core.get.call(null,map__15767_15790__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15791);

cljs.compiler.emitln.call(null," = ",init_15792,";");


var G__15793 = cljs.core.next.call(null,seq__15761_15783__$1);
var G__15794 = null;
var G__15795 = (0);
var G__15796 = (0);
seq__15761_15770 = G__15793;
chunk__15762_15771 = G__15794;
count__15763_15772 = G__15795;
i__15764_15773 = G__15796;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_15760_15769;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__15797){
var map__15798 = p__15797;
var map__15798__$1 = ((((!((map__15798 == null)))?(((((map__15798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15798):map__15798);
var frame = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4408__auto___15800 = cljs.core.count.call(null,exprs);
var i_15801 = (0);
while(true){
if((i_15801 < n__4408__auto___15800)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_15801)," = ",exprs.call(null,i_15801),";");

var G__15802 = (i_15801 + (1));
i_15801 = G__15802;
continue;
} else {
}
break;
}

var n__4408__auto___15803 = cljs.core.count.call(null,exprs);
var i_15804 = (0);
while(true){
if((i_15804 < n__4408__auto___15803)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_15804))," = ",temps.call(null,i_15804),";");

var G__15805 = (i_15804 + (1));
i_15804 = G__15805;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__15806){
var map__15807 = p__15806;
var map__15807__$1 = ((((!((map__15807 == null)))?(((((map__15807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15807):map__15807);
var bindings = cljs.core.get.call(null,map__15807__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__15807__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__15809_15817 = cljs.core.seq.call(null,bindings);
var chunk__15810_15818 = null;
var count__15811_15819 = (0);
var i__15812_15820 = (0);
while(true){
if((i__15812_15820 < count__15811_15819)){
var map__15813_15821 = cljs.core._nth.call(null,chunk__15810_15818,i__15812_15820);
var map__15813_15822__$1 = ((((!((map__15813_15821 == null)))?(((((map__15813_15821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15813_15821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15813_15821):map__15813_15821);
var binding_15823 = map__15813_15822__$1;
var init_15824 = cljs.core.get.call(null,map__15813_15822__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15823)," = ",init_15824,";");


var G__15825 = seq__15809_15817;
var G__15826 = chunk__15810_15818;
var G__15827 = count__15811_15819;
var G__15828 = (i__15812_15820 + (1));
seq__15809_15817 = G__15825;
chunk__15810_15818 = G__15826;
count__15811_15819 = G__15827;
i__15812_15820 = G__15828;
continue;
} else {
var temp__5457__auto___15829 = cljs.core.seq.call(null,seq__15809_15817);
if(temp__5457__auto___15829){
var seq__15809_15830__$1 = temp__5457__auto___15829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15809_15830__$1)){
var c__4351__auto___15831 = cljs.core.chunk_first.call(null,seq__15809_15830__$1);
var G__15832 = cljs.core.chunk_rest.call(null,seq__15809_15830__$1);
var G__15833 = c__4351__auto___15831;
var G__15834 = cljs.core.count.call(null,c__4351__auto___15831);
var G__15835 = (0);
seq__15809_15817 = G__15832;
chunk__15810_15818 = G__15833;
count__15811_15819 = G__15834;
i__15812_15820 = G__15835;
continue;
} else {
var map__15815_15836 = cljs.core.first.call(null,seq__15809_15830__$1);
var map__15815_15837__$1 = ((((!((map__15815_15836 == null)))?(((((map__15815_15836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15815_15836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15815_15836):map__15815_15836);
var binding_15838 = map__15815_15837__$1;
var init_15839 = cljs.core.get.call(null,map__15815_15837__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15838)," = ",init_15839,";");


var G__15840 = cljs.core.next.call(null,seq__15809_15830__$1);
var G__15841 = null;
var G__15842 = (0);
var G__15843 = (0);
seq__15809_15817 = G__15840;
chunk__15810_15818 = G__15841;
count__15811_15819 = G__15842;
i__15812_15820 = G__15843;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__15846){
var map__15847 = p__15846;
var map__15847__$1 = ((((!((map__15847 == null)))?(((((map__15847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15847):map__15847);
var expr = map__15847__$1;
var f = cljs.core.get.call(null,map__15847__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__15847__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15847__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3938__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3938__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3938__auto__ = protocol;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = tag;
if(cljs.core.truth_(and__3938__auto____$1)){
var or__3949__auto__ = (function (){var and__3938__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3938__auto____$2){
var and__3938__auto____$3 = protocol;
if(cljs.core.truth_(and__3938__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3938__auto____$3;
}
} else {
return and__3938__auto____$2;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto____$2 = (function (){var or__3949__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3938__auto____$2)){
var or__3949__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
var and__3938__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3938__auto____$3){
var and__3938__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3938__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3938__auto____$4;
}
} else {
return and__3938__auto____$3;
}
}
} else {
return and__3938__auto____$2;
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3949__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__15849 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return (arity > mfa);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env){
return (function (p1__15844_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15844_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env){
return (function (p1__15845_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15845_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15847,map__15847__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__15849,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__15849,(1),null);
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_15852 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_15852,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15853 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_15853,args)),(((mfa_15853 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_15853,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = js_QMARK_;
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_15854 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_15854," ? ",f__$1,fprop_15854,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_15854," ? ",f__$1,fprop_15854,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__15855){
var map__15856 = p__15855;
var map__15856__$1 = ((((!((map__15856 == null)))?(((((map__15856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15856):map__15856);
var ctor = cljs.core.get.call(null,map__15856__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__15856__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15856__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__15858){
var map__15859 = p__15858;
var map__15859__$1 = ((((!((map__15859 == null)))?(((((map__15859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15859):map__15859);
var target = cljs.core.get.call(null,map__15859__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__15859__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__15859__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__15861 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15861__$1 = ((((!((map__15861 == null)))?(((((map__15861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15861):map__15861);
var options = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__15861__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__15862 = options;
var map__15862__$1 = ((((!((map__15862 == null)))?(((((map__15862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15862):map__15862);
var target = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__15863 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__15868 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__15868__$1 = ((((!((map__15868 == null)))?(((((map__15868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15868):map__15868);
var node_libs = cljs.core.get.call(null,map__15868__$1,true);
var libs_to_load = cljs.core.get.call(null,map__15868__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__15863,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__15863,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__15870_15886 = cljs.core.seq.call(null,libs_to_load);
var chunk__15871_15887 = null;
var count__15872_15888 = (0);
var i__15873_15889 = (0);
while(true){
if((i__15873_15889 < count__15872_15888)){
var lib_15890 = cljs.core._nth.call(null,chunk__15871_15887,i__15873_15889);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15890)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15890),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15890),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15890),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15890),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15890,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15890),"');");
}

}
}
}


var G__15891 = seq__15870_15886;
var G__15892 = chunk__15871_15887;
var G__15893 = count__15872_15888;
var G__15894 = (i__15873_15889 + (1));
seq__15870_15886 = G__15891;
chunk__15871_15887 = G__15892;
count__15872_15888 = G__15893;
i__15873_15889 = G__15894;
continue;
} else {
var temp__5457__auto___15895 = cljs.core.seq.call(null,seq__15870_15886);
if(temp__5457__auto___15895){
var seq__15870_15896__$1 = temp__5457__auto___15895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15870_15896__$1)){
var c__4351__auto___15897 = cljs.core.chunk_first.call(null,seq__15870_15896__$1);
var G__15898 = cljs.core.chunk_rest.call(null,seq__15870_15896__$1);
var G__15899 = c__4351__auto___15897;
var G__15900 = cljs.core.count.call(null,c__4351__auto___15897);
var G__15901 = (0);
seq__15870_15886 = G__15898;
chunk__15871_15887 = G__15899;
count__15872_15888 = G__15900;
i__15873_15889 = G__15901;
continue;
} else {
var lib_15902 = cljs.core.first.call(null,seq__15870_15896__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15902)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15902),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15902),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15902),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15902),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15902,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15902),"');");
}

}
}
}


var G__15903 = cljs.core.next.call(null,seq__15870_15896__$1);
var G__15904 = null;
var G__15905 = (0);
var G__15906 = (0);
seq__15870_15886 = G__15903;
chunk__15871_15887 = G__15904;
count__15872_15888 = G__15905;
i__15873_15889 = G__15906;
continue;
}
} else {
}
}
break;
}

var seq__15874_15907 = cljs.core.seq.call(null,node_libs);
var chunk__15875_15908 = null;
var count__15876_15909 = (0);
var i__15877_15910 = (0);
while(true){
if((i__15877_15910 < count__15876_15909)){
var lib_15911 = cljs.core._nth.call(null,chunk__15875_15908,i__15877_15910);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15911)," = require('",lib_15911,"');");


var G__15912 = seq__15874_15907;
var G__15913 = chunk__15875_15908;
var G__15914 = count__15876_15909;
var G__15915 = (i__15877_15910 + (1));
seq__15874_15907 = G__15912;
chunk__15875_15908 = G__15913;
count__15876_15909 = G__15914;
i__15877_15910 = G__15915;
continue;
} else {
var temp__5457__auto___15916 = cljs.core.seq.call(null,seq__15874_15907);
if(temp__5457__auto___15916){
var seq__15874_15917__$1 = temp__5457__auto___15916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15874_15917__$1)){
var c__4351__auto___15918 = cljs.core.chunk_first.call(null,seq__15874_15917__$1);
var G__15919 = cljs.core.chunk_rest.call(null,seq__15874_15917__$1);
var G__15920 = c__4351__auto___15918;
var G__15921 = cljs.core.count.call(null,c__4351__auto___15918);
var G__15922 = (0);
seq__15874_15907 = G__15919;
chunk__15875_15908 = G__15920;
count__15876_15909 = G__15921;
i__15877_15910 = G__15922;
continue;
} else {
var lib_15923 = cljs.core.first.call(null,seq__15874_15917__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15923)," = require('",lib_15923,"');");


var G__15924 = cljs.core.next.call(null,seq__15874_15917__$1);
var G__15925 = null;
var G__15926 = (0);
var G__15927 = (0);
seq__15874_15907 = G__15924;
chunk__15875_15908 = G__15925;
count__15876_15909 = G__15926;
i__15877_15910 = G__15927;
continue;
}
} else {
}
}
break;
}

var seq__15878_15928 = cljs.core.seq.call(null,global_exports_libs);
var chunk__15879_15929 = null;
var count__15880_15930 = (0);
var i__15881_15931 = (0);
while(true){
if((i__15881_15931 < count__15880_15930)){
var lib_15932 = cljs.core._nth.call(null,chunk__15879_15929,i__15881_15931);
var map__15882_15933 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_15932));
var map__15882_15934__$1 = ((((!((map__15882_15933 == null)))?(((((map__15882_15933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15882_15933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15882_15933):map__15882_15933);
var global_exports_15935 = cljs.core.get.call(null,map__15882_15934__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_15932)," = goog.global[\"",cljs.core.get.call(null,global_exports_15935,cljs.core.symbol.call(null,lib_15932)),"\"];");


var G__15936 = seq__15878_15928;
var G__15937 = chunk__15879_15929;
var G__15938 = count__15880_15930;
var G__15939 = (i__15881_15931 + (1));
seq__15878_15928 = G__15936;
chunk__15879_15929 = G__15937;
count__15880_15930 = G__15938;
i__15881_15931 = G__15939;
continue;
} else {
var temp__5457__auto___15940 = cljs.core.seq.call(null,seq__15878_15928);
if(temp__5457__auto___15940){
var seq__15878_15941__$1 = temp__5457__auto___15940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15878_15941__$1)){
var c__4351__auto___15942 = cljs.core.chunk_first.call(null,seq__15878_15941__$1);
var G__15943 = cljs.core.chunk_rest.call(null,seq__15878_15941__$1);
var G__15944 = c__4351__auto___15942;
var G__15945 = cljs.core.count.call(null,c__4351__auto___15942);
var G__15946 = (0);
seq__15878_15928 = G__15943;
chunk__15879_15929 = G__15944;
count__15880_15930 = G__15945;
i__15881_15931 = G__15946;
continue;
} else {
var lib_15947 = cljs.core.first.call(null,seq__15878_15941__$1);
var map__15884_15948 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_15947));
var map__15884_15949__$1 = ((((!((map__15884_15948 == null)))?(((((map__15884_15948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15884_15948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15884_15948):map__15884_15948);
var global_exports_15950 = cljs.core.get.call(null,map__15884_15949__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_15947)," = goog.global[\"",cljs.core.get.call(null,global_exports_15950,cljs.core.symbol.call(null,lib_15947)),"\"];");


var G__15951 = cljs.core.next.call(null,seq__15878_15941__$1);
var G__15952 = null;
var G__15953 = (0);
var G__15954 = (0);
seq__15878_15928 = G__15951;
chunk__15879_15929 = G__15952;
count__15880_15930 = G__15953;
i__15881_15931 = G__15954;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__15955){
var map__15956 = p__15955;
var map__15956__$1 = ((((!((map__15956 == null)))?(((((map__15956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15956):map__15956);
var name = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__15958){
var map__15959 = p__15958;
var map__15959__$1 = ((((!((map__15959 == null)))?(((((map__15959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15959):map__15959);
var name = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__15961){
var map__15962 = p__15961;
var map__15962__$1 = ((((!((map__15962 == null)))?(((((map__15962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15962):map__15962);
var t = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15964_15982 = cljs.core.seq.call(null,protocols);
var chunk__15965_15983 = null;
var count__15966_15984 = (0);
var i__15967_15985 = (0);
while(true){
if((i__15967_15985 < count__15966_15984)){
var protocol_15986 = cljs.core._nth.call(null,chunk__15965_15983,i__15967_15985);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15986)].join('')),"}");


var G__15987 = seq__15964_15982;
var G__15988 = chunk__15965_15983;
var G__15989 = count__15966_15984;
var G__15990 = (i__15967_15985 + (1));
seq__15964_15982 = G__15987;
chunk__15965_15983 = G__15988;
count__15966_15984 = G__15989;
i__15967_15985 = G__15990;
continue;
} else {
var temp__5457__auto___15991 = cljs.core.seq.call(null,seq__15964_15982);
if(temp__5457__auto___15991){
var seq__15964_15992__$1 = temp__5457__auto___15991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15964_15992__$1)){
var c__4351__auto___15993 = cljs.core.chunk_first.call(null,seq__15964_15992__$1);
var G__15994 = cljs.core.chunk_rest.call(null,seq__15964_15992__$1);
var G__15995 = c__4351__auto___15993;
var G__15996 = cljs.core.count.call(null,c__4351__auto___15993);
var G__15997 = (0);
seq__15964_15982 = G__15994;
chunk__15965_15983 = G__15995;
count__15966_15984 = G__15996;
i__15967_15985 = G__15997;
continue;
} else {
var protocol_15998 = cljs.core.first.call(null,seq__15964_15992__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15998)].join('')),"}");


var G__15999 = cljs.core.next.call(null,seq__15964_15992__$1);
var G__16000 = null;
var G__16001 = (0);
var G__16002 = (0);
seq__15964_15982 = G__15999;
chunk__15965_15983 = G__16000;
count__15966_15984 = G__16001;
i__15967_15985 = G__16002;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15968_16003 = cljs.core.seq.call(null,fields__$1);
var chunk__15969_16004 = null;
var count__15970_16005 = (0);
var i__15971_16006 = (0);
while(true){
if((i__15971_16006 < count__15970_16005)){
var fld_16007 = cljs.core._nth.call(null,chunk__15969_16004,i__15971_16006);
cljs.compiler.emitln.call(null,"this.",fld_16007," = ",fld_16007,";");


var G__16008 = seq__15968_16003;
var G__16009 = chunk__15969_16004;
var G__16010 = count__15970_16005;
var G__16011 = (i__15971_16006 + (1));
seq__15968_16003 = G__16008;
chunk__15969_16004 = G__16009;
count__15970_16005 = G__16010;
i__15971_16006 = G__16011;
continue;
} else {
var temp__5457__auto___16012 = cljs.core.seq.call(null,seq__15968_16003);
if(temp__5457__auto___16012){
var seq__15968_16013__$1 = temp__5457__auto___16012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15968_16013__$1)){
var c__4351__auto___16014 = cljs.core.chunk_first.call(null,seq__15968_16013__$1);
var G__16015 = cljs.core.chunk_rest.call(null,seq__15968_16013__$1);
var G__16016 = c__4351__auto___16014;
var G__16017 = cljs.core.count.call(null,c__4351__auto___16014);
var G__16018 = (0);
seq__15968_16003 = G__16015;
chunk__15969_16004 = G__16016;
count__15970_16005 = G__16017;
i__15971_16006 = G__16018;
continue;
} else {
var fld_16019 = cljs.core.first.call(null,seq__15968_16013__$1);
cljs.compiler.emitln.call(null,"this.",fld_16019," = ",fld_16019,";");


var G__16020 = cljs.core.next.call(null,seq__15968_16013__$1);
var G__16021 = null;
var G__16022 = (0);
var G__16023 = (0);
seq__15968_16003 = G__16020;
chunk__15969_16004 = G__16021;
count__15970_16005 = G__16022;
i__15971_16006 = G__16023;
continue;
}
} else {
}
}
break;
}

var seq__15972_16024 = cljs.core.seq.call(null,pmasks);
var chunk__15973_16025 = null;
var count__15974_16026 = (0);
var i__15975_16027 = (0);
while(true){
if((i__15975_16027 < count__15974_16026)){
var vec__15976_16028 = cljs.core._nth.call(null,chunk__15973_16025,i__15975_16027);
var pno_16029 = cljs.core.nth.call(null,vec__15976_16028,(0),null);
var pmask_16030 = cljs.core.nth.call(null,vec__15976_16028,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16029,"$ = ",pmask_16030,";");


var G__16031 = seq__15972_16024;
var G__16032 = chunk__15973_16025;
var G__16033 = count__15974_16026;
var G__16034 = (i__15975_16027 + (1));
seq__15972_16024 = G__16031;
chunk__15973_16025 = G__16032;
count__15974_16026 = G__16033;
i__15975_16027 = G__16034;
continue;
} else {
var temp__5457__auto___16035 = cljs.core.seq.call(null,seq__15972_16024);
if(temp__5457__auto___16035){
var seq__15972_16036__$1 = temp__5457__auto___16035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15972_16036__$1)){
var c__4351__auto___16037 = cljs.core.chunk_first.call(null,seq__15972_16036__$1);
var G__16038 = cljs.core.chunk_rest.call(null,seq__15972_16036__$1);
var G__16039 = c__4351__auto___16037;
var G__16040 = cljs.core.count.call(null,c__4351__auto___16037);
var G__16041 = (0);
seq__15972_16024 = G__16038;
chunk__15973_16025 = G__16039;
count__15974_16026 = G__16040;
i__15975_16027 = G__16041;
continue;
} else {
var vec__15979_16042 = cljs.core.first.call(null,seq__15972_16036__$1);
var pno_16043 = cljs.core.nth.call(null,vec__15979_16042,(0),null);
var pmask_16044 = cljs.core.nth.call(null,vec__15979_16042,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16043,"$ = ",pmask_16044,";");


var G__16045 = cljs.core.next.call(null,seq__15972_16036__$1);
var G__16046 = null;
var G__16047 = (0);
var G__16048 = (0);
seq__15972_16024 = G__16045;
chunk__15973_16025 = G__16046;
count__15974_16026 = G__16047;
i__15975_16027 = G__16048;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__16049){
var map__16050 = p__16049;
var map__16050__$1 = ((((!((map__16050 == null)))?(((((map__16050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16050):map__16050);
var t = cljs.core.get.call(null,map__16050__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16050__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16050__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16050__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16050__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16052_16070 = cljs.core.seq.call(null,protocols);
var chunk__16053_16071 = null;
var count__16054_16072 = (0);
var i__16055_16073 = (0);
while(true){
if((i__16055_16073 < count__16054_16072)){
var protocol_16074 = cljs.core._nth.call(null,chunk__16053_16071,i__16055_16073);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16074)].join('')),"}");


var G__16075 = seq__16052_16070;
var G__16076 = chunk__16053_16071;
var G__16077 = count__16054_16072;
var G__16078 = (i__16055_16073 + (1));
seq__16052_16070 = G__16075;
chunk__16053_16071 = G__16076;
count__16054_16072 = G__16077;
i__16055_16073 = G__16078;
continue;
} else {
var temp__5457__auto___16079 = cljs.core.seq.call(null,seq__16052_16070);
if(temp__5457__auto___16079){
var seq__16052_16080__$1 = temp__5457__auto___16079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16052_16080__$1)){
var c__4351__auto___16081 = cljs.core.chunk_first.call(null,seq__16052_16080__$1);
var G__16082 = cljs.core.chunk_rest.call(null,seq__16052_16080__$1);
var G__16083 = c__4351__auto___16081;
var G__16084 = cljs.core.count.call(null,c__4351__auto___16081);
var G__16085 = (0);
seq__16052_16070 = G__16082;
chunk__16053_16071 = G__16083;
count__16054_16072 = G__16084;
i__16055_16073 = G__16085;
continue;
} else {
var protocol_16086 = cljs.core.first.call(null,seq__16052_16080__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16086)].join('')),"}");


var G__16087 = cljs.core.next.call(null,seq__16052_16080__$1);
var G__16088 = null;
var G__16089 = (0);
var G__16090 = (0);
seq__16052_16070 = G__16087;
chunk__16053_16071 = G__16088;
count__16054_16072 = G__16089;
i__16055_16073 = G__16090;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16056_16091 = cljs.core.seq.call(null,fields__$1);
var chunk__16057_16092 = null;
var count__16058_16093 = (0);
var i__16059_16094 = (0);
while(true){
if((i__16059_16094 < count__16058_16093)){
var fld_16095 = cljs.core._nth.call(null,chunk__16057_16092,i__16059_16094);
cljs.compiler.emitln.call(null,"this.",fld_16095," = ",fld_16095,";");


var G__16096 = seq__16056_16091;
var G__16097 = chunk__16057_16092;
var G__16098 = count__16058_16093;
var G__16099 = (i__16059_16094 + (1));
seq__16056_16091 = G__16096;
chunk__16057_16092 = G__16097;
count__16058_16093 = G__16098;
i__16059_16094 = G__16099;
continue;
} else {
var temp__5457__auto___16100 = cljs.core.seq.call(null,seq__16056_16091);
if(temp__5457__auto___16100){
var seq__16056_16101__$1 = temp__5457__auto___16100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16056_16101__$1)){
var c__4351__auto___16102 = cljs.core.chunk_first.call(null,seq__16056_16101__$1);
var G__16103 = cljs.core.chunk_rest.call(null,seq__16056_16101__$1);
var G__16104 = c__4351__auto___16102;
var G__16105 = cljs.core.count.call(null,c__4351__auto___16102);
var G__16106 = (0);
seq__16056_16091 = G__16103;
chunk__16057_16092 = G__16104;
count__16058_16093 = G__16105;
i__16059_16094 = G__16106;
continue;
} else {
var fld_16107 = cljs.core.first.call(null,seq__16056_16101__$1);
cljs.compiler.emitln.call(null,"this.",fld_16107," = ",fld_16107,";");


var G__16108 = cljs.core.next.call(null,seq__16056_16101__$1);
var G__16109 = null;
var G__16110 = (0);
var G__16111 = (0);
seq__16056_16091 = G__16108;
chunk__16057_16092 = G__16109;
count__16058_16093 = G__16110;
i__16059_16094 = G__16111;
continue;
}
} else {
}
}
break;
}

var seq__16060_16112 = cljs.core.seq.call(null,pmasks);
var chunk__16061_16113 = null;
var count__16062_16114 = (0);
var i__16063_16115 = (0);
while(true){
if((i__16063_16115 < count__16062_16114)){
var vec__16064_16116 = cljs.core._nth.call(null,chunk__16061_16113,i__16063_16115);
var pno_16117 = cljs.core.nth.call(null,vec__16064_16116,(0),null);
var pmask_16118 = cljs.core.nth.call(null,vec__16064_16116,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16117,"$ = ",pmask_16118,";");


var G__16119 = seq__16060_16112;
var G__16120 = chunk__16061_16113;
var G__16121 = count__16062_16114;
var G__16122 = (i__16063_16115 + (1));
seq__16060_16112 = G__16119;
chunk__16061_16113 = G__16120;
count__16062_16114 = G__16121;
i__16063_16115 = G__16122;
continue;
} else {
var temp__5457__auto___16123 = cljs.core.seq.call(null,seq__16060_16112);
if(temp__5457__auto___16123){
var seq__16060_16124__$1 = temp__5457__auto___16123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16060_16124__$1)){
var c__4351__auto___16125 = cljs.core.chunk_first.call(null,seq__16060_16124__$1);
var G__16126 = cljs.core.chunk_rest.call(null,seq__16060_16124__$1);
var G__16127 = c__4351__auto___16125;
var G__16128 = cljs.core.count.call(null,c__4351__auto___16125);
var G__16129 = (0);
seq__16060_16112 = G__16126;
chunk__16061_16113 = G__16127;
count__16062_16114 = G__16128;
i__16063_16115 = G__16129;
continue;
} else {
var vec__16067_16130 = cljs.core.first.call(null,seq__16060_16124__$1);
var pno_16131 = cljs.core.nth.call(null,vec__16067_16130,(0),null);
var pmask_16132 = cljs.core.nth.call(null,vec__16067_16130,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16131,"$ = ",pmask_16132,";");


var G__16133 = cljs.core.next.call(null,seq__16060_16124__$1);
var G__16134 = null;
var G__16135 = (0);
var G__16136 = (0);
seq__16060_16112 = G__16133;
chunk__16061_16113 = G__16134;
count__16062_16114 = G__16135;
i__16063_16115 = G__16136;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__16137){
var map__16138 = p__16137;
var map__16138__$1 = ((((!((map__16138 == null)))?(((((map__16138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16138):map__16138);
var target = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16140){
var map__16141 = p__16140;
var map__16141__$1 = ((((!((map__16141 == null)))?(((((map__16141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16141):map__16141);
var op = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3938__auto__ = code;
if(cljs.core.truth_(and__3938__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3938__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__15054__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15054__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__16146 = cljs.core.seq.call(null,table);
var chunk__16147 = null;
var count__16148 = (0);
var i__16149 = (0);
while(true){
if((i__16149 < count__16148)){
var vec__16150 = cljs.core._nth.call(null,chunk__16147,i__16149);
var sym = cljs.core.nth.call(null,vec__16150,(0),null);
var value = cljs.core.nth.call(null,vec__16150,(1),null);
var ns_16156 = cljs.core.namespace.call(null,sym);
var name_16157 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__16158 = seq__16146;
var G__16159 = chunk__16147;
var G__16160 = count__16148;
var G__16161 = (i__16149 + (1));
seq__16146 = G__16158;
chunk__16147 = G__16159;
count__16148 = G__16160;
i__16149 = G__16161;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16146);
if(temp__5457__auto__){
var seq__16146__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16146__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__16146__$1);
var G__16162 = cljs.core.chunk_rest.call(null,seq__16146__$1);
var G__16163 = c__4351__auto__;
var G__16164 = cljs.core.count.call(null,c__4351__auto__);
var G__16165 = (0);
seq__16146 = G__16162;
chunk__16147 = G__16163;
count__16148 = G__16164;
i__16149 = G__16165;
continue;
} else {
var vec__16153 = cljs.core.first.call(null,seq__16146__$1);
var sym = cljs.core.nth.call(null,vec__16153,(0),null);
var value = cljs.core.nth.call(null,vec__16153,(1),null);
var ns_16166 = cljs.core.namespace.call(null,sym);
var name_16167 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__16168 = cljs.core.next.call(null,seq__16146__$1);
var G__16169 = null;
var G__16170 = (0);
var G__16171 = (0);
seq__16146 = G__16168;
chunk__16147 = G__16169;
count__16148 = G__16170;
i__16149 = G__16171;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__16173 = arguments.length;
switch (G__16173) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_16178 = cljs.core.first.call(null,ks);
var vec__16174_16179 = cljs.core.conj.call(null,prefix,k_16178);
var top_16180 = cljs.core.nth.call(null,vec__16174_16179,(0),null);
var prefix_SINGLEQUOTE__16181 = vec__16174_16179;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_16178)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__16181) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_16180)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_16180))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16181)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_16180);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16181)),";");
}
} else {
}

var m_16182 = cljs.core.get.call(null,externs,k_16178);
if(cljs.core.empty_QMARK_.call(null,m_16182)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__16181,m_16182,top_level,known_externs);
}

var G__16183 = cljs.core.next.call(null,ks);
ks = G__16183;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
