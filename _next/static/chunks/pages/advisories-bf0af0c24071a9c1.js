(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{12093:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advisories",function(){return n(58162)}])},59910:function(t,e,n){"use strict";var r=n(85893),o=n(93445),u=n(71553),a=n(67294),i=n(92032),c=n(48847);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}e.Z=function(t){var e=t.advisoriesData,n=t.onSubmit,s=(0,a.useState)(e.map((function(t,e){var o=t.contentTitle,u=t.texts,a=t.links,s=t.term,f=t.enableNextStep,l=t.rank,p=t.title,b=t.value;return{content:function(t,e,c,f){return(0,r.jsx)(i.B,{onSubmit:n,title:o,texts:u,links:a,term:s,rank:t,enableNextStep:e,onAccept:c,onBack:f})},enableNextStep:f,rank:l,state:(0,c.d$)(e),title:p,value:b}}))),l=s[0],p=s[1],b=(0,a.useState)(l[0]),v=b[0],d=b[1];return(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl",width:"auto",margin:"0 -12.5%"},children:[(0,r.jsx)(u.xv,{variant:"h3",children:"Advisories"}),(0,r.jsx)(u.I,{itemSelected:v,items:l,onItemChange:function(t){d(t)},onComplete:function(){},onUpdateState:function(t){p(l.map((function(e){return e.rank===t+1?(d(e),f({},e,{state:"enabled"})):e})))},onBack:function(t){p(l.map((function(e){return e.rank===t?f({},e,{state:"upcoming"}):e})));var e=l.find((function(e){return e.rank===t-1}));e&&d(e)}})]})}},58162:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(37274),u=n(67294),a=n(11163),i=n(59910),c=function(){var t=(0,o.o)((function(t){return t.advisoriesData})),e=(0,a.useRouter)(),n=(0,o.o)((0,u.useCallback)((function(t){return t.completeLeaderStep}),[])),c=(0,o.o)((function(t){return t.enableLeaderStep}));return(0,r.jsx)(i.Z,{advisoriesData:t,onSubmit:function(){return function(){n("advisories");var t=c("config-cluster");e.push(t.href)}()}})};e.default=c,c.layout="ProgressTrackerLayout"}},function(t){t.O(0,[774,888,179],(function(){return e=12093,t(t.s=e);var e}));var e=t.O();_N_E=e}]);