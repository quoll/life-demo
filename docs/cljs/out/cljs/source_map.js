// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__14440){
var vec__14441 = p__14440;
var i = cljs.core.nth.call(null,vec__14441,(0),null);
var v = cljs.core.nth.call(null,vec__14441,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__14444 = seg;
var gcol = cljs.core.nth.call(null,vec__14444,(0),null);
var source = cljs.core.nth.call(null,vec__14444,(1),null);
var line = cljs.core.nth.call(null,vec__14444,(2),null);
var col = cljs.core.nth.call(null,vec__14444,(3),null);
var name = cljs.core.nth.call(null,vec__14444,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__14447 = seg;
var gcol = cljs.core.nth.call(null,vec__14447,(0),null);
var source = cljs.core.nth.call(null,vec__14447,(1),null);
var line = cljs.core.nth.call(null,vec__14447,(2),null);
var col = cljs.core.nth.call(null,vec__14447,(3),null);
var name = cljs.core.nth.call(null,vec__14447,(4),null);
var vec__14450 = relseg;
var rgcol = cljs.core.nth.call(null,vec__14450,(0),null);
var rsource = cljs.core.nth.call(null,vec__14450,(1),null);
var rline = cljs.core.nth.call(null,vec__14450,(2),null);
var rcol = cljs.core.nth.call(null,vec__14450,(3),null);
var rname = cljs.core.nth.call(null,vec__14450,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3949__auto__ = source;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3949__auto__ = line;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3949__auto__ = col;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__14453 = segmap;
var map__14453__$1 = ((((!((map__14453 == null)))?(((((map__14453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14453):map__14453);
var gcol = cljs.core.get.call(null,map__14453__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14453__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14453__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14453__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__14453,map__14453__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__14453,map__14453__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__14453,map__14453__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__14453,map__14453__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14453,map__14453__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__14453,map__14453__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__14456 = arguments.length;
switch (G__14456) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14457 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14461 = cljs.core.next.call(null,segs__$1);
var G__14462 = nrelseg;
var G__14463 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14461;
relseg__$1 = G__14462;
result__$1 = G__14463;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14457,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14457,(1),null);
var G__14464 = (gline + (1));
var G__14465 = cljs.core.next.call(null,lines__$1);
var G__14466 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14467 = result__$1;
gline = G__14464;
lines__$1 = G__14465;
relseg = G__14466;
result = G__14467;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__14469 = segmap;
var map__14469__$1 = ((((!((map__14469 == null)))?(((((map__14469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14469):map__14469);
var gcol = cljs.core.get.call(null,map__14469__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14469__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14469__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14469__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__14469,map__14469__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__14469,map__14469__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__14468_SHARP_){
return cljs.core.conj.call(null,p1__14468_SHARP_,d__$1);
});})(map__14469,map__14469__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14469,map__14469__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__14472 = arguments.length;
switch (G__14472) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14473 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14477 = cljs.core.next.call(null,segs__$1);
var G__14478 = nrelseg;
var G__14479 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14477;
relseg__$1 = G__14478;
result__$1 = G__14479;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14473,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14473,(1),null);
var G__14480 = (gline + (1));
var G__14481 = cljs.core.next.call(null,lines__$1);
var G__14482 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14483 = result__$1;
gline = G__14480;
lines__$1 = G__14481;
relseg = G__14482;
result = G__14483;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__14484){
var vec__14485 = p__14484;
var _ = cljs.core.nth.call(null,vec__14485,(0),null);
var source = cljs.core.nth.call(null,vec__14485,(1),null);
var line = cljs.core.nth.call(null,vec__14485,(2),null);
var col = cljs.core.nth.call(null,vec__14485,(3),null);
var name = cljs.core.nth.call(null,vec__14485,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__14488){
var vec__14489 = p__14488;
var gcol = cljs.core.nth.call(null,vec__14489,(0),null);
var sidx = cljs.core.nth.call(null,vec__14489,(1),null);
var line = cljs.core.nth.call(null,vec__14489,(2),null);
var col = cljs.core.nth.call(null,vec__14489,(3),null);
var name = cljs.core.nth.call(null,vec__14489,(4),null);
var seg = vec__14489;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__14489,gcol,sidx,line,col,name,seg,relseg){
return (function (p__14492){
var vec__14493 = p__14492;
var _ = cljs.core.nth.call(null,vec__14493,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14493,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__14493,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__14493,(3),null);
var lname = cljs.core.nth.call(null,vec__14493,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__14489,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__14499 = cljs.core.seq.call(null,infos);
var chunk__14500 = null;
var count__14501 = (0);
var i__14502 = (0);
while(true){
if((i__14502 < count__14501)){
var info = cljs.core._nth.call(null,chunk__14500,i__14502);
var segv_14581 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14582 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14583 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14582 > (lc_14583 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14499,chunk__14500,count__14501,i__14502,segv_14581,gline_14582,lc_14583,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14582 - (lc_14583 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14581], null));
});})(seq__14499,chunk__14500,count__14501,i__14502,segv_14581,gline_14582,lc_14583,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14499,chunk__14500,count__14501,i__14502,segv_14581,gline_14582,lc_14583,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14582], null),cljs.core.conj,segv_14581);
});})(seq__14499,chunk__14500,count__14501,i__14502,segv_14581,gline_14582,lc_14583,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14584 = seq__14499;
var G__14585 = chunk__14500;
var G__14586 = count__14501;
var G__14587 = (i__14502 + (1));
seq__14499 = G__14584;
chunk__14500 = G__14585;
count__14501 = G__14586;
i__14502 = G__14587;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14499);
if(temp__5457__auto__){
var seq__14499__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14499__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14499__$1);
var G__14588 = cljs.core.chunk_rest.call(null,seq__14499__$1);
var G__14589 = c__4351__auto__;
var G__14590 = cljs.core.count.call(null,c__4351__auto__);
var G__14591 = (0);
seq__14499 = G__14588;
chunk__14500 = G__14589;
count__14501 = G__14590;
i__14502 = G__14591;
continue;
} else {
var info = cljs.core.first.call(null,seq__14499__$1);
var segv_14592 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14593 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14594 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14593 > (lc_14594 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14499,chunk__14500,count__14501,i__14502,segv_14592,gline_14593,lc_14594,info,seq__14499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14593 - (lc_14594 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14592], null));
});})(seq__14499,chunk__14500,count__14501,i__14502,segv_14592,gline_14593,lc_14594,info,seq__14499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14499,chunk__14500,count__14501,i__14502,segv_14592,gline_14593,lc_14594,info,seq__14499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14593], null),cljs.core.conj,segv_14592);
});})(seq__14499,chunk__14500,count__14501,i__14502,segv_14592,gline_14593,lc_14594,info,seq__14499__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14595 = cljs.core.next.call(null,seq__14499__$1);
var G__14596 = null;
var G__14597 = (0);
var G__14598 = (0);
seq__14499 = G__14595;
chunk__14500 = G__14596;
count__14501 = G__14597;
i__14502 = G__14598;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__14503_14599 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__14504_14600 = null;
var count__14505_14601 = (0);
var i__14506_14602 = (0);
while(true){
if((i__14506_14602 < count__14505_14601)){
var vec__14507_14603 = cljs.core._nth.call(null,chunk__14504_14600,i__14506_14602);
var source_idx_14604 = cljs.core.nth.call(null,vec__14507_14603,(0),null);
var vec__14510_14605 = cljs.core.nth.call(null,vec__14507_14603,(1),null);
var __14606 = cljs.core.nth.call(null,vec__14510_14605,(0),null);
var lines_14607__$1 = cljs.core.nth.call(null,vec__14510_14605,(1),null);
var seq__14513_14608 = cljs.core.seq.call(null,lines_14607__$1);
var chunk__14514_14609 = null;
var count__14515_14610 = (0);
var i__14516_14611 = (0);
while(true){
if((i__14516_14611 < count__14515_14610)){
var vec__14517_14612 = cljs.core._nth.call(null,chunk__14514_14609,i__14516_14611);
var line_14613 = cljs.core.nth.call(null,vec__14517_14612,(0),null);
var cols_14614 = cljs.core.nth.call(null,vec__14517_14612,(1),null);
var seq__14520_14615 = cljs.core.seq.call(null,cols_14614);
var chunk__14521_14616 = null;
var count__14522_14617 = (0);
var i__14523_14618 = (0);
while(true){
if((i__14523_14618 < count__14522_14617)){
var vec__14524_14619 = cljs.core._nth.call(null,chunk__14521_14616,i__14523_14618);
var col_14620 = cljs.core.nth.call(null,vec__14524_14619,(0),null);
var infos_14621 = cljs.core.nth.call(null,vec__14524_14619,(1),null);
encode_cols.call(null,infos_14621,source_idx_14604,line_14613,col_14620);


var G__14622 = seq__14520_14615;
var G__14623 = chunk__14521_14616;
var G__14624 = count__14522_14617;
var G__14625 = (i__14523_14618 + (1));
seq__14520_14615 = G__14622;
chunk__14521_14616 = G__14623;
count__14522_14617 = G__14624;
i__14523_14618 = G__14625;
continue;
} else {
var temp__5457__auto___14626 = cljs.core.seq.call(null,seq__14520_14615);
if(temp__5457__auto___14626){
var seq__14520_14627__$1 = temp__5457__auto___14626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14520_14627__$1)){
var c__4351__auto___14628 = cljs.core.chunk_first.call(null,seq__14520_14627__$1);
var G__14629 = cljs.core.chunk_rest.call(null,seq__14520_14627__$1);
var G__14630 = c__4351__auto___14628;
var G__14631 = cljs.core.count.call(null,c__4351__auto___14628);
var G__14632 = (0);
seq__14520_14615 = G__14629;
chunk__14521_14616 = G__14630;
count__14522_14617 = G__14631;
i__14523_14618 = G__14632;
continue;
} else {
var vec__14527_14633 = cljs.core.first.call(null,seq__14520_14627__$1);
var col_14634 = cljs.core.nth.call(null,vec__14527_14633,(0),null);
var infos_14635 = cljs.core.nth.call(null,vec__14527_14633,(1),null);
encode_cols.call(null,infos_14635,source_idx_14604,line_14613,col_14634);


var G__14636 = cljs.core.next.call(null,seq__14520_14627__$1);
var G__14637 = null;
var G__14638 = (0);
var G__14639 = (0);
seq__14520_14615 = G__14636;
chunk__14521_14616 = G__14637;
count__14522_14617 = G__14638;
i__14523_14618 = G__14639;
continue;
}
} else {
}
}
break;
}


var G__14640 = seq__14513_14608;
var G__14641 = chunk__14514_14609;
var G__14642 = count__14515_14610;
var G__14643 = (i__14516_14611 + (1));
seq__14513_14608 = G__14640;
chunk__14514_14609 = G__14641;
count__14515_14610 = G__14642;
i__14516_14611 = G__14643;
continue;
} else {
var temp__5457__auto___14644 = cljs.core.seq.call(null,seq__14513_14608);
if(temp__5457__auto___14644){
var seq__14513_14645__$1 = temp__5457__auto___14644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14513_14645__$1)){
var c__4351__auto___14646 = cljs.core.chunk_first.call(null,seq__14513_14645__$1);
var G__14647 = cljs.core.chunk_rest.call(null,seq__14513_14645__$1);
var G__14648 = c__4351__auto___14646;
var G__14649 = cljs.core.count.call(null,c__4351__auto___14646);
var G__14650 = (0);
seq__14513_14608 = G__14647;
chunk__14514_14609 = G__14648;
count__14515_14610 = G__14649;
i__14516_14611 = G__14650;
continue;
} else {
var vec__14530_14651 = cljs.core.first.call(null,seq__14513_14645__$1);
var line_14652 = cljs.core.nth.call(null,vec__14530_14651,(0),null);
var cols_14653 = cljs.core.nth.call(null,vec__14530_14651,(1),null);
var seq__14533_14654 = cljs.core.seq.call(null,cols_14653);
var chunk__14534_14655 = null;
var count__14535_14656 = (0);
var i__14536_14657 = (0);
while(true){
if((i__14536_14657 < count__14535_14656)){
var vec__14537_14658 = cljs.core._nth.call(null,chunk__14534_14655,i__14536_14657);
var col_14659 = cljs.core.nth.call(null,vec__14537_14658,(0),null);
var infos_14660 = cljs.core.nth.call(null,vec__14537_14658,(1),null);
encode_cols.call(null,infos_14660,source_idx_14604,line_14652,col_14659);


var G__14661 = seq__14533_14654;
var G__14662 = chunk__14534_14655;
var G__14663 = count__14535_14656;
var G__14664 = (i__14536_14657 + (1));
seq__14533_14654 = G__14661;
chunk__14534_14655 = G__14662;
count__14535_14656 = G__14663;
i__14536_14657 = G__14664;
continue;
} else {
var temp__5457__auto___14665__$1 = cljs.core.seq.call(null,seq__14533_14654);
if(temp__5457__auto___14665__$1){
var seq__14533_14666__$1 = temp__5457__auto___14665__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14533_14666__$1)){
var c__4351__auto___14667 = cljs.core.chunk_first.call(null,seq__14533_14666__$1);
var G__14668 = cljs.core.chunk_rest.call(null,seq__14533_14666__$1);
var G__14669 = c__4351__auto___14667;
var G__14670 = cljs.core.count.call(null,c__4351__auto___14667);
var G__14671 = (0);
seq__14533_14654 = G__14668;
chunk__14534_14655 = G__14669;
count__14535_14656 = G__14670;
i__14536_14657 = G__14671;
continue;
} else {
var vec__14540_14672 = cljs.core.first.call(null,seq__14533_14666__$1);
var col_14673 = cljs.core.nth.call(null,vec__14540_14672,(0),null);
var infos_14674 = cljs.core.nth.call(null,vec__14540_14672,(1),null);
encode_cols.call(null,infos_14674,source_idx_14604,line_14652,col_14673);


var G__14675 = cljs.core.next.call(null,seq__14533_14666__$1);
var G__14676 = null;
var G__14677 = (0);
var G__14678 = (0);
seq__14533_14654 = G__14675;
chunk__14534_14655 = G__14676;
count__14535_14656 = G__14677;
i__14536_14657 = G__14678;
continue;
}
} else {
}
}
break;
}


var G__14679 = cljs.core.next.call(null,seq__14513_14645__$1);
var G__14680 = null;
var G__14681 = (0);
var G__14682 = (0);
seq__14513_14608 = G__14679;
chunk__14514_14609 = G__14680;
count__14515_14610 = G__14681;
i__14516_14611 = G__14682;
continue;
}
} else {
}
}
break;
}


var G__14683 = seq__14503_14599;
var G__14684 = chunk__14504_14600;
var G__14685 = count__14505_14601;
var G__14686 = (i__14506_14602 + (1));
seq__14503_14599 = G__14683;
chunk__14504_14600 = G__14684;
count__14505_14601 = G__14685;
i__14506_14602 = G__14686;
continue;
} else {
var temp__5457__auto___14687 = cljs.core.seq.call(null,seq__14503_14599);
if(temp__5457__auto___14687){
var seq__14503_14688__$1 = temp__5457__auto___14687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14503_14688__$1)){
var c__4351__auto___14689 = cljs.core.chunk_first.call(null,seq__14503_14688__$1);
var G__14690 = cljs.core.chunk_rest.call(null,seq__14503_14688__$1);
var G__14691 = c__4351__auto___14689;
var G__14692 = cljs.core.count.call(null,c__4351__auto___14689);
var G__14693 = (0);
seq__14503_14599 = G__14690;
chunk__14504_14600 = G__14691;
count__14505_14601 = G__14692;
i__14506_14602 = G__14693;
continue;
} else {
var vec__14543_14694 = cljs.core.first.call(null,seq__14503_14688__$1);
var source_idx_14695 = cljs.core.nth.call(null,vec__14543_14694,(0),null);
var vec__14546_14696 = cljs.core.nth.call(null,vec__14543_14694,(1),null);
var __14697 = cljs.core.nth.call(null,vec__14546_14696,(0),null);
var lines_14698__$1 = cljs.core.nth.call(null,vec__14546_14696,(1),null);
var seq__14549_14699 = cljs.core.seq.call(null,lines_14698__$1);
var chunk__14550_14700 = null;
var count__14551_14701 = (0);
var i__14552_14702 = (0);
while(true){
if((i__14552_14702 < count__14551_14701)){
var vec__14553_14703 = cljs.core._nth.call(null,chunk__14550_14700,i__14552_14702);
var line_14704 = cljs.core.nth.call(null,vec__14553_14703,(0),null);
var cols_14705 = cljs.core.nth.call(null,vec__14553_14703,(1),null);
var seq__14556_14706 = cljs.core.seq.call(null,cols_14705);
var chunk__14557_14707 = null;
var count__14558_14708 = (0);
var i__14559_14709 = (0);
while(true){
if((i__14559_14709 < count__14558_14708)){
var vec__14560_14710 = cljs.core._nth.call(null,chunk__14557_14707,i__14559_14709);
var col_14711 = cljs.core.nth.call(null,vec__14560_14710,(0),null);
var infos_14712 = cljs.core.nth.call(null,vec__14560_14710,(1),null);
encode_cols.call(null,infos_14712,source_idx_14695,line_14704,col_14711);


var G__14713 = seq__14556_14706;
var G__14714 = chunk__14557_14707;
var G__14715 = count__14558_14708;
var G__14716 = (i__14559_14709 + (1));
seq__14556_14706 = G__14713;
chunk__14557_14707 = G__14714;
count__14558_14708 = G__14715;
i__14559_14709 = G__14716;
continue;
} else {
var temp__5457__auto___14717__$1 = cljs.core.seq.call(null,seq__14556_14706);
if(temp__5457__auto___14717__$1){
var seq__14556_14718__$1 = temp__5457__auto___14717__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14556_14718__$1)){
var c__4351__auto___14719 = cljs.core.chunk_first.call(null,seq__14556_14718__$1);
var G__14720 = cljs.core.chunk_rest.call(null,seq__14556_14718__$1);
var G__14721 = c__4351__auto___14719;
var G__14722 = cljs.core.count.call(null,c__4351__auto___14719);
var G__14723 = (0);
seq__14556_14706 = G__14720;
chunk__14557_14707 = G__14721;
count__14558_14708 = G__14722;
i__14559_14709 = G__14723;
continue;
} else {
var vec__14563_14724 = cljs.core.first.call(null,seq__14556_14718__$1);
var col_14725 = cljs.core.nth.call(null,vec__14563_14724,(0),null);
var infos_14726 = cljs.core.nth.call(null,vec__14563_14724,(1),null);
encode_cols.call(null,infos_14726,source_idx_14695,line_14704,col_14725);


var G__14727 = cljs.core.next.call(null,seq__14556_14718__$1);
var G__14728 = null;
var G__14729 = (0);
var G__14730 = (0);
seq__14556_14706 = G__14727;
chunk__14557_14707 = G__14728;
count__14558_14708 = G__14729;
i__14559_14709 = G__14730;
continue;
}
} else {
}
}
break;
}


var G__14731 = seq__14549_14699;
var G__14732 = chunk__14550_14700;
var G__14733 = count__14551_14701;
var G__14734 = (i__14552_14702 + (1));
seq__14549_14699 = G__14731;
chunk__14550_14700 = G__14732;
count__14551_14701 = G__14733;
i__14552_14702 = G__14734;
continue;
} else {
var temp__5457__auto___14735__$1 = cljs.core.seq.call(null,seq__14549_14699);
if(temp__5457__auto___14735__$1){
var seq__14549_14736__$1 = temp__5457__auto___14735__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14549_14736__$1)){
var c__4351__auto___14737 = cljs.core.chunk_first.call(null,seq__14549_14736__$1);
var G__14738 = cljs.core.chunk_rest.call(null,seq__14549_14736__$1);
var G__14739 = c__4351__auto___14737;
var G__14740 = cljs.core.count.call(null,c__4351__auto___14737);
var G__14741 = (0);
seq__14549_14699 = G__14738;
chunk__14550_14700 = G__14739;
count__14551_14701 = G__14740;
i__14552_14702 = G__14741;
continue;
} else {
var vec__14566_14742 = cljs.core.first.call(null,seq__14549_14736__$1);
var line_14743 = cljs.core.nth.call(null,vec__14566_14742,(0),null);
var cols_14744 = cljs.core.nth.call(null,vec__14566_14742,(1),null);
var seq__14569_14745 = cljs.core.seq.call(null,cols_14744);
var chunk__14570_14746 = null;
var count__14571_14747 = (0);
var i__14572_14748 = (0);
while(true){
if((i__14572_14748 < count__14571_14747)){
var vec__14573_14749 = cljs.core._nth.call(null,chunk__14570_14746,i__14572_14748);
var col_14750 = cljs.core.nth.call(null,vec__14573_14749,(0),null);
var infos_14751 = cljs.core.nth.call(null,vec__14573_14749,(1),null);
encode_cols.call(null,infos_14751,source_idx_14695,line_14743,col_14750);


var G__14752 = seq__14569_14745;
var G__14753 = chunk__14570_14746;
var G__14754 = count__14571_14747;
var G__14755 = (i__14572_14748 + (1));
seq__14569_14745 = G__14752;
chunk__14570_14746 = G__14753;
count__14571_14747 = G__14754;
i__14572_14748 = G__14755;
continue;
} else {
var temp__5457__auto___14756__$2 = cljs.core.seq.call(null,seq__14569_14745);
if(temp__5457__auto___14756__$2){
var seq__14569_14757__$1 = temp__5457__auto___14756__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14569_14757__$1)){
var c__4351__auto___14758 = cljs.core.chunk_first.call(null,seq__14569_14757__$1);
var G__14759 = cljs.core.chunk_rest.call(null,seq__14569_14757__$1);
var G__14760 = c__4351__auto___14758;
var G__14761 = cljs.core.count.call(null,c__4351__auto___14758);
var G__14762 = (0);
seq__14569_14745 = G__14759;
chunk__14570_14746 = G__14760;
count__14571_14747 = G__14761;
i__14572_14748 = G__14762;
continue;
} else {
var vec__14576_14763 = cljs.core.first.call(null,seq__14569_14757__$1);
var col_14764 = cljs.core.nth.call(null,vec__14576_14763,(0),null);
var infos_14765 = cljs.core.nth.call(null,vec__14576_14763,(1),null);
encode_cols.call(null,infos_14765,source_idx_14695,line_14743,col_14764);


var G__14766 = cljs.core.next.call(null,seq__14569_14757__$1);
var G__14767 = null;
var G__14768 = (0);
var G__14769 = (0);
seq__14569_14745 = G__14766;
chunk__14570_14746 = G__14767;
count__14571_14747 = G__14768;
i__14572_14748 = G__14769;
continue;
}
} else {
}
}
break;
}


var G__14770 = cljs.core.next.call(null,seq__14549_14736__$1);
var G__14771 = null;
var G__14772 = (0);
var G__14773 = (0);
seq__14549_14699 = G__14770;
chunk__14550_14700 = G__14771;
count__14551_14701 = G__14772;
i__14552_14702 = G__14773;
continue;
}
} else {
}
}
break;
}


var G__14774 = cljs.core.next.call(null,seq__14503_14688__$1);
var G__14775 = null;
var G__14776 = (0);
var G__14777 = (0);
seq__14503_14599 = G__14774;
chunk__14504_14600 = G__14775;
count__14505_14601 = G__14776;
i__14506_14602 = G__14777;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14579 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14496_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14496_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14497_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__14497_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14498_SHARP_){
return clojure.string.join.call(null,",",p1__14498_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__14580 = G__14579;
goog.object.set(G__14580,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14580;
} else {
return G__14579;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__14778 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__14778,(0),null);
var col_map = cljs.core.nth.call(null,vec__14778,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__14781 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__14781,(0),null);
var infos = cljs.core.nth.call(null,vec__14781,(1),null);
var G__14787 = cljs.core.next.call(null,col_map_seq);
var G__14788 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14781,col,infos,vec__14778,line,col_map){
return (function (v,p__14784){
var map__14785 = p__14784;
var map__14785__$1 = ((((!((map__14785 == null)))?(((((map__14785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14785):map__14785);
var gline = cljs.core.get.call(null,map__14785__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__14785__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14781,col,infos,vec__14778,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__14787;
new_cols = G__14788;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__14789 = cljs.core.next.call(null,line_map_seq);
var G__14790 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__14789;
new_lines = G__14790;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__14791_14853 = cljs.core.seq.call(null,reverse_map);
var chunk__14792_14854 = null;
var count__14793_14855 = (0);
var i__14794_14856 = (0);
while(true){
if((i__14794_14856 < count__14793_14855)){
var vec__14795_14857 = cljs.core._nth.call(null,chunk__14792_14854,i__14794_14856);
var line_14858 = cljs.core.nth.call(null,vec__14795_14857,(0),null);
var columns_14859 = cljs.core.nth.call(null,vec__14795_14857,(1),null);
var seq__14798_14860 = cljs.core.seq.call(null,columns_14859);
var chunk__14799_14861 = null;
var count__14800_14862 = (0);
var i__14801_14863 = (0);
while(true){
if((i__14801_14863 < count__14800_14862)){
var vec__14802_14864 = cljs.core._nth.call(null,chunk__14799_14861,i__14801_14863);
var column_14865 = cljs.core.nth.call(null,vec__14802_14864,(0),null);
var column_info_14866 = cljs.core.nth.call(null,vec__14802_14864,(1),null);
var seq__14805_14867 = cljs.core.seq.call(null,column_info_14866);
var chunk__14806_14868 = null;
var count__14807_14869 = (0);
var i__14808_14870 = (0);
while(true){
if((i__14808_14870 < count__14807_14869)){
var map__14809_14871 = cljs.core._nth.call(null,chunk__14806_14868,i__14808_14870);
var map__14809_14872__$1 = ((((!((map__14809_14871 == null)))?(((((map__14809_14871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14809_14871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14809_14871):map__14809_14871);
var gline_14873 = cljs.core.get.call(null,map__14809_14872__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14874 = cljs.core.get.call(null,map__14809_14872__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14875 = cljs.core.get.call(null,map__14809_14872__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14873], null),cljs.core.fnil.call(null,((function (seq__14805_14867,chunk__14806_14868,count__14807_14869,i__14808_14870,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14809_14871,map__14809_14872__$1,gline_14873,gcol_14874,name_14875,vec__14802_14864,column_14865,column_info_14866,vec__14795_14857,line_14858,columns_14859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14874], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14858,new cljs.core.Keyword(null,"col","col",-1959363084),column_14865,new cljs.core.Keyword(null,"name","name",1843675177),name_14875], null));
});})(seq__14805_14867,chunk__14806_14868,count__14807_14869,i__14808_14870,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14809_14871,map__14809_14872__$1,gline_14873,gcol_14874,name_14875,vec__14802_14864,column_14865,column_info_14866,vec__14795_14857,line_14858,columns_14859,inverted))
,cljs.core.sorted_map.call(null)));


var G__14876 = seq__14805_14867;
var G__14877 = chunk__14806_14868;
var G__14878 = count__14807_14869;
var G__14879 = (i__14808_14870 + (1));
seq__14805_14867 = G__14876;
chunk__14806_14868 = G__14877;
count__14807_14869 = G__14878;
i__14808_14870 = G__14879;
continue;
} else {
var temp__5457__auto___14880 = cljs.core.seq.call(null,seq__14805_14867);
if(temp__5457__auto___14880){
var seq__14805_14881__$1 = temp__5457__auto___14880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14805_14881__$1)){
var c__4351__auto___14882 = cljs.core.chunk_first.call(null,seq__14805_14881__$1);
var G__14883 = cljs.core.chunk_rest.call(null,seq__14805_14881__$1);
var G__14884 = c__4351__auto___14882;
var G__14885 = cljs.core.count.call(null,c__4351__auto___14882);
var G__14886 = (0);
seq__14805_14867 = G__14883;
chunk__14806_14868 = G__14884;
count__14807_14869 = G__14885;
i__14808_14870 = G__14886;
continue;
} else {
var map__14811_14887 = cljs.core.first.call(null,seq__14805_14881__$1);
var map__14811_14888__$1 = ((((!((map__14811_14887 == null)))?(((((map__14811_14887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14811_14887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14811_14887):map__14811_14887);
var gline_14889 = cljs.core.get.call(null,map__14811_14888__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14890 = cljs.core.get.call(null,map__14811_14888__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14891 = cljs.core.get.call(null,map__14811_14888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14889], null),cljs.core.fnil.call(null,((function (seq__14805_14867,chunk__14806_14868,count__14807_14869,i__14808_14870,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14811_14887,map__14811_14888__$1,gline_14889,gcol_14890,name_14891,seq__14805_14881__$1,temp__5457__auto___14880,vec__14802_14864,column_14865,column_info_14866,vec__14795_14857,line_14858,columns_14859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14890], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14858,new cljs.core.Keyword(null,"col","col",-1959363084),column_14865,new cljs.core.Keyword(null,"name","name",1843675177),name_14891], null));
});})(seq__14805_14867,chunk__14806_14868,count__14807_14869,i__14808_14870,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14811_14887,map__14811_14888__$1,gline_14889,gcol_14890,name_14891,seq__14805_14881__$1,temp__5457__auto___14880,vec__14802_14864,column_14865,column_info_14866,vec__14795_14857,line_14858,columns_14859,inverted))
,cljs.core.sorted_map.call(null)));


var G__14892 = cljs.core.next.call(null,seq__14805_14881__$1);
var G__14893 = null;
var G__14894 = (0);
var G__14895 = (0);
seq__14805_14867 = G__14892;
chunk__14806_14868 = G__14893;
count__14807_14869 = G__14894;
i__14808_14870 = G__14895;
continue;
}
} else {
}
}
break;
}


var G__14896 = seq__14798_14860;
var G__14897 = chunk__14799_14861;
var G__14898 = count__14800_14862;
var G__14899 = (i__14801_14863 + (1));
seq__14798_14860 = G__14896;
chunk__14799_14861 = G__14897;
count__14800_14862 = G__14898;
i__14801_14863 = G__14899;
continue;
} else {
var temp__5457__auto___14900 = cljs.core.seq.call(null,seq__14798_14860);
if(temp__5457__auto___14900){
var seq__14798_14901__$1 = temp__5457__auto___14900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14798_14901__$1)){
var c__4351__auto___14902 = cljs.core.chunk_first.call(null,seq__14798_14901__$1);
var G__14903 = cljs.core.chunk_rest.call(null,seq__14798_14901__$1);
var G__14904 = c__4351__auto___14902;
var G__14905 = cljs.core.count.call(null,c__4351__auto___14902);
var G__14906 = (0);
seq__14798_14860 = G__14903;
chunk__14799_14861 = G__14904;
count__14800_14862 = G__14905;
i__14801_14863 = G__14906;
continue;
} else {
var vec__14813_14907 = cljs.core.first.call(null,seq__14798_14901__$1);
var column_14908 = cljs.core.nth.call(null,vec__14813_14907,(0),null);
var column_info_14909 = cljs.core.nth.call(null,vec__14813_14907,(1),null);
var seq__14816_14910 = cljs.core.seq.call(null,column_info_14909);
var chunk__14817_14911 = null;
var count__14818_14912 = (0);
var i__14819_14913 = (0);
while(true){
if((i__14819_14913 < count__14818_14912)){
var map__14820_14914 = cljs.core._nth.call(null,chunk__14817_14911,i__14819_14913);
var map__14820_14915__$1 = ((((!((map__14820_14914 == null)))?(((((map__14820_14914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14820_14914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14820_14914):map__14820_14914);
var gline_14916 = cljs.core.get.call(null,map__14820_14915__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14917 = cljs.core.get.call(null,map__14820_14915__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14918 = cljs.core.get.call(null,map__14820_14915__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14916], null),cljs.core.fnil.call(null,((function (seq__14816_14910,chunk__14817_14911,count__14818_14912,i__14819_14913,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14820_14914,map__14820_14915__$1,gline_14916,gcol_14917,name_14918,vec__14813_14907,column_14908,column_info_14909,seq__14798_14901__$1,temp__5457__auto___14900,vec__14795_14857,line_14858,columns_14859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14917], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14858,new cljs.core.Keyword(null,"col","col",-1959363084),column_14908,new cljs.core.Keyword(null,"name","name",1843675177),name_14918], null));
});})(seq__14816_14910,chunk__14817_14911,count__14818_14912,i__14819_14913,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14820_14914,map__14820_14915__$1,gline_14916,gcol_14917,name_14918,vec__14813_14907,column_14908,column_info_14909,seq__14798_14901__$1,temp__5457__auto___14900,vec__14795_14857,line_14858,columns_14859,inverted))
,cljs.core.sorted_map.call(null)));


var G__14919 = seq__14816_14910;
var G__14920 = chunk__14817_14911;
var G__14921 = count__14818_14912;
var G__14922 = (i__14819_14913 + (1));
seq__14816_14910 = G__14919;
chunk__14817_14911 = G__14920;
count__14818_14912 = G__14921;
i__14819_14913 = G__14922;
continue;
} else {
var temp__5457__auto___14923__$1 = cljs.core.seq.call(null,seq__14816_14910);
if(temp__5457__auto___14923__$1){
var seq__14816_14924__$1 = temp__5457__auto___14923__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14816_14924__$1)){
var c__4351__auto___14925 = cljs.core.chunk_first.call(null,seq__14816_14924__$1);
var G__14926 = cljs.core.chunk_rest.call(null,seq__14816_14924__$1);
var G__14927 = c__4351__auto___14925;
var G__14928 = cljs.core.count.call(null,c__4351__auto___14925);
var G__14929 = (0);
seq__14816_14910 = G__14926;
chunk__14817_14911 = G__14927;
count__14818_14912 = G__14928;
i__14819_14913 = G__14929;
continue;
} else {
var map__14822_14930 = cljs.core.first.call(null,seq__14816_14924__$1);
var map__14822_14931__$1 = ((((!((map__14822_14930 == null)))?(((((map__14822_14930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14822_14930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14822_14930):map__14822_14930);
var gline_14932 = cljs.core.get.call(null,map__14822_14931__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14933 = cljs.core.get.call(null,map__14822_14931__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14934 = cljs.core.get.call(null,map__14822_14931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14932], null),cljs.core.fnil.call(null,((function (seq__14816_14910,chunk__14817_14911,count__14818_14912,i__14819_14913,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14822_14930,map__14822_14931__$1,gline_14932,gcol_14933,name_14934,seq__14816_14924__$1,temp__5457__auto___14923__$1,vec__14813_14907,column_14908,column_info_14909,seq__14798_14901__$1,temp__5457__auto___14900,vec__14795_14857,line_14858,columns_14859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14933], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14858,new cljs.core.Keyword(null,"col","col",-1959363084),column_14908,new cljs.core.Keyword(null,"name","name",1843675177),name_14934], null));
});})(seq__14816_14910,chunk__14817_14911,count__14818_14912,i__14819_14913,seq__14798_14860,chunk__14799_14861,count__14800_14862,i__14801_14863,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14822_14930,map__14822_14931__$1,gline_14932,gcol_14933,name_14934,seq__14816_14924__$1,temp__5457__auto___14923__$1,vec__14813_14907,column_14908,column_info_14909,seq__14798_14901__$1,temp__5457__auto___14900,vec__14795_14857,line_14858,columns_14859,inverted))
,cljs.core.sorted_map.call(null)));


var G__14935 = cljs.core.next.call(null,seq__14816_14924__$1);
var G__14936 = null;
var G__14937 = (0);
var G__14938 = (0);
seq__14816_14910 = G__14935;
chunk__14817_14911 = G__14936;
count__14818_14912 = G__14937;
i__14819_14913 = G__14938;
continue;
}
} else {
}
}
break;
}


var G__14939 = cljs.core.next.call(null,seq__14798_14901__$1);
var G__14940 = null;
var G__14941 = (0);
var G__14942 = (0);
seq__14798_14860 = G__14939;
chunk__14799_14861 = G__14940;
count__14800_14862 = G__14941;
i__14801_14863 = G__14942;
continue;
}
} else {
}
}
break;
}


var G__14943 = seq__14791_14853;
var G__14944 = chunk__14792_14854;
var G__14945 = count__14793_14855;
var G__14946 = (i__14794_14856 + (1));
seq__14791_14853 = G__14943;
chunk__14792_14854 = G__14944;
count__14793_14855 = G__14945;
i__14794_14856 = G__14946;
continue;
} else {
var temp__5457__auto___14947 = cljs.core.seq.call(null,seq__14791_14853);
if(temp__5457__auto___14947){
var seq__14791_14948__$1 = temp__5457__auto___14947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14791_14948__$1)){
var c__4351__auto___14949 = cljs.core.chunk_first.call(null,seq__14791_14948__$1);
var G__14950 = cljs.core.chunk_rest.call(null,seq__14791_14948__$1);
var G__14951 = c__4351__auto___14949;
var G__14952 = cljs.core.count.call(null,c__4351__auto___14949);
var G__14953 = (0);
seq__14791_14853 = G__14950;
chunk__14792_14854 = G__14951;
count__14793_14855 = G__14952;
i__14794_14856 = G__14953;
continue;
} else {
var vec__14824_14954 = cljs.core.first.call(null,seq__14791_14948__$1);
var line_14955 = cljs.core.nth.call(null,vec__14824_14954,(0),null);
var columns_14956 = cljs.core.nth.call(null,vec__14824_14954,(1),null);
var seq__14827_14957 = cljs.core.seq.call(null,columns_14956);
var chunk__14828_14958 = null;
var count__14829_14959 = (0);
var i__14830_14960 = (0);
while(true){
if((i__14830_14960 < count__14829_14959)){
var vec__14831_14961 = cljs.core._nth.call(null,chunk__14828_14958,i__14830_14960);
var column_14962 = cljs.core.nth.call(null,vec__14831_14961,(0),null);
var column_info_14963 = cljs.core.nth.call(null,vec__14831_14961,(1),null);
var seq__14834_14964 = cljs.core.seq.call(null,column_info_14963);
var chunk__14835_14965 = null;
var count__14836_14966 = (0);
var i__14837_14967 = (0);
while(true){
if((i__14837_14967 < count__14836_14966)){
var map__14838_14968 = cljs.core._nth.call(null,chunk__14835_14965,i__14837_14967);
var map__14838_14969__$1 = ((((!((map__14838_14968 == null)))?(((((map__14838_14968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14838_14968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14838_14968):map__14838_14968);
var gline_14970 = cljs.core.get.call(null,map__14838_14969__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14971 = cljs.core.get.call(null,map__14838_14969__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14972 = cljs.core.get.call(null,map__14838_14969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14970], null),cljs.core.fnil.call(null,((function (seq__14834_14964,chunk__14835_14965,count__14836_14966,i__14837_14967,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14838_14968,map__14838_14969__$1,gline_14970,gcol_14971,name_14972,vec__14831_14961,column_14962,column_info_14963,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14971], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14955,new cljs.core.Keyword(null,"col","col",-1959363084),column_14962,new cljs.core.Keyword(null,"name","name",1843675177),name_14972], null));
});})(seq__14834_14964,chunk__14835_14965,count__14836_14966,i__14837_14967,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14838_14968,map__14838_14969__$1,gline_14970,gcol_14971,name_14972,vec__14831_14961,column_14962,column_info_14963,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted))
,cljs.core.sorted_map.call(null)));


var G__14973 = seq__14834_14964;
var G__14974 = chunk__14835_14965;
var G__14975 = count__14836_14966;
var G__14976 = (i__14837_14967 + (1));
seq__14834_14964 = G__14973;
chunk__14835_14965 = G__14974;
count__14836_14966 = G__14975;
i__14837_14967 = G__14976;
continue;
} else {
var temp__5457__auto___14977__$1 = cljs.core.seq.call(null,seq__14834_14964);
if(temp__5457__auto___14977__$1){
var seq__14834_14978__$1 = temp__5457__auto___14977__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14834_14978__$1)){
var c__4351__auto___14979 = cljs.core.chunk_first.call(null,seq__14834_14978__$1);
var G__14980 = cljs.core.chunk_rest.call(null,seq__14834_14978__$1);
var G__14981 = c__4351__auto___14979;
var G__14982 = cljs.core.count.call(null,c__4351__auto___14979);
var G__14983 = (0);
seq__14834_14964 = G__14980;
chunk__14835_14965 = G__14981;
count__14836_14966 = G__14982;
i__14837_14967 = G__14983;
continue;
} else {
var map__14840_14984 = cljs.core.first.call(null,seq__14834_14978__$1);
var map__14840_14985__$1 = ((((!((map__14840_14984 == null)))?(((((map__14840_14984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14840_14984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14840_14984):map__14840_14984);
var gline_14986 = cljs.core.get.call(null,map__14840_14985__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14987 = cljs.core.get.call(null,map__14840_14985__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14988 = cljs.core.get.call(null,map__14840_14985__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14986], null),cljs.core.fnil.call(null,((function (seq__14834_14964,chunk__14835_14965,count__14836_14966,i__14837_14967,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14840_14984,map__14840_14985__$1,gline_14986,gcol_14987,name_14988,seq__14834_14978__$1,temp__5457__auto___14977__$1,vec__14831_14961,column_14962,column_info_14963,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14987], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14955,new cljs.core.Keyword(null,"col","col",-1959363084),column_14962,new cljs.core.Keyword(null,"name","name",1843675177),name_14988], null));
});})(seq__14834_14964,chunk__14835_14965,count__14836_14966,i__14837_14967,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14840_14984,map__14840_14985__$1,gline_14986,gcol_14987,name_14988,seq__14834_14978__$1,temp__5457__auto___14977__$1,vec__14831_14961,column_14962,column_info_14963,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted))
,cljs.core.sorted_map.call(null)));


var G__14989 = cljs.core.next.call(null,seq__14834_14978__$1);
var G__14990 = null;
var G__14991 = (0);
var G__14992 = (0);
seq__14834_14964 = G__14989;
chunk__14835_14965 = G__14990;
count__14836_14966 = G__14991;
i__14837_14967 = G__14992;
continue;
}
} else {
}
}
break;
}


var G__14993 = seq__14827_14957;
var G__14994 = chunk__14828_14958;
var G__14995 = count__14829_14959;
var G__14996 = (i__14830_14960 + (1));
seq__14827_14957 = G__14993;
chunk__14828_14958 = G__14994;
count__14829_14959 = G__14995;
i__14830_14960 = G__14996;
continue;
} else {
var temp__5457__auto___14997__$1 = cljs.core.seq.call(null,seq__14827_14957);
if(temp__5457__auto___14997__$1){
var seq__14827_14998__$1 = temp__5457__auto___14997__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14827_14998__$1)){
var c__4351__auto___14999 = cljs.core.chunk_first.call(null,seq__14827_14998__$1);
var G__15000 = cljs.core.chunk_rest.call(null,seq__14827_14998__$1);
var G__15001 = c__4351__auto___14999;
var G__15002 = cljs.core.count.call(null,c__4351__auto___14999);
var G__15003 = (0);
seq__14827_14957 = G__15000;
chunk__14828_14958 = G__15001;
count__14829_14959 = G__15002;
i__14830_14960 = G__15003;
continue;
} else {
var vec__14842_15004 = cljs.core.first.call(null,seq__14827_14998__$1);
var column_15005 = cljs.core.nth.call(null,vec__14842_15004,(0),null);
var column_info_15006 = cljs.core.nth.call(null,vec__14842_15004,(1),null);
var seq__14845_15007 = cljs.core.seq.call(null,column_info_15006);
var chunk__14846_15008 = null;
var count__14847_15009 = (0);
var i__14848_15010 = (0);
while(true){
if((i__14848_15010 < count__14847_15009)){
var map__14849_15011 = cljs.core._nth.call(null,chunk__14846_15008,i__14848_15010);
var map__14849_15012__$1 = ((((!((map__14849_15011 == null)))?(((((map__14849_15011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14849_15011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14849_15011):map__14849_15011);
var gline_15013 = cljs.core.get.call(null,map__14849_15012__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15014 = cljs.core.get.call(null,map__14849_15012__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15015 = cljs.core.get.call(null,map__14849_15012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15013], null),cljs.core.fnil.call(null,((function (seq__14845_15007,chunk__14846_15008,count__14847_15009,i__14848_15010,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14849_15011,map__14849_15012__$1,gline_15013,gcol_15014,name_15015,vec__14842_15004,column_15005,column_info_15006,seq__14827_14998__$1,temp__5457__auto___14997__$1,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15014], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14955,new cljs.core.Keyword(null,"col","col",-1959363084),column_15005,new cljs.core.Keyword(null,"name","name",1843675177),name_15015], null));
});})(seq__14845_15007,chunk__14846_15008,count__14847_15009,i__14848_15010,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14849_15011,map__14849_15012__$1,gline_15013,gcol_15014,name_15015,vec__14842_15004,column_15005,column_info_15006,seq__14827_14998__$1,temp__5457__auto___14997__$1,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted))
,cljs.core.sorted_map.call(null)));


var G__15016 = seq__14845_15007;
var G__15017 = chunk__14846_15008;
var G__15018 = count__14847_15009;
var G__15019 = (i__14848_15010 + (1));
seq__14845_15007 = G__15016;
chunk__14846_15008 = G__15017;
count__14847_15009 = G__15018;
i__14848_15010 = G__15019;
continue;
} else {
var temp__5457__auto___15020__$2 = cljs.core.seq.call(null,seq__14845_15007);
if(temp__5457__auto___15020__$2){
var seq__14845_15021__$1 = temp__5457__auto___15020__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14845_15021__$1)){
var c__4351__auto___15022 = cljs.core.chunk_first.call(null,seq__14845_15021__$1);
var G__15023 = cljs.core.chunk_rest.call(null,seq__14845_15021__$1);
var G__15024 = c__4351__auto___15022;
var G__15025 = cljs.core.count.call(null,c__4351__auto___15022);
var G__15026 = (0);
seq__14845_15007 = G__15023;
chunk__14846_15008 = G__15024;
count__14847_15009 = G__15025;
i__14848_15010 = G__15026;
continue;
} else {
var map__14851_15027 = cljs.core.first.call(null,seq__14845_15021__$1);
var map__14851_15028__$1 = ((((!((map__14851_15027 == null)))?(((((map__14851_15027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14851_15027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14851_15027):map__14851_15027);
var gline_15029 = cljs.core.get.call(null,map__14851_15028__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15030 = cljs.core.get.call(null,map__14851_15028__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15031 = cljs.core.get.call(null,map__14851_15028__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15029], null),cljs.core.fnil.call(null,((function (seq__14845_15007,chunk__14846_15008,count__14847_15009,i__14848_15010,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14851_15027,map__14851_15028__$1,gline_15029,gcol_15030,name_15031,seq__14845_15021__$1,temp__5457__auto___15020__$2,vec__14842_15004,column_15005,column_info_15006,seq__14827_14998__$1,temp__5457__auto___14997__$1,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15030], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14955,new cljs.core.Keyword(null,"col","col",-1959363084),column_15005,new cljs.core.Keyword(null,"name","name",1843675177),name_15031], null));
});})(seq__14845_15007,chunk__14846_15008,count__14847_15009,i__14848_15010,seq__14827_14957,chunk__14828_14958,count__14829_14959,i__14830_14960,seq__14791_14853,chunk__14792_14854,count__14793_14855,i__14794_14856,map__14851_15027,map__14851_15028__$1,gline_15029,gcol_15030,name_15031,seq__14845_15021__$1,temp__5457__auto___15020__$2,vec__14842_15004,column_15005,column_info_15006,seq__14827_14998__$1,temp__5457__auto___14997__$1,vec__14824_14954,line_14955,columns_14956,seq__14791_14948__$1,temp__5457__auto___14947,inverted))
,cljs.core.sorted_map.call(null)));


var G__15032 = cljs.core.next.call(null,seq__14845_15021__$1);
var G__15033 = null;
var G__15034 = (0);
var G__15035 = (0);
seq__14845_15007 = G__15032;
chunk__14846_15008 = G__15033;
count__14847_15009 = G__15034;
i__14848_15010 = G__15035;
continue;
}
} else {
}
}
break;
}


var G__15036 = cljs.core.next.call(null,seq__14827_14998__$1);
var G__15037 = null;
var G__15038 = (0);
var G__15039 = (0);
seq__14827_14957 = G__15036;
chunk__14828_14958 = G__15037;
count__14829_14959 = G__15038;
i__14830_14960 = G__15039;
continue;
}
} else {
}
}
break;
}


var G__15040 = cljs.core.next.call(null,seq__14791_14948__$1);
var G__15041 = null;
var G__15042 = (0);
var G__15043 = (0);
seq__14791_14853 = G__15040;
chunk__14792_14854 = G__15041;
count__14793_14855 = G__15042;
i__14794_14856 = G__15043;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
