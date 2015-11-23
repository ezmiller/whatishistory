// Compiled by ClojureScript 1.7.170 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history){
var navigation = accountant.core.listen.call(null,history,goog.history.EventType.NAVIGATE);
var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__,navigation){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__,navigation){
return (function (state_25329){
var state_val_25330 = (state_25329[(1)]);
if((state_val_25330 === (1))){
var state_25329__$1 = state_25329;
var statearr_25331_25345 = state_25329__$1;
(statearr_25331_25345[(2)] = null);

(statearr_25331_25345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (2))){
var state_25329__$1 = state_25329;
var statearr_25332_25346 = state_25329__$1;
(statearr_25332_25346[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (3))){
var inst_25327 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25329__$1,inst_25327);
} else {
if((state_val_25330 === (4))){
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25329__$1,(7),navigation);
} else {
if((state_val_25330 === (5))){
var state_25329__$1 = state_25329;
var statearr_25334_25347 = state_25329__$1;
(statearr_25334_25347[(2)] = null);

(statearr_25334_25347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (6))){
var inst_25325 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25335_25348 = state_25329__$1;
(statearr_25335_25348[(2)] = inst_25325);

(statearr_25335_25348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (7))){
var inst_25319 = (state_25329[(2)]);
var inst_25320 = inst_25319.token;
var inst_25321 = secretary.core.dispatch_BANG_.call(null,inst_25320);
var state_25329__$1 = (function (){var statearr_25336 = state_25329;
(statearr_25336[(7)] = inst_25321);

return statearr_25336;
})();
var statearr_25337_25349 = state_25329__$1;
(statearr_25337_25349[(2)] = null);

(statearr_25337_25349[(1)] = (2));


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
});})(c__22388__auto__,navigation))
;
return ((function (switch__22276__auto__,c__22388__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__22277__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__22277__auto____0 = (function (){
var statearr_25341 = [null,null,null,null,null,null,null,null];
(statearr_25341[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__22277__auto__);

(statearr_25341[(1)] = (1));

return statearr_25341;
});
var accountant$core$dispatch_on_navigate_$_state_machine__22277__auto____1 = (function (state_25329){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_25329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e25342){if((e25342 instanceof Object)){
var ex__22280__auto__ = e25342;
var statearr_25343_25350 = state_25329;
(statearr_25343_25350[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25351 = state_25329;
state_25329 = G__25351;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__22277__auto__ = function(state_25329){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__22277__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__22277__auto____1.call(this,state_25329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__22277__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__22277__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__,navigation))
})();
var state__22390__auto__ = (function (){var statearr_25344 = f__22389__auto__.call(null);
(statearr_25344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_25344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__,navigation))
);

return c__22388__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4423__auto__ = e.href;
if(cljs.core.truth_(temp__4423__auto__)){
var href = temp__4423__auto__;
return href;
} else {
var temp__4425__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__25352 = parent;
e = G__25352;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Create a click handler that blocks page reloads for known routes in
 *   Secretary.
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__19563__auto__ = meta_key;
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
var or__19563__auto____$1 = alt_key;
if(cljs.core.truth_(or__19563__auto____$1)){
return or__19563__auto____$1;
} else {
var or__19563__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__19563__auto____$2)){
return or__19563__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href.call(null,target);
var path = goog.Uri.parse(href).getPath();
var title = target.title;
if(cljs.core.truth_((function (){var and__19551__auto__ = cljs.core.not.call(null,any_key);
if(and__19551__auto__){
var and__19551__auto____$1 = cljs.core._EQ_.call(null,button,(0));
if(and__19551__auto____$1){
return secretary.core.locate_route.call(null,path);
} else {
return and__19551__auto____$1;
}
} else {
return and__19551__auto__;
}
})())){
history.setToken(path,title);

return e.preventDefault();
} else {
return null;
}
}));
});
/**
 * Create and configure HTML5 history navigation.
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(){
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.dispatch_on_navigate.call(null,accountant.core.history);

return accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__25353_SHARP_){
return cljs.core.name.call(null,p1__25353_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,values,pairs){
return (function (p1__25354_SHARP_){
return clojure.string.join.call(null,"=",p1__25354_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args25355 = [];
var len__20621__auto___25358 = arguments.length;
var i__20622__auto___25359 = (0);
while(true){
if((i__20622__auto___25359 < len__20621__auto___25358)){
args25355.push((arguments[i__20622__auto___25359]));

var G__25360 = (i__20622__auto___25359 + (1));
i__20622__auto___25359 = G__25360;
continue;
} else {
}
break;
}

var G__25357 = args25355.length;
switch (G__25357) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25355.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
return secretary.core.dispatch_BANG_.call(null,[cljs.core.str(path),cljs.core.str(query)].join(''));
});

//# sourceMappingURL=core.js.map