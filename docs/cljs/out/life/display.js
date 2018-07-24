// Compiled by ClojureScript 1.10.339 {}
goog.provide('life.display');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
life.display.strof = (function life$display$strof(c,l){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,l,c));
});
life.display.disp_3d = (function life$display$disp_3d(var_args){
var G__18845 = arguments.length;
switch (G__18845) {
case 1:
return life.display.disp_3d.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return life.display.disp_3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

life.display.disp_3d.cljs$core$IFn$_invoke$arity$1 = (function (a){
return life.display.disp_3d.call(null,a,true);
});

life.display.disp_3d.cljs$core$IFn$_invoke$arity$2 = (function (a,print_first){
var vec__18846 = clojure.core.matrix.shape.call(null,a);
var grids = cljs.core.nth.call(null,vec__18846,(0),null);
var h = cljs.core.nth.call(null,vec__18846,(1),null);
var w = cljs.core.nth.call(null,vec__18846,(2),null);
var single = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(life.display.strof.call(null,"-",(((2) * w) + (1)))),"+"].join('');
var side = cljs.core.apply.call(null,cljs.core.str,"+",cljs.core.repeat.call(null,grids,single));
return cljs.core.apply.call(null,cljs.core.str,(cljs.core.truth_(print_first)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(side),"\n"].join(''):""),cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (vec__18846,grids,h,w,single,side){
return (function life$display$iter__18849(s__18850){
return (new cljs.core.LazySeq(null,((function (vec__18846,grids,h,w,single,side){
return (function (){
var s__18850__$1 = s__18850;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18850__$1);
if(temp__5457__auto__){
var s__18850__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18850__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18850__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18852 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18851 = (0);
while(true){
if((i__18851 < size__4323__auto__)){
var rn = cljs.core._nth.call(null,c__4322__auto__,i__18851);
cljs.core.chunk_append.call(null,b__18852,cljs.core.apply.call(null,cljs.core.str,"|",cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (i__18851,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function life$display$iter__18849_$_iter__18853(s__18854){
return (new cljs.core.LazySeq(null,((function (i__18851,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function (){
var s__18854__$1 = s__18854;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18854__$1);
if(temp__5457__auto____$1){
var s__18854__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18854__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__18854__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__18856 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__18855 = (0);
while(true){
if((i__18855 < size__4323__auto____$1)){
var g = cljs.core._nth.call(null,c__4322__auto____$1,i__18855);
cljs.core.chunk_append.call(null,b__18856,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (i__18855,i__18851,g,c__4322__auto____$1,size__4323__auto____$1,b__18856,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function life$display$iter__18849_$_iter__18853_$_iter__18857(s__18858){
return (new cljs.core.LazySeq(null,((function (i__18855,i__18851,g,c__4322__auto____$1,size__4323__auto____$1,b__18856,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function (){
var s__18858__$1 = s__18858;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__18858__$1);
if(temp__5457__auto____$2){
var s__18858__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18858__$2)){
var c__4322__auto____$2 = cljs.core.chunk_first.call(null,s__18858__$2);
var size__4323__auto____$2 = cljs.core.count.call(null,c__4322__auto____$2);
var b__18860 = cljs.core.chunk_buffer.call(null,size__4323__auto____$2);
if((function (){var i__18859 = (0);
while(true){
if((i__18859 < size__4323__auto____$2)){
var c = cljs.core._nth.call(null,c__4322__auto____$2,i__18859);
cljs.core.chunk_append.call(null,b__18860,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));

var G__18878 = (i__18859 + (1));
i__18859 = G__18878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18860),life$display$iter__18849_$_iter__18853_$_iter__18857.call(null,cljs.core.chunk_rest.call(null,s__18858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18860),null);
}
} else {
var c = cljs.core.first.call(null,s__18858__$2);
return cljs.core.cons.call(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),life$display$iter__18849_$_iter__18853_$_iter__18857.call(null,cljs.core.rest.call(null,s__18858__$2)));
}
} else {
return null;
}
break;
}
});})(i__18855,i__18851,g,c__4322__auto____$1,size__4323__auto____$1,b__18856,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
,null,null));
});})(i__18855,i__18851,g,c__4322__auto____$1,size__4323__auto____$1,b__18856,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
;
return iter__4324__auto__.call(null,clojure.core.matrix.slice.call(null,g,rn));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" |"], null))));

var G__18879 = (i__18855 + (1));
i__18855 = G__18879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18856),life$display$iter__18849_$_iter__18853.call(null,cljs.core.chunk_rest.call(null,s__18854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18856),null);
}
} else {
var g = cljs.core.first.call(null,s__18854__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (i__18851,g,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function life$display$iter__18849_$_iter__18853_$_iter__18861(s__18862){
return (new cljs.core.LazySeq(null,((function (i__18851,g,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function (){
var s__18862__$1 = s__18862;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__18862__$1);
if(temp__5457__auto____$2){
var s__18862__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18862__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__18862__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__18864 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__18863 = (0);
while(true){
if((i__18863 < size__4323__auto____$1)){
var c = cljs.core._nth.call(null,c__4322__auto____$1,i__18863);
cljs.core.chunk_append.call(null,b__18864,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));

var G__18880 = (i__18863 + (1));
i__18863 = G__18880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18864),life$display$iter__18849_$_iter__18853_$_iter__18861.call(null,cljs.core.chunk_rest.call(null,s__18862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18864),null);
}
} else {
var c = cljs.core.first.call(null,s__18862__$2);
return cljs.core.cons.call(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),life$display$iter__18849_$_iter__18853_$_iter__18861.call(null,cljs.core.rest.call(null,s__18862__$2)));
}
} else {
return null;
}
break;
}
});})(i__18851,g,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
,null,null));
});})(i__18851,g,s__18854__$2,temp__5457__auto____$1,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
;
return iter__4324__auto__.call(null,clojure.core.matrix.slice.call(null,g,rn));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" |"], null))),life$display$iter__18849_$_iter__18853.call(null,cljs.core.rest.call(null,s__18854__$2)));
}
} else {
return null;
}
break;
}
});})(i__18851,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
,null,null));
});})(i__18851,rn,c__4322__auto__,size__4323__auto__,b__18852,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
;
return iter__4324__auto__.call(null,clojure.core.matrix.slices.call(null,a));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null))));

var G__18881 = (i__18851 + (1));
i__18851 = G__18881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18852),life$display$iter__18849.call(null,cljs.core.chunk_rest.call(null,s__18850__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18852),null);
}
} else {
var rn = cljs.core.first.call(null,s__18850__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,"|",cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function life$display$iter__18849_$_iter__18865(s__18866){
return (new cljs.core.LazySeq(null,((function (rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function (){
var s__18866__$1 = s__18866;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18866__$1);
if(temp__5457__auto____$1){
var s__18866__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18866__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18866__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18868 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18867 = (0);
while(true){
if((i__18867 < size__4323__auto__)){
var g = cljs.core._nth.call(null,c__4322__auto__,i__18867);
cljs.core.chunk_append.call(null,b__18868,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (i__18867,g,c__4322__auto__,size__4323__auto__,b__18868,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function life$display$iter__18849_$_iter__18865_$_iter__18869(s__18870){
return (new cljs.core.LazySeq(null,((function (i__18867,g,c__4322__auto__,size__4323__auto__,b__18868,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function (){
var s__18870__$1 = s__18870;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__18870__$1);
if(temp__5457__auto____$2){
var s__18870__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18870__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__18870__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__18872 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__18871 = (0);
while(true){
if((i__18871 < size__4323__auto____$1)){
var c = cljs.core._nth.call(null,c__4322__auto____$1,i__18871);
cljs.core.chunk_append.call(null,b__18872,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));

var G__18882 = (i__18871 + (1));
i__18871 = G__18882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18872),life$display$iter__18849_$_iter__18865_$_iter__18869.call(null,cljs.core.chunk_rest.call(null,s__18870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18872),null);
}
} else {
var c = cljs.core.first.call(null,s__18870__$2);
return cljs.core.cons.call(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),life$display$iter__18849_$_iter__18865_$_iter__18869.call(null,cljs.core.rest.call(null,s__18870__$2)));
}
} else {
return null;
}
break;
}
});})(i__18867,g,c__4322__auto__,size__4323__auto__,b__18868,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
,null,null));
});})(i__18867,g,c__4322__auto__,size__4323__auto__,b__18868,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
;
return iter__4324__auto__.call(null,clojure.core.matrix.slice.call(null,g,rn));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" |"], null))));

var G__18883 = (i__18867 + (1));
i__18867 = G__18883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18868),life$display$iter__18849_$_iter__18865.call(null,cljs.core.chunk_rest.call(null,s__18866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18868),null);
}
} else {
var g = cljs.core.first.call(null,s__18866__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (g,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function life$display$iter__18849_$_iter__18865_$_iter__18873(s__18874){
return (new cljs.core.LazySeq(null,((function (g,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side){
return (function (){
var s__18874__$1 = s__18874;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__18874__$1);
if(temp__5457__auto____$2){
var s__18874__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18874__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18874__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18876 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18875 = (0);
while(true){
if((i__18875 < size__4323__auto__)){
var c = cljs.core._nth.call(null,c__4322__auto__,i__18875);
cljs.core.chunk_append.call(null,b__18876,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));

var G__18884 = (i__18875 + (1));
i__18875 = G__18884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18876),life$display$iter__18849_$_iter__18865_$_iter__18873.call(null,cljs.core.chunk_rest.call(null,s__18874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18876),null);
}
} else {
var c = cljs.core.first.call(null,s__18874__$2);
return cljs.core.cons.call(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),life$display$iter__18849_$_iter__18865_$_iter__18873.call(null,cljs.core.rest.call(null,s__18874__$2)));
}
} else {
return null;
}
break;
}
});})(g,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
,null,null));
});})(g,s__18866__$2,temp__5457__auto____$1,rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
;
return iter__4324__auto__.call(null,clojure.core.matrix.slice.call(null,g,rn));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" |"], null))),life$display$iter__18849_$_iter__18865.call(null,cljs.core.rest.call(null,s__18866__$2)));
}
} else {
return null;
}
break;
}
});})(rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
,null,null));
});})(rn,s__18850__$2,temp__5457__auto__,vec__18846,grids,h,w,single,side))
;
return iter__4324__auto__.call(null,clojure.core.matrix.slices.call(null,a));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null))),life$display$iter__18849.call(null,cljs.core.rest.call(null,s__18850__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18846,grids,h,w,single,side))
,null,null));
});})(vec__18846,grids,h,w,single,side))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,h));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [side,"\n"], null)));
});

life.display.disp_3d.cljs$lang$maxFixedArity = 2;

life.display.disp_4d = (function life$display$disp_4d(a){
var vec__18886 = clojure.core.matrix.slices.call(null,a);
var seq__18887 = cljs.core.seq.call(null,vec__18886);
var first__18888 = cljs.core.first.call(null,seq__18887);
var seq__18887__$1 = cljs.core.next.call(null,seq__18887);
var f = first__18888;
var r = seq__18887__$1;
return cljs.core.apply.call(null,cljs.core.str,life.display.disp_3d.call(null,f),cljs.core.map.call(null,((function (vec__18886,seq__18887,first__18888,seq__18887__$1,f,r){
return (function (p1__18885_SHARP_){
return life.display.disp_3d.call(null,p1__18885_SHARP_,false);
});})(vec__18886,seq__18887,first__18888,seq__18887__$1,f,r))
,r));
});
life.display.disp = (function life$display$disp(a){
var d = clojure.core.matrix.dimensionality.call(null,a);
var G__18889 = d;
switch (G__18889) {
case (0):
case (1):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');

break;
case (2):
return life.display.disp_3d.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));

break;
case (3):
return life.display.disp_3d.call(null,a);

break;
case (4):
return life.display.disp_4d.call(null,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18889)].join('')));

}
});

//# sourceMappingURL=display.js.map
