// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26788 = cljs.core._EQ_;
var expr__26789 = (function (){var or__19563__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26788.call(null,"true",expr__26789))){
return true;
} else {
if(cljs.core.truth_(pred__26788.call(null,"false",expr__26789))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26789)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26791__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26792__i = 0, G__26792__a = new Array(arguments.length -  0);
while (G__26792__i < G__26792__a.length) {G__26792__a[G__26792__i] = arguments[G__26792__i + 0]; ++G__26792__i;}
  args = new cljs.core.IndexedSeq(G__26792__a,0);
} 
return G__26791__delegate.call(this,args);};
G__26791.cljs$lang$maxFixedArity = 0;
G__26791.cljs$lang$applyTo = (function (arglist__26793){
var args = cljs.core.seq(arglist__26793);
return G__26791__delegate(args);
});
G__26791.cljs$core$IFn$_invoke$arity$variadic = G__26791__delegate;
return G__26791;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26794){
var map__26797 = p__26794;
var map__26797__$1 = ((((!((map__26797 == null)))?((((map__26797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26797):map__26797);
var message = cljs.core.get.call(null,map__26797__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26797__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19563__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19551__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19551__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19551__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22388__auto___26959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___26959,ch){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___26959,ch){
return (function (state_26928){
var state_val_26929 = (state_26928[(1)]);
if((state_val_26929 === (7))){
var inst_26924 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26930_26960 = state_26928__$1;
(statearr_26930_26960[(2)] = inst_26924);

(statearr_26930_26960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (1))){
var state_26928__$1 = state_26928;
var statearr_26931_26961 = state_26928__$1;
(statearr_26931_26961[(2)] = null);

(statearr_26931_26961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (4))){
var inst_26881 = (state_26928[(7)]);
var inst_26881__$1 = (state_26928[(2)]);
var state_26928__$1 = (function (){var statearr_26932 = state_26928;
(statearr_26932[(7)] = inst_26881__$1);

return statearr_26932;
})();
if(cljs.core.truth_(inst_26881__$1)){
var statearr_26933_26962 = state_26928__$1;
(statearr_26933_26962[(1)] = (5));

} else {
var statearr_26934_26963 = state_26928__$1;
(statearr_26934_26963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (15))){
var inst_26888 = (state_26928[(8)]);
var inst_26903 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26888);
var inst_26904 = cljs.core.first.call(null,inst_26903);
var inst_26905 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26904);
var inst_26906 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26905)].join('');
var inst_26907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26906);
var state_26928__$1 = state_26928;
var statearr_26935_26964 = state_26928__$1;
(statearr_26935_26964[(2)] = inst_26907);

(statearr_26935_26964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (13))){
var inst_26912 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26936_26965 = state_26928__$1;
(statearr_26936_26965[(2)] = inst_26912);

(statearr_26936_26965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (6))){
var state_26928__$1 = state_26928;
var statearr_26937_26966 = state_26928__$1;
(statearr_26937_26966[(2)] = null);

(statearr_26937_26966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (17))){
var inst_26910 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26938_26967 = state_26928__$1;
(statearr_26938_26967[(2)] = inst_26910);

(statearr_26938_26967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (3))){
var inst_26926 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26928__$1,inst_26926);
} else {
if((state_val_26929 === (12))){
var inst_26887 = (state_26928[(9)]);
var inst_26901 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26887,opts);
var state_26928__$1 = state_26928;
if(cljs.core.truth_(inst_26901)){
var statearr_26939_26968 = state_26928__$1;
(statearr_26939_26968[(1)] = (15));

} else {
var statearr_26940_26969 = state_26928__$1;
(statearr_26940_26969[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (2))){
var state_26928__$1 = state_26928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26928__$1,(4),ch);
} else {
if((state_val_26929 === (11))){
var inst_26888 = (state_26928[(8)]);
var inst_26893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26894 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26888);
var inst_26895 = cljs.core.async.timeout.call(null,(1000));
var inst_26896 = [inst_26894,inst_26895];
var inst_26897 = (new cljs.core.PersistentVector(null,2,(5),inst_26893,inst_26896,null));
var state_26928__$1 = state_26928;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26928__$1,(14),inst_26897);
} else {
if((state_val_26929 === (9))){
var inst_26888 = (state_26928[(8)]);
var inst_26914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26915 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26888);
var inst_26916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26915);
var inst_26917 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26916)].join('');
var inst_26918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26917);
var state_26928__$1 = (function (){var statearr_26941 = state_26928;
(statearr_26941[(10)] = inst_26914);

return statearr_26941;
})();
var statearr_26942_26970 = state_26928__$1;
(statearr_26942_26970[(2)] = inst_26918);

(statearr_26942_26970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (5))){
var inst_26881 = (state_26928[(7)]);
var inst_26883 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26884 = (new cljs.core.PersistentArrayMap(null,2,inst_26883,null));
var inst_26885 = (new cljs.core.PersistentHashSet(null,inst_26884,null));
var inst_26886 = figwheel.client.focus_msgs.call(null,inst_26885,inst_26881);
var inst_26887 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26886);
var inst_26888 = cljs.core.first.call(null,inst_26886);
var inst_26889 = figwheel.client.autoload_QMARK_.call(null);
var state_26928__$1 = (function (){var statearr_26943 = state_26928;
(statearr_26943[(9)] = inst_26887);

(statearr_26943[(8)] = inst_26888);

return statearr_26943;
})();
if(cljs.core.truth_(inst_26889)){
var statearr_26944_26971 = state_26928__$1;
(statearr_26944_26971[(1)] = (8));

} else {
var statearr_26945_26972 = state_26928__$1;
(statearr_26945_26972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (14))){
var inst_26899 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26946_26973 = state_26928__$1;
(statearr_26946_26973[(2)] = inst_26899);

(statearr_26946_26973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (16))){
var state_26928__$1 = state_26928;
var statearr_26947_26974 = state_26928__$1;
(statearr_26947_26974[(2)] = null);

(statearr_26947_26974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (10))){
var inst_26920 = (state_26928[(2)]);
var state_26928__$1 = (function (){var statearr_26948 = state_26928;
(statearr_26948[(11)] = inst_26920);

return statearr_26948;
})();
var statearr_26949_26975 = state_26928__$1;
(statearr_26949_26975[(2)] = null);

(statearr_26949_26975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (8))){
var inst_26887 = (state_26928[(9)]);
var inst_26891 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26887,opts);
var state_26928__$1 = state_26928;
if(cljs.core.truth_(inst_26891)){
var statearr_26950_26976 = state_26928__$1;
(statearr_26950_26976[(1)] = (11));

} else {
var statearr_26951_26977 = state_26928__$1;
(statearr_26951_26977[(1)] = (12));

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
});})(c__22388__auto___26959,ch))
;
return ((function (switch__22276__auto__,c__22388__auto___26959,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22277__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22277__auto____0 = (function (){
var statearr_26955 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26955[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22277__auto__);

(statearr_26955[(1)] = (1));

return statearr_26955;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22277__auto____1 = (function (state_26928){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_26928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e26956){if((e26956 instanceof Object)){
var ex__22280__auto__ = e26956;
var statearr_26957_26978 = state_26928;
(statearr_26957_26978[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26979 = state_26928;
state_26928 = G__26979;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22277__auto__ = function(state_26928){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22277__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22277__auto____1.call(this,state_26928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22277__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22277__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___26959,ch))
})();
var state__22390__auto__ = (function (){var statearr_26958 = f__22389__auto__.call(null);
(statearr_26958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___26959);

return statearr_26958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___26959,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26980_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26980_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26987 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26987){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26985 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26986 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26985,_STAR_print_newline_STAR_26986,base_path_26987){
return (function() { 
var G__26988__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26989__i = 0, G__26989__a = new Array(arguments.length -  0);
while (G__26989__i < G__26989__a.length) {G__26989__a[G__26989__i] = arguments[G__26989__i + 0]; ++G__26989__i;}
  args = new cljs.core.IndexedSeq(G__26989__a,0);
} 
return G__26988__delegate.call(this,args);};
G__26988.cljs$lang$maxFixedArity = 0;
G__26988.cljs$lang$applyTo = (function (arglist__26990){
var args = cljs.core.seq(arglist__26990);
return G__26988__delegate(args);
});
G__26988.cljs$core$IFn$_invoke$arity$variadic = G__26988__delegate;
return G__26988;
})()
;})(_STAR_print_fn_STAR_26985,_STAR_print_newline_STAR_26986,base_path_26987))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26986;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26985;
}}catch (e26984){if((e26984 instanceof Error)){
var e = e26984;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26987], null));
} else {
var e = e26984;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26987))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26991){
var map__26998 = p__26991;
var map__26998__$1 = ((((!((map__26998 == null)))?((((map__26998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26998):map__26998);
var opts = map__26998__$1;
var build_id = cljs.core.get.call(null,map__26998__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26998,map__26998__$1,opts,build_id){
return (function (p__27000){
var vec__27001 = p__27000;
var map__27002 = cljs.core.nth.call(null,vec__27001,(0),null);
var map__27002__$1 = ((((!((map__27002 == null)))?((((map__27002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27002):map__27002);
var msg = map__27002__$1;
var msg_name = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27001,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27001,map__27002,map__27002__$1,msg,msg_name,_,map__26998,map__26998__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27001,map__27002,map__27002__$1,msg,msg_name,_,map__26998,map__26998__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26998,map__26998__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27008){
var vec__27009 = p__27008;
var map__27010 = cljs.core.nth.call(null,vec__27009,(0),null);
var map__27010__$1 = ((((!((map__27010 == null)))?((((map__27010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27010):map__27010);
var msg = map__27010__$1;
var msg_name = cljs.core.get.call(null,map__27010__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27009,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27012){
var map__27022 = p__27012;
var map__27022__$1 = ((((!((map__27022 == null)))?((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var on_compile_warning = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27022,map__27022__$1,on_compile_warning,on_compile_fail){
return (function (p__27024){
var vec__27025 = p__27024;
var map__27026 = cljs.core.nth.call(null,vec__27025,(0),null);
var map__27026__$1 = ((((!((map__27026 == null)))?((((map__27026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27026):map__27026);
var msg = map__27026__$1;
var msg_name = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27025,(1));
var pred__27028 = cljs.core._EQ_;
var expr__27029 = msg_name;
if(cljs.core.truth_(pred__27028.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27029))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27028.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27029))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27022,map__27022__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__,msg_hist,msg_names,msg){
return (function (state_27245){
var state_val_27246 = (state_27245[(1)]);
if((state_val_27246 === (7))){
var inst_27169 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27169)){
var statearr_27247_27293 = state_27245__$1;
(statearr_27247_27293[(1)] = (8));

} else {
var statearr_27248_27294 = state_27245__$1;
(statearr_27248_27294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (20))){
var inst_27239 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27249_27295 = state_27245__$1;
(statearr_27249_27295[(2)] = inst_27239);

(statearr_27249_27295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (27))){
var inst_27235 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27250_27296 = state_27245__$1;
(statearr_27250_27296[(2)] = inst_27235);

(statearr_27250_27296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (1))){
var inst_27162 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27162)){
var statearr_27251_27297 = state_27245__$1;
(statearr_27251_27297[(1)] = (2));

} else {
var statearr_27252_27298 = state_27245__$1;
(statearr_27252_27298[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (24))){
var inst_27237 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27253_27299 = state_27245__$1;
(statearr_27253_27299[(2)] = inst_27237);

(statearr_27253_27299[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (4))){
var inst_27243 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27245__$1,inst_27243);
} else {
if((state_val_27246 === (15))){
var inst_27241 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27254_27300 = state_27245__$1;
(statearr_27254_27300[(2)] = inst_27241);

(statearr_27254_27300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (21))){
var inst_27200 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27255_27301 = state_27245__$1;
(statearr_27255_27301[(2)] = inst_27200);

(statearr_27255_27301[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (31))){
var inst_27224 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27224)){
var statearr_27256_27302 = state_27245__$1;
(statearr_27256_27302[(1)] = (34));

} else {
var statearr_27257_27303 = state_27245__$1;
(statearr_27257_27303[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (32))){
var inst_27233 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27258_27304 = state_27245__$1;
(statearr_27258_27304[(2)] = inst_27233);

(statearr_27258_27304[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (33))){
var inst_27222 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27259_27305 = state_27245__$1;
(statearr_27259_27305[(2)] = inst_27222);

(statearr_27259_27305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (13))){
var inst_27183 = figwheel.client.heads_up.clear.call(null);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(16),inst_27183);
} else {
if((state_val_27246 === (22))){
var inst_27204 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27205 = figwheel.client.heads_up.append_message.call(null,inst_27204);
var state_27245__$1 = state_27245;
var statearr_27260_27306 = state_27245__$1;
(statearr_27260_27306[(2)] = inst_27205);

(statearr_27260_27306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (36))){
var inst_27231 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27261_27307 = state_27245__$1;
(statearr_27261_27307[(2)] = inst_27231);

(statearr_27261_27307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (29))){
var inst_27215 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27262_27308 = state_27245__$1;
(statearr_27262_27308[(2)] = inst_27215);

(statearr_27262_27308[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (6))){
var inst_27164 = (state_27245[(7)]);
var state_27245__$1 = state_27245;
var statearr_27263_27309 = state_27245__$1;
(statearr_27263_27309[(2)] = inst_27164);

(statearr_27263_27309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (28))){
var inst_27211 = (state_27245[(2)]);
var inst_27212 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27213 = figwheel.client.heads_up.display_warning.call(null,inst_27212);
var state_27245__$1 = (function (){var statearr_27264 = state_27245;
(statearr_27264[(8)] = inst_27211);

return statearr_27264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(29),inst_27213);
} else {
if((state_val_27246 === (25))){
var inst_27209 = figwheel.client.heads_up.clear.call(null);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(28),inst_27209);
} else {
if((state_val_27246 === (34))){
var inst_27226 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(37),inst_27226);
} else {
if((state_val_27246 === (17))){
var inst_27191 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27265_27310 = state_27245__$1;
(statearr_27265_27310[(2)] = inst_27191);

(statearr_27265_27310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (3))){
var inst_27181 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27181)){
var statearr_27266_27311 = state_27245__$1;
(statearr_27266_27311[(1)] = (13));

} else {
var statearr_27267_27312 = state_27245__$1;
(statearr_27267_27312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (12))){
var inst_27177 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27268_27313 = state_27245__$1;
(statearr_27268_27313[(2)] = inst_27177);

(statearr_27268_27313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (2))){
var inst_27164 = (state_27245[(7)]);
var inst_27164__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27245__$1 = (function (){var statearr_27269 = state_27245;
(statearr_27269[(7)] = inst_27164__$1);

return statearr_27269;
})();
if(cljs.core.truth_(inst_27164__$1)){
var statearr_27270_27314 = state_27245__$1;
(statearr_27270_27314[(1)] = (5));

} else {
var statearr_27271_27315 = state_27245__$1;
(statearr_27271_27315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (23))){
var inst_27207 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27207)){
var statearr_27272_27316 = state_27245__$1;
(statearr_27272_27316[(1)] = (25));

} else {
var statearr_27273_27317 = state_27245__$1;
(statearr_27273_27317[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (35))){
var state_27245__$1 = state_27245;
var statearr_27274_27318 = state_27245__$1;
(statearr_27274_27318[(2)] = null);

(statearr_27274_27318[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (19))){
var inst_27202 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27202)){
var statearr_27275_27319 = state_27245__$1;
(statearr_27275_27319[(1)] = (22));

} else {
var statearr_27276_27320 = state_27245__$1;
(statearr_27276_27320[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (11))){
var inst_27173 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27277_27321 = state_27245__$1;
(statearr_27277_27321[(2)] = inst_27173);

(statearr_27277_27321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (9))){
var inst_27175 = figwheel.client.heads_up.clear.call(null);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(12),inst_27175);
} else {
if((state_val_27246 === (5))){
var inst_27166 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27245__$1 = state_27245;
var statearr_27278_27322 = state_27245__$1;
(statearr_27278_27322[(2)] = inst_27166);

(statearr_27278_27322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (14))){
var inst_27193 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27193)){
var statearr_27279_27323 = state_27245__$1;
(statearr_27279_27323[(1)] = (18));

} else {
var statearr_27280_27324 = state_27245__$1;
(statearr_27280_27324[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (26))){
var inst_27217 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27245__$1 = state_27245;
if(cljs.core.truth_(inst_27217)){
var statearr_27281_27325 = state_27245__$1;
(statearr_27281_27325[(1)] = (30));

} else {
var statearr_27282_27326 = state_27245__$1;
(statearr_27282_27326[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (16))){
var inst_27185 = (state_27245[(2)]);
var inst_27186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27187 = figwheel.client.format_messages.call(null,inst_27186);
var inst_27188 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27189 = figwheel.client.heads_up.display_error.call(null,inst_27187,inst_27188);
var state_27245__$1 = (function (){var statearr_27283 = state_27245;
(statearr_27283[(9)] = inst_27185);

return statearr_27283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(17),inst_27189);
} else {
if((state_val_27246 === (30))){
var inst_27219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27220 = figwheel.client.heads_up.display_warning.call(null,inst_27219);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(33),inst_27220);
} else {
if((state_val_27246 === (10))){
var inst_27179 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27284_27327 = state_27245__$1;
(statearr_27284_27327[(2)] = inst_27179);

(statearr_27284_27327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (18))){
var inst_27195 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27196 = figwheel.client.format_messages.call(null,inst_27195);
var inst_27197 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27198 = figwheel.client.heads_up.display_error.call(null,inst_27196,inst_27197);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(21),inst_27198);
} else {
if((state_val_27246 === (37))){
var inst_27228 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27285_27328 = state_27245__$1;
(statearr_27285_27328[(2)] = inst_27228);

(statearr_27285_27328[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (8))){
var inst_27171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(11),inst_27171);
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
});})(c__22388__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22276__auto__,c__22388__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto____0 = (function (){
var statearr_27289 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27289[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto__);

(statearr_27289[(1)] = (1));

return statearr_27289;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto____1 = (function (state_27245){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_27245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e27290){if((e27290 instanceof Object)){
var ex__22280__auto__ = e27290;
var statearr_27291_27329 = state_27245;
(statearr_27291_27329[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27330 = state_27245;
state_27245 = G__27330;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto__ = function(state_27245){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto____1.call(this,state_27245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__,msg_hist,msg_names,msg))
})();
var state__22390__auto__ = (function (){var statearr_27292 = f__22389__auto__.call(null);
(statearr_27292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_27292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__,msg_hist,msg_names,msg))
);

return c__22388__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22388__auto___27393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___27393,ch){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___27393,ch){
return (function (state_27376){
var state_val_27377 = (state_27376[(1)]);
if((state_val_27377 === (1))){
var state_27376__$1 = state_27376;
var statearr_27378_27394 = state_27376__$1;
(statearr_27378_27394[(2)] = null);

(statearr_27378_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (2))){
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27376__$1,(4),ch);
} else {
if((state_val_27377 === (3))){
var inst_27374 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27376__$1,inst_27374);
} else {
if((state_val_27377 === (4))){
var inst_27364 = (state_27376[(7)]);
var inst_27364__$1 = (state_27376[(2)]);
var state_27376__$1 = (function (){var statearr_27379 = state_27376;
(statearr_27379[(7)] = inst_27364__$1);

return statearr_27379;
})();
if(cljs.core.truth_(inst_27364__$1)){
var statearr_27380_27395 = state_27376__$1;
(statearr_27380_27395[(1)] = (5));

} else {
var statearr_27381_27396 = state_27376__$1;
(statearr_27381_27396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (5))){
var inst_27364 = (state_27376[(7)]);
var inst_27366 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27364);
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27376__$1,(8),inst_27366);
} else {
if((state_val_27377 === (6))){
var state_27376__$1 = state_27376;
var statearr_27382_27397 = state_27376__$1;
(statearr_27382_27397[(2)] = null);

(statearr_27382_27397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (7))){
var inst_27372 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
var statearr_27383_27398 = state_27376__$1;
(statearr_27383_27398[(2)] = inst_27372);

(statearr_27383_27398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (8))){
var inst_27368 = (state_27376[(2)]);
var state_27376__$1 = (function (){var statearr_27384 = state_27376;
(statearr_27384[(8)] = inst_27368);

return statearr_27384;
})();
var statearr_27385_27399 = state_27376__$1;
(statearr_27385_27399[(2)] = null);

(statearr_27385_27399[(1)] = (2));


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
});})(c__22388__auto___27393,ch))
;
return ((function (switch__22276__auto__,c__22388__auto___27393,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22277__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22277__auto____0 = (function (){
var statearr_27389 = [null,null,null,null,null,null,null,null,null];
(statearr_27389[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22277__auto__);

(statearr_27389[(1)] = (1));

return statearr_27389;
});
var figwheel$client$heads_up_plugin_$_state_machine__22277__auto____1 = (function (state_27376){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_27376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object)){
var ex__22280__auto__ = e27390;
var statearr_27391_27400 = state_27376;
(statearr_27391_27400[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27401 = state_27376;
state_27376 = G__27401;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22277__auto__ = function(state_27376){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22277__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22277__auto____1.call(this,state_27376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22277__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22277__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___27393,ch))
})();
var state__22390__auto__ = (function (){var statearr_27392 = f__22389__auto__.call(null);
(statearr_27392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___27393);

return statearr_27392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___27393,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__){
return (function (state_27422){
var state_val_27423 = (state_27422[(1)]);
if((state_val_27423 === (1))){
var inst_27417 = cljs.core.async.timeout.call(null,(3000));
var state_27422__$1 = state_27422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27422__$1,(2),inst_27417);
} else {
if((state_val_27423 === (2))){
var inst_27419 = (state_27422[(2)]);
var inst_27420 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27422__$1 = (function (){var statearr_27424 = state_27422;
(statearr_27424[(7)] = inst_27419);

return statearr_27424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27422__$1,inst_27420);
} else {
return null;
}
}
});})(c__22388__auto__))
;
return ((function (switch__22276__auto__,c__22388__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22277__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22277__auto____0 = (function (){
var statearr_27428 = [null,null,null,null,null,null,null,null];
(statearr_27428[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22277__auto__);

(statearr_27428[(1)] = (1));

return statearr_27428;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22277__auto____1 = (function (state_27422){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_27422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e27429){if((e27429 instanceof Object)){
var ex__22280__auto__ = e27429;
var statearr_27430_27432 = state_27422;
(statearr_27430_27432[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27433 = state_27422;
state_27422 = G__27433;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22277__auto__ = function(state_27422){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22277__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22277__auto____1.call(this,state_27422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22277__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22277__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__))
})();
var state__22390__auto__ = (function (){var statearr_27431 = f__22389__auto__.call(null);
(statearr_27431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_27431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__))
);

return c__22388__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27434){
var map__27441 = p__27434;
var map__27441__$1 = ((((!((map__27441 == null)))?((((map__27441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27441):map__27441);
var ed = map__27441__$1;
var formatted_exception = cljs.core.get.call(null,map__27441__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27441__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27441__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27443_27447 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27444_27448 = null;
var count__27445_27449 = (0);
var i__27446_27450 = (0);
while(true){
if((i__27446_27450 < count__27445_27449)){
var msg_27451 = cljs.core._nth.call(null,chunk__27444_27448,i__27446_27450);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27451);

var G__27452 = seq__27443_27447;
var G__27453 = chunk__27444_27448;
var G__27454 = count__27445_27449;
var G__27455 = (i__27446_27450 + (1));
seq__27443_27447 = G__27452;
chunk__27444_27448 = G__27453;
count__27445_27449 = G__27454;
i__27446_27450 = G__27455;
continue;
} else {
var temp__4425__auto___27456 = cljs.core.seq.call(null,seq__27443_27447);
if(temp__4425__auto___27456){
var seq__27443_27457__$1 = temp__4425__auto___27456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27443_27457__$1)){
var c__20366__auto___27458 = cljs.core.chunk_first.call(null,seq__27443_27457__$1);
var G__27459 = cljs.core.chunk_rest.call(null,seq__27443_27457__$1);
var G__27460 = c__20366__auto___27458;
var G__27461 = cljs.core.count.call(null,c__20366__auto___27458);
var G__27462 = (0);
seq__27443_27447 = G__27459;
chunk__27444_27448 = G__27460;
count__27445_27449 = G__27461;
i__27446_27450 = G__27462;
continue;
} else {
var msg_27463 = cljs.core.first.call(null,seq__27443_27457__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27463);

var G__27464 = cljs.core.next.call(null,seq__27443_27457__$1);
var G__27465 = null;
var G__27466 = (0);
var G__27467 = (0);
seq__27443_27447 = G__27464;
chunk__27444_27448 = G__27465;
count__27445_27449 = G__27466;
i__27446_27450 = G__27467;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27468){
var map__27471 = p__27468;
var map__27471__$1 = ((((!((map__27471 == null)))?((((map__27471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27471):map__27471);
var w = map__27471__$1;
var message = cljs.core.get.call(null,map__27471__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19551__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19551__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19551__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27479 = cljs.core.seq.call(null,plugins);
var chunk__27480 = null;
var count__27481 = (0);
var i__27482 = (0);
while(true){
if((i__27482 < count__27481)){
var vec__27483 = cljs.core._nth.call(null,chunk__27480,i__27482);
var k = cljs.core.nth.call(null,vec__27483,(0),null);
var plugin = cljs.core.nth.call(null,vec__27483,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27485 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27479,chunk__27480,count__27481,i__27482,pl_27485,vec__27483,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27485.call(null,msg_hist);
});})(seq__27479,chunk__27480,count__27481,i__27482,pl_27485,vec__27483,k,plugin))
);
} else {
}

var G__27486 = seq__27479;
var G__27487 = chunk__27480;
var G__27488 = count__27481;
var G__27489 = (i__27482 + (1));
seq__27479 = G__27486;
chunk__27480 = G__27487;
count__27481 = G__27488;
i__27482 = G__27489;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27479);
if(temp__4425__auto__){
var seq__27479__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27479__$1)){
var c__20366__auto__ = cljs.core.chunk_first.call(null,seq__27479__$1);
var G__27490 = cljs.core.chunk_rest.call(null,seq__27479__$1);
var G__27491 = c__20366__auto__;
var G__27492 = cljs.core.count.call(null,c__20366__auto__);
var G__27493 = (0);
seq__27479 = G__27490;
chunk__27480 = G__27491;
count__27481 = G__27492;
i__27482 = G__27493;
continue;
} else {
var vec__27484 = cljs.core.first.call(null,seq__27479__$1);
var k = cljs.core.nth.call(null,vec__27484,(0),null);
var plugin = cljs.core.nth.call(null,vec__27484,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27494 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27479,chunk__27480,count__27481,i__27482,pl_27494,vec__27484,k,plugin,seq__27479__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27494.call(null,msg_hist);
});})(seq__27479,chunk__27480,count__27481,i__27482,pl_27494,vec__27484,k,plugin,seq__27479__$1,temp__4425__auto__))
);
} else {
}

var G__27495 = cljs.core.next.call(null,seq__27479__$1);
var G__27496 = null;
var G__27497 = (0);
var G__27498 = (0);
seq__27479 = G__27495;
chunk__27480 = G__27496;
count__27481 = G__27497;
i__27482 = G__27498;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27499 = [];
var len__20621__auto___27502 = arguments.length;
var i__20622__auto___27503 = (0);
while(true){
if((i__20622__auto___27503 < len__20621__auto___27502)){
args27499.push((arguments[i__20622__auto___27503]));

var G__27504 = (i__20622__auto___27503 + (1));
i__20622__auto___27503 = G__27504;
continue;
} else {
}
break;
}

var G__27501 = args27499.length;
switch (G__27501) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27499.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20628__auto__ = [];
var len__20621__auto___27510 = arguments.length;
var i__20622__auto___27511 = (0);
while(true){
if((i__20622__auto___27511 < len__20621__auto___27510)){
args__20628__auto__.push((arguments[i__20622__auto___27511]));

var G__27512 = (i__20622__auto___27511 + (1));
i__20622__auto___27511 = G__27512;
continue;
} else {
}
break;
}

var argseq__20629__auto__ = ((((0) < args__20628__auto__.length))?(new cljs.core.IndexedSeq(args__20628__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20629__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27507){
var map__27508 = p__27507;
var map__27508__$1 = ((((!((map__27508 == null)))?((((map__27508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27508):map__27508);
var opts = map__27508__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27506){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27506));
});

//# sourceMappingURL=client.js.map