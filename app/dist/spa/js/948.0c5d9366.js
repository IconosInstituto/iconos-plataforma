"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[948],{7948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var o=a(3673),n=a(2323),r=a(9901),s=a.n(r),l=a(9881),u=a.n(l);const i={class:"q-pa-sm"},c=(0,o.Uk)("Bienvenido, "),d=(0,o.Uk)("."),p={class:"text-right text-caption"},m={class:"text-caption text-dark"},g={class:"text-caption text-dark text-bold"},w={class:"q-pa-sm full-height"},b={class:"full-height rounded-borders shadow-24 text-white text-bold drawerContainer"},f={class:"q-px-sm q-py-sm text-center"},_={class:"flex column q-pa-sm text-center items-center"};function h(e,t,a,r,l,h){const v=(0,o.up)("q-btn"),q=(0,o.up)("q-toolbar-title"),x=(0,o.up)("q-toolbar"),k=(0,o.up)("q-header"),D=(0,o.up)("q-img"),W=(0,o.up)("currentP"),Z=(0,o.up)("q-icon"),Q=(0,o.up)("q-item-section"),I=(0,o.up)("q-item-label"),P=(0,o.up)("q-item"),z=(0,o.up)("estudianteMenu"),C=(0,o.up)("q-list"),U=(0,o.up)("q-separator"),y=(0,o.up)("q-drawer"),F=(0,o.up)("router-view"),H=(0,o.up)("q-page-container"),L=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(L,{view:"lhr LpR fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"bg-transparent"},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(x,{class:"text-dark bg-white rounded-borders"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-px-xs",icon:r.leftDrawerOpen?"menu":"menu_open",onClick:r.toggleLeftDrawer,flat:""},null,8,["icon","onClick"]),(0,o.Wm)(q,{class:"text-body1"},{default:(0,o.w5)((()=>[c,(0,o._)("strong",null,(0,n.zw)(r.userData?r.userData.name:""),1),d])),_:1}),(0,o._)("div",p,[(0,o._)("div",m,(0,n.zw)(r.userData?r.userData.user:""),1),(0,o._)("div",g,(0,n.zw)(r.userData?r.userData.email:""),1)])])),_:1})])])),_:1}),(0,o.Wm)(y,{modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=e=>r.leftDrawerOpen=e),breakpoint:820},{default:(0,o.w5)((()=>[(0,o._)("div",w,[(0,o._)("section",b,[(0,o._)("div",f,[(0,o.Wm)(D,{src:s()}),(0,o.Wm)(W)]),(0,o.Wm)(C,{class:"q-pa-sm",separator:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.menuItems,((e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[r.visibleForUser(e)?((0,o.wg)(),(0,o.j4)(P,{key:0,class:"rounded-borders",clickable:"",to:e.path,"active-class":"text-accent"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:e.icon},null,8,["name"])])),_:2},1024),(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])):(0,o.kq)("",!0)],64)))),256)),r.userData?((0,o.wg)(),(0,o.j4)(z,{key:0,userdata:r.userData},null,8,["userdata"])):(0,o.kq)("",!0)])),_:1}),(0,o._)("footer",_,[(0,o.Wm)(v,{label:"Cerrar sesión",color:"white","text-color":"dark",size:"sm","no-caps":"",onClick:r.logoutFN},null,8,["onClick"]),(0,o.Wm)(U,{class:"full-width",spaced:""}),(0,o.Wm)(D,{src:u()})])])])])),_:1},8,["modelValue"]),(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(F)])),_:1})])),_:1})}var v=a(1959),q=a(7874),x=a(9582);function k(e,t,a,r,s,l){const u=(0,o.up)("q-icon"),i=(0,o.up)("q-item-section"),c=(0,o.up)("q-item-label"),d=(0,o.up)("q-item");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.menuItems,((e,t)=>((0,o.wg)(),(0,o.j4)(d,{class:"rounded-borders",clickable:"",to:"/periodo/"+e._id,"active-class":"text-accent"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:"description"})])),_:1}),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Periodo "+(0,n.zw)(e.periodo.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])))),256)}const D={props:["userdata"],setup(e){const t=(0,q.oR)(),a=((0,x.tv)(),(0,v.iH)([])),o=((0,v.iH)([]),()=>{const o={estudiante:e.userdata.id};t.dispatch("api/GetAllDataFilteredV2",["asignaciones",o]).then((e=>{a.value=e}))});return"estudiante"==e.userdata.group&&o(),{menuItems:a}}};var W=a(3414),Z=a(2035),Q=a(4554),I=a(2350),P=a(7518),z=a.n(P);D.render=k;const C=D;z()(D,"components",{QItem:W.Z,QItemSection:Z.Z,QIcon:Q.Z,QItemLabel:I.Z});const U={class:"text-h6"},y={class:"text-caption text-grey"},F=(0,o._)("span",{class:"text-primary text-bold q-mx-sm"},"- ",-1);function H(e,t,a,r,s,l){const u=(0,o.up)("datesprogress"),i=(0,o.up)("q-card-section");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o._)("div",U,(0,n.zw)(r.currentP.name),1),(0,o._)("div",y,[(0,o.Uk)((0,n.zw)(r.currentP.startDate),1),F,(0,o.Uk)((0,n.zw)(r.currentP.endDate),1)]),(0,o.Wm)(u,{date1:r.currentP.startDate,date2:r.currentP.endDate},null,8,["date1","date2"])])),_:1})])}var L=a(8825),R=a(4131);const j={components:{datesprogress:R.Z},setup(){(0,L.Z)();const e=(0,q.oR)(),t=((0,x.tv)(),(0,v.Fl)((()=>e.getters["api/getPeriodo"])));return e.dispatch("api/GetPeriodo"),{currentP:t}}};var O=a(5589);j.render=H;const S=j;z()(j,"components",{QCardSection:O.Z});const V={components:{estudianteMenu:C,currentP:S},setup(){const e=(0,q.oR)(),t=(0,x.tv)(),a=(0,v.iH)([{label:"Inicio",path:"/dashboard",icon:"notes",group:["estudiante"]},{label:"Investigaciones",path:"/dashboard",icon:"description",group:["docente"]},{label:"Panel",path:"/dashboard",icon:"insights",group:["admin","coordinador"]},{label:"Estudiantes",path:"/estudiantes",icon:"people_alt",group:["admin","coordinador"]},{label:"Docentes",path:"/docentes",icon:"contact_page",group:["admin","coordinador"]},{label:"Periodos",path:"/periodos",icon:"date_range",group:["admin","coordinador"]},{label:"Generaciones",path:"/generaciones",icon:"group_work",group:["admin","coordinador"]},{label:"Reportes",path:"/reportesconacyt",icon:"summarize",group:["admin","coordinador"]},{label:" Mi cuenta",path:"/mi-cuenta",icon:"auto_awesome",group:["admin","coordinador","docente"]}]),o=()=>{e.dispatch("api/Logout"),t.push("/")},n=(0,v.iH)(!0),r=(0,v.Fl)((()=>e.getters["api/getUser"])),s=e=>null===r.value||!e.group||!!e.group.includes(r.value.group);return{menuItems:a,leftDrawerOpen:n,toggleLeftDrawer(){n.value=!n.value},logoutFN:o,userData:r,visibleForUser:s}}};var G=a(9214),M=a(3812),T=a(9570),Y=a(8240),B=a(3747),K=a(2901),N=a(4027),A=a(7011),E=a(5869),J=a(2652);V.render=h;const X=V;z()(V,"components",{QLayout:G.Z,QHeader:M.Z,QToolbar:T.Z,QBtn:Y.Z,QToolbarTitle:B.Z,QDrawer:K.Z,QImg:N.Z,QList:A.Z,QItem:W.Z,QItemSection:Z.Z,QIcon:Q.Z,QItemLabel:I.Z,QSeparator:E.Z,QPageContainer:J.Z})}}]);