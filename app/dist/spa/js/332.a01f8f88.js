"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[332],{9332:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ae});var o=t(3673);function l(e,a,t,l,i,n){const s=(0,o.up)("activos"),r=(0,o.up)("q-separator"),u=(0,o.up)("inactivos"),d=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(d,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{ref:"estudiantesActivos"},null,512),(0,o.Wm)(r,{spaced:""}),(0,o.Wm)(u,{onUpdated:a[0]||(a[0]=e=>l.estudiantesActivos.addStudent(e))})])),_:1})}var i=t(1959),n=t(8825),s=t(7874),r=t(9582),u=t(2323);const d=(0,o._)("div",{class:"text-h6"},"Usuarios no habilitados",-1),c=(0,o.Uk)("Habilitar usuario");function p(e,a,t,l,i,n){const s=(0,o.up)("q-inner-loading"),r=(0,o.up)("q-td"),p=(0,o.up)("q-tooltip"),m=(0,o.up)("q-toggle"),w=(0,o.up)("q-tr"),g=(0,o.up)("q-table"),f=(0,o.up)("generacionPeriodo"),v=(0,o.up)("q-card-section"),_=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(_,{class:"shadow-24"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:(0,u.C_)(["shadow-0",0==l.inactivos.length?"text-grey-4":""]),rows:l.inactivos,columns:l.columns,dense:"",pagination:l.pagination},{top:(0,o.w5)((()=>[d])),loading:(0,o.w5)((()=>[(0,o.Wm)(s,{showing:"",color:"primary"})])),body:(0,o.w5)((e=>[(0,o.Wm)(w,{props:e,"no-hover":""},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"text-bold",key:"user",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.user),1)])),_:2},1032,["props"]),(0,o.Wm)(r,{key:"name",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.name),1)])),_:2},1032,["props"]),(0,o.Wm)(r,{key:"email",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.email),1)])),_:2},1032,["props"]),(0,o.Wm)(r,{key:"active",props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{modelValue:e.row.active,"onUpdate:modelValue":[a=>e.row.active=a,a=>l.habilitarFN(e.row)]},{default:(0,o.w5)((()=>[e.row.active?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(p,{key:0},{default:(0,o.w5)((()=>[c])),_:1}))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","class"]),(0,o.Wm)(f,{ref:"generacionperiodoRef"},null,512)])),_:1})])),_:1})}const m={class:"row q-col-gutter-md q-mb-md"},w={class:"col-6"},g=(0,o._)("div",{class:"text-h6"},"Inscribir a periodo",-1),f=(0,o.Uk)("Periodo actual"),v={class:"col-6"},_=(0,o._)("div",{class:"text-h6"},"Elegir generación",-1),k={class:"row items-center"},b={class:"col-6"},h={class:"col-6"};function y(e,a,t,l,i,n){const s=(0,o.up)("q-item-label"),r=(0,o.up)("q-item-section"),d=(0,o.up)("q-item"),c=(0,o.up)("q-select"),p=(0,o.up)("q-card-section"),y=(0,o.up)("q-card"),q=(0,o.up)("q-btn"),W=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(W,{modelValue:l.dialog,"onUpdate:modelValue":a[3]||(a[3]=e=>l.dialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"bg-dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("div",w,[(0,o.Wm)(y,{class:"shadow-24"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[g,(0,o.Wm)(c,{modelValue:l.periodoChoose,"onUpdate:modelValue":a[0]||(a[0]=e=>l.periodoChoose=e),options:l.periodos,"map-options":"","option-label":"name"},{option:(0,o.w5)((e=>[(0,o.Wm)(d,(0,u.vs)((0,o.F4)(e.itemProps)),{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.opt.name),1)])),_:2},1024),e.opt.actual?((0,o.wg)(),(0,o.j4)(s,{key:0,caption:""},{default:(0,o.w5)((()=>[f])),_:1})):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),(0,o._)("div",v,[(0,o.Wm)(y,{class:"shadow-24"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[_,(0,o.Wm)(c,{modelValue:l.generacionChoose,"onUpdate:modelValue":a[1]||(a[1]=e=>l.generacionChoose=e),options:l.generaciones,"map-options":"","option-label":"name"},null,8,["modelValue","options"])])),_:1})])),_:1})])])])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("div",k,[(0,o._)("div",b,[(0,o.Wm)(q,{label:"Cancelar asignación",color:"secondary",unelevated:"",onClick:a[2]||(a[2]=a=>e.v-e.close-e.popup)})]),(0,o._)("div",h,[(0,o.Wm)(q,{label:"Asignar periodo y generación",color:"primary",unelevated:"",onClick:l.asignarFN},null,8,["onClick"])])])])),_:1})])),_:1})])),_:1},8,["modelValue"])}const q={props:["user"],setup(){const e=(0,n.Z)(),a=(0,s.oR)(),t=((0,r.tv)(),(0,i.iH)(!1)),o=(0,i.iH)(null),l=async e=>{e._id;o.value=e,o.value&&(t.value=!0,m())},u=(0,i.iH)([]),d=(0,i.iH)([]),c=(0,i.iH)([]),p=(0,i.iH)([]),m=async()=>{u.value=await a.dispatch("api/GetAllData","periodos"),d.value=await a.dispatch("api/GetAllData","generaciones"),c.value=a.getters["api/getPeriodo"],p.value=d.value[d.value.length-1]},w=async()=>{const l={coll:"estudiantes",_id:o.value._id,generacion:p.value},i=(await a.dispatch("api/SaveItem",l),{coll:"asignaciones",periodo:c.value,estudiante:o.value});await a.dispatch("api/SaveItem",i);t.value=!1,e.notify("Periodo y Generación asignados")};return m(),{openit:l,dialog:t,periodos:u,generaciones:d,periodoChoose:c,generacionChoose:p,asignarFN:w}}};var W=t(6778),Z=t(151),C=t(5589),Q=t(7208),U=t(3414),S=t(2035),I=t(2350),V=t(8240),A=t(677),H=t(7518),j=t.n(H);q.render=y;const x=q;j()(q,"components",{QDialog:W.Z,QCard:Z.Z,QCardSection:C.Z,QSelect:Q.Z,QItem:U.Z,QItemSection:S.Z,QItemLabel:I.Z,QBtn:V.Z}),j()(q,"directives",{ClosePopup:A.Z});const z={components:{generacionPeriodo:x},setup(e,a){const t=(0,n.Z)(),l=(0,s.oR)(),u=((0,r.tv)(),(0,o.f3)("$_")),d=(0,i.iH)([]),c=(0,i.iH)(),p=[{name:"user",label:"Nº de Cuenta",field:"user",align:"left"},{name:"name",label:"Nombre",field:"name",align:"left"},{name:"email",label:"Email",field:"email",align:"left"},{name:"active",label:"Habilitar acceso",field:"active",align:"center",sortable:!0}],m={sortBy:"active",rowsPerPage:5,descending:!0},w=async e=>{await l.dispatch("api/SaveUser",{user:e});t.notify("Estudiante habilitado"),g(e),u.remove(d.value,e)},g=async e=>{let t=await l.dispatch("api/GetSingleData",{coll:"estudiantes",id:e._id});const o={coll:"estudiantes",user_id:e._id,status:"ACTIVO"};0==t.length?(t=await l.dispatch("api/SaveItem",o),console.log("Nuevo usuario"),a.emit("updated",t),c.value.openit(t)):(console.log("Usuario rehabilitado"),a.emit("updated",t[0]))},f=async()=>{const e=await l.dispatch("api/GetUsersByGroupAll","estudiante"),a=await u.partition(e,(e=>!1===e.active));d.value=a[0]};return f(),{inactivos:d,columns:p,pagination:m,habilitarFN:w,generacionperiodoRef:c}}};var P=t(3243),T=t(6941),E=t(8186),G=t(3884),N=t(8886),B=t(8870);z.render=p;const R=z;j()(z,"components",{QCard:Z.Z,QCardSection:C.Z,QTable:P.Z,QInnerLoading:T.Z,QTr:E.Z,QTd:G.Z,QToggle:N.Z,QTooltip:B.Z});const D={class:"row full-width"},F=(0,o._)("div",{class:"col-6"},[(0,o._)("div",{class:"text-h6"},"Estudiantes")],-1),O={class:"col-6"};function L(e,a,t,l,i,n){const s=(0,o.up)("q-input"),r=(0,o.up)("q-inner-loading"),d=(0,o.up)("q-td"),c=(0,o.up)("q-tooltip"),p=(0,o.up)("q-icon"),m=(0,o.up)("q-tr"),w=(0,o.up)("q-table"),g=(0,o.up)("q-card-section"),f=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(f,{class:"shadow-24"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[l.estudiantes.length>0?((0,o.wg)(),(0,o.j4)(w,{key:0,class:"shadow-0",rows:l.estudiantes,columns:l.columns,pagination:l.pagination,filter:l.filter},{top:(0,o.w5)((()=>[(0,o._)("div",D,[F,(0,o._)("div",O,[(0,o.Wm)(s,{class:"q-ml-auto",label:"Filtrar",standout:"bg-primary text-white",modelValue:l.filter,"onUpdate:modelValue":a[0]||(a[0]=e=>l.filter=e),unelevated:"",style:{"max-width":"200px"},dense:"",clearable:""},null,8,["modelValue"])])])])),loading:(0,o.w5)((()=>[(0,o.Wm)(r,{showing:"",color:"primary"})])),body:(0,o.w5)((e=>[e.row.user?((0,o.wg)(),(0,o.j4)(m,{key:0,class:(0,u.C_)(["cursor-pointer",l.colorByStatus(e.row.status)]),props:e,onClick:a=>l.gotoStudent(e.row)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"text-bold",key:"user",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.user.user),1)])),_:2},1032,["props"]),(0,o.Wm)(d,{key:"name",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.user.name),1)])),_:2},1032,["props"]),(0,o.Wm)(d,{key:"email",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.user.email),1)])),_:2},1032,["props"]),(0,o.Wm)(d,{key:"generacion",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.generacion?e.row.generacion.name:"-"),1)])),_:2},1032,["props"]),(0,o.Wm)(d,{key:"tituloInvestigacion",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.tituloInvestigacion||"Sin título"),1)])),_:2},1032,["props"]),(0,o.Wm)(d,{key:"status",props:e},{default:(0,o.w5)((()=>["ACTIVO"==e.row.status?((0,o.wg)(),(0,o.j4)(p,{key:0,name:"done_outline",color:"positive"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.status),1)])),_:2},1024)])),_:2},1024)):(0,o.kq)("",!0),"EGRESADO"==e.row.status?((0,o.wg)(),(0,o.j4)(p,{key:1,name:"school",color:"info"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.status),1)])),_:2},1024)])),_:2},1024)):(0,o.kq)("",!0),"BAJA"==e.row.status?((0,o.wg)(),(0,o.j4)(p,{key:2,name:"block",color:"grey"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.row.status),1)])),_:2},1024)])),_:2},1024)):(0,o.kq)("",!0)])),_:2},1032,["props"])])),_:2},1032,["props","onClick","class"])):(0,o.kq)("",!0)])),_:1},8,["rows","columns","pagination","filter"])):(0,o.kq)("",!0)])),_:1})])),_:1})}const J={setup(){(0,n.Z)();const e=(0,s.oR)(),a=(0,r.tv)(),t=(0,r.yj)(),l=(0,o.f3)("$_"),u=(0,i.iH)([]),d=(0,i.iH)("");t.query.filter&&(d.value=t.query.filter);const c=[{name:"user",label:"Nº de Cuenta",field:e=>e.user.user,align:"left",sortable:!0},{name:"name",label:"Nombre",field:e=>e.user.name,align:"left"},{name:"email",label:"Email",field:e=>e.user.email,align:"left"},{name:"generacion",label:"Generación",field:e=>e.generacion.name,align:"left"},{name:"tituloInvestigacion",label:"Investigación",field:e=>e.tituloInvestigacion,align:"left"},{name:"status",label:"Estatus",field:e=>e.status,align:"left",sortable:!0}],p={sortBy:"active",rowsPerPage:40,descending:!0},m=e=>{let a="";switch(e){case"BAJA":a="text-grey";break;case"EGRESADO":a="text-info";break}return a},w=async()=>{const a=await e.dispatch("api/GetAllData","estudiantes"),t=await l.partition(a,(e=>!0===e.user.active));u.value=t[0]};w();const g=e=>{e.user?u.value.push(e):w()},f=e=>{const t="/estudiante/"+e.user_id;a.push(t)};return{estudiantes:u,columns:c,pagination:p,addStudent:g,gotoStudent:f,filter:d,colorByStatus:m}}};var $=t(4842),K=t(4554);J.render=L;const M=J;j()(J,"components",{QCard:Z.Z,QCardSection:C.Z,QTable:P.Z,QInput:$.Z,QIcon:K.Z,QInnerLoading:T.Z,QTr:E.Z,QTd:G.Z,QTooltip:B.Z});const X={components:{inactivos:R,activos:M},setup(){(0,n.Z)(),(0,s.oR)(),(0,r.tv)();const e=(0,i.iH)();return{estudiantesActivos:e}}};var Y=t(4379),ee=t(5869);X.render=l;const ae=X;j()(X,"components",{QPage:Y.Z,QSeparator:ee.Z})}}]);