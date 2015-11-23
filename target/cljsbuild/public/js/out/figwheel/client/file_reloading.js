// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19563__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19563__auto__){
return or__19563__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19563__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25469_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25469_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25474 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25475 = null;
var count__25476 = (0);
var i__25477 = (0);
while(true){
if((i__25477 < count__25476)){
var n = cljs.core._nth.call(null,chunk__25475,i__25477);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25478 = seq__25474;
var G__25479 = chunk__25475;
var G__25480 = count__25476;
var G__25481 = (i__25477 + (1));
seq__25474 = G__25478;
chunk__25475 = G__25479;
count__25476 = G__25480;
i__25477 = G__25481;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25474);
if(temp__4425__auto__){
var seq__25474__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25474__$1)){
var c__20366__auto__ = cljs.core.chunk_first.call(null,seq__25474__$1);
var G__25482 = cljs.core.chunk_rest.call(null,seq__25474__$1);
var G__25483 = c__20366__auto__;
var G__25484 = cljs.core.count.call(null,c__20366__auto__);
var G__25485 = (0);
seq__25474 = G__25482;
chunk__25475 = G__25483;
count__25476 = G__25484;
i__25477 = G__25485;
continue;
} else {
var n = cljs.core.first.call(null,seq__25474__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25486 = cljs.core.next.call(null,seq__25474__$1);
var G__25487 = null;
var G__25488 = (0);
var G__25489 = (0);
seq__25474 = G__25486;
chunk__25475 = G__25487;
count__25476 = G__25488;
i__25477 = G__25489;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25528_25535 = cljs.core.seq.call(null,deps);
var chunk__25529_25536 = null;
var count__25530_25537 = (0);
var i__25531_25538 = (0);
while(true){
if((i__25531_25538 < count__25530_25537)){
var dep_25539 = cljs.core._nth.call(null,chunk__25529_25536,i__25531_25538);
topo_sort_helper_STAR_.call(null,dep_25539,(depth + (1)),state);

var G__25540 = seq__25528_25535;
var G__25541 = chunk__25529_25536;
var G__25542 = count__25530_25537;
var G__25543 = (i__25531_25538 + (1));
seq__25528_25535 = G__25540;
chunk__25529_25536 = G__25541;
count__25530_25537 = G__25542;
i__25531_25538 = G__25543;
continue;
} else {
var temp__4425__auto___25544 = cljs.core.seq.call(null,seq__25528_25535);
if(temp__4425__auto___25544){
var seq__25528_25545__$1 = temp__4425__auto___25544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25528_25545__$1)){
var c__20366__auto___25546 = cljs.core.chunk_first.call(null,seq__25528_25545__$1);
var G__25547 = cljs.core.chunk_rest.call(null,seq__25528_25545__$1);
var G__25548 = c__20366__auto___25546;
var G__25549 = cljs.core.count.call(null,c__20366__auto___25546);
var G__25550 = (0);
seq__25528_25535 = G__25547;
chunk__25529_25536 = G__25548;
count__25530_25537 = G__25549;
i__25531_25538 = G__25550;
continue;
} else {
var dep_25551 = cljs.core.first.call(null,seq__25528_25545__$1);
topo_sort_helper_STAR_.call(null,dep_25551,(depth + (1)),state);

var G__25552 = cljs.core.next.call(null,seq__25528_25545__$1);
var G__25553 = null;
var G__25554 = (0);
var G__25555 = (0);
seq__25528_25535 = G__25552;
chunk__25529_25536 = G__25553;
count__25530_25537 = G__25554;
i__25531_25538 = G__25555;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25532){
var vec__25534 = p__25532;
var x = cljs.core.nth.call(null,vec__25534,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25534,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25534,x,xs,get_deps__$1){
return (function (p1__25490_SHARP_){
return clojure.set.difference.call(null,p1__25490_SHARP_,x);
});})(vec__25534,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25568 = cljs.core.seq.call(null,provides);
var chunk__25569 = null;
var count__25570 = (0);
var i__25571 = (0);
while(true){
if((i__25571 < count__25570)){
var prov = cljs.core._nth.call(null,chunk__25569,i__25571);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25572_25580 = cljs.core.seq.call(null,requires);
var chunk__25573_25581 = null;
var count__25574_25582 = (0);
var i__25575_25583 = (0);
while(true){
if((i__25575_25583 < count__25574_25582)){
var req_25584 = cljs.core._nth.call(null,chunk__25573_25581,i__25575_25583);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25584,prov);

var G__25585 = seq__25572_25580;
var G__25586 = chunk__25573_25581;
var G__25587 = count__25574_25582;
var G__25588 = (i__25575_25583 + (1));
seq__25572_25580 = G__25585;
chunk__25573_25581 = G__25586;
count__25574_25582 = G__25587;
i__25575_25583 = G__25588;
continue;
} else {
var temp__4425__auto___25589 = cljs.core.seq.call(null,seq__25572_25580);
if(temp__4425__auto___25589){
var seq__25572_25590__$1 = temp__4425__auto___25589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25572_25590__$1)){
var c__20366__auto___25591 = cljs.core.chunk_first.call(null,seq__25572_25590__$1);
var G__25592 = cljs.core.chunk_rest.call(null,seq__25572_25590__$1);
var G__25593 = c__20366__auto___25591;
var G__25594 = cljs.core.count.call(null,c__20366__auto___25591);
var G__25595 = (0);
seq__25572_25580 = G__25592;
chunk__25573_25581 = G__25593;
count__25574_25582 = G__25594;
i__25575_25583 = G__25595;
continue;
} else {
var req_25596 = cljs.core.first.call(null,seq__25572_25590__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25596,prov);

var G__25597 = cljs.core.next.call(null,seq__25572_25590__$1);
var G__25598 = null;
var G__25599 = (0);
var G__25600 = (0);
seq__25572_25580 = G__25597;
chunk__25573_25581 = G__25598;
count__25574_25582 = G__25599;
i__25575_25583 = G__25600;
continue;
}
} else {
}
}
break;
}

var G__25601 = seq__25568;
var G__25602 = chunk__25569;
var G__25603 = count__25570;
var G__25604 = (i__25571 + (1));
seq__25568 = G__25601;
chunk__25569 = G__25602;
count__25570 = G__25603;
i__25571 = G__25604;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25568);
if(temp__4425__auto__){
var seq__25568__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25568__$1)){
var c__20366__auto__ = cljs.core.chunk_first.call(null,seq__25568__$1);
var G__25605 = cljs.core.chunk_rest.call(null,seq__25568__$1);
var G__25606 = c__20366__auto__;
var G__25607 = cljs.core.count.call(null,c__20366__auto__);
var G__25608 = (0);
seq__25568 = G__25605;
chunk__25569 = G__25606;
count__25570 = G__25607;
i__25571 = G__25608;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25568__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25576_25609 = cljs.core.seq.call(null,requires);
var chunk__25577_25610 = null;
var count__25578_25611 = (0);
var i__25579_25612 = (0);
while(true){
if((i__25579_25612 < count__25578_25611)){
var req_25613 = cljs.core._nth.call(null,chunk__25577_25610,i__25579_25612);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25613,prov);

var G__25614 = seq__25576_25609;
var G__25615 = chunk__25577_25610;
var G__25616 = count__25578_25611;
var G__25617 = (i__25579_25612 + (1));
seq__25576_25609 = G__25614;
chunk__25577_25610 = G__25615;
count__25578_25611 = G__25616;
i__25579_25612 = G__25617;
continue;
} else {
var temp__4425__auto___25618__$1 = cljs.core.seq.call(null,seq__25576_25609);
if(temp__4425__auto___25618__$1){
var seq__25576_25619__$1 = temp__4425__auto___25618__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25576_25619__$1)){
var c__20366__auto___25620 = cljs.core.chunk_first.call(null,seq__25576_25619__$1);
var G__25621 = cljs.core.chunk_rest.call(null,seq__25576_25619__$1);
var G__25622 = c__20366__auto___25620;
var G__25623 = cljs.core.count.call(null,c__20366__auto___25620);
var G__25624 = (0);
seq__25576_25609 = G__25621;
chunk__25577_25610 = G__25622;
count__25578_25611 = G__25623;
i__25579_25612 = G__25624;
continue;
} else {
var req_25625 = cljs.core.first.call(null,seq__25576_25619__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25625,prov);

var G__25626 = cljs.core.next.call(null,seq__25576_25619__$1);
var G__25627 = null;
var G__25628 = (0);
var G__25629 = (0);
seq__25576_25609 = G__25626;
chunk__25577_25610 = G__25627;
count__25578_25611 = G__25628;
i__25579_25612 = G__25629;
continue;
}
} else {
}
}
break;
}

var G__25630 = cljs.core.next.call(null,seq__25568__$1);
var G__25631 = null;
var G__25632 = (0);
var G__25633 = (0);
seq__25568 = G__25630;
chunk__25569 = G__25631;
count__25570 = G__25632;
i__25571 = G__25633;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25638_25642 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25639_25643 = null;
var count__25640_25644 = (0);
var i__25641_25645 = (0);
while(true){
if((i__25641_25645 < count__25640_25644)){
var ns_25646 = cljs.core._nth.call(null,chunk__25639_25643,i__25641_25645);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25646);

var G__25647 = seq__25638_25642;
var G__25648 = chunk__25639_25643;
var G__25649 = count__25640_25644;
var G__25650 = (i__25641_25645 + (1));
seq__25638_25642 = G__25647;
chunk__25639_25643 = G__25648;
count__25640_25644 = G__25649;
i__25641_25645 = G__25650;
continue;
} else {
var temp__4425__auto___25651 = cljs.core.seq.call(null,seq__25638_25642);
if(temp__4425__auto___25651){
var seq__25638_25652__$1 = temp__4425__auto___25651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25638_25652__$1)){
var c__20366__auto___25653 = cljs.core.chunk_first.call(null,seq__25638_25652__$1);
var G__25654 = cljs.core.chunk_rest.call(null,seq__25638_25652__$1);
var G__25655 = c__20366__auto___25653;
var G__25656 = cljs.core.count.call(null,c__20366__auto___25653);
var G__25657 = (0);
seq__25638_25642 = G__25654;
chunk__25639_25643 = G__25655;
count__25640_25644 = G__25656;
i__25641_25645 = G__25657;
continue;
} else {
var ns_25658 = cljs.core.first.call(null,seq__25638_25652__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25658);

var G__25659 = cljs.core.next.call(null,seq__25638_25652__$1);
var G__25660 = null;
var G__25661 = (0);
var G__25662 = (0);
seq__25638_25642 = G__25659;
chunk__25639_25643 = G__25660;
count__25640_25644 = G__25661;
i__25641_25645 = G__25662;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19563__auto__ = goog.require__;
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25663__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25664__i = 0, G__25664__a = new Array(arguments.length -  0);
while (G__25664__i < G__25664__a.length) {G__25664__a[G__25664__i] = arguments[G__25664__i + 0]; ++G__25664__i;}
  args = new cljs.core.IndexedSeq(G__25664__a,0);
} 
return G__25663__delegate.call(this,args);};
G__25663.cljs$lang$maxFixedArity = 0;
G__25663.cljs$lang$applyTo = (function (arglist__25665){
var args = cljs.core.seq(arglist__25665);
return G__25663__delegate(args);
});
G__25663.cljs$core$IFn$_invoke$arity$variadic = G__25663__delegate;
return G__25663;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25667 = cljs.core._EQ_;
var expr__25668 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25667.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25668))){
var path_parts = ((function (pred__25667,expr__25668){
return (function (p1__25666_SHARP_){
return clojure.string.split.call(null,p1__25666_SHARP_,/[\/\\]/);
});})(pred__25667,expr__25668))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25667,expr__25668){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25670){if((e25670 instanceof Error)){
var e = e25670;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25670;

}
}})());
});
;})(path_parts,sep,root,pred__25667,expr__25668))
} else {
if(cljs.core.truth_(pred__25667.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25668))){
return ((function (pred__25667,expr__25668){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25667,expr__25668){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25667,expr__25668))
);

return deferred.addErrback(((function (deferred,pred__25667,expr__25668){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25667,expr__25668))
);
});
;})(pred__25667,expr__25668))
} else {
return ((function (pred__25667,expr__25668){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25667,expr__25668))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25671,callback){
var map__25674 = p__25671;
var map__25674__$1 = ((((!((map__25674 == null)))?((((map__25674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25674):map__25674);
var file_msg = map__25674__$1;
var request_url = cljs.core.get.call(null,map__25674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25674,map__25674__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25674,map__25674__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__){
return (function (state_25698){
var state_val_25699 = (state_25698[(1)]);
if((state_val_25699 === (7))){
var inst_25694 = (state_25698[(2)]);
var state_25698__$1 = state_25698;
var statearr_25700_25720 = state_25698__$1;
(statearr_25700_25720[(2)] = inst_25694);

(statearr_25700_25720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (1))){
var state_25698__$1 = state_25698;
var statearr_25701_25721 = state_25698__$1;
(statearr_25701_25721[(2)] = null);

(statearr_25701_25721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (4))){
var inst_25678 = (state_25698[(7)]);
var inst_25678__$1 = (state_25698[(2)]);
var state_25698__$1 = (function (){var statearr_25702 = state_25698;
(statearr_25702[(7)] = inst_25678__$1);

return statearr_25702;
})();
if(cljs.core.truth_(inst_25678__$1)){
var statearr_25703_25722 = state_25698__$1;
(statearr_25703_25722[(1)] = (5));

} else {
var statearr_25704_25723 = state_25698__$1;
(statearr_25704_25723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (6))){
var state_25698__$1 = state_25698;
var statearr_25705_25724 = state_25698__$1;
(statearr_25705_25724[(2)] = null);

(statearr_25705_25724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (3))){
var inst_25696 = (state_25698[(2)]);
var state_25698__$1 = state_25698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25698__$1,inst_25696);
} else {
if((state_val_25699 === (2))){
var state_25698__$1 = state_25698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25698__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25699 === (11))){
var inst_25690 = (state_25698[(2)]);
var state_25698__$1 = (function (){var statearr_25706 = state_25698;
(statearr_25706[(8)] = inst_25690);

return statearr_25706;
})();
var statearr_25707_25725 = state_25698__$1;
(statearr_25707_25725[(2)] = null);

(statearr_25707_25725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (9))){
var inst_25684 = (state_25698[(9)]);
var inst_25682 = (state_25698[(10)]);
var inst_25686 = inst_25684.call(null,inst_25682);
var state_25698__$1 = state_25698;
var statearr_25708_25726 = state_25698__$1;
(statearr_25708_25726[(2)] = inst_25686);

(statearr_25708_25726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (5))){
var inst_25678 = (state_25698[(7)]);
var inst_25680 = figwheel.client.file_reloading.blocking_load.call(null,inst_25678);
var state_25698__$1 = state_25698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25698__$1,(8),inst_25680);
} else {
if((state_val_25699 === (10))){
var inst_25682 = (state_25698[(10)]);
var inst_25688 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25682);
var state_25698__$1 = state_25698;
var statearr_25709_25727 = state_25698__$1;
(statearr_25709_25727[(2)] = inst_25688);

(statearr_25709_25727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (8))){
var inst_25684 = (state_25698[(9)]);
var inst_25678 = (state_25698[(7)]);
var inst_25682 = (state_25698[(2)]);
var inst_25683 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25684__$1 = cljs.core.get.call(null,inst_25683,inst_25678);
var state_25698__$1 = (function (){var statearr_25710 = state_25698;
(statearr_25710[(9)] = inst_25684__$1);

(statearr_25710[(10)] = inst_25682);

return statearr_25710;
})();
if(cljs.core.truth_(inst_25684__$1)){
var statearr_25711_25728 = state_25698__$1;
(statearr_25711_25728[(1)] = (9));

} else {
var statearr_25712_25729 = state_25698__$1;
(statearr_25712_25729[(1)] = (10));

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
});})(c__22388__auto__))
;
return ((function (switch__22276__auto__,c__22388__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22277__auto__ = null;
var figwheel$client$file_reloading$state_machine__22277__auto____0 = (function (){
var statearr_25716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25716[(0)] = figwheel$client$file_reloading$state_machine__22277__auto__);

(statearr_25716[(1)] = (1));

return statearr_25716;
});
var figwheel$client$file_reloading$state_machine__22277__auto____1 = (function (state_25698){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_25698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object)){
var ex__22280__auto__ = e25717;
var statearr_25718_25730 = state_25698;
(statearr_25718_25730[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25731 = state_25698;
state_25698 = G__25731;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22277__auto__ = function(state_25698){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22277__auto____1.call(this,state_25698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22277__auto____0;
figwheel$client$file_reloading$state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22277__auto____1;
return figwheel$client$file_reloading$state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__))
})();
var state__22390__auto__ = (function (){var statearr_25719 = f__22389__auto__.call(null);
(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_25719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__))
);

return c__22388__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25732,callback){
var map__25735 = p__25732;
var map__25735__$1 = ((((!((map__25735 == null)))?((((map__25735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25735):map__25735);
var file_msg = map__25735__$1;
var namespace = cljs.core.get.call(null,map__25735__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25735,map__25735__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25735,map__25735__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25737){
var map__25740 = p__25737;
var map__25740__$1 = ((((!((map__25740 == null)))?((((map__25740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25740):map__25740);
var file_msg = map__25740__$1;
var namespace = cljs.core.get.call(null,map__25740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19551__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19551__auto__){
var or__19563__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19563__auto__)){
return or__19563__auto__;
} else {
var or__19563__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19563__auto____$1)){
return or__19563__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19551__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25742,callback){
var map__25745 = p__25742;
var map__25745__$1 = ((((!((map__25745 == null)))?((((map__25745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25745):map__25745);
var file_msg = map__25745__$1;
var request_url = cljs.core.get.call(null,map__25745__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25745__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22388__auto___25833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto___25833,out){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto___25833,out){
return (function (state_25815){
var state_val_25816 = (state_25815[(1)]);
if((state_val_25816 === (1))){
var inst_25793 = cljs.core.nth.call(null,files,(0),null);
var inst_25794 = cljs.core.nthnext.call(null,files,(1));
var inst_25795 = files;
var state_25815__$1 = (function (){var statearr_25817 = state_25815;
(statearr_25817[(7)] = inst_25793);

(statearr_25817[(8)] = inst_25795);

(statearr_25817[(9)] = inst_25794);

return statearr_25817;
})();
var statearr_25818_25834 = state_25815__$1;
(statearr_25818_25834[(2)] = null);

(statearr_25818_25834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (2))){
var inst_25798 = (state_25815[(10)]);
var inst_25795 = (state_25815[(8)]);
var inst_25798__$1 = cljs.core.nth.call(null,inst_25795,(0),null);
var inst_25799 = cljs.core.nthnext.call(null,inst_25795,(1));
var inst_25800 = (inst_25798__$1 == null);
var inst_25801 = cljs.core.not.call(null,inst_25800);
var state_25815__$1 = (function (){var statearr_25819 = state_25815;
(statearr_25819[(10)] = inst_25798__$1);

(statearr_25819[(11)] = inst_25799);

return statearr_25819;
})();
if(inst_25801){
var statearr_25820_25835 = state_25815__$1;
(statearr_25820_25835[(1)] = (4));

} else {
var statearr_25821_25836 = state_25815__$1;
(statearr_25821_25836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (3))){
var inst_25813 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25815__$1,inst_25813);
} else {
if((state_val_25816 === (4))){
var inst_25798 = (state_25815[(10)]);
var inst_25803 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25798);
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25815__$1,(7),inst_25803);
} else {
if((state_val_25816 === (5))){
var inst_25809 = cljs.core.async.close_BANG_.call(null,out);
var state_25815__$1 = state_25815;
var statearr_25822_25837 = state_25815__$1;
(statearr_25822_25837[(2)] = inst_25809);

(statearr_25822_25837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (6))){
var inst_25811 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
var statearr_25823_25838 = state_25815__$1;
(statearr_25823_25838[(2)] = inst_25811);

(statearr_25823_25838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25816 === (7))){
var inst_25799 = (state_25815[(11)]);
var inst_25805 = (state_25815[(2)]);
var inst_25806 = cljs.core.async.put_BANG_.call(null,out,inst_25805);
var inst_25795 = inst_25799;
var state_25815__$1 = (function (){var statearr_25824 = state_25815;
(statearr_25824[(8)] = inst_25795);

(statearr_25824[(12)] = inst_25806);

return statearr_25824;
})();
var statearr_25825_25839 = state_25815__$1;
(statearr_25825_25839[(2)] = null);

(statearr_25825_25839[(1)] = (2));


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
});})(c__22388__auto___25833,out))
;
return ((function (switch__22276__auto__,c__22388__auto___25833,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto____0 = (function (){
var statearr_25829 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25829[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto__);

(statearr_25829[(1)] = (1));

return statearr_25829;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto____1 = (function (state_25815){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_25815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e25830){if((e25830 instanceof Object)){
var ex__22280__auto__ = e25830;
var statearr_25831_25840 = state_25815;
(statearr_25831_25840[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25841 = state_25815;
state_25815 = G__25841;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto__ = function(state_25815){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto____1.call(this,state_25815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto___25833,out))
})();
var state__22390__auto__ = (function (){var statearr_25832 = f__22389__auto__.call(null);
(statearr_25832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto___25833);

return statearr_25832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto___25833,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25842,opts){
var map__25846 = p__25842;
var map__25846__$1 = ((((!((map__25846 == null)))?((((map__25846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25846):map__25846);
var eval_body__$1 = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19551__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19551__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19551__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25848){var e = e25848;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25849_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25849_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25854){
var vec__25855 = p__25854;
var k = cljs.core.nth.call(null,vec__25855,(0),null);
var v = cljs.core.nth.call(null,vec__25855,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25856){
var vec__25857 = p__25856;
var k = cljs.core.nth.call(null,vec__25857,(0),null);
var v = cljs.core.nth.call(null,vec__25857,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25861,p__25862){
var map__26109 = p__25861;
var map__26109__$1 = ((((!((map__26109 == null)))?((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26109):map__26109);
var opts = map__26109__$1;
var before_jsload = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26110 = p__25862;
var map__26110__$1 = ((((!((map__26110 == null)))?((((map__26110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26110):map__26110);
var msg = map__26110__$1;
var files = cljs.core.get.call(null,map__26110__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26110__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26110__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22388__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22389__auto__ = (function (){var switch__22276__auto__ = ((function (c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26263){
var state_val_26264 = (state_26263[(1)]);
if((state_val_26264 === (7))){
var inst_26126 = (state_26263[(7)]);
var inst_26127 = (state_26263[(8)]);
var inst_26124 = (state_26263[(9)]);
var inst_26125 = (state_26263[(10)]);
var inst_26132 = cljs.core._nth.call(null,inst_26125,inst_26127);
var inst_26133 = figwheel.client.file_reloading.eval_body.call(null,inst_26132,opts);
var inst_26134 = (inst_26127 + (1));
var tmp26265 = inst_26126;
var tmp26266 = inst_26124;
var tmp26267 = inst_26125;
var inst_26124__$1 = tmp26266;
var inst_26125__$1 = tmp26267;
var inst_26126__$1 = tmp26265;
var inst_26127__$1 = inst_26134;
var state_26263__$1 = (function (){var statearr_26268 = state_26263;
(statearr_26268[(7)] = inst_26126__$1);

(statearr_26268[(11)] = inst_26133);

(statearr_26268[(8)] = inst_26127__$1);

(statearr_26268[(9)] = inst_26124__$1);

(statearr_26268[(10)] = inst_26125__$1);

return statearr_26268;
})();
var statearr_26269_26355 = state_26263__$1;
(statearr_26269_26355[(2)] = null);

(statearr_26269_26355[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (20))){
var inst_26167 = (state_26263[(12)]);
var inst_26175 = figwheel.client.file_reloading.sort_files.call(null,inst_26167);
var state_26263__$1 = state_26263;
var statearr_26270_26356 = state_26263__$1;
(statearr_26270_26356[(2)] = inst_26175);

(statearr_26270_26356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (27))){
var state_26263__$1 = state_26263;
var statearr_26271_26357 = state_26263__$1;
(statearr_26271_26357[(2)] = null);

(statearr_26271_26357[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (1))){
var inst_26116 = (state_26263[(13)]);
var inst_26113 = before_jsload.call(null,files);
var inst_26114 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26115 = (function (){return ((function (inst_26116,inst_26113,inst_26114,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25858_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25858_SHARP_);
});
;})(inst_26116,inst_26113,inst_26114,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26116__$1 = cljs.core.filter.call(null,inst_26115,files);
var inst_26117 = cljs.core.not_empty.call(null,inst_26116__$1);
var state_26263__$1 = (function (){var statearr_26272 = state_26263;
(statearr_26272[(13)] = inst_26116__$1);

(statearr_26272[(14)] = inst_26113);

(statearr_26272[(15)] = inst_26114);

return statearr_26272;
})();
if(cljs.core.truth_(inst_26117)){
var statearr_26273_26358 = state_26263__$1;
(statearr_26273_26358[(1)] = (2));

} else {
var statearr_26274_26359 = state_26263__$1;
(statearr_26274_26359[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (24))){
var state_26263__$1 = state_26263;
var statearr_26275_26360 = state_26263__$1;
(statearr_26275_26360[(2)] = null);

(statearr_26275_26360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (39))){
var inst_26217 = (state_26263[(16)]);
var state_26263__$1 = state_26263;
var statearr_26276_26361 = state_26263__$1;
(statearr_26276_26361[(2)] = inst_26217);

(statearr_26276_26361[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (46))){
var inst_26258 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26277_26362 = state_26263__$1;
(statearr_26277_26362[(2)] = inst_26258);

(statearr_26277_26362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (4))){
var inst_26161 = (state_26263[(2)]);
var inst_26162 = cljs.core.List.EMPTY;
var inst_26163 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26162);
var inst_26164 = (function (){return ((function (inst_26161,inst_26162,inst_26163,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25859_SHARP_){
var and__19551__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25859_SHARP_);
if(cljs.core.truth_(and__19551__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25859_SHARP_));
} else {
return and__19551__auto__;
}
});
;})(inst_26161,inst_26162,inst_26163,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26165 = cljs.core.filter.call(null,inst_26164,files);
var inst_26166 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26167 = cljs.core.concat.call(null,inst_26165,inst_26166);
var state_26263__$1 = (function (){var statearr_26278 = state_26263;
(statearr_26278[(17)] = inst_26161);

(statearr_26278[(18)] = inst_26163);

(statearr_26278[(12)] = inst_26167);

return statearr_26278;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26279_26363 = state_26263__$1;
(statearr_26279_26363[(1)] = (16));

} else {
var statearr_26280_26364 = state_26263__$1;
(statearr_26280_26364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (15))){
var inst_26151 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26281_26365 = state_26263__$1;
(statearr_26281_26365[(2)] = inst_26151);

(statearr_26281_26365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (21))){
var inst_26177 = (state_26263[(19)]);
var inst_26177__$1 = (state_26263[(2)]);
var inst_26178 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26177__$1);
var state_26263__$1 = (function (){var statearr_26282 = state_26263;
(statearr_26282[(19)] = inst_26177__$1);

return statearr_26282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26263__$1,(22),inst_26178);
} else {
if((state_val_26264 === (31))){
var inst_26261 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26263__$1,inst_26261);
} else {
if((state_val_26264 === (32))){
var inst_26217 = (state_26263[(16)]);
var inst_26222 = inst_26217.cljs$lang$protocol_mask$partition0$;
var inst_26223 = (inst_26222 & (64));
var inst_26224 = inst_26217.cljs$core$ISeq$;
var inst_26225 = (inst_26223) || (inst_26224);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26225)){
var statearr_26283_26366 = state_26263__$1;
(statearr_26283_26366[(1)] = (35));

} else {
var statearr_26284_26367 = state_26263__$1;
(statearr_26284_26367[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (40))){
var inst_26238 = (state_26263[(20)]);
var inst_26237 = (state_26263[(2)]);
var inst_26238__$1 = cljs.core.get.call(null,inst_26237,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26239 = cljs.core.get.call(null,inst_26237,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26240 = cljs.core.not_empty.call(null,inst_26238__$1);
var state_26263__$1 = (function (){var statearr_26285 = state_26263;
(statearr_26285[(20)] = inst_26238__$1);

(statearr_26285[(21)] = inst_26239);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26240)){
var statearr_26286_26368 = state_26263__$1;
(statearr_26286_26368[(1)] = (41));

} else {
var statearr_26287_26369 = state_26263__$1;
(statearr_26287_26369[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (33))){
var state_26263__$1 = state_26263;
var statearr_26288_26370 = state_26263__$1;
(statearr_26288_26370[(2)] = false);

(statearr_26288_26370[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (13))){
var inst_26137 = (state_26263[(22)]);
var inst_26141 = cljs.core.chunk_first.call(null,inst_26137);
var inst_26142 = cljs.core.chunk_rest.call(null,inst_26137);
var inst_26143 = cljs.core.count.call(null,inst_26141);
var inst_26124 = inst_26142;
var inst_26125 = inst_26141;
var inst_26126 = inst_26143;
var inst_26127 = (0);
var state_26263__$1 = (function (){var statearr_26289 = state_26263;
(statearr_26289[(7)] = inst_26126);

(statearr_26289[(8)] = inst_26127);

(statearr_26289[(9)] = inst_26124);

(statearr_26289[(10)] = inst_26125);

return statearr_26289;
})();
var statearr_26290_26371 = state_26263__$1;
(statearr_26290_26371[(2)] = null);

(statearr_26290_26371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (22))){
var inst_26185 = (state_26263[(23)]);
var inst_26180 = (state_26263[(24)]);
var inst_26177 = (state_26263[(19)]);
var inst_26181 = (state_26263[(25)]);
var inst_26180__$1 = (state_26263[(2)]);
var inst_26181__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26180__$1);
var inst_26182 = (function (){var all_files = inst_26177;
var res_SINGLEQUOTE_ = inst_26180__$1;
var res = inst_26181__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26185,inst_26180,inst_26177,inst_26181,inst_26180__$1,inst_26181__$1,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25860_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25860_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26185,inst_26180,inst_26177,inst_26181,inst_26180__$1,inst_26181__$1,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26183 = cljs.core.filter.call(null,inst_26182,inst_26180__$1);
var inst_26184 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26185__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26184);
var inst_26186 = cljs.core.not_empty.call(null,inst_26185__$1);
var state_26263__$1 = (function (){var statearr_26291 = state_26263;
(statearr_26291[(23)] = inst_26185__$1);

(statearr_26291[(24)] = inst_26180__$1);

(statearr_26291[(26)] = inst_26183);

(statearr_26291[(25)] = inst_26181__$1);

return statearr_26291;
})();
if(cljs.core.truth_(inst_26186)){
var statearr_26292_26372 = state_26263__$1;
(statearr_26292_26372[(1)] = (23));

} else {
var statearr_26293_26373 = state_26263__$1;
(statearr_26293_26373[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (36))){
var state_26263__$1 = state_26263;
var statearr_26294_26374 = state_26263__$1;
(statearr_26294_26374[(2)] = false);

(statearr_26294_26374[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (41))){
var inst_26238 = (state_26263[(20)]);
var inst_26242 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26243 = cljs.core.map.call(null,inst_26242,inst_26238);
var inst_26244 = cljs.core.pr_str.call(null,inst_26243);
var inst_26245 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26244)].join('');
var inst_26246 = figwheel.client.utils.log.call(null,inst_26245);
var state_26263__$1 = state_26263;
var statearr_26295_26375 = state_26263__$1;
(statearr_26295_26375[(2)] = inst_26246);

(statearr_26295_26375[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (43))){
var inst_26239 = (state_26263[(21)]);
var inst_26249 = (state_26263[(2)]);
var inst_26250 = cljs.core.not_empty.call(null,inst_26239);
var state_26263__$1 = (function (){var statearr_26296 = state_26263;
(statearr_26296[(27)] = inst_26249);

return statearr_26296;
})();
if(cljs.core.truth_(inst_26250)){
var statearr_26297_26376 = state_26263__$1;
(statearr_26297_26376[(1)] = (44));

} else {
var statearr_26298_26377 = state_26263__$1;
(statearr_26298_26377[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (29))){
var inst_26185 = (state_26263[(23)]);
var inst_26180 = (state_26263[(24)]);
var inst_26183 = (state_26263[(26)]);
var inst_26177 = (state_26263[(19)]);
var inst_26217 = (state_26263[(16)]);
var inst_26181 = (state_26263[(25)]);
var inst_26213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26216 = (function (){var all_files = inst_26177;
var res_SINGLEQUOTE_ = inst_26180;
var res = inst_26181;
var files_not_loaded = inst_26183;
var dependencies_that_loaded = inst_26185;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26217,inst_26181,inst_26213,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26215){
var map__26299 = p__26215;
var map__26299__$1 = ((((!((map__26299 == null)))?((((map__26299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26299):map__26299);
var namespace = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26217,inst_26181,inst_26213,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26217__$1 = cljs.core.group_by.call(null,inst_26216,inst_26183);
var inst_26219 = (inst_26217__$1 == null);
var inst_26220 = cljs.core.not.call(null,inst_26219);
var state_26263__$1 = (function (){var statearr_26301 = state_26263;
(statearr_26301[(16)] = inst_26217__$1);

(statearr_26301[(28)] = inst_26213);

return statearr_26301;
})();
if(inst_26220){
var statearr_26302_26378 = state_26263__$1;
(statearr_26302_26378[(1)] = (32));

} else {
var statearr_26303_26379 = state_26263__$1;
(statearr_26303_26379[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (44))){
var inst_26239 = (state_26263[(21)]);
var inst_26252 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26239);
var inst_26253 = cljs.core.pr_str.call(null,inst_26252);
var inst_26254 = [cljs.core.str("not required: "),cljs.core.str(inst_26253)].join('');
var inst_26255 = figwheel.client.utils.log.call(null,inst_26254);
var state_26263__$1 = state_26263;
var statearr_26304_26380 = state_26263__$1;
(statearr_26304_26380[(2)] = inst_26255);

(statearr_26304_26380[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (6))){
var inst_26158 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26305_26381 = state_26263__$1;
(statearr_26305_26381[(2)] = inst_26158);

(statearr_26305_26381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (28))){
var inst_26183 = (state_26263[(26)]);
var inst_26210 = (state_26263[(2)]);
var inst_26211 = cljs.core.not_empty.call(null,inst_26183);
var state_26263__$1 = (function (){var statearr_26306 = state_26263;
(statearr_26306[(29)] = inst_26210);

return statearr_26306;
})();
if(cljs.core.truth_(inst_26211)){
var statearr_26307_26382 = state_26263__$1;
(statearr_26307_26382[(1)] = (29));

} else {
var statearr_26308_26383 = state_26263__$1;
(statearr_26308_26383[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (25))){
var inst_26181 = (state_26263[(25)]);
var inst_26197 = (state_26263[(2)]);
var inst_26198 = cljs.core.not_empty.call(null,inst_26181);
var state_26263__$1 = (function (){var statearr_26309 = state_26263;
(statearr_26309[(30)] = inst_26197);

return statearr_26309;
})();
if(cljs.core.truth_(inst_26198)){
var statearr_26310_26384 = state_26263__$1;
(statearr_26310_26384[(1)] = (26));

} else {
var statearr_26311_26385 = state_26263__$1;
(statearr_26311_26385[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (34))){
var inst_26232 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26232)){
var statearr_26312_26386 = state_26263__$1;
(statearr_26312_26386[(1)] = (38));

} else {
var statearr_26313_26387 = state_26263__$1;
(statearr_26313_26387[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (17))){
var state_26263__$1 = state_26263;
var statearr_26314_26388 = state_26263__$1;
(statearr_26314_26388[(2)] = recompile_dependents);

(statearr_26314_26388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (3))){
var state_26263__$1 = state_26263;
var statearr_26315_26389 = state_26263__$1;
(statearr_26315_26389[(2)] = null);

(statearr_26315_26389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (12))){
var inst_26154 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26316_26390 = state_26263__$1;
(statearr_26316_26390[(2)] = inst_26154);

(statearr_26316_26390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (2))){
var inst_26116 = (state_26263[(13)]);
var inst_26123 = cljs.core.seq.call(null,inst_26116);
var inst_26124 = inst_26123;
var inst_26125 = null;
var inst_26126 = (0);
var inst_26127 = (0);
var state_26263__$1 = (function (){var statearr_26317 = state_26263;
(statearr_26317[(7)] = inst_26126);

(statearr_26317[(8)] = inst_26127);

(statearr_26317[(9)] = inst_26124);

(statearr_26317[(10)] = inst_26125);

return statearr_26317;
})();
var statearr_26318_26391 = state_26263__$1;
(statearr_26318_26391[(2)] = null);

(statearr_26318_26391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (23))){
var inst_26185 = (state_26263[(23)]);
var inst_26180 = (state_26263[(24)]);
var inst_26183 = (state_26263[(26)]);
var inst_26177 = (state_26263[(19)]);
var inst_26181 = (state_26263[(25)]);
var inst_26188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26190 = (function (){var all_files = inst_26177;
var res_SINGLEQUOTE_ = inst_26180;
var res = inst_26181;
var files_not_loaded = inst_26183;
var dependencies_that_loaded = inst_26185;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26181,inst_26188,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26189){
var map__26319 = p__26189;
var map__26319__$1 = ((((!((map__26319 == null)))?((((map__26319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26319):map__26319);
var request_url = cljs.core.get.call(null,map__26319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26181,inst_26188,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26191 = cljs.core.reverse.call(null,inst_26185);
var inst_26192 = cljs.core.map.call(null,inst_26190,inst_26191);
var inst_26193 = cljs.core.pr_str.call(null,inst_26192);
var inst_26194 = figwheel.client.utils.log.call(null,inst_26193);
var state_26263__$1 = (function (){var statearr_26321 = state_26263;
(statearr_26321[(31)] = inst_26188);

return statearr_26321;
})();
var statearr_26322_26392 = state_26263__$1;
(statearr_26322_26392[(2)] = inst_26194);

(statearr_26322_26392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (35))){
var state_26263__$1 = state_26263;
var statearr_26323_26393 = state_26263__$1;
(statearr_26323_26393[(2)] = true);

(statearr_26323_26393[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (19))){
var inst_26167 = (state_26263[(12)]);
var inst_26173 = figwheel.client.file_reloading.expand_files.call(null,inst_26167);
var state_26263__$1 = state_26263;
var statearr_26324_26394 = state_26263__$1;
(statearr_26324_26394[(2)] = inst_26173);

(statearr_26324_26394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (11))){
var state_26263__$1 = state_26263;
var statearr_26325_26395 = state_26263__$1;
(statearr_26325_26395[(2)] = null);

(statearr_26325_26395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (9))){
var inst_26156 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26326_26396 = state_26263__$1;
(statearr_26326_26396[(2)] = inst_26156);

(statearr_26326_26396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (5))){
var inst_26126 = (state_26263[(7)]);
var inst_26127 = (state_26263[(8)]);
var inst_26129 = (inst_26127 < inst_26126);
var inst_26130 = inst_26129;
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26130)){
var statearr_26327_26397 = state_26263__$1;
(statearr_26327_26397[(1)] = (7));

} else {
var statearr_26328_26398 = state_26263__$1;
(statearr_26328_26398[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (14))){
var inst_26137 = (state_26263[(22)]);
var inst_26146 = cljs.core.first.call(null,inst_26137);
var inst_26147 = figwheel.client.file_reloading.eval_body.call(null,inst_26146,opts);
var inst_26148 = cljs.core.next.call(null,inst_26137);
var inst_26124 = inst_26148;
var inst_26125 = null;
var inst_26126 = (0);
var inst_26127 = (0);
var state_26263__$1 = (function (){var statearr_26329 = state_26263;
(statearr_26329[(32)] = inst_26147);

(statearr_26329[(7)] = inst_26126);

(statearr_26329[(8)] = inst_26127);

(statearr_26329[(9)] = inst_26124);

(statearr_26329[(10)] = inst_26125);

return statearr_26329;
})();
var statearr_26330_26399 = state_26263__$1;
(statearr_26330_26399[(2)] = null);

(statearr_26330_26399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (45))){
var state_26263__$1 = state_26263;
var statearr_26331_26400 = state_26263__$1;
(statearr_26331_26400[(2)] = null);

(statearr_26331_26400[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (26))){
var inst_26185 = (state_26263[(23)]);
var inst_26180 = (state_26263[(24)]);
var inst_26183 = (state_26263[(26)]);
var inst_26177 = (state_26263[(19)]);
var inst_26181 = (state_26263[(25)]);
var inst_26200 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26202 = (function (){var all_files = inst_26177;
var res_SINGLEQUOTE_ = inst_26180;
var res = inst_26181;
var files_not_loaded = inst_26183;
var dependencies_that_loaded = inst_26185;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26181,inst_26200,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26201){
var map__26332 = p__26201;
var map__26332__$1 = ((((!((map__26332 == null)))?((((map__26332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
var namespace = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26181,inst_26200,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26203 = cljs.core.map.call(null,inst_26202,inst_26181);
var inst_26204 = cljs.core.pr_str.call(null,inst_26203);
var inst_26205 = figwheel.client.utils.log.call(null,inst_26204);
var inst_26206 = (function (){var all_files = inst_26177;
var res_SINGLEQUOTE_ = inst_26180;
var res = inst_26181;
var files_not_loaded = inst_26183;
var dependencies_that_loaded = inst_26185;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26181,inst_26200,inst_26202,inst_26203,inst_26204,inst_26205,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26185,inst_26180,inst_26183,inst_26177,inst_26181,inst_26200,inst_26202,inst_26203,inst_26204,inst_26205,state_val_26264,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26207 = setTimeout(inst_26206,(10));
var state_26263__$1 = (function (){var statearr_26334 = state_26263;
(statearr_26334[(33)] = inst_26205);

(statearr_26334[(34)] = inst_26200);

return statearr_26334;
})();
var statearr_26335_26401 = state_26263__$1;
(statearr_26335_26401[(2)] = inst_26207);

(statearr_26335_26401[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (16))){
var state_26263__$1 = state_26263;
var statearr_26336_26402 = state_26263__$1;
(statearr_26336_26402[(2)] = reload_dependents);

(statearr_26336_26402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (38))){
var inst_26217 = (state_26263[(16)]);
var inst_26234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26217);
var state_26263__$1 = state_26263;
var statearr_26337_26403 = state_26263__$1;
(statearr_26337_26403[(2)] = inst_26234);

(statearr_26337_26403[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (30))){
var state_26263__$1 = state_26263;
var statearr_26338_26404 = state_26263__$1;
(statearr_26338_26404[(2)] = null);

(statearr_26338_26404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (10))){
var inst_26137 = (state_26263[(22)]);
var inst_26139 = cljs.core.chunked_seq_QMARK_.call(null,inst_26137);
var state_26263__$1 = state_26263;
if(inst_26139){
var statearr_26339_26405 = state_26263__$1;
(statearr_26339_26405[(1)] = (13));

} else {
var statearr_26340_26406 = state_26263__$1;
(statearr_26340_26406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (18))){
var inst_26171 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26171)){
var statearr_26341_26407 = state_26263__$1;
(statearr_26341_26407[(1)] = (19));

} else {
var statearr_26342_26408 = state_26263__$1;
(statearr_26342_26408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (42))){
var state_26263__$1 = state_26263;
var statearr_26343_26409 = state_26263__$1;
(statearr_26343_26409[(2)] = null);

(statearr_26343_26409[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (37))){
var inst_26229 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26344_26410 = state_26263__$1;
(statearr_26344_26410[(2)] = inst_26229);

(statearr_26344_26410[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (8))){
var inst_26137 = (state_26263[(22)]);
var inst_26124 = (state_26263[(9)]);
var inst_26137__$1 = cljs.core.seq.call(null,inst_26124);
var state_26263__$1 = (function (){var statearr_26345 = state_26263;
(statearr_26345[(22)] = inst_26137__$1);

return statearr_26345;
})();
if(inst_26137__$1){
var statearr_26346_26411 = state_26263__$1;
(statearr_26346_26411[(1)] = (10));

} else {
var statearr_26347_26412 = state_26263__$1;
(statearr_26347_26412[(1)] = (11));

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
}
});})(c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22276__auto__,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto____0 = (function (){
var statearr_26351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26351[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto__);

(statearr_26351[(1)] = (1));

return statearr_26351;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto____1 = (function (state_26263){
while(true){
var ret_value__22278__auto__ = (function (){try{while(true){
var result__22279__auto__ = switch__22276__auto__.call(null,state_26263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22279__auto__;
}
break;
}
}catch (e26352){if((e26352 instanceof Object)){
var ex__22280__auto__ = e26352;
var statearr_26353_26413 = state_26263;
(statearr_26353_26413[(5)] = ex__22280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26414 = state_26263;
state_26263 = G__26414;
continue;
} else {
return ret_value__22278__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22277__auto__;
})()
;})(switch__22276__auto__,c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22390__auto__ = (function (){var statearr_26354 = f__22389__auto__.call(null);
(statearr_26354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22388__auto__);

return statearr_26354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22390__auto__);
});})(c__22388__auto__,map__26109,map__26109__$1,opts,before_jsload,on_jsload,reload_dependents,map__26110,map__26110__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22388__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26417,link){
var map__26420 = p__26417;
var map__26420__$1 = ((((!((map__26420 == null)))?((((map__26420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26420):map__26420);
var file = cljs.core.get.call(null,map__26420__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26420,map__26420__$1,file){
return (function (p1__26415_SHARP_,p2__26416_SHARP_){
if(cljs.core._EQ_.call(null,p1__26415_SHARP_,p2__26416_SHARP_)){
return p1__26415_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26420,map__26420__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26426){
var map__26427 = p__26426;
var map__26427__$1 = ((((!((map__26427 == null)))?((((map__26427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26427):map__26427);
var match_length = cljs.core.get.call(null,map__26427__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26427__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26422_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26422_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26429 = [];
var len__20621__auto___26432 = arguments.length;
var i__20622__auto___26433 = (0);
while(true){
if((i__20622__auto___26433 < len__20621__auto___26432)){
args26429.push((arguments[i__20622__auto___26433]));

var G__26434 = (i__20622__auto___26433 + (1));
i__20622__auto___26433 = G__26434;
continue;
} else {
}
break;
}

var G__26431 = args26429.length;
switch (G__26431) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26429.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26436_SHARP_,p2__26437_SHARP_){
return cljs.core.assoc.call(null,p1__26436_SHARP_,cljs.core.get.call(null,p2__26437_SHARP_,key),p2__26437_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26438){
var map__26441 = p__26438;
var map__26441__$1 = ((((!((map__26441 == null)))?((((map__26441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26441):map__26441);
var f_data = map__26441__$1;
var file = cljs.core.get.call(null,map__26441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26443,files_msg){
var map__26450 = p__26443;
var map__26450__$1 = ((((!((map__26450 == null)))?((((map__26450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26450):map__26450);
var opts = map__26450__$1;
var on_cssload = cljs.core.get.call(null,map__26450__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26452_26456 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26453_26457 = null;
var count__26454_26458 = (0);
var i__26455_26459 = (0);
while(true){
if((i__26455_26459 < count__26454_26458)){
var f_26460 = cljs.core._nth.call(null,chunk__26453_26457,i__26455_26459);
figwheel.client.file_reloading.reload_css_file.call(null,f_26460);

var G__26461 = seq__26452_26456;
var G__26462 = chunk__26453_26457;
var G__26463 = count__26454_26458;
var G__26464 = (i__26455_26459 + (1));
seq__26452_26456 = G__26461;
chunk__26453_26457 = G__26462;
count__26454_26458 = G__26463;
i__26455_26459 = G__26464;
continue;
} else {
var temp__4425__auto___26465 = cljs.core.seq.call(null,seq__26452_26456);
if(temp__4425__auto___26465){
var seq__26452_26466__$1 = temp__4425__auto___26465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26452_26466__$1)){
var c__20366__auto___26467 = cljs.core.chunk_first.call(null,seq__26452_26466__$1);
var G__26468 = cljs.core.chunk_rest.call(null,seq__26452_26466__$1);
var G__26469 = c__20366__auto___26467;
var G__26470 = cljs.core.count.call(null,c__20366__auto___26467);
var G__26471 = (0);
seq__26452_26456 = G__26468;
chunk__26453_26457 = G__26469;
count__26454_26458 = G__26470;
i__26455_26459 = G__26471;
continue;
} else {
var f_26472 = cljs.core.first.call(null,seq__26452_26466__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26472);

var G__26473 = cljs.core.next.call(null,seq__26452_26466__$1);
var G__26474 = null;
var G__26475 = (0);
var G__26476 = (0);
seq__26452_26456 = G__26473;
chunk__26453_26457 = G__26474;
count__26454_26458 = G__26475;
i__26455_26459 = G__26476;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26450,map__26450__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26450,map__26450__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map