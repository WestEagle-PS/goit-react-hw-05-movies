"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[434],{849:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),i=n(439),a=n(757),c=n.n(a),s=n(791),o=n(332),u=n(550),l=n(184),m=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o._L)();case 3:t=e.sent,n=t.data,a(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsx)(u.Z,{items:n})},f="home-page_title__RLZyB",d=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:f,children:"Trending today"}),(0,l.jsx)(m,{})]})}},332:function(e,t,n){n.d(t,{Ku:function(){return s},V0:function(){return c},YJ:function(){return a},_L:function(){return i},fI:function(){return o}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"77da55832de63d39c695f15c5d27b3f3",language:"en-US"}}),i=function(){return r.get("/trending/movie/day")},a=function(e){return r.get("/movie/".concat(e))},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("/search/movie?query=".concat(e),{params:{search:e,page:t}})},s=function(e){return r.get("/movie/".concat(e,"/credits"))},o=function(e){return r.get("/movie/".concat(e,"/reviews"))}},550:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87),i=n(689),a="movies-list_list__PzTDO",c="movies-list_img__hyDeY",s="movies-list_item__bMLbD",o="movies-list_title__z-RcX",u="movies-list_link__I4H8u",l=n(184),m=function(e){var t=e.items,n=void 0===t?[]:t,m=(0,i.TH)(),f=n.map((function(e){var t=e.id,n=e.title,i=e.poster_path;e.original_title;return(0,l.jsx)("li",{className:s,children:(0,l.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:m},className:u,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{className:c,src:"https://image.tmdb.org/t/p/w500".concat(i),alt:n,width:"250"}),(0,l.jsx)("h2",{className:o,children:n})]})})},t)}));return(0,l.jsx)("ul",{className:a,children:f})}}}]);
//# sourceMappingURL=434.b9beb409.chunk.js.map