(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c117a"],{4525:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("post-page",{attrs:{post:t.post}})},s=[],o=n("e0aa"),r={name:"About",components:{PostPage:o["a"]},data:function(){return{post:{}}},created:function(){var t=this;this.$api.surface.about().then((function(a){a.translates[t.$language.current]?t.post=a.translates[t.$language.current]:t.post=a}))}},u=r,c=n("2877"),p=Object(c["a"])(u,e,s,!1,null,"5ff950b7",null);a["default"]=p.exports}}]);