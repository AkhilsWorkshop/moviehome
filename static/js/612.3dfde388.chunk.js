"use strict";(self.webpackChunkmovie=self.webpackChunkmovie||[]).push([[612],{4612:function(e,t,r){r.r(t);var a=r(4165),s=r(5861),l=r(885),i=r(2791),n=r(3970),o=r(8967),c=(r(8040),r(7244)),d=r(4569),p=r.n(d),u=r(5634),m=r(184);t.default=function(e){var t=e.media_type,r=(0,i.useState)([]),d=(0,l.Z)(r,2),x=d[0],f=d[1],h=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().get("https://api.themoviedb.org/3/person/popular?api_key=".concat("ee67127aee04e49495754bf98fb61031","&language=en-US"));case 2:t=e.sent,r=t.data,f(r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){h()}),[]),(0,m.jsxs)("div",{className:"text-white flex flex-col gap-5 my-10 relative",children:[(0,m.jsx)("div",{className:"px-4 sm:px-10",children:(0,m.jsx)("h1",{className:"border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold",children:"Explore Popular Artists"})}),(0,m.jsx)(n.Z,{className:"px-4 sm:px-10 flex gap-3 overflow-hidden",children:null===x||void 0===x?void 0:x.filter((function(e){return null!==e.profile_path})).map((function(e,r){var a,s;return(0,m.jsx)(c.Z,{media_type:t,id:e.id,children:(0,m.jsxs)("div",{className:"flex flex-col gap-2 w-[11rem] sm:w-[15rem] relative",children:[void 0===e.gender&&(0,m.jsx)("div",{className:"absolute text-xs sm:text-sm bg-black/70 rounded-md p-1 mt-[0.5rem] right-0 mr-[0.5rem] z-10",children:(0,m.jsx)("p",{children:(null===(a=e.first_air_date)||void 0===a?void 0:a.slice(0,4))||(null===(s=e.release_date)||void 0===s?void 0:s.slice(0,4))||"N/A"})}),(0,m.jsx)("div",{className:"flex w-[11rem] sm:w-[15rem] overflow-hidden rounded-md hover:cursor-pointer",children:(0,m.jsx)("img",{className:"object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]",src:null===e.profile_path?o.DF:"".concat(o.WD).concat(e.poster_path||e.profile_path),alt:"Reload Page",loading:"lazy"})}),(0,m.jsx)("p",{className:"text-xs sm:text-base truncate",children:e.title||e.name})]},r)})}))}),(0,m.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=612.3dfde388.chunk.js.map