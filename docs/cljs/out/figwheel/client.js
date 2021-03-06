// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e26247){if((e26247 instanceof Error)){
var e = e26247;
return "Error: Unable to stringify";
} else {
throw e26247;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__26250 = arguments.length;
switch (G__26250) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__26248_SHARP_){
if(typeof p1__26248_SHARP_ === 'string'){
return p1__26248_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__26248_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26253 = arguments.length;
var i__4532__auto___26254 = (0);
while(true){
if((i__4532__auto___26254 < len__4531__auto___26253)){
args__4534__auto__.push((arguments[i__4532__auto___26254]));

var G__26255 = (i__4532__auto___26254 + (1));
i__4532__auto___26254 = G__26255;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq26252){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26252));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26257 = arguments.length;
var i__4532__auto___26258 = (0);
while(true){
if((i__4532__auto___26258 < len__4531__auto___26257)){
args__4534__auto__.push((arguments[i__4532__auto___26258]));

var G__26259 = (i__4532__auto___26258 + (1));
i__4532__auto___26258 = G__26259;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq26256){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26256));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26260){
var map__26261 = p__26260;
var map__26261__$1 = ((((!((map__26261 == null)))?(((((map__26261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26261):map__26261);
var message = cljs.core.get.call(null,map__26261__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26261__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__23153__auto___26340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___26340,ch){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___26340,ch){
return (function (state_26312){
var state_val_26313 = (state_26312[(1)]);
if((state_val_26313 === (7))){
var inst_26308 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26314_26341 = state_26312__$1;
(statearr_26314_26341[(2)] = inst_26308);

(statearr_26314_26341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (1))){
var state_26312__$1 = state_26312;
var statearr_26315_26342 = state_26312__$1;
(statearr_26315_26342[(2)] = null);

(statearr_26315_26342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (4))){
var inst_26265 = (state_26312[(7)]);
var inst_26265__$1 = (state_26312[(2)]);
var state_26312__$1 = (function (){var statearr_26316 = state_26312;
(statearr_26316[(7)] = inst_26265__$1);

return statearr_26316;
})();
if(cljs.core.truth_(inst_26265__$1)){
var statearr_26317_26343 = state_26312__$1;
(statearr_26317_26343[(1)] = (5));

} else {
var statearr_26318_26344 = state_26312__$1;
(statearr_26318_26344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (15))){
var inst_26272 = (state_26312[(8)]);
var inst_26287 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26272);
var inst_26288 = cljs.core.first.call(null,inst_26287);
var inst_26289 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26288);
var inst_26290 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26289)].join('');
var inst_26291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26290);
var state_26312__$1 = state_26312;
var statearr_26319_26345 = state_26312__$1;
(statearr_26319_26345[(2)] = inst_26291);

(statearr_26319_26345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (13))){
var inst_26296 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26320_26346 = state_26312__$1;
(statearr_26320_26346[(2)] = inst_26296);

(statearr_26320_26346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (6))){
var state_26312__$1 = state_26312;
var statearr_26321_26347 = state_26312__$1;
(statearr_26321_26347[(2)] = null);

(statearr_26321_26347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (17))){
var inst_26294 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26322_26348 = state_26312__$1;
(statearr_26322_26348[(2)] = inst_26294);

(statearr_26322_26348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (3))){
var inst_26310 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26312__$1,inst_26310);
} else {
if((state_val_26313 === (12))){
var inst_26271 = (state_26312[(9)]);
var inst_26285 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26271,opts);
var state_26312__$1 = state_26312;
if(cljs.core.truth_(inst_26285)){
var statearr_26323_26349 = state_26312__$1;
(statearr_26323_26349[(1)] = (15));

} else {
var statearr_26324_26350 = state_26312__$1;
(statearr_26324_26350[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (2))){
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26312__$1,(4),ch);
} else {
if((state_val_26313 === (11))){
var inst_26272 = (state_26312[(8)]);
var inst_26277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26278 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26272);
var inst_26279 = cljs.core.async.timeout.call(null,(1000));
var inst_26280 = [inst_26278,inst_26279];
var inst_26281 = (new cljs.core.PersistentVector(null,2,(5),inst_26277,inst_26280,null));
var state_26312__$1 = state_26312;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26312__$1,(14),inst_26281);
} else {
if((state_val_26313 === (9))){
var inst_26272 = (state_26312[(8)]);
var inst_26298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26299 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26272);
var inst_26300 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26299);
var inst_26301 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26300)].join('');
var inst_26302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26301);
var state_26312__$1 = (function (){var statearr_26325 = state_26312;
(statearr_26325[(10)] = inst_26298);

return statearr_26325;
})();
var statearr_26326_26351 = state_26312__$1;
(statearr_26326_26351[(2)] = inst_26302);

(statearr_26326_26351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (5))){
var inst_26265 = (state_26312[(7)]);
var inst_26267 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26268 = (new cljs.core.PersistentArrayMap(null,2,inst_26267,null));
var inst_26269 = (new cljs.core.PersistentHashSet(null,inst_26268,null));
var inst_26270 = figwheel.client.focus_msgs.call(null,inst_26269,inst_26265);
var inst_26271 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26270);
var inst_26272 = cljs.core.first.call(null,inst_26270);
var inst_26273 = figwheel.client.autoload_QMARK_.call(null);
var state_26312__$1 = (function (){var statearr_26327 = state_26312;
(statearr_26327[(9)] = inst_26271);

(statearr_26327[(8)] = inst_26272);

return statearr_26327;
})();
if(cljs.core.truth_(inst_26273)){
var statearr_26328_26352 = state_26312__$1;
(statearr_26328_26352[(1)] = (8));

} else {
var statearr_26329_26353 = state_26312__$1;
(statearr_26329_26353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (14))){
var inst_26283 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26330_26354 = state_26312__$1;
(statearr_26330_26354[(2)] = inst_26283);

(statearr_26330_26354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (16))){
var state_26312__$1 = state_26312;
var statearr_26331_26355 = state_26312__$1;
(statearr_26331_26355[(2)] = null);

(statearr_26331_26355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (10))){
var inst_26304 = (state_26312[(2)]);
var state_26312__$1 = (function (){var statearr_26332 = state_26312;
(statearr_26332[(11)] = inst_26304);

return statearr_26332;
})();
var statearr_26333_26356 = state_26312__$1;
(statearr_26333_26356[(2)] = null);

(statearr_26333_26356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (8))){
var inst_26271 = (state_26312[(9)]);
var inst_26275 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26271,opts);
var state_26312__$1 = state_26312;
if(cljs.core.truth_(inst_26275)){
var statearr_26334_26357 = state_26312__$1;
(statearr_26334_26357[(1)] = (11));

} else {
var statearr_26335_26358 = state_26312__$1;
(statearr_26335_26358[(1)] = (12));

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
});})(c__23153__auto___26340,ch))
;
return ((function (switch__23062__auto__,c__23153__auto___26340,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_26336 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26336[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__);

(statearr_26336[(1)] = (1));

return statearr_26336;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1 = (function (state_26312){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_26312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e26337){if((e26337 instanceof Object)){
var ex__23066__auto__ = e26337;
var statearr_26338_26359 = state_26312;
(statearr_26338_26359[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26360 = state_26312;
state_26312 = G__26360;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__ = function(state_26312){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1.call(this,state_26312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___26340,ch))
})();
var state__23155__auto__ = (function (){var statearr_26339 = f__23154__auto__.call(null);
(statearr_26339[(6)] = c__23153__auto___26340);

return statearr_26339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___26340,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26361_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26361_SHARP_));
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
var base_path_26365 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26365){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26363 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26364 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26363,_STAR_print_fn_STAR_26364,sb,base_path_26365){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_26363,_STAR_print_fn_STAR_26364,sb,base_path_26365))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26364;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26363;
}}catch (e26362){if((e26362 instanceof Error)){
var e = e26362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26365], null));
} else {
var e = e26362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26365))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26366){
var map__26367 = p__26366;
var map__26367__$1 = ((((!((map__26367 == null)))?(((((map__26367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26367):map__26367);
var opts = map__26367__$1;
var build_id = cljs.core.get.call(null,map__26367__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26367,map__26367__$1,opts,build_id){
return (function (p__26369){
var vec__26370 = p__26369;
var seq__26371 = cljs.core.seq.call(null,vec__26370);
var first__26372 = cljs.core.first.call(null,seq__26371);
var seq__26371__$1 = cljs.core.next.call(null,seq__26371);
var map__26373 = first__26372;
var map__26373__$1 = ((((!((map__26373 == null)))?(((((map__26373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26373):map__26373);
var msg = map__26373__$1;
var msg_name = cljs.core.get.call(null,map__26373__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26371__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26370,seq__26371,first__26372,seq__26371__$1,map__26373,map__26373__$1,msg,msg_name,_,map__26367,map__26367__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26370,seq__26371,first__26372,seq__26371__$1,map__26373,map__26373__$1,msg,msg_name,_,map__26367,map__26367__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26367,map__26367__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26375){
var vec__26376 = p__26375;
var seq__26377 = cljs.core.seq.call(null,vec__26376);
var first__26378 = cljs.core.first.call(null,seq__26377);
var seq__26377__$1 = cljs.core.next.call(null,seq__26377);
var map__26379 = first__26378;
var map__26379__$1 = ((((!((map__26379 == null)))?(((((map__26379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26379):map__26379);
var msg = map__26379__$1;
var msg_name = cljs.core.get.call(null,map__26379__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26377__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26381){
var map__26382 = p__26381;
var map__26382__$1 = ((((!((map__26382 == null)))?(((((map__26382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var on_compile_warning = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26382,map__26382__$1,on_compile_warning,on_compile_fail){
return (function (p__26384){
var vec__26385 = p__26384;
var seq__26386 = cljs.core.seq.call(null,vec__26385);
var first__26387 = cljs.core.first.call(null,seq__26386);
var seq__26386__$1 = cljs.core.next.call(null,seq__26386);
var map__26388 = first__26387;
var map__26388__$1 = ((((!((map__26388 == null)))?(((((map__26388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26388):map__26388);
var msg = map__26388__$1;
var msg_name = cljs.core.get.call(null,map__26388__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26386__$1;
var pred__26390 = cljs.core._EQ_;
var expr__26391 = msg_name;
if(cljs.core.truth_(pred__26390.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26391))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26390.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26391))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26382,map__26382__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__,msg_hist,msg_names,msg){
return (function (state_26480){
var state_val_26481 = (state_26480[(1)]);
if((state_val_26481 === (7))){
var inst_26400 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26400)){
var statearr_26482_26529 = state_26480__$1;
(statearr_26482_26529[(1)] = (8));

} else {
var statearr_26483_26530 = state_26480__$1;
(statearr_26483_26530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (20))){
var inst_26474 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26484_26531 = state_26480__$1;
(statearr_26484_26531[(2)] = inst_26474);

(statearr_26484_26531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (27))){
var inst_26470 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26485_26532 = state_26480__$1;
(statearr_26485_26532[(2)] = inst_26470);

(statearr_26485_26532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (1))){
var inst_26393 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26393)){
var statearr_26486_26533 = state_26480__$1;
(statearr_26486_26533[(1)] = (2));

} else {
var statearr_26487_26534 = state_26480__$1;
(statearr_26487_26534[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (24))){
var inst_26472 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26488_26535 = state_26480__$1;
(statearr_26488_26535[(2)] = inst_26472);

(statearr_26488_26535[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (4))){
var inst_26478 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26480__$1,inst_26478);
} else {
if((state_val_26481 === (15))){
var inst_26476 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26489_26536 = state_26480__$1;
(statearr_26489_26536[(2)] = inst_26476);

(statearr_26489_26536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (21))){
var inst_26429 = (state_26480[(2)]);
var inst_26430 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26431 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26430);
var state_26480__$1 = (function (){var statearr_26490 = state_26480;
(statearr_26490[(7)] = inst_26429);

return statearr_26490;
})();
var statearr_26491_26537 = state_26480__$1;
(statearr_26491_26537[(2)] = inst_26431);

(statearr_26491_26537[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (31))){
var inst_26459 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26459)){
var statearr_26492_26538 = state_26480__$1;
(statearr_26492_26538[(1)] = (34));

} else {
var statearr_26493_26539 = state_26480__$1;
(statearr_26493_26539[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (32))){
var inst_26468 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26494_26540 = state_26480__$1;
(statearr_26494_26540[(2)] = inst_26468);

(statearr_26494_26540[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (33))){
var inst_26455 = (state_26480[(2)]);
var inst_26456 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26457 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26456);
var state_26480__$1 = (function (){var statearr_26495 = state_26480;
(statearr_26495[(8)] = inst_26455);

return statearr_26495;
})();
var statearr_26496_26541 = state_26480__$1;
(statearr_26496_26541[(2)] = inst_26457);

(statearr_26496_26541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (13))){
var inst_26414 = figwheel.client.heads_up.clear.call(null);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(16),inst_26414);
} else {
if((state_val_26481 === (22))){
var inst_26435 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26436 = figwheel.client.heads_up.append_warning_message.call(null,inst_26435);
var state_26480__$1 = state_26480;
var statearr_26497_26542 = state_26480__$1;
(statearr_26497_26542[(2)] = inst_26436);

(statearr_26497_26542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (36))){
var inst_26466 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26498_26543 = state_26480__$1;
(statearr_26498_26543[(2)] = inst_26466);

(statearr_26498_26543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (29))){
var inst_26446 = (state_26480[(2)]);
var inst_26447 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26448 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26447);
var state_26480__$1 = (function (){var statearr_26499 = state_26480;
(statearr_26499[(9)] = inst_26446);

return statearr_26499;
})();
var statearr_26500_26544 = state_26480__$1;
(statearr_26500_26544[(2)] = inst_26448);

(statearr_26500_26544[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (6))){
var inst_26395 = (state_26480[(10)]);
var state_26480__$1 = state_26480;
var statearr_26501_26545 = state_26480__$1;
(statearr_26501_26545[(2)] = inst_26395);

(statearr_26501_26545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (28))){
var inst_26442 = (state_26480[(2)]);
var inst_26443 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26444 = figwheel.client.heads_up.display_warning.call(null,inst_26443);
var state_26480__$1 = (function (){var statearr_26502 = state_26480;
(statearr_26502[(11)] = inst_26442);

return statearr_26502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(29),inst_26444);
} else {
if((state_val_26481 === (25))){
var inst_26440 = figwheel.client.heads_up.clear.call(null);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(28),inst_26440);
} else {
if((state_val_26481 === (34))){
var inst_26461 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(37),inst_26461);
} else {
if((state_val_26481 === (17))){
var inst_26420 = (state_26480[(2)]);
var inst_26421 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26422 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26421);
var state_26480__$1 = (function (){var statearr_26503 = state_26480;
(statearr_26503[(12)] = inst_26420);

return statearr_26503;
})();
var statearr_26504_26546 = state_26480__$1;
(statearr_26504_26546[(2)] = inst_26422);

(statearr_26504_26546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (3))){
var inst_26412 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26412)){
var statearr_26505_26547 = state_26480__$1;
(statearr_26505_26547[(1)] = (13));

} else {
var statearr_26506_26548 = state_26480__$1;
(statearr_26506_26548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (12))){
var inst_26408 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26507_26549 = state_26480__$1;
(statearr_26507_26549[(2)] = inst_26408);

(statearr_26507_26549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (2))){
var inst_26395 = (state_26480[(10)]);
var inst_26395__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26480__$1 = (function (){var statearr_26508 = state_26480;
(statearr_26508[(10)] = inst_26395__$1);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26395__$1)){
var statearr_26509_26550 = state_26480__$1;
(statearr_26509_26550[(1)] = (5));

} else {
var statearr_26510_26551 = state_26480__$1;
(statearr_26510_26551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (23))){
var inst_26438 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26438)){
var statearr_26511_26552 = state_26480__$1;
(statearr_26511_26552[(1)] = (25));

} else {
var statearr_26512_26553 = state_26480__$1;
(statearr_26512_26553[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (35))){
var state_26480__$1 = state_26480;
var statearr_26513_26554 = state_26480__$1;
(statearr_26513_26554[(2)] = null);

(statearr_26513_26554[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (19))){
var inst_26433 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26433)){
var statearr_26514_26555 = state_26480__$1;
(statearr_26514_26555[(1)] = (22));

} else {
var statearr_26515_26556 = state_26480__$1;
(statearr_26515_26556[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (11))){
var inst_26404 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26516_26557 = state_26480__$1;
(statearr_26516_26557[(2)] = inst_26404);

(statearr_26516_26557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (9))){
var inst_26406 = figwheel.client.heads_up.clear.call(null);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(12),inst_26406);
} else {
if((state_val_26481 === (5))){
var inst_26397 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26480__$1 = state_26480;
var statearr_26517_26558 = state_26480__$1;
(statearr_26517_26558[(2)] = inst_26397);

(statearr_26517_26558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (14))){
var inst_26424 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26424)){
var statearr_26518_26559 = state_26480__$1;
(statearr_26518_26559[(1)] = (18));

} else {
var statearr_26519_26560 = state_26480__$1;
(statearr_26519_26560[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (26))){
var inst_26450 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26480__$1 = state_26480;
if(cljs.core.truth_(inst_26450)){
var statearr_26520_26561 = state_26480__$1;
(statearr_26520_26561[(1)] = (30));

} else {
var statearr_26521_26562 = state_26480__$1;
(statearr_26521_26562[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (16))){
var inst_26416 = (state_26480[(2)]);
var inst_26417 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26418 = figwheel.client.heads_up.display_exception.call(null,inst_26417);
var state_26480__$1 = (function (){var statearr_26522 = state_26480;
(statearr_26522[(13)] = inst_26416);

return statearr_26522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(17),inst_26418);
} else {
if((state_val_26481 === (30))){
var inst_26452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26453 = figwheel.client.heads_up.display_warning.call(null,inst_26452);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(33),inst_26453);
} else {
if((state_val_26481 === (10))){
var inst_26410 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26523_26563 = state_26480__$1;
(statearr_26523_26563[(2)] = inst_26410);

(statearr_26523_26563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (18))){
var inst_26426 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26427 = figwheel.client.heads_up.display_exception.call(null,inst_26426);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(21),inst_26427);
} else {
if((state_val_26481 === (37))){
var inst_26463 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26524_26564 = state_26480__$1;
(statearr_26524_26564[(2)] = inst_26463);

(statearr_26524_26564[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (8))){
var inst_26402 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(11),inst_26402);
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
});})(c__23153__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23062__auto__,c__23153__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0 = (function (){
var statearr_26525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26525[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__);

(statearr_26525[(1)] = (1));

return statearr_26525;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1 = (function (state_26480){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_26480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e26526){if((e26526 instanceof Object)){
var ex__23066__auto__ = e26526;
var statearr_26527_26565 = state_26480;
(statearr_26527_26565[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26566 = state_26480;
state_26480 = G__26566;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__ = function(state_26480){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1.call(this,state_26480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__,msg_hist,msg_names,msg))
})();
var state__23155__auto__ = (function (){var statearr_26528 = f__23154__auto__.call(null);
(statearr_26528[(6)] = c__23153__auto__);

return statearr_26528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__,msg_hist,msg_names,msg))
);

return c__23153__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23153__auto___26595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto___26595,ch){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto___26595,ch){
return (function (state_26581){
var state_val_26582 = (state_26581[(1)]);
if((state_val_26582 === (1))){
var state_26581__$1 = state_26581;
var statearr_26583_26596 = state_26581__$1;
(statearr_26583_26596[(2)] = null);

(statearr_26583_26596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (2))){
var state_26581__$1 = state_26581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26581__$1,(4),ch);
} else {
if((state_val_26582 === (3))){
var inst_26579 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26581__$1,inst_26579);
} else {
if((state_val_26582 === (4))){
var inst_26569 = (state_26581[(7)]);
var inst_26569__$1 = (state_26581[(2)]);
var state_26581__$1 = (function (){var statearr_26584 = state_26581;
(statearr_26584[(7)] = inst_26569__$1);

return statearr_26584;
})();
if(cljs.core.truth_(inst_26569__$1)){
var statearr_26585_26597 = state_26581__$1;
(statearr_26585_26597[(1)] = (5));

} else {
var statearr_26586_26598 = state_26581__$1;
(statearr_26586_26598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (5))){
var inst_26569 = (state_26581[(7)]);
var inst_26571 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26569);
var state_26581__$1 = state_26581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26581__$1,(8),inst_26571);
} else {
if((state_val_26582 === (6))){
var state_26581__$1 = state_26581;
var statearr_26587_26599 = state_26581__$1;
(statearr_26587_26599[(2)] = null);

(statearr_26587_26599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (7))){
var inst_26577 = (state_26581[(2)]);
var state_26581__$1 = state_26581;
var statearr_26588_26600 = state_26581__$1;
(statearr_26588_26600[(2)] = inst_26577);

(statearr_26588_26600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26582 === (8))){
var inst_26573 = (state_26581[(2)]);
var state_26581__$1 = (function (){var statearr_26589 = state_26581;
(statearr_26589[(8)] = inst_26573);

return statearr_26589;
})();
var statearr_26590_26601 = state_26581__$1;
(statearr_26590_26601[(2)] = null);

(statearr_26590_26601[(1)] = (2));


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
});})(c__23153__auto___26595,ch))
;
return ((function (switch__23062__auto__,c__23153__auto___26595,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_26591 = [null,null,null,null,null,null,null,null,null];
(statearr_26591[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23063__auto__);

(statearr_26591[(1)] = (1));

return statearr_26591;
});
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1 = (function (state_26581){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_26581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e26592){if((e26592 instanceof Object)){
var ex__23066__auto__ = e26592;
var statearr_26593_26602 = state_26581;
(statearr_26593_26602[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26603 = state_26581;
state_26581 = G__26603;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__ = function(state_26581){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1.call(this,state_26581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto___26595,ch))
})();
var state__23155__auto__ = (function (){var statearr_26594 = f__23154__auto__.call(null);
(statearr_26594[(6)] = c__23153__auto___26595);

return statearr_26594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto___26595,ch))
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
var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__){
return (function (state_26609){
var state_val_26610 = (state_26609[(1)]);
if((state_val_26610 === (1))){
var inst_26604 = cljs.core.async.timeout.call(null,(3000));
var state_26609__$1 = state_26609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26609__$1,(2),inst_26604);
} else {
if((state_val_26610 === (2))){
var inst_26606 = (state_26609[(2)]);
var inst_26607 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26609__$1 = (function (){var statearr_26611 = state_26609;
(statearr_26611[(7)] = inst_26606);

return statearr_26611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26609__$1,inst_26607);
} else {
return null;
}
}
});})(c__23153__auto__))
;
return ((function (switch__23062__auto__,c__23153__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_26612 = [null,null,null,null,null,null,null,null];
(statearr_26612[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__);

(statearr_26612[(1)] = (1));

return statearr_26612;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1 = (function (state_26609){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_26609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e26613){if((e26613 instanceof Object)){
var ex__23066__auto__ = e26613;
var statearr_26614_26616 = state_26609;
(statearr_26614_26616[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26617 = state_26609;
state_26609 = G__26617;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__ = function(state_26609){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1.call(this,state_26609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__))
})();
var state__23155__auto__ = (function (){var statearr_26615 = f__23154__auto__.call(null);
(statearr_26615[(6)] = c__23153__auto__);

return statearr_26615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__))
);

return c__23153__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23153__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23154__auto__ = (function (){var switch__23062__auto__ = ((function (c__23153__auto__,figwheel_version,temp__5457__auto__){
return (function (state_26624){
var state_val_26625 = (state_26624[(1)]);
if((state_val_26625 === (1))){
var inst_26618 = cljs.core.async.timeout.call(null,(2000));
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26624__$1,(2),inst_26618);
} else {
if((state_val_26625 === (2))){
var inst_26620 = (state_26624[(2)]);
var inst_26621 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_26622 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_26621);
var state_26624__$1 = (function (){var statearr_26626 = state_26624;
(statearr_26626[(7)] = inst_26620);

return statearr_26626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26624__$1,inst_26622);
} else {
return null;
}
}
});})(c__23153__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23062__auto__,c__23153__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_26627 = [null,null,null,null,null,null,null,null];
(statearr_26627[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__);

(statearr_26627[(1)] = (1));

return statearr_26627;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1 = (function (state_26624){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_26624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e26628){if((e26628 instanceof Object)){
var ex__23066__auto__ = e26628;
var statearr_26629_26631 = state_26624;
(statearr_26629_26631[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26632 = state_26624;
state_26624 = G__26632;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__ = function(state_26624){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1.call(this,state_26624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23153__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23155__auto__ = (function (){var statearr_26630 = f__23154__auto__.call(null);
(statearr_26630[(6)] = c__23153__auto__);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23155__auto__);
});})(c__23153__auto__,figwheel_version,temp__5457__auto__))
);

return c__23153__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__26633){
var map__26634 = p__26633;
var map__26634__$1 = ((((!((map__26634 == null)))?(((((map__26634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26634):map__26634);
var file = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__26636 = "";
var G__26636__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26636),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__26636);
var G__26636__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26636__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__26636__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26636__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__26636__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26637){
var map__26638 = p__26637;
var map__26638__$1 = ((((!((map__26638 == null)))?(((((map__26638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26638):map__26638);
var ed = map__26638__$1;
var formatted_exception = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26640_26644 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26641_26645 = null;
var count__26642_26646 = (0);
var i__26643_26647 = (0);
while(true){
if((i__26643_26647 < count__26642_26646)){
var msg_26648 = cljs.core._nth.call(null,chunk__26641_26645,i__26643_26647);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26648);


var G__26649 = seq__26640_26644;
var G__26650 = chunk__26641_26645;
var G__26651 = count__26642_26646;
var G__26652 = (i__26643_26647 + (1));
seq__26640_26644 = G__26649;
chunk__26641_26645 = G__26650;
count__26642_26646 = G__26651;
i__26643_26647 = G__26652;
continue;
} else {
var temp__5457__auto___26653 = cljs.core.seq.call(null,seq__26640_26644);
if(temp__5457__auto___26653){
var seq__26640_26654__$1 = temp__5457__auto___26653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26640_26654__$1)){
var c__4351__auto___26655 = cljs.core.chunk_first.call(null,seq__26640_26654__$1);
var G__26656 = cljs.core.chunk_rest.call(null,seq__26640_26654__$1);
var G__26657 = c__4351__auto___26655;
var G__26658 = cljs.core.count.call(null,c__4351__auto___26655);
var G__26659 = (0);
seq__26640_26644 = G__26656;
chunk__26641_26645 = G__26657;
count__26642_26646 = G__26658;
i__26643_26647 = G__26659;
continue;
} else {
var msg_26660 = cljs.core.first.call(null,seq__26640_26654__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26660);


var G__26661 = cljs.core.next.call(null,seq__26640_26654__$1);
var G__26662 = null;
var G__26663 = (0);
var G__26664 = (0);
seq__26640_26644 = G__26661;
chunk__26641_26645 = G__26662;
count__26642_26646 = G__26663;
i__26643_26647 = G__26664;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26665){
var map__26666 = p__26665;
var map__26666__$1 = ((((!((map__26666 == null)))?(((((map__26666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26666):map__26666);
var w = map__26666__$1;
var message = cljs.core.get.call(null,map__26666__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26668 = cljs.core.seq.call(null,plugins);
var chunk__26669 = null;
var count__26670 = (0);
var i__26671 = (0);
while(true){
if((i__26671 < count__26670)){
var vec__26672 = cljs.core._nth.call(null,chunk__26669,i__26671);
var k = cljs.core.nth.call(null,vec__26672,(0),null);
var plugin = cljs.core.nth.call(null,vec__26672,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26678 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26668,chunk__26669,count__26670,i__26671,pl_26678,vec__26672,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26678.call(null,msg_hist);
});})(seq__26668,chunk__26669,count__26670,i__26671,pl_26678,vec__26672,k,plugin))
);
} else {
}


var G__26679 = seq__26668;
var G__26680 = chunk__26669;
var G__26681 = count__26670;
var G__26682 = (i__26671 + (1));
seq__26668 = G__26679;
chunk__26669 = G__26680;
count__26670 = G__26681;
i__26671 = G__26682;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26668);
if(temp__5457__auto__){
var seq__26668__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26668__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26668__$1);
var G__26683 = cljs.core.chunk_rest.call(null,seq__26668__$1);
var G__26684 = c__4351__auto__;
var G__26685 = cljs.core.count.call(null,c__4351__auto__);
var G__26686 = (0);
seq__26668 = G__26683;
chunk__26669 = G__26684;
count__26670 = G__26685;
i__26671 = G__26686;
continue;
} else {
var vec__26675 = cljs.core.first.call(null,seq__26668__$1);
var k = cljs.core.nth.call(null,vec__26675,(0),null);
var plugin = cljs.core.nth.call(null,vec__26675,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26687 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26668,chunk__26669,count__26670,i__26671,pl_26687,vec__26675,k,plugin,seq__26668__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26687.call(null,msg_hist);
});})(seq__26668,chunk__26669,count__26670,i__26671,pl_26687,vec__26675,k,plugin,seq__26668__$1,temp__5457__auto__))
);
} else {
}


var G__26688 = cljs.core.next.call(null,seq__26668__$1);
var G__26689 = null;
var G__26690 = (0);
var G__26691 = (0);
seq__26668 = G__26688;
chunk__26669 = G__26689;
count__26670 = G__26690;
i__26671 = G__26691;
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
var G__26693 = arguments.length;
switch (G__26693) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__26694_26699 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__26695_26700 = null;
var count__26696_26701 = (0);
var i__26697_26702 = (0);
while(true){
if((i__26697_26702 < count__26696_26701)){
var msg_26703 = cljs.core._nth.call(null,chunk__26695_26700,i__26697_26702);
figwheel.client.socket.handle_incoming_message.call(null,msg_26703);


var G__26704 = seq__26694_26699;
var G__26705 = chunk__26695_26700;
var G__26706 = count__26696_26701;
var G__26707 = (i__26697_26702 + (1));
seq__26694_26699 = G__26704;
chunk__26695_26700 = G__26705;
count__26696_26701 = G__26706;
i__26697_26702 = G__26707;
continue;
} else {
var temp__5457__auto___26708 = cljs.core.seq.call(null,seq__26694_26699);
if(temp__5457__auto___26708){
var seq__26694_26709__$1 = temp__5457__auto___26708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26694_26709__$1)){
var c__4351__auto___26710 = cljs.core.chunk_first.call(null,seq__26694_26709__$1);
var G__26711 = cljs.core.chunk_rest.call(null,seq__26694_26709__$1);
var G__26712 = c__4351__auto___26710;
var G__26713 = cljs.core.count.call(null,c__4351__auto___26710);
var G__26714 = (0);
seq__26694_26699 = G__26711;
chunk__26695_26700 = G__26712;
count__26696_26701 = G__26713;
i__26697_26702 = G__26714;
continue;
} else {
var msg_26715 = cljs.core.first.call(null,seq__26694_26709__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_26715);


var G__26716 = cljs.core.next.call(null,seq__26694_26709__$1);
var G__26717 = null;
var G__26718 = (0);
var G__26719 = (0);
seq__26694_26699 = G__26716;
chunk__26695_26700 = G__26717;
count__26696_26701 = G__26718;
i__26697_26702 = G__26719;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26724 = arguments.length;
var i__4532__auto___26725 = (0);
while(true){
if((i__4532__auto___26725 < len__4531__auto___26724)){
args__4534__auto__.push((arguments[i__4532__auto___26725]));

var G__26726 = (i__4532__auto___26725 + (1));
i__4532__auto___26725 = G__26726;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26721){
var map__26722 = p__26721;
var map__26722__$1 = ((((!((map__26722 == null)))?(((((map__26722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26722):map__26722);
var opts = map__26722__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26720){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26720));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e26727){if((e26727 instanceof Error)){
var e = e26727;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e26727;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__26728){
var map__26729 = p__26728;
var map__26729__$1 = ((((!((map__26729 == null)))?(((((map__26729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26729):map__26729);
var msg_name = cljs.core.get.call(null,map__26729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1532458883850
