// Compiled by ClojureScript 1.7.170 {}
goog.provide('whatishistory.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
whatishistory.core.footer = (function whatishistory$core$footer(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),"Created by Ethan Miller (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://google.com"], null),"@ezmiller"], null),"). Questions? Please ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:info@whatishistory.net"], null),"get in touch"], null),"."], null);
});
whatishistory.core.home_page = (function whatishistory$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"What is history?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [whatishistory.core.footer], null)], null);
});
whatishistory.core.about_page = (function whatishistory$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About whatishistory"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
whatishistory.core.current_page = (function whatishistory$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__25181__auto___29806 = (function (params__25182__auto__){
if(cljs.core.map_QMARK_.call(null,params__25182__auto__)){
var map__29803 = params__25182__auto__;
var map__29803__$1 = ((((!((map__29803 == null)))?((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29803):map__29803);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return whatishistory.core.home_page;},new cljs.core.Symbol("whatishistory.core","home-page","whatishistory.core/home-page",-1870143344,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"whatishistory.core","whatishistory.core",1998148330,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/ethan/Sites/reagent-template/whatishistory/src/cljs/whatishistory/core.cljs",16,1,16,16,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(whatishistory.core.home_page)?whatishistory.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25182__auto__)){
var vec__29805 = params__25182__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return whatishistory.core.home_page;},new cljs.core.Symbol("whatishistory.core","home-page","whatishistory.core/home-page",-1870143344,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"whatishistory.core","whatishistory.core",1998148330,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/ethan/Sites/reagent-template/whatishistory/src/cljs/whatishistory/core.cljs",16,1,16,16,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(whatishistory.core.home_page)?whatishistory.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25181__auto___29806);

var action__25181__auto___29810 = (function (params__25182__auto__){
if(cljs.core.map_QMARK_.call(null,params__25182__auto__)){
var map__29807 = params__25182__auto__;
var map__29807__$1 = ((((!((map__29807 == null)))?((((map__29807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29807):map__29807);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return whatishistory.core.about_page;},new cljs.core.Symbol("whatishistory.core","about-page","whatishistory.core/about-page",-999178880,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"whatishistory.core","whatishistory.core",1998148330,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/ethan/Sites/reagent-template/whatishistory/src/cljs/whatishistory/core.cljs",17,1,20,20,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(whatishistory.core.about_page)?whatishistory.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25182__auto__)){
var vec__29809 = params__25182__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return whatishistory.core.about_page;},new cljs.core.Symbol("whatishistory.core","about-page","whatishistory.core/about-page",-999178880,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"whatishistory.core","whatishistory.core",1998148330,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/ethan/Sites/reagent-template/whatishistory/src/cljs/whatishistory/core.cljs",17,1,20,20,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(whatishistory.core.about_page)?whatishistory.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__25181__auto___29810);

whatishistory.core.mount_root = (function whatishistory$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [whatishistory.core.current_page], null),document.getElementById("app"));
});
whatishistory.core.init_BANG_ = (function whatishistory$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null);

accountant.core.dispatch_current_BANG_.call(null);

return whatishistory.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map