"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[793],{793:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),o=n(87),l=n(689),u=n(332),m="single-movie-page_wrapper__GP2EC",v="single-movie-page_poster__GKtZl",d="single-movie-page_info__okBmX",p="single-movie-page_button__hlLR2",_="single-movie-page_title__GgiOx",g="single-movie-page_text__rVUpP",f="single-movie-page_subtitle__M8lxb",h="single-movie-page_moreinfo__R1EFe",x="single-movie-page_link__IlyEc",j=n(184),w=function(){var e,t=(0,c.useState)({}),n=(0,a.Z)(t,2),i=n[0],w=n[1],N=(0,l.UO)().id,k=(null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)||"/",b=(0,l.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,a,i,c,o,l,m,v,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.YJ)(N);case 3:t=e.sent,n=t.data,r=n.poster_path,a=n.title,i=n.original_title,c=n.vote_average,o=n.overview,l=n.genres,m=n.release_date,v=(10*c).toFixed(2),d=l.map((function(e){return e.name})).join(", "),w({poster_path:r,title:a,original_title:i,userScore:v,overview:o,genresInfo:d,release_date:m}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);var U=i.poster_path,y=i.title,C=i.original_title,G=i.userScore,S=i.overview,E=i.genresInfo,I=i.release_date;return(0,j.jsxs)("div",{className:m,children:[(0,j.jsxs)("div",{className:v,children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(U),alt:y,width:"300"})}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsxs)("h2",{className:_,children:[C," (",I,")"]}),(0,j.jsxs)("p",{className:g,children:["User Score: ",G," %"]}),(0,j.jsx)("h3",{className:f,children:"Overview:"}),(0,j.jsx)("p",{className:g,children:S}),(0,j.jsx)("h3",{className:f,children:"Genres:"}),(0,j.jsx)("p",{className:g,children:E}),(0,j.jsx)("button",{className:p,onClick:function(){return b(k)},children:"GO BACK"})]})]}),(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("h3",{className:f,children:"Additional information"}),(0,j.jsx)(o.rU,{to:"cast",state:{from:k},className:x,children:"cast"}),(0,j.jsx)(o.rU,{to:"reviews",state:{from:k},className:x,children:"reviews"})]}),(0,j.jsx)(l.j3,{})]})}},332:function(e,t,n){n.d(t,{Ku:function(){return c},V0:function(){return s},YJ:function(){return i},_L:function(){return a},fI:function(){return o}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"77da55832de63d39c695f15c5d27b3f3",language:"en-US"}}),a=function(){return r.get("/trending/movie/day")},i=function(e){return r.get("/movie/".concat(e))},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("/search/movie?query=".concat(e),{params:{search:e,page:t}})},c=function(e){return r.get("/movie/".concat(e,"/credits"))},o=function(e){return r.get("/movie/".concat(e,"/reviews"))}}}]);
//# sourceMappingURL=793.cc015d12.chunk.js.map