// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23213 = arguments.length;
switch (G__23213) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23214 = (function (f,blockable,meta23215){
this.f = f;
this.blockable = blockable;
this.meta23215 = meta23215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23216,meta23215__$1){
var self__ = this;
var _23216__$1 = this;
return (new cljs.core.async.t_cljs$core$async23214(self__.f,self__.blockable,meta23215__$1));
});

cljs.core.async.t_cljs$core$async23214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23216){
var self__ = this;
var _23216__$1 = this;
return self__.meta23215;
});

cljs.core.async.t_cljs$core$async23214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23215","meta23215",1771699504,null)], null);
});

cljs.core.async.t_cljs$core$async23214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23214";

cljs.core.async.t_cljs$core$async23214.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23214");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23214.
 */
cljs.core.async.__GT_t_cljs$core$async23214 = (function cljs$core$async$__GT_t_cljs$core$async23214(f__$1,blockable__$1,meta23215){
return (new cljs.core.async.t_cljs$core$async23214(f__$1,blockable__$1,meta23215));
});

}

return (new cljs.core.async.t_cljs$core$async23214(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23220 = arguments.length;
switch (G__23220) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23223 = arguments.length;
switch (G__23223) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23226 = arguments.length;
switch (G__23226) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23228 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23228);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23228,ret){
return (function (){
return fn1.call(null,val_23228);
});})(val_23228,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23230 = arguments.length;
switch (G__23230) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___23232 = n;
var x_23233 = (0);
while(true){
if((x_23233 < n__4408__auto___23232)){
(a[x_23233] = (0));

var G__23234 = (x_23233 + (1));
x_23233 = G__23234;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23235 = (i + (1));
i = G__23235;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23236 = (function (flag,meta23237){
this.flag = flag;
this.meta23237 = meta23237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23238,meta23237__$1){
var self__ = this;
var _23238__$1 = this;
return (new cljs.core.async.t_cljs$core$async23236(self__.flag,meta23237__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23238){
var self__ = this;
var _23238__$1 = this;
return self__.meta23237;
});})(flag))
;

cljs.core.async.t_cljs$core$async23236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23236.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23237","meta23237",-911584570,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23236";

cljs.core.async.t_cljs$core$async23236.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23236");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23236.
 */
cljs.core.async.__GT_t_cljs$core$async23236 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23236(flag__$1,meta23237){
return (new cljs.core.async.t_cljs$core$async23236(flag__$1,meta23237));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23236(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23239 = (function (flag,cb,meta23240){
this.flag = flag;
this.cb = cb;
this.meta23240 = meta23240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23241,meta23240__$1){
var self__ = this;
var _23241__$1 = this;
return (new cljs.core.async.t_cljs$core$async23239(self__.flag,self__.cb,meta23240__$1));
});

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23241){
var self__ = this;
var _23241__$1 = this;
return self__.meta23240;
});

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23240","meta23240",-615542413,null)], null);
});

cljs.core.async.t_cljs$core$async23239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23239";

cljs.core.async.t_cljs$core$async23239.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23239");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23239.
 */
cljs.core.async.__GT_t_cljs$core$async23239 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23239(flag__$1,cb__$1,meta23240){
return (new cljs.core.async.t_cljs$core$async23239(flag__$1,cb__$1,meta23240));
});

}

return (new cljs.core.async.t_cljs$core$async23239(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23242_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23242_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23243_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23243_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23244 = (i + (1));
i = G__23244;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23250 = arguments.length;
var i__4532__auto___23251 = (0);
while(true){
if((i__4532__auto___23251 < len__4531__auto___23250)){
args__4534__auto__.push((arguments[i__4532__auto___23251]));

var G__23252 = (i__4532__auto___23251 + (1));
i__4532__auto___23251 = G__23252;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23247){
var map__23248 = p__23247;
var map__23248__$1 = ((((!((map__23248 == null)))?(((((map__23248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23248):map__23248);
var opts = map__23248__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23245){
var G__23246 = cljs.core.first.call(null,seq23245);
var seq23245__$1 = cljs.core.next.call(null,seq23245);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23246,seq23245__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23254 = arguments.length;
switch (G__23254) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23153__auto___23300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___23300){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___23300){
return (function (state_23278){
var state_val_23279 = (state_23278[(1)]);
if((state_val_23279 === (7))){
var inst_23274 = (state_23278[(2)]);
var state_23278__$1 = state_23278;
var statearr_23280_23301 = state_23278__$1;
(statearr_23280_23301[(2)] = inst_23274);

(statearr_23280_23301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (1))){
var state_23278__$1 = state_23278;
var statearr_23281_23302 = state_23278__$1;
(statearr_23281_23302[(2)] = null);

(statearr_23281_23302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (4))){
var inst_23257 = (state_23278[(7)]);
var inst_23257__$1 = (state_23278[(2)]);
var inst_23258 = (inst_23257__$1 == null);
var state_23278__$1 = (function (){var statearr_23282 = state_23278;
(statearr_23282[(7)] = inst_23257__$1);

return statearr_23282;
})();
if(cljs.core.truth_(inst_23258)){
var statearr_23283_23303 = state_23278__$1;
(statearr_23283_23303[(1)] = (5));

} else {
var statearr_23284_23304 = state_23278__$1;
(statearr_23284_23304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (13))){
var state_23278__$1 = state_23278;
var statearr_23285_23305 = state_23278__$1;
(statearr_23285_23305[(2)] = null);

(statearr_23285_23305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (6))){
var inst_23257 = (state_23278[(7)]);
var state_23278__$1 = state_23278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23278__$1,(11),to,inst_23257);
} else {
if((state_val_23279 === (3))){
var inst_23276 = (state_23278[(2)]);
var state_23278__$1 = state_23278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23278__$1,inst_23276);
} else {
if((state_val_23279 === (12))){
var state_23278__$1 = state_23278;
var statearr_23286_23306 = state_23278__$1;
(statearr_23286_23306[(2)] = null);

(statearr_23286_23306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (2))){
var state_23278__$1 = state_23278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23278__$1,(4),from);
} else {
if((state_val_23279 === (11))){
var inst_23267 = (state_23278[(2)]);
var state_23278__$1 = state_23278;
if(cljs.core.truth_(inst_23267)){
var statearr_23287_23307 = state_23278__$1;
(statearr_23287_23307[(1)] = (12));

} else {
var statearr_23288_23308 = state_23278__$1;
(statearr_23288_23308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (9))){
var state_23278__$1 = state_23278;
var statearr_23289_23309 = state_23278__$1;
(statearr_23289_23309[(2)] = null);

(statearr_23289_23309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (5))){
var state_23278__$1 = state_23278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23290_23310 = state_23278__$1;
(statearr_23290_23310[(1)] = (8));

} else {
var statearr_23291_23311 = state_23278__$1;
(statearr_23291_23311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (14))){
var inst_23272 = (state_23278[(2)]);
var state_23278__$1 = state_23278;
var statearr_23292_23312 = state_23278__$1;
(statearr_23292_23312[(2)] = inst_23272);

(statearr_23292_23312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (10))){
var inst_23264 = (state_23278[(2)]);
var state_23278__$1 = state_23278;
var statearr_23293_23313 = state_23278__$1;
(statearr_23293_23313[(2)] = inst_23264);

(statearr_23293_23313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (8))){
var inst_23261 = cljs.core.async.close_BANG_.call(null,to);
var state_23278__$1 = state_23278;
var statearr_23294_23314 = state_23278__$1;
(statearr_23294_23314[(2)] = inst_23261);

(statearr_23294_23314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___23300))
;
return ((function (switch__23062__auto__,c__23153__auto___23300){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_23295 = [null,null,null,null,null,null,null,null];
(statearr_23295[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_23295[(1)] = (1));

return statearr_23295;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_23278){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23296){if((e23296 instanceof Object)){
var ex__23066__auto__ = e23296;
var statearr_23297_23315 = state_23278;
(statearr_23297_23315[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23316 = state_23278;
state_23278 = G__23316;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_23278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_23278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___23300))
})();
var state__23155__auto__ = (function (){var statearr_23298 = f__23154__auto__.call(null);
(statearr_23298[(6)] = c__23153__auto___23300);

return statearr_23298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___23300))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23317){
var vec__23318 = p__23317;
var v = cljs.core.nth.call(null,vec__23318,(0),null);
var p = cljs.core.nth.call(null,vec__23318,(1),null);
var job = vec__23318;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23153__auto___23489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___23489,res,vec__23318,v,p,job,jobs,results){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___23489,res,vec__23318,v,p,job,jobs,results){
return (function (state_23325){
var state_val_23326 = (state_23325[(1)]);
if((state_val_23326 === (1))){
var state_23325__$1 = state_23325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23325__$1,(2),res,v);
} else {
if((state_val_23326 === (2))){
var inst_23322 = (state_23325[(2)]);
var inst_23323 = cljs.core.async.close_BANG_.call(null,res);
var state_23325__$1 = (function (){var statearr_23327 = state_23325;
(statearr_23327[(7)] = inst_23322);

return statearr_23327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23325__$1,inst_23323);
} else {
return null;
}
}
});})(c__23153__auto___23489,res,vec__23318,v,p,job,jobs,results))
;
return ((function (switch__23062__auto__,c__23153__auto___23489,res,vec__23318,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23328 = [null,null,null,null,null,null,null,null];
(statearr_23328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23328[(1)] = (1));

return statearr_23328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23325){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23329){if((e23329 instanceof Object)){
var ex__23066__auto__ = e23329;
var statearr_23330_23490 = state_23325;
(statearr_23330_23490[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23491 = state_23325;
state_23325 = G__23491;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___23489,res,vec__23318,v,p,job,jobs,results))
})();
var state__23155__auto__ = (function (){var statearr_23331 = f__23154__auto__.call(null);
(statearr_23331[(6)] = c__23153__auto___23489);

return statearr_23331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___23489,res,vec__23318,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23332){
var vec__23333 = p__23332;
var v = cljs.core.nth.call(null,vec__23333,(0),null);
var p = cljs.core.nth.call(null,vec__23333,(1),null);
var job = vec__23333;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___23492 = n;
var __23493 = (0);
while(true){
if((__23493 < n__4408__auto___23492)){
var G__23336_23494 = type;
var G__23336_23495__$1 = (((G__23336_23494 instanceof cljs.core.Keyword))?G__23336_23494.fqn:null);
switch (G__23336_23495__$1) {
case "compute":
var c__23153__auto___23497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23493,c__23153__auto___23497,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (__23493,c__23153__auto___23497,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async){
return (function (state_23349){
var state_val_23350 = (state_23349[(1)]);
if((state_val_23350 === (1))){
var state_23349__$1 = state_23349;
var statearr_23351_23498 = state_23349__$1;
(statearr_23351_23498[(2)] = null);

(statearr_23351_23498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (2))){
var state_23349__$1 = state_23349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23349__$1,(4),jobs);
} else {
if((state_val_23350 === (3))){
var inst_23347 = (state_23349[(2)]);
var state_23349__$1 = state_23349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23349__$1,inst_23347);
} else {
if((state_val_23350 === (4))){
var inst_23339 = (state_23349[(2)]);
var inst_23340 = process.call(null,inst_23339);
var state_23349__$1 = state_23349;
if(cljs.core.truth_(inst_23340)){
var statearr_23352_23499 = state_23349__$1;
(statearr_23352_23499[(1)] = (5));

} else {
var statearr_23353_23500 = state_23349__$1;
(statearr_23353_23500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (5))){
var state_23349__$1 = state_23349;
var statearr_23354_23501 = state_23349__$1;
(statearr_23354_23501[(2)] = null);

(statearr_23354_23501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (6))){
var state_23349__$1 = state_23349;
var statearr_23355_23502 = state_23349__$1;
(statearr_23355_23502[(2)] = null);

(statearr_23355_23502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23350 === (7))){
var inst_23345 = (state_23349[(2)]);
var state_23349__$1 = state_23349;
var statearr_23356_23503 = state_23349__$1;
(statearr_23356_23503[(2)] = inst_23345);

(statearr_23356_23503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23493,c__23153__auto___23497,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async))
;
return ((function (__23493,switch__23062__auto__,c__23153__auto___23497,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23357 = [null,null,null,null,null,null,null];
(statearr_23357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23357[(1)] = (1));

return statearr_23357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23349){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23358){if((e23358 instanceof Object)){
var ex__23066__auto__ = e23358;
var statearr_23359_23504 = state_23349;
(statearr_23359_23504[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23505 = state_23349;
state_23349 = G__23505;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(__23493,switch__23062__auto__,c__23153__auto___23497,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async))
})();
var state__23155__auto__ = (function (){var statearr_23360 = f__23154__auto__.call(null);
(statearr_23360[(6)] = c__23153__auto___23497);

return statearr_23360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(__23493,c__23153__auto___23497,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async))
);


break;
case "async":
var c__23153__auto___23506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23493,c__23153__auto___23506,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (__23493,c__23153__auto___23506,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async){
return (function (state_23373){
var state_val_23374 = (state_23373[(1)]);
if((state_val_23374 === (1))){
var state_23373__$1 = state_23373;
var statearr_23375_23507 = state_23373__$1;
(statearr_23375_23507[(2)] = null);

(statearr_23375_23507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (2))){
var state_23373__$1 = state_23373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23373__$1,(4),jobs);
} else {
if((state_val_23374 === (3))){
var inst_23371 = (state_23373[(2)]);
var state_23373__$1 = state_23373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23373__$1,inst_23371);
} else {
if((state_val_23374 === (4))){
var inst_23363 = (state_23373[(2)]);
var inst_23364 = async.call(null,inst_23363);
var state_23373__$1 = state_23373;
if(cljs.core.truth_(inst_23364)){
var statearr_23376_23508 = state_23373__$1;
(statearr_23376_23508[(1)] = (5));

} else {
var statearr_23377_23509 = state_23373__$1;
(statearr_23377_23509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (5))){
var state_23373__$1 = state_23373;
var statearr_23378_23510 = state_23373__$1;
(statearr_23378_23510[(2)] = null);

(statearr_23378_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (6))){
var state_23373__$1 = state_23373;
var statearr_23379_23511 = state_23373__$1;
(statearr_23379_23511[(2)] = null);

(statearr_23379_23511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (7))){
var inst_23369 = (state_23373[(2)]);
var state_23373__$1 = state_23373;
var statearr_23380_23512 = state_23373__$1;
(statearr_23380_23512[(2)] = inst_23369);

(statearr_23380_23512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23493,c__23153__auto___23506,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async))
;
return ((function (__23493,switch__23062__auto__,c__23153__auto___23506,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23381 = [null,null,null,null,null,null,null];
(statearr_23381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23381[(1)] = (1));

return statearr_23381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23373){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23382){if((e23382 instanceof Object)){
var ex__23066__auto__ = e23382;
var statearr_23383_23513 = state_23373;
(statearr_23383_23513[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23514 = state_23373;
state_23373 = G__23514;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(__23493,switch__23062__auto__,c__23153__auto___23506,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async))
})();
var state__23155__auto__ = (function (){var statearr_23384 = f__23154__auto__.call(null);
(statearr_23384[(6)] = c__23153__auto___23506);

return statearr_23384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(__23493,c__23153__auto___23506,G__23336_23494,G__23336_23495__$1,n__4408__auto___23492,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23336_23495__$1)].join('')));

}

var G__23515 = (__23493 + (1));
__23493 = G__23515;
continue;
} else {
}
break;
}

var c__23153__auto___23516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___23516,jobs,results,process,async){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___23516,jobs,results,process,async){
return (function (state_23406){
var state_val_23407 = (state_23406[(1)]);
if((state_val_23407 === (1))){
var state_23406__$1 = state_23406;
var statearr_23408_23517 = state_23406__$1;
(statearr_23408_23517[(2)] = null);

(statearr_23408_23517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (2))){
var state_23406__$1 = state_23406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23406__$1,(4),from);
} else {
if((state_val_23407 === (3))){
var inst_23404 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23406__$1,inst_23404);
} else {
if((state_val_23407 === (4))){
var inst_23387 = (state_23406[(7)]);
var inst_23387__$1 = (state_23406[(2)]);
var inst_23388 = (inst_23387__$1 == null);
var state_23406__$1 = (function (){var statearr_23409 = state_23406;
(statearr_23409[(7)] = inst_23387__$1);

return statearr_23409;
})();
if(cljs.core.truth_(inst_23388)){
var statearr_23410_23518 = state_23406__$1;
(statearr_23410_23518[(1)] = (5));

} else {
var statearr_23411_23519 = state_23406__$1;
(statearr_23411_23519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (5))){
var inst_23390 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23406__$1 = state_23406;
var statearr_23412_23520 = state_23406__$1;
(statearr_23412_23520[(2)] = inst_23390);

(statearr_23412_23520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (6))){
var inst_23392 = (state_23406[(8)]);
var inst_23387 = (state_23406[(7)]);
var inst_23392__$1 = cljs.core.async.chan.call(null,(1));
var inst_23393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23394 = [inst_23387,inst_23392__$1];
var inst_23395 = (new cljs.core.PersistentVector(null,2,(5),inst_23393,inst_23394,null));
var state_23406__$1 = (function (){var statearr_23413 = state_23406;
(statearr_23413[(8)] = inst_23392__$1);

return statearr_23413;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23406__$1,(8),jobs,inst_23395);
} else {
if((state_val_23407 === (7))){
var inst_23402 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
var statearr_23414_23521 = state_23406__$1;
(statearr_23414_23521[(2)] = inst_23402);

(statearr_23414_23521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (8))){
var inst_23392 = (state_23406[(8)]);
var inst_23397 = (state_23406[(2)]);
var state_23406__$1 = (function (){var statearr_23415 = state_23406;
(statearr_23415[(9)] = inst_23397);

return statearr_23415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23406__$1,(9),results,inst_23392);
} else {
if((state_val_23407 === (9))){
var inst_23399 = (state_23406[(2)]);
var state_23406__$1 = (function (){var statearr_23416 = state_23406;
(statearr_23416[(10)] = inst_23399);

return statearr_23416;
})();
var statearr_23417_23522 = state_23406__$1;
(statearr_23417_23522[(2)] = null);

(statearr_23417_23522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___23516,jobs,results,process,async))
;
return ((function (switch__23062__auto__,c__23153__auto___23516,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23418[(1)] = (1));

return statearr_23418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23406){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23419){if((e23419 instanceof Object)){
var ex__23066__auto__ = e23419;
var statearr_23420_23523 = state_23406;
(statearr_23420_23523[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23524 = state_23406;
state_23406 = G__23524;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___23516,jobs,results,process,async))
})();
var state__23155__auto__ = (function (){var statearr_23421 = f__23154__auto__.call(null);
(statearr_23421[(6)] = c__23153__auto___23516);

return statearr_23421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___23516,jobs,results,process,async))
);


var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__,jobs,results,process,async){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__,jobs,results,process,async){
return (function (state_23459){
var state_val_23460 = (state_23459[(1)]);
if((state_val_23460 === (7))){
var inst_23455 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23461_23525 = state_23459__$1;
(statearr_23461_23525[(2)] = inst_23455);

(statearr_23461_23525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (20))){
var state_23459__$1 = state_23459;
var statearr_23462_23526 = state_23459__$1;
(statearr_23462_23526[(2)] = null);

(statearr_23462_23526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (1))){
var state_23459__$1 = state_23459;
var statearr_23463_23527 = state_23459__$1;
(statearr_23463_23527[(2)] = null);

(statearr_23463_23527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (4))){
var inst_23424 = (state_23459[(7)]);
var inst_23424__$1 = (state_23459[(2)]);
var inst_23425 = (inst_23424__$1 == null);
var state_23459__$1 = (function (){var statearr_23464 = state_23459;
(statearr_23464[(7)] = inst_23424__$1);

return statearr_23464;
})();
if(cljs.core.truth_(inst_23425)){
var statearr_23465_23528 = state_23459__$1;
(statearr_23465_23528[(1)] = (5));

} else {
var statearr_23466_23529 = state_23459__$1;
(statearr_23466_23529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (15))){
var inst_23437 = (state_23459[(8)]);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23459__$1,(18),to,inst_23437);
} else {
if((state_val_23460 === (21))){
var inst_23450 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23467_23530 = state_23459__$1;
(statearr_23467_23530[(2)] = inst_23450);

(statearr_23467_23530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (13))){
var inst_23452 = (state_23459[(2)]);
var state_23459__$1 = (function (){var statearr_23468 = state_23459;
(statearr_23468[(9)] = inst_23452);

return statearr_23468;
})();
var statearr_23469_23531 = state_23459__$1;
(statearr_23469_23531[(2)] = null);

(statearr_23469_23531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (6))){
var inst_23424 = (state_23459[(7)]);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23459__$1,(11),inst_23424);
} else {
if((state_val_23460 === (17))){
var inst_23445 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
if(cljs.core.truth_(inst_23445)){
var statearr_23470_23532 = state_23459__$1;
(statearr_23470_23532[(1)] = (19));

} else {
var statearr_23471_23533 = state_23459__$1;
(statearr_23471_23533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (3))){
var inst_23457 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23459__$1,inst_23457);
} else {
if((state_val_23460 === (12))){
var inst_23434 = (state_23459[(10)]);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23459__$1,(14),inst_23434);
} else {
if((state_val_23460 === (2))){
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23459__$1,(4),results);
} else {
if((state_val_23460 === (19))){
var state_23459__$1 = state_23459;
var statearr_23472_23534 = state_23459__$1;
(statearr_23472_23534[(2)] = null);

(statearr_23472_23534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (11))){
var inst_23434 = (state_23459[(2)]);
var state_23459__$1 = (function (){var statearr_23473 = state_23459;
(statearr_23473[(10)] = inst_23434);

return statearr_23473;
})();
var statearr_23474_23535 = state_23459__$1;
(statearr_23474_23535[(2)] = null);

(statearr_23474_23535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (9))){
var state_23459__$1 = state_23459;
var statearr_23475_23536 = state_23459__$1;
(statearr_23475_23536[(2)] = null);

(statearr_23475_23536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (5))){
var state_23459__$1 = state_23459;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23476_23537 = state_23459__$1;
(statearr_23476_23537[(1)] = (8));

} else {
var statearr_23477_23538 = state_23459__$1;
(statearr_23477_23538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (14))){
var inst_23437 = (state_23459[(8)]);
var inst_23439 = (state_23459[(11)]);
var inst_23437__$1 = (state_23459[(2)]);
var inst_23438 = (inst_23437__$1 == null);
var inst_23439__$1 = cljs.core.not.call(null,inst_23438);
var state_23459__$1 = (function (){var statearr_23478 = state_23459;
(statearr_23478[(8)] = inst_23437__$1);

(statearr_23478[(11)] = inst_23439__$1);

return statearr_23478;
})();
if(inst_23439__$1){
var statearr_23479_23539 = state_23459__$1;
(statearr_23479_23539[(1)] = (15));

} else {
var statearr_23480_23540 = state_23459__$1;
(statearr_23480_23540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (16))){
var inst_23439 = (state_23459[(11)]);
var state_23459__$1 = state_23459;
var statearr_23481_23541 = state_23459__$1;
(statearr_23481_23541[(2)] = inst_23439);

(statearr_23481_23541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (10))){
var inst_23431 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23482_23542 = state_23459__$1;
(statearr_23482_23542[(2)] = inst_23431);

(statearr_23482_23542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (18))){
var inst_23442 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23483_23543 = state_23459__$1;
(statearr_23483_23543[(2)] = inst_23442);

(statearr_23483_23543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (8))){
var inst_23428 = cljs.core.async.close_BANG_.call(null,to);
var state_23459__$1 = state_23459;
var statearr_23484_23544 = state_23459__$1;
(statearr_23484_23544[(2)] = inst_23428);

(statearr_23484_23544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto__,jobs,results,process,async))
;
return ((function (switch__23062__auto__,c__23153__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23485[(1)] = (1));

return statearr_23485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23459){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23486){if((e23486 instanceof Object)){
var ex__23066__auto__ = e23486;
var statearr_23487_23545 = state_23459;
(statearr_23487_23545[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23546 = state_23459;
state_23459 = G__23546;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__,jobs,results,process,async))
})();
var state__23155__auto__ = (function (){var statearr_23488 = f__23154__auto__.call(null);
(statearr_23488[(6)] = c__23153__auto__);

return statearr_23488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__,jobs,results,process,async))
);

return c__23153__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23548 = arguments.length;
switch (G__23548) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23551 = arguments.length;
switch (G__23551) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23554 = arguments.length;
switch (G__23554) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23153__auto___23603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___23603,tc,fc){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___23603,tc,fc){
return (function (state_23580){
var state_val_23581 = (state_23580[(1)]);
if((state_val_23581 === (7))){
var inst_23576 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23582_23604 = state_23580__$1;
(statearr_23582_23604[(2)] = inst_23576);

(statearr_23582_23604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (1))){
var state_23580__$1 = state_23580;
var statearr_23583_23605 = state_23580__$1;
(statearr_23583_23605[(2)] = null);

(statearr_23583_23605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (4))){
var inst_23557 = (state_23580[(7)]);
var inst_23557__$1 = (state_23580[(2)]);
var inst_23558 = (inst_23557__$1 == null);
var state_23580__$1 = (function (){var statearr_23584 = state_23580;
(statearr_23584[(7)] = inst_23557__$1);

return statearr_23584;
})();
if(cljs.core.truth_(inst_23558)){
var statearr_23585_23606 = state_23580__$1;
(statearr_23585_23606[(1)] = (5));

} else {
var statearr_23586_23607 = state_23580__$1;
(statearr_23586_23607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (13))){
var state_23580__$1 = state_23580;
var statearr_23587_23608 = state_23580__$1;
(statearr_23587_23608[(2)] = null);

(statearr_23587_23608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (6))){
var inst_23557 = (state_23580[(7)]);
var inst_23563 = p.call(null,inst_23557);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23563)){
var statearr_23588_23609 = state_23580__$1;
(statearr_23588_23609[(1)] = (9));

} else {
var statearr_23589_23610 = state_23580__$1;
(statearr_23589_23610[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (3))){
var inst_23578 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23580__$1,inst_23578);
} else {
if((state_val_23581 === (12))){
var state_23580__$1 = state_23580;
var statearr_23590_23611 = state_23580__$1;
(statearr_23590_23611[(2)] = null);

(statearr_23590_23611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (2))){
var state_23580__$1 = state_23580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23580__$1,(4),ch);
} else {
if((state_val_23581 === (11))){
var inst_23557 = (state_23580[(7)]);
var inst_23567 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23580__$1,(8),inst_23567,inst_23557);
} else {
if((state_val_23581 === (9))){
var state_23580__$1 = state_23580;
var statearr_23591_23612 = state_23580__$1;
(statearr_23591_23612[(2)] = tc);

(statearr_23591_23612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (5))){
var inst_23560 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23561 = cljs.core.async.close_BANG_.call(null,fc);
var state_23580__$1 = (function (){var statearr_23592 = state_23580;
(statearr_23592[(8)] = inst_23560);

return statearr_23592;
})();
var statearr_23593_23613 = state_23580__$1;
(statearr_23593_23613[(2)] = inst_23561);

(statearr_23593_23613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (14))){
var inst_23574 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23594_23614 = state_23580__$1;
(statearr_23594_23614[(2)] = inst_23574);

(statearr_23594_23614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (10))){
var state_23580__$1 = state_23580;
var statearr_23595_23615 = state_23580__$1;
(statearr_23595_23615[(2)] = fc);

(statearr_23595_23615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (8))){
var inst_23569 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23569)){
var statearr_23596_23616 = state_23580__$1;
(statearr_23596_23616[(1)] = (12));

} else {
var statearr_23597_23617 = state_23580__$1;
(statearr_23597_23617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___23603,tc,fc))
;
return ((function (switch__23062__auto__,c__23153__auto___23603,tc,fc){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_23598 = [null,null,null,null,null,null,null,null,null];
(statearr_23598[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_23598[(1)] = (1));

return statearr_23598;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_23580){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23599){if((e23599 instanceof Object)){
var ex__23066__auto__ = e23599;
var statearr_23600_23618 = state_23580;
(statearr_23600_23618[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23619 = state_23580;
state_23580 = G__23619;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_23580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_23580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___23603,tc,fc))
})();
var state__23155__auto__ = (function (){var statearr_23601 = f__23154__auto__.call(null);
(statearr_23601[(6)] = c__23153__auto___23603);

return statearr_23601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___23603,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__){
return (function (state_23640){
var state_val_23641 = (state_23640[(1)]);
if((state_val_23641 === (7))){
var inst_23636 = (state_23640[(2)]);
var state_23640__$1 = state_23640;
var statearr_23642_23660 = state_23640__$1;
(statearr_23642_23660[(2)] = inst_23636);

(statearr_23642_23660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23641 === (1))){
var inst_23620 = init;
var state_23640__$1 = (function (){var statearr_23643 = state_23640;
(statearr_23643[(7)] = inst_23620);

return statearr_23643;
})();
var statearr_23644_23661 = state_23640__$1;
(statearr_23644_23661[(2)] = null);

(statearr_23644_23661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23641 === (4))){
var inst_23623 = (state_23640[(8)]);
var inst_23623__$1 = (state_23640[(2)]);
var inst_23624 = (inst_23623__$1 == null);
var state_23640__$1 = (function (){var statearr_23645 = state_23640;
(statearr_23645[(8)] = inst_23623__$1);

return statearr_23645;
})();
if(cljs.core.truth_(inst_23624)){
var statearr_23646_23662 = state_23640__$1;
(statearr_23646_23662[(1)] = (5));

} else {
var statearr_23647_23663 = state_23640__$1;
(statearr_23647_23663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23641 === (6))){
var inst_23623 = (state_23640[(8)]);
var inst_23627 = (state_23640[(9)]);
var inst_23620 = (state_23640[(7)]);
var inst_23627__$1 = f.call(null,inst_23620,inst_23623);
var inst_23628 = cljs.core.reduced_QMARK_.call(null,inst_23627__$1);
var state_23640__$1 = (function (){var statearr_23648 = state_23640;
(statearr_23648[(9)] = inst_23627__$1);

return statearr_23648;
})();
if(inst_23628){
var statearr_23649_23664 = state_23640__$1;
(statearr_23649_23664[(1)] = (8));

} else {
var statearr_23650_23665 = state_23640__$1;
(statearr_23650_23665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23641 === (3))){
var inst_23638 = (state_23640[(2)]);
var state_23640__$1 = state_23640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23640__$1,inst_23638);
} else {
if((state_val_23641 === (2))){
var state_23640__$1 = state_23640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23640__$1,(4),ch);
} else {
if((state_val_23641 === (9))){
var inst_23627 = (state_23640[(9)]);
var inst_23620 = inst_23627;
var state_23640__$1 = (function (){var statearr_23651 = state_23640;
(statearr_23651[(7)] = inst_23620);

return statearr_23651;
})();
var statearr_23652_23666 = state_23640__$1;
(statearr_23652_23666[(2)] = null);

(statearr_23652_23666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23641 === (5))){
var inst_23620 = (state_23640[(7)]);
var state_23640__$1 = state_23640;
var statearr_23653_23667 = state_23640__$1;
(statearr_23653_23667[(2)] = inst_23620);

(statearr_23653_23667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23641 === (10))){
var inst_23634 = (state_23640[(2)]);
var state_23640__$1 = state_23640;
var statearr_23654_23668 = state_23640__$1;
(statearr_23654_23668[(2)] = inst_23634);

(statearr_23654_23668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23641 === (8))){
var inst_23627 = (state_23640[(9)]);
var inst_23630 = cljs.core.deref.call(null,inst_23627);
var state_23640__$1 = state_23640;
var statearr_23655_23669 = state_23640__$1;
(statearr_23655_23669[(2)] = inst_23630);

(statearr_23655_23669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto__))
;
return ((function (switch__23062__auto__,c__23153__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23063__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23063__auto____0 = (function (){
var statearr_23656 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23656[(0)] = cljs$core$async$reduce_$_state_machine__23063__auto__);

(statearr_23656[(1)] = (1));

return statearr_23656;
});
var cljs$core$async$reduce_$_state_machine__23063__auto____1 = (function (state_23640){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23657){if((e23657 instanceof Object)){
var ex__23066__auto__ = e23657;
var statearr_23658_23670 = state_23640;
(statearr_23658_23670[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23671 = state_23640;
state_23640 = G__23671;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23063__auto__ = function(state_23640){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23063__auto____1.call(this,state_23640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23063__auto____0;
cljs$core$async$reduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23063__auto____1;
return cljs$core$async$reduce_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__))
})();
var state__23155__auto__ = (function (){var statearr_23659 = f__23154__auto__.call(null);
(statearr_23659[(6)] = c__23153__auto__);

return statearr_23659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__))
);

return c__23153__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__,f__$1){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__,f__$1){
return (function (state_23677){
var state_val_23678 = (state_23677[(1)]);
if((state_val_23678 === (1))){
var inst_23672 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23677__$1 = state_23677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23677__$1,(2),inst_23672);
} else {
if((state_val_23678 === (2))){
var inst_23674 = (state_23677[(2)]);
var inst_23675 = f__$1.call(null,inst_23674);
var state_23677__$1 = state_23677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23677__$1,inst_23675);
} else {
return null;
}
}
});})(c__23153__auto__,f__$1))
;
return ((function (switch__23062__auto__,c__23153__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23063__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23063__auto____0 = (function (){
var statearr_23679 = [null,null,null,null,null,null,null];
(statearr_23679[(0)] = cljs$core$async$transduce_$_state_machine__23063__auto__);

(statearr_23679[(1)] = (1));

return statearr_23679;
});
var cljs$core$async$transduce_$_state_machine__23063__auto____1 = (function (state_23677){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23680){if((e23680 instanceof Object)){
var ex__23066__auto__ = e23680;
var statearr_23681_23683 = state_23677;
(statearr_23681_23683[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23684 = state_23677;
state_23677 = G__23684;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23063__auto__ = function(state_23677){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23063__auto____1.call(this,state_23677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23063__auto____0;
cljs$core$async$transduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23063__auto____1;
return cljs$core$async$transduce_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__,f__$1))
})();
var state__23155__auto__ = (function (){var statearr_23682 = f__23154__auto__.call(null);
(statearr_23682[(6)] = c__23153__auto__);

return statearr_23682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__,f__$1))
);

return c__23153__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23686 = arguments.length;
switch (G__23686) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__){
return (function (state_23711){
var state_val_23712 = (state_23711[(1)]);
if((state_val_23712 === (7))){
var inst_23693 = (state_23711[(2)]);
var state_23711__$1 = state_23711;
var statearr_23713_23734 = state_23711__$1;
(statearr_23713_23734[(2)] = inst_23693);

(statearr_23713_23734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (1))){
var inst_23687 = cljs.core.seq.call(null,coll);
var inst_23688 = inst_23687;
var state_23711__$1 = (function (){var statearr_23714 = state_23711;
(statearr_23714[(7)] = inst_23688);

return statearr_23714;
})();
var statearr_23715_23735 = state_23711__$1;
(statearr_23715_23735[(2)] = null);

(statearr_23715_23735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (4))){
var inst_23688 = (state_23711[(7)]);
var inst_23691 = cljs.core.first.call(null,inst_23688);
var state_23711__$1 = state_23711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23711__$1,(7),ch,inst_23691);
} else {
if((state_val_23712 === (13))){
var inst_23705 = (state_23711[(2)]);
var state_23711__$1 = state_23711;
var statearr_23716_23736 = state_23711__$1;
(statearr_23716_23736[(2)] = inst_23705);

(statearr_23716_23736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (6))){
var inst_23696 = (state_23711[(2)]);
var state_23711__$1 = state_23711;
if(cljs.core.truth_(inst_23696)){
var statearr_23717_23737 = state_23711__$1;
(statearr_23717_23737[(1)] = (8));

} else {
var statearr_23718_23738 = state_23711__$1;
(statearr_23718_23738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (3))){
var inst_23709 = (state_23711[(2)]);
var state_23711__$1 = state_23711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23711__$1,inst_23709);
} else {
if((state_val_23712 === (12))){
var state_23711__$1 = state_23711;
var statearr_23719_23739 = state_23711__$1;
(statearr_23719_23739[(2)] = null);

(statearr_23719_23739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (2))){
var inst_23688 = (state_23711[(7)]);
var state_23711__$1 = state_23711;
if(cljs.core.truth_(inst_23688)){
var statearr_23720_23740 = state_23711__$1;
(statearr_23720_23740[(1)] = (4));

} else {
var statearr_23721_23741 = state_23711__$1;
(statearr_23721_23741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (11))){
var inst_23702 = cljs.core.async.close_BANG_.call(null,ch);
var state_23711__$1 = state_23711;
var statearr_23722_23742 = state_23711__$1;
(statearr_23722_23742[(2)] = inst_23702);

(statearr_23722_23742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (9))){
var state_23711__$1 = state_23711;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23723_23743 = state_23711__$1;
(statearr_23723_23743[(1)] = (11));

} else {
var statearr_23724_23744 = state_23711__$1;
(statearr_23724_23744[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (5))){
var inst_23688 = (state_23711[(7)]);
var state_23711__$1 = state_23711;
var statearr_23725_23745 = state_23711__$1;
(statearr_23725_23745[(2)] = inst_23688);

(statearr_23725_23745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (10))){
var inst_23707 = (state_23711[(2)]);
var state_23711__$1 = state_23711;
var statearr_23726_23746 = state_23711__$1;
(statearr_23726_23746[(2)] = inst_23707);

(statearr_23726_23746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23712 === (8))){
var inst_23688 = (state_23711[(7)]);
var inst_23698 = cljs.core.next.call(null,inst_23688);
var inst_23688__$1 = inst_23698;
var state_23711__$1 = (function (){var statearr_23727 = state_23711;
(statearr_23727[(7)] = inst_23688__$1);

return statearr_23727;
})();
var statearr_23728_23747 = state_23711__$1;
(statearr_23728_23747[(2)] = null);

(statearr_23728_23747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto__))
;
return ((function (switch__23062__auto__,c__23153__auto__){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_23729 = [null,null,null,null,null,null,null,null];
(statearr_23729[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_23729[(1)] = (1));

return statearr_23729;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_23711){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23730){if((e23730 instanceof Object)){
var ex__23066__auto__ = e23730;
var statearr_23731_23748 = state_23711;
(statearr_23731_23748[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23749 = state_23711;
state_23711 = G__23749;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_23711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_23711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__))
})();
var state__23155__auto__ = (function (){var statearr_23732 = f__23154__auto__.call(null);
(statearr_23732[(6)] = c__23153__auto__);

return statearr_23732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__))
);

return c__23153__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23750 = (function (ch,cs,meta23751){
this.ch = ch;
this.cs = cs;
this.meta23751 = meta23751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23752,meta23751__$1){
var self__ = this;
var _23752__$1 = this;
return (new cljs.core.async.t_cljs$core$async23750(self__.ch,self__.cs,meta23751__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23752){
var self__ = this;
var _23752__$1 = this;
return self__.meta23751;
});})(cs))
;

cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23750.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23751","meta23751",-1904081860,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23750";

cljs.core.async.t_cljs$core$async23750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23750");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23750.
 */
cljs.core.async.__GT_t_cljs$core$async23750 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23750(ch__$1,cs__$1,meta23751){
return (new cljs.core.async.t_cljs$core$async23750(ch__$1,cs__$1,meta23751));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23750(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23153__auto___23972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___23972,cs,m,dchan,dctr,done){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___23972,cs,m,dchan,dctr,done){
return (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (7))){
var inst_23883 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23889_23973 = state_23887__$1;
(statearr_23889_23973[(2)] = inst_23883);

(statearr_23889_23973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (20))){
var inst_23786 = (state_23887[(7)]);
var inst_23798 = cljs.core.first.call(null,inst_23786);
var inst_23799 = cljs.core.nth.call(null,inst_23798,(0),null);
var inst_23800 = cljs.core.nth.call(null,inst_23798,(1),null);
var state_23887__$1 = (function (){var statearr_23890 = state_23887;
(statearr_23890[(8)] = inst_23799);

return statearr_23890;
})();
if(cljs.core.truth_(inst_23800)){
var statearr_23891_23974 = state_23887__$1;
(statearr_23891_23974[(1)] = (22));

} else {
var statearr_23892_23975 = state_23887__$1;
(statearr_23892_23975[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (27))){
var inst_23755 = (state_23887[(9)]);
var inst_23830 = (state_23887[(10)]);
var inst_23828 = (state_23887[(11)]);
var inst_23835 = (state_23887[(12)]);
var inst_23835__$1 = cljs.core._nth.call(null,inst_23828,inst_23830);
var inst_23836 = cljs.core.async.put_BANG_.call(null,inst_23835__$1,inst_23755,done);
var state_23887__$1 = (function (){var statearr_23893 = state_23887;
(statearr_23893[(12)] = inst_23835__$1);

return statearr_23893;
})();
if(cljs.core.truth_(inst_23836)){
var statearr_23894_23976 = state_23887__$1;
(statearr_23894_23976[(1)] = (30));

} else {
var statearr_23895_23977 = state_23887__$1;
(statearr_23895_23977[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (1))){
var state_23887__$1 = state_23887;
var statearr_23896_23978 = state_23887__$1;
(statearr_23896_23978[(2)] = null);

(statearr_23896_23978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (24))){
var inst_23786 = (state_23887[(7)]);
var inst_23805 = (state_23887[(2)]);
var inst_23806 = cljs.core.next.call(null,inst_23786);
var inst_23764 = inst_23806;
var inst_23765 = null;
var inst_23766 = (0);
var inst_23767 = (0);
var state_23887__$1 = (function (){var statearr_23897 = state_23887;
(statearr_23897[(13)] = inst_23766);

(statearr_23897[(14)] = inst_23767);

(statearr_23897[(15)] = inst_23765);

(statearr_23897[(16)] = inst_23805);

(statearr_23897[(17)] = inst_23764);

return statearr_23897;
})();
var statearr_23898_23979 = state_23887__$1;
(statearr_23898_23979[(2)] = null);

(statearr_23898_23979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (39))){
var state_23887__$1 = state_23887;
var statearr_23902_23980 = state_23887__$1;
(statearr_23902_23980[(2)] = null);

(statearr_23902_23980[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (4))){
var inst_23755 = (state_23887[(9)]);
var inst_23755__$1 = (state_23887[(2)]);
var inst_23756 = (inst_23755__$1 == null);
var state_23887__$1 = (function (){var statearr_23903 = state_23887;
(statearr_23903[(9)] = inst_23755__$1);

return statearr_23903;
})();
if(cljs.core.truth_(inst_23756)){
var statearr_23904_23981 = state_23887__$1;
(statearr_23904_23981[(1)] = (5));

} else {
var statearr_23905_23982 = state_23887__$1;
(statearr_23905_23982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (15))){
var inst_23766 = (state_23887[(13)]);
var inst_23767 = (state_23887[(14)]);
var inst_23765 = (state_23887[(15)]);
var inst_23764 = (state_23887[(17)]);
var inst_23782 = (state_23887[(2)]);
var inst_23783 = (inst_23767 + (1));
var tmp23899 = inst_23766;
var tmp23900 = inst_23765;
var tmp23901 = inst_23764;
var inst_23764__$1 = tmp23901;
var inst_23765__$1 = tmp23900;
var inst_23766__$1 = tmp23899;
var inst_23767__$1 = inst_23783;
var state_23887__$1 = (function (){var statearr_23906 = state_23887;
(statearr_23906[(13)] = inst_23766__$1);

(statearr_23906[(14)] = inst_23767__$1);

(statearr_23906[(18)] = inst_23782);

(statearr_23906[(15)] = inst_23765__$1);

(statearr_23906[(17)] = inst_23764__$1);

return statearr_23906;
})();
var statearr_23907_23983 = state_23887__$1;
(statearr_23907_23983[(2)] = null);

(statearr_23907_23983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (21))){
var inst_23809 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23911_23984 = state_23887__$1;
(statearr_23911_23984[(2)] = inst_23809);

(statearr_23911_23984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (31))){
var inst_23835 = (state_23887[(12)]);
var inst_23839 = done.call(null,null);
var inst_23840 = cljs.core.async.untap_STAR_.call(null,m,inst_23835);
var state_23887__$1 = (function (){var statearr_23912 = state_23887;
(statearr_23912[(19)] = inst_23839);

return statearr_23912;
})();
var statearr_23913_23985 = state_23887__$1;
(statearr_23913_23985[(2)] = inst_23840);

(statearr_23913_23985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (32))){
var inst_23827 = (state_23887[(20)]);
var inst_23829 = (state_23887[(21)]);
var inst_23830 = (state_23887[(10)]);
var inst_23828 = (state_23887[(11)]);
var inst_23842 = (state_23887[(2)]);
var inst_23843 = (inst_23830 + (1));
var tmp23908 = inst_23827;
var tmp23909 = inst_23829;
var tmp23910 = inst_23828;
var inst_23827__$1 = tmp23908;
var inst_23828__$1 = tmp23910;
var inst_23829__$1 = tmp23909;
var inst_23830__$1 = inst_23843;
var state_23887__$1 = (function (){var statearr_23914 = state_23887;
(statearr_23914[(20)] = inst_23827__$1);

(statearr_23914[(21)] = inst_23829__$1);

(statearr_23914[(10)] = inst_23830__$1);

(statearr_23914[(22)] = inst_23842);

(statearr_23914[(11)] = inst_23828__$1);

return statearr_23914;
})();
var statearr_23915_23986 = state_23887__$1;
(statearr_23915_23986[(2)] = null);

(statearr_23915_23986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (40))){
var inst_23855 = (state_23887[(23)]);
var inst_23859 = done.call(null,null);
var inst_23860 = cljs.core.async.untap_STAR_.call(null,m,inst_23855);
var state_23887__$1 = (function (){var statearr_23916 = state_23887;
(statearr_23916[(24)] = inst_23859);

return statearr_23916;
})();
var statearr_23917_23987 = state_23887__$1;
(statearr_23917_23987[(2)] = inst_23860);

(statearr_23917_23987[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (33))){
var inst_23846 = (state_23887[(25)]);
var inst_23848 = cljs.core.chunked_seq_QMARK_.call(null,inst_23846);
var state_23887__$1 = state_23887;
if(inst_23848){
var statearr_23918_23988 = state_23887__$1;
(statearr_23918_23988[(1)] = (36));

} else {
var statearr_23919_23989 = state_23887__$1;
(statearr_23919_23989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (13))){
var inst_23776 = (state_23887[(26)]);
var inst_23779 = cljs.core.async.close_BANG_.call(null,inst_23776);
var state_23887__$1 = state_23887;
var statearr_23920_23990 = state_23887__$1;
(statearr_23920_23990[(2)] = inst_23779);

(statearr_23920_23990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (22))){
var inst_23799 = (state_23887[(8)]);
var inst_23802 = cljs.core.async.close_BANG_.call(null,inst_23799);
var state_23887__$1 = state_23887;
var statearr_23921_23991 = state_23887__$1;
(statearr_23921_23991[(2)] = inst_23802);

(statearr_23921_23991[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (36))){
var inst_23846 = (state_23887[(25)]);
var inst_23850 = cljs.core.chunk_first.call(null,inst_23846);
var inst_23851 = cljs.core.chunk_rest.call(null,inst_23846);
var inst_23852 = cljs.core.count.call(null,inst_23850);
var inst_23827 = inst_23851;
var inst_23828 = inst_23850;
var inst_23829 = inst_23852;
var inst_23830 = (0);
var state_23887__$1 = (function (){var statearr_23922 = state_23887;
(statearr_23922[(20)] = inst_23827);

(statearr_23922[(21)] = inst_23829);

(statearr_23922[(10)] = inst_23830);

(statearr_23922[(11)] = inst_23828);

return statearr_23922;
})();
var statearr_23923_23992 = state_23887__$1;
(statearr_23923_23992[(2)] = null);

(statearr_23923_23992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (41))){
var inst_23846 = (state_23887[(25)]);
var inst_23862 = (state_23887[(2)]);
var inst_23863 = cljs.core.next.call(null,inst_23846);
var inst_23827 = inst_23863;
var inst_23828 = null;
var inst_23829 = (0);
var inst_23830 = (0);
var state_23887__$1 = (function (){var statearr_23924 = state_23887;
(statearr_23924[(20)] = inst_23827);

(statearr_23924[(27)] = inst_23862);

(statearr_23924[(21)] = inst_23829);

(statearr_23924[(10)] = inst_23830);

(statearr_23924[(11)] = inst_23828);

return statearr_23924;
})();
var statearr_23925_23993 = state_23887__$1;
(statearr_23925_23993[(2)] = null);

(statearr_23925_23993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (43))){
var state_23887__$1 = state_23887;
var statearr_23926_23994 = state_23887__$1;
(statearr_23926_23994[(2)] = null);

(statearr_23926_23994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (29))){
var inst_23871 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23927_23995 = state_23887__$1;
(statearr_23927_23995[(2)] = inst_23871);

(statearr_23927_23995[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (44))){
var inst_23880 = (state_23887[(2)]);
var state_23887__$1 = (function (){var statearr_23928 = state_23887;
(statearr_23928[(28)] = inst_23880);

return statearr_23928;
})();
var statearr_23929_23996 = state_23887__$1;
(statearr_23929_23996[(2)] = null);

(statearr_23929_23996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (6))){
var inst_23819 = (state_23887[(29)]);
var inst_23818 = cljs.core.deref.call(null,cs);
var inst_23819__$1 = cljs.core.keys.call(null,inst_23818);
var inst_23820 = cljs.core.count.call(null,inst_23819__$1);
var inst_23821 = cljs.core.reset_BANG_.call(null,dctr,inst_23820);
var inst_23826 = cljs.core.seq.call(null,inst_23819__$1);
var inst_23827 = inst_23826;
var inst_23828 = null;
var inst_23829 = (0);
var inst_23830 = (0);
var state_23887__$1 = (function (){var statearr_23930 = state_23887;
(statearr_23930[(20)] = inst_23827);

(statearr_23930[(21)] = inst_23829);

(statearr_23930[(29)] = inst_23819__$1);

(statearr_23930[(10)] = inst_23830);

(statearr_23930[(11)] = inst_23828);

(statearr_23930[(30)] = inst_23821);

return statearr_23930;
})();
var statearr_23931_23997 = state_23887__$1;
(statearr_23931_23997[(2)] = null);

(statearr_23931_23997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (28))){
var inst_23827 = (state_23887[(20)]);
var inst_23846 = (state_23887[(25)]);
var inst_23846__$1 = cljs.core.seq.call(null,inst_23827);
var state_23887__$1 = (function (){var statearr_23932 = state_23887;
(statearr_23932[(25)] = inst_23846__$1);

return statearr_23932;
})();
if(inst_23846__$1){
var statearr_23933_23998 = state_23887__$1;
(statearr_23933_23998[(1)] = (33));

} else {
var statearr_23934_23999 = state_23887__$1;
(statearr_23934_23999[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (25))){
var inst_23829 = (state_23887[(21)]);
var inst_23830 = (state_23887[(10)]);
var inst_23832 = (inst_23830 < inst_23829);
var inst_23833 = inst_23832;
var state_23887__$1 = state_23887;
if(cljs.core.truth_(inst_23833)){
var statearr_23935_24000 = state_23887__$1;
(statearr_23935_24000[(1)] = (27));

} else {
var statearr_23936_24001 = state_23887__$1;
(statearr_23936_24001[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (34))){
var state_23887__$1 = state_23887;
var statearr_23937_24002 = state_23887__$1;
(statearr_23937_24002[(2)] = null);

(statearr_23937_24002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (17))){
var state_23887__$1 = state_23887;
var statearr_23938_24003 = state_23887__$1;
(statearr_23938_24003[(2)] = null);

(statearr_23938_24003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (3))){
var inst_23885 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else {
if((state_val_23888 === (12))){
var inst_23814 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23939_24004 = state_23887__$1;
(statearr_23939_24004[(2)] = inst_23814);

(statearr_23939_24004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (2))){
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(4),ch);
} else {
if((state_val_23888 === (23))){
var state_23887__$1 = state_23887;
var statearr_23940_24005 = state_23887__$1;
(statearr_23940_24005[(2)] = null);

(statearr_23940_24005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (35))){
var inst_23869 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23941_24006 = state_23887__$1;
(statearr_23941_24006[(2)] = inst_23869);

(statearr_23941_24006[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (19))){
var inst_23786 = (state_23887[(7)]);
var inst_23790 = cljs.core.chunk_first.call(null,inst_23786);
var inst_23791 = cljs.core.chunk_rest.call(null,inst_23786);
var inst_23792 = cljs.core.count.call(null,inst_23790);
var inst_23764 = inst_23791;
var inst_23765 = inst_23790;
var inst_23766 = inst_23792;
var inst_23767 = (0);
var state_23887__$1 = (function (){var statearr_23942 = state_23887;
(statearr_23942[(13)] = inst_23766);

(statearr_23942[(14)] = inst_23767);

(statearr_23942[(15)] = inst_23765);

(statearr_23942[(17)] = inst_23764);

return statearr_23942;
})();
var statearr_23943_24007 = state_23887__$1;
(statearr_23943_24007[(2)] = null);

(statearr_23943_24007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (11))){
var inst_23786 = (state_23887[(7)]);
var inst_23764 = (state_23887[(17)]);
var inst_23786__$1 = cljs.core.seq.call(null,inst_23764);
var state_23887__$1 = (function (){var statearr_23944 = state_23887;
(statearr_23944[(7)] = inst_23786__$1);

return statearr_23944;
})();
if(inst_23786__$1){
var statearr_23945_24008 = state_23887__$1;
(statearr_23945_24008[(1)] = (16));

} else {
var statearr_23946_24009 = state_23887__$1;
(statearr_23946_24009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (9))){
var inst_23816 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23947_24010 = state_23887__$1;
(statearr_23947_24010[(2)] = inst_23816);

(statearr_23947_24010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (5))){
var inst_23762 = cljs.core.deref.call(null,cs);
var inst_23763 = cljs.core.seq.call(null,inst_23762);
var inst_23764 = inst_23763;
var inst_23765 = null;
var inst_23766 = (0);
var inst_23767 = (0);
var state_23887__$1 = (function (){var statearr_23948 = state_23887;
(statearr_23948[(13)] = inst_23766);

(statearr_23948[(14)] = inst_23767);

(statearr_23948[(15)] = inst_23765);

(statearr_23948[(17)] = inst_23764);

return statearr_23948;
})();
var statearr_23949_24011 = state_23887__$1;
(statearr_23949_24011[(2)] = null);

(statearr_23949_24011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (14))){
var state_23887__$1 = state_23887;
var statearr_23950_24012 = state_23887__$1;
(statearr_23950_24012[(2)] = null);

(statearr_23950_24012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (45))){
var inst_23877 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23951_24013 = state_23887__$1;
(statearr_23951_24013[(2)] = inst_23877);

(statearr_23951_24013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (26))){
var inst_23819 = (state_23887[(29)]);
var inst_23873 = (state_23887[(2)]);
var inst_23874 = cljs.core.seq.call(null,inst_23819);
var state_23887__$1 = (function (){var statearr_23952 = state_23887;
(statearr_23952[(31)] = inst_23873);

return statearr_23952;
})();
if(inst_23874){
var statearr_23953_24014 = state_23887__$1;
(statearr_23953_24014[(1)] = (42));

} else {
var statearr_23954_24015 = state_23887__$1;
(statearr_23954_24015[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (16))){
var inst_23786 = (state_23887[(7)]);
var inst_23788 = cljs.core.chunked_seq_QMARK_.call(null,inst_23786);
var state_23887__$1 = state_23887;
if(inst_23788){
var statearr_23955_24016 = state_23887__$1;
(statearr_23955_24016[(1)] = (19));

} else {
var statearr_23956_24017 = state_23887__$1;
(statearr_23956_24017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (38))){
var inst_23866 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23957_24018 = state_23887__$1;
(statearr_23957_24018[(2)] = inst_23866);

(statearr_23957_24018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (30))){
var state_23887__$1 = state_23887;
var statearr_23958_24019 = state_23887__$1;
(statearr_23958_24019[(2)] = null);

(statearr_23958_24019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (10))){
var inst_23767 = (state_23887[(14)]);
var inst_23765 = (state_23887[(15)]);
var inst_23775 = cljs.core._nth.call(null,inst_23765,inst_23767);
var inst_23776 = cljs.core.nth.call(null,inst_23775,(0),null);
var inst_23777 = cljs.core.nth.call(null,inst_23775,(1),null);
var state_23887__$1 = (function (){var statearr_23959 = state_23887;
(statearr_23959[(26)] = inst_23776);

return statearr_23959;
})();
if(cljs.core.truth_(inst_23777)){
var statearr_23960_24020 = state_23887__$1;
(statearr_23960_24020[(1)] = (13));

} else {
var statearr_23961_24021 = state_23887__$1;
(statearr_23961_24021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (18))){
var inst_23812 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23962_24022 = state_23887__$1;
(statearr_23962_24022[(2)] = inst_23812);

(statearr_23962_24022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (42))){
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(45),dchan);
} else {
if((state_val_23888 === (37))){
var inst_23755 = (state_23887[(9)]);
var inst_23846 = (state_23887[(25)]);
var inst_23855 = (state_23887[(23)]);
var inst_23855__$1 = cljs.core.first.call(null,inst_23846);
var inst_23856 = cljs.core.async.put_BANG_.call(null,inst_23855__$1,inst_23755,done);
var state_23887__$1 = (function (){var statearr_23963 = state_23887;
(statearr_23963[(23)] = inst_23855__$1);

return statearr_23963;
})();
if(cljs.core.truth_(inst_23856)){
var statearr_23964_24023 = state_23887__$1;
(statearr_23964_24023[(1)] = (39));

} else {
var statearr_23965_24024 = state_23887__$1;
(statearr_23965_24024[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (8))){
var inst_23766 = (state_23887[(13)]);
var inst_23767 = (state_23887[(14)]);
var inst_23769 = (inst_23767 < inst_23766);
var inst_23770 = inst_23769;
var state_23887__$1 = state_23887;
if(cljs.core.truth_(inst_23770)){
var statearr_23966_24025 = state_23887__$1;
(statearr_23966_24025[(1)] = (10));

} else {
var statearr_23967_24026 = state_23887__$1;
(statearr_23967_24026[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___23972,cs,m,dchan,dctr,done))
;
return ((function (switch__23062__auto__,c__23153__auto___23972,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23063__auto__ = null;
var cljs$core$async$mult_$_state_machine__23063__auto____0 = (function (){
var statearr_23968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23968[(0)] = cljs$core$async$mult_$_state_machine__23063__auto__);

(statearr_23968[(1)] = (1));

return statearr_23968;
});
var cljs$core$async$mult_$_state_machine__23063__auto____1 = (function (state_23887){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23969){if((e23969 instanceof Object)){
var ex__23066__auto__ = e23969;
var statearr_23970_24027 = state_23887;
(statearr_23970_24027[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24028 = state_23887;
state_23887 = G__24028;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23063__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23063__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23063__auto____0;
cljs$core$async$mult_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23063__auto____1;
return cljs$core$async$mult_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___23972,cs,m,dchan,dctr,done))
})();
var state__23155__auto__ = (function (){var statearr_23971 = f__23154__auto__.call(null);
(statearr_23971[(6)] = c__23153__auto___23972);

return statearr_23971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___23972,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24030 = arguments.length;
switch (G__24030) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24042 = arguments.length;
var i__4532__auto___24043 = (0);
while(true){
if((i__4532__auto___24043 < len__4531__auto___24042)){
args__4534__auto__.push((arguments[i__4532__auto___24043]));

var G__24044 = (i__4532__auto___24043 + (1));
i__4532__auto___24043 = G__24044;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24036){
var map__24037 = p__24036;
var map__24037__$1 = ((((!((map__24037 == null)))?(((((map__24037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24037):map__24037);
var opts = map__24037__$1;
var statearr_24039_24045 = state;
(statearr_24039_24045[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24037,map__24037__$1,opts){
return (function (val){
var statearr_24040_24046 = state;
(statearr_24040_24046[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24037,map__24037__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24041_24047 = state;
(statearr_24041_24047[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24032){
var G__24033 = cljs.core.first.call(null,seq24032);
var seq24032__$1 = cljs.core.next.call(null,seq24032);
var G__24034 = cljs.core.first.call(null,seq24032__$1);
var seq24032__$2 = cljs.core.next.call(null,seq24032__$1);
var G__24035 = cljs.core.first.call(null,seq24032__$2);
var seq24032__$3 = cljs.core.next.call(null,seq24032__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24033,G__24034,G__24035,seq24032__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24048 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24049){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24049 = meta24049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24050,meta24049__$1){
var self__ = this;
var _24050__$1 = this;
return (new cljs.core.async.t_cljs$core$async24048(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24049__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24050){
var self__ = this;
var _24050__$1 = this;
return self__.meta24049;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24049","meta24049",-1374913781,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24048";

cljs.core.async.t_cljs$core$async24048.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24048");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24048.
 */
cljs.core.async.__GT_t_cljs$core$async24048 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24048(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24049){
return (new cljs.core.async.t_cljs$core$async24048(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24049));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24048(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23153__auto___24212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24152){
var state_val_24153 = (state_24152[(1)]);
if((state_val_24153 === (7))){
var inst_24067 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24154_24213 = state_24152__$1;
(statearr_24154_24213[(2)] = inst_24067);

(statearr_24154_24213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (20))){
var inst_24079 = (state_24152[(7)]);
var state_24152__$1 = state_24152;
var statearr_24155_24214 = state_24152__$1;
(statearr_24155_24214[(2)] = inst_24079);

(statearr_24155_24214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (27))){
var state_24152__$1 = state_24152;
var statearr_24156_24215 = state_24152__$1;
(statearr_24156_24215[(2)] = null);

(statearr_24156_24215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (1))){
var inst_24054 = (state_24152[(8)]);
var inst_24054__$1 = calc_state.call(null);
var inst_24056 = (inst_24054__$1 == null);
var inst_24057 = cljs.core.not.call(null,inst_24056);
var state_24152__$1 = (function (){var statearr_24157 = state_24152;
(statearr_24157[(8)] = inst_24054__$1);

return statearr_24157;
})();
if(inst_24057){
var statearr_24158_24216 = state_24152__$1;
(statearr_24158_24216[(1)] = (2));

} else {
var statearr_24159_24217 = state_24152__$1;
(statearr_24159_24217[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (24))){
var inst_24103 = (state_24152[(9)]);
var inst_24126 = (state_24152[(10)]);
var inst_24112 = (state_24152[(11)]);
var inst_24126__$1 = inst_24103.call(null,inst_24112);
var state_24152__$1 = (function (){var statearr_24160 = state_24152;
(statearr_24160[(10)] = inst_24126__$1);

return statearr_24160;
})();
if(cljs.core.truth_(inst_24126__$1)){
var statearr_24161_24218 = state_24152__$1;
(statearr_24161_24218[(1)] = (29));

} else {
var statearr_24162_24219 = state_24152__$1;
(statearr_24162_24219[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (4))){
var inst_24070 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24070)){
var statearr_24163_24220 = state_24152__$1;
(statearr_24163_24220[(1)] = (8));

} else {
var statearr_24164_24221 = state_24152__$1;
(statearr_24164_24221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (15))){
var inst_24097 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24097)){
var statearr_24165_24222 = state_24152__$1;
(statearr_24165_24222[(1)] = (19));

} else {
var statearr_24166_24223 = state_24152__$1;
(statearr_24166_24223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (21))){
var inst_24102 = (state_24152[(12)]);
var inst_24102__$1 = (state_24152[(2)]);
var inst_24103 = cljs.core.get.call(null,inst_24102__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24104 = cljs.core.get.call(null,inst_24102__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24105 = cljs.core.get.call(null,inst_24102__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24152__$1 = (function (){var statearr_24167 = state_24152;
(statearr_24167[(9)] = inst_24103);

(statearr_24167[(12)] = inst_24102__$1);

(statearr_24167[(13)] = inst_24104);

return statearr_24167;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24152__$1,(22),inst_24105);
} else {
if((state_val_24153 === (31))){
var inst_24134 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24134)){
var statearr_24168_24224 = state_24152__$1;
(statearr_24168_24224[(1)] = (32));

} else {
var statearr_24169_24225 = state_24152__$1;
(statearr_24169_24225[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (32))){
var inst_24111 = (state_24152[(14)]);
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24152__$1,(35),out,inst_24111);
} else {
if((state_val_24153 === (33))){
var inst_24102 = (state_24152[(12)]);
var inst_24079 = inst_24102;
var state_24152__$1 = (function (){var statearr_24170 = state_24152;
(statearr_24170[(7)] = inst_24079);

return statearr_24170;
})();
var statearr_24171_24226 = state_24152__$1;
(statearr_24171_24226[(2)] = null);

(statearr_24171_24226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (13))){
var inst_24079 = (state_24152[(7)]);
var inst_24086 = inst_24079.cljs$lang$protocol_mask$partition0$;
var inst_24087 = (inst_24086 & (64));
var inst_24088 = inst_24079.cljs$core$ISeq$;
var inst_24089 = (cljs.core.PROTOCOL_SENTINEL === inst_24088);
var inst_24090 = ((inst_24087) || (inst_24089));
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24090)){
var statearr_24172_24227 = state_24152__$1;
(statearr_24172_24227[(1)] = (16));

} else {
var statearr_24173_24228 = state_24152__$1;
(statearr_24173_24228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (22))){
var inst_24111 = (state_24152[(14)]);
var inst_24112 = (state_24152[(11)]);
var inst_24110 = (state_24152[(2)]);
var inst_24111__$1 = cljs.core.nth.call(null,inst_24110,(0),null);
var inst_24112__$1 = cljs.core.nth.call(null,inst_24110,(1),null);
var inst_24113 = (inst_24111__$1 == null);
var inst_24114 = cljs.core._EQ_.call(null,inst_24112__$1,change);
var inst_24115 = ((inst_24113) || (inst_24114));
var state_24152__$1 = (function (){var statearr_24174 = state_24152;
(statearr_24174[(14)] = inst_24111__$1);

(statearr_24174[(11)] = inst_24112__$1);

return statearr_24174;
})();
if(cljs.core.truth_(inst_24115)){
var statearr_24175_24229 = state_24152__$1;
(statearr_24175_24229[(1)] = (23));

} else {
var statearr_24176_24230 = state_24152__$1;
(statearr_24176_24230[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (36))){
var inst_24102 = (state_24152[(12)]);
var inst_24079 = inst_24102;
var state_24152__$1 = (function (){var statearr_24177 = state_24152;
(statearr_24177[(7)] = inst_24079);

return statearr_24177;
})();
var statearr_24178_24231 = state_24152__$1;
(statearr_24178_24231[(2)] = null);

(statearr_24178_24231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (29))){
var inst_24126 = (state_24152[(10)]);
var state_24152__$1 = state_24152;
var statearr_24179_24232 = state_24152__$1;
(statearr_24179_24232[(2)] = inst_24126);

(statearr_24179_24232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (6))){
var state_24152__$1 = state_24152;
var statearr_24180_24233 = state_24152__$1;
(statearr_24180_24233[(2)] = false);

(statearr_24180_24233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (28))){
var inst_24122 = (state_24152[(2)]);
var inst_24123 = calc_state.call(null);
var inst_24079 = inst_24123;
var state_24152__$1 = (function (){var statearr_24181 = state_24152;
(statearr_24181[(7)] = inst_24079);

(statearr_24181[(15)] = inst_24122);

return statearr_24181;
})();
var statearr_24182_24234 = state_24152__$1;
(statearr_24182_24234[(2)] = null);

(statearr_24182_24234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (25))){
var inst_24148 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24183_24235 = state_24152__$1;
(statearr_24183_24235[(2)] = inst_24148);

(statearr_24183_24235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (34))){
var inst_24146 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24184_24236 = state_24152__$1;
(statearr_24184_24236[(2)] = inst_24146);

(statearr_24184_24236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (17))){
var state_24152__$1 = state_24152;
var statearr_24185_24237 = state_24152__$1;
(statearr_24185_24237[(2)] = false);

(statearr_24185_24237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (3))){
var state_24152__$1 = state_24152;
var statearr_24186_24238 = state_24152__$1;
(statearr_24186_24238[(2)] = false);

(statearr_24186_24238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (12))){
var inst_24150 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24152__$1,inst_24150);
} else {
if((state_val_24153 === (2))){
var inst_24054 = (state_24152[(8)]);
var inst_24059 = inst_24054.cljs$lang$protocol_mask$partition0$;
var inst_24060 = (inst_24059 & (64));
var inst_24061 = inst_24054.cljs$core$ISeq$;
var inst_24062 = (cljs.core.PROTOCOL_SENTINEL === inst_24061);
var inst_24063 = ((inst_24060) || (inst_24062));
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24063)){
var statearr_24187_24239 = state_24152__$1;
(statearr_24187_24239[(1)] = (5));

} else {
var statearr_24188_24240 = state_24152__$1;
(statearr_24188_24240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (23))){
var inst_24111 = (state_24152[(14)]);
var inst_24117 = (inst_24111 == null);
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24117)){
var statearr_24189_24241 = state_24152__$1;
(statearr_24189_24241[(1)] = (26));

} else {
var statearr_24190_24242 = state_24152__$1;
(statearr_24190_24242[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (35))){
var inst_24137 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24137)){
var statearr_24191_24243 = state_24152__$1;
(statearr_24191_24243[(1)] = (36));

} else {
var statearr_24192_24244 = state_24152__$1;
(statearr_24192_24244[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (19))){
var inst_24079 = (state_24152[(7)]);
var inst_24099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24079);
var state_24152__$1 = state_24152;
var statearr_24193_24245 = state_24152__$1;
(statearr_24193_24245[(2)] = inst_24099);

(statearr_24193_24245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (11))){
var inst_24079 = (state_24152[(7)]);
var inst_24083 = (inst_24079 == null);
var inst_24084 = cljs.core.not.call(null,inst_24083);
var state_24152__$1 = state_24152;
if(inst_24084){
var statearr_24194_24246 = state_24152__$1;
(statearr_24194_24246[(1)] = (13));

} else {
var statearr_24195_24247 = state_24152__$1;
(statearr_24195_24247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (9))){
var inst_24054 = (state_24152[(8)]);
var state_24152__$1 = state_24152;
var statearr_24196_24248 = state_24152__$1;
(statearr_24196_24248[(2)] = inst_24054);

(statearr_24196_24248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (5))){
var state_24152__$1 = state_24152;
var statearr_24197_24249 = state_24152__$1;
(statearr_24197_24249[(2)] = true);

(statearr_24197_24249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (14))){
var state_24152__$1 = state_24152;
var statearr_24198_24250 = state_24152__$1;
(statearr_24198_24250[(2)] = false);

(statearr_24198_24250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (26))){
var inst_24112 = (state_24152[(11)]);
var inst_24119 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24112);
var state_24152__$1 = state_24152;
var statearr_24199_24251 = state_24152__$1;
(statearr_24199_24251[(2)] = inst_24119);

(statearr_24199_24251[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (16))){
var state_24152__$1 = state_24152;
var statearr_24200_24252 = state_24152__$1;
(statearr_24200_24252[(2)] = true);

(statearr_24200_24252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (38))){
var inst_24142 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24201_24253 = state_24152__$1;
(statearr_24201_24253[(2)] = inst_24142);

(statearr_24201_24253[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (30))){
var inst_24103 = (state_24152[(9)]);
var inst_24104 = (state_24152[(13)]);
var inst_24112 = (state_24152[(11)]);
var inst_24129 = cljs.core.empty_QMARK_.call(null,inst_24103);
var inst_24130 = inst_24104.call(null,inst_24112);
var inst_24131 = cljs.core.not.call(null,inst_24130);
var inst_24132 = ((inst_24129) && (inst_24131));
var state_24152__$1 = state_24152;
var statearr_24202_24254 = state_24152__$1;
(statearr_24202_24254[(2)] = inst_24132);

(statearr_24202_24254[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (10))){
var inst_24054 = (state_24152[(8)]);
var inst_24075 = (state_24152[(2)]);
var inst_24076 = cljs.core.get.call(null,inst_24075,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24077 = cljs.core.get.call(null,inst_24075,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24078 = cljs.core.get.call(null,inst_24075,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24079 = inst_24054;
var state_24152__$1 = (function (){var statearr_24203 = state_24152;
(statearr_24203[(7)] = inst_24079);

(statearr_24203[(16)] = inst_24078);

(statearr_24203[(17)] = inst_24076);

(statearr_24203[(18)] = inst_24077);

return statearr_24203;
})();
var statearr_24204_24255 = state_24152__$1;
(statearr_24204_24255[(2)] = null);

(statearr_24204_24255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (18))){
var inst_24094 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24205_24256 = state_24152__$1;
(statearr_24205_24256[(2)] = inst_24094);

(statearr_24205_24256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (37))){
var state_24152__$1 = state_24152;
var statearr_24206_24257 = state_24152__$1;
(statearr_24206_24257[(2)] = null);

(statearr_24206_24257[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (8))){
var inst_24054 = (state_24152[(8)]);
var inst_24072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24054);
var state_24152__$1 = state_24152;
var statearr_24207_24258 = state_24152__$1;
(statearr_24207_24258[(2)] = inst_24072);

(statearr_24207_24258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23062__auto__,c__23153__auto___24212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23063__auto__ = null;
var cljs$core$async$mix_$_state_machine__23063__auto____0 = (function (){
var statearr_24208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24208[(0)] = cljs$core$async$mix_$_state_machine__23063__auto__);

(statearr_24208[(1)] = (1));

return statearr_24208;
});
var cljs$core$async$mix_$_state_machine__23063__auto____1 = (function (state_24152){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24209){if((e24209 instanceof Object)){
var ex__23066__auto__ = e24209;
var statearr_24210_24259 = state_24152;
(statearr_24210_24259[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24260 = state_24152;
state_24152 = G__24260;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23063__auto__ = function(state_24152){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23063__auto____1.call(this,state_24152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23063__auto____0;
cljs$core$async$mix_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23063__auto____1;
return cljs$core$async$mix_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23155__auto__ = (function (){var statearr_24211 = f__23154__auto__.call(null);
(statearr_24211[(6)] = c__23153__auto___24212);

return statearr_24211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24262 = arguments.length;
switch (G__24262) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24266 = arguments.length;
switch (G__24266) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__24264_SHARP_){
if(cljs.core.truth_(p1__24264_SHARP_.call(null,topic))){
return p1__24264_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24264_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24267 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24268){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24268 = meta24268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24269,meta24268__$1){
var self__ = this;
var _24269__$1 = this;
return (new cljs.core.async.t_cljs$core$async24267(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24268__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24269){
var self__ = this;
var _24269__$1 = this;
return self__.meta24268;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24268","meta24268",154856821,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24267";

cljs.core.async.t_cljs$core$async24267.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24267");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24267.
 */
cljs.core.async.__GT_t_cljs$core$async24267 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24268){
return (new cljs.core.async.t_cljs$core$async24267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24268));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24267(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23153__auto___24387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24387,mults,ensure_mult,p){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24387,mults,ensure_mult,p){
return (function (state_24341){
var state_val_24342 = (state_24341[(1)]);
if((state_val_24342 === (7))){
var inst_24337 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24343_24388 = state_24341__$1;
(statearr_24343_24388[(2)] = inst_24337);

(statearr_24343_24388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (20))){
var state_24341__$1 = state_24341;
var statearr_24344_24389 = state_24341__$1;
(statearr_24344_24389[(2)] = null);

(statearr_24344_24389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (1))){
var state_24341__$1 = state_24341;
var statearr_24345_24390 = state_24341__$1;
(statearr_24345_24390[(2)] = null);

(statearr_24345_24390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (24))){
var inst_24320 = (state_24341[(7)]);
var inst_24329 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24320);
var state_24341__$1 = state_24341;
var statearr_24346_24391 = state_24341__$1;
(statearr_24346_24391[(2)] = inst_24329);

(statearr_24346_24391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (4))){
var inst_24272 = (state_24341[(8)]);
var inst_24272__$1 = (state_24341[(2)]);
var inst_24273 = (inst_24272__$1 == null);
var state_24341__$1 = (function (){var statearr_24347 = state_24341;
(statearr_24347[(8)] = inst_24272__$1);

return statearr_24347;
})();
if(cljs.core.truth_(inst_24273)){
var statearr_24348_24392 = state_24341__$1;
(statearr_24348_24392[(1)] = (5));

} else {
var statearr_24349_24393 = state_24341__$1;
(statearr_24349_24393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (15))){
var inst_24314 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24350_24394 = state_24341__$1;
(statearr_24350_24394[(2)] = inst_24314);

(statearr_24350_24394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (21))){
var inst_24334 = (state_24341[(2)]);
var state_24341__$1 = (function (){var statearr_24351 = state_24341;
(statearr_24351[(9)] = inst_24334);

return statearr_24351;
})();
var statearr_24352_24395 = state_24341__$1;
(statearr_24352_24395[(2)] = null);

(statearr_24352_24395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (13))){
var inst_24296 = (state_24341[(10)]);
var inst_24298 = cljs.core.chunked_seq_QMARK_.call(null,inst_24296);
var state_24341__$1 = state_24341;
if(inst_24298){
var statearr_24353_24396 = state_24341__$1;
(statearr_24353_24396[(1)] = (16));

} else {
var statearr_24354_24397 = state_24341__$1;
(statearr_24354_24397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (22))){
var inst_24326 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
if(cljs.core.truth_(inst_24326)){
var statearr_24355_24398 = state_24341__$1;
(statearr_24355_24398[(1)] = (23));

} else {
var statearr_24356_24399 = state_24341__$1;
(statearr_24356_24399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (6))){
var inst_24320 = (state_24341[(7)]);
var inst_24322 = (state_24341[(11)]);
var inst_24272 = (state_24341[(8)]);
var inst_24320__$1 = topic_fn.call(null,inst_24272);
var inst_24321 = cljs.core.deref.call(null,mults);
var inst_24322__$1 = cljs.core.get.call(null,inst_24321,inst_24320__$1);
var state_24341__$1 = (function (){var statearr_24357 = state_24341;
(statearr_24357[(7)] = inst_24320__$1);

(statearr_24357[(11)] = inst_24322__$1);

return statearr_24357;
})();
if(cljs.core.truth_(inst_24322__$1)){
var statearr_24358_24400 = state_24341__$1;
(statearr_24358_24400[(1)] = (19));

} else {
var statearr_24359_24401 = state_24341__$1;
(statearr_24359_24401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (25))){
var inst_24331 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24360_24402 = state_24341__$1;
(statearr_24360_24402[(2)] = inst_24331);

(statearr_24360_24402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (17))){
var inst_24296 = (state_24341[(10)]);
var inst_24305 = cljs.core.first.call(null,inst_24296);
var inst_24306 = cljs.core.async.muxch_STAR_.call(null,inst_24305);
var inst_24307 = cljs.core.async.close_BANG_.call(null,inst_24306);
var inst_24308 = cljs.core.next.call(null,inst_24296);
var inst_24282 = inst_24308;
var inst_24283 = null;
var inst_24284 = (0);
var inst_24285 = (0);
var state_24341__$1 = (function (){var statearr_24361 = state_24341;
(statearr_24361[(12)] = inst_24285);

(statearr_24361[(13)] = inst_24284);

(statearr_24361[(14)] = inst_24307);

(statearr_24361[(15)] = inst_24282);

(statearr_24361[(16)] = inst_24283);

return statearr_24361;
})();
var statearr_24362_24403 = state_24341__$1;
(statearr_24362_24403[(2)] = null);

(statearr_24362_24403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (3))){
var inst_24339 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24341__$1,inst_24339);
} else {
if((state_val_24342 === (12))){
var inst_24316 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24363_24404 = state_24341__$1;
(statearr_24363_24404[(2)] = inst_24316);

(statearr_24363_24404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (2))){
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24341__$1,(4),ch);
} else {
if((state_val_24342 === (23))){
var state_24341__$1 = state_24341;
var statearr_24364_24405 = state_24341__$1;
(statearr_24364_24405[(2)] = null);

(statearr_24364_24405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (19))){
var inst_24322 = (state_24341[(11)]);
var inst_24272 = (state_24341[(8)]);
var inst_24324 = cljs.core.async.muxch_STAR_.call(null,inst_24322);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24341__$1,(22),inst_24324,inst_24272);
} else {
if((state_val_24342 === (11))){
var inst_24296 = (state_24341[(10)]);
var inst_24282 = (state_24341[(15)]);
var inst_24296__$1 = cljs.core.seq.call(null,inst_24282);
var state_24341__$1 = (function (){var statearr_24365 = state_24341;
(statearr_24365[(10)] = inst_24296__$1);

return statearr_24365;
})();
if(inst_24296__$1){
var statearr_24366_24406 = state_24341__$1;
(statearr_24366_24406[(1)] = (13));

} else {
var statearr_24367_24407 = state_24341__$1;
(statearr_24367_24407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (9))){
var inst_24318 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24368_24408 = state_24341__$1;
(statearr_24368_24408[(2)] = inst_24318);

(statearr_24368_24408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (5))){
var inst_24279 = cljs.core.deref.call(null,mults);
var inst_24280 = cljs.core.vals.call(null,inst_24279);
var inst_24281 = cljs.core.seq.call(null,inst_24280);
var inst_24282 = inst_24281;
var inst_24283 = null;
var inst_24284 = (0);
var inst_24285 = (0);
var state_24341__$1 = (function (){var statearr_24369 = state_24341;
(statearr_24369[(12)] = inst_24285);

(statearr_24369[(13)] = inst_24284);

(statearr_24369[(15)] = inst_24282);

(statearr_24369[(16)] = inst_24283);

return statearr_24369;
})();
var statearr_24370_24409 = state_24341__$1;
(statearr_24370_24409[(2)] = null);

(statearr_24370_24409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (14))){
var state_24341__$1 = state_24341;
var statearr_24374_24410 = state_24341__$1;
(statearr_24374_24410[(2)] = null);

(statearr_24374_24410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (16))){
var inst_24296 = (state_24341[(10)]);
var inst_24300 = cljs.core.chunk_first.call(null,inst_24296);
var inst_24301 = cljs.core.chunk_rest.call(null,inst_24296);
var inst_24302 = cljs.core.count.call(null,inst_24300);
var inst_24282 = inst_24301;
var inst_24283 = inst_24300;
var inst_24284 = inst_24302;
var inst_24285 = (0);
var state_24341__$1 = (function (){var statearr_24375 = state_24341;
(statearr_24375[(12)] = inst_24285);

(statearr_24375[(13)] = inst_24284);

(statearr_24375[(15)] = inst_24282);

(statearr_24375[(16)] = inst_24283);

return statearr_24375;
})();
var statearr_24376_24411 = state_24341__$1;
(statearr_24376_24411[(2)] = null);

(statearr_24376_24411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (10))){
var inst_24285 = (state_24341[(12)]);
var inst_24284 = (state_24341[(13)]);
var inst_24282 = (state_24341[(15)]);
var inst_24283 = (state_24341[(16)]);
var inst_24290 = cljs.core._nth.call(null,inst_24283,inst_24285);
var inst_24291 = cljs.core.async.muxch_STAR_.call(null,inst_24290);
var inst_24292 = cljs.core.async.close_BANG_.call(null,inst_24291);
var inst_24293 = (inst_24285 + (1));
var tmp24371 = inst_24284;
var tmp24372 = inst_24282;
var tmp24373 = inst_24283;
var inst_24282__$1 = tmp24372;
var inst_24283__$1 = tmp24373;
var inst_24284__$1 = tmp24371;
var inst_24285__$1 = inst_24293;
var state_24341__$1 = (function (){var statearr_24377 = state_24341;
(statearr_24377[(12)] = inst_24285__$1);

(statearr_24377[(13)] = inst_24284__$1);

(statearr_24377[(15)] = inst_24282__$1);

(statearr_24377[(16)] = inst_24283__$1);

(statearr_24377[(17)] = inst_24292);

return statearr_24377;
})();
var statearr_24378_24412 = state_24341__$1;
(statearr_24378_24412[(2)] = null);

(statearr_24378_24412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (18))){
var inst_24311 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24379_24413 = state_24341__$1;
(statearr_24379_24413[(2)] = inst_24311);

(statearr_24379_24413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (8))){
var inst_24285 = (state_24341[(12)]);
var inst_24284 = (state_24341[(13)]);
var inst_24287 = (inst_24285 < inst_24284);
var inst_24288 = inst_24287;
var state_24341__$1 = state_24341;
if(cljs.core.truth_(inst_24288)){
var statearr_24380_24414 = state_24341__$1;
(statearr_24380_24414[(1)] = (10));

} else {
var statearr_24381_24415 = state_24341__$1;
(statearr_24381_24415[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24387,mults,ensure_mult,p))
;
return ((function (switch__23062__auto__,c__23153__auto___24387,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24382[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24382[(1)] = (1));

return statearr_24382;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24341){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24383){if((e24383 instanceof Object)){
var ex__23066__auto__ = e24383;
var statearr_24384_24416 = state_24341;
(statearr_24384_24416[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24417 = state_24341;
state_24341 = G__24417;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24387,mults,ensure_mult,p))
})();
var state__23155__auto__ = (function (){var statearr_24385 = f__23154__auto__.call(null);
(statearr_24385[(6)] = c__23153__auto___24387);

return statearr_24385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24387,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24419 = arguments.length;
switch (G__24419) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24422 = arguments.length;
switch (G__24422) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24425 = arguments.length;
switch (G__24425) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23153__auto___24492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24464){
var state_val_24465 = (state_24464[(1)]);
if((state_val_24465 === (7))){
var state_24464__$1 = state_24464;
var statearr_24466_24493 = state_24464__$1;
(statearr_24466_24493[(2)] = null);

(statearr_24466_24493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (1))){
var state_24464__$1 = state_24464;
var statearr_24467_24494 = state_24464__$1;
(statearr_24467_24494[(2)] = null);

(statearr_24467_24494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (4))){
var inst_24428 = (state_24464[(7)]);
var inst_24430 = (inst_24428 < cnt);
var state_24464__$1 = state_24464;
if(cljs.core.truth_(inst_24430)){
var statearr_24468_24495 = state_24464__$1;
(statearr_24468_24495[(1)] = (6));

} else {
var statearr_24469_24496 = state_24464__$1;
(statearr_24469_24496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (15))){
var inst_24460 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
var statearr_24470_24497 = state_24464__$1;
(statearr_24470_24497[(2)] = inst_24460);

(statearr_24470_24497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (13))){
var inst_24453 = cljs.core.async.close_BANG_.call(null,out);
var state_24464__$1 = state_24464;
var statearr_24471_24498 = state_24464__$1;
(statearr_24471_24498[(2)] = inst_24453);

(statearr_24471_24498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (6))){
var state_24464__$1 = state_24464;
var statearr_24472_24499 = state_24464__$1;
(statearr_24472_24499[(2)] = null);

(statearr_24472_24499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (3))){
var inst_24462 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24464__$1,inst_24462);
} else {
if((state_val_24465 === (12))){
var inst_24450 = (state_24464[(8)]);
var inst_24450__$1 = (state_24464[(2)]);
var inst_24451 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24450__$1);
var state_24464__$1 = (function (){var statearr_24473 = state_24464;
(statearr_24473[(8)] = inst_24450__$1);

return statearr_24473;
})();
if(cljs.core.truth_(inst_24451)){
var statearr_24474_24500 = state_24464__$1;
(statearr_24474_24500[(1)] = (13));

} else {
var statearr_24475_24501 = state_24464__$1;
(statearr_24475_24501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (2))){
var inst_24427 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24428 = (0);
var state_24464__$1 = (function (){var statearr_24476 = state_24464;
(statearr_24476[(7)] = inst_24428);

(statearr_24476[(9)] = inst_24427);

return statearr_24476;
})();
var statearr_24477_24502 = state_24464__$1;
(statearr_24477_24502[(2)] = null);

(statearr_24477_24502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (11))){
var inst_24428 = (state_24464[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24464,(10),Object,null,(9));
var inst_24437 = chs__$1.call(null,inst_24428);
var inst_24438 = done.call(null,inst_24428);
var inst_24439 = cljs.core.async.take_BANG_.call(null,inst_24437,inst_24438);
var state_24464__$1 = state_24464;
var statearr_24478_24503 = state_24464__$1;
(statearr_24478_24503[(2)] = inst_24439);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (9))){
var inst_24428 = (state_24464[(7)]);
var inst_24441 = (state_24464[(2)]);
var inst_24442 = (inst_24428 + (1));
var inst_24428__$1 = inst_24442;
var state_24464__$1 = (function (){var statearr_24479 = state_24464;
(statearr_24479[(10)] = inst_24441);

(statearr_24479[(7)] = inst_24428__$1);

return statearr_24479;
})();
var statearr_24480_24504 = state_24464__$1;
(statearr_24480_24504[(2)] = null);

(statearr_24480_24504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (5))){
var inst_24448 = (state_24464[(2)]);
var state_24464__$1 = (function (){var statearr_24481 = state_24464;
(statearr_24481[(11)] = inst_24448);

return statearr_24481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24464__$1,(12),dchan);
} else {
if((state_val_24465 === (14))){
var inst_24450 = (state_24464[(8)]);
var inst_24455 = cljs.core.apply.call(null,f,inst_24450);
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24464__$1,(16),out,inst_24455);
} else {
if((state_val_24465 === (16))){
var inst_24457 = (state_24464[(2)]);
var state_24464__$1 = (function (){var statearr_24482 = state_24464;
(statearr_24482[(12)] = inst_24457);

return statearr_24482;
})();
var statearr_24483_24505 = state_24464__$1;
(statearr_24483_24505[(2)] = null);

(statearr_24483_24505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (10))){
var inst_24432 = (state_24464[(2)]);
var inst_24433 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24464__$1 = (function (){var statearr_24484 = state_24464;
(statearr_24484[(13)] = inst_24432);

return statearr_24484;
})();
var statearr_24485_24506 = state_24464__$1;
(statearr_24485_24506[(2)] = inst_24433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (8))){
var inst_24446 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
var statearr_24486_24507 = state_24464__$1;
(statearr_24486_24507[(2)] = inst_24446);

(statearr_24486_24507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24492,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23062__auto__,c__23153__auto___24492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24487[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24487[(1)] = (1));

return statearr_24487;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24464){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24488){if((e24488 instanceof Object)){
var ex__23066__auto__ = e24488;
var statearr_24489_24508 = state_24464;
(statearr_24489_24508[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24509 = state_24464;
state_24464 = G__24509;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24492,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23155__auto__ = (function (){var statearr_24490 = f__23154__auto__.call(null);
(statearr_24490[(6)] = c__23153__auto___24492);

return statearr_24490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24492,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24512 = arguments.length;
switch (G__24512) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23153__auto___24566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24566,out){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24566,out){
return (function (state_24544){
var state_val_24545 = (state_24544[(1)]);
if((state_val_24545 === (7))){
var inst_24523 = (state_24544[(7)]);
var inst_24524 = (state_24544[(8)]);
var inst_24523__$1 = (state_24544[(2)]);
var inst_24524__$1 = cljs.core.nth.call(null,inst_24523__$1,(0),null);
var inst_24525 = cljs.core.nth.call(null,inst_24523__$1,(1),null);
var inst_24526 = (inst_24524__$1 == null);
var state_24544__$1 = (function (){var statearr_24546 = state_24544;
(statearr_24546[(7)] = inst_24523__$1);

(statearr_24546[(8)] = inst_24524__$1);

(statearr_24546[(9)] = inst_24525);

return statearr_24546;
})();
if(cljs.core.truth_(inst_24526)){
var statearr_24547_24567 = state_24544__$1;
(statearr_24547_24567[(1)] = (8));

} else {
var statearr_24548_24568 = state_24544__$1;
(statearr_24548_24568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24545 === (1))){
var inst_24513 = cljs.core.vec.call(null,chs);
var inst_24514 = inst_24513;
var state_24544__$1 = (function (){var statearr_24549 = state_24544;
(statearr_24549[(10)] = inst_24514);

return statearr_24549;
})();
var statearr_24550_24569 = state_24544__$1;
(statearr_24550_24569[(2)] = null);

(statearr_24550_24569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24545 === (4))){
var inst_24514 = (state_24544[(10)]);
var state_24544__$1 = state_24544;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24544__$1,(7),inst_24514);
} else {
if((state_val_24545 === (6))){
var inst_24540 = (state_24544[(2)]);
var state_24544__$1 = state_24544;
var statearr_24551_24570 = state_24544__$1;
(statearr_24551_24570[(2)] = inst_24540);

(statearr_24551_24570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24545 === (3))){
var inst_24542 = (state_24544[(2)]);
var state_24544__$1 = state_24544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24544__$1,inst_24542);
} else {
if((state_val_24545 === (2))){
var inst_24514 = (state_24544[(10)]);
var inst_24516 = cljs.core.count.call(null,inst_24514);
var inst_24517 = (inst_24516 > (0));
var state_24544__$1 = state_24544;
if(cljs.core.truth_(inst_24517)){
var statearr_24553_24571 = state_24544__$1;
(statearr_24553_24571[(1)] = (4));

} else {
var statearr_24554_24572 = state_24544__$1;
(statearr_24554_24572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24545 === (11))){
var inst_24514 = (state_24544[(10)]);
var inst_24533 = (state_24544[(2)]);
var tmp24552 = inst_24514;
var inst_24514__$1 = tmp24552;
var state_24544__$1 = (function (){var statearr_24555 = state_24544;
(statearr_24555[(10)] = inst_24514__$1);

(statearr_24555[(11)] = inst_24533);

return statearr_24555;
})();
var statearr_24556_24573 = state_24544__$1;
(statearr_24556_24573[(2)] = null);

(statearr_24556_24573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24545 === (9))){
var inst_24524 = (state_24544[(8)]);
var state_24544__$1 = state_24544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24544__$1,(11),out,inst_24524);
} else {
if((state_val_24545 === (5))){
var inst_24538 = cljs.core.async.close_BANG_.call(null,out);
var state_24544__$1 = state_24544;
var statearr_24557_24574 = state_24544__$1;
(statearr_24557_24574[(2)] = inst_24538);

(statearr_24557_24574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24545 === (10))){
var inst_24536 = (state_24544[(2)]);
var state_24544__$1 = state_24544;
var statearr_24558_24575 = state_24544__$1;
(statearr_24558_24575[(2)] = inst_24536);

(statearr_24558_24575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24545 === (8))){
var inst_24514 = (state_24544[(10)]);
var inst_24523 = (state_24544[(7)]);
var inst_24524 = (state_24544[(8)]);
var inst_24525 = (state_24544[(9)]);
var inst_24528 = (function (){var cs = inst_24514;
var vec__24519 = inst_24523;
var v = inst_24524;
var c = inst_24525;
return ((function (cs,vec__24519,v,c,inst_24514,inst_24523,inst_24524,inst_24525,state_val_24545,c__23153__auto___24566,out){
return (function (p1__24510_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24510_SHARP_);
});
;})(cs,vec__24519,v,c,inst_24514,inst_24523,inst_24524,inst_24525,state_val_24545,c__23153__auto___24566,out))
})();
var inst_24529 = cljs.core.filterv.call(null,inst_24528,inst_24514);
var inst_24514__$1 = inst_24529;
var state_24544__$1 = (function (){var statearr_24559 = state_24544;
(statearr_24559[(10)] = inst_24514__$1);

return statearr_24559;
})();
var statearr_24560_24576 = state_24544__$1;
(statearr_24560_24576[(2)] = null);

(statearr_24560_24576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24566,out))
;
return ((function (switch__23062__auto__,c__23153__auto___24566,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24561 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24561[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24561[(1)] = (1));

return statearr_24561;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24544){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24562){if((e24562 instanceof Object)){
var ex__23066__auto__ = e24562;
var statearr_24563_24577 = state_24544;
(statearr_24563_24577[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24578 = state_24544;
state_24544 = G__24578;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24566,out))
})();
var state__23155__auto__ = (function (){var statearr_24564 = f__23154__auto__.call(null);
(statearr_24564[(6)] = c__23153__auto___24566);

return statearr_24564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24566,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24580 = arguments.length;
switch (G__24580) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23153__auto___24625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24625,out){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24625,out){
return (function (state_24604){
var state_val_24605 = (state_24604[(1)]);
if((state_val_24605 === (7))){
var inst_24586 = (state_24604[(7)]);
var inst_24586__$1 = (state_24604[(2)]);
var inst_24587 = (inst_24586__$1 == null);
var inst_24588 = cljs.core.not.call(null,inst_24587);
var state_24604__$1 = (function (){var statearr_24606 = state_24604;
(statearr_24606[(7)] = inst_24586__$1);

return statearr_24606;
})();
if(inst_24588){
var statearr_24607_24626 = state_24604__$1;
(statearr_24607_24626[(1)] = (8));

} else {
var statearr_24608_24627 = state_24604__$1;
(statearr_24608_24627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (1))){
var inst_24581 = (0);
var state_24604__$1 = (function (){var statearr_24609 = state_24604;
(statearr_24609[(8)] = inst_24581);

return statearr_24609;
})();
var statearr_24610_24628 = state_24604__$1;
(statearr_24610_24628[(2)] = null);

(statearr_24610_24628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (4))){
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24604__$1,(7),ch);
} else {
if((state_val_24605 === (6))){
var inst_24599 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24611_24629 = state_24604__$1;
(statearr_24611_24629[(2)] = inst_24599);

(statearr_24611_24629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (3))){
var inst_24601 = (state_24604[(2)]);
var inst_24602 = cljs.core.async.close_BANG_.call(null,out);
var state_24604__$1 = (function (){var statearr_24612 = state_24604;
(statearr_24612[(9)] = inst_24601);

return statearr_24612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24604__$1,inst_24602);
} else {
if((state_val_24605 === (2))){
var inst_24581 = (state_24604[(8)]);
var inst_24583 = (inst_24581 < n);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24583)){
var statearr_24613_24630 = state_24604__$1;
(statearr_24613_24630[(1)] = (4));

} else {
var statearr_24614_24631 = state_24604__$1;
(statearr_24614_24631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (11))){
var inst_24581 = (state_24604[(8)]);
var inst_24591 = (state_24604[(2)]);
var inst_24592 = (inst_24581 + (1));
var inst_24581__$1 = inst_24592;
var state_24604__$1 = (function (){var statearr_24615 = state_24604;
(statearr_24615[(8)] = inst_24581__$1);

(statearr_24615[(10)] = inst_24591);

return statearr_24615;
})();
var statearr_24616_24632 = state_24604__$1;
(statearr_24616_24632[(2)] = null);

(statearr_24616_24632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (9))){
var state_24604__$1 = state_24604;
var statearr_24617_24633 = state_24604__$1;
(statearr_24617_24633[(2)] = null);

(statearr_24617_24633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (5))){
var state_24604__$1 = state_24604;
var statearr_24618_24634 = state_24604__$1;
(statearr_24618_24634[(2)] = null);

(statearr_24618_24634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (10))){
var inst_24596 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24619_24635 = state_24604__$1;
(statearr_24619_24635[(2)] = inst_24596);

(statearr_24619_24635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (8))){
var inst_24586 = (state_24604[(7)]);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24604__$1,(11),out,inst_24586);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24625,out))
;
return ((function (switch__23062__auto__,c__23153__auto___24625,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24620[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24620[(1)] = (1));

return statearr_24620;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24604){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24621){if((e24621 instanceof Object)){
var ex__23066__auto__ = e24621;
var statearr_24622_24636 = state_24604;
(statearr_24622_24636[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24637 = state_24604;
state_24604 = G__24637;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24625,out))
})();
var state__23155__auto__ = (function (){var statearr_24623 = f__23154__auto__.call(null);
(statearr_24623[(6)] = c__23153__auto___24625);

return statearr_24623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24625,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24639 = (function (f,ch,meta24640){
this.f = f;
this.ch = ch;
this.meta24640 = meta24640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24641,meta24640__$1){
var self__ = this;
var _24641__$1 = this;
return (new cljs.core.async.t_cljs$core$async24639(self__.f,self__.ch,meta24640__$1));
});

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24641){
var self__ = this;
var _24641__$1 = this;
return self__.meta24640;
});

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24642 = (function (f,ch,meta24640,_,fn1,meta24643){
this.f = f;
this.ch = ch;
this.meta24640 = meta24640;
this._ = _;
this.fn1 = fn1;
this.meta24643 = meta24643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24644,meta24643__$1){
var self__ = this;
var _24644__$1 = this;
return (new cljs.core.async.t_cljs$core$async24642(self__.f,self__.ch,self__.meta24640,self__._,self__.fn1,meta24643__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24644){
var self__ = this;
var _24644__$1 = this;
return self__.meta24643;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24638_SHARP_){
return f1.call(null,(((p1__24638_SHARP_ == null))?null:self__.f.call(null,p1__24638_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24642.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24640","meta24640",591561690,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24639","cljs.core.async/t_cljs$core$async24639",-1351531705,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24643","meta24643",1762285693,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24642";

cljs.core.async.t_cljs$core$async24642.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24642");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24642.
 */
cljs.core.async.__GT_t_cljs$core$async24642 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24642(f__$1,ch__$1,meta24640__$1,___$2,fn1__$1,meta24643){
return (new cljs.core.async.t_cljs$core$async24642(f__$1,ch__$1,meta24640__$1,___$2,fn1__$1,meta24643));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24642(self__.f,self__.ch,self__.meta24640,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24640","meta24640",591561690,null)], null);
});

cljs.core.async.t_cljs$core$async24639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24639";

cljs.core.async.t_cljs$core$async24639.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24639");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24639.
 */
cljs.core.async.__GT_t_cljs$core$async24639 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24639(f__$1,ch__$1,meta24640){
return (new cljs.core.async.t_cljs$core$async24639(f__$1,ch__$1,meta24640));
});

}

return (new cljs.core.async.t_cljs$core$async24639(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24645 = (function (f,ch,meta24646){
this.f = f;
this.ch = ch;
this.meta24646 = meta24646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24647,meta24646__$1){
var self__ = this;
var _24647__$1 = this;
return (new cljs.core.async.t_cljs$core$async24645(self__.f,self__.ch,meta24646__$1));
});

cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24647){
var self__ = this;
var _24647__$1 = this;
return self__.meta24646;
});

cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24646","meta24646",-422295854,null)], null);
});

cljs.core.async.t_cljs$core$async24645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24645";

cljs.core.async.t_cljs$core$async24645.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24645");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24645.
 */
cljs.core.async.__GT_t_cljs$core$async24645 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24645(f__$1,ch__$1,meta24646){
return (new cljs.core.async.t_cljs$core$async24645(f__$1,ch__$1,meta24646));
});

}

return (new cljs.core.async.t_cljs$core$async24645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24648 = (function (p,ch,meta24649){
this.p = p;
this.ch = ch;
this.meta24649 = meta24649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24650,meta24649__$1){
var self__ = this;
var _24650__$1 = this;
return (new cljs.core.async.t_cljs$core$async24648(self__.p,self__.ch,meta24649__$1));
});

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24650){
var self__ = this;
var _24650__$1 = this;
return self__.meta24649;
});

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24649","meta24649",-1980252501,null)], null);
});

cljs.core.async.t_cljs$core$async24648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24648";

cljs.core.async.t_cljs$core$async24648.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24648");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24648.
 */
cljs.core.async.__GT_t_cljs$core$async24648 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24648(p__$1,ch__$1,meta24649){
return (new cljs.core.async.t_cljs$core$async24648(p__$1,ch__$1,meta24649));
});

}

return (new cljs.core.async.t_cljs$core$async24648(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24652 = arguments.length;
switch (G__24652) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23153__auto___24692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24692,out){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24692,out){
return (function (state_24673){
var state_val_24674 = (state_24673[(1)]);
if((state_val_24674 === (7))){
var inst_24669 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24675_24693 = state_24673__$1;
(statearr_24675_24693[(2)] = inst_24669);

(statearr_24675_24693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (1))){
var state_24673__$1 = state_24673;
var statearr_24676_24694 = state_24673__$1;
(statearr_24676_24694[(2)] = null);

(statearr_24676_24694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (4))){
var inst_24655 = (state_24673[(7)]);
var inst_24655__$1 = (state_24673[(2)]);
var inst_24656 = (inst_24655__$1 == null);
var state_24673__$1 = (function (){var statearr_24677 = state_24673;
(statearr_24677[(7)] = inst_24655__$1);

return statearr_24677;
})();
if(cljs.core.truth_(inst_24656)){
var statearr_24678_24695 = state_24673__$1;
(statearr_24678_24695[(1)] = (5));

} else {
var statearr_24679_24696 = state_24673__$1;
(statearr_24679_24696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (6))){
var inst_24655 = (state_24673[(7)]);
var inst_24660 = p.call(null,inst_24655);
var state_24673__$1 = state_24673;
if(cljs.core.truth_(inst_24660)){
var statearr_24680_24697 = state_24673__$1;
(statearr_24680_24697[(1)] = (8));

} else {
var statearr_24681_24698 = state_24673__$1;
(statearr_24681_24698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (3))){
var inst_24671 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24673__$1,inst_24671);
} else {
if((state_val_24674 === (2))){
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24673__$1,(4),ch);
} else {
if((state_val_24674 === (11))){
var inst_24663 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24682_24699 = state_24673__$1;
(statearr_24682_24699[(2)] = inst_24663);

(statearr_24682_24699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (9))){
var state_24673__$1 = state_24673;
var statearr_24683_24700 = state_24673__$1;
(statearr_24683_24700[(2)] = null);

(statearr_24683_24700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (5))){
var inst_24658 = cljs.core.async.close_BANG_.call(null,out);
var state_24673__$1 = state_24673;
var statearr_24684_24701 = state_24673__$1;
(statearr_24684_24701[(2)] = inst_24658);

(statearr_24684_24701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (10))){
var inst_24666 = (state_24673[(2)]);
var state_24673__$1 = (function (){var statearr_24685 = state_24673;
(statearr_24685[(8)] = inst_24666);

return statearr_24685;
})();
var statearr_24686_24702 = state_24673__$1;
(statearr_24686_24702[(2)] = null);

(statearr_24686_24702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (8))){
var inst_24655 = (state_24673[(7)]);
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24673__$1,(11),out,inst_24655);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24692,out))
;
return ((function (switch__23062__auto__,c__23153__auto___24692,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24687 = [null,null,null,null,null,null,null,null,null];
(statearr_24687[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24687[(1)] = (1));

return statearr_24687;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24673){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24688){if((e24688 instanceof Object)){
var ex__23066__auto__ = e24688;
var statearr_24689_24703 = state_24673;
(statearr_24689_24703[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24704 = state_24673;
state_24673 = G__24704;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24692,out))
})();
var state__23155__auto__ = (function (){var statearr_24690 = f__23154__auto__.call(null);
(statearr_24690[(6)] = c__23153__auto___24692);

return statearr_24690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24692,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24706 = arguments.length;
switch (G__24706) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__){
return (function (state_24769){
var state_val_24770 = (state_24769[(1)]);
if((state_val_24770 === (7))){
var inst_24765 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24771_24809 = state_24769__$1;
(statearr_24771_24809[(2)] = inst_24765);

(statearr_24771_24809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (20))){
var inst_24735 = (state_24769[(7)]);
var inst_24746 = (state_24769[(2)]);
var inst_24747 = cljs.core.next.call(null,inst_24735);
var inst_24721 = inst_24747;
var inst_24722 = null;
var inst_24723 = (0);
var inst_24724 = (0);
var state_24769__$1 = (function (){var statearr_24772 = state_24769;
(statearr_24772[(8)] = inst_24724);

(statearr_24772[(9)] = inst_24722);

(statearr_24772[(10)] = inst_24746);

(statearr_24772[(11)] = inst_24721);

(statearr_24772[(12)] = inst_24723);

return statearr_24772;
})();
var statearr_24773_24810 = state_24769__$1;
(statearr_24773_24810[(2)] = null);

(statearr_24773_24810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (1))){
var state_24769__$1 = state_24769;
var statearr_24774_24811 = state_24769__$1;
(statearr_24774_24811[(2)] = null);

(statearr_24774_24811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (4))){
var inst_24710 = (state_24769[(13)]);
var inst_24710__$1 = (state_24769[(2)]);
var inst_24711 = (inst_24710__$1 == null);
var state_24769__$1 = (function (){var statearr_24775 = state_24769;
(statearr_24775[(13)] = inst_24710__$1);

return statearr_24775;
})();
if(cljs.core.truth_(inst_24711)){
var statearr_24776_24812 = state_24769__$1;
(statearr_24776_24812[(1)] = (5));

} else {
var statearr_24777_24813 = state_24769__$1;
(statearr_24777_24813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (15))){
var state_24769__$1 = state_24769;
var statearr_24781_24814 = state_24769__$1;
(statearr_24781_24814[(2)] = null);

(statearr_24781_24814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (21))){
var state_24769__$1 = state_24769;
var statearr_24782_24815 = state_24769__$1;
(statearr_24782_24815[(2)] = null);

(statearr_24782_24815[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (13))){
var inst_24724 = (state_24769[(8)]);
var inst_24722 = (state_24769[(9)]);
var inst_24721 = (state_24769[(11)]);
var inst_24723 = (state_24769[(12)]);
var inst_24731 = (state_24769[(2)]);
var inst_24732 = (inst_24724 + (1));
var tmp24778 = inst_24722;
var tmp24779 = inst_24721;
var tmp24780 = inst_24723;
var inst_24721__$1 = tmp24779;
var inst_24722__$1 = tmp24778;
var inst_24723__$1 = tmp24780;
var inst_24724__$1 = inst_24732;
var state_24769__$1 = (function (){var statearr_24783 = state_24769;
(statearr_24783[(8)] = inst_24724__$1);

(statearr_24783[(9)] = inst_24722__$1);

(statearr_24783[(14)] = inst_24731);

(statearr_24783[(11)] = inst_24721__$1);

(statearr_24783[(12)] = inst_24723__$1);

return statearr_24783;
})();
var statearr_24784_24816 = state_24769__$1;
(statearr_24784_24816[(2)] = null);

(statearr_24784_24816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (22))){
var state_24769__$1 = state_24769;
var statearr_24785_24817 = state_24769__$1;
(statearr_24785_24817[(2)] = null);

(statearr_24785_24817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (6))){
var inst_24710 = (state_24769[(13)]);
var inst_24719 = f.call(null,inst_24710);
var inst_24720 = cljs.core.seq.call(null,inst_24719);
var inst_24721 = inst_24720;
var inst_24722 = null;
var inst_24723 = (0);
var inst_24724 = (0);
var state_24769__$1 = (function (){var statearr_24786 = state_24769;
(statearr_24786[(8)] = inst_24724);

(statearr_24786[(9)] = inst_24722);

(statearr_24786[(11)] = inst_24721);

(statearr_24786[(12)] = inst_24723);

return statearr_24786;
})();
var statearr_24787_24818 = state_24769__$1;
(statearr_24787_24818[(2)] = null);

(statearr_24787_24818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (17))){
var inst_24735 = (state_24769[(7)]);
var inst_24739 = cljs.core.chunk_first.call(null,inst_24735);
var inst_24740 = cljs.core.chunk_rest.call(null,inst_24735);
var inst_24741 = cljs.core.count.call(null,inst_24739);
var inst_24721 = inst_24740;
var inst_24722 = inst_24739;
var inst_24723 = inst_24741;
var inst_24724 = (0);
var state_24769__$1 = (function (){var statearr_24788 = state_24769;
(statearr_24788[(8)] = inst_24724);

(statearr_24788[(9)] = inst_24722);

(statearr_24788[(11)] = inst_24721);

(statearr_24788[(12)] = inst_24723);

return statearr_24788;
})();
var statearr_24789_24819 = state_24769__$1;
(statearr_24789_24819[(2)] = null);

(statearr_24789_24819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (3))){
var inst_24767 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24769__$1,inst_24767);
} else {
if((state_val_24770 === (12))){
var inst_24755 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24790_24820 = state_24769__$1;
(statearr_24790_24820[(2)] = inst_24755);

(statearr_24790_24820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (2))){
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24769__$1,(4),in$);
} else {
if((state_val_24770 === (23))){
var inst_24763 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24791_24821 = state_24769__$1;
(statearr_24791_24821[(2)] = inst_24763);

(statearr_24791_24821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (19))){
var inst_24750 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24792_24822 = state_24769__$1;
(statearr_24792_24822[(2)] = inst_24750);

(statearr_24792_24822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (11))){
var inst_24735 = (state_24769[(7)]);
var inst_24721 = (state_24769[(11)]);
var inst_24735__$1 = cljs.core.seq.call(null,inst_24721);
var state_24769__$1 = (function (){var statearr_24793 = state_24769;
(statearr_24793[(7)] = inst_24735__$1);

return statearr_24793;
})();
if(inst_24735__$1){
var statearr_24794_24823 = state_24769__$1;
(statearr_24794_24823[(1)] = (14));

} else {
var statearr_24795_24824 = state_24769__$1;
(statearr_24795_24824[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (9))){
var inst_24757 = (state_24769[(2)]);
var inst_24758 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24769__$1 = (function (){var statearr_24796 = state_24769;
(statearr_24796[(15)] = inst_24757);

return statearr_24796;
})();
if(cljs.core.truth_(inst_24758)){
var statearr_24797_24825 = state_24769__$1;
(statearr_24797_24825[(1)] = (21));

} else {
var statearr_24798_24826 = state_24769__$1;
(statearr_24798_24826[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (5))){
var inst_24713 = cljs.core.async.close_BANG_.call(null,out);
var state_24769__$1 = state_24769;
var statearr_24799_24827 = state_24769__$1;
(statearr_24799_24827[(2)] = inst_24713);

(statearr_24799_24827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (14))){
var inst_24735 = (state_24769[(7)]);
var inst_24737 = cljs.core.chunked_seq_QMARK_.call(null,inst_24735);
var state_24769__$1 = state_24769;
if(inst_24737){
var statearr_24800_24828 = state_24769__$1;
(statearr_24800_24828[(1)] = (17));

} else {
var statearr_24801_24829 = state_24769__$1;
(statearr_24801_24829[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (16))){
var inst_24753 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24802_24830 = state_24769__$1;
(statearr_24802_24830[(2)] = inst_24753);

(statearr_24802_24830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (10))){
var inst_24724 = (state_24769[(8)]);
var inst_24722 = (state_24769[(9)]);
var inst_24729 = cljs.core._nth.call(null,inst_24722,inst_24724);
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24769__$1,(13),out,inst_24729);
} else {
if((state_val_24770 === (18))){
var inst_24735 = (state_24769[(7)]);
var inst_24744 = cljs.core.first.call(null,inst_24735);
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24769__$1,(20),out,inst_24744);
} else {
if((state_val_24770 === (8))){
var inst_24724 = (state_24769[(8)]);
var inst_24723 = (state_24769[(12)]);
var inst_24726 = (inst_24724 < inst_24723);
var inst_24727 = inst_24726;
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24727)){
var statearr_24803_24831 = state_24769__$1;
(statearr_24803_24831[(1)] = (10));

} else {
var statearr_24804_24832 = state_24769__$1;
(statearr_24804_24832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto__))
;
return ((function (switch__23062__auto__,c__23153__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_24805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24805[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__);

(statearr_24805[(1)] = (1));

return statearr_24805;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____1 = (function (state_24769){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24806){if((e24806 instanceof Object)){
var ex__23066__auto__ = e24806;
var statearr_24807_24833 = state_24769;
(statearr_24807_24833[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24834 = state_24769;
state_24769 = G__24834;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__ = function(state_24769){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____1.call(this,state_24769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__))
})();
var state__23155__auto__ = (function (){var statearr_24808 = f__23154__auto__.call(null);
(statearr_24808[(6)] = c__23153__auto__);

return statearr_24808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__))
);

return c__23153__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24836 = arguments.length;
switch (G__24836) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24839 = arguments.length;
switch (G__24839) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24842 = arguments.length;
switch (G__24842) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23153__auto___24889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24889,out){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24889,out){
return (function (state_24866){
var state_val_24867 = (state_24866[(1)]);
if((state_val_24867 === (7))){
var inst_24861 = (state_24866[(2)]);
var state_24866__$1 = state_24866;
var statearr_24868_24890 = state_24866__$1;
(statearr_24868_24890[(2)] = inst_24861);

(statearr_24868_24890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24867 === (1))){
var inst_24843 = null;
var state_24866__$1 = (function (){var statearr_24869 = state_24866;
(statearr_24869[(7)] = inst_24843);

return statearr_24869;
})();
var statearr_24870_24891 = state_24866__$1;
(statearr_24870_24891[(2)] = null);

(statearr_24870_24891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24867 === (4))){
var inst_24846 = (state_24866[(8)]);
var inst_24846__$1 = (state_24866[(2)]);
var inst_24847 = (inst_24846__$1 == null);
var inst_24848 = cljs.core.not.call(null,inst_24847);
var state_24866__$1 = (function (){var statearr_24871 = state_24866;
(statearr_24871[(8)] = inst_24846__$1);

return statearr_24871;
})();
if(inst_24848){
var statearr_24872_24892 = state_24866__$1;
(statearr_24872_24892[(1)] = (5));

} else {
var statearr_24873_24893 = state_24866__$1;
(statearr_24873_24893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24867 === (6))){
var state_24866__$1 = state_24866;
var statearr_24874_24894 = state_24866__$1;
(statearr_24874_24894[(2)] = null);

(statearr_24874_24894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24867 === (3))){
var inst_24863 = (state_24866[(2)]);
var inst_24864 = cljs.core.async.close_BANG_.call(null,out);
var state_24866__$1 = (function (){var statearr_24875 = state_24866;
(statearr_24875[(9)] = inst_24863);

return statearr_24875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24866__$1,inst_24864);
} else {
if((state_val_24867 === (2))){
var state_24866__$1 = state_24866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24866__$1,(4),ch);
} else {
if((state_val_24867 === (11))){
var inst_24846 = (state_24866[(8)]);
var inst_24855 = (state_24866[(2)]);
var inst_24843 = inst_24846;
var state_24866__$1 = (function (){var statearr_24876 = state_24866;
(statearr_24876[(10)] = inst_24855);

(statearr_24876[(7)] = inst_24843);

return statearr_24876;
})();
var statearr_24877_24895 = state_24866__$1;
(statearr_24877_24895[(2)] = null);

(statearr_24877_24895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24867 === (9))){
var inst_24846 = (state_24866[(8)]);
var state_24866__$1 = state_24866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24866__$1,(11),out,inst_24846);
} else {
if((state_val_24867 === (5))){
var inst_24846 = (state_24866[(8)]);
var inst_24843 = (state_24866[(7)]);
var inst_24850 = cljs.core._EQ_.call(null,inst_24846,inst_24843);
var state_24866__$1 = state_24866;
if(inst_24850){
var statearr_24879_24896 = state_24866__$1;
(statearr_24879_24896[(1)] = (8));

} else {
var statearr_24880_24897 = state_24866__$1;
(statearr_24880_24897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24867 === (10))){
var inst_24858 = (state_24866[(2)]);
var state_24866__$1 = state_24866;
var statearr_24881_24898 = state_24866__$1;
(statearr_24881_24898[(2)] = inst_24858);

(statearr_24881_24898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24867 === (8))){
var inst_24843 = (state_24866[(7)]);
var tmp24878 = inst_24843;
var inst_24843__$1 = tmp24878;
var state_24866__$1 = (function (){var statearr_24882 = state_24866;
(statearr_24882[(7)] = inst_24843__$1);

return statearr_24882;
})();
var statearr_24883_24899 = state_24866__$1;
(statearr_24883_24899[(2)] = null);

(statearr_24883_24899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24889,out))
;
return ((function (switch__23062__auto__,c__23153__auto___24889,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24884[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24884[(1)] = (1));

return statearr_24884;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24866){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24885){if((e24885 instanceof Object)){
var ex__23066__auto__ = e24885;
var statearr_24886_24900 = state_24866;
(statearr_24886_24900[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24901 = state_24866;
state_24866 = G__24901;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24889,out))
})();
var state__23155__auto__ = (function (){var statearr_24887 = f__23154__auto__.call(null);
(statearr_24887[(6)] = c__23153__auto___24889);

return statearr_24887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24889,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24903 = arguments.length;
switch (G__24903) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23153__auto___24969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___24969,out){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___24969,out){
return (function (state_24941){
var state_val_24942 = (state_24941[(1)]);
if((state_val_24942 === (7))){
var inst_24937 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24943_24970 = state_24941__$1;
(statearr_24943_24970[(2)] = inst_24937);

(statearr_24943_24970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (1))){
var inst_24904 = (new Array(n));
var inst_24905 = inst_24904;
var inst_24906 = (0);
var state_24941__$1 = (function (){var statearr_24944 = state_24941;
(statearr_24944[(7)] = inst_24906);

(statearr_24944[(8)] = inst_24905);

return statearr_24944;
})();
var statearr_24945_24971 = state_24941__$1;
(statearr_24945_24971[(2)] = null);

(statearr_24945_24971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (4))){
var inst_24909 = (state_24941[(9)]);
var inst_24909__$1 = (state_24941[(2)]);
var inst_24910 = (inst_24909__$1 == null);
var inst_24911 = cljs.core.not.call(null,inst_24910);
var state_24941__$1 = (function (){var statearr_24946 = state_24941;
(statearr_24946[(9)] = inst_24909__$1);

return statearr_24946;
})();
if(inst_24911){
var statearr_24947_24972 = state_24941__$1;
(statearr_24947_24972[(1)] = (5));

} else {
var statearr_24948_24973 = state_24941__$1;
(statearr_24948_24973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (15))){
var inst_24931 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24949_24974 = state_24941__$1;
(statearr_24949_24974[(2)] = inst_24931);

(statearr_24949_24974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (13))){
var state_24941__$1 = state_24941;
var statearr_24950_24975 = state_24941__$1;
(statearr_24950_24975[(2)] = null);

(statearr_24950_24975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (6))){
var inst_24906 = (state_24941[(7)]);
var inst_24927 = (inst_24906 > (0));
var state_24941__$1 = state_24941;
if(cljs.core.truth_(inst_24927)){
var statearr_24951_24976 = state_24941__$1;
(statearr_24951_24976[(1)] = (12));

} else {
var statearr_24952_24977 = state_24941__$1;
(statearr_24952_24977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (3))){
var inst_24939 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24941__$1,inst_24939);
} else {
if((state_val_24942 === (12))){
var inst_24905 = (state_24941[(8)]);
var inst_24929 = cljs.core.vec.call(null,inst_24905);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(15),out,inst_24929);
} else {
if((state_val_24942 === (2))){
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(4),ch);
} else {
if((state_val_24942 === (11))){
var inst_24921 = (state_24941[(2)]);
var inst_24922 = (new Array(n));
var inst_24905 = inst_24922;
var inst_24906 = (0);
var state_24941__$1 = (function (){var statearr_24953 = state_24941;
(statearr_24953[(7)] = inst_24906);

(statearr_24953[(8)] = inst_24905);

(statearr_24953[(10)] = inst_24921);

return statearr_24953;
})();
var statearr_24954_24978 = state_24941__$1;
(statearr_24954_24978[(2)] = null);

(statearr_24954_24978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (9))){
var inst_24905 = (state_24941[(8)]);
var inst_24919 = cljs.core.vec.call(null,inst_24905);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(11),out,inst_24919);
} else {
if((state_val_24942 === (5))){
var inst_24906 = (state_24941[(7)]);
var inst_24909 = (state_24941[(9)]);
var inst_24905 = (state_24941[(8)]);
var inst_24914 = (state_24941[(11)]);
var inst_24913 = (inst_24905[inst_24906] = inst_24909);
var inst_24914__$1 = (inst_24906 + (1));
var inst_24915 = (inst_24914__$1 < n);
var state_24941__$1 = (function (){var statearr_24955 = state_24941;
(statearr_24955[(11)] = inst_24914__$1);

(statearr_24955[(12)] = inst_24913);

return statearr_24955;
})();
if(cljs.core.truth_(inst_24915)){
var statearr_24956_24979 = state_24941__$1;
(statearr_24956_24979[(1)] = (8));

} else {
var statearr_24957_24980 = state_24941__$1;
(statearr_24957_24980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (14))){
var inst_24934 = (state_24941[(2)]);
var inst_24935 = cljs.core.async.close_BANG_.call(null,out);
var state_24941__$1 = (function (){var statearr_24959 = state_24941;
(statearr_24959[(13)] = inst_24934);

return statearr_24959;
})();
var statearr_24960_24981 = state_24941__$1;
(statearr_24960_24981[(2)] = inst_24935);

(statearr_24960_24981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (10))){
var inst_24925 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24961_24982 = state_24941__$1;
(statearr_24961_24982[(2)] = inst_24925);

(statearr_24961_24982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (8))){
var inst_24905 = (state_24941[(8)]);
var inst_24914 = (state_24941[(11)]);
var tmp24958 = inst_24905;
var inst_24905__$1 = tmp24958;
var inst_24906 = inst_24914;
var state_24941__$1 = (function (){var statearr_24962 = state_24941;
(statearr_24962[(7)] = inst_24906);

(statearr_24962[(8)] = inst_24905__$1);

return statearr_24962;
})();
var statearr_24963_24983 = state_24941__$1;
(statearr_24963_24983[(2)] = null);

(statearr_24963_24983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___24969,out))
;
return ((function (switch__23062__auto__,c__23153__auto___24969,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24964[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24964[(1)] = (1));

return statearr_24964;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24941){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24965){if((e24965 instanceof Object)){
var ex__23066__auto__ = e24965;
var statearr_24966_24984 = state_24941;
(statearr_24966_24984[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24985 = state_24941;
state_24941 = G__24985;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___24969,out))
})();
var state__23155__auto__ = (function (){var statearr_24967 = f__23154__auto__.call(null);
(statearr_24967[(6)] = c__23153__auto___24969);

return statearr_24967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___24969,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24987 = arguments.length;
switch (G__24987) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23153__auto___25057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___25057,out){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___25057,out){
return (function (state_25029){
var state_val_25030 = (state_25029[(1)]);
if((state_val_25030 === (7))){
var inst_25025 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25031_25058 = state_25029__$1;
(statearr_25031_25058[(2)] = inst_25025);

(statearr_25031_25058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (1))){
var inst_24988 = [];
var inst_24989 = inst_24988;
var inst_24990 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25029__$1 = (function (){var statearr_25032 = state_25029;
(statearr_25032[(7)] = inst_24990);

(statearr_25032[(8)] = inst_24989);

return statearr_25032;
})();
var statearr_25033_25059 = state_25029__$1;
(statearr_25033_25059[(2)] = null);

(statearr_25033_25059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (4))){
var inst_24993 = (state_25029[(9)]);
var inst_24993__$1 = (state_25029[(2)]);
var inst_24994 = (inst_24993__$1 == null);
var inst_24995 = cljs.core.not.call(null,inst_24994);
var state_25029__$1 = (function (){var statearr_25034 = state_25029;
(statearr_25034[(9)] = inst_24993__$1);

return statearr_25034;
})();
if(inst_24995){
var statearr_25035_25060 = state_25029__$1;
(statearr_25035_25060[(1)] = (5));

} else {
var statearr_25036_25061 = state_25029__$1;
(statearr_25036_25061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (15))){
var inst_25019 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25037_25062 = state_25029__$1;
(statearr_25037_25062[(2)] = inst_25019);

(statearr_25037_25062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (13))){
var state_25029__$1 = state_25029;
var statearr_25038_25063 = state_25029__$1;
(statearr_25038_25063[(2)] = null);

(statearr_25038_25063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (6))){
var inst_24989 = (state_25029[(8)]);
var inst_25014 = inst_24989.length;
var inst_25015 = (inst_25014 > (0));
var state_25029__$1 = state_25029;
if(cljs.core.truth_(inst_25015)){
var statearr_25039_25064 = state_25029__$1;
(statearr_25039_25064[(1)] = (12));

} else {
var statearr_25040_25065 = state_25029__$1;
(statearr_25040_25065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (3))){
var inst_25027 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25029__$1,inst_25027);
} else {
if((state_val_25030 === (12))){
var inst_24989 = (state_25029[(8)]);
var inst_25017 = cljs.core.vec.call(null,inst_24989);
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25029__$1,(15),out,inst_25017);
} else {
if((state_val_25030 === (2))){
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25029__$1,(4),ch);
} else {
if((state_val_25030 === (11))){
var inst_24997 = (state_25029[(10)]);
var inst_24993 = (state_25029[(9)]);
var inst_25007 = (state_25029[(2)]);
var inst_25008 = [];
var inst_25009 = inst_25008.push(inst_24993);
var inst_24989 = inst_25008;
var inst_24990 = inst_24997;
var state_25029__$1 = (function (){var statearr_25041 = state_25029;
(statearr_25041[(7)] = inst_24990);

(statearr_25041[(11)] = inst_25009);

(statearr_25041[(8)] = inst_24989);

(statearr_25041[(12)] = inst_25007);

return statearr_25041;
})();
var statearr_25042_25066 = state_25029__$1;
(statearr_25042_25066[(2)] = null);

(statearr_25042_25066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (9))){
var inst_24989 = (state_25029[(8)]);
var inst_25005 = cljs.core.vec.call(null,inst_24989);
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25029__$1,(11),out,inst_25005);
} else {
if((state_val_25030 === (5))){
var inst_24997 = (state_25029[(10)]);
var inst_24990 = (state_25029[(7)]);
var inst_24993 = (state_25029[(9)]);
var inst_24997__$1 = f.call(null,inst_24993);
var inst_24998 = cljs.core._EQ_.call(null,inst_24997__$1,inst_24990);
var inst_24999 = cljs.core.keyword_identical_QMARK_.call(null,inst_24990,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25000 = ((inst_24998) || (inst_24999));
var state_25029__$1 = (function (){var statearr_25043 = state_25029;
(statearr_25043[(10)] = inst_24997__$1);

return statearr_25043;
})();
if(cljs.core.truth_(inst_25000)){
var statearr_25044_25067 = state_25029__$1;
(statearr_25044_25067[(1)] = (8));

} else {
var statearr_25045_25068 = state_25029__$1;
(statearr_25045_25068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (14))){
var inst_25022 = (state_25029[(2)]);
var inst_25023 = cljs.core.async.close_BANG_.call(null,out);
var state_25029__$1 = (function (){var statearr_25047 = state_25029;
(statearr_25047[(13)] = inst_25022);

return statearr_25047;
})();
var statearr_25048_25069 = state_25029__$1;
(statearr_25048_25069[(2)] = inst_25023);

(statearr_25048_25069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (10))){
var inst_25012 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25049_25070 = state_25029__$1;
(statearr_25049_25070[(2)] = inst_25012);

(statearr_25049_25070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (8))){
var inst_24997 = (state_25029[(10)]);
var inst_24993 = (state_25029[(9)]);
var inst_24989 = (state_25029[(8)]);
var inst_25002 = inst_24989.push(inst_24993);
var tmp25046 = inst_24989;
var inst_24989__$1 = tmp25046;
var inst_24990 = inst_24997;
var state_25029__$1 = (function (){var statearr_25050 = state_25029;
(statearr_25050[(7)] = inst_24990);

(statearr_25050[(8)] = inst_24989__$1);

(statearr_25050[(14)] = inst_25002);

return statearr_25050;
})();
var statearr_25051_25071 = state_25029__$1;
(statearr_25051_25071[(2)] = null);

(statearr_25051_25071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23153__auto___25057,out))
;
return ((function (switch__23062__auto__,c__23153__auto___25057,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_25052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25052[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_25052[(1)] = (1));

return statearr_25052;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_25029){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25053){if((e25053 instanceof Object)){
var ex__23066__auto__ = e25053;
var statearr_25054_25072 = state_25029;
(statearr_25054_25072[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25073 = state_25029;
state_25029 = G__25073;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_25029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_25029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___25057,out))
})();
var state__23155__auto__ = (function (){var statearr_25055 = f__23154__auto__.call(null);
(statearr_25055[(6)] = c__23153__auto___25057);

return statearr_25055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___25057,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1532458882553
