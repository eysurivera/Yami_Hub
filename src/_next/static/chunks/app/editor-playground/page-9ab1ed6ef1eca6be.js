(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2325],{62898:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2265),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:u="",children:d,...f},c)=>(0,n.createElement)("svg",{ref:c,...l,width:o,height:o,stroke:r,strokeWidth:i?24*Number(s)/Number(o):s,className:["lucide",`lucide-${a(e)}`,u].join(" "),...f},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(d)?d:[d]]));return r.displayName=`${e}`,r}},81291:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62898).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},94347:function(e,t,r){Promise.resolve().then(r.bind(r,87682))},24930:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(21024);r(2265);let l=n._(r(84795));function a(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let o=n.loader;return r({...n,loader:()=>null!=o?o().then(a):Promise.resolve(a(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16005:function(e,t,r){"use strict";function n(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return n}}),r(46491)},84795:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(21024)._(r(2265)),l=r(16005),a=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function r(e){let r=t.loading,a=n.default.createElement(r,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?n.default.Fragment:l.NoSSR,s=t.lazy;return n.default.createElement(n.default.Suspense,{fallback:a},n.default.createElement(o,null,n.default.createElement(s,e)))}return t.lazy=n.default.lazy(t.loader),r.displayName="LoadableComponent",r}},87682:function(e,t,r){"use strict";r.r(t);var n=r(57437),l=r(2265),a=r(24930),o=r.n(a),s=r(575),i=r(24033),u=r(81291);let d=o()(()=>Promise.all([r.e(9041),r.e(7093),r.e(8366)]).then(r.bind(r,78366)),{loadableGenerated:{webpack:()=>[78366]},ssr:!1});t.default=function(){let[e,t]=l.useState(""),r=(0,i.useRouter)();return(0,n.jsxs)("div",{className:"min-h-screen p-10 bg-gray-200",children:[(0,n.jsxs)(s.z,{onClick:()=>{r.push("/admin")},variant:"outline",className:"border border-gray-300 font-poppins",children:[(0,n.jsx)(u.Z,{className:"w-4 h-4 mr-2"}),"Home"]}),(0,n.jsx)("h1",{className:"text-3xl font-bold mt-8",children:"Editor Playground"}),(0,n.jsx)("p",{className:"text-gray-500 pt-1",children:"Article Editor Playground"}),(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-8",children:[(0,n.jsx)(d,{data:e,onChange:e=>t(e)}),(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"prose max-w-none flex-1 bg-white rounded-lg p-6 border border-gray-300",dangerouslySetInnerHTML:{__html:e}})})]})]})}},575:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var n=r(57437),l=r(2265),a=r(67256),o=r(39213),s=r(22169);let i=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=l.forwardRef((e,t)=>{let{className:r,variant:l,size:o,asChild:u=!1,...d}=e,f=u?a.g7:"button";return(0,n.jsx)(f,{className:(0,s.cn)(i({variant:l,size:o,className:r})),ref:t,...d})});u.displayName="Button"},22169:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(57042),l=r(74769);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}},30622:function(e,t,r){"use strict";var n=r(2265),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,d=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:l,type:e,key:u,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},57437:function(e,t,r){"use strict";e.exports=r(30622)},24033:function(e,t,r){e.exports=r(15313)}},function(e){e.O(0,[7007,2971,4938,1744],function(){return e(e.s=94347)}),_N_E=e.O()}]);