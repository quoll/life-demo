// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25291_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25291_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
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
var seq__25292 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25293 = null;
var count__25294 = (0);
var i__25295 = (0);
while(true){
if((i__25295 < count__25294)){
var n = cljs.core._nth.call(null,chunk__25293,i__25295);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25296 = seq__25292;
var G__25297 = chunk__25293;
var G__25298 = count__25294;
var G__25299 = (i__25295 + (1));
seq__25292 = G__25296;
chunk__25293 = G__25297;
count__25294 = G__25298;
i__25295 = G__25299;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25292);
if(temp__5457__auto__){
var seq__25292__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25292__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25292__$1);
var G__25300 = cljs.core.chunk_rest.call(null,seq__25292__$1);
var G__25301 = c__4351__auto__;
var G__25302 = cljs.core.count.call(null,c__4351__auto__);
var G__25303 = (0);
seq__25292 = G__25300;
chunk__25293 = G__25301;
count__25294 = G__25302;
i__25295 = G__25303;
continue;
} else {
var n = cljs.core.first.call(null,seq__25292__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25304 = cljs.core.next.call(null,seq__25292__$1);
var G__25305 = null;
var G__25306 = (0);
var G__25307 = (0);
seq__25292 = G__25304;
chunk__25293 = G__25305;
count__25294 = G__25306;
i__25295 = G__25307;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__25308){
var vec__25309 = p__25308;
var _ = cljs.core.nth.call(null,vec__25309,(0),null);
var v = cljs.core.nth.call(null,vec__25309,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__25312){
var vec__25313 = p__25312;
var k = cljs.core.nth.call(null,vec__25313,(0),null);
var v = cljs.core.nth.call(null,vec__25313,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__25325_25333 = cljs.core.seq.call(null,deps);
var chunk__25326_25334 = null;
var count__25327_25335 = (0);
var i__25328_25336 = (0);
while(true){
if((i__25328_25336 < count__25327_25335)){
var dep_25337 = cljs.core._nth.call(null,chunk__25326_25334,i__25328_25336);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_25337;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25337));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25337,(depth + (1)),state);
} else {
}


var G__25338 = seq__25325_25333;
var G__25339 = chunk__25326_25334;
var G__25340 = count__25327_25335;
var G__25341 = (i__25328_25336 + (1));
seq__25325_25333 = G__25338;
chunk__25326_25334 = G__25339;
count__25327_25335 = G__25340;
i__25328_25336 = G__25341;
continue;
} else {
var temp__5457__auto___25342 = cljs.core.seq.call(null,seq__25325_25333);
if(temp__5457__auto___25342){
var seq__25325_25343__$1 = temp__5457__auto___25342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25325_25343__$1)){
var c__4351__auto___25344 = cljs.core.chunk_first.call(null,seq__25325_25343__$1);
var G__25345 = cljs.core.chunk_rest.call(null,seq__25325_25343__$1);
var G__25346 = c__4351__auto___25344;
var G__25347 = cljs.core.count.call(null,c__4351__auto___25344);
var G__25348 = (0);
seq__25325_25333 = G__25345;
chunk__25326_25334 = G__25346;
count__25327_25335 = G__25347;
i__25328_25336 = G__25348;
continue;
} else {
var dep_25349 = cljs.core.first.call(null,seq__25325_25343__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_25349;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25349));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25349,(depth + (1)),state);
} else {
}


var G__25350 = cljs.core.next.call(null,seq__25325_25343__$1);
var G__25351 = null;
var G__25352 = (0);
var G__25353 = (0);
seq__25325_25333 = G__25350;
chunk__25326_25334 = G__25351;
count__25327_25335 = G__25352;
i__25328_25336 = G__25353;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25329){
var vec__25330 = p__25329;
var seq__25331 = cljs.core.seq.call(null,vec__25330);
var first__25332 = cljs.core.first.call(null,seq__25331);
var seq__25331__$1 = cljs.core.next.call(null,seq__25331);
var x = first__25332;
var xs = seq__25331__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25330,seq__25331,first__25332,seq__25331__$1,x,xs,get_deps__$1){
return (function (p1__25316_SHARP_){
return clojure.set.difference.call(null,p1__25316_SHARP_,x);
});})(vec__25330,seq__25331,first__25332,seq__25331__$1,x,xs,get_deps__$1))
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
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25354 = cljs.core.seq.call(null,provides);
var chunk__25355 = null;
var count__25356 = (0);
var i__25357 = (0);
while(true){
if((i__25357 < count__25356)){
var prov = cljs.core._nth.call(null,chunk__25355,i__25357);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25358_25366 = cljs.core.seq.call(null,requires);
var chunk__25359_25367 = null;
var count__25360_25368 = (0);
var i__25361_25369 = (0);
while(true){
if((i__25361_25369 < count__25360_25368)){
var req_25370 = cljs.core._nth.call(null,chunk__25359_25367,i__25361_25369);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25370,prov);


var G__25371 = seq__25358_25366;
var G__25372 = chunk__25359_25367;
var G__25373 = count__25360_25368;
var G__25374 = (i__25361_25369 + (1));
seq__25358_25366 = G__25371;
chunk__25359_25367 = G__25372;
count__25360_25368 = G__25373;
i__25361_25369 = G__25374;
continue;
} else {
var temp__5457__auto___25375 = cljs.core.seq.call(null,seq__25358_25366);
if(temp__5457__auto___25375){
var seq__25358_25376__$1 = temp__5457__auto___25375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25358_25376__$1)){
var c__4351__auto___25377 = cljs.core.chunk_first.call(null,seq__25358_25376__$1);
var G__25378 = cljs.core.chunk_rest.call(null,seq__25358_25376__$1);
var G__25379 = c__4351__auto___25377;
var G__25380 = cljs.core.count.call(null,c__4351__auto___25377);
var G__25381 = (0);
seq__25358_25366 = G__25378;
chunk__25359_25367 = G__25379;
count__25360_25368 = G__25380;
i__25361_25369 = G__25381;
continue;
} else {
var req_25382 = cljs.core.first.call(null,seq__25358_25376__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25382,prov);


var G__25383 = cljs.core.next.call(null,seq__25358_25376__$1);
var G__25384 = null;
var G__25385 = (0);
var G__25386 = (0);
seq__25358_25366 = G__25383;
chunk__25359_25367 = G__25384;
count__25360_25368 = G__25385;
i__25361_25369 = G__25386;
continue;
}
} else {
}
}
break;
}


var G__25387 = seq__25354;
var G__25388 = chunk__25355;
var G__25389 = count__25356;
var G__25390 = (i__25357 + (1));
seq__25354 = G__25387;
chunk__25355 = G__25388;
count__25356 = G__25389;
i__25357 = G__25390;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25354);
if(temp__5457__auto__){
var seq__25354__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25354__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25354__$1);
var G__25391 = cljs.core.chunk_rest.call(null,seq__25354__$1);
var G__25392 = c__4351__auto__;
var G__25393 = cljs.core.count.call(null,c__4351__auto__);
var G__25394 = (0);
seq__25354 = G__25391;
chunk__25355 = G__25392;
count__25356 = G__25393;
i__25357 = G__25394;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25354__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25362_25395 = cljs.core.seq.call(null,requires);
var chunk__25363_25396 = null;
var count__25364_25397 = (0);
var i__25365_25398 = (0);
while(true){
if((i__25365_25398 < count__25364_25397)){
var req_25399 = cljs.core._nth.call(null,chunk__25363_25396,i__25365_25398);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25399,prov);


var G__25400 = seq__25362_25395;
var G__25401 = chunk__25363_25396;
var G__25402 = count__25364_25397;
var G__25403 = (i__25365_25398 + (1));
seq__25362_25395 = G__25400;
chunk__25363_25396 = G__25401;
count__25364_25397 = G__25402;
i__25365_25398 = G__25403;
continue;
} else {
var temp__5457__auto___25404__$1 = cljs.core.seq.call(null,seq__25362_25395);
if(temp__5457__auto___25404__$1){
var seq__25362_25405__$1 = temp__5457__auto___25404__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25362_25405__$1)){
var c__4351__auto___25406 = cljs.core.chunk_first.call(null,seq__25362_25405__$1);
var G__25407 = cljs.core.chunk_rest.call(null,seq__25362_25405__$1);
var G__25408 = c__4351__auto___25406;
var G__25409 = cljs.core.count.call(null,c__4351__auto___25406);
var G__25410 = (0);
seq__25362_25395 = G__25407;
chunk__25363_25396 = G__25408;
count__25364_25397 = G__25409;
i__25365_25398 = G__25410;
continue;
} else {
var req_25411 = cljs.core.first.call(null,seq__25362_25405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25411,prov);


var G__25412 = cljs.core.next.call(null,seq__25362_25405__$1);
var G__25413 = null;
var G__25414 = (0);
var G__25415 = (0);
seq__25362_25395 = G__25412;
chunk__25363_25396 = G__25413;
count__25364_25397 = G__25414;
i__25365_25398 = G__25415;
continue;
}
} else {
}
}
break;
}


var G__25416 = cljs.core.next.call(null,seq__25354__$1);
var G__25417 = null;
var G__25418 = (0);
var G__25419 = (0);
seq__25354 = G__25416;
chunk__25355 = G__25417;
count__25356 = G__25418;
i__25357 = G__25419;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25420_25424 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25421_25425 = null;
var count__25422_25426 = (0);
var i__25423_25427 = (0);
while(true){
if((i__25423_25427 < count__25422_25426)){
var ns_25428 = cljs.core._nth.call(null,chunk__25421_25425,i__25423_25427);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25428);


var G__25429 = seq__25420_25424;
var G__25430 = chunk__25421_25425;
var G__25431 = count__25422_25426;
var G__25432 = (i__25423_25427 + (1));
seq__25420_25424 = G__25429;
chunk__25421_25425 = G__25430;
count__25422_25426 = G__25431;
i__25423_25427 = G__25432;
continue;
} else {
var temp__5457__auto___25433 = cljs.core.seq.call(null,seq__25420_25424);
if(temp__5457__auto___25433){
var seq__25420_25434__$1 = temp__5457__auto___25433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25420_25434__$1)){
var c__4351__auto___25435 = cljs.core.chunk_first.call(null,seq__25420_25434__$1);
var G__25436 = cljs.core.chunk_rest.call(null,seq__25420_25434__$1);
var G__25437 = c__4351__auto___25435;
var G__25438 = cljs.core.count.call(null,c__4351__auto___25435);
var G__25439 = (0);
seq__25420_25424 = G__25436;
chunk__25421_25425 = G__25437;
count__25422_25426 = G__25438;
i__25423_25427 = G__25439;
continue;
} else {
var ns_25440 = cljs.core.first.call(null,seq__25420_25434__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25440);


var G__25441 = cljs.core.next.call(null,seq__25420_25434__$1);
var G__25442 = null;
var G__25443 = (0);
var G__25444 = (0);
seq__25420_25424 = G__25441;
chunk__25421_25425 = G__25442;
count__25422_25426 = G__25443;
i__25423_25427 = G__25444;
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
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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
var G__25445__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25446__i = 0, G__25446__a = new Array(arguments.length -  0);
while (G__25446__i < G__25446__a.length) {G__25446__a[G__25446__i] = arguments[G__25446__i + 0]; ++G__25446__i;}
  args = new cljs.core.IndexedSeq(G__25446__a,0,null);
} 
return G__25445__delegate.call(this,args);};
G__25445.cljs$lang$maxFixedArity = 0;
G__25445.cljs$lang$applyTo = (function (arglist__25447){
var args = cljs.core.seq(arglist__25447);
return G__25445__delegate(args);
});
G__25445.cljs$core$IFn$_invoke$arity$variadic = G__25445__delegate;
return G__25445;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__25448_SHARP_,p2__25449_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25448_SHARP_)].join('')),p2__25449_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__25450_SHARP_,p2__25451_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25450_SHARP_)].join(''),p2__25451_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25452 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25452.addCallback(((function (G__25452){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25452))
);

G__25452.addErrback(((function (G__25452){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25452))
);

return G__25452;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25453){if((e25453 instanceof Error)){
var e = e25453;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25453;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25454){if((e25454 instanceof Error)){
var e = e25454;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25454;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25455 = cljs.core._EQ_;
var expr__25456 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25455.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25456))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25455.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25456))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25455.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25456))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25455,expr__25456){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25455,expr__25456))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25458,callback){
var map__25459 = p__25458;
var map__25459__$1 = ((((!((map__25459 == null)))?(((((map__25459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25459):map__25459);
var file_msg = map__25459__$1;
var request_url = cljs.core.get.call(null,map__25459__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25459,map__25459__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25459,map__25459__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__){
return (function (state_25497){
var state_val_25498 = (state_25497[(1)]);
if((state_val_25498 === (7))){
var inst_25493 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25499_25525 = state_25497__$1;
(statearr_25499_25525[(2)] = inst_25493);

(statearr_25499_25525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (1))){
var state_25497__$1 = state_25497;
var statearr_25500_25526 = state_25497__$1;
(statearr_25500_25526[(2)] = null);

(statearr_25500_25526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (4))){
var inst_25463 = (state_25497[(7)]);
var inst_25463__$1 = (state_25497[(2)]);
var state_25497__$1 = (function (){var statearr_25501 = state_25497;
(statearr_25501[(7)] = inst_25463__$1);

return statearr_25501;
})();
if(cljs.core.truth_(inst_25463__$1)){
var statearr_25502_25527 = state_25497__$1;
(statearr_25502_25527[(1)] = (5));

} else {
var statearr_25503_25528 = state_25497__$1;
(statearr_25503_25528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (15))){
var inst_25478 = (state_25497[(8)]);
var inst_25476 = (state_25497[(9)]);
var inst_25480 = inst_25478.call(null,inst_25476);
var state_25497__$1 = state_25497;
var statearr_25504_25529 = state_25497__$1;
(statearr_25504_25529[(2)] = inst_25480);

(statearr_25504_25529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (13))){
var inst_25487 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25505_25530 = state_25497__$1;
(statearr_25505_25530[(2)] = inst_25487);

(statearr_25505_25530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (6))){
var state_25497__$1 = state_25497;
var statearr_25506_25531 = state_25497__$1;
(statearr_25506_25531[(2)] = null);

(statearr_25506_25531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (17))){
var inst_25484 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25507_25532 = state_25497__$1;
(statearr_25507_25532[(2)] = inst_25484);

(statearr_25507_25532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (3))){
var inst_25495 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25497__$1,inst_25495);
} else {
if((state_val_25498 === (12))){
var state_25497__$1 = state_25497;
var statearr_25508_25533 = state_25497__$1;
(statearr_25508_25533[(2)] = null);

(statearr_25508_25533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (2))){
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25497__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25498 === (11))){
var inst_25468 = (state_25497[(10)]);
var inst_25474 = figwheel.client.file_reloading.blocking_load.call(null,inst_25468);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25497__$1,(14),inst_25474);
} else {
if((state_val_25498 === (9))){
var inst_25468 = (state_25497[(10)]);
var state_25497__$1 = state_25497;
if(cljs.core.truth_(inst_25468)){
var statearr_25509_25534 = state_25497__$1;
(statearr_25509_25534[(1)] = (11));

} else {
var statearr_25510_25535 = state_25497__$1;
(statearr_25510_25535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (5))){
var inst_25463 = (state_25497[(7)]);
var inst_25469 = (state_25497[(11)]);
var inst_25468 = cljs.core.nth.call(null,inst_25463,(0),null);
var inst_25469__$1 = cljs.core.nth.call(null,inst_25463,(1),null);
var state_25497__$1 = (function (){var statearr_25511 = state_25497;
(statearr_25511[(11)] = inst_25469__$1);

(statearr_25511[(10)] = inst_25468);

return statearr_25511;
})();
if(cljs.core.truth_(inst_25469__$1)){
var statearr_25512_25536 = state_25497__$1;
(statearr_25512_25536[(1)] = (8));

} else {
var statearr_25513_25537 = state_25497__$1;
(statearr_25513_25537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (14))){
var inst_25478 = (state_25497[(8)]);
var inst_25468 = (state_25497[(10)]);
var inst_25476 = (state_25497[(2)]);
var inst_25477 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25478__$1 = cljs.core.get.call(null,inst_25477,inst_25468);
var state_25497__$1 = (function (){var statearr_25514 = state_25497;
(statearr_25514[(8)] = inst_25478__$1);

(statearr_25514[(9)] = inst_25476);

return statearr_25514;
})();
if(cljs.core.truth_(inst_25478__$1)){
var statearr_25515_25538 = state_25497__$1;
(statearr_25515_25538[(1)] = (15));

} else {
var statearr_25516_25539 = state_25497__$1;
(statearr_25516_25539[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (16))){
var inst_25476 = (state_25497[(9)]);
var inst_25482 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25476);
var state_25497__$1 = state_25497;
var statearr_25517_25540 = state_25497__$1;
(statearr_25517_25540[(2)] = inst_25482);

(statearr_25517_25540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (10))){
var inst_25489 = (state_25497[(2)]);
var state_25497__$1 = (function (){var statearr_25518 = state_25497;
(statearr_25518[(12)] = inst_25489);

return statearr_25518;
})();
var statearr_25519_25541 = state_25497__$1;
(statearr_25519_25541[(2)] = null);

(statearr_25519_25541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (8))){
var inst_25469 = (state_25497[(11)]);
var inst_25471 = eval(inst_25469);
var state_25497__$1 = state_25497;
var statearr_25520_25542 = state_25497__$1;
(statearr_25520_25542[(2)] = inst_25471);

(statearr_25520_25542[(1)] = (10));


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
});})(c__23153__auto__))
;
return ((function (switch__23062__auto__,c__23153__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$state_machine__23063__auto____0 = (function (){
var statearr_25521 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25521[(0)] = figwheel$client$file_reloading$state_machine__23063__auto__);

(statearr_25521[(1)] = (1));

return statearr_25521;
});
var figwheel$client$file_reloading$state_machine__23063__auto____1 = (function (state_25497){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25522){if((e25522 instanceof Object)){
var ex__23066__auto__ = e25522;
var statearr_25523_25543 = state_25497;
(statearr_25523_25543[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25544 = state_25497;
state_25497 = G__25544;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23063__auto__ = function(state_25497){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23063__auto____1.call(this,state_25497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23063__auto____0;
figwheel$client$file_reloading$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23063__auto____1;
return figwheel$client$file_reloading$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__))
})();
var state__23155__auto__ = (function (){var statearr_25524 = f__23154__auto__.call(null);
(statearr_25524[(6)] = c__23153__auto__);

return statearr_25524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__))
);

return c__23153__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25546 = arguments.length;
switch (G__25546) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25548,callback){
var map__25549 = p__25548;
var map__25549__$1 = ((((!((map__25549 == null)))?(((((map__25549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25549):map__25549);
var file_msg = map__25549__$1;
var namespace = cljs.core.get.call(null,map__25549__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25549,map__25549__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25549,map__25549__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25551){
var map__25552 = p__25551;
var map__25552__$1 = ((((!((map__25552 == null)))?(((((map__25552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25552):map__25552);
var file_msg = map__25552__$1;
var namespace = cljs.core.get.call(null,map__25552__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25554){
var map__25555 = p__25554;
var map__25555__$1 = ((((!((map__25555 == null)))?(((((map__25555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25555):map__25555);
var file_msg = map__25555__$1;
var namespace = cljs.core.get.call(null,map__25555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25557,callback){
var map__25558 = p__25557;
var map__25558__$1 = ((((!((map__25558 == null)))?(((((map__25558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25558):map__25558);
var file_msg = map__25558__$1;
var request_url = cljs.core.get.call(null,map__25558__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__23153__auto___25608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___25608,out){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___25608,out){
return (function (state_25593){
var state_val_25594 = (state_25593[(1)]);
if((state_val_25594 === (1))){
var inst_25567 = cljs.core.seq.call(null,files);
var inst_25568 = cljs.core.first.call(null,inst_25567);
var inst_25569 = cljs.core.next.call(null,inst_25567);
var inst_25570 = files;
var state_25593__$1 = (function (){var statearr_25595 = state_25593;
(statearr_25595[(7)] = inst_25569);

(statearr_25595[(8)] = inst_25568);

(statearr_25595[(9)] = inst_25570);

return statearr_25595;
})();
var statearr_25596_25609 = state_25593__$1;
(statearr_25596_25609[(2)] = null);

(statearr_25596_25609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (2))){
var inst_25570 = (state_25593[(9)]);
var inst_25576 = (state_25593[(10)]);
var inst_25575 = cljs.core.seq.call(null,inst_25570);
var inst_25576__$1 = cljs.core.first.call(null,inst_25575);
var inst_25577 = cljs.core.next.call(null,inst_25575);
var inst_25578 = (inst_25576__$1 == null);
var inst_25579 = cljs.core.not.call(null,inst_25578);
var state_25593__$1 = (function (){var statearr_25597 = state_25593;
(statearr_25597[(11)] = inst_25577);

(statearr_25597[(10)] = inst_25576__$1);

return statearr_25597;
})();
if(inst_25579){
var statearr_25598_25610 = state_25593__$1;
(statearr_25598_25610[(1)] = (4));

} else {
var statearr_25599_25611 = state_25593__$1;
(statearr_25599_25611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (3))){
var inst_25591 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25593__$1,inst_25591);
} else {
if((state_val_25594 === (4))){
var inst_25576 = (state_25593[(10)]);
var inst_25581 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25576);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25593__$1,(7),inst_25581);
} else {
if((state_val_25594 === (5))){
var inst_25587 = cljs.core.async.close_BANG_.call(null,out);
var state_25593__$1 = state_25593;
var statearr_25600_25612 = state_25593__$1;
(statearr_25600_25612[(2)] = inst_25587);

(statearr_25600_25612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (6))){
var inst_25589 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25601_25613 = state_25593__$1;
(statearr_25601_25613[(2)] = inst_25589);

(statearr_25601_25613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (7))){
var inst_25577 = (state_25593[(11)]);
var inst_25583 = (state_25593[(2)]);
var inst_25584 = cljs.core.async.put_BANG_.call(null,out,inst_25583);
var inst_25570 = inst_25577;
var state_25593__$1 = (function (){var statearr_25602 = state_25593;
(statearr_25602[(12)] = inst_25584);

(statearr_25602[(9)] = inst_25570);

return statearr_25602;
})();
var statearr_25603_25614 = state_25593__$1;
(statearr_25603_25614[(2)] = null);

(statearr_25603_25614[(1)] = (2));


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
});})(c__23153__auto___25608,out))
;
return ((function (switch__23062__auto__,c__23153__auto___25608,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0 = (function (){
var statearr_25604 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25604[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__);

(statearr_25604[(1)] = (1));

return statearr_25604;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1 = (function (state_25593){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25605){if((e25605 instanceof Object)){
var ex__23066__auto__ = e25605;
var statearr_25606_25615 = state_25593;
(statearr_25606_25615[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25616 = state_25593;
state_25593 = G__25616;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__ = function(state_25593){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1.call(this,state_25593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___25608,out))
})();
var state__23155__auto__ = (function (){var statearr_25607 = f__23154__auto__.call(null);
(statearr_25607[(6)] = c__23153__auto___25608);

return statearr_25607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___25608,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25617,opts){
var map__25618 = p__25617;
var map__25618__$1 = ((((!((map__25618 == null)))?(((((map__25618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25618):map__25618);
var eval_body = cljs.core.get.call(null,map__25618__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25618__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25620){var e = e25620;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25621_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25621_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__25622){
var vec__25623 = p__25622;
var k = cljs.core.nth.call(null,vec__25623,(0),null);
var v = cljs.core.nth.call(null,vec__25623,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25626){
var vec__25627 = p__25626;
var k = cljs.core.nth.call(null,vec__25627,(0),null);
var v = cljs.core.nth.call(null,vec__25627,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25633,p__25634){
var map__25635 = p__25633;
var map__25635__$1 = ((((!((map__25635 == null)))?(((((map__25635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25635):map__25635);
var opts = map__25635__$1;
var before_jsload = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25636 = p__25634;
var map__25636__$1 = ((((!((map__25636 == null)))?(((((map__25636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25636):map__25636);
var msg = map__25636__$1;
var files = cljs.core.get.call(null,map__25636__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25636__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25636__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25790){
var state_val_25791 = (state_25790[(1)]);
if((state_val_25791 === (7))){
var inst_25650 = (state_25790[(7)]);
var inst_25653 = (state_25790[(8)]);
var inst_25651 = (state_25790[(9)]);
var inst_25652 = (state_25790[(10)]);
var inst_25658 = cljs.core._nth.call(null,inst_25651,inst_25653);
var inst_25659 = figwheel.client.file_reloading.eval_body.call(null,inst_25658,opts);
var inst_25660 = (inst_25653 + (1));
var tmp25792 = inst_25650;
var tmp25793 = inst_25651;
var tmp25794 = inst_25652;
var inst_25650__$1 = tmp25792;
var inst_25651__$1 = tmp25793;
var inst_25652__$1 = tmp25794;
var inst_25653__$1 = inst_25660;
var state_25790__$1 = (function (){var statearr_25795 = state_25790;
(statearr_25795[(7)] = inst_25650__$1);

(statearr_25795[(8)] = inst_25653__$1);

(statearr_25795[(9)] = inst_25651__$1);

(statearr_25795[(10)] = inst_25652__$1);

(statearr_25795[(11)] = inst_25659);

return statearr_25795;
})();
var statearr_25796_25879 = state_25790__$1;
(statearr_25796_25879[(2)] = null);

(statearr_25796_25879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (20))){
var inst_25693 = (state_25790[(12)]);
var inst_25701 = figwheel.client.file_reloading.sort_files.call(null,inst_25693);
var state_25790__$1 = state_25790;
var statearr_25797_25880 = state_25790__$1;
(statearr_25797_25880[(2)] = inst_25701);

(statearr_25797_25880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (27))){
var state_25790__$1 = state_25790;
var statearr_25798_25881 = state_25790__$1;
(statearr_25798_25881[(2)] = null);

(statearr_25798_25881[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (1))){
var inst_25642 = (state_25790[(13)]);
var inst_25639 = before_jsload.call(null,files);
var inst_25640 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25641 = (function (){return ((function (inst_25642,inst_25639,inst_25640,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25630_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25630_SHARP_);
});
;})(inst_25642,inst_25639,inst_25640,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25642__$1 = cljs.core.filter.call(null,inst_25641,files);
var inst_25643 = cljs.core.not_empty.call(null,inst_25642__$1);
var state_25790__$1 = (function (){var statearr_25799 = state_25790;
(statearr_25799[(14)] = inst_25640);

(statearr_25799[(15)] = inst_25639);

(statearr_25799[(13)] = inst_25642__$1);

return statearr_25799;
})();
if(cljs.core.truth_(inst_25643)){
var statearr_25800_25882 = state_25790__$1;
(statearr_25800_25882[(1)] = (2));

} else {
var statearr_25801_25883 = state_25790__$1;
(statearr_25801_25883[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (24))){
var state_25790__$1 = state_25790;
var statearr_25802_25884 = state_25790__$1;
(statearr_25802_25884[(2)] = null);

(statearr_25802_25884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (39))){
var inst_25743 = (state_25790[(16)]);
var state_25790__$1 = state_25790;
var statearr_25803_25885 = state_25790__$1;
(statearr_25803_25885[(2)] = inst_25743);

(statearr_25803_25885[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (46))){
var inst_25785 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25804_25886 = state_25790__$1;
(statearr_25804_25886[(2)] = inst_25785);

(statearr_25804_25886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (4))){
var inst_25687 = (state_25790[(2)]);
var inst_25688 = cljs.core.List.EMPTY;
var inst_25689 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25688);
var inst_25690 = (function (){return ((function (inst_25687,inst_25688,inst_25689,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25631_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25631_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25631_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25631_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_25687,inst_25688,inst_25689,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25691 = cljs.core.filter.call(null,inst_25690,files);
var inst_25692 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25693 = cljs.core.concat.call(null,inst_25691,inst_25692);
var state_25790__$1 = (function (){var statearr_25805 = state_25790;
(statearr_25805[(12)] = inst_25693);

(statearr_25805[(17)] = inst_25689);

(statearr_25805[(18)] = inst_25687);

return statearr_25805;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25806_25887 = state_25790__$1;
(statearr_25806_25887[(1)] = (16));

} else {
var statearr_25807_25888 = state_25790__$1;
(statearr_25807_25888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (15))){
var inst_25677 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25808_25889 = state_25790__$1;
(statearr_25808_25889[(2)] = inst_25677);

(statearr_25808_25889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (21))){
var inst_25703 = (state_25790[(19)]);
var inst_25703__$1 = (state_25790[(2)]);
var inst_25704 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25703__$1);
var state_25790__$1 = (function (){var statearr_25809 = state_25790;
(statearr_25809[(19)] = inst_25703__$1);

return statearr_25809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25790__$1,(22),inst_25704);
} else {
if((state_val_25791 === (31))){
var inst_25788 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25790__$1,inst_25788);
} else {
if((state_val_25791 === (32))){
var inst_25743 = (state_25790[(16)]);
var inst_25748 = inst_25743.cljs$lang$protocol_mask$partition0$;
var inst_25749 = (inst_25748 & (64));
var inst_25750 = inst_25743.cljs$core$ISeq$;
var inst_25751 = (cljs.core.PROTOCOL_SENTINEL === inst_25750);
var inst_25752 = ((inst_25749) || (inst_25751));
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25752)){
var statearr_25810_25890 = state_25790__$1;
(statearr_25810_25890[(1)] = (35));

} else {
var statearr_25811_25891 = state_25790__$1;
(statearr_25811_25891[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (40))){
var inst_25765 = (state_25790[(20)]);
var inst_25764 = (state_25790[(2)]);
var inst_25765__$1 = cljs.core.get.call(null,inst_25764,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25766 = cljs.core.get.call(null,inst_25764,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25767 = cljs.core.not_empty.call(null,inst_25765__$1);
var state_25790__$1 = (function (){var statearr_25812 = state_25790;
(statearr_25812[(21)] = inst_25766);

(statearr_25812[(20)] = inst_25765__$1);

return statearr_25812;
})();
if(cljs.core.truth_(inst_25767)){
var statearr_25813_25892 = state_25790__$1;
(statearr_25813_25892[(1)] = (41));

} else {
var statearr_25814_25893 = state_25790__$1;
(statearr_25814_25893[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (33))){
var state_25790__$1 = state_25790;
var statearr_25815_25894 = state_25790__$1;
(statearr_25815_25894[(2)] = false);

(statearr_25815_25894[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (13))){
var inst_25663 = (state_25790[(22)]);
var inst_25667 = cljs.core.chunk_first.call(null,inst_25663);
var inst_25668 = cljs.core.chunk_rest.call(null,inst_25663);
var inst_25669 = cljs.core.count.call(null,inst_25667);
var inst_25650 = inst_25668;
var inst_25651 = inst_25667;
var inst_25652 = inst_25669;
var inst_25653 = (0);
var state_25790__$1 = (function (){var statearr_25816 = state_25790;
(statearr_25816[(7)] = inst_25650);

(statearr_25816[(8)] = inst_25653);

(statearr_25816[(9)] = inst_25651);

(statearr_25816[(10)] = inst_25652);

return statearr_25816;
})();
var statearr_25817_25895 = state_25790__$1;
(statearr_25817_25895[(2)] = null);

(statearr_25817_25895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (22))){
var inst_25711 = (state_25790[(23)]);
var inst_25703 = (state_25790[(19)]);
var inst_25706 = (state_25790[(24)]);
var inst_25707 = (state_25790[(25)]);
var inst_25706__$1 = (state_25790[(2)]);
var inst_25707__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25706__$1);
var inst_25708 = (function (){var all_files = inst_25703;
var res_SINGLEQUOTE_ = inst_25706__$1;
var res = inst_25707__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25711,inst_25703,inst_25706,inst_25707,inst_25706__$1,inst_25707__$1,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25632_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25632_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25711,inst_25703,inst_25706,inst_25707,inst_25706__$1,inst_25707__$1,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25709 = cljs.core.filter.call(null,inst_25708,inst_25706__$1);
var inst_25710 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25711__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25710);
var inst_25712 = cljs.core.not_empty.call(null,inst_25711__$1);
var state_25790__$1 = (function (){var statearr_25818 = state_25790;
(statearr_25818[(23)] = inst_25711__$1);

(statearr_25818[(26)] = inst_25709);

(statearr_25818[(24)] = inst_25706__$1);

(statearr_25818[(25)] = inst_25707__$1);

return statearr_25818;
})();
if(cljs.core.truth_(inst_25712)){
var statearr_25819_25896 = state_25790__$1;
(statearr_25819_25896[(1)] = (23));

} else {
var statearr_25820_25897 = state_25790__$1;
(statearr_25820_25897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (36))){
var state_25790__$1 = state_25790;
var statearr_25821_25898 = state_25790__$1;
(statearr_25821_25898[(2)] = false);

(statearr_25821_25898[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (41))){
var inst_25765 = (state_25790[(20)]);
var inst_25769 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25770 = cljs.core.map.call(null,inst_25769,inst_25765);
var inst_25771 = cljs.core.pr_str.call(null,inst_25770);
var inst_25772 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25771)].join('');
var inst_25773 = figwheel.client.utils.log.call(null,inst_25772);
var state_25790__$1 = state_25790;
var statearr_25822_25899 = state_25790__$1;
(statearr_25822_25899[(2)] = inst_25773);

(statearr_25822_25899[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (43))){
var inst_25766 = (state_25790[(21)]);
var inst_25776 = (state_25790[(2)]);
var inst_25777 = cljs.core.not_empty.call(null,inst_25766);
var state_25790__$1 = (function (){var statearr_25823 = state_25790;
(statearr_25823[(27)] = inst_25776);

return statearr_25823;
})();
if(cljs.core.truth_(inst_25777)){
var statearr_25824_25900 = state_25790__$1;
(statearr_25824_25900[(1)] = (44));

} else {
var statearr_25825_25901 = state_25790__$1;
(statearr_25825_25901[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (29))){
var inst_25743 = (state_25790[(16)]);
var inst_25711 = (state_25790[(23)]);
var inst_25709 = (state_25790[(26)]);
var inst_25703 = (state_25790[(19)]);
var inst_25706 = (state_25790[(24)]);
var inst_25707 = (state_25790[(25)]);
var inst_25739 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25742 = (function (){var all_files = inst_25703;
var res_SINGLEQUOTE_ = inst_25706;
var res = inst_25707;
var files_not_loaded = inst_25709;
var dependencies_that_loaded = inst_25711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25743,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25739,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25741){
var map__25826 = p__25741;
var map__25826__$1 = ((((!((map__25826 == null)))?(((((map__25826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25826):map__25826);
var namespace = cljs.core.get.call(null,map__25826__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25743,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25739,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25743__$1 = cljs.core.group_by.call(null,inst_25742,inst_25709);
var inst_25745 = (inst_25743__$1 == null);
var inst_25746 = cljs.core.not.call(null,inst_25745);
var state_25790__$1 = (function (){var statearr_25828 = state_25790;
(statearr_25828[(16)] = inst_25743__$1);

(statearr_25828[(28)] = inst_25739);

return statearr_25828;
})();
if(inst_25746){
var statearr_25829_25902 = state_25790__$1;
(statearr_25829_25902[(1)] = (32));

} else {
var statearr_25830_25903 = state_25790__$1;
(statearr_25830_25903[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (44))){
var inst_25766 = (state_25790[(21)]);
var inst_25779 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25766);
var inst_25780 = cljs.core.pr_str.call(null,inst_25779);
var inst_25781 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25780)].join('');
var inst_25782 = figwheel.client.utils.log.call(null,inst_25781);
var state_25790__$1 = state_25790;
var statearr_25831_25904 = state_25790__$1;
(statearr_25831_25904[(2)] = inst_25782);

(statearr_25831_25904[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (6))){
var inst_25684 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25832_25905 = state_25790__$1;
(statearr_25832_25905[(2)] = inst_25684);

(statearr_25832_25905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (28))){
var inst_25709 = (state_25790[(26)]);
var inst_25736 = (state_25790[(2)]);
var inst_25737 = cljs.core.not_empty.call(null,inst_25709);
var state_25790__$1 = (function (){var statearr_25833 = state_25790;
(statearr_25833[(29)] = inst_25736);

return statearr_25833;
})();
if(cljs.core.truth_(inst_25737)){
var statearr_25834_25906 = state_25790__$1;
(statearr_25834_25906[(1)] = (29));

} else {
var statearr_25835_25907 = state_25790__$1;
(statearr_25835_25907[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (25))){
var inst_25707 = (state_25790[(25)]);
var inst_25723 = (state_25790[(2)]);
var inst_25724 = cljs.core.not_empty.call(null,inst_25707);
var state_25790__$1 = (function (){var statearr_25836 = state_25790;
(statearr_25836[(30)] = inst_25723);

return statearr_25836;
})();
if(cljs.core.truth_(inst_25724)){
var statearr_25837_25908 = state_25790__$1;
(statearr_25837_25908[(1)] = (26));

} else {
var statearr_25838_25909 = state_25790__$1;
(statearr_25838_25909[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (34))){
var inst_25759 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25759)){
var statearr_25839_25910 = state_25790__$1;
(statearr_25839_25910[(1)] = (38));

} else {
var statearr_25840_25911 = state_25790__$1;
(statearr_25840_25911[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (17))){
var state_25790__$1 = state_25790;
var statearr_25841_25912 = state_25790__$1;
(statearr_25841_25912[(2)] = recompile_dependents);

(statearr_25841_25912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (3))){
var state_25790__$1 = state_25790;
var statearr_25842_25913 = state_25790__$1;
(statearr_25842_25913[(2)] = null);

(statearr_25842_25913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (12))){
var inst_25680 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25843_25914 = state_25790__$1;
(statearr_25843_25914[(2)] = inst_25680);

(statearr_25843_25914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (2))){
var inst_25642 = (state_25790[(13)]);
var inst_25649 = cljs.core.seq.call(null,inst_25642);
var inst_25650 = inst_25649;
var inst_25651 = null;
var inst_25652 = (0);
var inst_25653 = (0);
var state_25790__$1 = (function (){var statearr_25844 = state_25790;
(statearr_25844[(7)] = inst_25650);

(statearr_25844[(8)] = inst_25653);

(statearr_25844[(9)] = inst_25651);

(statearr_25844[(10)] = inst_25652);

return statearr_25844;
})();
var statearr_25845_25915 = state_25790__$1;
(statearr_25845_25915[(2)] = null);

(statearr_25845_25915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (23))){
var inst_25711 = (state_25790[(23)]);
var inst_25709 = (state_25790[(26)]);
var inst_25703 = (state_25790[(19)]);
var inst_25706 = (state_25790[(24)]);
var inst_25707 = (state_25790[(25)]);
var inst_25714 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25716 = (function (){var all_files = inst_25703;
var res_SINGLEQUOTE_ = inst_25706;
var res = inst_25707;
var files_not_loaded = inst_25709;
var dependencies_that_loaded = inst_25711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25714,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25715){
var map__25846 = p__25715;
var map__25846__$1 = ((((!((map__25846 == null)))?(((((map__25846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25846):map__25846);
var request_url = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25714,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25717 = cljs.core.reverse.call(null,inst_25711);
var inst_25718 = cljs.core.map.call(null,inst_25716,inst_25717);
var inst_25719 = cljs.core.pr_str.call(null,inst_25718);
var inst_25720 = figwheel.client.utils.log.call(null,inst_25719);
var state_25790__$1 = (function (){var statearr_25848 = state_25790;
(statearr_25848[(31)] = inst_25714);

return statearr_25848;
})();
var statearr_25849_25916 = state_25790__$1;
(statearr_25849_25916[(2)] = inst_25720);

(statearr_25849_25916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (35))){
var state_25790__$1 = state_25790;
var statearr_25850_25917 = state_25790__$1;
(statearr_25850_25917[(2)] = true);

(statearr_25850_25917[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (19))){
var inst_25693 = (state_25790[(12)]);
var inst_25699 = figwheel.client.file_reloading.expand_files.call(null,inst_25693);
var state_25790__$1 = state_25790;
var statearr_25851_25918 = state_25790__$1;
(statearr_25851_25918[(2)] = inst_25699);

(statearr_25851_25918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (11))){
var state_25790__$1 = state_25790;
var statearr_25852_25919 = state_25790__$1;
(statearr_25852_25919[(2)] = null);

(statearr_25852_25919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (9))){
var inst_25682 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25853_25920 = state_25790__$1;
(statearr_25853_25920[(2)] = inst_25682);

(statearr_25853_25920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (5))){
var inst_25653 = (state_25790[(8)]);
var inst_25652 = (state_25790[(10)]);
var inst_25655 = (inst_25653 < inst_25652);
var inst_25656 = inst_25655;
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25656)){
var statearr_25854_25921 = state_25790__$1;
(statearr_25854_25921[(1)] = (7));

} else {
var statearr_25855_25922 = state_25790__$1;
(statearr_25855_25922[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (14))){
var inst_25663 = (state_25790[(22)]);
var inst_25672 = cljs.core.first.call(null,inst_25663);
var inst_25673 = figwheel.client.file_reloading.eval_body.call(null,inst_25672,opts);
var inst_25674 = cljs.core.next.call(null,inst_25663);
var inst_25650 = inst_25674;
var inst_25651 = null;
var inst_25652 = (0);
var inst_25653 = (0);
var state_25790__$1 = (function (){var statearr_25856 = state_25790;
(statearr_25856[(7)] = inst_25650);

(statearr_25856[(8)] = inst_25653);

(statearr_25856[(32)] = inst_25673);

(statearr_25856[(9)] = inst_25651);

(statearr_25856[(10)] = inst_25652);

return statearr_25856;
})();
var statearr_25857_25923 = state_25790__$1;
(statearr_25857_25923[(2)] = null);

(statearr_25857_25923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (45))){
var state_25790__$1 = state_25790;
var statearr_25858_25924 = state_25790__$1;
(statearr_25858_25924[(2)] = null);

(statearr_25858_25924[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (26))){
var inst_25711 = (state_25790[(23)]);
var inst_25709 = (state_25790[(26)]);
var inst_25703 = (state_25790[(19)]);
var inst_25706 = (state_25790[(24)]);
var inst_25707 = (state_25790[(25)]);
var inst_25726 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25728 = (function (){var all_files = inst_25703;
var res_SINGLEQUOTE_ = inst_25706;
var res = inst_25707;
var files_not_loaded = inst_25709;
var dependencies_that_loaded = inst_25711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25726,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25727){
var map__25859 = p__25727;
var map__25859__$1 = ((((!((map__25859 == null)))?(((((map__25859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25859):map__25859);
var namespace = cljs.core.get.call(null,map__25859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25859__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25726,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25729 = cljs.core.map.call(null,inst_25728,inst_25707);
var inst_25730 = cljs.core.pr_str.call(null,inst_25729);
var inst_25731 = figwheel.client.utils.log.call(null,inst_25730);
var inst_25732 = (function (){var all_files = inst_25703;
var res_SINGLEQUOTE_ = inst_25706;
var res = inst_25707;
var files_not_loaded = inst_25709;
var dependencies_that_loaded = inst_25711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25726,inst_25728,inst_25729,inst_25730,inst_25731,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25711,inst_25709,inst_25703,inst_25706,inst_25707,inst_25726,inst_25728,inst_25729,inst_25730,inst_25731,state_val_25791,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25733 = setTimeout(inst_25732,(10));
var state_25790__$1 = (function (){var statearr_25861 = state_25790;
(statearr_25861[(33)] = inst_25731);

(statearr_25861[(34)] = inst_25726);

return statearr_25861;
})();
var statearr_25862_25925 = state_25790__$1;
(statearr_25862_25925[(2)] = inst_25733);

(statearr_25862_25925[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (16))){
var state_25790__$1 = state_25790;
var statearr_25863_25926 = state_25790__$1;
(statearr_25863_25926[(2)] = reload_dependents);

(statearr_25863_25926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (38))){
var inst_25743 = (state_25790[(16)]);
var inst_25761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25743);
var state_25790__$1 = state_25790;
var statearr_25864_25927 = state_25790__$1;
(statearr_25864_25927[(2)] = inst_25761);

(statearr_25864_25927[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (30))){
var state_25790__$1 = state_25790;
var statearr_25865_25928 = state_25790__$1;
(statearr_25865_25928[(2)] = null);

(statearr_25865_25928[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (10))){
var inst_25663 = (state_25790[(22)]);
var inst_25665 = cljs.core.chunked_seq_QMARK_.call(null,inst_25663);
var state_25790__$1 = state_25790;
if(inst_25665){
var statearr_25866_25929 = state_25790__$1;
(statearr_25866_25929[(1)] = (13));

} else {
var statearr_25867_25930 = state_25790__$1;
(statearr_25867_25930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (18))){
var inst_25697 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25697)){
var statearr_25868_25931 = state_25790__$1;
(statearr_25868_25931[(1)] = (19));

} else {
var statearr_25869_25932 = state_25790__$1;
(statearr_25869_25932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (42))){
var state_25790__$1 = state_25790;
var statearr_25870_25933 = state_25790__$1;
(statearr_25870_25933[(2)] = null);

(statearr_25870_25933[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (37))){
var inst_25756 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25871_25934 = state_25790__$1;
(statearr_25871_25934[(2)] = inst_25756);

(statearr_25871_25934[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (8))){
var inst_25650 = (state_25790[(7)]);
var inst_25663 = (state_25790[(22)]);
var inst_25663__$1 = cljs.core.seq.call(null,inst_25650);
var state_25790__$1 = (function (){var statearr_25872 = state_25790;
(statearr_25872[(22)] = inst_25663__$1);

return statearr_25872;
})();
if(inst_25663__$1){
var statearr_25873_25935 = state_25790__$1;
(statearr_25873_25935[(1)] = (10));

} else {
var statearr_25874_25936 = state_25790__$1;
(statearr_25874_25936[(1)] = (11));

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
});})(c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23062__auto__,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0 = (function (){
var statearr_25875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25875[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__);

(statearr_25875[(1)] = (1));

return statearr_25875;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1 = (function (state_25790){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25876){if((e25876 instanceof Object)){
var ex__23066__auto__ = e25876;
var statearr_25877_25937 = state_25790;
(statearr_25877_25937[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25938 = state_25790;
state_25790 = G__25938;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__ = function(state_25790){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1.call(this,state_25790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23155__auto__ = (function (){var statearr_25878 = f__23154__auto__.call(null);
(statearr_25878[(6)] = c__23153__auto__);

return statearr_25878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__,map__25635,map__25635__$1,opts,before_jsload,on_jsload,reload_dependents,map__25636,map__25636__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23153__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25941,link){
var map__25942 = p__25941;
var map__25942__$1 = ((((!((map__25942 == null)))?(((((map__25942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25942):map__25942);
var file = cljs.core.get.call(null,map__25942__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__25942,map__25942__$1,file){
return (function (p1__25939_SHARP_,p2__25940_SHARP_){
if(cljs.core._EQ_.call(null,p1__25939_SHARP_,p2__25940_SHARP_)){
return p1__25939_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__25942,map__25942__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25945){
var map__25946 = p__25945;
var map__25946__$1 = ((((!((map__25946 == null)))?(((((map__25946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25946):map__25946);
var match_length = cljs.core.get.call(null,map__25946__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25946__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25944_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25944_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25948_SHARP_,p2__25949_SHARP_){
return cljs.core.assoc.call(null,p1__25948_SHARP_,cljs.core.get.call(null,p2__25949_SHARP_,key),p2__25949_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_25950 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_25950);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_25950);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25951,p__25952){
var map__25953 = p__25951;
var map__25953__$1 = ((((!((map__25953 == null)))?(((((map__25953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25953):map__25953);
var on_cssload = cljs.core.get.call(null,map__25953__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__25954 = p__25952;
var map__25954__$1 = ((((!((map__25954 == null)))?(((((map__25954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25954):map__25954);
var files_msg = map__25954__$1;
var files = cljs.core.get.call(null,map__25954__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1532458883255
