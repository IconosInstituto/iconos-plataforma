(()=>{"use strict";var e={2318:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),a=r(9592),n=r(3673);function i(e,t,r,o,a,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});s.render=i;const c=s;var d=r(2264),l=r(7083),p=r(9582);const u=[{path:"/",component:()=>Promise.all([r.e(736),r.e(451)]).then(r.bind(r,451)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(506)]).then(r.bind(r,2506))}],meta:{forAuth:!1}},{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(859)]).then(r.bind(r,4859))}],meta:{forAuth:!0}},{path:"/desempeno",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"/desempeno/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(614)]).then(r.bind(r,8505))}],meta:{forAuth:!0,group:["docente","estudiante"]}},{path:"/configuracion",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(14)]).then(r.bind(r,3014))},{path:"/estudiantes",component:()=>Promise.all([r.e(736),r.e(382)]).then(r.bind(r,1382))},{path:"/docentes",component:()=>Promise.all([r.e(736),r.e(478)]).then(r.bind(r,478))},{path:"/estudiantes2",component:()=>Promise.all([r.e(736),r.e(14)]).then(r.bind(r,3014))},{path:"/docentes2",component:()=>Promise.all([r.e(736),r.e(14)]).then(r.bind(r,3014))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/estudiante",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"/estudiante/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(313)]).then(r.bind(r,9313))},{path:"/estudiantepre/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(142)]).then(r.bind(r,1142))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/docente",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"/docente/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(764)]).then(r.bind(r,6764))},{path:"/docentepre/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(256)]).then(r.bind(r,6256))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/periodos",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(53)]).then(r.bind(r,3053))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/periodo",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"/periodo/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(641)]).then(r.bind(r,9506))}],meta:{forAuth:!0,group:["estudiante"]}},{path:"/periodos",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(53)]).then(r.bind(r,3053))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/generaciones",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(811)]).then(r.bind(r,811))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/reportesconacyt",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(213)]).then(r.bind(r,6213))}],meta:{forAuth:!0,group:["admin","coordinador"]}},{path:"/mi-cuenta",component:()=>Promise.all([r.e(736),r.e(64),r.e(948)]).then(r.bind(r,7948)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(169)]).then(r.bind(r,9169))}],meta:{forAuth:!0,group:["admin","coordinador","docente"]}},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],m=u,h=(0,l.BC)((function(){const e=p.PO,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("/")});return t}));async function f(e,t){const o="function"===typeof d.default?await(0,d.default)({}):d.default,{storeKey:n}=await Promise.resolve().then(r.bind(r,2264)),i="function"===typeof h?await h({store:o}):h;o.$router=i;const s=e(c);return s.use(a.Z,t),{app:s,store:o,storeKey:n,router:i}}var g=r(729),b=r(6417),v=r(8930);const P={config:{},lang:g.Z,plugins:{Notify:b.Z,Dialog:v.Z}},y="/";async function w({app:e,router:t,store:r,storeKey:o},a){let n=!1;const i=e=>{n=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===n&&d<a.length;d++)try{await a[d]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),e.use(r,o),e.mount("#q-app"))}f(o.ri,P).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,3948)),Promise.resolve().then(r.bind(r,3785)),Promise.resolve().then(r.bind(r,3100)),Promise.resolve().then(r.bind(r,7164))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,r)}))))},3785:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(7083),a=r(2585),n=r.n(a);const i=(0,o.xr)((async({app:e})=>{e.use(n())}))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),a=r(52),n=r.n(a);const i=n().create({baseURL:"https://previo.website/iconos/api/api"});i.defaults.headers.common["Cockpit-Token"]="c1c68946b8b3862546f39faea83a85";const s=(0,o.xr)((({app:e,store:t})=>{const r=null!=t.getters["api/getUser"];let o=null;r&&(o=t.getters["api/getUser"],o.api_key&&(i.defaults.headers.common["Cockpit-Token"]=o.api_key)),e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},3948:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(7083);const a=(0,o.xr)((async({app:e,router:t,store:r})=>{t.beforeEach(((e,t,o)=>{const a=null!=r.getters["api/getUser"];let n=null;a&&(n=r.getters["api/getUser"]),e.matched.some((e=>e.meta.forAuth))?a?e.meta.group?e.meta.group.includes(n.group)?o():o({path:"/dashboard"}):o():o({path:"/"}):a?o({path:"/dashboard"}):o()}))}))},7164:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(7083),a=r(8603),n=r.n(a);const i=(0,o.xr)((async({app:e,Vue:t})=>{e.config.globalProperties.$_=n(),e.provide("$_",n())}))},3100:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var o=r(7083),a=r(4577);const n=(0,o.xr)((async({app:e})=>{e.use(a.Z)}))},2264:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var o={};r.r(o),r.d(o,{getPeriodo:()=>p,getUser:()=>l});var a={};r.r(a),r.d(a,{SET_PERIODO:()=>h,SET_USER:()=>u,UNSET_USER:()=>m});var n={};r.r(n),r.d(n,{GetAllData:()=>k,GetAllDataFiltered:()=>j,GetAllDataFilteredV2:()=>A,GetPeriodo:()=>N,GetSingleData:()=>S,GetSingleUser:()=>_,GetUsers:()=>y,GetUsersByGroup:()=>w,GetUsersByGroupAll:()=>O,ImageB64:()=>G,Login:()=>v,Logout:()=>P,NewNotification:()=>C,RemoveItem:()=>T,SaveItem:()=>U,SaveUser:()=>E,SetPeriodo:()=>x});var i=r(7083),s=r(7874),c=r(6395);function d(){return{user:JSON.parse(c.Z.getItem("iconosPL_user"))||null,periodo:""}}const l=e=>e.user,p=e=>e.periodo,u=(e,t)=>{c.Z.set("iconosPL_user",JSON.stringify(t)),e.user=t},m=e=>{localStorage.removeItem("iconosPL_user"),e.user=null},h=(e,t)=>{e.periodo=t};var f=r(515),g=r.n(f),b=(r(71),r(5474));r(614);const v=({commit:e},t)=>new Promise(((r,o)=>{b.api.post("/cockpit/authUser",t).then((t=>{const o=t.data,a={user:o.user,email:o.email,name:o.name,group:o.group,api_key:o.api_key,id:o._id};e("SET_USER",a),r(t)})).catch((e=>{o({error:!0,message:"Verifica tus datos."})}))}),(e=>{reject({error:!0})})),P=({commit:e})=>{e("UNSET_USER")},y=({commit:e})=>new Promise(((e,t)=>{b.api.post("/cockpit/listUsers").then((t=>{e(t.data)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),w=({commit:e},t)=>new Promise(((e,r)=>{b.api.post("/cockpit/listUsers",{filter:{group:t,active:!0}}).then((t=>{e(t.data)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),O=({commit:e},t)=>new Promise(((e,r)=>{b.api.post("/cockpit/listUsers",{filter:{group:t}}).then((t=>{e(t.data)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),_=({commit:e},t)=>new Promise(((e,r)=>{b.api.post("/cockpit/listUsers",{filter:{_id:t}}).then((t=>{e(t.data[0])}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),k=({commit:e},t)=>new Promise(((e,r)=>{b.api.post("/collections/get/"+t,{populate:10}).then((t=>{e(t.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),j=({commit:e},t)=>{let r={};return r[t[1]]=t[2],new Promise(((e,o)=>{b.api.post("/collections/get/"+t[0],{filter:r,populate:10}).then((t=>{e(t.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})}))},A=({commit:e},t)=>{let r=t[1];return new Promise(((e,o)=>{b.api.post("/collections/get/"+t[0],{filter:r,populate:10}).then((t=>{e(t.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})}))},S=({commit:e},t)=>new Promise(((e,r)=>{b.api.post("/collections/get/"+t.coll,{filter:{user_id:t.id},populate:10}).then((t=>{e(t.data.entries)}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),E=({commit:e},t)=>new Promise(((e,r)=>{b.api.post("/cockpit/saveUser",t).then((t=>{e(t.data)})).catch((e=>{r({error:!0,message:"Ocurrió un error.",data:e.response.data.error})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),U=({commit:e},t)=>new Promise(((e,r)=>{const o=t.coll;let a=t;delete a.coll,void 0==a._id&&delete a._id,b.api.post("/collections/save/"+o,{data:a}).then((t=>{e(t.data)})).catch((e=>{r({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),T=({commit:e},t)=>new Promise(((e,r)=>{let o={};o[t[1]]=t[2],b.api.post("/collections/remove/"+t[0],{filter:o}).then((t=>{e(t.data)})).catch((e=>{r({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),C=({commit:e},t)=>{const r=g()(g()({},t),{},{status:"unread"});return new Promise(((e,t)=>{b.api.post("/collections/save/notificaciones",{data:r}).then((t=>{e(t.data)})).catch((e=>{t({error:!0,message:"Ocurrió un error.",data:e})}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})}))},N=({commit:e})=>new Promise(((t,r)=>{b.api.post("/collections/get/periodos",{filter:{actual:!0}}).then((r=>{t(r.data.entries[0]),e("SET_PERIODO",r.data.entries[0])}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),x=({commit:e},t)=>new Promise(((r,o)=>{b.api.post("/collections/get/periodos",{filter:{actual:!0}}).then((a=>{if(a.data.entries[0]){var n={_id:a.data.entries[0]._id,actual:!1};b.api.post("/collections/save/periodos",{data:n})}var i={_id:t._id,actual:!0};b.api.post("/collections/save/periodos",{data:i}).then((t=>{r(t.data),e("SET_PERIODO",item)})).catch((e=>{o({error:!0,message:"Ocurrió un error.",data:e})}))}))}),(e=>{reject({error:!0,message:"Ocurrió un error.",data:e})})),G=({commit:e},t)=>{const r={src:t.path,b64:!0,w:300,m:"fitToWidth"};return new Promise(((e,t)=>{b.api.post("/cockpit/image",r).then((t=>{e(t.data)}),(e=>{t({error:!0,message:"Ocurrió un error.",data:e})}))}))},L={namespaced:!0,getters:o,mutations:a,actions:n,state:d},D=(0,i.h)((function(){const e=(0,s.MT)({modules:{api:L},strict:!1});return e}))}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,a,n)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,a,n]=e[l],s=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[o,a,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{14:"143b3985",53:"dad972ce",64:"e54ebb26",142:"a3d93f18",169:"788598ce",193:"26fc6c9b",213:"184ffe3b",256:"ee1e69b1",313:"a67cb7c2",382:"4425d290",451:"67256188",478:"d40f13b5",506:"764b0140",614:"2593183a",641:"7ddc1dfe",764:"6020e6c3",811:"cf7cfff8",859:"39f2cd5a",948:"0c5d9366"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{213:"a15d02a9",313:"a3efb534",451:"b8dd5fd6",506:"bd32714b",614:"3ad8c817",736:"fbe761cd",764:"a3efb534",859:"c395e95d",948:"107f8c17"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="iconos-plataforma:";r.l=(o,a,n,i)=>{if(e[o])e[o].push(a);else{var s,c;if(void 0!==n)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var p=d[l];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+n){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=o),e[o]=[a];var u=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=n,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=r[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],n=a.getAttribute("data-href");if(n===e||n===t)return a}},o=o=>new Promise(((a,n)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return a();e(o,s,a,n)})),a={143:0};r.f.miniCss=(e,t)=>{var r={213:1,313:1,451:1,506:1,614:1,764:1,859:1,948:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((r,o)=>a=e[t]=[r,o]));o.push(a[2]=n);var i=r.p+r.u(t),s=new Error,c=o=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,a[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[i,s,c]=o,d=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var l=c(r)}for(t&&t(o);d<i.length;d++)n=i[d],r.o(e,n)&&e[n]&&e[n][0](),e[i[d]]=0;return r.O(l)},o=self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2318)));o=r.O(o)})();