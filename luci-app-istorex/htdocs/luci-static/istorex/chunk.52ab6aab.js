import{d as c,u,i as r,s as d,o as l,c as e,a as t,F as _,E as i,g as h,l as s}from"./index.js?v=5b7eb700";const p={class:"ul-container"},m={class:"ul-container_body"},v={class:"page-table"},f=t("colgroup",null,[t("col"),t("col"),t("col"),t("col")],-1),g=t("thead",null,[t("tr",null,[t("th",null,"Mac"),t("th",null,"IPv4"),t("th",null,"IPv6"),t("th")])],-1),b=t("th",null,null,-1),x=t("th",null,null,-1),F=c({__name:"index",setup(y){const o=u(),a=r(()=>o.device.devices);return d(),(B,k)=>(l(),e("main",null,[t("ul",p,[t("div",m,[t("table",v,[f,g,t("tbody",null,[(l(!0),e(_,null,i(h(a),n=>(l(),e("tr",null,[t("th",null,s(n.mac),1),t("th",null,s(n.ipv4addr),1),b,x]))),256))])])])])]))}});export{F as default};