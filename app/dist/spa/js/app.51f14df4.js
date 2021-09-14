(()=>{"use strict";var e={2318:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),a=r(9592),n=r(3673);function i(e,t,r,o,a,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});s.render=i;const c=s;var l=r(2264),d=r(7083),u=r(9582);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(451)]).then(r.bind(r,451)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(810)]).then(r.bind(r,3810))}],meta:{forAuth:!1}},{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(921)]).then(r.bind(r,7921)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(182)]).then(r.bind(r,9182))}],meta:{forAuth:!0}},{path:"/desempeno",component:()=>Promise.all([r.e(736),r.e(921)]).then(r.bind(r,7921)),children:[{path:"/desempeno/:id",component:()=>Promise.all([r.e(736),r.e(322)]).then(r.bind(r,1322))}],meta:{forAuth:!0,group:["docente","estudiante"]}},{path:"/configuracion",component:()=>Promise.all([r.e(736),r.e(921)]).then(r.bind(r,7921)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(632)]).then(r.bind(r,4632))},{path:"/estudiantes",component:()=>Promise.all([r.e(736),r.e(632)]).then(r.bind(r,4632))},{path:"/docentes",component:()=>Promise.all([r.e(736),r.e(632)]).then(r.bind(r,4632))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/estudiante",component:()=>Promise.all([r.e(736),r.e(921)]).then(r.bind(r,7921)),children:[{path:"/estudiante/:id",component:()=>Promise.all([r.e(736),r.e(734)]).then(r.bind(r,7734))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/docente",component:()=>Promise.all([r.e(736),r.e(921)]).then(r.bind(r,7921)),children:[{path:"/docente/:id",component:()=>Promise.all([r.e(736),r.e(923)]).then(r.bind(r,2923))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/periodos",component:()=>Promise.all([r.e(736),r.e(921)]).then(r.bind(r,7921)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(731)]).then(r.bind(r,4731))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],m=p,h=(0,d.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function f(e,t){const o="function"===typeof l.default?await(0,l.default)({}):l.default,{storeKey:n}=await Promise.resolve().then(r.bind(r,2264)),i="function"===typeof h?await h({store:o}):h;o.$router=i;const s=e(c);return s.use(a.Z,t),{app:s,store:o,storeKey:n,router:i}}var g=r(729),b=r(6417);const v={config:{},lang:g.Z,plugins:{Notify:b.Z}},y="";async function P({app:e,router:t,store:r,storeKey:o},a){let n=!1;const i=e=>{n=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<a.length;l++)try{await a[l]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),e.use(r,o),e.mount("#q-app"))}f(o.ri,v).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,3948)),Promise.resolve().then(r.bind(r,3785))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,r)}))))},3785:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(7083),a=r(2585),n=r.n(a);const i=(0,o.xr)((async({app:e})=>{e.use(n())}))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),a=r(52),n=r.n(a);const i=n().create({baseURL:"https://previo.website/iconos/api/api"});i.defaults.headers.common["Cockpit-Token"]="c1c68946b8b3862546f39faea83a85";const s=(0,o.xr)((({app:e,store:t})=>{const r=null!=t.getters["api/getUser"];let o=null;r&&(o=t.getters["api/getUser"],o.api_key&&(i.defaults.headers.common["Cockpit-Token"]=o.api_key)),e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},3948:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(7083);const a=(0,o.xr)((async({app:e,router:t,store:r})=>{t.beforeEach(((e,t,o)=>{const a=null!=r.getters["api/getUser"];let n=null;a&&(n=r.getters["api/getUser"]),e.matched.some((e=>e.meta.forAuth))?a?e.meta.group?e.meta.group.includes(n.group)?o():o({path:"/dashboard"}):o():o({path:"/"}):a?o({path:"/dashboard"}):o()}))}))},2264:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var o={};r.r(o),r.d(o,{getUser:()=>d});var a={};r.r(a),r.d(a,{SET_USER:()=>u,UNSET_USER:()=>p});var n={};r.r(n),r.d(n,{GetAllData:()=>y,GetSingleData:()=>P,GetSingleUser:()=>v,GetUsers:()=>g,GetUsersByGroup:()=>b,Login:()=>h,Logout:()=>f,SaveItem:()=>k,SaveUser:()=>w});var i=r(7083),s=r(7874),c=r(6395);function l(){return{user:JSON.parse(c.Z.getItem("iconosPL_user"))||null}}const d=e=>e.user,u=(e,t)=>{c.Z.set("iconosPL_user",JSON.stringify(t)),e.user=t},p=e=>{localStorage.removeItem("iconosPL_user"),e.user=null};r(71);var m=r(5474);r(614);const h=({commit:e},t)=>new Promise(((r,o)=>{m.api.post("/cockpit/authUser",t).then((t=>{const o=t.data,a={user:o.user,email:o.email,name:o.name,group:o.group,api_key:o.api_key,id:o._id};e("SET_USER",a),r(t)})).catch((e=>{o({error:!0,message:"Verifica tus datos."})}))}),(e=>{reject({error:!0})})),f=({commit:e})=>{e("UNSET_USER")},g=({commit:e})=>new Promise(((e,t)=>{m.api.post("/cockpit/listUsers").then((t=>{e(t.data)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),b=({commit:e},t)=>new Promise(((e,r)=>{m.api.post("/cockpit/listUsers",{filter:{group:t}}).then((t=>{e(t.data)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),v=({commit:e},t)=>new Promise(((e,r)=>{m.api.post("/cockpit/listUsers",{filter:{_id:t}}).then((t=>{e(t.data[0])}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),y=({commit:e},t)=>new Promise(((e,r)=>{m.api.post("/collections/get/"+t).then((t=>{e(t.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),P=({commit:e},t)=>new Promise(((e,r)=>{m.api.post("/collections/get/"+t.coll,{filter:{user_id:t.id}}).then((t=>{e(t.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),w=({commit:e},t)=>new Promise(((e,r)=>{m.api.post("/cockpit/saveUser",t).then((t=>{e(t.data)})).catch((e=>{r({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),k=({commit:e},t)=>new Promise(((e,r)=>{const o=t.value.coll;let a=t.value;delete a.coll,void 0==a._id&&delete a._id,m.api.post("/collections/save/"+o,{data:a}).then((t=>{e(t.data)})).catch((e=>{r({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),O={namespaced:!0,getters:o,mutations:a,actions:n,state:l},_=(0,i.h)((function(){const e=(0,s.MT)({modules:{api:O},strict:!1});return e}))}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,a,n)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,a,n]=e[d],s=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,a,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{182:"0910e20d",193:"277f9c7b",322:"ffa5f6ba",451:"a9c2ba66",632:"25f18a8e",731:"2b5b421b",734:"778a7ea4",810:"0b787873",921:"6701a2c7",923:"e26bc50c"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{322:"3ad8c817",451:"b8dd5fd6",736:"e8135e39",810:"2bcde503",921:"107f8c17"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="iconos-plataforma:";r.l=(o,a,n,i)=>{if(e[o])e[o].push(a);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=o),e[o]=[a];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=n,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=r[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],n=a.getAttribute("data-href");if(n===e||n===t)return a}},o=o=>new Promise(((a,n)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return a();e(o,s,a,n)})),a={143:0};r.f.miniCss=(e,t)=>{var r={322:1,451:1,810:1,921:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((r,o)=>a=e[t]=[r,o]));o.push(a[2]=n);var i=r.p+r.u(t),s=new Error,c=o=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,a[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[i,s,c]=o,l=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var d=c(r)}for(t&&t(o);l<i.length;l++)n=i[l],r.o(e,n)&&e[n]&&e[n][0](),e[i[l]]=0;return r.O(d)},o=self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2318)));o=r.O(o)})();