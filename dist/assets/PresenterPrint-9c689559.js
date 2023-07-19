import{d as _,i as d,a as p,u,b as h,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as b,o as r,k as y,l as N,m as k,p as P,q as w,_ as S}from"./index-c7374801.js";import{N as V}from"./NoteDisplay-1b5ce4d6.js";const j={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>b.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:x(a(w))},[t("div",j,[t("div",D,[t("h1",L,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(a(y)),1),N(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/Users/robertmoritz/Documents/presentation-feature-flags/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
