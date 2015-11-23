// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26493_26507 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26494_26508 = null;
var count__26495_26509 = (0);
var i__26496_26510 = (0);
while(true){
if((i__26496_26510 < count__26495_26509)){
var f_26511 = cljs.core._nth.call(null,chunk__26494_26508,i__26496_26510);
cljs.core.println.call(null,"  ",f_26511);

var G__26512 = seq__26493_26507;
var G__26513 = chunk__26494_26508;
var G__26514 = count__26495_26509;
var G__26515 = (i__26496_26510 + (1));
seq__26493_26507 = G__26512;
chunk__26494_26508 = G__26513;
count__26495_26509 = G__26514;
i__26496_26510 = G__26515;
continue;
} else {
var temp__4425__auto___26516 = cljs.core.seq.call(null,seq__26493_26507);
if(temp__4425__auto___26516){
var seq__26493_26517__$1 = temp__4425__auto___26516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26493_26517__$1)){
var c__20366__auto___26518 = cljs.core.chunk_first.call(null,seq__26493_26517__$1);
var G__26519 = cljs.core.chunk_rest.call(null,seq__26493_26517__$1);
var G__26520 = c__20366__auto___26518;
var G__26521 = cljs.core.count.call(null,c__20366__auto___26518);
var G__26522 = (0);
seq__26493_26507 = G__26519;
chunk__26494_26508 = G__26520;
count__26495_26509 = G__26521;
i__26496_26510 = G__26522;
continue;
} else {
var f_26523 = cljs.core.first.call(null,seq__26493_26517__$1);
cljs.core.println.call(null,"  ",f_26523);

var G__26524 = cljs.core.next.call(null,seq__26493_26517__$1);
var G__26525 = null;
var G__26526 = (0);
var G__26527 = (0);
seq__26493_26507 = G__26524;
chunk__26494_26508 = G__26525;
count__26495_26509 = G__26526;
i__26496_26510 = G__26527;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26528 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19563__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26528);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26528)))?cljs.core.second.call(null,arglists_26528):arglists_26528));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__26497 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26498 = null;
var count__26499 = (0);
var i__26500 = (0);
while(true){
if((i__26500 < count__26499)){
var vec__26501 = cljs.core._nth.call(null,chunk__26498,i__26500);
var name = cljs.core.nth.call(null,vec__26501,(0),null);
var map__26502 = cljs.core.nth.call(null,vec__26501,(1),null);
var map__26502__$1 = ((((!((map__26502 == null)))?((((map__26502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26502):map__26502);
var doc = cljs.core.get.call(null,map__26502__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26502__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26529 = seq__26497;
var G__26530 = chunk__26498;
var G__26531 = count__26499;
var G__26532 = (i__26500 + (1));
seq__26497 = G__26529;
chunk__26498 = G__26530;
count__26499 = G__26531;
i__26500 = G__26532;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26497);
if(temp__4425__auto__){
var seq__26497__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26497__$1)){
var c__20366__auto__ = cljs.core.chunk_first.call(null,seq__26497__$1);
var G__26533 = cljs.core.chunk_rest.call(null,seq__26497__$1);
var G__26534 = c__20366__auto__;
var G__26535 = cljs.core.count.call(null,c__20366__auto__);
var G__26536 = (0);
seq__26497 = G__26533;
chunk__26498 = G__26534;
count__26499 = G__26535;
i__26500 = G__26536;
continue;
} else {
var vec__26504 = cljs.core.first.call(null,seq__26497__$1);
var name = cljs.core.nth.call(null,vec__26504,(0),null);
var map__26505 = cljs.core.nth.call(null,vec__26504,(1),null);
var map__26505__$1 = ((((!((map__26505 == null)))?((((map__26505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26505):map__26505);
var doc = cljs.core.get.call(null,map__26505__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26505__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26537 = cljs.core.next.call(null,seq__26497__$1);
var G__26538 = null;
var G__26539 = (0);
var G__26540 = (0);
seq__26497 = G__26537;
chunk__26498 = G__26538;
count__26499 = G__26539;
i__26500 = G__26540;
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
}
});

//# sourceMappingURL=repl.js.map