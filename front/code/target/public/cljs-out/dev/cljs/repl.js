// Compiled by ClojureScript 1.11.54 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16802){
var map__16803 = p__16802;
var map__16803__$1 = cljs.core.__destructure_map.call(null,map__16803);
var m = map__16803__$1;
var n = cljs.core.get.call(null,map__16803__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16804_16832 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16805_16833 = null;
var count__16806_16834 = (0);
var i__16807_16835 = (0);
while(true){
if((i__16807_16835 < count__16806_16834)){
var f_16836 = cljs.core._nth.call(null,chunk__16805_16833,i__16807_16835);
cljs.core.println.call(null,"  ",f_16836);


var G__16837 = seq__16804_16832;
var G__16838 = chunk__16805_16833;
var G__16839 = count__16806_16834;
var G__16840 = (i__16807_16835 + (1));
seq__16804_16832 = G__16837;
chunk__16805_16833 = G__16838;
count__16806_16834 = G__16839;
i__16807_16835 = G__16840;
continue;
} else {
var temp__5804__auto___16841 = cljs.core.seq.call(null,seq__16804_16832);
if(temp__5804__auto___16841){
var seq__16804_16842__$1 = temp__5804__auto___16841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16804_16842__$1)){
var c__5565__auto___16843 = cljs.core.chunk_first.call(null,seq__16804_16842__$1);
var G__16844 = cljs.core.chunk_rest.call(null,seq__16804_16842__$1);
var G__16845 = c__5565__auto___16843;
var G__16846 = cljs.core.count.call(null,c__5565__auto___16843);
var G__16847 = (0);
seq__16804_16832 = G__16844;
chunk__16805_16833 = G__16845;
count__16806_16834 = G__16846;
i__16807_16835 = G__16847;
continue;
} else {
var f_16848 = cljs.core.first.call(null,seq__16804_16842__$1);
cljs.core.println.call(null,"  ",f_16848);


var G__16849 = cljs.core.next.call(null,seq__16804_16842__$1);
var G__16850 = null;
var G__16851 = (0);
var G__16852 = (0);
seq__16804_16832 = G__16849;
chunk__16805_16833 = G__16850;
count__16806_16834 = G__16851;
i__16807_16835 = G__16852;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16853 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16853);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16853)))?cljs.core.second.call(null,arglists_16853):arglists_16853));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16808_16854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16809_16855 = null;
var count__16810_16856 = (0);
var i__16811_16857 = (0);
while(true){
if((i__16811_16857 < count__16810_16856)){
var vec__16820_16858 = cljs.core._nth.call(null,chunk__16809_16855,i__16811_16857);
var name_16859 = cljs.core.nth.call(null,vec__16820_16858,(0),null);
var map__16823_16860 = cljs.core.nth.call(null,vec__16820_16858,(1),null);
var map__16823_16861__$1 = cljs.core.__destructure_map.call(null,map__16823_16860);
var doc_16862 = cljs.core.get.call(null,map__16823_16861__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16863 = cljs.core.get.call(null,map__16823_16861__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16859);

cljs.core.println.call(null," ",arglists_16863);

if(cljs.core.truth_(doc_16862)){
cljs.core.println.call(null," ",doc_16862);
} else {
}


var G__16864 = seq__16808_16854;
var G__16865 = chunk__16809_16855;
var G__16866 = count__16810_16856;
var G__16867 = (i__16811_16857 + (1));
seq__16808_16854 = G__16864;
chunk__16809_16855 = G__16865;
count__16810_16856 = G__16866;
i__16811_16857 = G__16867;
continue;
} else {
var temp__5804__auto___16868 = cljs.core.seq.call(null,seq__16808_16854);
if(temp__5804__auto___16868){
var seq__16808_16869__$1 = temp__5804__auto___16868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16808_16869__$1)){
var c__5565__auto___16870 = cljs.core.chunk_first.call(null,seq__16808_16869__$1);
var G__16871 = cljs.core.chunk_rest.call(null,seq__16808_16869__$1);
var G__16872 = c__5565__auto___16870;
var G__16873 = cljs.core.count.call(null,c__5565__auto___16870);
var G__16874 = (0);
seq__16808_16854 = G__16871;
chunk__16809_16855 = G__16872;
count__16810_16856 = G__16873;
i__16811_16857 = G__16874;
continue;
} else {
var vec__16824_16875 = cljs.core.first.call(null,seq__16808_16869__$1);
var name_16876 = cljs.core.nth.call(null,vec__16824_16875,(0),null);
var map__16827_16877 = cljs.core.nth.call(null,vec__16824_16875,(1),null);
var map__16827_16878__$1 = cljs.core.__destructure_map.call(null,map__16827_16877);
var doc_16879 = cljs.core.get.call(null,map__16827_16878__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16880 = cljs.core.get.call(null,map__16827_16878__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16876);

cljs.core.println.call(null," ",arglists_16880);

if(cljs.core.truth_(doc_16879)){
cljs.core.println.call(null," ",doc_16879);
} else {
}


var G__16881 = cljs.core.next.call(null,seq__16808_16869__$1);
var G__16882 = null;
var G__16883 = (0);
var G__16884 = (0);
seq__16808_16854 = G__16881;
chunk__16809_16855 = G__16882;
count__16810_16856 = G__16883;
i__16811_16857 = G__16884;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__16828 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16829 = null;
var count__16830 = (0);
var i__16831 = (0);
while(true){
if((i__16831 < count__16830)){
var role = cljs.core._nth.call(null,chunk__16829,i__16831);
var temp__5804__auto___16885__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16885__$1)){
var spec_16886 = temp__5804__auto___16885__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16886));
} else {
}


var G__16887 = seq__16828;
var G__16888 = chunk__16829;
var G__16889 = count__16830;
var G__16890 = (i__16831 + (1));
seq__16828 = G__16887;
chunk__16829 = G__16888;
count__16830 = G__16889;
i__16831 = G__16890;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__16828);
if(temp__5804__auto____$1){
var seq__16828__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16828__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__16828__$1);
var G__16891 = cljs.core.chunk_rest.call(null,seq__16828__$1);
var G__16892 = c__5565__auto__;
var G__16893 = cljs.core.count.call(null,c__5565__auto__);
var G__16894 = (0);
seq__16828 = G__16891;
chunk__16829 = G__16892;
count__16830 = G__16893;
i__16831 = G__16894;
continue;
} else {
var role = cljs.core.first.call(null,seq__16828__$1);
var temp__5804__auto___16895__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16895__$2)){
var spec_16896 = temp__5804__auto___16895__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16896));
} else {
}


var G__16897 = cljs.core.next.call(null,seq__16828__$1);
var G__16898 = null;
var G__16899 = (0);
var G__16900 = (0);
seq__16828 = G__16897;
chunk__16829 = G__16898;
count__16830 = G__16899;
i__16831 = G__16900;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__16901 = cljs.core.conj.call(null,via,t);
var G__16902 = cljs.core.ex_cause.call(null,t);
via = G__16901;
t = G__16902;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__16905 = datafied_throwable;
var map__16905__$1 = cljs.core.__destructure_map.call(null,map__16905);
var via = cljs.core.get.call(null,map__16905__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16905__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16905__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16906 = cljs.core.last.call(null,via);
var map__16906__$1 = cljs.core.__destructure_map.call(null,map__16906);
var type = cljs.core.get.call(null,map__16906__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16906__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16907 = data;
var map__16907__$1 = cljs.core.__destructure_map.call(null,map__16907);
var problems = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16908 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16908__$1 = cljs.core.__destructure_map.call(null,map__16908);
var top_data = map__16908__$1;
var source = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16909 = phase;
var G__16909__$1 = (((G__16909 instanceof cljs.core.Keyword))?G__16909.fqn:null);
switch (G__16909__$1) {
case "read-source":
var map__16910 = data;
var map__16910__$1 = cljs.core.__destructure_map.call(null,map__16910);
var line = cljs.core.get.call(null,map__16910__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16910__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16911 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16911__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16911,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16911);
var G__16911__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16911__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16911__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16911__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16911__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16912 = top_data;
var G__16912__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16912,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16912);
var G__16912__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16912__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16912__$1);
var G__16912__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16912__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16912__$2);
var G__16912__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16912__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16912__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16912__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16912__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16913 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16913,(0),null);
var method = cljs.core.nth.call(null,vec__16913,(1),null);
var file = cljs.core.nth.call(null,vec__16913,(2),null);
var line = cljs.core.nth.call(null,vec__16913,(3),null);
var G__16916 = top_data;
var G__16916__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16916,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16916);
var G__16916__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16916__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16916__$1);
var G__16916__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__16916__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16916__$2);
var G__16916__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16916__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16916__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16916__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16916__$4;
}

break;
case "execution":
var vec__16917 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16917,(0),null);
var method = cljs.core.nth.call(null,vec__16917,(1),null);
var file = cljs.core.nth.call(null,vec__16917,(2),null);
var line = cljs.core.nth.call(null,vec__16917,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__16904_SHARP_){
var or__5043__auto__ = (p1__16904_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16904_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__16920 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16920__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16920,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16920);
var G__16920__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16920__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16920__$1);
var G__16920__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.call(null,G__16920__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16920__$2);
var G__16920__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16920__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16920__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16920__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16920__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16909__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16924){
var map__16925 = p__16924;
var map__16925__$1 = cljs.core.__destructure_map.call(null,map__16925);
var triage_data = map__16925__$1;
var phase = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__16926 = phase;
var G__16926__$1 = (((G__16926 instanceof cljs.core.Keyword))?G__16926.fqn:null);
switch (G__16926__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16927_16936 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16928_16937 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16929_16938 = true;
var _STAR_print_fn_STAR__temp_val__16930_16939 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16929_16938);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16930_16939);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16922_SHARP_){
return cljs.core.dissoc.call(null,p1__16922_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16928_16937);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16927_16936);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16931_16940 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16932_16941 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16933_16942 = true;
var _STAR_print_fn_STAR__temp_val__16934_16943 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16933_16942);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16934_16943);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16923_SHARP_){
return cljs.core.dissoc.call(null,p1__16923_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16932_16941);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16931_16940);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16926__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
