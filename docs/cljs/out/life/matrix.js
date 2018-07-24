// Compiled by ClojureScript 1.10.339 {}
goog.provide('life.matrix');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
/**
 * Create a function from a boolean function, mapping a truthy value to 1 or 0.
 * e.g. ((nbool not) false) => 1
 *      ((nbool not) true) => 0
 */
life.matrix.nbool = (function life$matrix$nbool(f){
return (function (v){
if(cljs.core.truth_(f.call(null,v))){
return (1);
} else {
return (0);
}
});
});
/**
 * Creates a matrix of a given shape that contains a given matrix 'a'.
 * If the new matrix is smaller than the source matrix, then the source
 * matrix is truncated.
 * If the new matrix is larger than the source matrix in any dimension,
 * then it is padded out using the 'default' value, or 0 if not provided.
 */
life.matrix.takeof = (function life$matrix$takeof(var_args){
var G__18834 = arguments.length;
switch (G__18834) {
case 2:
return life.matrix.takeof.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return life.matrix.takeof.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

life.matrix.takeof.cljs$core$IFn$_invoke$arity$2 = (function (sh,a){
return life.matrix.takeof.call(null,sh,a,(0));
});

life.matrix.takeof.cljs$core$IFn$_invoke$arity$3 = (function (sh,a,default$){
var src_shape = clojure.core.matrix.shape.call(null,a);
return clojure.core.matrix.compute_matrix.call(null,sh,((function (src_shape){
return (function() { 
var G__18836__delegate = function (idx){
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._LT_,idx,src_shape))){
return cljs.core.apply.call(null,clojure.core.matrix.mget,a,idx);
} else {
return default$;
}
};
var G__18836 = function (var_args){
var idx = null;
if (arguments.length > 0) {
var G__18837__i = 0, G__18837__a = new Array(arguments.length -  0);
while (G__18837__i < G__18837__a.length) {G__18837__a[G__18837__i] = arguments[G__18837__i + 0]; ++G__18837__i;}
  idx = new cljs.core.IndexedSeq(G__18837__a,0,null);
} 
return G__18836__delegate.call(this,idx);};
G__18836.cljs$lang$maxFixedArity = 0;
G__18836.cljs$lang$applyTo = (function (arglist__18838){
var idx = cljs.core.seq(arglist__18838);
return G__18836__delegate(idx);
});
G__18836.cljs$core$IFn$_invoke$arity$variadic = G__18836__delegate;
return G__18836;
})()
;})(src_shape))
);
});

life.matrix.takeof.cljs$lang$maxFixedArity = 3;

/**
 * Performs an element-wise boolean AND operation on matrices
 * using numerical boolean values (0/1)
 */
life.matrix.and_STAR_ = (function life$matrix$and_STAR_(a,b){
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__18839_SHARP_){
return cljs.core._EQ_.call(null,(2),p1__18839_SHARP_);
})),clojure.core.matrix.add.call(null,a,b));
});
/**
 * Performs an element-wise boolean OR operation on matrices
 * using numerical boolean values (0/1)
 */
life.matrix.or_STAR_ = (function life$matrix$or_STAR_(a,b){
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__18840_SHARP_){
return !((p1__18840_SHARP_ === (0)));
})),clojure.core.matrix.add.call(null,a,b));
});
/**
 * Creates a function from a matrix, that when a applied to a scalar will
 * return a boolean matrix where every matrix element that matches the
 * scalar will be true (1) in the result.
 * e.g. ((=x [1 2 3]) 2) => [0 1 0]
 *      ((=x [1 2 3]) 3) => [0 0 1]
 */
life.matrix._EQ_x = (function life$matrix$_EQ_x(a){
return (function (x){
return clojure.core.matrix.emap.call(null,life.matrix.nbool.call(null,(function (p1__18841_SHARP_){
return cljs.core._EQ_.call(null,x,p1__18841_SHARP_);
})),a);
});
});

//# sourceMappingURL=matrix.js.map
