(()=>{"use strict";var e={2318:(e,r,t)=>{t(7280),t(5363),t(71);var o=t(8880),a=t(9592),n=t(3673);function i(e,r,t,o,a,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});s.render=i;const c=s;var l=t(2264),d=t(7083),u=t(9582);const p=[{path:"/",component:()=>Promise.all([t.e(736),t.e(451)]).then(t.bind(t,451)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(55)]).then(t.bind(t,4055))}],meta:{forAuth:!1}},{path:"/dashboard",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,3821)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(66)]).then(t.bind(t,6066))}],meta:{forAuth:!0}},{path:"/desempeno",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,3821)),children:[{path:"/desempeno/:id",component:()=>Promise.all([t.e(736),t.e(322)]).then(t.bind(t,1322))}],meta:{forAuth:!0,group:["docente","estudiante"]}},{path:"/configuracion",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,3821)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(408)]).then(t.bind(t,7408))},{path:"/estudiantes",component:()=>Promise.all([t.e(736),t.e(408)]).then(t.bind(t,7408))},{path:"/docentes",component:()=>Promise.all([t.e(736),t.e(408)]).then(t.bind(t,7408))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/estudiante",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,3821)),children:[{path:"/estudiante/:id",component:()=>Promise.all([t.e(736),t.e(341)]).then(t.bind(t,9341))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/docente",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,3821)),children:[{path:"/docente/:id",component:()=>Promise.all([t.e(736),t.e(553)]).then(t.bind(t,8553))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/periodos",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,3821)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(5)]).then(t.bind(t,5005))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/generaciones",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,3821)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(113)]).then(t.bind(t,8113))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(193)]).then(t.bind(t,2193))}],m=p,h=(0,d.BC)((function(){const e=u.r5,r=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return r}));async function f(e,r){const o="function"===typeof l.default?await(0,l.default)({}):l.default,{storeKey:n}=await Promise.resolve().then(t.bind(t,2264)),i="function"===typeof h?await h({store:o}):h;o.$router=i;const s=e(c);return s.use(a.Z,r),{app:s,store:o,storeKey:n,router:i}}var g=t(729),b=t(6417),v=t(8930);const P={config:{},lang:g.Z,plugins:{Notify:b.Z,Dialog:v.Z}},y="";async function w({app:e,router:r,store:t,storeKey:o},a){let n=!1;const i=e=>{n=!0;const t=Object(e)===e?r.resolve(e).fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<a.length;l++)try{await a[l]({app:e,router:r,store:t,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(r),e.use(t,o),e.mount("#q-app"))}f(o.ri,P).then((e=>Promise.all([Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.bind(t,3948)),Promise.resolve().then(t.bind(t,3785))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,t)}))))},3785:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var o=t(7083),a=t(2585),n=t.n(a);const i=(0,o.xr)((async({app:e})=>{e.use(n())}))},5474:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s,api:()=>i});var o=t(7083),a=t(52),n=t.n(a);const i=n().create({baseURL:"https://previo.website/iconos/api/api"});i.defaults.headers.common["Cockpit-Token"]="c1c68946b8b3862546f39faea83a85";const s=(0,o.xr)((({app:e,store:r})=>{const t=null!=r.getters["api/getUser"];let o=null;t&&(o=r.getters["api/getUser"],o.api_key&&(i.defaults.headers.common["Cockpit-Token"]=o.api_key)),e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},3948:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var o=t(7083);const a=(0,o.xr)((async({app:e,router:r,store:t})=>{r.beforeEach(((e,r,o)=>{const a=null!=t.getters["api/getUser"];let n=null;a&&(n=t.getters["api/getUser"]),e.matched.some((e=>e.meta.forAuth))?a?e.meta.group?e.meta.group.includes(n.group)?o():o({path:"/dashboard"}):o():o({path:"/"}):a?o({path:"/dashboard"}):o()}))}))},2264:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var o={};t.r(o),t.d(o,{getUser:()=>d});var a={};t.r(a),t.d(a,{SET_USER:()=>u,UNSET_USER:()=>p});var n={};t.r(n),t.d(n,{GetAllData:()=>w,GetAllDataFiltered:()=>O,GetAllDataFilteredV2:()=>k,GetSingleData:()=>j,GetSingleUser:()=>y,GetUsers:()=>v,GetUsersByGroup:()=>P,Login:()=>g,Logout:()=>b,NewNotification:()=>U,RemoveItem:()=>A,SaveItem:()=>S,SaveUser:()=>_});var i=t(7083),s=t(7874),c=t(6395);function l(){return{user:JSON.parse(c.Z.getItem("iconosPL_user"))||null}}const d=e=>e.user,u=(e,r)=>{c.Z.set("iconosPL_user",JSON.stringify(r)),e.user=r},p=e=>{localStorage.removeItem("iconosPL_user"),e.user=null};var m=t(515),h=t.n(m),f=(t(71),t(5474));t(614);const g=({commit:e},r)=>new Promise(((t,o)=>{f.api.post("/cockpit/authUser",r).then((r=>{const o=r.data,a={user:o.user,email:o.email,name:o.name,group:o.group,api_key:o.api_key,id:o._id};e("SET_USER",a),t(r)})).catch((e=>{o({error:!0,message:"Verifica tus datos."})}))}),(e=>{reject({error:!0})})),b=({commit:e})=>{e("UNSET_USER")},v=({commit:e})=>new Promise(((e,r)=>{f.api.post("/cockpit/listUsers").then((r=>{e(r.data)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),P=({commit:e},r)=>new Promise(((e,t)=>{f.api.post("/cockpit/listUsers",{filter:{group:r}}).then((r=>{e(r.data)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),y=({commit:e},r)=>new Promise(((e,t)=>{f.api.post("/cockpit/listUsers",{filter:{_id:r}}).then((r=>{e(r.data[0])}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),w=({commit:e},r)=>new Promise(((e,t)=>{f.api.post("/collections/get/"+r,{populate:-1}).then((r=>{e(r.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),O=({commit:e},r)=>{let t={};return t[r[1]]=r[2],new Promise(((e,o)=>{f.api.post("/collections/get/"+r[0],{filter:t,populate:-1}).then((r=>{e(r.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})}))},k=({commit:e},r)=>{let t=r[1];return new Promise(((e,o)=>{f.api.post("/collections/get/"+r[0],{filter:t,populate:-1}).then((r=>{e(r.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})}))},j=({commit:e},r)=>new Promise(((e,t)=>{f.api.post("/collections/get/"+r.coll,{filter:{user_id:r.id}}).then((r=>{e(r.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),_=({commit:e},r)=>new Promise(((e,t)=>{f.api.post("/cockpit/saveUser",r).then((r=>{e(r.data)})).catch((e=>{t({error:!0,message:"Ocurrió un error.",data:e.response.data.error})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),S=({commit:e},r)=>new Promise(((e,t)=>{const o=r.coll;let a=r;delete a.coll,void 0==a._id&&delete a._id,f.api.post("/collections/save/"+o,{data:a}).then((r=>{e(r.data)})).catch((e=>{t({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),A=({commit:e},r)=>new Promise(((e,t)=>{let o={};o[r[1]]=r[2],f.api.post("/collections/remove/"+r[0],{filter:o}).then((r=>{e(r.data)})).catch((e=>{t({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),U=({commit:e},r)=>{const t=h()(h()({},r),{},{status:"unread"});return new Promise(((e,r)=>{f.api.post("/collections/save/notificaciones",{data:t}).then((r=>{e(r.data)})).catch((e=>{r({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})}))},E={namespaced:!0,getters:o,mutations:a,actions:n,state:l},C=(0,i.h)((function(){const e=(0,s.MT)({modules:{api:E},strict:!1});return e}))}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}t.m=e,(()=>{var e=[];t.O=(r,o,a,n)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,a,n]=e[d],s=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(d--,1);var l=a();void 0!==l&&(r=l)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,a,n]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{5:"b5bf334a",55:"0c902da1",66:"9d67d2bd",113:"e4004b6c",193:"26fc6c9b",322:"4fca0c22",341:"ba1638e0",408:"20848e7f",451:"a9c2ba66",553:"bcf57bb7",821:"f29b2597"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{55:"98438e52",322:"3ad8c817",451:"b8dd5fd6",736:"24ba1a1e",821:"107f8c17"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="iconos-plataforma:";t.l=(o,a,n,i)=>{if(e[o])e[o].push(a);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==r+n){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+n),s.src=o),e[o]=[a];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(t))),r)return r(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{t.p=""})(),(()=>{var e=(e,r,t,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=n,a.href=r,document.head.appendChild(a),a},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=t[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===r))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],n=a.getAttribute("data-href");if(n===e||n===r)return a}},o=o=>new Promise(((a,n)=>{var i=t.miniCssF(o),s=t.p+i;if(r(i,s))return a();e(o,s,a,n)})),a={143:0};t.f.miniCss=(e,r)=>{var t={55:1,322:1,451:1,821:1};a[e]?r.push(a[e]):0!==a[e]&&t[e]&&r.push(a[e]=o(e).then((()=>{a[e]=0}),(r=>{throw delete a[e],r})))}})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var a=t.o(e,r)?e[r]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((t,o)=>a=e[r]=[t,o]));o.push(a[2]=n);var i=t.p+t.u(r),s=new Error,c=o=>{if(t.o(e,r)&&(a=e[r],0!==a&&(e[r]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,a[1](s)}};t.l(i,c,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var a,n,[i,s,c]=o,l=0;if(i.some((r=>0!==e[r]))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var d=c(t)}for(r&&r(o);l<i.length;l++)n=i[l],t.o(e,n)&&e[n]&&e[n][0](),e[i[l]]=0;return t.O(d)},o=self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(2318)));o=t.O(o)})();