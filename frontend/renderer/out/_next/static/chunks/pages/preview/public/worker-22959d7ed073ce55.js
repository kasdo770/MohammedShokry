(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{9640:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preview/public/worker",function(){return s(9145)}])},2756:function(e,r,s){"use strict";var t=s(4246);s(7378),r.Z=function(e){let{label:r,type:s,placeholder:l,value:n,onChange:o,iprops:a,iref:c,required:i,error:d,iclassName:u,lclassName:m,disabled:h}=e;return(0,t.jsxs)("div",{className:"space-y-2 flex-grow",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[r&&(0,t.jsx)("label",{className:"font-semibold text-lg text-black ".concat(m),children:r}),d&&(0,t.jsx)("label",{className:"font-semibold text-sm text-red-600 ".concat(m),children:d})]}),(0,t.jsx)("input",{...a,ref:c,required:i,value:n,type:s,placeholder:l,onChange:o,disabled:h,className:"border-gray-400 print:border-solid text-right border-2 border-dashed w-full h-9 focus:outline-none ".concat(d?"border-red-600 focus:border-red-600":""," focus:border-primary focus:border-solid py-1 px-2 rounded-md transition ").concat(u)})]})}},9145:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSP:function(){return g},default:function(){return j}});var t=s(4246),l=s(7378),n=s(8579),o=s.n(n),a=s(4317),c=s(6677),i=s(8276);s(2756);var d=s(4206),u=s.n(d),m=s(9894),h=s.n(m),x=s(6164),f=s(293),p=s(8719),b=s(5083),w=function(e,r){let{readOnly:s=!1}=r,n=e.billId.billData;(0,i.o)(e=>e.login),(0,l.useRef)(),(0,c.useRouter)();let[d,m]=(0,l.useState)(""),[w,g]=(0,l.useState)(!1),{user:j,workers:N,dropdownWorkers:v,setDropdownWorkers:y}=(0,i.o)(e=>({workers:e.workers,dropdownWorkers:e.dropdownWorkers,setDropdownWorkers:e.setDropdownWorkers,user:e.user}));(0,l.useEffect)(()=>{console.log("//"),v.length>0||u()({url:"http://localhost:3000/search/workers/get"}).then(e=>{let{data:r}=e;console.log(r),y(r)})},[]),(0,l.useEffect)(()=>{let e=new AbortController;return u()({url:"http://localhost:3000/search/workers?query="+encodeURIComponent(d),signal:e.signal}).then(e=>{let{data:r}=e;console.log(r),y(r.workers)}),()=>e.abort()},[d]);let[k,_]=(0,l.useState)({message:"",error:!1});return(0,t.jsx)("div",{className:"absolute inset-x-0 w-full top-14 bottom-0 grid place-items-center",children:(0,t.jsxs)("div",{className:"drop-shadow-lg bg-base max-w-xs rounded-md border-2 gap-4 pb-16 w-full flex flex-col items-center p-4",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center mb-4 ",children:[(0,t.jsx)("div",{className:"w-36 h-36 ",children:(0,t.jsx)(o(),{src:a.Z,className:""})}),(0,t.jsx)("h1",{className:"font-semibold text-xl mt-2",children:"S.H Steel Construction"})]}),(0,t.jsxs)("form",{className:"flex flex-col items-center gap-4",children:[(0,t.jsx)("tr",{children:(0,t.jsx)("td",{className:"p-2",children:(0,t.jsx)(x.h,{disabled:s,by:"id",children:(0,t.jsxs)("div",{className:"relative mt-1.5",children:[(0,t.jsxs)("div",{className:"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none",children:[(0,t.jsx)(x.h.Input,{className:"pl-8 border-gray-400 border-2 border-dashed w-full h-9 focus:outline-none focus:border-primary focus:border-solid py-1 px-2 rounded-md transition",onChange:e=>m(e.target.value),displayValue:e=>null==e?void 0:e.name}),(0,t.jsx)(x.h.Button,{className:"absolute inset-y-0 left-1 flex items-center",children:(0,t.jsx)(p.Z,{className:"h-6 w-6 text-primary","aria-hidden":"true"})})]}),(0,t.jsx)(f.u,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,t.jsx)(x.h.Options,{className:"z-50 absolute px-2 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white pt-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:N.map(e=>(0,t.jsx)("div",{children:(0,t.jsx)(h(),{href:"/preview/public/choose/workerpicker?name=".concat(e.name,"&id=").concat(n),children:(0,t.jsx)(x.h.Option,{className(e){let{selected:r,active:s}=e;return"relative cursor-default select-none py-2 my-0.5 pl-10 pr-4 rounded-md ".concat(r?"bg-primary text-white":s?"bg-primary-hover text-white":"text-gray-900")},value:e,children(r){let{selected:s,active:l}=r;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)("span",{className:"block truncate ".concat(s?"font-medium":"font-normal"),children:e.name})}),(0,t.jsx)("div",{className:"flex row",children:s&&(0,t.jsx)("span",{className:"absolute px-12 inset-y-0 left-0 flex items-center  ".concat(s?"text-white":"text-primary"),children:(0,t.jsx)(b.Z,{className:"h-5 w-5","aria-hidden":"true"})})})]})}},e.rowId)})}))})})]})})})}),!N.length&&(0,t.jsx)("div",{className:"w-full flex justify-center py-2",children:"لا يوجد عمال"})]})]})})},g=!0,j=function(e){return(0,t.jsx)("div",{children:(0,t.jsx)(w,{billId:e})})}}},function(e){e.O(0,[549,774,888,179],function(){return e(e.s=9640)}),_N_E=e.O()}]);