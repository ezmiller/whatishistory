// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__20628__auto__ = [];
var len__20621__auto___21343 = arguments.length;
var i__20622__auto___21344 = (0);
while(true){
if((i__20622__auto___21344 < len__20621__auto___21343)){
args__20628__auto__.push((arguments[i__20622__auto___21344]));

var G__21345 = (i__20622__auto___21344 + (1));
i__20622__auto___21344 = G__21345;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((1) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20629__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21341){
var vec__21342 = p__21341;
var default$ = cljs.core.nth.call(null,vec__21342,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq21339){
var G__21340 = cljs.core.first.call(null,seq21339);
var seq21339__$1 = cljs.core.next.call(null,seq21339);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__21340,seq21339__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__20628__auto__ = [];
var len__20621__auto___21350 = arguments.length;
var i__20622__auto___21351 = (0);
while(true){
if((i__20622__auto___21351 < len__20621__auto___21350)){
args__20628__auto__.push((arguments[i__20622__auto___21351]));

var G__21352 = (i__20622__auto___21351 + (1));
i__20622__auto___21351 = G__21352;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((1) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20629__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21348){
var vec__21349 = p__21348;
var default$ = cljs.core.nth.call(null,vec__21349,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq21346){
var G__21347 = cljs.core.first.call(null,seq21346);
var seq21346__$1 = cljs.core.next.call(null,seq21346);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__21347,seq21346__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20628__auto__ = [];
var len__20621__auto___21355 = arguments.length;
var i__20622__auto___21356 = (0);
while(true){
if((i__20622__auto___21356 < len__20621__auto___21355)){
args__20628__auto__.push((arguments[i__20622__auto___21356]));

var G__21357 = (i__20622__auto___21356 + (1));
i__20622__auto___21356 = G__21357;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((1) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20629__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq21353){
var G__21354 = cljs.core.first.call(null,seq21353);
var seq21353__$1 = cljs.core.next.call(null,seq21353);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21354,seq21353__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21358_SHARP_){
return cljs.core.assoc_in.call(null,p1__21358_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20628__auto__ = [];
var len__20621__auto___21363 = arguments.length;
var i__20622__auto___21364 = (0);
while(true){
if((i__20622__auto___21364 < len__20621__auto___21363)){
args__20628__auto__.push((arguments[i__20622__auto___21364]));

var G__21365 = (i__20622__auto___21364 + (1));
i__20622__auto___21364 = G__21365;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((1) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20629__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21361){
var vec__21362 = p__21361;
var default$ = cljs.core.nth.call(null,vec__21362,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq21359){
var G__21360 = cljs.core.first.call(null,seq21359);
var seq21359__$1 = cljs.core.next.call(null,seq21359);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21360,seq21359__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20628__auto__ = [];
var len__20621__auto___21370 = arguments.length;
var i__20622__auto___21371 = (0);
while(true){
if((i__20622__auto___21371 < len__20621__auto___21370)){
args__20628__auto__.push((arguments[i__20622__auto___21371]));

var G__21372 = (i__20622__auto___21371 + (1));
i__20622__auto___21371 = G__21372;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((1) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20629__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21368){
var vec__21369 = p__21368;
var default$ = cljs.core.nth.call(null,vec__21369,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq21366){
var G__21367 = cljs.core.first.call(null,seq21366);
var seq21366__$1 = cljs.core.next.call(null,seq21366);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21367,seq21366__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__20628__auto__ = [];
var len__20621__auto___21377 = arguments.length;
var i__20622__auto___21378 = (0);
while(true){
if((i__20622__auto___21378 < len__20621__auto___21377)){
args__20628__auto__.push((arguments[i__20622__auto___21378]));

var G__21379 = (i__20622__auto___21378 + (1));
i__20622__auto___21378 = G__21379;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((2) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20629__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21373_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__21373_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq21374){
var G__21375 = cljs.core.first.call(null,seq21374);
var seq21374__$1 = cljs.core.next.call(null,seq21374);
var G__21376 = cljs.core.first.call(null,seq21374__$1);
var seq21374__$2 = cljs.core.next.call(null,seq21374__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21375,G__21376,seq21374__$2);
});

//# sourceMappingURL=session.js.map