(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{35551:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dv/distributed-key-generation",function(){return n(67398)}])},67398:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(93445),a=n(71553),u=n(67294),i=n(92389),c=n(37274),s=n(48847),l=n(11163);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f(t,e,n[e])}))}return t}var d=function(){var t=(0,c.o)((function(t){return t.dkgData})),e=(0,l.useRouter)(),n=(0,c.o)((0,u.useCallback)((function(t){return t.completeOperatorStep}),[])),f=function(){n("dv-dkg"),e.push("/deposit/advisories#groupFlow")},d=(0,u.useState)(t.map((function(t,e){var n=t.contentTitle,o=t.textContentSection,a=t.commands,u=t.actions,c=t.enableNextStep,l=t.rank,p=t.term,d=t.title,m=t.value;return{content:function(t,e,c,s){return(0,r.jsx)(i.n,{contentTitle:n,textContentSection:o,commands:a,actions:u,rank:t,onAccept:c,onBack:s,enableNextStep:e,term:p,onSubmit:f})},enableNextStep:c,rank:l,state:(0,s.d$)(e),title:d,value:m,term:p}}))),m=d[0],b=d[1],k=(0,u.useState)(m[0]),v=k[0],g=k[1];return(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl",width:"auto",margin:"0 -12.5%"},children:[(0,r.jsx)(a.xv,{variant:"h3",children:"Distributed Key Generation"}),(0,r.jsx)(a.I,{itemSelected:v,items:m,onItemChange:function(t){g(t)},onComplete:function(){},onUpdateState:function(t){b(m.map((function(e){return e.rank===t+1?(g(e),p({},e,{state:"enabled"})):e})))},onBack:function(t){b(m.map((function(e){return e.rank===t?p({},e,{state:"upcoming"}):e})));var e=m.find((function(e){return e.rank===t-1}));e&&g(e)}})]})};e.default=d,d.layout="OperatorProgressTrackerLayout"}},function(t){t.O(0,[774,888,179],(function(){return e=35551,t(t.s=e);var e}));var e=t.O();_N_E=e}]);