// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22433 = [];
var len__20621__auto___22439 = arguments.length;
var i__20622__auto___22440 = (0);
while(true){
if((i__20622__auto___22440 < len__20621__auto___22439)){
args22433.push((arguments[i__20622__auto___22440]));

var G__22441 = (i__20622__auto___22440 + (1));
i__20622__auto___22440 = G__22441;
continue;
} else {
}
break;
}

var G__22435 = args22433.length;
switch (G__22435) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22433.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22436 = (function (f,blockable,meta22437){
this.f = f;
this.blockable = blockable;
this.meta22437 = meta22437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22438,meta22437__$1){
var self__ = this;
var _22438__$1 = this;
return (new cljs.core.async.t_cljs$core$async22436(self__.f,self__.blockable,meta22437__$1));
});

cljs.core.async.t_cljs$core$async22436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22438){
var self__ = this;
var _22438__$1 = this;
return self__.meta22437;
});

cljs.core.async.t_cljs$core$async22436.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22437","meta22437",-176700214,null)], null);
});

cljs.core.async.t_cljs$core$async22436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22436";

cljs.core.async.t_cljs$core$async22436.cljs$lang$ctorPrWriter = (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async22436");
});

cljs.core.async.__GT_t_cljs$core$async22436 = (function cljs$core$async$__GT_t_cljs$core$async22436(f__$1,blockable__$1,meta22437){
return (new cljs.core.async.t_cljs$core$async22436(f__$1,blockable__$1,meta22437));
});

}

return (new cljs.core.async.t_cljs$core$async22436(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args22445 = [];
var len__20621__auto___22448 = arguments.length;
var i__20622__auto___22449 = (0);
while(true){
if((i__20622__auto___22449 < len__20621__auto___22448)){
args22445.push((arguments[i__20622__auto___22449]));

var G__22450 = (i__20622__auto___22449 + (1));
i__20622__auto___22449 = G__22450;
continue;
} else {
}
break;
}

var G__22447 = args22445.length;
switch (G__22447) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22445.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args22452 = [];
var len__20621__auto___22455 = arguments.length;
var i__20622__auto___22456 = (0);
while(true){
if((i__20622__auto___22456 < len__20621__auto___22455)){
args22452.push((arguments[i__20622__auto___22456]));

var G__22457 = (i__20622__auto___22456 + (1));
i__20622__auto___22456 = G__22457;
continue;
} else {
}
break;
}

var G__22454 = args22452.length;
switch (G__22454) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22452.length)].join('')));

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
var args22459 = [];
var len__20621__auto___22462 = arguments.length;
var i__20622__auto___22463 = (0);
while(true){
if((i__20622__auto___22463 < len__20621__auto___22462)){
args22459.push((arguments[i__20622__auto___22463]));

var G__22464 = (i__20622__auto___22463 + (1));
i__20622__auto___22463 = G__22464;
continue;
} else {
}
break;
}

var G__22461 = args22459.length;
switch (G__22461) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22459.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22466 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22466);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22466,ret){
return (function (){
return fn1.call(null,val_22466);
});})(val_22466,ret))
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
var args22467 = [];
var len__20621__auto___22470 = arguments.length;
var i__20622__auto___22471 = (0);
while(true){
if((i__20622__auto___22471 < len__20621__auto___22470)){
args22467.push((arguments[i__20622__auto___22471]));

var G__22472 = (i__20622__auto___22471 + (1));
i__20622__auto___22471 = G__22472;
continue;
} else {
}
break;
}

var G__22469 = args22467.length;
switch (G__22469) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22467.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__20466__auto___22474 = n;
var x_22475 = (0);
while(true){
if((x_22475 < n__20466__auto___22474)){
(a[x_22475] = (0));

var G__22476 = (x_22475 + (1));
x_22475 = G__22476;
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

var G__22477 = (i + (1));
i = G__22477;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22481 = (function (alt_flag,flag,meta22482){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22482 = meta22482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22483,meta22482__$1){
var self__ = this;
var _22483__$1 = this;
return (new cljs.core.async.t_cljs$core$async22481(self__.alt_flag,self__.flag,meta22482__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22483){
var self__ = this;
var _22483__$1 = this;
return self__.meta22482;
});})(flag))
;

cljs.core.async.t_cljs$core$async22481.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22481.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22482","meta22482",1398051725,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22481";

cljs.core.async.t_cljs$core$async22481.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async22481");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22481 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22481(alt_flag__$1,flag__$1,meta22482){
return (new cljs.core.async.t_cljs$core$async22481(alt_flag__$1,flag__$1,meta22482));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22481(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22487 = (function (alt_handler,flag,cb,meta22488){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22488 = meta22488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22489,meta22488__$1){
var self__ = this;
var _22489__$1 = this;
return (new cljs.core.async.t_cljs$core$async22487(self__.alt_handler,self__.flag,self__.cb,meta22488__$1));
});

cljs.core.async.t_cljs$core$async22487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22489){
var self__ = this;
var _22489__$1 = this;
return self__.meta22488;
});

cljs.core.async.t_cljs$core$async22487.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22488","meta22488",-976613645,null)], null);
});

cljs.core.async.t_cljs$core$async22487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22487";

cljs.core.async.t_cljs$core$async22487.cljs$lang$ctorPrWriter = (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async22487");
});

cljs.core.async.__GT_t_cljs$core$async22487 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22487(alt_handler__$1,flag__$1,cb__$1,meta22488){
return (new cljs.core.async.t_cljs$core$async22487(alt_handler__$1,flag__$1,cb__$1,meta22488));
});

}

return (new cljs.core.async.t_cljs$core$async22487(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22490_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22490_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22491_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22491_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19563__auto__ = wport;
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22492 = (i + (1));
i = G__22492;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19563__auto__ = ret;
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19551__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19551__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19551__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__20628__auto__ = [];
var len__20621__auto___22498 = arguments.length;
var i__20622__auto___22499 = (0);
while(true){
if((i__20622__auto___22499 < len__20621__auto___22498)){
args__20628__auto__.push((arguments[i__20622__auto___22499]));

var G__22500 = (i__20622__auto___22499 + (1));
i__20622__auto___22499 = G__22500;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((1) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20629__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22495){
var map__22496 = p__22495;
var map__22496__$1 = ((((!((map__22496 == null)))?((((map__22496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22496):map__22496);
var opts = map__22496__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22493){
var G__22494 = cljs.core.first.call(null,seq22493);
var seq22493__$1 = cljs.core.next.call(null,seq22493);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22494,seq22493__$1);
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
var args22501 = [];
var len__20621__auto___22551 = arguments.length;
var i__20622__auto___22552 = (0);
while(true){
if((i__20622__auto___22552 < len__20621__auto___22551)){
args22501.push((arguments[i__20622__auto___22552]));

var G__22553 = (i__20622__auto___22552 + (1));
i__20622__auto___22552 = G__22553;
continue;
} else {
}
break;
}

var G__22503 = args22501.length;
switch (G__22503) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22501.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22388__auto___22555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___22555){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___22555){
return (function (state_22527){
var state_val_22528 = (state_22527[(1)]);
if((state_val_22528 === (7))){
var inst_22523 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
var statearr_22529_22556 = state_22527__$1;
(statearr_22529_22556[(2)] = inst_22523);

(statearr_22529_22556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (1))){
var state_22527__$1 = state_22527;
var statearr_22530_22557 = state_22527__$1;
(statearr_22530_22557[(2)] = null);

(statearr_22530_22557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (4))){
var inst_22506 = (state_22527[(7)]);
var inst_22506__$1 = (state_22527[(2)]);
var inst_22507 = (inst_22506__$1 == null);
var state_22527__$1 = (function (){var statearr_22531 = state_22527;
(statearr_22531[(7)] = inst_22506__$1);

return statearr_22531;
})();
if(cljs.core.truth_(inst_22507)){
var statearr_22532_22558 = state_22527__$1;
(statearr_22532_22558[(1)] = (5));

} else {
var statearr_22533_22559 = state_22527__$1;
(statearr_22533_22559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (13))){
var state_22527__$1 = state_22527;
var statearr_22534_22560 = state_22527__$1;
(statearr_22534_22560[(2)] = null);

(statearr_22534_22560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (6))){
var inst_22506 = (state_22527[(7)]);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22527__$1,(11),to,inst_22506);
} else {
if((state_val_22528 === (3))){
var inst_22525 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22527__$1,inst_22525);
} else {
if((state_val_22528 === (12))){
var state_22527__$1 = state_22527;
var statearr_22535_22561 = state_22527__$1;
(statearr_22535_22561[(2)] = null);

(statearr_22535_22561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (2))){
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22527__$1,(4),from);
} else {
if((state_val_22528 === (11))){
var inst_22516 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
if(cljs.core.truth_(inst_22516)){
var statearr_22536_22562 = state_22527__$1;
(statearr_22536_22562[(1)] = (12));

} else {
var statearr_22537_22563 = state_22527__$1;
(statearr_22537_22563[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (9))){
var state_22527__$1 = state_22527;
var statearr_22538_22564 = state_22527__$1;
(statearr_22538_22564[(2)] = null);

(statearr_22538_22564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (5))){
var state_22527__$1 = state_22527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22539_22565 = state_22527__$1;
(statearr_22539_22565[(1)] = (8));

} else {
var statearr_22540_22566 = state_22527__$1;
(statearr_22540_22566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (14))){
var inst_22521 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
var statearr_22541_22567 = state_22527__$1;
(statearr_22541_22567[(2)] = inst_22521);

(statearr_22541_22567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (10))){
var inst_22513 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
var statearr_22542_22568 = state_22527__$1;
(statearr_22542_22568[(2)] = inst_22513);

(statearr_22542_22568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (8))){
var inst_22510 = cljs.core.async.close_BANG_.call(null,to);
var state_22527__$1 = state_22527;
var statearr_22543_22569 = state_22527__$1;
(statearr_22543_22569[(2)] = inst_22510);

(statearr_22543_22569[(1)] = (10));


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
});})(c__22388__auto___22555))
;
return ((function (switch__22276__auto__,c__22388__auto___22555){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_22547 = [null,null,null,null,null,null,null,null];
(statearr_22547[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_22547[(1)] = (1));

return statearr_22547;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_22527){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_22527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e22548){if((e22548 instanceof Object)){
var ex__22280__auto__ = e22548;
var statearr_22549_22570 = state_22527;
(statearr_22549_22570[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22571 = state_22527;
state_22527 = G__22571;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_22527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_22527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___22555))
})();
var state__22390__auto__ = (function (){var statearr_22550 = f__22389__auto__.call(null);
(statearr_22550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___22555);

return statearr_22550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___22555))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22755){
var vec__22756 = p__22755;
var v = cljs.core.nth.call(null,vec__22756,(0),null);
var p = cljs.core.nth.call(null,vec__22756,(1),null);
var job = vec__22756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22388__auto___22938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___22938,res,vec__22756,v,p,job,jobs,results){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___22938,res,vec__22756,v,p,job,jobs,results){
return (function (state_22761){
var state_val_22762 = (state_22761[(1)]);
if((state_val_22762 === (1))){
var state_22761__$1 = state_22761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22761__$1,(2),res,v);
} else {
if((state_val_22762 === (2))){
var inst_22758 = (state_22761[(2)]);
var inst_22759 = cljs.core.async.close_BANG_.call(null,res);
var state_22761__$1 = (function (){var statearr_22763 = state_22761;
(statearr_22763[(7)] = inst_22758);

return statearr_22763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22761__$1,inst_22759);
} else {
return null;
}
}
});})(c__22388__auto___22938,res,vec__22756,v,p,job,jobs,results))
;
return ((function (switch__22276__auto__,c__22388__auto___22938,res,vec__22756,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0 = (function (){
var statearr_22767 = [null,null,null,null,null,null,null,null];
(statearr_22767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__);

(statearr_22767[(1)] = (1));

return statearr_22767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1 = (function (state_22761){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_22761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e22768){if((e22768 instanceof Object)){
var ex__22280__auto__ = e22768;
var statearr_22769_22939 = state_22761;
(statearr_22769_22939[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22940 = state_22761;
state_22761 = G__22940;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = function(state_22761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1.call(this,state_22761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___22938,res,vec__22756,v,p,job,jobs,results))
})();
var state__22390__auto__ = (function (){var statearr_22770 = f__22389__auto__.call(null);
(statearr_22770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___22938);

return statearr_22770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___22938,res,vec__22756,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22771){
var vec__22772 = p__22771;
var v = cljs.core.nth.call(null,vec__22772,(0),null);
var p = cljs.core.nth.call(null,vec__22772,(1),null);
var job = vec__22772;
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
var n__20466__auto___22941 = n;
var __22942 = (0);
while(true){
if((__22942 < n__20466__auto___22941)){
var G__22773_22943 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22773_22943) {
case "compute":
var c__22388__auto___22945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22942,c__22388__auto___22945,G__22773_22943,n__20466__auto___22941,jobs,results,process,async){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (__22942,c__22388__auto___22945,G__22773_22943,n__20466__auto___22941,jobs,results,process,async){
return (function (state_22786){
var state_val_22787 = (state_22786[(1)]);
if((state_val_22787 === (1))){
var state_22786__$1 = state_22786;
var statearr_22788_22946 = state_22786__$1;
(statearr_22788_22946[(2)] = null);

(statearr_22788_22946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (2))){
var state_22786__$1 = state_22786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22786__$1,(4),jobs);
} else {
if((state_val_22787 === (3))){
var inst_22784 = (state_22786[(2)]);
var state_22786__$1 = state_22786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22786__$1,inst_22784);
} else {
if((state_val_22787 === (4))){
var inst_22776 = (state_22786[(2)]);
var inst_22777 = process.call(null,inst_22776);
var state_22786__$1 = state_22786;
if(cljs.core.truth_(inst_22777)){
var statearr_22789_22947 = state_22786__$1;
(statearr_22789_22947[(1)] = (5));

} else {
var statearr_22790_22948 = state_22786__$1;
(statearr_22790_22948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (5))){
var state_22786__$1 = state_22786;
var statearr_22791_22949 = state_22786__$1;
(statearr_22791_22949[(2)] = null);

(statearr_22791_22949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (6))){
var state_22786__$1 = state_22786;
var statearr_22792_22950 = state_22786__$1;
(statearr_22792_22950[(2)] = null);

(statearr_22792_22950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (7))){
var inst_22782 = (state_22786[(2)]);
var state_22786__$1 = state_22786;
var statearr_22793_22951 = state_22786__$1;
(statearr_22793_22951[(2)] = inst_22782);

(statearr_22793_22951[(1)] = (3));


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
});})(__22942,c__22388__auto___22945,G__22773_22943,n__20466__auto___22941,jobs,results,process,async))
;
return ((function (__22942,switch__22276__auto__,c__22388__auto___22945,G__22773_22943,n__20466__auto___22941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0 = (function (){
var statearr_22797 = [null,null,null,null,null,null,null];
(statearr_22797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__);

(statearr_22797[(1)] = (1));

return statearr_22797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1 = (function (state_22786){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_22786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e22798){if((e22798 instanceof Object)){
var ex__22280__auto__ = e22798;
var statearr_22799_22952 = state_22786;
(statearr_22799_22952[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22953 = state_22786;
state_22786 = G__22953;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = function(state_22786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1.call(this,state_22786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__;
})()
;})(__22942,switch__22276__auto__,c__22388__auto___22945,G__22773_22943,n__20466__auto___22941,jobs,results,process,async))
})();
var state__22390__auto__ = (function (){var statearr_22800 = f__22389__auto__.call(null);
(statearr_22800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___22945);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(__22942,c__22388__auto___22945,G__22773_22943,n__20466__auto___22941,jobs,results,process,async))
);


break;
case "async":
var c__22388__auto___22954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22942,c__22388__auto___22954,G__22773_22943,n__20466__auto___22941,jobs,results,process,async){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (__22942,c__22388__auto___22954,G__22773_22943,n__20466__auto___22941,jobs,results,process,async){
return (function (state_22813){
var state_val_22814 = (state_22813[(1)]);
if((state_val_22814 === (1))){
var state_22813__$1 = state_22813;
var statearr_22815_22955 = state_22813__$1;
(statearr_22815_22955[(2)] = null);

(statearr_22815_22955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (2))){
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22813__$1,(4),jobs);
} else {
if((state_val_22814 === (3))){
var inst_22811 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22813__$1,inst_22811);
} else {
if((state_val_22814 === (4))){
var inst_22803 = (state_22813[(2)]);
var inst_22804 = async.call(null,inst_22803);
var state_22813__$1 = state_22813;
if(cljs.core.truth_(inst_22804)){
var statearr_22816_22956 = state_22813__$1;
(statearr_22816_22956[(1)] = (5));

} else {
var statearr_22817_22957 = state_22813__$1;
(statearr_22817_22957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (5))){
var state_22813__$1 = state_22813;
var statearr_22818_22958 = state_22813__$1;
(statearr_22818_22958[(2)] = null);

(statearr_22818_22958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (6))){
var state_22813__$1 = state_22813;
var statearr_22819_22959 = state_22813__$1;
(statearr_22819_22959[(2)] = null);

(statearr_22819_22959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (7))){
var inst_22809 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22820_22960 = state_22813__$1;
(statearr_22820_22960[(2)] = inst_22809);

(statearr_22820_22960[(1)] = (3));


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
});})(__22942,c__22388__auto___22954,G__22773_22943,n__20466__auto___22941,jobs,results,process,async))
;
return ((function (__22942,switch__22276__auto__,c__22388__auto___22954,G__22773_22943,n__20466__auto___22941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0 = (function (){
var statearr_22824 = [null,null,null,null,null,null,null];
(statearr_22824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__);

(statearr_22824[(1)] = (1));

return statearr_22824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1 = (function (state_22813){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_22813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e22825){if((e22825 instanceof Object)){
var ex__22280__auto__ = e22825;
var statearr_22826_22961 = state_22813;
(statearr_22826_22961[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22962 = state_22813;
state_22813 = G__22962;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = function(state_22813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1.call(this,state_22813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__;
})()
;})(__22942,switch__22276__auto__,c__22388__auto___22954,G__22773_22943,n__20466__auto___22941,jobs,results,process,async))
})();
var state__22390__auto__ = (function (){var statearr_22827 = f__22389__auto__.call(null);
(statearr_22827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___22954);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(__22942,c__22388__auto___22954,G__22773_22943,n__20466__auto___22941,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22963 = (__22942 + (1));
__22942 = G__22963;
continue;
} else {
}
break;
}

var c__22388__auto___22964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___22964,jobs,results,process,async){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___22964,jobs,results,process,async){
return (function (state_22849){
var state_val_22850 = (state_22849[(1)]);
if((state_val_22850 === (1))){
var state_22849__$1 = state_22849;
var statearr_22851_22965 = state_22849__$1;
(statearr_22851_22965[(2)] = null);

(statearr_22851_22965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (2))){
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,(4),from);
} else {
if((state_val_22850 === (3))){
var inst_22847 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22849__$1,inst_22847);
} else {
if((state_val_22850 === (4))){
var inst_22830 = (state_22849[(7)]);
var inst_22830__$1 = (state_22849[(2)]);
var inst_22831 = (inst_22830__$1 == null);
var state_22849__$1 = (function (){var statearr_22852 = state_22849;
(statearr_22852[(7)] = inst_22830__$1);

return statearr_22852;
})();
if(cljs.core.truth_(inst_22831)){
var statearr_22853_22966 = state_22849__$1;
(statearr_22853_22966[(1)] = (5));

} else {
var statearr_22854_22967 = state_22849__$1;
(statearr_22854_22967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (5))){
var inst_22833 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22849__$1 = state_22849;
var statearr_22855_22968 = state_22849__$1;
(statearr_22855_22968[(2)] = inst_22833);

(statearr_22855_22968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (6))){
var inst_22830 = (state_22849[(7)]);
var inst_22835 = (state_22849[(8)]);
var inst_22835__$1 = cljs.core.async.chan.call(null,(1));
var inst_22836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22837 = [inst_22830,inst_22835__$1];
var inst_22838 = (new cljs.core.PersistentVector(null,2,(5),inst_22836,inst_22837,null));
var state_22849__$1 = (function (){var statearr_22856 = state_22849;
(statearr_22856[(8)] = inst_22835__$1);

return statearr_22856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22849__$1,(8),jobs,inst_22838);
} else {
if((state_val_22850 === (7))){
var inst_22845 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22857_22969 = state_22849__$1;
(statearr_22857_22969[(2)] = inst_22845);

(statearr_22857_22969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (8))){
var inst_22835 = (state_22849[(8)]);
var inst_22840 = (state_22849[(2)]);
var state_22849__$1 = (function (){var statearr_22858 = state_22849;
(statearr_22858[(9)] = inst_22840);

return statearr_22858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22849__$1,(9),results,inst_22835);
} else {
if((state_val_22850 === (9))){
var inst_22842 = (state_22849[(2)]);
var state_22849__$1 = (function (){var statearr_22859 = state_22849;
(statearr_22859[(10)] = inst_22842);

return statearr_22859;
})();
var statearr_22860_22970 = state_22849__$1;
(statearr_22860_22970[(2)] = null);

(statearr_22860_22970[(1)] = (2));


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
});})(c__22388__auto___22964,jobs,results,process,async))
;
return ((function (switch__22276__auto__,c__22388__auto___22964,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0 = (function (){
var statearr_22864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__);

(statearr_22864[(1)] = (1));

return statearr_22864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1 = (function (state_22849){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_22849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e22865){if((e22865 instanceof Object)){
var ex__22280__auto__ = e22865;
var statearr_22866_22971 = state_22849;
(statearr_22866_22971[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22972 = state_22849;
state_22849 = G__22972;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = function(state_22849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1.call(this,state_22849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___22964,jobs,results,process,async))
})();
var state__22390__auto__ = (function (){var statearr_22867 = f__22389__auto__.call(null);
(statearr_22867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___22964);

return statearr_22867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___22964,jobs,results,process,async))
);


var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__,jobs,results,process,async){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__,jobs,results,process,async){
return (function (state_22905){
var state_val_22906 = (state_22905[(1)]);
if((state_val_22906 === (7))){
var inst_22901 = (state_22905[(2)]);
var state_22905__$1 = state_22905;
var statearr_22907_22973 = state_22905__$1;
(statearr_22907_22973[(2)] = inst_22901);

(statearr_22907_22973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (20))){
var state_22905__$1 = state_22905;
var statearr_22908_22974 = state_22905__$1;
(statearr_22908_22974[(2)] = null);

(statearr_22908_22974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (1))){
var state_22905__$1 = state_22905;
var statearr_22909_22975 = state_22905__$1;
(statearr_22909_22975[(2)] = null);

(statearr_22909_22975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (4))){
var inst_22870 = (state_22905[(7)]);
var inst_22870__$1 = (state_22905[(2)]);
var inst_22871 = (inst_22870__$1 == null);
var state_22905__$1 = (function (){var statearr_22910 = state_22905;
(statearr_22910[(7)] = inst_22870__$1);

return statearr_22910;
})();
if(cljs.core.truth_(inst_22871)){
var statearr_22911_22976 = state_22905__$1;
(statearr_22911_22976[(1)] = (5));

} else {
var statearr_22912_22977 = state_22905__$1;
(statearr_22912_22977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (15))){
var inst_22883 = (state_22905[(8)]);
var state_22905__$1 = state_22905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22905__$1,(18),to,inst_22883);
} else {
if((state_val_22906 === (21))){
var inst_22896 = (state_22905[(2)]);
var state_22905__$1 = state_22905;
var statearr_22913_22978 = state_22905__$1;
(statearr_22913_22978[(2)] = inst_22896);

(statearr_22913_22978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (13))){
var inst_22898 = (state_22905[(2)]);
var state_22905__$1 = (function (){var statearr_22914 = state_22905;
(statearr_22914[(9)] = inst_22898);

return statearr_22914;
})();
var statearr_22915_22979 = state_22905__$1;
(statearr_22915_22979[(2)] = null);

(statearr_22915_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (6))){
var inst_22870 = (state_22905[(7)]);
var state_22905__$1 = state_22905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22905__$1,(11),inst_22870);
} else {
if((state_val_22906 === (17))){
var inst_22891 = (state_22905[(2)]);
var state_22905__$1 = state_22905;
if(cljs.core.truth_(inst_22891)){
var statearr_22916_22980 = state_22905__$1;
(statearr_22916_22980[(1)] = (19));

} else {
var statearr_22917_22981 = state_22905__$1;
(statearr_22917_22981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (3))){
var inst_22903 = (state_22905[(2)]);
var state_22905__$1 = state_22905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22905__$1,inst_22903);
} else {
if((state_val_22906 === (12))){
var inst_22880 = (state_22905[(10)]);
var state_22905__$1 = state_22905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22905__$1,(14),inst_22880);
} else {
if((state_val_22906 === (2))){
var state_22905__$1 = state_22905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22905__$1,(4),results);
} else {
if((state_val_22906 === (19))){
var state_22905__$1 = state_22905;
var statearr_22918_22982 = state_22905__$1;
(statearr_22918_22982[(2)] = null);

(statearr_22918_22982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (11))){
var inst_22880 = (state_22905[(2)]);
var state_22905__$1 = (function (){var statearr_22919 = state_22905;
(statearr_22919[(10)] = inst_22880);

return statearr_22919;
})();
var statearr_22920_22983 = state_22905__$1;
(statearr_22920_22983[(2)] = null);

(statearr_22920_22983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (9))){
var state_22905__$1 = state_22905;
var statearr_22921_22984 = state_22905__$1;
(statearr_22921_22984[(2)] = null);

(statearr_22921_22984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (5))){
var state_22905__$1 = state_22905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22922_22985 = state_22905__$1;
(statearr_22922_22985[(1)] = (8));

} else {
var statearr_22923_22986 = state_22905__$1;
(statearr_22923_22986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (14))){
var inst_22885 = (state_22905[(11)]);
var inst_22883 = (state_22905[(8)]);
var inst_22883__$1 = (state_22905[(2)]);
var inst_22884 = (inst_22883__$1 == null);
var inst_22885__$1 = cljs.core.not.call(null,inst_22884);
var state_22905__$1 = (function (){var statearr_22924 = state_22905;
(statearr_22924[(11)] = inst_22885__$1);

(statearr_22924[(8)] = inst_22883__$1);

return statearr_22924;
})();
if(inst_22885__$1){
var statearr_22925_22987 = state_22905__$1;
(statearr_22925_22987[(1)] = (15));

} else {
var statearr_22926_22988 = state_22905__$1;
(statearr_22926_22988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (16))){
var inst_22885 = (state_22905[(11)]);
var state_22905__$1 = state_22905;
var statearr_22927_22989 = state_22905__$1;
(statearr_22927_22989[(2)] = inst_22885);

(statearr_22927_22989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (10))){
var inst_22877 = (state_22905[(2)]);
var state_22905__$1 = state_22905;
var statearr_22928_22990 = state_22905__$1;
(statearr_22928_22990[(2)] = inst_22877);

(statearr_22928_22990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (18))){
var inst_22888 = (state_22905[(2)]);
var state_22905__$1 = state_22905;
var statearr_22929_22991 = state_22905__$1;
(statearr_22929_22991[(2)] = inst_22888);

(statearr_22929_22991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22906 === (8))){
var inst_22874 = cljs.core.async.close_BANG_.call(null,to);
var state_22905__$1 = state_22905;
var statearr_22930_22992 = state_22905__$1;
(statearr_22930_22992[(2)] = inst_22874);

(statearr_22930_22992[(1)] = (10));


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
});})(c__22388__auto__,jobs,results,process,async))
;
return ((function (switch__22276__auto__,c__22388__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0 = (function (){
var statearr_22934 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__);

(statearr_22934[(1)] = (1));

return statearr_22934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1 = (function (state_22905){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_22905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e22935){if((e22935 instanceof Object)){
var ex__22280__auto__ = e22935;
var statearr_22936_22993 = state_22905;
(statearr_22936_22993[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22994 = state_22905;
state_22905 = G__22994;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__ = function(state_22905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1.call(this,state_22905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__,jobs,results,process,async))
})();
var state__22390__auto__ = (function (){var statearr_22937 = f__22389__auto__.call(null);
(statearr_22937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_22937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__,jobs,results,process,async))
);

return c__22388__auto__;
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
var args22995 = [];
var len__20621__auto___22998 = arguments.length;
var i__20622__auto___22999 = (0);
while(true){
if((i__20622__auto___22999 < len__20621__auto___22998)){
args22995.push((arguments[i__20622__auto___22999]));

var G__23000 = (i__20622__auto___22999 + (1));
i__20622__auto___22999 = G__23000;
continue;
} else {
}
break;
}

var G__22997 = args22995.length;
switch (G__22997) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22995.length)].join('')));

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
var args23002 = [];
var len__20621__auto___23005 = arguments.length;
var i__20622__auto___23006 = (0);
while(true){
if((i__20622__auto___23006 < len__20621__auto___23005)){
args23002.push((arguments[i__20622__auto___23006]));

var G__23007 = (i__20622__auto___23006 + (1));
i__20622__auto___23006 = G__23007;
continue;
} else {
}
break;
}

var G__23004 = args23002.length;
switch (G__23004) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23002.length)].join('')));

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
var args23009 = [];
var len__20621__auto___23062 = arguments.length;
var i__20622__auto___23063 = (0);
while(true){
if((i__20622__auto___23063 < len__20621__auto___23062)){
args23009.push((arguments[i__20622__auto___23063]));

var G__23064 = (i__20622__auto___23063 + (1));
i__20622__auto___23063 = G__23064;
continue;
} else {
}
break;
}

var G__23011 = args23009.length;
switch (G__23011) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23009.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22388__auto___23066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___23066,tc,fc){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___23066,tc,fc){
return (function (state_23037){
var state_val_23038 = (state_23037[(1)]);
if((state_val_23038 === (7))){
var inst_23033 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23039_23067 = state_23037__$1;
(statearr_23039_23067[(2)] = inst_23033);

(statearr_23039_23067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (1))){
var state_23037__$1 = state_23037;
var statearr_23040_23068 = state_23037__$1;
(statearr_23040_23068[(2)] = null);

(statearr_23040_23068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (4))){
var inst_23014 = (state_23037[(7)]);
var inst_23014__$1 = (state_23037[(2)]);
var inst_23015 = (inst_23014__$1 == null);
var state_23037__$1 = (function (){var statearr_23041 = state_23037;
(statearr_23041[(7)] = inst_23014__$1);

return statearr_23041;
})();
if(cljs.core.truth_(inst_23015)){
var statearr_23042_23069 = state_23037__$1;
(statearr_23042_23069[(1)] = (5));

} else {
var statearr_23043_23070 = state_23037__$1;
(statearr_23043_23070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (13))){
var state_23037__$1 = state_23037;
var statearr_23044_23071 = state_23037__$1;
(statearr_23044_23071[(2)] = null);

(statearr_23044_23071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (6))){
var inst_23014 = (state_23037[(7)]);
var inst_23020 = p.call(null,inst_23014);
var state_23037__$1 = state_23037;
if(cljs.core.truth_(inst_23020)){
var statearr_23045_23072 = state_23037__$1;
(statearr_23045_23072[(1)] = (9));

} else {
var statearr_23046_23073 = state_23037__$1;
(statearr_23046_23073[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (3))){
var inst_23035 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23037__$1,inst_23035);
} else {
if((state_val_23038 === (12))){
var state_23037__$1 = state_23037;
var statearr_23047_23074 = state_23037__$1;
(statearr_23047_23074[(2)] = null);

(statearr_23047_23074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (2))){
var state_23037__$1 = state_23037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23037__$1,(4),ch);
} else {
if((state_val_23038 === (11))){
var inst_23014 = (state_23037[(7)]);
var inst_23024 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23037__$1,(8),inst_23024,inst_23014);
} else {
if((state_val_23038 === (9))){
var state_23037__$1 = state_23037;
var statearr_23048_23075 = state_23037__$1;
(statearr_23048_23075[(2)] = tc);

(statearr_23048_23075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (5))){
var inst_23017 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23018 = cljs.core.async.close_BANG_.call(null,fc);
var state_23037__$1 = (function (){var statearr_23049 = state_23037;
(statearr_23049[(8)] = inst_23017);

return statearr_23049;
})();
var statearr_23050_23076 = state_23037__$1;
(statearr_23050_23076[(2)] = inst_23018);

(statearr_23050_23076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (14))){
var inst_23031 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
var statearr_23051_23077 = state_23037__$1;
(statearr_23051_23077[(2)] = inst_23031);

(statearr_23051_23077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (10))){
var state_23037__$1 = state_23037;
var statearr_23052_23078 = state_23037__$1;
(statearr_23052_23078[(2)] = fc);

(statearr_23052_23078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23038 === (8))){
var inst_23026 = (state_23037[(2)]);
var state_23037__$1 = state_23037;
if(cljs.core.truth_(inst_23026)){
var statearr_23053_23079 = state_23037__$1;
(statearr_23053_23079[(1)] = (12));

} else {
var statearr_23054_23080 = state_23037__$1;
(statearr_23054_23080[(1)] = (13));

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
});})(c__22388__auto___23066,tc,fc))
;
return ((function (switch__22276__auto__,c__22388__auto___23066,tc,fc){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_23058 = [null,null,null,null,null,null,null,null,null];
(statearr_23058[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_23058[(1)] = (1));

return statearr_23058;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_23037){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_23037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e23059){if((e23059 instanceof Object)){
var ex__22280__auto__ = e23059;
var statearr_23060_23081 = state_23037;
(statearr_23060_23081[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23082 = state_23037;
state_23037 = G__23082;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_23037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_23037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___23066,tc,fc))
})();
var state__22390__auto__ = (function (){var statearr_23061 = f__22389__auto__.call(null);
(statearr_23061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___23066);

return statearr_23061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___23066,tc,fc))
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
var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__){
return (function (state_23146){
var state_val_23147 = (state_23146[(1)]);
if((state_val_23147 === (7))){
var inst_23142 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
var statearr_23148_23169 = state_23146__$1;
(statearr_23148_23169[(2)] = inst_23142);

(statearr_23148_23169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (1))){
var inst_23126 = init;
var state_23146__$1 = (function (){var statearr_23149 = state_23146;
(statearr_23149[(7)] = inst_23126);

return statearr_23149;
})();
var statearr_23150_23170 = state_23146__$1;
(statearr_23150_23170[(2)] = null);

(statearr_23150_23170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (4))){
var inst_23129 = (state_23146[(8)]);
var inst_23129__$1 = (state_23146[(2)]);
var inst_23130 = (inst_23129__$1 == null);
var state_23146__$1 = (function (){var statearr_23151 = state_23146;
(statearr_23151[(8)] = inst_23129__$1);

return statearr_23151;
})();
if(cljs.core.truth_(inst_23130)){
var statearr_23152_23171 = state_23146__$1;
(statearr_23152_23171[(1)] = (5));

} else {
var statearr_23153_23172 = state_23146__$1;
(statearr_23153_23172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (6))){
var inst_23133 = (state_23146[(9)]);
var inst_23129 = (state_23146[(8)]);
var inst_23126 = (state_23146[(7)]);
var inst_23133__$1 = f.call(null,inst_23126,inst_23129);
var inst_23134 = cljs.core.reduced_QMARK_.call(null,inst_23133__$1);
var state_23146__$1 = (function (){var statearr_23154 = state_23146;
(statearr_23154[(9)] = inst_23133__$1);

return statearr_23154;
})();
if(inst_23134){
var statearr_23155_23173 = state_23146__$1;
(statearr_23155_23173[(1)] = (8));

} else {
var statearr_23156_23174 = state_23146__$1;
(statearr_23156_23174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (3))){
var inst_23144 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23146__$1,inst_23144);
} else {
if((state_val_23147 === (2))){
var state_23146__$1 = state_23146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23146__$1,(4),ch);
} else {
if((state_val_23147 === (9))){
var inst_23133 = (state_23146[(9)]);
var inst_23126 = inst_23133;
var state_23146__$1 = (function (){var statearr_23157 = state_23146;
(statearr_23157[(7)] = inst_23126);

return statearr_23157;
})();
var statearr_23158_23175 = state_23146__$1;
(statearr_23158_23175[(2)] = null);

(statearr_23158_23175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (5))){
var inst_23126 = (state_23146[(7)]);
var state_23146__$1 = state_23146;
var statearr_23159_23176 = state_23146__$1;
(statearr_23159_23176[(2)] = inst_23126);

(statearr_23159_23176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (10))){
var inst_23140 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
var statearr_23160_23177 = state_23146__$1;
(statearr_23160_23177[(2)] = inst_23140);

(statearr_23160_23177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (8))){
var inst_23133 = (state_23146[(9)]);
var inst_23136 = cljs.core.deref.call(null,inst_23133);
var state_23146__$1 = state_23146;
var statearr_23161_23178 = state_23146__$1;
(statearr_23161_23178[(2)] = inst_23136);

(statearr_23161_23178[(1)] = (10));


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
});})(c__22388__auto__))
;
return ((function (switch__22276__auto__,c__22388__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22277__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22277__auto____0 = (function (){
var statearr_23165 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23165[(0)] = cljs$core$async$reduce_$_state_machine__22277__auto__);

(statearr_23165[(1)] = (1));

return statearr_23165;
});
var cljs$core$async$reduce_$_state_machine__22277__auto____1 = (function (state_23146){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_23146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e23166){if((e23166 instanceof Object)){
var ex__22280__auto__ = e23166;
var statearr_23167_23179 = state_23146;
(statearr_23167_23179[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23180 = state_23146;
state_23146 = G__23180;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22277__auto__ = function(state_23146){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22277__auto____1.call(this,state_23146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22277__auto____0;
cljs$core$async$reduce_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22277__auto____1;
return cljs$core$async$reduce_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__))
})();
var state__22390__auto__ = (function (){var statearr_23168 = f__22389__auto__.call(null);
(statearr_23168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_23168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__))
);

return c__22388__auto__;
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
var args23181 = [];
var len__20621__auto___23233 = arguments.length;
var i__20622__auto___23234 = (0);
while(true){
if((i__20622__auto___23234 < len__20621__auto___23233)){
args23181.push((arguments[i__20622__auto___23234]));

var G__23235 = (i__20622__auto___23234 + (1));
i__20622__auto___23234 = G__23235;
continue;
} else {
}
break;
}

var G__23183 = args23181.length;
switch (G__23183) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23181.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__){
return (function (state_23208){
var state_val_23209 = (state_23208[(1)]);
if((state_val_23209 === (7))){
var inst_23190 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23210_23237 = state_23208__$1;
(statearr_23210_23237[(2)] = inst_23190);

(statearr_23210_23237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (1))){
var inst_23184 = cljs.core.seq.call(null,coll);
var inst_23185 = inst_23184;
var state_23208__$1 = (function (){var statearr_23211 = state_23208;
(statearr_23211[(7)] = inst_23185);

return statearr_23211;
})();
var statearr_23212_23238 = state_23208__$1;
(statearr_23212_23238[(2)] = null);

(statearr_23212_23238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (4))){
var inst_23185 = (state_23208[(7)]);
var inst_23188 = cljs.core.first.call(null,inst_23185);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23208__$1,(7),ch,inst_23188);
} else {
if((state_val_23209 === (13))){
var inst_23202 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23213_23239 = state_23208__$1;
(statearr_23213_23239[(2)] = inst_23202);

(statearr_23213_23239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (6))){
var inst_23193 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
if(cljs.core.truth_(inst_23193)){
var statearr_23214_23240 = state_23208__$1;
(statearr_23214_23240[(1)] = (8));

} else {
var statearr_23215_23241 = state_23208__$1;
(statearr_23215_23241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (3))){
var inst_23206 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23208__$1,inst_23206);
} else {
if((state_val_23209 === (12))){
var state_23208__$1 = state_23208;
var statearr_23216_23242 = state_23208__$1;
(statearr_23216_23242[(2)] = null);

(statearr_23216_23242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (2))){
var inst_23185 = (state_23208[(7)]);
var state_23208__$1 = state_23208;
if(cljs.core.truth_(inst_23185)){
var statearr_23217_23243 = state_23208__$1;
(statearr_23217_23243[(1)] = (4));

} else {
var statearr_23218_23244 = state_23208__$1;
(statearr_23218_23244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (11))){
var inst_23199 = cljs.core.async.close_BANG_.call(null,ch);
var state_23208__$1 = state_23208;
var statearr_23219_23245 = state_23208__$1;
(statearr_23219_23245[(2)] = inst_23199);

(statearr_23219_23245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (9))){
var state_23208__$1 = state_23208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23220_23246 = state_23208__$1;
(statearr_23220_23246[(1)] = (11));

} else {
var statearr_23221_23247 = state_23208__$1;
(statearr_23221_23247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (5))){
var inst_23185 = (state_23208[(7)]);
var state_23208__$1 = state_23208;
var statearr_23222_23248 = state_23208__$1;
(statearr_23222_23248[(2)] = inst_23185);

(statearr_23222_23248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (10))){
var inst_23204 = (state_23208[(2)]);
var state_23208__$1 = state_23208;
var statearr_23223_23249 = state_23208__$1;
(statearr_23223_23249[(2)] = inst_23204);

(statearr_23223_23249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23209 === (8))){
var inst_23185 = (state_23208[(7)]);
var inst_23195 = cljs.core.next.call(null,inst_23185);
var inst_23185__$1 = inst_23195;
var state_23208__$1 = (function (){var statearr_23224 = state_23208;
(statearr_23224[(7)] = inst_23185__$1);

return statearr_23224;
})();
var statearr_23225_23250 = state_23208__$1;
(statearr_23225_23250[(2)] = null);

(statearr_23225_23250[(1)] = (2));


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
});})(c__22388__auto__))
;
return ((function (switch__22276__auto__,c__22388__auto__){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_23229 = [null,null,null,null,null,null,null,null];
(statearr_23229[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_23229[(1)] = (1));

return statearr_23229;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_23208){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_23208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e23230){if((e23230 instanceof Object)){
var ex__22280__auto__ = e23230;
var statearr_23231_23251 = state_23208;
(statearr_23231_23251[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23252 = state_23208;
state_23208 = G__23252;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_23208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_23208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__))
})();
var state__22390__auto__ = (function (){var statearr_23232 = f__22389__auto__.call(null);
(statearr_23232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_23232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__))
);

return c__22388__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20218__auto__ = (((_ == null))?null:_);
var m__20219__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,_);
} else {
var m__20219__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20219__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m,ch);
} else {
var m__20219__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m);
} else {
var m__20219__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23474 = (function (mult,ch,cs,meta23475){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23475 = meta23475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23476,meta23475__$1){
var self__ = this;
var _23476__$1 = this;
return (new cljs.core.async.t_cljs$core$async23474(self__.mult,self__.ch,self__.cs,meta23475__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23476){
var self__ = this;
var _23476__$1 = this;
return self__.meta23475;
});})(cs))
;

cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23474.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23474.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23475","meta23475",572731194,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23474";

cljs.core.async.t_cljs$core$async23474.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async23474");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23474 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23474(mult__$1,ch__$1,cs__$1,meta23475){
return (new cljs.core.async.t_cljs$core$async23474(mult__$1,ch__$1,cs__$1,meta23475));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23474(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22388__auto___23695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___23695,cs,m,dchan,dctr,done){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___23695,cs,m,dchan,dctr,done){
return (function (state_23607){
var state_val_23608 = (state_23607[(1)]);
if((state_val_23608 === (7))){
var inst_23603 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23609_23696 = state_23607__$1;
(statearr_23609_23696[(2)] = inst_23603);

(statearr_23609_23696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (20))){
var inst_23508 = (state_23607[(7)]);
var inst_23518 = cljs.core.first.call(null,inst_23508);
var inst_23519 = cljs.core.nth.call(null,inst_23518,(0),null);
var inst_23520 = cljs.core.nth.call(null,inst_23518,(1),null);
var state_23607__$1 = (function (){var statearr_23610 = state_23607;
(statearr_23610[(8)] = inst_23519);

return statearr_23610;
})();
if(cljs.core.truth_(inst_23520)){
var statearr_23611_23697 = state_23607__$1;
(statearr_23611_23697[(1)] = (22));

} else {
var statearr_23612_23698 = state_23607__$1;
(statearr_23612_23698[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (27))){
var inst_23555 = (state_23607[(9)]);
var inst_23479 = (state_23607[(10)]);
var inst_23550 = (state_23607[(11)]);
var inst_23548 = (state_23607[(12)]);
var inst_23555__$1 = cljs.core._nth.call(null,inst_23548,inst_23550);
var inst_23556 = cljs.core.async.put_BANG_.call(null,inst_23555__$1,inst_23479,done);
var state_23607__$1 = (function (){var statearr_23613 = state_23607;
(statearr_23613[(9)] = inst_23555__$1);

return statearr_23613;
})();
if(cljs.core.truth_(inst_23556)){
var statearr_23614_23699 = state_23607__$1;
(statearr_23614_23699[(1)] = (30));

} else {
var statearr_23615_23700 = state_23607__$1;
(statearr_23615_23700[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (1))){
var state_23607__$1 = state_23607;
var statearr_23616_23701 = state_23607__$1;
(statearr_23616_23701[(2)] = null);

(statearr_23616_23701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (24))){
var inst_23508 = (state_23607[(7)]);
var inst_23525 = (state_23607[(2)]);
var inst_23526 = cljs.core.next.call(null,inst_23508);
var inst_23488 = inst_23526;
var inst_23489 = null;
var inst_23490 = (0);
var inst_23491 = (0);
var state_23607__$1 = (function (){var statearr_23617 = state_23607;
(statearr_23617[(13)] = inst_23491);

(statearr_23617[(14)] = inst_23489);

(statearr_23617[(15)] = inst_23488);

(statearr_23617[(16)] = inst_23525);

(statearr_23617[(17)] = inst_23490);

return statearr_23617;
})();
var statearr_23618_23702 = state_23607__$1;
(statearr_23618_23702[(2)] = null);

(statearr_23618_23702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (39))){
var state_23607__$1 = state_23607;
var statearr_23622_23703 = state_23607__$1;
(statearr_23622_23703[(2)] = null);

(statearr_23622_23703[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (4))){
var inst_23479 = (state_23607[(10)]);
var inst_23479__$1 = (state_23607[(2)]);
var inst_23480 = (inst_23479__$1 == null);
var state_23607__$1 = (function (){var statearr_23623 = state_23607;
(statearr_23623[(10)] = inst_23479__$1);

return statearr_23623;
})();
if(cljs.core.truth_(inst_23480)){
var statearr_23624_23704 = state_23607__$1;
(statearr_23624_23704[(1)] = (5));

} else {
var statearr_23625_23705 = state_23607__$1;
(statearr_23625_23705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (15))){
var inst_23491 = (state_23607[(13)]);
var inst_23489 = (state_23607[(14)]);
var inst_23488 = (state_23607[(15)]);
var inst_23490 = (state_23607[(17)]);
var inst_23504 = (state_23607[(2)]);
var inst_23505 = (inst_23491 + (1));
var tmp23619 = inst_23489;
var tmp23620 = inst_23488;
var tmp23621 = inst_23490;
var inst_23488__$1 = tmp23620;
var inst_23489__$1 = tmp23619;
var inst_23490__$1 = tmp23621;
var inst_23491__$1 = inst_23505;
var state_23607__$1 = (function (){var statearr_23626 = state_23607;
(statearr_23626[(13)] = inst_23491__$1);

(statearr_23626[(14)] = inst_23489__$1);

(statearr_23626[(15)] = inst_23488__$1);

(statearr_23626[(17)] = inst_23490__$1);

(statearr_23626[(18)] = inst_23504);

return statearr_23626;
})();
var statearr_23627_23706 = state_23607__$1;
(statearr_23627_23706[(2)] = null);

(statearr_23627_23706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (21))){
var inst_23529 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23631_23707 = state_23607__$1;
(statearr_23631_23707[(2)] = inst_23529);

(statearr_23631_23707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (31))){
var inst_23555 = (state_23607[(9)]);
var inst_23559 = done.call(null,null);
var inst_23560 = cljs.core.async.untap_STAR_.call(null,m,inst_23555);
var state_23607__$1 = (function (){var statearr_23632 = state_23607;
(statearr_23632[(19)] = inst_23559);

return statearr_23632;
})();
var statearr_23633_23708 = state_23607__$1;
(statearr_23633_23708[(2)] = inst_23560);

(statearr_23633_23708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (32))){
var inst_23547 = (state_23607[(20)]);
var inst_23549 = (state_23607[(21)]);
var inst_23550 = (state_23607[(11)]);
var inst_23548 = (state_23607[(12)]);
var inst_23562 = (state_23607[(2)]);
var inst_23563 = (inst_23550 + (1));
var tmp23628 = inst_23547;
var tmp23629 = inst_23549;
var tmp23630 = inst_23548;
var inst_23547__$1 = tmp23628;
var inst_23548__$1 = tmp23630;
var inst_23549__$1 = tmp23629;
var inst_23550__$1 = inst_23563;
var state_23607__$1 = (function (){var statearr_23634 = state_23607;
(statearr_23634[(22)] = inst_23562);

(statearr_23634[(20)] = inst_23547__$1);

(statearr_23634[(21)] = inst_23549__$1);

(statearr_23634[(11)] = inst_23550__$1);

(statearr_23634[(12)] = inst_23548__$1);

return statearr_23634;
})();
var statearr_23635_23709 = state_23607__$1;
(statearr_23635_23709[(2)] = null);

(statearr_23635_23709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (40))){
var inst_23575 = (state_23607[(23)]);
var inst_23579 = done.call(null,null);
var inst_23580 = cljs.core.async.untap_STAR_.call(null,m,inst_23575);
var state_23607__$1 = (function (){var statearr_23636 = state_23607;
(statearr_23636[(24)] = inst_23579);

return statearr_23636;
})();
var statearr_23637_23710 = state_23607__$1;
(statearr_23637_23710[(2)] = inst_23580);

(statearr_23637_23710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (33))){
var inst_23566 = (state_23607[(25)]);
var inst_23568 = cljs.core.chunked_seq_QMARK_.call(null,inst_23566);
var state_23607__$1 = state_23607;
if(inst_23568){
var statearr_23638_23711 = state_23607__$1;
(statearr_23638_23711[(1)] = (36));

} else {
var statearr_23639_23712 = state_23607__$1;
(statearr_23639_23712[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (13))){
var inst_23498 = (state_23607[(26)]);
var inst_23501 = cljs.core.async.close_BANG_.call(null,inst_23498);
var state_23607__$1 = state_23607;
var statearr_23640_23713 = state_23607__$1;
(statearr_23640_23713[(2)] = inst_23501);

(statearr_23640_23713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (22))){
var inst_23519 = (state_23607[(8)]);
var inst_23522 = cljs.core.async.close_BANG_.call(null,inst_23519);
var state_23607__$1 = state_23607;
var statearr_23641_23714 = state_23607__$1;
(statearr_23641_23714[(2)] = inst_23522);

(statearr_23641_23714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (36))){
var inst_23566 = (state_23607[(25)]);
var inst_23570 = cljs.core.chunk_first.call(null,inst_23566);
var inst_23571 = cljs.core.chunk_rest.call(null,inst_23566);
var inst_23572 = cljs.core.count.call(null,inst_23570);
var inst_23547 = inst_23571;
var inst_23548 = inst_23570;
var inst_23549 = inst_23572;
var inst_23550 = (0);
var state_23607__$1 = (function (){var statearr_23642 = state_23607;
(statearr_23642[(20)] = inst_23547);

(statearr_23642[(21)] = inst_23549);

(statearr_23642[(11)] = inst_23550);

(statearr_23642[(12)] = inst_23548);

return statearr_23642;
})();
var statearr_23643_23715 = state_23607__$1;
(statearr_23643_23715[(2)] = null);

(statearr_23643_23715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (41))){
var inst_23566 = (state_23607[(25)]);
var inst_23582 = (state_23607[(2)]);
var inst_23583 = cljs.core.next.call(null,inst_23566);
var inst_23547 = inst_23583;
var inst_23548 = null;
var inst_23549 = (0);
var inst_23550 = (0);
var state_23607__$1 = (function (){var statearr_23644 = state_23607;
(statearr_23644[(20)] = inst_23547);

(statearr_23644[(27)] = inst_23582);

(statearr_23644[(21)] = inst_23549);

(statearr_23644[(11)] = inst_23550);

(statearr_23644[(12)] = inst_23548);

return statearr_23644;
})();
var statearr_23645_23716 = state_23607__$1;
(statearr_23645_23716[(2)] = null);

(statearr_23645_23716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (43))){
var state_23607__$1 = state_23607;
var statearr_23646_23717 = state_23607__$1;
(statearr_23646_23717[(2)] = null);

(statearr_23646_23717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (29))){
var inst_23591 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23647_23718 = state_23607__$1;
(statearr_23647_23718[(2)] = inst_23591);

(statearr_23647_23718[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (44))){
var inst_23600 = (state_23607[(2)]);
var state_23607__$1 = (function (){var statearr_23648 = state_23607;
(statearr_23648[(28)] = inst_23600);

return statearr_23648;
})();
var statearr_23649_23719 = state_23607__$1;
(statearr_23649_23719[(2)] = null);

(statearr_23649_23719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (6))){
var inst_23539 = (state_23607[(29)]);
var inst_23538 = cljs.core.deref.call(null,cs);
var inst_23539__$1 = cljs.core.keys.call(null,inst_23538);
var inst_23540 = cljs.core.count.call(null,inst_23539__$1);
var inst_23541 = cljs.core.reset_BANG_.call(null,dctr,inst_23540);
var inst_23546 = cljs.core.seq.call(null,inst_23539__$1);
var inst_23547 = inst_23546;
var inst_23548 = null;
var inst_23549 = (0);
var inst_23550 = (0);
var state_23607__$1 = (function (){var statearr_23650 = state_23607;
(statearr_23650[(20)] = inst_23547);

(statearr_23650[(30)] = inst_23541);

(statearr_23650[(21)] = inst_23549);

(statearr_23650[(29)] = inst_23539__$1);

(statearr_23650[(11)] = inst_23550);

(statearr_23650[(12)] = inst_23548);

return statearr_23650;
})();
var statearr_23651_23720 = state_23607__$1;
(statearr_23651_23720[(2)] = null);

(statearr_23651_23720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (28))){
var inst_23566 = (state_23607[(25)]);
var inst_23547 = (state_23607[(20)]);
var inst_23566__$1 = cljs.core.seq.call(null,inst_23547);
var state_23607__$1 = (function (){var statearr_23652 = state_23607;
(statearr_23652[(25)] = inst_23566__$1);

return statearr_23652;
})();
if(inst_23566__$1){
var statearr_23653_23721 = state_23607__$1;
(statearr_23653_23721[(1)] = (33));

} else {
var statearr_23654_23722 = state_23607__$1;
(statearr_23654_23722[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (25))){
var inst_23549 = (state_23607[(21)]);
var inst_23550 = (state_23607[(11)]);
var inst_23552 = (inst_23550 < inst_23549);
var inst_23553 = inst_23552;
var state_23607__$1 = state_23607;
if(cljs.core.truth_(inst_23553)){
var statearr_23655_23723 = state_23607__$1;
(statearr_23655_23723[(1)] = (27));

} else {
var statearr_23656_23724 = state_23607__$1;
(statearr_23656_23724[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (34))){
var state_23607__$1 = state_23607;
var statearr_23657_23725 = state_23607__$1;
(statearr_23657_23725[(2)] = null);

(statearr_23657_23725[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (17))){
var state_23607__$1 = state_23607;
var statearr_23658_23726 = state_23607__$1;
(statearr_23658_23726[(2)] = null);

(statearr_23658_23726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (3))){
var inst_23605 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23607__$1,inst_23605);
} else {
if((state_val_23608 === (12))){
var inst_23534 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23659_23727 = state_23607__$1;
(statearr_23659_23727[(2)] = inst_23534);

(statearr_23659_23727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (2))){
var state_23607__$1 = state_23607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23607__$1,(4),ch);
} else {
if((state_val_23608 === (23))){
var state_23607__$1 = state_23607;
var statearr_23660_23728 = state_23607__$1;
(statearr_23660_23728[(2)] = null);

(statearr_23660_23728[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (35))){
var inst_23589 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23661_23729 = state_23607__$1;
(statearr_23661_23729[(2)] = inst_23589);

(statearr_23661_23729[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (19))){
var inst_23508 = (state_23607[(7)]);
var inst_23512 = cljs.core.chunk_first.call(null,inst_23508);
var inst_23513 = cljs.core.chunk_rest.call(null,inst_23508);
var inst_23514 = cljs.core.count.call(null,inst_23512);
var inst_23488 = inst_23513;
var inst_23489 = inst_23512;
var inst_23490 = inst_23514;
var inst_23491 = (0);
var state_23607__$1 = (function (){var statearr_23662 = state_23607;
(statearr_23662[(13)] = inst_23491);

(statearr_23662[(14)] = inst_23489);

(statearr_23662[(15)] = inst_23488);

(statearr_23662[(17)] = inst_23490);

return statearr_23662;
})();
var statearr_23663_23730 = state_23607__$1;
(statearr_23663_23730[(2)] = null);

(statearr_23663_23730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (11))){
var inst_23488 = (state_23607[(15)]);
var inst_23508 = (state_23607[(7)]);
var inst_23508__$1 = cljs.core.seq.call(null,inst_23488);
var state_23607__$1 = (function (){var statearr_23664 = state_23607;
(statearr_23664[(7)] = inst_23508__$1);

return statearr_23664;
})();
if(inst_23508__$1){
var statearr_23665_23731 = state_23607__$1;
(statearr_23665_23731[(1)] = (16));

} else {
var statearr_23666_23732 = state_23607__$1;
(statearr_23666_23732[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (9))){
var inst_23536 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23667_23733 = state_23607__$1;
(statearr_23667_23733[(2)] = inst_23536);

(statearr_23667_23733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (5))){
var inst_23486 = cljs.core.deref.call(null,cs);
var inst_23487 = cljs.core.seq.call(null,inst_23486);
var inst_23488 = inst_23487;
var inst_23489 = null;
var inst_23490 = (0);
var inst_23491 = (0);
var state_23607__$1 = (function (){var statearr_23668 = state_23607;
(statearr_23668[(13)] = inst_23491);

(statearr_23668[(14)] = inst_23489);

(statearr_23668[(15)] = inst_23488);

(statearr_23668[(17)] = inst_23490);

return statearr_23668;
})();
var statearr_23669_23734 = state_23607__$1;
(statearr_23669_23734[(2)] = null);

(statearr_23669_23734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (14))){
var state_23607__$1 = state_23607;
var statearr_23670_23735 = state_23607__$1;
(statearr_23670_23735[(2)] = null);

(statearr_23670_23735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (45))){
var inst_23597 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23671_23736 = state_23607__$1;
(statearr_23671_23736[(2)] = inst_23597);

(statearr_23671_23736[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (26))){
var inst_23539 = (state_23607[(29)]);
var inst_23593 = (state_23607[(2)]);
var inst_23594 = cljs.core.seq.call(null,inst_23539);
var state_23607__$1 = (function (){var statearr_23672 = state_23607;
(statearr_23672[(31)] = inst_23593);

return statearr_23672;
})();
if(inst_23594){
var statearr_23673_23737 = state_23607__$1;
(statearr_23673_23737[(1)] = (42));

} else {
var statearr_23674_23738 = state_23607__$1;
(statearr_23674_23738[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (16))){
var inst_23508 = (state_23607[(7)]);
var inst_23510 = cljs.core.chunked_seq_QMARK_.call(null,inst_23508);
var state_23607__$1 = state_23607;
if(inst_23510){
var statearr_23675_23739 = state_23607__$1;
(statearr_23675_23739[(1)] = (19));

} else {
var statearr_23676_23740 = state_23607__$1;
(statearr_23676_23740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (38))){
var inst_23586 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23677_23741 = state_23607__$1;
(statearr_23677_23741[(2)] = inst_23586);

(statearr_23677_23741[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (30))){
var state_23607__$1 = state_23607;
var statearr_23678_23742 = state_23607__$1;
(statearr_23678_23742[(2)] = null);

(statearr_23678_23742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (10))){
var inst_23491 = (state_23607[(13)]);
var inst_23489 = (state_23607[(14)]);
var inst_23497 = cljs.core._nth.call(null,inst_23489,inst_23491);
var inst_23498 = cljs.core.nth.call(null,inst_23497,(0),null);
var inst_23499 = cljs.core.nth.call(null,inst_23497,(1),null);
var state_23607__$1 = (function (){var statearr_23679 = state_23607;
(statearr_23679[(26)] = inst_23498);

return statearr_23679;
})();
if(cljs.core.truth_(inst_23499)){
var statearr_23680_23743 = state_23607__$1;
(statearr_23680_23743[(1)] = (13));

} else {
var statearr_23681_23744 = state_23607__$1;
(statearr_23681_23744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (18))){
var inst_23532 = (state_23607[(2)]);
var state_23607__$1 = state_23607;
var statearr_23682_23745 = state_23607__$1;
(statearr_23682_23745[(2)] = inst_23532);

(statearr_23682_23745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (42))){
var state_23607__$1 = state_23607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23607__$1,(45),dchan);
} else {
if((state_val_23608 === (37))){
var inst_23566 = (state_23607[(25)]);
var inst_23479 = (state_23607[(10)]);
var inst_23575 = (state_23607[(23)]);
var inst_23575__$1 = cljs.core.first.call(null,inst_23566);
var inst_23576 = cljs.core.async.put_BANG_.call(null,inst_23575__$1,inst_23479,done);
var state_23607__$1 = (function (){var statearr_23683 = state_23607;
(statearr_23683[(23)] = inst_23575__$1);

return statearr_23683;
})();
if(cljs.core.truth_(inst_23576)){
var statearr_23684_23746 = state_23607__$1;
(statearr_23684_23746[(1)] = (39));

} else {
var statearr_23685_23747 = state_23607__$1;
(statearr_23685_23747[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23608 === (8))){
var inst_23491 = (state_23607[(13)]);
var inst_23490 = (state_23607[(17)]);
var inst_23493 = (inst_23491 < inst_23490);
var inst_23494 = inst_23493;
var state_23607__$1 = state_23607;
if(cljs.core.truth_(inst_23494)){
var statearr_23686_23748 = state_23607__$1;
(statearr_23686_23748[(1)] = (10));

} else {
var statearr_23687_23749 = state_23607__$1;
(statearr_23687_23749[(1)] = (11));

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
});})(c__22388__auto___23695,cs,m,dchan,dctr,done))
;
return ((function (switch__22276__auto__,c__22388__auto___23695,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22277__auto__ = null;
var cljs$core$async$mult_$_state_machine__22277__auto____0 = (function (){
var statearr_23691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23691[(0)] = cljs$core$async$mult_$_state_machine__22277__auto__);

(statearr_23691[(1)] = (1));

return statearr_23691;
});
var cljs$core$async$mult_$_state_machine__22277__auto____1 = (function (state_23607){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_23607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e23692){if((e23692 instanceof Object)){
var ex__22280__auto__ = e23692;
var statearr_23693_23750 = state_23607;
(statearr_23693_23750[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23751 = state_23607;
state_23607 = G__23751;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22277__auto__ = function(state_23607){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22277__auto____1.call(this,state_23607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22277__auto____0;
cljs$core$async$mult_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22277__auto____1;
return cljs$core$async$mult_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___23695,cs,m,dchan,dctr,done))
})();
var state__22390__auto__ = (function (){var statearr_23694 = f__22389__auto__.call(null);
(statearr_23694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___23695);

return statearr_23694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___23695,cs,m,dchan,dctr,done))
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
var args23752 = [];
var len__20621__auto___23755 = arguments.length;
var i__20622__auto___23756 = (0);
while(true){
if((i__20622__auto___23756 < len__20621__auto___23755)){
args23752.push((arguments[i__20622__auto___23756]));

var G__23757 = (i__20622__auto___23756 + (1));
i__20622__auto___23756 = G__23757;
continue;
} else {
}
break;
}

var G__23754 = args23752.length;
switch (G__23754) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23752.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m,ch);
} else {
var m__20219__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m,ch);
} else {
var m__20219__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m);
} else {
var m__20219__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m,state_map);
} else {
var m__20219__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20218__auto__ = (((m == null))?null:m);
var m__20219__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,m,mode);
} else {
var m__20219__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20628__auto__ = [];
var len__20621__auto___23769 = arguments.length;
var i__20622__auto___23770 = (0);
while(true){
if((i__20622__auto___23770 < len__20621__auto___23769)){
args__20628__auto__.push((arguments[i__20622__auto___23770]));

var G__23771 = (i__20622__auto___23770 + (1));
i__20622__auto___23770 = G__23771;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((3) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20629__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23763){
var map__23764 = p__23763;
var map__23764__$1 = ((((!((map__23764 == null)))?((((map__23764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23764):map__23764);
var opts = map__23764__$1;
var statearr_23766_23772 = state;
(statearr_23766_23772[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23764,map__23764__$1,opts){
return (function (val){
var statearr_23767_23773 = state;
(statearr_23767_23773[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23764,map__23764__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23768_23774 = state;
(statearr_23768_23774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23759){
var G__23760 = cljs.core.first.call(null,seq23759);
var seq23759__$1 = cljs.core.next.call(null,seq23759);
var G__23761 = cljs.core.first.call(null,seq23759__$1);
var seq23759__$2 = cljs.core.next.call(null,seq23759__$1);
var G__23762 = cljs.core.first.call(null,seq23759__$2);
var seq23759__$3 = cljs.core.next.call(null,seq23759__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23760,G__23761,G__23762,seq23759__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23938 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23939){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23939 = meta23939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23940,meta23939__$1){
var self__ = this;
var _23940__$1 = this;
return (new cljs.core.async.t_cljs$core$async23938(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23939__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23940){
var self__ = this;
var _23940__$1 = this;
return self__.meta23939;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23939","meta23939",-752872076,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23938";

cljs.core.async.t_cljs$core$async23938.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async23938");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23938 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23939){
return (new cljs.core.async.t_cljs$core$async23938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23939));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23938(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22388__auto___24101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___24101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___24101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24038){
var state_val_24039 = (state_24038[(1)]);
if((state_val_24039 === (7))){
var inst_23956 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24040_24102 = state_24038__$1;
(statearr_24040_24102[(2)] = inst_23956);

(statearr_24040_24102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (20))){
var inst_23968 = (state_24038[(7)]);
var state_24038__$1 = state_24038;
var statearr_24041_24103 = state_24038__$1;
(statearr_24041_24103[(2)] = inst_23968);

(statearr_24041_24103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (27))){
var state_24038__$1 = state_24038;
var statearr_24042_24104 = state_24038__$1;
(statearr_24042_24104[(2)] = null);

(statearr_24042_24104[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (1))){
var inst_23944 = (state_24038[(8)]);
var inst_23944__$1 = calc_state.call(null);
var inst_23946 = (inst_23944__$1 == null);
var inst_23947 = cljs.core.not.call(null,inst_23946);
var state_24038__$1 = (function (){var statearr_24043 = state_24038;
(statearr_24043[(8)] = inst_23944__$1);

return statearr_24043;
})();
if(inst_23947){
var statearr_24044_24105 = state_24038__$1;
(statearr_24044_24105[(1)] = (2));

} else {
var statearr_24045_24106 = state_24038__$1;
(statearr_24045_24106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (24))){
var inst_24012 = (state_24038[(9)]);
var inst_23998 = (state_24038[(10)]);
var inst_23991 = (state_24038[(11)]);
var inst_24012__$1 = inst_23991.call(null,inst_23998);
var state_24038__$1 = (function (){var statearr_24046 = state_24038;
(statearr_24046[(9)] = inst_24012__$1);

return statearr_24046;
})();
if(cljs.core.truth_(inst_24012__$1)){
var statearr_24047_24107 = state_24038__$1;
(statearr_24047_24107[(1)] = (29));

} else {
var statearr_24048_24108 = state_24038__$1;
(statearr_24048_24108[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (4))){
var inst_23959 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_23959)){
var statearr_24049_24109 = state_24038__$1;
(statearr_24049_24109[(1)] = (8));

} else {
var statearr_24050_24110 = state_24038__$1;
(statearr_24050_24110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (15))){
var inst_23985 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_23985)){
var statearr_24051_24111 = state_24038__$1;
(statearr_24051_24111[(1)] = (19));

} else {
var statearr_24052_24112 = state_24038__$1;
(statearr_24052_24112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (21))){
var inst_23990 = (state_24038[(12)]);
var inst_23990__$1 = (state_24038[(2)]);
var inst_23991 = cljs.core.get.call(null,inst_23990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23992 = cljs.core.get.call(null,inst_23990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23993 = cljs.core.get.call(null,inst_23990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24038__$1 = (function (){var statearr_24053 = state_24038;
(statearr_24053[(12)] = inst_23990__$1);

(statearr_24053[(11)] = inst_23991);

(statearr_24053[(13)] = inst_23992);

return statearr_24053;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24038__$1,(22),inst_23993);
} else {
if((state_val_24039 === (31))){
var inst_24020 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_24020)){
var statearr_24054_24113 = state_24038__$1;
(statearr_24054_24113[(1)] = (32));

} else {
var statearr_24055_24114 = state_24038__$1;
(statearr_24055_24114[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (32))){
var inst_23997 = (state_24038[(14)]);
var state_24038__$1 = state_24038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24038__$1,(35),out,inst_23997);
} else {
if((state_val_24039 === (33))){
var inst_23990 = (state_24038[(12)]);
var inst_23968 = inst_23990;
var state_24038__$1 = (function (){var statearr_24056 = state_24038;
(statearr_24056[(7)] = inst_23968);

return statearr_24056;
})();
var statearr_24057_24115 = state_24038__$1;
(statearr_24057_24115[(2)] = null);

(statearr_24057_24115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (13))){
var inst_23968 = (state_24038[(7)]);
var inst_23975 = inst_23968.cljs$lang$protocol_mask$partition0$;
var inst_23976 = (inst_23975 & (64));
var inst_23977 = inst_23968.cljs$core$ISeq$;
var inst_23978 = (inst_23976) || (inst_23977);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_23978)){
var statearr_24058_24116 = state_24038__$1;
(statearr_24058_24116[(1)] = (16));

} else {
var statearr_24059_24117 = state_24038__$1;
(statearr_24059_24117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (22))){
var inst_23998 = (state_24038[(10)]);
var inst_23997 = (state_24038[(14)]);
var inst_23996 = (state_24038[(2)]);
var inst_23997__$1 = cljs.core.nth.call(null,inst_23996,(0),null);
var inst_23998__$1 = cljs.core.nth.call(null,inst_23996,(1),null);
var inst_23999 = (inst_23997__$1 == null);
var inst_24000 = cljs.core._EQ_.call(null,inst_23998__$1,change);
var inst_24001 = (inst_23999) || (inst_24000);
var state_24038__$1 = (function (){var statearr_24060 = state_24038;
(statearr_24060[(10)] = inst_23998__$1);

(statearr_24060[(14)] = inst_23997__$1);

return statearr_24060;
})();
if(cljs.core.truth_(inst_24001)){
var statearr_24061_24118 = state_24038__$1;
(statearr_24061_24118[(1)] = (23));

} else {
var statearr_24062_24119 = state_24038__$1;
(statearr_24062_24119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (36))){
var inst_23990 = (state_24038[(12)]);
var inst_23968 = inst_23990;
var state_24038__$1 = (function (){var statearr_24063 = state_24038;
(statearr_24063[(7)] = inst_23968);

return statearr_24063;
})();
var statearr_24064_24120 = state_24038__$1;
(statearr_24064_24120[(2)] = null);

(statearr_24064_24120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (29))){
var inst_24012 = (state_24038[(9)]);
var state_24038__$1 = state_24038;
var statearr_24065_24121 = state_24038__$1;
(statearr_24065_24121[(2)] = inst_24012);

(statearr_24065_24121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (6))){
var state_24038__$1 = state_24038;
var statearr_24066_24122 = state_24038__$1;
(statearr_24066_24122[(2)] = false);

(statearr_24066_24122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (28))){
var inst_24008 = (state_24038[(2)]);
var inst_24009 = calc_state.call(null);
var inst_23968 = inst_24009;
var state_24038__$1 = (function (){var statearr_24067 = state_24038;
(statearr_24067[(15)] = inst_24008);

(statearr_24067[(7)] = inst_23968);

return statearr_24067;
})();
var statearr_24068_24123 = state_24038__$1;
(statearr_24068_24123[(2)] = null);

(statearr_24068_24123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (25))){
var inst_24034 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24069_24124 = state_24038__$1;
(statearr_24069_24124[(2)] = inst_24034);

(statearr_24069_24124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (34))){
var inst_24032 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24070_24125 = state_24038__$1;
(statearr_24070_24125[(2)] = inst_24032);

(statearr_24070_24125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (17))){
var state_24038__$1 = state_24038;
var statearr_24071_24126 = state_24038__$1;
(statearr_24071_24126[(2)] = false);

(statearr_24071_24126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (3))){
var state_24038__$1 = state_24038;
var statearr_24072_24127 = state_24038__$1;
(statearr_24072_24127[(2)] = false);

(statearr_24072_24127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (12))){
var inst_24036 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24038__$1,inst_24036);
} else {
if((state_val_24039 === (2))){
var inst_23944 = (state_24038[(8)]);
var inst_23949 = inst_23944.cljs$lang$protocol_mask$partition0$;
var inst_23950 = (inst_23949 & (64));
var inst_23951 = inst_23944.cljs$core$ISeq$;
var inst_23952 = (inst_23950) || (inst_23951);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_23952)){
var statearr_24073_24128 = state_24038__$1;
(statearr_24073_24128[(1)] = (5));

} else {
var statearr_24074_24129 = state_24038__$1;
(statearr_24074_24129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (23))){
var inst_23997 = (state_24038[(14)]);
var inst_24003 = (inst_23997 == null);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_24003)){
var statearr_24075_24130 = state_24038__$1;
(statearr_24075_24130[(1)] = (26));

} else {
var statearr_24076_24131 = state_24038__$1;
(statearr_24076_24131[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (35))){
var inst_24023 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_24023)){
var statearr_24077_24132 = state_24038__$1;
(statearr_24077_24132[(1)] = (36));

} else {
var statearr_24078_24133 = state_24038__$1;
(statearr_24078_24133[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (19))){
var inst_23968 = (state_24038[(7)]);
var inst_23987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23968);
var state_24038__$1 = state_24038;
var statearr_24079_24134 = state_24038__$1;
(statearr_24079_24134[(2)] = inst_23987);

(statearr_24079_24134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (11))){
var inst_23968 = (state_24038[(7)]);
var inst_23972 = (inst_23968 == null);
var inst_23973 = cljs.core.not.call(null,inst_23972);
var state_24038__$1 = state_24038;
if(inst_23973){
var statearr_24080_24135 = state_24038__$1;
(statearr_24080_24135[(1)] = (13));

} else {
var statearr_24081_24136 = state_24038__$1;
(statearr_24081_24136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (9))){
var inst_23944 = (state_24038[(8)]);
var state_24038__$1 = state_24038;
var statearr_24082_24137 = state_24038__$1;
(statearr_24082_24137[(2)] = inst_23944);

(statearr_24082_24137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (5))){
var state_24038__$1 = state_24038;
var statearr_24083_24138 = state_24038__$1;
(statearr_24083_24138[(2)] = true);

(statearr_24083_24138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (14))){
var state_24038__$1 = state_24038;
var statearr_24084_24139 = state_24038__$1;
(statearr_24084_24139[(2)] = false);

(statearr_24084_24139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (26))){
var inst_23998 = (state_24038[(10)]);
var inst_24005 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23998);
var state_24038__$1 = state_24038;
var statearr_24085_24140 = state_24038__$1;
(statearr_24085_24140[(2)] = inst_24005);

(statearr_24085_24140[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (16))){
var state_24038__$1 = state_24038;
var statearr_24086_24141 = state_24038__$1;
(statearr_24086_24141[(2)] = true);

(statearr_24086_24141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (38))){
var inst_24028 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24087_24142 = state_24038__$1;
(statearr_24087_24142[(2)] = inst_24028);

(statearr_24087_24142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (30))){
var inst_23998 = (state_24038[(10)]);
var inst_23991 = (state_24038[(11)]);
var inst_23992 = (state_24038[(13)]);
var inst_24015 = cljs.core.empty_QMARK_.call(null,inst_23991);
var inst_24016 = inst_23992.call(null,inst_23998);
var inst_24017 = cljs.core.not.call(null,inst_24016);
var inst_24018 = (inst_24015) && (inst_24017);
var state_24038__$1 = state_24038;
var statearr_24088_24143 = state_24038__$1;
(statearr_24088_24143[(2)] = inst_24018);

(statearr_24088_24143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (10))){
var inst_23944 = (state_24038[(8)]);
var inst_23964 = (state_24038[(2)]);
var inst_23965 = cljs.core.get.call(null,inst_23964,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23966 = cljs.core.get.call(null,inst_23964,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23967 = cljs.core.get.call(null,inst_23964,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23968 = inst_23944;
var state_24038__$1 = (function (){var statearr_24089 = state_24038;
(statearr_24089[(16)] = inst_23965);

(statearr_24089[(17)] = inst_23966);

(statearr_24089[(18)] = inst_23967);

(statearr_24089[(7)] = inst_23968);

return statearr_24089;
})();
var statearr_24090_24144 = state_24038__$1;
(statearr_24090_24144[(2)] = null);

(statearr_24090_24144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (18))){
var inst_23982 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24091_24145 = state_24038__$1;
(statearr_24091_24145[(2)] = inst_23982);

(statearr_24091_24145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (37))){
var state_24038__$1 = state_24038;
var statearr_24092_24146 = state_24038__$1;
(statearr_24092_24146[(2)] = null);

(statearr_24092_24146[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (8))){
var inst_23944 = (state_24038[(8)]);
var inst_23961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23944);
var state_24038__$1 = state_24038;
var statearr_24093_24147 = state_24038__$1;
(statearr_24093_24147[(2)] = inst_23961);

(statearr_24093_24147[(1)] = (10));


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
});})(c__22388__auto___24101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22276__auto__,c__22388__auto___24101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22277__auto__ = null;
var cljs$core$async$mix_$_state_machine__22277__auto____0 = (function (){
var statearr_24097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24097[(0)] = cljs$core$async$mix_$_state_machine__22277__auto__);

(statearr_24097[(1)] = (1));

return statearr_24097;
});
var cljs$core$async$mix_$_state_machine__22277__auto____1 = (function (state_24038){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24098){if((e24098 instanceof Object)){
var ex__22280__auto__ = e24098;
var statearr_24099_24148 = state_24038;
(statearr_24099_24148[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24149 = state_24038;
state_24038 = G__24149;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22277__auto__ = function(state_24038){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22277__auto____1.call(this,state_24038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22277__auto____0;
cljs$core$async$mix_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22277__auto____1;
return cljs$core$async$mix_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___24101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22390__auto__ = (function (){var statearr_24100 = f__22389__auto__.call(null);
(statearr_24100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___24101);

return statearr_24100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___24101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20218__auto__ = (((p == null))?null:p);
var m__20219__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20219__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20218__auto__ = (((p == null))?null:p);
var m__20219__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,p,v,ch);
} else {
var m__20219__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24150 = [];
var len__20621__auto___24153 = arguments.length;
var i__20622__auto___24154 = (0);
while(true){
if((i__20622__auto___24154 < len__20621__auto___24153)){
args24150.push((arguments[i__20622__auto___24154]));

var G__24155 = (i__20622__auto___24154 + (1));
i__20622__auto___24154 = G__24155;
continue;
} else {
}
break;
}

var G__24152 = args24150.length;
switch (G__24152) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24150.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20218__auto__ = (((p == null))?null:p);
var m__20219__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,p);
} else {
var m__20219__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20218__auto__ = (((p == null))?null:p);
var m__20219__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20218__auto__)]);
if(!((m__20219__auto__ == null))){
return m__20219__auto__.call(null,p,v);
} else {
var m__20219__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20219__auto____$1 == null))){
return m__20219__auto____$1.call(null,p,v);
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
var args24158 = [];
var len__20621__auto___24283 = arguments.length;
var i__20622__auto___24284 = (0);
while(true){
if((i__20622__auto___24284 < len__20621__auto___24283)){
args24158.push((arguments[i__20622__auto___24284]));

var G__24285 = (i__20622__auto___24284 + (1));
i__20622__auto___24284 = G__24285;
continue;
} else {
}
break;
}

var G__24160 = args24158.length;
switch (G__24160) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24158.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19563__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19563__auto__,mults){
return (function (p1__24157_SHARP_){
if(cljs.core.truth_(p1__24157_SHARP_.call(null,topic))){
return p1__24157_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24157_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19563__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24161 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24162){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24162 = meta24162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24163,meta24162__$1){
var self__ = this;
var _24163__$1 = this;
return (new cljs.core.async.t_cljs$core$async24161(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24162__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24163){
var self__ = this;
var _24163__$1 = this;
return self__.meta24162;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24162","meta24162",373655536,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24161";

cljs.core.async.t_cljs$core$async24161.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async24161");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24161 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24161(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24162){
return (new cljs.core.async.t_cljs$core$async24161(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24162));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24161(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22388__auto___24287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___24287,mults,ensure_mult,p){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___24287,mults,ensure_mult,p){
return (function (state_24235){
var state_val_24236 = (state_24235[(1)]);
if((state_val_24236 === (7))){
var inst_24231 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24237_24288 = state_24235__$1;
(statearr_24237_24288[(2)] = inst_24231);

(statearr_24237_24288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (20))){
var state_24235__$1 = state_24235;
var statearr_24238_24289 = state_24235__$1;
(statearr_24238_24289[(2)] = null);

(statearr_24238_24289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (1))){
var state_24235__$1 = state_24235;
var statearr_24239_24290 = state_24235__$1;
(statearr_24239_24290[(2)] = null);

(statearr_24239_24290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (24))){
var inst_24214 = (state_24235[(7)]);
var inst_24223 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24214);
var state_24235__$1 = state_24235;
var statearr_24240_24291 = state_24235__$1;
(statearr_24240_24291[(2)] = inst_24223);

(statearr_24240_24291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (4))){
var inst_24166 = (state_24235[(8)]);
var inst_24166__$1 = (state_24235[(2)]);
var inst_24167 = (inst_24166__$1 == null);
var state_24235__$1 = (function (){var statearr_24241 = state_24235;
(statearr_24241[(8)] = inst_24166__$1);

return statearr_24241;
})();
if(cljs.core.truth_(inst_24167)){
var statearr_24242_24292 = state_24235__$1;
(statearr_24242_24292[(1)] = (5));

} else {
var statearr_24243_24293 = state_24235__$1;
(statearr_24243_24293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (15))){
var inst_24208 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24244_24294 = state_24235__$1;
(statearr_24244_24294[(2)] = inst_24208);

(statearr_24244_24294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (21))){
var inst_24228 = (state_24235[(2)]);
var state_24235__$1 = (function (){var statearr_24245 = state_24235;
(statearr_24245[(9)] = inst_24228);

return statearr_24245;
})();
var statearr_24246_24295 = state_24235__$1;
(statearr_24246_24295[(2)] = null);

(statearr_24246_24295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (13))){
var inst_24190 = (state_24235[(10)]);
var inst_24192 = cljs.core.chunked_seq_QMARK_.call(null,inst_24190);
var state_24235__$1 = state_24235;
if(inst_24192){
var statearr_24247_24296 = state_24235__$1;
(statearr_24247_24296[(1)] = (16));

} else {
var statearr_24248_24297 = state_24235__$1;
(statearr_24248_24297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (22))){
var inst_24220 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
if(cljs.core.truth_(inst_24220)){
var statearr_24249_24298 = state_24235__$1;
(statearr_24249_24298[(1)] = (23));

} else {
var statearr_24250_24299 = state_24235__$1;
(statearr_24250_24299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (6))){
var inst_24216 = (state_24235[(11)]);
var inst_24166 = (state_24235[(8)]);
var inst_24214 = (state_24235[(7)]);
var inst_24214__$1 = topic_fn.call(null,inst_24166);
var inst_24215 = cljs.core.deref.call(null,mults);
var inst_24216__$1 = cljs.core.get.call(null,inst_24215,inst_24214__$1);
var state_24235__$1 = (function (){var statearr_24251 = state_24235;
(statearr_24251[(11)] = inst_24216__$1);

(statearr_24251[(7)] = inst_24214__$1);

return statearr_24251;
})();
if(cljs.core.truth_(inst_24216__$1)){
var statearr_24252_24300 = state_24235__$1;
(statearr_24252_24300[(1)] = (19));

} else {
var statearr_24253_24301 = state_24235__$1;
(statearr_24253_24301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (25))){
var inst_24225 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24254_24302 = state_24235__$1;
(statearr_24254_24302[(2)] = inst_24225);

(statearr_24254_24302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (17))){
var inst_24190 = (state_24235[(10)]);
var inst_24199 = cljs.core.first.call(null,inst_24190);
var inst_24200 = cljs.core.async.muxch_STAR_.call(null,inst_24199);
var inst_24201 = cljs.core.async.close_BANG_.call(null,inst_24200);
var inst_24202 = cljs.core.next.call(null,inst_24190);
var inst_24176 = inst_24202;
var inst_24177 = null;
var inst_24178 = (0);
var inst_24179 = (0);
var state_24235__$1 = (function (){var statearr_24255 = state_24235;
(statearr_24255[(12)] = inst_24177);

(statearr_24255[(13)] = inst_24176);

(statearr_24255[(14)] = inst_24201);

(statearr_24255[(15)] = inst_24179);

(statearr_24255[(16)] = inst_24178);

return statearr_24255;
})();
var statearr_24256_24303 = state_24235__$1;
(statearr_24256_24303[(2)] = null);

(statearr_24256_24303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (3))){
var inst_24233 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24235__$1,inst_24233);
} else {
if((state_val_24236 === (12))){
var inst_24210 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24257_24304 = state_24235__$1;
(statearr_24257_24304[(2)] = inst_24210);

(statearr_24257_24304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (2))){
var state_24235__$1 = state_24235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24235__$1,(4),ch);
} else {
if((state_val_24236 === (23))){
var state_24235__$1 = state_24235;
var statearr_24258_24305 = state_24235__$1;
(statearr_24258_24305[(2)] = null);

(statearr_24258_24305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (19))){
var inst_24216 = (state_24235[(11)]);
var inst_24166 = (state_24235[(8)]);
var inst_24218 = cljs.core.async.muxch_STAR_.call(null,inst_24216);
var state_24235__$1 = state_24235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24235__$1,(22),inst_24218,inst_24166);
} else {
if((state_val_24236 === (11))){
var inst_24190 = (state_24235[(10)]);
var inst_24176 = (state_24235[(13)]);
var inst_24190__$1 = cljs.core.seq.call(null,inst_24176);
var state_24235__$1 = (function (){var statearr_24259 = state_24235;
(statearr_24259[(10)] = inst_24190__$1);

return statearr_24259;
})();
if(inst_24190__$1){
var statearr_24260_24306 = state_24235__$1;
(statearr_24260_24306[(1)] = (13));

} else {
var statearr_24261_24307 = state_24235__$1;
(statearr_24261_24307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (9))){
var inst_24212 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24262_24308 = state_24235__$1;
(statearr_24262_24308[(2)] = inst_24212);

(statearr_24262_24308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (5))){
var inst_24173 = cljs.core.deref.call(null,mults);
var inst_24174 = cljs.core.vals.call(null,inst_24173);
var inst_24175 = cljs.core.seq.call(null,inst_24174);
var inst_24176 = inst_24175;
var inst_24177 = null;
var inst_24178 = (0);
var inst_24179 = (0);
var state_24235__$1 = (function (){var statearr_24263 = state_24235;
(statearr_24263[(12)] = inst_24177);

(statearr_24263[(13)] = inst_24176);

(statearr_24263[(15)] = inst_24179);

(statearr_24263[(16)] = inst_24178);

return statearr_24263;
})();
var statearr_24264_24309 = state_24235__$1;
(statearr_24264_24309[(2)] = null);

(statearr_24264_24309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (14))){
var state_24235__$1 = state_24235;
var statearr_24268_24310 = state_24235__$1;
(statearr_24268_24310[(2)] = null);

(statearr_24268_24310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (16))){
var inst_24190 = (state_24235[(10)]);
var inst_24194 = cljs.core.chunk_first.call(null,inst_24190);
var inst_24195 = cljs.core.chunk_rest.call(null,inst_24190);
var inst_24196 = cljs.core.count.call(null,inst_24194);
var inst_24176 = inst_24195;
var inst_24177 = inst_24194;
var inst_24178 = inst_24196;
var inst_24179 = (0);
var state_24235__$1 = (function (){var statearr_24269 = state_24235;
(statearr_24269[(12)] = inst_24177);

(statearr_24269[(13)] = inst_24176);

(statearr_24269[(15)] = inst_24179);

(statearr_24269[(16)] = inst_24178);

return statearr_24269;
})();
var statearr_24270_24311 = state_24235__$1;
(statearr_24270_24311[(2)] = null);

(statearr_24270_24311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (10))){
var inst_24177 = (state_24235[(12)]);
var inst_24176 = (state_24235[(13)]);
var inst_24179 = (state_24235[(15)]);
var inst_24178 = (state_24235[(16)]);
var inst_24184 = cljs.core._nth.call(null,inst_24177,inst_24179);
var inst_24185 = cljs.core.async.muxch_STAR_.call(null,inst_24184);
var inst_24186 = cljs.core.async.close_BANG_.call(null,inst_24185);
var inst_24187 = (inst_24179 + (1));
var tmp24265 = inst_24177;
var tmp24266 = inst_24176;
var tmp24267 = inst_24178;
var inst_24176__$1 = tmp24266;
var inst_24177__$1 = tmp24265;
var inst_24178__$1 = tmp24267;
var inst_24179__$1 = inst_24187;
var state_24235__$1 = (function (){var statearr_24271 = state_24235;
(statearr_24271[(12)] = inst_24177__$1);

(statearr_24271[(13)] = inst_24176__$1);

(statearr_24271[(17)] = inst_24186);

(statearr_24271[(15)] = inst_24179__$1);

(statearr_24271[(16)] = inst_24178__$1);

return statearr_24271;
})();
var statearr_24272_24312 = state_24235__$1;
(statearr_24272_24312[(2)] = null);

(statearr_24272_24312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (18))){
var inst_24205 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24273_24313 = state_24235__$1;
(statearr_24273_24313[(2)] = inst_24205);

(statearr_24273_24313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (8))){
var inst_24179 = (state_24235[(15)]);
var inst_24178 = (state_24235[(16)]);
var inst_24181 = (inst_24179 < inst_24178);
var inst_24182 = inst_24181;
var state_24235__$1 = state_24235;
if(cljs.core.truth_(inst_24182)){
var statearr_24274_24314 = state_24235__$1;
(statearr_24274_24314[(1)] = (10));

} else {
var statearr_24275_24315 = state_24235__$1;
(statearr_24275_24315[(1)] = (11));

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
});})(c__22388__auto___24287,mults,ensure_mult,p))
;
return ((function (switch__22276__auto__,c__22388__auto___24287,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_24279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24279[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_24279[(1)] = (1));

return statearr_24279;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_24235){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24280){if((e24280 instanceof Object)){
var ex__22280__auto__ = e24280;
var statearr_24281_24316 = state_24235;
(statearr_24281_24316[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24317 = state_24235;
state_24235 = G__24317;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_24235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_24235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___24287,mults,ensure_mult,p))
})();
var state__22390__auto__ = (function (){var statearr_24282 = f__22389__auto__.call(null);
(statearr_24282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___24287);

return statearr_24282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___24287,mults,ensure_mult,p))
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
var args24318 = [];
var len__20621__auto___24321 = arguments.length;
var i__20622__auto___24322 = (0);
while(true){
if((i__20622__auto___24322 < len__20621__auto___24321)){
args24318.push((arguments[i__20622__auto___24322]));

var G__24323 = (i__20622__auto___24322 + (1));
i__20622__auto___24322 = G__24323;
continue;
} else {
}
break;
}

var G__24320 = args24318.length;
switch (G__24320) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24318.length)].join('')));

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
var args24325 = [];
var len__20621__auto___24328 = arguments.length;
var i__20622__auto___24329 = (0);
while(true){
if((i__20622__auto___24329 < len__20621__auto___24328)){
args24325.push((arguments[i__20622__auto___24329]));

var G__24330 = (i__20622__auto___24329 + (1));
i__20622__auto___24329 = G__24330;
continue;
} else {
}
break;
}

var G__24327 = args24325.length;
switch (G__24327) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24325.length)].join('')));

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
var args24332 = [];
var len__20621__auto___24403 = arguments.length;
var i__20622__auto___24404 = (0);
while(true){
if((i__20622__auto___24404 < len__20621__auto___24403)){
args24332.push((arguments[i__20622__auto___24404]));

var G__24405 = (i__20622__auto___24404 + (1));
i__20622__auto___24404 = G__24405;
continue;
} else {
}
break;
}

var G__24334 = args24332.length;
switch (G__24334) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24332.length)].join('')));

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
var c__22388__auto___24407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___24407,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___24407,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24373){
var state_val_24374 = (state_24373[(1)]);
if((state_val_24374 === (7))){
var state_24373__$1 = state_24373;
var statearr_24375_24408 = state_24373__$1;
(statearr_24375_24408[(2)] = null);

(statearr_24375_24408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (1))){
var state_24373__$1 = state_24373;
var statearr_24376_24409 = state_24373__$1;
(statearr_24376_24409[(2)] = null);

(statearr_24376_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (4))){
var inst_24337 = (state_24373[(7)]);
var inst_24339 = (inst_24337 < cnt);
var state_24373__$1 = state_24373;
if(cljs.core.truth_(inst_24339)){
var statearr_24377_24410 = state_24373__$1;
(statearr_24377_24410[(1)] = (6));

} else {
var statearr_24378_24411 = state_24373__$1;
(statearr_24378_24411[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (15))){
var inst_24369 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
var statearr_24379_24412 = state_24373__$1;
(statearr_24379_24412[(2)] = inst_24369);

(statearr_24379_24412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (13))){
var inst_24362 = cljs.core.async.close_BANG_.call(null,out);
var state_24373__$1 = state_24373;
var statearr_24380_24413 = state_24373__$1;
(statearr_24380_24413[(2)] = inst_24362);

(statearr_24380_24413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (6))){
var state_24373__$1 = state_24373;
var statearr_24381_24414 = state_24373__$1;
(statearr_24381_24414[(2)] = null);

(statearr_24381_24414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (3))){
var inst_24371 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24373__$1,inst_24371);
} else {
if((state_val_24374 === (12))){
var inst_24359 = (state_24373[(8)]);
var inst_24359__$1 = (state_24373[(2)]);
var inst_24360 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24359__$1);
var state_24373__$1 = (function (){var statearr_24382 = state_24373;
(statearr_24382[(8)] = inst_24359__$1);

return statearr_24382;
})();
if(cljs.core.truth_(inst_24360)){
var statearr_24383_24415 = state_24373__$1;
(statearr_24383_24415[(1)] = (13));

} else {
var statearr_24384_24416 = state_24373__$1;
(statearr_24384_24416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (2))){
var inst_24336 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24337 = (0);
var state_24373__$1 = (function (){var statearr_24385 = state_24373;
(statearr_24385[(7)] = inst_24337);

(statearr_24385[(9)] = inst_24336);

return statearr_24385;
})();
var statearr_24386_24417 = state_24373__$1;
(statearr_24386_24417[(2)] = null);

(statearr_24386_24417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (11))){
var inst_24337 = (state_24373[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24373,(10),Object,null,(9));
var inst_24346 = chs__$1.call(null,inst_24337);
var inst_24347 = done.call(null,inst_24337);
var inst_24348 = cljs.core.async.take_BANG_.call(null,inst_24346,inst_24347);
var state_24373__$1 = state_24373;
var statearr_24387_24418 = state_24373__$1;
(statearr_24387_24418[(2)] = inst_24348);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24373__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (9))){
var inst_24337 = (state_24373[(7)]);
var inst_24350 = (state_24373[(2)]);
var inst_24351 = (inst_24337 + (1));
var inst_24337__$1 = inst_24351;
var state_24373__$1 = (function (){var statearr_24388 = state_24373;
(statearr_24388[(7)] = inst_24337__$1);

(statearr_24388[(10)] = inst_24350);

return statearr_24388;
})();
var statearr_24389_24419 = state_24373__$1;
(statearr_24389_24419[(2)] = null);

(statearr_24389_24419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (5))){
var inst_24357 = (state_24373[(2)]);
var state_24373__$1 = (function (){var statearr_24390 = state_24373;
(statearr_24390[(11)] = inst_24357);

return statearr_24390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24373__$1,(12),dchan);
} else {
if((state_val_24374 === (14))){
var inst_24359 = (state_24373[(8)]);
var inst_24364 = cljs.core.apply.call(null,f,inst_24359);
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24373__$1,(16),out,inst_24364);
} else {
if((state_val_24374 === (16))){
var inst_24366 = (state_24373[(2)]);
var state_24373__$1 = (function (){var statearr_24391 = state_24373;
(statearr_24391[(12)] = inst_24366);

return statearr_24391;
})();
var statearr_24392_24420 = state_24373__$1;
(statearr_24392_24420[(2)] = null);

(statearr_24392_24420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (10))){
var inst_24341 = (state_24373[(2)]);
var inst_24342 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24373__$1 = (function (){var statearr_24393 = state_24373;
(statearr_24393[(13)] = inst_24341);

return statearr_24393;
})();
var statearr_24394_24421 = state_24373__$1;
(statearr_24394_24421[(2)] = inst_24342);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24373__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (8))){
var inst_24355 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
var statearr_24395_24422 = state_24373__$1;
(statearr_24395_24422[(2)] = inst_24355);

(statearr_24395_24422[(1)] = (5));


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
});})(c__22388__auto___24407,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22276__auto__,c__22388__auto___24407,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_24399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24399[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_24399[(1)] = (1));

return statearr_24399;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_24373){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24400){if((e24400 instanceof Object)){
var ex__22280__auto__ = e24400;
var statearr_24401_24423 = state_24373;
(statearr_24401_24423[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24424 = state_24373;
state_24373 = G__24424;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_24373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_24373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___24407,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22390__auto__ = (function (){var statearr_24402 = f__22389__auto__.call(null);
(statearr_24402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___24407);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___24407,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24426 = [];
var len__20621__auto___24482 = arguments.length;
var i__20622__auto___24483 = (0);
while(true){
if((i__20622__auto___24483 < len__20621__auto___24482)){
args24426.push((arguments[i__20622__auto___24483]));

var G__24484 = (i__20622__auto___24483 + (1));
i__20622__auto___24483 = G__24484;
continue;
} else {
}
break;
}

var G__24428 = args24426.length;
switch (G__24428) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24426.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22388__auto___24486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___24486,out){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___24486,out){
return (function (state_24458){
var state_val_24459 = (state_24458[(1)]);
if((state_val_24459 === (7))){
var inst_24437 = (state_24458[(7)]);
var inst_24438 = (state_24458[(8)]);
var inst_24437__$1 = (state_24458[(2)]);
var inst_24438__$1 = cljs.core.nth.call(null,inst_24437__$1,(0),null);
var inst_24439 = cljs.core.nth.call(null,inst_24437__$1,(1),null);
var inst_24440 = (inst_24438__$1 == null);
var state_24458__$1 = (function (){var statearr_24460 = state_24458;
(statearr_24460[(9)] = inst_24439);

(statearr_24460[(7)] = inst_24437__$1);

(statearr_24460[(8)] = inst_24438__$1);

return statearr_24460;
})();
if(cljs.core.truth_(inst_24440)){
var statearr_24461_24487 = state_24458__$1;
(statearr_24461_24487[(1)] = (8));

} else {
var statearr_24462_24488 = state_24458__$1;
(statearr_24462_24488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (1))){
var inst_24429 = cljs.core.vec.call(null,chs);
var inst_24430 = inst_24429;
var state_24458__$1 = (function (){var statearr_24463 = state_24458;
(statearr_24463[(10)] = inst_24430);

return statearr_24463;
})();
var statearr_24464_24489 = state_24458__$1;
(statearr_24464_24489[(2)] = null);

(statearr_24464_24489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (4))){
var inst_24430 = (state_24458[(10)]);
var state_24458__$1 = state_24458;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24458__$1,(7),inst_24430);
} else {
if((state_val_24459 === (6))){
var inst_24454 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
var statearr_24465_24490 = state_24458__$1;
(statearr_24465_24490[(2)] = inst_24454);

(statearr_24465_24490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (3))){
var inst_24456 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24458__$1,inst_24456);
} else {
if((state_val_24459 === (2))){
var inst_24430 = (state_24458[(10)]);
var inst_24432 = cljs.core.count.call(null,inst_24430);
var inst_24433 = (inst_24432 > (0));
var state_24458__$1 = state_24458;
if(cljs.core.truth_(inst_24433)){
var statearr_24467_24491 = state_24458__$1;
(statearr_24467_24491[(1)] = (4));

} else {
var statearr_24468_24492 = state_24458__$1;
(statearr_24468_24492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (11))){
var inst_24430 = (state_24458[(10)]);
var inst_24447 = (state_24458[(2)]);
var tmp24466 = inst_24430;
var inst_24430__$1 = tmp24466;
var state_24458__$1 = (function (){var statearr_24469 = state_24458;
(statearr_24469[(11)] = inst_24447);

(statearr_24469[(10)] = inst_24430__$1);

return statearr_24469;
})();
var statearr_24470_24493 = state_24458__$1;
(statearr_24470_24493[(2)] = null);

(statearr_24470_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (9))){
var inst_24438 = (state_24458[(8)]);
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24458__$1,(11),out,inst_24438);
} else {
if((state_val_24459 === (5))){
var inst_24452 = cljs.core.async.close_BANG_.call(null,out);
var state_24458__$1 = state_24458;
var statearr_24471_24494 = state_24458__$1;
(statearr_24471_24494[(2)] = inst_24452);

(statearr_24471_24494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (10))){
var inst_24450 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
var statearr_24472_24495 = state_24458__$1;
(statearr_24472_24495[(2)] = inst_24450);

(statearr_24472_24495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (8))){
var inst_24439 = (state_24458[(9)]);
var inst_24437 = (state_24458[(7)]);
var inst_24438 = (state_24458[(8)]);
var inst_24430 = (state_24458[(10)]);
var inst_24442 = (function (){var cs = inst_24430;
var vec__24435 = inst_24437;
var v = inst_24438;
var c = inst_24439;
return ((function (cs,vec__24435,v,c,inst_24439,inst_24437,inst_24438,inst_24430,state_val_24459,c__22388__auto___24486,out){
return (function (p1__24425_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24425_SHARP_);
});
;})(cs,vec__24435,v,c,inst_24439,inst_24437,inst_24438,inst_24430,state_val_24459,c__22388__auto___24486,out))
})();
var inst_24443 = cljs.core.filterv.call(null,inst_24442,inst_24430);
var inst_24430__$1 = inst_24443;
var state_24458__$1 = (function (){var statearr_24473 = state_24458;
(statearr_24473[(10)] = inst_24430__$1);

return statearr_24473;
})();
var statearr_24474_24496 = state_24458__$1;
(statearr_24474_24496[(2)] = null);

(statearr_24474_24496[(1)] = (2));


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
});})(c__22388__auto___24486,out))
;
return ((function (switch__22276__auto__,c__22388__auto___24486,out){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_24478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24478[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_24478[(1)] = (1));

return statearr_24478;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_24458){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24479){if((e24479 instanceof Object)){
var ex__22280__auto__ = e24479;
var statearr_24480_24497 = state_24458;
(statearr_24480_24497[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24498 = state_24458;
state_24458 = G__24498;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_24458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_24458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___24486,out))
})();
var state__22390__auto__ = (function (){var statearr_24481 = f__22389__auto__.call(null);
(statearr_24481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___24486);

return statearr_24481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___24486,out))
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
var args24499 = [];
var len__20621__auto___24548 = arguments.length;
var i__20622__auto___24549 = (0);
while(true){
if((i__20622__auto___24549 < len__20621__auto___24548)){
args24499.push((arguments[i__20622__auto___24549]));

var G__24550 = (i__20622__auto___24549 + (1));
i__20622__auto___24549 = G__24550;
continue;
} else {
}
break;
}

var G__24501 = args24499.length;
switch (G__24501) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24499.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22388__auto___24552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___24552,out){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___24552,out){
return (function (state_24525){
var state_val_24526 = (state_24525[(1)]);
if((state_val_24526 === (7))){
var inst_24507 = (state_24525[(7)]);
var inst_24507__$1 = (state_24525[(2)]);
var inst_24508 = (inst_24507__$1 == null);
var inst_24509 = cljs.core.not.call(null,inst_24508);
var state_24525__$1 = (function (){var statearr_24527 = state_24525;
(statearr_24527[(7)] = inst_24507__$1);

return statearr_24527;
})();
if(inst_24509){
var statearr_24528_24553 = state_24525__$1;
(statearr_24528_24553[(1)] = (8));

} else {
var statearr_24529_24554 = state_24525__$1;
(statearr_24529_24554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (1))){
var inst_24502 = (0);
var state_24525__$1 = (function (){var statearr_24530 = state_24525;
(statearr_24530[(8)] = inst_24502);

return statearr_24530;
})();
var statearr_24531_24555 = state_24525__$1;
(statearr_24531_24555[(2)] = null);

(statearr_24531_24555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (4))){
var state_24525__$1 = state_24525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24525__$1,(7),ch);
} else {
if((state_val_24526 === (6))){
var inst_24520 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
var statearr_24532_24556 = state_24525__$1;
(statearr_24532_24556[(2)] = inst_24520);

(statearr_24532_24556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (3))){
var inst_24522 = (state_24525[(2)]);
var inst_24523 = cljs.core.async.close_BANG_.call(null,out);
var state_24525__$1 = (function (){var statearr_24533 = state_24525;
(statearr_24533[(9)] = inst_24522);

return statearr_24533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24525__$1,inst_24523);
} else {
if((state_val_24526 === (2))){
var inst_24502 = (state_24525[(8)]);
var inst_24504 = (inst_24502 < n);
var state_24525__$1 = state_24525;
if(cljs.core.truth_(inst_24504)){
var statearr_24534_24557 = state_24525__$1;
(statearr_24534_24557[(1)] = (4));

} else {
var statearr_24535_24558 = state_24525__$1;
(statearr_24535_24558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (11))){
var inst_24502 = (state_24525[(8)]);
var inst_24512 = (state_24525[(2)]);
var inst_24513 = (inst_24502 + (1));
var inst_24502__$1 = inst_24513;
var state_24525__$1 = (function (){var statearr_24536 = state_24525;
(statearr_24536[(10)] = inst_24512);

(statearr_24536[(8)] = inst_24502__$1);

return statearr_24536;
})();
var statearr_24537_24559 = state_24525__$1;
(statearr_24537_24559[(2)] = null);

(statearr_24537_24559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (9))){
var state_24525__$1 = state_24525;
var statearr_24538_24560 = state_24525__$1;
(statearr_24538_24560[(2)] = null);

(statearr_24538_24560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (5))){
var state_24525__$1 = state_24525;
var statearr_24539_24561 = state_24525__$1;
(statearr_24539_24561[(2)] = null);

(statearr_24539_24561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (10))){
var inst_24517 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
var statearr_24540_24562 = state_24525__$1;
(statearr_24540_24562[(2)] = inst_24517);

(statearr_24540_24562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (8))){
var inst_24507 = (state_24525[(7)]);
var state_24525__$1 = state_24525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24525__$1,(11),out,inst_24507);
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
});})(c__22388__auto___24552,out))
;
return ((function (switch__22276__auto__,c__22388__auto___24552,out){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_24544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24544[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_24544[(1)] = (1));

return statearr_24544;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_24525){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24545){if((e24545 instanceof Object)){
var ex__22280__auto__ = e24545;
var statearr_24546_24563 = state_24525;
(statearr_24546_24563[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24564 = state_24525;
state_24525 = G__24564;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_24525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_24525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___24552,out))
})();
var state__22390__auto__ = (function (){var statearr_24547 = f__22389__auto__.call(null);
(statearr_24547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___24552);

return statearr_24547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___24552,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24572 = (function (map_LT_,f,ch,meta24573){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24573 = meta24573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24574,meta24573__$1){
var self__ = this;
var _24574__$1 = this;
return (new cljs.core.async.t_cljs$core$async24572(self__.map_LT_,self__.f,self__.ch,meta24573__$1));
});

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24574){
var self__ = this;
var _24574__$1 = this;
return self__.meta24573;
});

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24575 = (function (map_LT_,f,ch,meta24573,_,fn1,meta24576){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24573 = meta24573;
this._ = _;
this.fn1 = fn1;
this.meta24576 = meta24576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24577,meta24576__$1){
var self__ = this;
var _24577__$1 = this;
return (new cljs.core.async.t_cljs$core$async24575(self__.map_LT_,self__.f,self__.ch,self__.meta24573,self__._,self__.fn1,meta24576__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24577){
var self__ = this;
var _24577__$1 = this;
return self__.meta24576;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24565_SHARP_){
return f1.call(null,(((p1__24565_SHARP_ == null))?null:self__.f.call(null,p1__24565_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24575.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24573","meta24573",1491271941,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24572","cljs.core.async/t_cljs$core$async24572",-721738082,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24576","meta24576",1453133591,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24575";

cljs.core.async.t_cljs$core$async24575.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async24575");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24575 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24575(map_LT___$1,f__$1,ch__$1,meta24573__$1,___$2,fn1__$1,meta24576){
return (new cljs.core.async.t_cljs$core$async24575(map_LT___$1,f__$1,ch__$1,meta24573__$1,___$2,fn1__$1,meta24576));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24575(self__.map_LT_,self__.f,self__.ch,self__.meta24573,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19551__auto__ = ret;
if(cljs.core.truth_(and__19551__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19551__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24573","meta24573",1491271941,null)], null);
});

cljs.core.async.t_cljs$core$async24572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24572";

cljs.core.async.t_cljs$core$async24572.cljs$lang$ctorPrWriter = (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async24572");
});

cljs.core.async.__GT_t_cljs$core$async24572 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24572(map_LT___$1,f__$1,ch__$1,meta24573){
return (new cljs.core.async.t_cljs$core$async24572(map_LT___$1,f__$1,ch__$1,meta24573));
});

}

return (new cljs.core.async.t_cljs$core$async24572(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24581 = (function (map_GT_,f,ch,meta24582){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24582 = meta24582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24583,meta24582__$1){
var self__ = this;
var _24583__$1 = this;
return (new cljs.core.async.t_cljs$core$async24581(self__.map_GT_,self__.f,self__.ch,meta24582__$1));
});

cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24583){
var self__ = this;
var _24583__$1 = this;
return self__.meta24582;
});

cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24582","meta24582",1890358197,null)], null);
});

cljs.core.async.t_cljs$core$async24581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24581";

cljs.core.async.t_cljs$core$async24581.cljs$lang$ctorPrWriter = (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async24581");
});

cljs.core.async.__GT_t_cljs$core$async24581 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24581(map_GT___$1,f__$1,ch__$1,meta24582){
return (new cljs.core.async.t_cljs$core$async24581(map_GT___$1,f__$1,ch__$1,meta24582));
});

}

return (new cljs.core.async.t_cljs$core$async24581(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24587 = (function (filter_GT_,p,ch,meta24588){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24588 = meta24588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24589,meta24588__$1){
var self__ = this;
var _24589__$1 = this;
return (new cljs.core.async.t_cljs$core$async24587(self__.filter_GT_,self__.p,self__.ch,meta24588__$1));
});

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24589){
var self__ = this;
var _24589__$1 = this;
return self__.meta24588;
});

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24588","meta24588",816554062,null)], null);
});

cljs.core.async.t_cljs$core$async24587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24587";

cljs.core.async.t_cljs$core$async24587.cljs$lang$ctorPrWriter = (function (this__20161__auto__,writer__20162__auto__,opt__20163__auto__){
return cljs.core._write.call(null,writer__20162__auto__,"cljs.core.async/t_cljs$core$async24587");
});

cljs.core.async.__GT_t_cljs$core$async24587 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24587(filter_GT___$1,p__$1,ch__$1,meta24588){
return (new cljs.core.async.t_cljs$core$async24587(filter_GT___$1,p__$1,ch__$1,meta24588));
});

}

return (new cljs.core.async.t_cljs$core$async24587(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24590 = [];
var len__20621__auto___24634 = arguments.length;
var i__20622__auto___24635 = (0);
while(true){
if((i__20622__auto___24635 < len__20621__auto___24634)){
args24590.push((arguments[i__20622__auto___24635]));

var G__24636 = (i__20622__auto___24635 + (1));
i__20622__auto___24635 = G__24636;
continue;
} else {
}
break;
}

var G__24592 = args24590.length;
switch (G__24592) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24590.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22388__auto___24638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___24638,out){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___24638,out){
return (function (state_24613){
var state_val_24614 = (state_24613[(1)]);
if((state_val_24614 === (7))){
var inst_24609 = (state_24613[(2)]);
var state_24613__$1 = state_24613;
var statearr_24615_24639 = state_24613__$1;
(statearr_24615_24639[(2)] = inst_24609);

(statearr_24615_24639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (1))){
var state_24613__$1 = state_24613;
var statearr_24616_24640 = state_24613__$1;
(statearr_24616_24640[(2)] = null);

(statearr_24616_24640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (4))){
var inst_24595 = (state_24613[(7)]);
var inst_24595__$1 = (state_24613[(2)]);
var inst_24596 = (inst_24595__$1 == null);
var state_24613__$1 = (function (){var statearr_24617 = state_24613;
(statearr_24617[(7)] = inst_24595__$1);

return statearr_24617;
})();
if(cljs.core.truth_(inst_24596)){
var statearr_24618_24641 = state_24613__$1;
(statearr_24618_24641[(1)] = (5));

} else {
var statearr_24619_24642 = state_24613__$1;
(statearr_24619_24642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (6))){
var inst_24595 = (state_24613[(7)]);
var inst_24600 = p.call(null,inst_24595);
var state_24613__$1 = state_24613;
if(cljs.core.truth_(inst_24600)){
var statearr_24620_24643 = state_24613__$1;
(statearr_24620_24643[(1)] = (8));

} else {
var statearr_24621_24644 = state_24613__$1;
(statearr_24621_24644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (3))){
var inst_24611 = (state_24613[(2)]);
var state_24613__$1 = state_24613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24613__$1,inst_24611);
} else {
if((state_val_24614 === (2))){
var state_24613__$1 = state_24613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24613__$1,(4),ch);
} else {
if((state_val_24614 === (11))){
var inst_24603 = (state_24613[(2)]);
var state_24613__$1 = state_24613;
var statearr_24622_24645 = state_24613__$1;
(statearr_24622_24645[(2)] = inst_24603);

(statearr_24622_24645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (9))){
var state_24613__$1 = state_24613;
var statearr_24623_24646 = state_24613__$1;
(statearr_24623_24646[(2)] = null);

(statearr_24623_24646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (5))){
var inst_24598 = cljs.core.async.close_BANG_.call(null,out);
var state_24613__$1 = state_24613;
var statearr_24624_24647 = state_24613__$1;
(statearr_24624_24647[(2)] = inst_24598);

(statearr_24624_24647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (10))){
var inst_24606 = (state_24613[(2)]);
var state_24613__$1 = (function (){var statearr_24625 = state_24613;
(statearr_24625[(8)] = inst_24606);

return statearr_24625;
})();
var statearr_24626_24648 = state_24613__$1;
(statearr_24626_24648[(2)] = null);

(statearr_24626_24648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24614 === (8))){
var inst_24595 = (state_24613[(7)]);
var state_24613__$1 = state_24613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24613__$1,(11),out,inst_24595);
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
});})(c__22388__auto___24638,out))
;
return ((function (switch__22276__auto__,c__22388__auto___24638,out){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_24630 = [null,null,null,null,null,null,null,null,null];
(statearr_24630[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_24630[(1)] = (1));

return statearr_24630;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_24613){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24631){if((e24631 instanceof Object)){
var ex__22280__auto__ = e24631;
var statearr_24632_24649 = state_24613;
(statearr_24632_24649[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24650 = state_24613;
state_24613 = G__24650;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_24613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_24613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___24638,out))
})();
var state__22390__auto__ = (function (){var statearr_24633 = f__22389__auto__.call(null);
(statearr_24633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___24638);

return statearr_24633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___24638,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24651 = [];
var len__20621__auto___24654 = arguments.length;
var i__20622__auto___24655 = (0);
while(true){
if((i__20622__auto___24655 < len__20621__auto___24654)){
args24651.push((arguments[i__20622__auto___24655]));

var G__24656 = (i__20622__auto___24655 + (1));
i__20622__auto___24655 = G__24656;
continue;
} else {
}
break;
}

var G__24653 = args24651.length;
switch (G__24653) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24651.length)].join('')));

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
var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__){
return (function (state_24823){
var state_val_24824 = (state_24823[(1)]);
if((state_val_24824 === (7))){
var inst_24819 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24825_24866 = state_24823__$1;
(statearr_24825_24866[(2)] = inst_24819);

(statearr_24825_24866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (20))){
var inst_24789 = (state_24823[(7)]);
var inst_24800 = (state_24823[(2)]);
var inst_24801 = cljs.core.next.call(null,inst_24789);
var inst_24775 = inst_24801;
var inst_24776 = null;
var inst_24777 = (0);
var inst_24778 = (0);
var state_24823__$1 = (function (){var statearr_24826 = state_24823;
(statearr_24826[(8)] = inst_24778);

(statearr_24826[(9)] = inst_24777);

(statearr_24826[(10)] = inst_24775);

(statearr_24826[(11)] = inst_24800);

(statearr_24826[(12)] = inst_24776);

return statearr_24826;
})();
var statearr_24827_24867 = state_24823__$1;
(statearr_24827_24867[(2)] = null);

(statearr_24827_24867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (1))){
var state_24823__$1 = state_24823;
var statearr_24828_24868 = state_24823__$1;
(statearr_24828_24868[(2)] = null);

(statearr_24828_24868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (4))){
var inst_24764 = (state_24823[(13)]);
var inst_24764__$1 = (state_24823[(2)]);
var inst_24765 = (inst_24764__$1 == null);
var state_24823__$1 = (function (){var statearr_24829 = state_24823;
(statearr_24829[(13)] = inst_24764__$1);

return statearr_24829;
})();
if(cljs.core.truth_(inst_24765)){
var statearr_24830_24869 = state_24823__$1;
(statearr_24830_24869[(1)] = (5));

} else {
var statearr_24831_24870 = state_24823__$1;
(statearr_24831_24870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (15))){
var state_24823__$1 = state_24823;
var statearr_24835_24871 = state_24823__$1;
(statearr_24835_24871[(2)] = null);

(statearr_24835_24871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (21))){
var state_24823__$1 = state_24823;
var statearr_24836_24872 = state_24823__$1;
(statearr_24836_24872[(2)] = null);

(statearr_24836_24872[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (13))){
var inst_24778 = (state_24823[(8)]);
var inst_24777 = (state_24823[(9)]);
var inst_24775 = (state_24823[(10)]);
var inst_24776 = (state_24823[(12)]);
var inst_24785 = (state_24823[(2)]);
var inst_24786 = (inst_24778 + (1));
var tmp24832 = inst_24777;
var tmp24833 = inst_24775;
var tmp24834 = inst_24776;
var inst_24775__$1 = tmp24833;
var inst_24776__$1 = tmp24834;
var inst_24777__$1 = tmp24832;
var inst_24778__$1 = inst_24786;
var state_24823__$1 = (function (){var statearr_24837 = state_24823;
(statearr_24837[(8)] = inst_24778__$1);

(statearr_24837[(9)] = inst_24777__$1);

(statearr_24837[(14)] = inst_24785);

(statearr_24837[(10)] = inst_24775__$1);

(statearr_24837[(12)] = inst_24776__$1);

return statearr_24837;
})();
var statearr_24838_24873 = state_24823__$1;
(statearr_24838_24873[(2)] = null);

(statearr_24838_24873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (22))){
var state_24823__$1 = state_24823;
var statearr_24839_24874 = state_24823__$1;
(statearr_24839_24874[(2)] = null);

(statearr_24839_24874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (6))){
var inst_24764 = (state_24823[(13)]);
var inst_24773 = f.call(null,inst_24764);
var inst_24774 = cljs.core.seq.call(null,inst_24773);
var inst_24775 = inst_24774;
var inst_24776 = null;
var inst_24777 = (0);
var inst_24778 = (0);
var state_24823__$1 = (function (){var statearr_24840 = state_24823;
(statearr_24840[(8)] = inst_24778);

(statearr_24840[(9)] = inst_24777);

(statearr_24840[(10)] = inst_24775);

(statearr_24840[(12)] = inst_24776);

return statearr_24840;
})();
var statearr_24841_24875 = state_24823__$1;
(statearr_24841_24875[(2)] = null);

(statearr_24841_24875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (17))){
var inst_24789 = (state_24823[(7)]);
var inst_24793 = cljs.core.chunk_first.call(null,inst_24789);
var inst_24794 = cljs.core.chunk_rest.call(null,inst_24789);
var inst_24795 = cljs.core.count.call(null,inst_24793);
var inst_24775 = inst_24794;
var inst_24776 = inst_24793;
var inst_24777 = inst_24795;
var inst_24778 = (0);
var state_24823__$1 = (function (){var statearr_24842 = state_24823;
(statearr_24842[(8)] = inst_24778);

(statearr_24842[(9)] = inst_24777);

(statearr_24842[(10)] = inst_24775);

(statearr_24842[(12)] = inst_24776);

return statearr_24842;
})();
var statearr_24843_24876 = state_24823__$1;
(statearr_24843_24876[(2)] = null);

(statearr_24843_24876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (3))){
var inst_24821 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24823__$1,inst_24821);
} else {
if((state_val_24824 === (12))){
var inst_24809 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24844_24877 = state_24823__$1;
(statearr_24844_24877[(2)] = inst_24809);

(statearr_24844_24877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (2))){
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24823__$1,(4),in$);
} else {
if((state_val_24824 === (23))){
var inst_24817 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24845_24878 = state_24823__$1;
(statearr_24845_24878[(2)] = inst_24817);

(statearr_24845_24878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (19))){
var inst_24804 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24846_24879 = state_24823__$1;
(statearr_24846_24879[(2)] = inst_24804);

(statearr_24846_24879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (11))){
var inst_24789 = (state_24823[(7)]);
var inst_24775 = (state_24823[(10)]);
var inst_24789__$1 = cljs.core.seq.call(null,inst_24775);
var state_24823__$1 = (function (){var statearr_24847 = state_24823;
(statearr_24847[(7)] = inst_24789__$1);

return statearr_24847;
})();
if(inst_24789__$1){
var statearr_24848_24880 = state_24823__$1;
(statearr_24848_24880[(1)] = (14));

} else {
var statearr_24849_24881 = state_24823__$1;
(statearr_24849_24881[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (9))){
var inst_24811 = (state_24823[(2)]);
var inst_24812 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24823__$1 = (function (){var statearr_24850 = state_24823;
(statearr_24850[(15)] = inst_24811);

return statearr_24850;
})();
if(cljs.core.truth_(inst_24812)){
var statearr_24851_24882 = state_24823__$1;
(statearr_24851_24882[(1)] = (21));

} else {
var statearr_24852_24883 = state_24823__$1;
(statearr_24852_24883[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (5))){
var inst_24767 = cljs.core.async.close_BANG_.call(null,out);
var state_24823__$1 = state_24823;
var statearr_24853_24884 = state_24823__$1;
(statearr_24853_24884[(2)] = inst_24767);

(statearr_24853_24884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (14))){
var inst_24789 = (state_24823[(7)]);
var inst_24791 = cljs.core.chunked_seq_QMARK_.call(null,inst_24789);
var state_24823__$1 = state_24823;
if(inst_24791){
var statearr_24854_24885 = state_24823__$1;
(statearr_24854_24885[(1)] = (17));

} else {
var statearr_24855_24886 = state_24823__$1;
(statearr_24855_24886[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (16))){
var inst_24807 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24856_24887 = state_24823__$1;
(statearr_24856_24887[(2)] = inst_24807);

(statearr_24856_24887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (10))){
var inst_24778 = (state_24823[(8)]);
var inst_24776 = (state_24823[(12)]);
var inst_24783 = cljs.core._nth.call(null,inst_24776,inst_24778);
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24823__$1,(13),out,inst_24783);
} else {
if((state_val_24824 === (18))){
var inst_24789 = (state_24823[(7)]);
var inst_24798 = cljs.core.first.call(null,inst_24789);
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24823__$1,(20),out,inst_24798);
} else {
if((state_val_24824 === (8))){
var inst_24778 = (state_24823[(8)]);
var inst_24777 = (state_24823[(9)]);
var inst_24780 = (inst_24778 < inst_24777);
var inst_24781 = inst_24780;
var state_24823__$1 = state_24823;
if(cljs.core.truth_(inst_24781)){
var statearr_24857_24888 = state_24823__$1;
(statearr_24857_24888[(1)] = (10));

} else {
var statearr_24858_24889 = state_24823__$1;
(statearr_24858_24889[(1)] = (11));

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
});})(c__22388__auto__))
;
return ((function (switch__22276__auto__,c__22388__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22277__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22277__auto____0 = (function (){
var statearr_24862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24862[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22277__auto__);

(statearr_24862[(1)] = (1));

return statearr_24862;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22277__auto____1 = (function (state_24823){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24863){if((e24863 instanceof Object)){
var ex__22280__auto__ = e24863;
var statearr_24864_24890 = state_24823;
(statearr_24864_24890[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24891 = state_24823;
state_24823 = G__24891;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22277__auto__ = function(state_24823){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22277__auto____1.call(this,state_24823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22277__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22277__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__))
})();
var state__22390__auto__ = (function (){var statearr_24865 = f__22389__auto__.call(null);
(statearr_24865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_24865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__))
);

return c__22388__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24892 = [];
var len__20621__auto___24895 = arguments.length;
var i__20622__auto___24896 = (0);
while(true){
if((i__20622__auto___24896 < len__20621__auto___24895)){
args24892.push((arguments[i__20622__auto___24896]));

var G__24897 = (i__20622__auto___24896 + (1));
i__20622__auto___24896 = G__24897;
continue;
} else {
}
break;
}

var G__24894 = args24892.length;
switch (G__24894) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24892.length)].join('')));

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
var args24899 = [];
var len__20621__auto___24902 = arguments.length;
var i__20622__auto___24903 = (0);
while(true){
if((i__20622__auto___24903 < len__20621__auto___24902)){
args24899.push((arguments[i__20622__auto___24903]));

var G__24904 = (i__20622__auto___24903 + (1));
i__20622__auto___24903 = G__24904;
continue;
} else {
}
break;
}

var G__24901 = args24899.length;
switch (G__24901) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24899.length)].join('')));

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
var args24906 = [];
var len__20621__auto___24957 = arguments.length;
var i__20622__auto___24958 = (0);
while(true){
if((i__20622__auto___24958 < len__20621__auto___24957)){
args24906.push((arguments[i__20622__auto___24958]));

var G__24959 = (i__20622__auto___24958 + (1));
i__20622__auto___24958 = G__24959;
continue;
} else {
}
break;
}

var G__24908 = args24906.length;
switch (G__24908) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24906.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22388__auto___24961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___24961,out){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___24961,out){
return (function (state_24932){
var state_val_24933 = (state_24932[(1)]);
if((state_val_24933 === (7))){
var inst_24927 = (state_24932[(2)]);
var state_24932__$1 = state_24932;
var statearr_24934_24962 = state_24932__$1;
(statearr_24934_24962[(2)] = inst_24927);

(statearr_24934_24962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (1))){
var inst_24909 = null;
var state_24932__$1 = (function (){var statearr_24935 = state_24932;
(statearr_24935[(7)] = inst_24909);

return statearr_24935;
})();
var statearr_24936_24963 = state_24932__$1;
(statearr_24936_24963[(2)] = null);

(statearr_24936_24963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (4))){
var inst_24912 = (state_24932[(8)]);
var inst_24912__$1 = (state_24932[(2)]);
var inst_24913 = (inst_24912__$1 == null);
var inst_24914 = cljs.core.not.call(null,inst_24913);
var state_24932__$1 = (function (){var statearr_24937 = state_24932;
(statearr_24937[(8)] = inst_24912__$1);

return statearr_24937;
})();
if(inst_24914){
var statearr_24938_24964 = state_24932__$1;
(statearr_24938_24964[(1)] = (5));

} else {
var statearr_24939_24965 = state_24932__$1;
(statearr_24939_24965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (6))){
var state_24932__$1 = state_24932;
var statearr_24940_24966 = state_24932__$1;
(statearr_24940_24966[(2)] = null);

(statearr_24940_24966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (3))){
var inst_24929 = (state_24932[(2)]);
var inst_24930 = cljs.core.async.close_BANG_.call(null,out);
var state_24932__$1 = (function (){var statearr_24941 = state_24932;
(statearr_24941[(9)] = inst_24929);

return statearr_24941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24932__$1,inst_24930);
} else {
if((state_val_24933 === (2))){
var state_24932__$1 = state_24932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24932__$1,(4),ch);
} else {
if((state_val_24933 === (11))){
var inst_24912 = (state_24932[(8)]);
var inst_24921 = (state_24932[(2)]);
var inst_24909 = inst_24912;
var state_24932__$1 = (function (){var statearr_24942 = state_24932;
(statearr_24942[(7)] = inst_24909);

(statearr_24942[(10)] = inst_24921);

return statearr_24942;
})();
var statearr_24943_24967 = state_24932__$1;
(statearr_24943_24967[(2)] = null);

(statearr_24943_24967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (9))){
var inst_24912 = (state_24932[(8)]);
var state_24932__$1 = state_24932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24932__$1,(11),out,inst_24912);
} else {
if((state_val_24933 === (5))){
var inst_24912 = (state_24932[(8)]);
var inst_24909 = (state_24932[(7)]);
var inst_24916 = cljs.core._EQ_.call(null,inst_24912,inst_24909);
var state_24932__$1 = state_24932;
if(inst_24916){
var statearr_24945_24968 = state_24932__$1;
(statearr_24945_24968[(1)] = (8));

} else {
var statearr_24946_24969 = state_24932__$1;
(statearr_24946_24969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (10))){
var inst_24924 = (state_24932[(2)]);
var state_24932__$1 = state_24932;
var statearr_24947_24970 = state_24932__$1;
(statearr_24947_24970[(2)] = inst_24924);

(statearr_24947_24970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (8))){
var inst_24909 = (state_24932[(7)]);
var tmp24944 = inst_24909;
var inst_24909__$1 = tmp24944;
var state_24932__$1 = (function (){var statearr_24948 = state_24932;
(statearr_24948[(7)] = inst_24909__$1);

return statearr_24948;
})();
var statearr_24949_24971 = state_24932__$1;
(statearr_24949_24971[(2)] = null);

(statearr_24949_24971[(1)] = (2));


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
});})(c__22388__auto___24961,out))
;
return ((function (switch__22276__auto__,c__22388__auto___24961,out){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_24953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24953[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_24953[(1)] = (1));

return statearr_24953;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_24932){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_24932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e24954){if((e24954 instanceof Object)){
var ex__22280__auto__ = e24954;
var statearr_24955_24972 = state_24932;
(statearr_24955_24972[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24973 = state_24932;
state_24932 = G__24973;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_24932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_24932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___24961,out))
})();
var state__22390__auto__ = (function (){var statearr_24956 = f__22389__auto__.call(null);
(statearr_24956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___24961);

return statearr_24956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___24961,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24974 = [];
var len__20621__auto___25044 = arguments.length;
var i__20622__auto___25045 = (0);
while(true){
if((i__20622__auto___25045 < len__20621__auto___25044)){
args24974.push((arguments[i__20622__auto___25045]));

var G__25046 = (i__20622__auto___25045 + (1));
i__20622__auto___25045 = G__25046;
continue;
} else {
}
break;
}

var G__24976 = args24974.length;
switch (G__24976) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24974.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22388__auto___25048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___25048,out){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___25048,out){
return (function (state_25014){
var state_val_25015 = (state_25014[(1)]);
if((state_val_25015 === (7))){
var inst_25010 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25016_25049 = state_25014__$1;
(statearr_25016_25049[(2)] = inst_25010);

(statearr_25016_25049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (1))){
var inst_24977 = (new Array(n));
var inst_24978 = inst_24977;
var inst_24979 = (0);
var state_25014__$1 = (function (){var statearr_25017 = state_25014;
(statearr_25017[(7)] = inst_24979);

(statearr_25017[(8)] = inst_24978);

return statearr_25017;
})();
var statearr_25018_25050 = state_25014__$1;
(statearr_25018_25050[(2)] = null);

(statearr_25018_25050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (4))){
var inst_24982 = (state_25014[(9)]);
var inst_24982__$1 = (state_25014[(2)]);
var inst_24983 = (inst_24982__$1 == null);
var inst_24984 = cljs.core.not.call(null,inst_24983);
var state_25014__$1 = (function (){var statearr_25019 = state_25014;
(statearr_25019[(9)] = inst_24982__$1);

return statearr_25019;
})();
if(inst_24984){
var statearr_25020_25051 = state_25014__$1;
(statearr_25020_25051[(1)] = (5));

} else {
var statearr_25021_25052 = state_25014__$1;
(statearr_25021_25052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (15))){
var inst_25004 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25022_25053 = state_25014__$1;
(statearr_25022_25053[(2)] = inst_25004);

(statearr_25022_25053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (13))){
var state_25014__$1 = state_25014;
var statearr_25023_25054 = state_25014__$1;
(statearr_25023_25054[(2)] = null);

(statearr_25023_25054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (6))){
var inst_24979 = (state_25014[(7)]);
var inst_25000 = (inst_24979 > (0));
var state_25014__$1 = state_25014;
if(cljs.core.truth_(inst_25000)){
var statearr_25024_25055 = state_25014__$1;
(statearr_25024_25055[(1)] = (12));

} else {
var statearr_25025_25056 = state_25014__$1;
(statearr_25025_25056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (3))){
var inst_25012 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25014__$1,inst_25012);
} else {
if((state_val_25015 === (12))){
var inst_24978 = (state_25014[(8)]);
var inst_25002 = cljs.core.vec.call(null,inst_24978);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,(15),out,inst_25002);
} else {
if((state_val_25015 === (2))){
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25014__$1,(4),ch);
} else {
if((state_val_25015 === (11))){
var inst_24994 = (state_25014[(2)]);
var inst_24995 = (new Array(n));
var inst_24978 = inst_24995;
var inst_24979 = (0);
var state_25014__$1 = (function (){var statearr_25026 = state_25014;
(statearr_25026[(7)] = inst_24979);

(statearr_25026[(10)] = inst_24994);

(statearr_25026[(8)] = inst_24978);

return statearr_25026;
})();
var statearr_25027_25057 = state_25014__$1;
(statearr_25027_25057[(2)] = null);

(statearr_25027_25057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (9))){
var inst_24978 = (state_25014[(8)]);
var inst_24992 = cljs.core.vec.call(null,inst_24978);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,(11),out,inst_24992);
} else {
if((state_val_25015 === (5))){
var inst_24987 = (state_25014[(11)]);
var inst_24979 = (state_25014[(7)]);
var inst_24982 = (state_25014[(9)]);
var inst_24978 = (state_25014[(8)]);
var inst_24986 = (inst_24978[inst_24979] = inst_24982);
var inst_24987__$1 = (inst_24979 + (1));
var inst_24988 = (inst_24987__$1 < n);
var state_25014__$1 = (function (){var statearr_25028 = state_25014;
(statearr_25028[(11)] = inst_24987__$1);

(statearr_25028[(12)] = inst_24986);

return statearr_25028;
})();
if(cljs.core.truth_(inst_24988)){
var statearr_25029_25058 = state_25014__$1;
(statearr_25029_25058[(1)] = (8));

} else {
var statearr_25030_25059 = state_25014__$1;
(statearr_25030_25059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (14))){
var inst_25007 = (state_25014[(2)]);
var inst_25008 = cljs.core.async.close_BANG_.call(null,out);
var state_25014__$1 = (function (){var statearr_25032 = state_25014;
(statearr_25032[(13)] = inst_25007);

return statearr_25032;
})();
var statearr_25033_25060 = state_25014__$1;
(statearr_25033_25060[(2)] = inst_25008);

(statearr_25033_25060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (10))){
var inst_24998 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25034_25061 = state_25014__$1;
(statearr_25034_25061[(2)] = inst_24998);

(statearr_25034_25061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (8))){
var inst_24987 = (state_25014[(11)]);
var inst_24978 = (state_25014[(8)]);
var tmp25031 = inst_24978;
var inst_24978__$1 = tmp25031;
var inst_24979 = inst_24987;
var state_25014__$1 = (function (){var statearr_25035 = state_25014;
(statearr_25035[(7)] = inst_24979);

(statearr_25035[(8)] = inst_24978__$1);

return statearr_25035;
})();
var statearr_25036_25062 = state_25014__$1;
(statearr_25036_25062[(2)] = null);

(statearr_25036_25062[(1)] = (2));


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
});})(c__22388__auto___25048,out))
;
return ((function (switch__22276__auto__,c__22388__auto___25048,out){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_25040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25040[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_25040[(1)] = (1));

return statearr_25040;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_25014){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_25014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e25041){if((e25041 instanceof Object)){
var ex__22280__auto__ = e25041;
var statearr_25042_25063 = state_25014;
(statearr_25042_25063[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25064 = state_25014;
state_25014 = G__25064;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___25048,out))
})();
var state__22390__auto__ = (function (){var statearr_25043 = f__22389__auto__.call(null);
(statearr_25043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___25048);

return statearr_25043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___25048,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25065 = [];
var len__20621__auto___25139 = arguments.length;
var i__20622__auto___25140 = (0);
while(true){
if((i__20622__auto___25140 < len__20621__auto___25139)){
args25065.push((arguments[i__20622__auto___25140]));

var G__25141 = (i__20622__auto___25140 + (1));
i__20622__auto___25140 = G__25141;
continue;
} else {
}
break;
}

var G__25067 = args25065.length;
switch (G__25067) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25065.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22388__auto___25143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___25143,out){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___25143,out){
return (function (state_25109){
var state_val_25110 = (state_25109[(1)]);
if((state_val_25110 === (7))){
var inst_25105 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25111_25144 = state_25109__$1;
(statearr_25111_25144[(2)] = inst_25105);

(statearr_25111_25144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (1))){
var inst_25068 = [];
var inst_25069 = inst_25068;
var inst_25070 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25109__$1 = (function (){var statearr_25112 = state_25109;
(statearr_25112[(7)] = inst_25069);

(statearr_25112[(8)] = inst_25070);

return statearr_25112;
})();
var statearr_25113_25145 = state_25109__$1;
(statearr_25113_25145[(2)] = null);

(statearr_25113_25145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (4))){
var inst_25073 = (state_25109[(9)]);
var inst_25073__$1 = (state_25109[(2)]);
var inst_25074 = (inst_25073__$1 == null);
var inst_25075 = cljs.core.not.call(null,inst_25074);
var state_25109__$1 = (function (){var statearr_25114 = state_25109;
(statearr_25114[(9)] = inst_25073__$1);

return statearr_25114;
})();
if(inst_25075){
var statearr_25115_25146 = state_25109__$1;
(statearr_25115_25146[(1)] = (5));

} else {
var statearr_25116_25147 = state_25109__$1;
(statearr_25116_25147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (15))){
var inst_25099 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25117_25148 = state_25109__$1;
(statearr_25117_25148[(2)] = inst_25099);

(statearr_25117_25148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (13))){
var state_25109__$1 = state_25109;
var statearr_25118_25149 = state_25109__$1;
(statearr_25118_25149[(2)] = null);

(statearr_25118_25149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (6))){
var inst_25069 = (state_25109[(7)]);
var inst_25094 = inst_25069.length;
var inst_25095 = (inst_25094 > (0));
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25095)){
var statearr_25119_25150 = state_25109__$1;
(statearr_25119_25150[(1)] = (12));

} else {
var statearr_25120_25151 = state_25109__$1;
(statearr_25120_25151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (3))){
var inst_25107 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25109__$1,inst_25107);
} else {
if((state_val_25110 === (12))){
var inst_25069 = (state_25109[(7)]);
var inst_25097 = cljs.core.vec.call(null,inst_25069);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25109__$1,(15),out,inst_25097);
} else {
if((state_val_25110 === (2))){
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25109__$1,(4),ch);
} else {
if((state_val_25110 === (11))){
var inst_25073 = (state_25109[(9)]);
var inst_25077 = (state_25109[(10)]);
var inst_25087 = (state_25109[(2)]);
var inst_25088 = [];
var inst_25089 = inst_25088.push(inst_25073);
var inst_25069 = inst_25088;
var inst_25070 = inst_25077;
var state_25109__$1 = (function (){var statearr_25121 = state_25109;
(statearr_25121[(11)] = inst_25087);

(statearr_25121[(7)] = inst_25069);

(statearr_25121[(12)] = inst_25089);

(statearr_25121[(8)] = inst_25070);

return statearr_25121;
})();
var statearr_25122_25152 = state_25109__$1;
(statearr_25122_25152[(2)] = null);

(statearr_25122_25152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (9))){
var inst_25069 = (state_25109[(7)]);
var inst_25085 = cljs.core.vec.call(null,inst_25069);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25109__$1,(11),out,inst_25085);
} else {
if((state_val_25110 === (5))){
var inst_25073 = (state_25109[(9)]);
var inst_25077 = (state_25109[(10)]);
var inst_25070 = (state_25109[(8)]);
var inst_25077__$1 = f.call(null,inst_25073);
var inst_25078 = cljs.core._EQ_.call(null,inst_25077__$1,inst_25070);
var inst_25079 = cljs.core.keyword_identical_QMARK_.call(null,inst_25070,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25080 = (inst_25078) || (inst_25079);
var state_25109__$1 = (function (){var statearr_25123 = state_25109;
(statearr_25123[(10)] = inst_25077__$1);

return statearr_25123;
})();
if(cljs.core.truth_(inst_25080)){
var statearr_25124_25153 = state_25109__$1;
(statearr_25124_25153[(1)] = (8));

} else {
var statearr_25125_25154 = state_25109__$1;
(statearr_25125_25154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (14))){
var inst_25102 = (state_25109[(2)]);
var inst_25103 = cljs.core.async.close_BANG_.call(null,out);
var state_25109__$1 = (function (){var statearr_25127 = state_25109;
(statearr_25127[(13)] = inst_25102);

return statearr_25127;
})();
var statearr_25128_25155 = state_25109__$1;
(statearr_25128_25155[(2)] = inst_25103);

(statearr_25128_25155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (10))){
var inst_25092 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25129_25156 = state_25109__$1;
(statearr_25129_25156[(2)] = inst_25092);

(statearr_25129_25156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (8))){
var inst_25069 = (state_25109[(7)]);
var inst_25073 = (state_25109[(9)]);
var inst_25077 = (state_25109[(10)]);
var inst_25082 = inst_25069.push(inst_25073);
var tmp25126 = inst_25069;
var inst_25069__$1 = tmp25126;
var inst_25070 = inst_25077;
var state_25109__$1 = (function (){var statearr_25130 = state_25109;
(statearr_25130[(7)] = inst_25069__$1);

(statearr_25130[(14)] = inst_25082);

(statearr_25130[(8)] = inst_25070);

return statearr_25130;
})();
var statearr_25131_25157 = state_25109__$1;
(statearr_25131_25157[(2)] = null);

(statearr_25131_25157[(1)] = (2));


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
});})(c__22388__auto___25143,out))
;
return ((function (switch__22276__auto__,c__22388__auto___25143,out){
return (function() {
var cljs$core$async$state_machine__22277__auto__ = null;
var cljs$core$async$state_machine__22277__auto____0 = (function (){
var statearr_25135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25135[(0)] = cljs$core$async$state_machine__22277__auto__);

(statearr_25135[(1)] = (1));

return statearr_25135;
});
var cljs$core$async$state_machine__22277__auto____1 = (function (state_25109){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_25109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e25136){if((e25136 instanceof Object)){
var ex__22280__auto__ = e25136;
var statearr_25137_25158 = state_25109;
(statearr_25137_25158[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25159 = state_25109;
state_25109 = G__25159;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
cljs$core$async$state_machine__22277__auto__ = function(state_25109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22277__auto____1.call(this,state_25109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22277__auto____0;
cljs$core$async$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22277__auto____1;
return cljs$core$async$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___25143,out))
})();
var state__22390__auto__ = (function (){var statearr_25138 = f__22389__auto__.call(null);
(statearr_25138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___25143);

return statearr_25138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___25143,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map