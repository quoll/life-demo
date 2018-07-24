// Compiled by ClojureScript 1.10.339 {}
goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count.call(null,v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,v__$1,i);
var y = f.call(null,x);
var G__17430 = (i + (1));
var G__17431 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__17430;
v__$1 = G__17431;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__3938__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__3938__auto____$1){
var temp__5455__auto__ = cljs.core.next.call(null,shape);
if(temp__5455__auto__){
var ns = temp__5455__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__5455__auto__,and__3938__auto____$1,and__3938__auto__){
return (function (p1__17432_SHARP_){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__17432_SHARP_,ns);
});})(ns,temp__5455__auto__,and__3938__auto____$1,and__3938__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__5455__auto__,and__3938__auto____$1,and__3938__auto__){
return (function (p1__17433_SHARP_){
return !((p1__17433_SHARP_ instanceof cljs.core.PersistentVector));
});})(temp__5455__auto__,and__3938__auto____$1,and__3938__auto__))
,v);
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))){
return true;
} else {
if(!((x instanceof cljs.core.PersistentVector))){
return false;
} else {
var and__3938__auto__ = cljs.core.every_QMARK_.call(null,clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x);
if(and__3938__auto__){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x));
} else {
return and__3938__auto__;
}

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,x);
} else {
if((((dims === (0))) && (cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))))){
return clojure.core.matrix.protocols.get_0d.call(null,x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_.call(null,m)){
if((cljs.core.count.call(null,m) > (0))){
return ((1) + clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,cljs.core.nth.call(null,m,(0))));
} else {
return (1);
}
} else {
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));

}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,length,0.0));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,clojure.core.matrix.protocols.new_vector.call(null,m__$1,columns)));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,dims);
if(temp__5455__auto__){
var dims__$1 = temp__5455__auto__;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.first.call(null,dims__$1),clojure.core.matrix.protocols.new_matrix_nd.call(null,m__$1,cljs.core.next.call(null,dims__$1))));
} else {
return 0.0;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,data);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m__$1);
var dims = cljs.core.long$.call(null,cljs.core.count.call(null,mshape));
var tdims = cljs.core.long$.call(null,cljs.core.count.call(null,target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.call(null,["Can't broadcast to a lower dimensional shape"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(!(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ__EQ_,mshape,cljs.core.take_last.call(null,dims,target_shape))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes, cannot broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,mshape))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.call(null,((function (mshape,dims,tdims,m__$1){
return (function (m__$2,dup){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,dup,m__$2));
});})(mshape,dims,tdims,m__$1))
,m__$1,cljs.core.reverse.call(null,cljs.core.drop_last.call(null,dims,target_shape)));

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.call(null,m__$1,(x | (0)));
var x__1233__auto__ = r;
if(typeof x__1233__auto__ === 'number'){
return x__1233__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__1233__auto__);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var temp__5455__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__5455__auto____$1){
var next_indexes = temp__5455__auto____$1;
var m__$2 = cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd.call(null,m__$2,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
}
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,v);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,clojure.core.matrix.protocols.set_1d.call(null,m__$1.call(null,row),column,v));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var fi = cljs.core.first.call(null,indexes__$1);
if(((1) === cljs.core.count.call(null,indexes__$1))){
return cljs.core.assoc.call(null,m__$1,fi,v);
} else {
return cljs.core.assoc.call(null,m__$1,fi,clojure.core.matrix.protocols.set_nd.call(null,m__$1.call(null,fi),cljs.core.next.call(null,indexes__$1),v));
}
} else {
throw cljs.core.ex_info.call(null,["Trying to set on a persistent vector with insufficient indexes?"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,(1),i);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
return sl;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.call(null,((function (sd,dimension__$1,m__$1){
return (function (p1__17434_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__17434_SHARP_,sd,i);
});})(sd,dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__17436(s__17437){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__17437__$1 = s__17437;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17437__$1);
if(temp__5457__auto__){
var s__17437__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17437__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17437__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17439 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17438 = (0);
while(true){
if((i__17438 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__17438);
cljs.core.chunk_append.call(null,b__17439,cljs.core.mapv.call(null,((function (i__17438,j,c__4322__auto__,size__4323__auto__,b__17439,s__17437__$2,temp__5457__auto__,m__$1){
return (function (p1__17435_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__17435_SHARP_,j);
});})(i__17438,j,c__4322__auto__,size__4323__auto__,b__17439,s__17437__$2,temp__5457__auto__,m__$1))
,m__$1));

var G__17440 = (i__17438 + (1));
i__17438 = G__17440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17439),clojure$core$matrix$impl$persistent_vector$iter__17436.call(null,cljs.core.chunk_rest.call(null,s__17437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17439),null);
}
} else {
var j = cljs.core.first.call(null,s__17437__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__17437__$2,temp__5457__auto__,m__$1){
return (function (p1__17435_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__17435_SHARP_,j);
});})(j,s__17437__$2,temp__5457__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__17436.call(null,cljs.core.rest.call(null,s__17437__$2)));
}
} else {
return null;
}
break;
}
});})(m__$1))
,null,null));
});})(m__$1))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
})());
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === adims)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.call(null,m__$1,a);
} else {
throw cljs.core.ex_info.call(null,["Joining with array of incompatible size"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if(((0) === dim__$1)){
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.mod.call(null,places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,m__$1,sh,c),cljs.core.subvec.call(null,m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.call(null,((function (dim__$1,places__$1,m__$1){
return (function (s){
return clojure.core.matrix.protocols.rotate.call(null,s,(dim__$1 - (1)),places__$1);
});})(dim__$1,places__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,ordering);
if(temp__5455__auto__){
var ordering__$1 = temp__5455__auto__;
var dim = cljs.core.long$.call(null,cljs.core.first.call(null,ordering__$1));
var next_ordering = cljs.core.map.call(null,((function (dim,ordering__$1,temp__5455__auto__,m__$1){
return (function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
});})(dim,ordering__$1,temp__5455__auto__,m__$1))
,cljs.core.next.call(null,ordering__$1));
var slice_range = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dim));
return cljs.core.mapv.call(null,((function (dim,next_ordering,slice_range,ordering__$1,temp__5455__auto__,m__$1){
return (function (si){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.get_slice.call(null,m__$1,dim,si),next_ordering);
});})(dim,next_ordering,slice_range,ordering__$1,temp__5455__auto__,m__$1))
,slice_range);
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__17441_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__17441_SHARP_);
});})(m__$1))
,clojure.core.matrix.protocols.element_seq.call(null,indices));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.call(null,m__$1,indices);
} else {
return cljs.core.mapv.call(null,((function (dimension__$1,m__$1){
return (function (p1__17442_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__17442_SHARP_,(dimension__$1 - (1)),indices);
});})(dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.call(null,m__$1,start,(cljs.core.long$.call(null,start) + cljs.core.long$.call(null,length)));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,m__$1))){
return clojure.core.matrix.protocols.get_shape.call(null,m__$1);
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shape for persistent vector array."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 = (function (m,shape){
var m__$1 = this;
if(cljs.core.empty_QMARK_.call(null,shape)){
throw cljs.core.ex_info.call(null,["Expected empty shape for persistent vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.next.call(null,shape),cljs.core.map.call(null,clojure.core.matrix.protocols.validate_shape,m__$1)))){
return shape;
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shape for persistent vector array, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)," on array ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__17443 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__17443,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__17443,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__17446 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__17446,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__17446,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if((((dims === (1))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if(cljs.core.not_EQ_.call(null,n,cljs.core.long$.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))))){
throw cljs.core.ex_info.call(null,["Mismatched vector sizes"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__17449 = (i + (1));
var G__17450 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__17449;
res = G__17450;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__17451 = (i + (1));
var G__17452 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__17451;
res = G__17452;
continue;
}
break;
}
} else {
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq.call(null,b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product.call(null,a__$1,b);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__17453 = (i + (1));
var G__17454 = (res + (x * x));
i = G__17453;
res = G__17454;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__17455 = (i + (1));
var G__17456 = (res + (x * x));
i = G__17455;
res = G__17456;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,((function (a__$1){
return (function (r,x){
return (r + (x * x));
});})(a__$1))
,0.0);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale.call(null,a__$1,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,b,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,cljs.core._PLUS_);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,param);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
var acount = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.call(null,acount,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__3938__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__3938__auto__){
var i = (0);
while(true){
if((i < acount)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),clojure.core.matrix.protocols.get_1d.call(null,b,i)))){
var G__17457 = (i + (1));
i = G__17457;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto__;
}
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),b.call(null,i)))){
var G__17458 = (i + (1));
i = G__17458;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
var sa = cljs.core.seq.call(null,a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq.call(null,b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.first.call(null,sa),cljs.core.first.call(null,sb)))){
var G__17459 = cljs.core.next.call(null,sa);
var G__17460 = cljs.core.next.call(null,sb);
sa = G__17459;
sb = G__17460;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
var vec__17462 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__17462,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__17462,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$2,cljs.core._STAR_,a__$1);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
return cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__17465(s__17466){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__17466__$1 = s__17466;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17466__$1);
if(temp__5457__auto__){
var s__17466__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17466__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17466__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17468 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17467 = (0);
while(true){
if((i__17467 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__17467);
cljs.core.chunk_append.call(null,b__17468,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__17473 = (i__17467 + (1));
i__17467 = G__17473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17468),clojure$core$matrix$impl$persistent_vector$iter__17465.call(null,cljs.core.chunk_rest.call(null,s__17466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17468),null);
}
} else {
var i = cljs.core.first.call(null,s__17466__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__17465.call(null,cljs.core.rest.call(null,s__17466__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if((((mdims === (2))) && ((adims === (1))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__17461_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__17461_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if((((mdims === (2))) && ((adims === (2))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__17469(s__17470){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__17470__$1 = s__17470;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17470__$1);
if(temp__5457__auto__){
var s__17470__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17470__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17470__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17472 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17471 = (0);
while(true){
if((i__17471 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__17471);
cljs.core.chunk_append.call(null,b__17472,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__17474 = (i__17471 + (1));
i__17471 = G__17474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17472),clojure$core$matrix$impl$persistent_vector$iter__17469.call(null,cljs.core.chunk_rest.call(null,s__17470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17472),null);
}
} else {
var j = cljs.core.first.call(null,s__17470__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__17469.call(null,cljs.core.rest.call(null,s__17470__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
});})(mdims,adims,m__$1))
,m__$1);
} else {
return clojure.core.matrix.protocols.inner_product.call(null,m__$1,a);

}
}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale.call(null,m__$1,clojure.core.matrix.protocols.get_0d.call(null,a));
} else {
if(!((cljs.core.long$.call(null,cljs.core.last.call(null,clojure.core.matrix.protocols.get_shape.call(null,m__$1))) === cljs.core.long$.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes for inner product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m__$1))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m__$1,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,((function (adims,mdims,m__$1){
return (function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1)));
}
} else {
return cljs.core.mapv.call(null,((function (adims,mdims,m__$1){
return (function (p1__17475_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__17475_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));

}
}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.call(null,m__$1,((function (m__$1){
return (function (v){
return clojure.core.matrix.protocols.pre_scale.call(null,a,v);
});})(m__$1))
);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__17476_SHARP_){
return (p1__17476_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__17477_SHARP_){
return (a * p1__17477_SHARP_);
});})(m__$1))
,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._STAR_,m__$1,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var j__$1 = cljs.core.long$.call(null,j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,m__$1,i__$1,m__$1.call(null,j__$1)),j__$1,m__$1.call(null,i__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.scale.call(null,m__$1.call(null,i),factor));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.matrix_add.call(null,m__$1.call(null,i),clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1.call(null,j),factor)));
});
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__17479){
var vec__17480 = p__17479;
var name = cljs.core.nth.call(null,vec__17480,(0),null);
var func = cljs.core.nth.call(null,vec__17480,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__17478__auto__","x__17478__auto__",-1561696393,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,func,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__17478__auto__","x__17478__auto__",-1561696393,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null))))),null,(1),null)))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return (1);
} else {
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) + (1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__7755__auto__ = m__$1;
return ((((0) === cljs.core.count.call(null,pv__7755__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__7755__auto__,(0)))))));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count.call(null,m__$1);
return cljs.core.cons.call(null,c,(((c > (0)))?clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m__$1,(0))):null));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$.call(null,x);
if((x__$1 === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m__$1,(0)),(x__$1 - (1)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count.call(null,cljs.core.nth.call(null,m__$1,(0))));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_.call(null,m__$1))){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,m_shapes)),cljs.core.rest.call(null,m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.call(null,["Can't convert to persistent vector array: inconsistent shape."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Copy an arbitrary array to a region of a double array.
 * Assumes size represents the element count of the array, must be greater than zero.
 */
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_ = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array_BANG_(m,arr,off,size){
if(typeof m === 'number'){
if((size === (1))){
return (arr[off] = m);
} else {
throw cljs.core.ex_info.call(null,["Invalid shape while copying to double array"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
var m__$1 = m;
var ct = cljs.core.count.call(null,m__$1);
var skip = cljs.core.quot.call(null,size,ct);
var n__4408__auto__ = ct;
var i = (0);
while(true){
if((i < n__4408__auto__)){
var slc_17485 = cljs.core.nth.call(null,m__$1,i);
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,slc_17485,arr,(off + (i * skip)),skip);

var G__17486 = (i + (1));
i = G__17486;
continue;
} else {
return null;
}
break;
}
} else {
var vals__1198__auto__ = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__1198__auto__){
var v = cljs.core.first.call(null,vals__1198__auto__);
(arr[(off + i)] = v);

var G__17487 = cljs.core.next.call(null,vals__1198__auto__);
var G__17488 = (i + (1));
vals__1198__auto__ = G__17487;
i = G__17488;
continue;
} else {
return null;
}
break;
}

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.double_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,m__$1,arr,(0),size);
} else {
}

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__1198__auto___17489 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_17490 = cljs.core.long$.call(null,(0));
while(true){
if(vals__1198__auto___17489){
var v_17491 = cljs.core.first.call(null,vals__1198__auto___17489);
(arr[(off + i_17490)] = v_17491);

var G__17492 = cljs.core.next.call(null,vals__1198__auto___17489);
var G__17493 = (i_17490 + (1));
vals__1198__auto___17489 = G__17492;
i_17490 = G__17493;
continue;
} else {
}
break;
}
} else {
if((((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null)))))){
var n__4408__auto___17494 = size;
var i_17495 = (0);
while(true){
if((i_17495 < n__4408__auto___17494)){
(arr[(off + i_17495)] = cljs.core.nth.call(null,m,i_17495));

var G__17496 = (i_17495 + (1));
i_17495 = G__17496;
continue;
} else {
}
break;
}
} else {
var skip_17497 = cljs.core.quot.call(null,size,ct);
var n__4408__auto___17498 = ct;
var i_17499 = (0);
while(true){
if((i_17499 < n__4408__auto___17498)){
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_17499),arr,(off + (i_17499 * skip_17497)),skip_17497);

var G__17500 = (i_17499 + (1));
i_17499 = G__17500;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.object_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return null;
} else {
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) >= (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
} else {
return m__$1;

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__17503 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__17503,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__17503,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__3949__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.call(null,["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__17501_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__17501_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__17506_17510 = cljs.core.seq.call(null,m__$1);
var chunk__17507_17511 = null;
var count__17508_17512 = (0);
var i__17509_17513 = (0);
while(true){
if((i__17509_17513 < count__17508_17512)){
var s_17514 = cljs.core._nth.call(null,chunk__17507_17511,i__17509_17513);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_17514,f);


var G__17515 = seq__17506_17510;
var G__17516 = chunk__17507_17511;
var G__17517 = count__17508_17512;
var G__17518 = (i__17509_17513 + (1));
seq__17506_17510 = G__17515;
chunk__17507_17511 = G__17516;
count__17508_17512 = G__17517;
i__17509_17513 = G__17518;
continue;
} else {
var temp__5457__auto___17519 = cljs.core.seq.call(null,seq__17506_17510);
if(temp__5457__auto___17519){
var seq__17506_17520__$1 = temp__5457__auto___17519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17506_17520__$1)){
var c__4351__auto___17521 = cljs.core.chunk_first.call(null,seq__17506_17520__$1);
var G__17522 = cljs.core.chunk_rest.call(null,seq__17506_17520__$1);
var G__17523 = c__4351__auto___17521;
var G__17524 = cljs.core.count.call(null,c__4351__auto___17521);
var G__17525 = (0);
seq__17506_17510 = G__17522;
chunk__17507_17511 = G__17523;
count__17508_17512 = G__17524;
i__17509_17513 = G__17525;
continue;
} else {
var s_17526 = cljs.core.first.call(null,seq__17506_17520__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_17526,f);


var G__17527 = cljs.core.next.call(null,seq__17506_17520__$1);
var G__17528 = null;
var G__17529 = (0);
var G__17530 = (0);
seq__17506_17510 = G__17527;
chunk__17507_17511 = G__17528;
count__17508_17512 = G__17529;
i__17509_17513 = G__17530;
continue;
}
} else {
}
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4408__auto___17531 = cljs.core.count.call(null,m__$1);
var i_17532 = (0);
while(true){
if((i_17532 < n__4408__auto___17531)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_17532),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_17532));

var G__17533 = (i_17532 + (1));
i_17532 = G__17533;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4408__auto___17534 = cljs.core.count.call(null,m__$1);
var i_17535 = (0);
while(true){
if((i_17535 < n__4408__auto___17534)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_17535),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_17535),cljs.core.map.call(null,((function (i_17535,n__4408__auto___17534,m__$1){
return (function (p1__17502_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__17502_SHARP_,i_17535);
});})(i_17535,n__4408__auto___17534,m__$1))
,more));

var G__17536 = (i_17535 + (1));
i_17535 = G__17536;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,ms__$1));
if(((0) === dims)){
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__1233__auto__ = ms__$1;
if(typeof x__1233__auto__ === 'number'){
return x__1233__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__1233__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__17556(s__17557){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__17557__$1 = s__17557;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17557__$1);
if(temp__5457__auto__){
var s__17557__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17557__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17557__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17559 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17558 = (0);
while(true){
if((i__17558 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__17558);
cljs.core.chunk_append.call(null,b__17559,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__17564 = (i__17558 + (1));
i__17558 = G__17564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17559),clojure$core$matrix$impl$persistent_vector$iter__17556.call(null,cljs.core.chunk_rest.call(null,s__17557__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17559),null);
}
} else {
var i = cljs.core.first.call(null,s__17557__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__17556.call(null,cljs.core.rest.call(null,s__17557__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__17560(s__17561){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__17561__$1 = s__17561;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17561__$1);
if(temp__5457__auto__){
var s__17561__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17561__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__17561__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__17563 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__17562 = (0);
while(true){
if((i__17562 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__17562);
cljs.core.chunk_append.call(null,b__17563,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__17562,i,c__4322__auto__,size__4323__auto__,b__17563,s__17561__$2,temp__5457__auto__,dims,ms__$1){
return (function (p1__17537_SHARP_,p2__17538_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__17537_SHARP_),p2__17538_SHARP_);
});})(i__17562,i,c__4322__auto__,size__4323__auto__,b__17563,s__17561__$2,temp__5457__auto__,dims,ms__$1))
));

var G__17565 = (i__17562 + (1));
i__17562 = G__17565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17563),clojure$core$matrix$impl$persistent_vector$iter__17560.call(null,cljs.core.chunk_rest.call(null,s__17561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17563),null);
}
} else {
var i = cljs.core.first.call(null,s__17561__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__17561__$2,temp__5457__auto__,dims,ms__$1){
return (function (p1__17537_SHARP_,p2__17538_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__17537_SHARP_),p2__17538_SHARP_);
});})(i,s__17561__$2,temp__5457__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__17560.call(null,cljs.core.rest.call(null,s__17561__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,ms__$1,as);
var dima = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.call(null,["mapping with array of higher dimensionality?"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((((1) === dima)) && (cljs.core.not_EQ_.call(null,clojure.core.matrix.protocols.dimension_count.call(null,ms__$1,(0)),clojure.core.matrix.protocols.dimension_count.call(null,as__$1,(0)))))){
throw cljs.core.ex_info.call(null,["Incompatible vector sizes"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__1233__auto__ = as__$1;
if(typeof x__1233__auto__ === 'number'){
return x__1233__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__1233__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__17539_SHARP_,p2__17540_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17539_SHARP_], null),p2__17540_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__17566__delegate = function (p1__17541_SHARP_,rest__17542_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17541_SHARP_], null),rest__17542_SHARP_);
};
var G__17566 = function (p1__17541_SHARP_,var_args){
var rest__17542_SHARP_ = null;
if (arguments.length > 1) {
var G__17567__i = 0, G__17567__a = new Array(arguments.length -  1);
while (G__17567__i < G__17567__a.length) {G__17567__a[G__17567__i] = arguments[G__17567__i + 1]; ++G__17567__i;}
  rest__17542_SHARP_ = new cljs.core.IndexedSeq(G__17567__a,0,null);
} 
return G__17566__delegate.call(this,p1__17541_SHARP_,rest__17542_SHARP_);};
G__17566.cljs$lang$maxFixedArity = 1;
G__17566.cljs$lang$applyTo = (function (arglist__17568){
var p1__17541_SHARP_ = cljs.core.first(arglist__17568);
var rest__17542_SHARP_ = cljs.core.rest(arglist__17568);
return G__17566__delegate(p1__17541_SHARP_,rest__17542_SHARP_);
});
G__17566.cljs$core$IFn$_invoke$arity$variadic = G__17566__delegate;
return G__17566;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__17569__delegate = function (p1__17543_SHARP_,rest__17544_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__17543_SHARP_),rest__17544_SHARP_);
};
var G__17569 = function (p1__17543_SHARP_,var_args){
var rest__17544_SHARP_ = null;
if (arguments.length > 1) {
var G__17570__i = 0, G__17570__a = new Array(arguments.length -  1);
while (G__17570__i < G__17570__a.length) {G__17570__a[G__17570__i] = arguments[G__17570__i + 1]; ++G__17570__i;}
  rest__17544_SHARP_ = new cljs.core.IndexedSeq(G__17570__a,0,null);
} 
return G__17569__delegate.call(this,p1__17543_SHARP_,rest__17544_SHARP_);};
G__17569.cljs$lang$maxFixedArity = 1;
G__17569.cljs$lang$applyTo = (function (arglist__17571){
var p1__17543_SHARP_ = cljs.core.first(arglist__17571);
var rest__17544_SHARP_ = cljs.core.rest(arglist__17571);
return G__17569__delegate(p1__17543_SHARP_,rest__17544_SHARP_);
});
G__17569.cljs$core$IFn$_invoke$arity$variadic = G__17569__delegate;
return G__17569;
})()
;})(as__$1,dima,ms__$1))
,a);
});})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__17572__delegate = function (p1__17545_SHARP_,rest__17546_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17545_SHARP_], null),rest__17546_SHARP_);
};
var G__17572 = function (p1__17545_SHARP_,var_args){
var rest__17546_SHARP_ = null;
if (arguments.length > 1) {
var G__17573__i = 0, G__17573__a = new Array(arguments.length -  1);
while (G__17573__i < G__17573__a.length) {G__17573__a[G__17573__i] = arguments[G__17573__i + 1]; ++G__17573__i;}
  rest__17546_SHARP_ = new cljs.core.IndexedSeq(G__17573__a,0,null);
} 
return G__17572__delegate.call(this,p1__17545_SHARP_,rest__17546_SHARP_);};
G__17572.cljs$lang$maxFixedArity = 1;
G__17572.cljs$lang$applyTo = (function (arglist__17574){
var p1__17545_SHARP_ = cljs.core.first(arglist__17574);
var rest__17546_SHARP_ = cljs.core.rest(arglist__17574);
return G__17572__delegate(p1__17545_SHARP_,rest__17546_SHARP_);
});
G__17572.cljs$core$IFn$_invoke$arity$variadic = G__17572__delegate;
return G__17572;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__17575__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__17576__delegate = function (p1__17547_SHARP_,rest__17548_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__17547_SHARP_),rest__17548_SHARP_);
};
var G__17576 = function (p1__17547_SHARP_,var_args){
var rest__17548_SHARP_ = null;
if (arguments.length > 1) {
var G__17577__i = 0, G__17577__a = new Array(arguments.length -  1);
while (G__17577__i < G__17577__a.length) {G__17577__a[G__17577__i] = arguments[G__17577__i + 1]; ++G__17577__i;}
  rest__17548_SHARP_ = new cljs.core.IndexedSeq(G__17577__a,0,null);
} 
return G__17576__delegate.call(this,p1__17547_SHARP_,rest__17548_SHARP_);};
G__17576.cljs$lang$maxFixedArity = 1;
G__17576.cljs$lang$applyTo = (function (arglist__17578){
var p1__17547_SHARP_ = cljs.core.first(arglist__17578);
var rest__17548_SHARP_ = cljs.core.rest(arglist__17578);
return G__17576__delegate(p1__17547_SHARP_,rest__17548_SHARP_);
});
G__17576.cljs$core$IFn$_invoke$arity$variadic = G__17576__delegate;
return G__17576;
})()
;})(ms__$1))
,a,mr);
};
var G__17575 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__17579__i = 0, G__17579__a = new Array(arguments.length -  3);
while (G__17579__i < G__17579__a.length) {G__17579__a[G__17579__i] = arguments[G__17579__i + 3]; ++G__17579__i;}
  mr = new cljs.core.IndexedSeq(G__17579__a,0,null);
} 
return G__17575__delegate.call(this,i,m,a,mr);};
G__17575.cljs$lang$maxFixedArity = 3;
G__17575.cljs$lang$applyTo = (function (arglist__17580){
var i = cljs.core.first(arglist__17580);
arglist__17580 = cljs.core.next(arglist__17580);
var m = cljs.core.first(arglist__17580);
arglist__17580 = cljs.core.next(arglist__17580);
var a = cljs.core.first(arglist__17580);
var mr = cljs.core.rest(arglist__17580);
return G__17575__delegate(i,m,a,mr);
});
G__17575.cljs$core$IFn$_invoke$arity$variadic = G__17575__delegate;
return G__17575;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__4408__auto___17581 = cljs.core.count.call(null,m__$1);
var i_17582 = (0);
while(true){
if((i_17582 < n__4408__auto___17581)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_17582),((function (i_17582,n__4408__auto___17581,m__$1){
return (function (p1__17549_SHARP_,p2__17550_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_17582,p1__17549_SHARP_),p2__17550_SHARP_);
});})(i_17582,n__4408__auto___17581,m__$1))
);

var G__17583 = (i_17582 + (1));
i_17582 = G__17583;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4408__auto___17584 = cljs.core.count.call(null,m__$1);
var i_17585 = (0);
while(true){
if((i_17585 < n__4408__auto___17584)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_17585),((function (i_17585,n__4408__auto___17584,m__$1){
return (function() { 
var G__17586__delegate = function (p1__17551_SHARP_,rest__17552_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_17585,p1__17551_SHARP_),rest__17552_SHARP_);
};
var G__17586 = function (p1__17551_SHARP_,var_args){
var rest__17552_SHARP_ = null;
if (arguments.length > 1) {
var G__17587__i = 0, G__17587__a = new Array(arguments.length -  1);
while (G__17587__i < G__17587__a.length) {G__17587__a[G__17587__i] = arguments[G__17587__i + 1]; ++G__17587__i;}
  rest__17552_SHARP_ = new cljs.core.IndexedSeq(G__17587__a,0,null);
} 
return G__17586__delegate.call(this,p1__17551_SHARP_,rest__17552_SHARP_);};
G__17586.cljs$lang$maxFixedArity = 1;
G__17586.cljs$lang$applyTo = (function (arglist__17588){
var p1__17551_SHARP_ = cljs.core.first(arglist__17588);
var rest__17552_SHARP_ = cljs.core.rest(arglist__17588);
return G__17586__delegate(p1__17551_SHARP_,rest__17552_SHARP_);
});
G__17586.cljs$core$IFn$_invoke$arity$variadic = G__17586__delegate;
return G__17586;
})()
;})(i_17585,n__4408__auto___17584,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_17585));

var G__17589 = (i_17585 + (1));
i_17585 = G__17589;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4408__auto___17590 = cljs.core.count.call(null,m__$1);
var i_17591 = (0);
while(true){
if((i_17591 < n__4408__auto___17590)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_17591),((function (i_17591,n__4408__auto___17590,m__$1){
return (function() { 
var G__17592__delegate = function (p1__17553_SHARP_,rest__17554_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_17591,p1__17553_SHARP_),rest__17554_SHARP_);
};
var G__17592 = function (p1__17553_SHARP_,var_args){
var rest__17554_SHARP_ = null;
if (arguments.length > 1) {
var G__17593__i = 0, G__17593__a = new Array(arguments.length -  1);
while (G__17593__i < G__17593__a.length) {G__17593__a[G__17593__i] = arguments[G__17593__i + 1]; ++G__17593__i;}
  rest__17554_SHARP_ = new cljs.core.IndexedSeq(G__17593__a,0,null);
} 
return G__17592__delegate.call(this,p1__17553_SHARP_,rest__17554_SHARP_);};
G__17592.cljs$lang$maxFixedArity = 1;
G__17592.cljs$lang$applyTo = (function (arglist__17594){
var p1__17553_SHARP_ = cljs.core.first(arglist__17594);
var rest__17554_SHARP_ = cljs.core.rest(arglist__17594);
return G__17592__delegate(p1__17553_SHARP_,rest__17554_SHARP_);
});
G__17592.cljs$core$IFn$_invoke$arity$variadic = G__17592__delegate;
return G__17592;
})()
;})(i_17591,n__4408__auto___17590,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_17591),cljs.core.map.call(null,((function (i_17591,n__4408__auto___17590,m__$1){
return (function (p1__17555_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__17555_SHARP_,i_17591);
});})(i_17591,n__4408__auto___17590,m__$1))
,more));

var G__17595 = (i_17591 + (1));
i_17591 = G__17595;
continue;
} else {
}
break;
}

return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
if(cljs.core._EQ_.call(null,(1),clojure.core.matrix.protocols.dimensionality.call(null,a__$1))){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__17596_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__17596_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,["Array dimension does not match length of args"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__17597_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__17597_SHARP_),cljs.core.next.call(null,args));
});})(a__$1))
,cljs.core.first.call(null,args)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});
clojure.core.matrix.implementations.register_implementation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=persistent_vector.js.map
