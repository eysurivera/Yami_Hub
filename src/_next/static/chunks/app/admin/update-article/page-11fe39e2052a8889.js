(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{86055:function(e,t,s){Promise.resolve().then(s.bind(s,23688))},23688:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return P}});var r=s(57437),i=s(575),a=s(81291),n=s(24033),c=s(38110),l=s(95268),o=s(61865),d=s(949),m=s(86264),u=s(12647),p=s(18641),x=s(22169),g=s(22782),h=s(3549),f=s(24930),v=s.n(f),j=s(2265),N=s(2903),y=s(87009),b=s(38655),w=s(14803);let I=v()(()=>Promise.all([s.e(9041),s.e(7093),s.e(7429)]).then(s.bind(s,78366)),{loadableGenerated:{webpack:()=>[78366]},ssr:!1});function A(){var e,t,s,a,n,f,v;let A=(0,l.yy)(!1),[E,S]=(0,d.Z)(),[C,_]=(0,y.useStateContext)(),k=(0,b.Z)(),D=(0,w.Z)(),{register:F,handleSubmit:V,control:T,formState:{errors:Z},reset:Q,watch:P}=(0,o.cI)({resolver:(0,c.F)(N.m),defaultValues:{categoryId:null===(e=C.updateArticle)||void 0===e?void 0:e.categoryId,title:null===(t=C.updateArticle)||void 0===t?void 0:t.title,description:null===(s=C.updateArticle)||void 0===s?void 0:s.description,content:null===(a=C.updateArticle)||void 0===a?void 0:a.content,status:"".concat(null===(n=C.updateArticle)||void 0===n?void 0:n.status)}}),B=P("categoryId"),U=P("title"),z=P("content"),M=async e=>{var t;A.set(!0),await S.updateArticle({...e,status:"true"==e.status,id:null===(t=C.updateArticle)||void 0===t?void 0:t.id,date:BigInt(Date.now())*BigInt(1e6)}),A.set(!1)};return(0,j.useEffect)(()=>{S.getData(d.V.CATEGORIES)},[]),(0,r.jsxs)("form",{onSubmit:V(M),className:"mt-8 font-poppins",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Update ".concat(null===(f=C.updateArticle)||void 0===f?void 0:f.title)}),(0,r.jsx)("p",{className:"text-gray-500 pt-1",children:"Edit the form to update the article"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"categoryId",className:"font-normal pb-1",children:"Category"}),(0,r.jsx)(o.Qr,{control:T,name:"categoryId",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsxs)(p.Ph,{onValueChange:t,defaultValue:i,children:[(0,r.jsx)(p.i4,{className:(0,x.cn)("focus:ring-[#3b82f680]",Z.categoryId&&"border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"),children:(0,r.jsx)(p.ki,{placeholder:"Select user category"})}),(0,r.jsx)(p.Bw,{children:(0,r.jsx)(p.DI,{children:E.contents.categories.map(e=>(0,r.jsx)(p.Ql,{value:e.id,children:e.name},e.id))})})]})}}),Z.categoryId&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.categoryId.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"title",className:"font-normal pb-1",children:"Title"}),(0,r.jsx)(g.II,{...F("title"),className:(0,x.cn)("focus-visible:ring-primary",Z.title&&"border-red-500 focus-visible:ring-red-500"),type:"text",placeholder:"Enter Title"}),Z.title&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.title.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"description",className:"font-normal pb-1",children:"Description"}),(0,r.jsx)(h.g,{...F("description"),className:(0,x.cn)("focus-visible:ring-primary",Z.description&&"border-red-500 focus-visible:ring-red-500"),placeholder:"Enter Description"}),Z.description&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.description.message)})]}),(0,r.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"status",className:"font-normal pb-1",children:"Publish"}),(0,r.jsx)(o.Qr,{control:T,name:"status",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsxs)(p.Ph,{onValueChange:t,defaultValue:i,children:[(0,r.jsx)(p.i4,{className:(0,x.cn)("focus-visible:ring-primary",Z.status&&"border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"),children:(0,r.jsx)(p.ki,{placeholder:"Select user status"})}),(0,r.jsx)(p.Bw,{children:(0,r.jsxs)(p.DI,{children:[(0,r.jsx)(p.Ql,{value:"false",children:"No"}),(0,r.jsx)(p.Ql,{value:"true",children:"Yes"})]})})]})}}),Z.status&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.status.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"content",className:"font-normal pb-1",children:"Content"}),(0,r.jsx)(o.Qr,{control:T,name:"content",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsx)(I,{data:i,onChange:t})}}),Z.content&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.content.message)})]})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(u._,{htmlFor:"",className:"font-normal pb-1",children:"Content Preview"}),(0,r.jsxs)("div",{className:"flex-1 bg-white rounded-lg p-6 mt-2",children:[(0,r.jsx)("div",{className:"text-center font-black uppercase text-sm tracking-widest text-icp-yellow",children:null===(v=E.contents.categories.find(e=>e.id===B))||void 0===v?void 0:v.name}),(0,r.jsx)("div",{className:"pt-3 mx-auto text-center max-w-2xl",children:(0,r.jsx)("h1",{className:"text-2xl font-bold",children:U})}),(0,r.jsxs)("div",{className:"text-gray-500 pt-6 flex justify-center items-center gap-2 uppercase font-medium text-sm tracking-wider",children:[(0,r.jsx)("div",{children:"".concat(new Date().toLocaleString("en-US",{timeZone:"Asia/Manila",year:"numeric",month:"short",day:"2-digit"}))}),(0,r.jsx)("div",{children:" • "}),(0,r.jsx)("div",{children:"".concat(k.calculate(D.convert(z))," min read")})]}),(0,r.jsx)("div",{className:(0,x.cn)("prose max-w-none mt-8","prose-figcaption:text-center","prose-figure:flex prose-figure:flex-col prose-figure:items-center","prose-img:object-cover"),dangerouslySetInnerHTML:{__html:z}})]})]})]}),(0,r.jsx)("div",{className:"pt-6 flex gap-2 justify-end",children:(0,r.jsx)(i.z,{className:"px-12",type:"submit",disabled:A.value,children:A.value?(0,r.jsx)(m.Z,{className:"w-4 h-4 animate-spin"}):"Update"})})]})}var E=s(86441),S=s(28216);let C=v()(()=>Promise.all([s.e(9041),s.e(7093),s.e(7429)]).then(s.bind(s,78366)),{loadableGenerated:{webpack:()=>[78366]},ssr:!1});function _(){var e,t,s,a,n,f;let v=(0,l.yy)(!1),[N,I]=(0,S.Z)(),[A,_]=(0,y.useStateContext)(),k=(0,b.Z)(),D=(0,w.Z)(),{register:F,handleSubmit:V,control:T,formState:{errors:Z},reset:Q,watch:P}=(0,o.cI)({resolver:(0,c.F)(E.m),defaultValues:{categoryId:null===(e=A.updateArticle)||void 0===e?void 0:e.categoryId,title:null===(t=A.updateArticle)||void 0===t?void 0:t.title,description:null===(s=A.updateArticle)||void 0===s?void 0:s.description,content:null===(a=A.updateArticle)||void 0===a?void 0:a.content}}),B=P("categoryId"),U=P("title"),z=P("content"),M=async e=>{var t;v.set(!0),await I.updateArticle({...e,id:null===(t=A.updateArticle)||void 0===t?void 0:t.id,date:BigInt(Date.now())*BigInt(1e6)}),v.set(!1)};return(0,j.useEffect)(()=>{I.getData(d.V.CATEGORIES)},[]),(0,r.jsxs)("form",{onSubmit:V(M),className:"mt-8 font-poppins",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Update ".concat(null===(n=A.updateArticle)||void 0===n?void 0:n.title)}),(0,r.jsx)("p",{className:"text-gray-500 pt-1",children:"Edit the form to update the article"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"categoryId",className:"font-normal pb-1",children:"Category"}),(0,r.jsx)(o.Qr,{control:T,name:"categoryId",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsxs)(p.Ph,{onValueChange:t,defaultValue:i,children:[(0,r.jsx)(p.i4,{className:(0,x.cn)("focus:ring-[#3b82f680]",Z.categoryId&&"border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"),children:(0,r.jsx)(p.ki,{placeholder:"Select user category"})}),(0,r.jsx)(p.Bw,{children:(0,r.jsx)(p.DI,{children:N.contents.categories.map(e=>(0,r.jsx)(p.Ql,{value:e.id,children:e.name},e.id))})})]})}}),Z.categoryId&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.categoryId.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"title",className:"font-normal pb-1",children:"Title"}),(0,r.jsx)(g.II,{...F("title"),className:(0,x.cn)("focus-visible:ring-primary",Z.title&&"border-red-500 focus-visible:ring-red-500"),type:"text",placeholder:"Enter Title"}),Z.title&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.title.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"description",className:"font-normal pb-1",children:"Description"}),(0,r.jsx)(h.g,{...F("description"),className:(0,x.cn)("focus-visible:ring-primary",Z.description&&"border-red-500 focus-visible:ring-red-500"),placeholder:"Enter Description"}),Z.description&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.description.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"content",className:"font-normal pb-1",children:"Content"}),(0,r.jsx)(o.Qr,{control:T,name:"content",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsx)(C,{data:i,onChange:t})}}),Z.content&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Z.content.message)})]})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(u._,{htmlFor:"",className:"font-normal pb-1",children:"Content Preview"}),(0,r.jsxs)("div",{className:"flex-1 bg-white rounded-lg p-6 mt-2",children:[(0,r.jsx)("div",{className:"text-center font-black uppercase text-sm tracking-widest text-icp-yellow",children:null===(f=N.contents.categories.find(e=>e.id===B))||void 0===f?void 0:f.name}),(0,r.jsx)("div",{className:"pt-3 mx-auto text-center max-w-2xl",children:(0,r.jsx)("h1",{className:"text-2xl font-bold",children:U})}),(0,r.jsxs)("div",{className:"text-gray-500 pt-6 flex justify-center items-center gap-2 uppercase font-medium text-sm tracking-wider",children:[(0,r.jsx)("div",{children:"".concat(new Date().toLocaleString("en-US",{timeZone:"Asia/Manila",year:"numeric",month:"short",day:"2-digit"}))}),(0,r.jsx)("div",{children:" • "}),(0,r.jsx)("div",{children:"".concat(k.calculate(D.convert(z))," min read")})]}),(0,r.jsx)("div",{className:(0,x.cn)("prose max-w-none mt-8","prose-figcaption:text-center","prose-figure:flex prose-figure:flex-col prose-figure:items-center","prose-img:object-cover"),dangerouslySetInnerHTML:{__html:z}})]})]})]}),(0,r.jsx)("div",{className:"pt-6 flex gap-2 justify-end",children:(0,r.jsx)(i.z,{className:"px-12",type:"submit",disabled:v.value,children:v.value?(0,r.jsx)(m.Z,{className:"w-4 h-4 animate-spin"}):"Update"})})]})}var k=s(81350),D=s(74578);let F=D.z.object({title:D.z.string().min(1,"Title is required"),description:D.z.string().min(1,"Description is required"),content:D.z.string().min(1,"Content is required"),categoryId:D.z.string().min(1,"Category is required"),status:D.z.string().min(1,"Status is required")}),V=v()(()=>Promise.all([s.e(9041),s.e(7093),s.e(7429)]).then(s.bind(s,78366)),{loadableGenerated:{webpack:()=>[78366]},ssr:!1});function T(){var e,t,s,a,n,f,v;let N=(0,l.yy)(!1),[I,A]=(0,k.Z)(),[E,S]=(0,y.useStateContext)(),C=(0,b.Z)(),_=(0,w.Z)(),{register:D,handleSubmit:T,control:Z,formState:{errors:Q},reset:P,watch:B}=(0,o.cI)({resolver:(0,c.F)(F),defaultValues:{categoryId:null===(e=E.updateArticle)||void 0===e?void 0:e.categoryId,title:null===(t=E.updateArticle)||void 0===t?void 0:t.title,description:null===(s=E.updateArticle)||void 0===s?void 0:s.description,content:null===(a=E.updateArticle)||void 0===a?void 0:a.content,status:"".concat(null===(n=E.updateArticle)||void 0===n?void 0:n.status)}}),U=B("categoryId"),z=B("title"),M=B("content"),O=async e=>{var t;N.set(!0),await A.updateArticle({...e,status:"true"==e.status,id:null===(t=E.updateArticle)||void 0===t?void 0:t.id,date:BigInt(Date.now())*BigInt(1e6)}),N.set(!1)};return(0,j.useEffect)(()=>{A.getData(d.V.CATEGORIES)},[]),(0,r.jsxs)("form",{onSubmit:T(O),className:"mt-8 font-poppins",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Update ".concat(null===(f=E.updateArticle)||void 0===f?void 0:f.title)}),(0,r.jsx)("p",{className:"text-gray-500 pt-1",children:"Edit the form to update the article"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"categoryId",className:"font-normal pb-1",children:"Category"}),(0,r.jsx)(o.Qr,{control:Z,name:"categoryId",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsxs)(p.Ph,{onValueChange:t,defaultValue:i,children:[(0,r.jsx)(p.i4,{className:(0,x.cn)("focus:ring-[#3b82f680]",Q.categoryId&&"border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"),children:(0,r.jsx)(p.ki,{placeholder:"Select user category"})}),(0,r.jsx)(p.Bw,{children:(0,r.jsx)(p.DI,{children:I.contents.categories.map(e=>(0,r.jsx)(p.Ql,{value:e.id,children:e.name},e.id))})})]})}}),Q.categoryId&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.categoryId.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"title",className:"font-normal pb-1",children:"Title"}),(0,r.jsx)(g.II,{...D("title"),className:(0,x.cn)("focus-visible:ring-primary",Q.title&&"border-red-500 focus-visible:ring-red-500"),type:"text",placeholder:"Enter Title"}),Q.title&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.title.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"description",className:"font-normal pb-1",children:"Description"}),(0,r.jsx)(h.g,{...D("description"),className:(0,x.cn)("focus-visible:ring-primary",Q.description&&"border-red-500 focus-visible:ring-red-500"),placeholder:"Enter Description"}),Q.description&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.description.message)})]}),(0,r.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"status",className:"font-normal pb-1",children:"Publish"}),(0,r.jsx)(o.Qr,{control:Z,name:"status",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsxs)(p.Ph,{onValueChange:t,defaultValue:i,children:[(0,r.jsx)(p.i4,{className:(0,x.cn)("focus-visible:ring-primary",Q.status&&"border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"),children:(0,r.jsx)(p.ki,{placeholder:"Select user status"})}),(0,r.jsx)(p.Bw,{children:(0,r.jsxs)(p.DI,{children:[(0,r.jsx)(p.Ql,{value:"false",children:"No"}),(0,r.jsx)(p.Ql,{value:"true",children:"Yes"})]})})]})}}),Q.status&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.status.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"content",className:"font-normal pb-1",children:"Content"}),(0,r.jsx)(o.Qr,{control:Z,name:"content",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsx)(V,{data:i,onChange:t})}}),Q.content&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.content.message)})]})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(u._,{htmlFor:"",className:"font-normal pb-1",children:"Content Preview"}),(0,r.jsxs)("div",{className:"flex-1 bg-white rounded-lg p-6 mt-2",children:[(0,r.jsx)("div",{className:"text-center font-black uppercase text-sm tracking-widest text-icp-yellow",children:null===(v=I.contents.categories.find(e=>e.id===U))||void 0===v?void 0:v.name}),(0,r.jsx)("div",{className:"pt-3 mx-auto text-center max-w-2xl",children:(0,r.jsx)("h1",{className:"text-2xl font-bold",children:z})}),(0,r.jsxs)("div",{className:"text-gray-500 pt-6 flex justify-center items-center gap-2 uppercase font-medium text-sm tracking-wider",children:[(0,r.jsx)("div",{children:"".concat(new Date().toLocaleString("en-US",{timeZone:"Asia/Manila",year:"numeric",month:"short",day:"2-digit"}))}),(0,r.jsx)("div",{children:" • "}),(0,r.jsx)("div",{children:"".concat(C.calculate(_.convert(M))," min read")})]}),(0,r.jsx)("div",{className:(0,x.cn)("prose max-w-none mt-8","prose-figcaption:text-center","prose-figure:flex prose-figure:flex-col prose-figure:items-center","prose-img:object-cover"),dangerouslySetInnerHTML:{__html:M}})]})]})]}),(0,r.jsx)("div",{className:"pt-6 flex gap-2 justify-end",children:(0,r.jsx)(i.z,{className:"px-12",type:"submit",disabled:N.value,children:N.value?(0,r.jsx)(m.Z,{className:"w-4 h-4 animate-spin"}):"Update"})})]})}let Z=v()(()=>Promise.all([s.e(9041),s.e(7093),s.e(7429)]).then(s.bind(s,78366)),{loadableGenerated:{webpack:()=>[78366]},ssr:!1});function Q(){var e,t,s,a,n,f,v;let N=(0,l.yy)(!1),[I,A]=(0,k.Z)(),[E,S]=(0,y.useStateContext)(),C=(0,b.Z)(),_=(0,w.Z)(),{register:D,handleSubmit:V,control:T,formState:{errors:Q},reset:P,watch:B}=(0,o.cI)({resolver:(0,c.F)(F),defaultValues:{categoryId:null===(e=E.updateArticle)||void 0===e?void 0:e.categoryId,title:null===(t=E.updateArticle)||void 0===t?void 0:t.title,description:null===(s=E.updateArticle)||void 0===s?void 0:s.description,content:null===(a=E.updateArticle)||void 0===a?void 0:a.content,status:"".concat(null===(n=E.updateArticle)||void 0===n?void 0:n.status)}}),U=B("categoryId"),z=B("title"),M=B("content"),O=async e=>{var t;N.set(!0),await A.updateEditedArticle({...e,status:"true"==e.status,id:null===(t=E.updateArticle)||void 0===t?void 0:t.id,date:BigInt(Date.now())*BigInt(1e6)}),N.set(!1)};return(0,j.useEffect)(()=>{A.getData(d.V.CATEGORIES)},[]),(0,r.jsxs)("form",{onSubmit:V(O),className:"mt-8 font-poppins",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Update ".concat(null===(f=E.updateArticle)||void 0===f?void 0:f.title)}),(0,r.jsx)("p",{className:"text-gray-500 pt-1",children:"Edit the form to update the article"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"categoryId",className:"font-normal pb-1",children:"Category"}),(0,r.jsx)(o.Qr,{control:T,name:"categoryId",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsxs)(p.Ph,{onValueChange:t,defaultValue:i,children:[(0,r.jsx)(p.i4,{className:(0,x.cn)("focus:ring-[#3b82f680]",Q.categoryId&&"border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"),children:(0,r.jsx)(p.ki,{placeholder:"Select user category"})}),(0,r.jsx)(p.Bw,{children:(0,r.jsx)(p.DI,{children:I.contents.categories.map(e=>(0,r.jsx)(p.Ql,{value:e.id,children:e.name},e.id))})})]})}}),Q.categoryId&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.categoryId.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"title",className:"font-normal pb-1",children:"Title"}),(0,r.jsx)(g.II,{...D("title"),className:(0,x.cn)("focus-visible:ring-primary",Q.title&&"border-red-500 focus-visible:ring-red-500"),type:"text",placeholder:"Enter Title"}),Q.title&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.title.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"description",className:"font-normal pb-1",children:"Description"}),(0,r.jsx)(h.g,{...D("description"),className:(0,x.cn)("focus-visible:ring-primary",Q.description&&"border-red-500 focus-visible:ring-red-500"),placeholder:"Enter Description"}),Q.description&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.description.message)})]}),(0,r.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"status",className:"font-normal pb-1",children:"Publish"}),(0,r.jsx)(o.Qr,{control:T,name:"status",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsxs)(p.Ph,{onValueChange:t,defaultValue:i,children:[(0,r.jsx)(p.i4,{className:(0,x.cn)("focus-visible:ring-primary",Q.status&&"border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"),children:(0,r.jsx)(p.ki,{placeholder:"Select user status"})}),(0,r.jsx)(p.Bw,{children:(0,r.jsxs)(p.DI,{children:[(0,r.jsx)(p.Ql,{value:"false",children:"No"}),(0,r.jsx)(p.Ql,{value:"true",children:"Yes"})]})})]})}}),Q.status&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.status.message)})]}),(0,r.jsxs)("div",{className:"grid items-center gap-1.5",children:[(0,r.jsx)(u._,{htmlFor:"content",className:"font-normal pb-1",children:"Content"}),(0,r.jsx)(o.Qr,{control:T,name:"content",render:e=>{let{field:{onChange:t,onBlur:s,value:i,ref:a}}=e;return(0,r.jsx)(Z,{data:i,onChange:t})}}),Q.content&&(0,r.jsx)("p",{className:"form-error",children:"".concat(Q.content.message)})]})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(u._,{htmlFor:"",className:"font-normal pb-1",children:"Content Preview"}),(0,r.jsxs)("div",{className:"flex-1 bg-white rounded-lg p-6 mt-2",children:[(0,r.jsx)("div",{className:"text-center font-black uppercase text-sm tracking-widest text-icp-yellow",children:null===(v=I.contents.categories.find(e=>e.id===U))||void 0===v?void 0:v.name}),(0,r.jsx)("div",{className:"pt-3 mx-auto text-center max-w-2xl",children:(0,r.jsx)("h1",{className:"text-2xl font-bold",children:z})}),(0,r.jsxs)("div",{className:"text-gray-500 pt-6 flex justify-center items-center gap-2 uppercase font-medium text-sm tracking-wider",children:[(0,r.jsx)("div",{children:"".concat(new Date().toLocaleString("en-US",{timeZone:"Asia/Manila",year:"numeric",month:"short",day:"2-digit"}))}),(0,r.jsx)("div",{children:" • "}),(0,r.jsx)("div",{children:"".concat(C.calculate(_.convert(M))," min read")})]}),(0,r.jsx)("div",{className:(0,x.cn)("prose max-w-none mt-8","prose-figcaption:text-center","prose-figure:flex prose-figure:flex-col prose-figure:items-center","prose-img:object-cover"),dangerouslySetInnerHTML:{__html:M}})]})]})]}),(0,r.jsx)("div",{className:"pt-6 flex gap-2 justify-end",children:(0,r.jsx)(i.z,{className:"px-12",type:"submit",disabled:N.value,children:N.value?(0,r.jsx)(m.Z,{className:"w-4 h-4 animate-spin"}):"Update"})})]})}function P(){let[e]=(0,y.useStateContext)(),t=(0,n.useRouter)(),[s]=(0,k.Z)();return(0,r.jsxs)("div",{className:"container py-10",children:[(0,r.jsxs)(i.z,{onClick:()=>{t.push("/admin")},variant:"outline",className:"border border-gray-300",children:[(0,r.jsx)(a.Z,{className:"w-4 h-4 mr-2"}),"Back"]}),e.isAdmin&&(0,r.jsx)(A,{}),!e.isAdmin&&e.isAuthor&&(0,r.jsx)(_,{}),!e.isAdmin&&e.isEditor&&s.currentTab===k.V.INACTIVE&&(0,r.jsx)(T,{}),!e.isAdmin&&e.isEditor&&s.currentTab===k.V.MY_EDITED&&(0,r.jsx)(Q,{})]})}},81350:function(e,t,s){"use strict";s.d(t,{V:function(){return i},Z:function(){return o}});var r,i,a=s(2265),n=s(87009),c=s(77147),l=s(85240);function o(){let[e,t]=(0,n.useStateContext)(),[s,r]=(0,l.Z)("editorTab","inactive-articles"),[i,o]=(0,a.useState)({inactiveArticles:[],myEditedArticles:[],categories:[]}),d=async t=>{try{switch(t){case"inactive-articles":{let t=await e.actor.getInactiveArticles();o(e=>({...e,inactiveArticles:t.Ok||[]}));break}case"my-edited-articles":{let t=await e.actor.getArticlesEditedByEditor();o(e=>({...e,myEditedArticles:t.Ok||[]}));break}case"categories":{let t=await e.actor.getAllCategories();o(e=>({...e,categories:t.Ok||[]}))}}}catch(e){console.error("Error while fetching ".concat(t,":"),e)}},m=async t=>{let{title:s,date:r,description:i,content:a,categoryId:n}=t;try{await e.actor.createArticle({id:"",title:s,date:r,description:i,content:a,categoryId:n,status:!1}),await d("inactive-articles"),(0,c.Am)({title:"Article created",description:"Article created successfully",duration:5e3})}catch(t){var l,o;let e=(null==t?void 0:null===(o=t.response)||void 0===o?void 0:null===(l=o.data)||void 0===l?void 0:l.message)||t.message;console.error("createArticle: ",e),(0,c.Am)({variant:"destructive",title:"Uh oh! Something went wrong.",description:e})}},u=async t=>{let{id:s,title:r,date:i,description:a,content:n,categoryId:l,status:o}=t;try{let t=await e.actor.updateArticle({id:s,title:r,date:i,description:a,content:n,categoryId:l,status:o});if(await d("inactive-articles"),t.Err){(0,c.Am)({variant:"destructive",title:"Uh oh! Something went wrong.",description:t.Err.Forbidden});return}(0,c.Am)({title:"Article updated",description:"Article updated successfully",duration:5e3})}catch(t){var m,u;let e=(null==t?void 0:null===(u=t.response)||void 0===u?void 0:null===(m=u.data)||void 0===m?void 0:m.message)||t.message;console.error("updateArticle: ",e),(0,c.Am)({variant:"destructive",title:"Uh oh! Something went wrong.",description:e})}},p=async t=>{let{id:s,title:r,date:i,description:a,content:n,categoryId:l,status:o}=t;try{let t=await e.actor.updateArticle({id:s,title:r,date:i,description:a,content:n,categoryId:l,status:o});if(await d("my-edited-articles"),t.Err){(0,c.Am)({variant:"destructive",title:"Uh oh! Something went wrong.",description:t.Err.Forbidden});return}(0,c.Am)({title:"Article updated",description:"Article updated successfully",duration:5e3})}catch(t){var m,u;let e=(null==t?void 0:null===(u=t.response)||void 0===u?void 0:null===(m=u.data)||void 0===m?void 0:m.message)||t.message;console.error("updateEditedArticle: ",e),(0,c.Am)({variant:"destructive",title:"Uh oh! Something went wrong.",description:e})}};return(0,a.useEffect)(()=>{e.isEditor&&("inactive-articles"===s&&d("categories"),d(s))},[s,e.isEditor]),[{currentTab:s,contents:i},{setCurrentTab:r,getData:d,createArticle:m,updateArticle:u,updateEditedArticle:p}]}(r=i||(i={})).INACTIVE="inactive-articles",r.MY_EDITED="my-edited-articles",r.CATEGORIES="categories"}},function(e){e.O(0,[7007,6038,1928,3132,8432,2882,7009,3388,2971,4938,1744],function(){return e(e.s=86055)}),_N_E=e.O()}]);