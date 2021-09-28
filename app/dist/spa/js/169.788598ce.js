"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[169],{9169:(a,e,t)=>{t.r(e),t.d(e,{default:()=>z});var r=t(3673);const s={class:"row q-col-gutter-md"},i={class:"col-12"};function l(a,e,t,l,n,c){const o=(0,r.up)("firma"),u=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(u,{padding:""},{default:(0,r.w5)((()=>[(0,r._)("div",s,[(0,r._)("div",i,[l.userData?((0,r.wg)(),(0,r.j4)(o,{key:0,userdata:l.userData,user:l.user,onReload:l.loadUserData},null,8,["userdata","user","onReload"])):(0,r.kq)("",!0)])])])),_:1})}var n=t(1959),c=t(8825),o=t(7874),u=t(9582);const d=(0,r._)("div",{class:"text-h6 text-primary"},"Firma",-1),m=(0,r._)("div",{class:"text-caption"},"Añada su firma para utilizarla en los reportes CONACYT",-1),p={class:"text-center"},g={key:0,class:"row q-col-gutter-md items-center justify-center"},v={key:0,class:"col-sm-6 text-center"},f=(0,r._)("div",{class:"text-caption text-white"},"Firma almacenada",-1),w={class:"col-sm-6"},_=(0,r._)("div",{class:"text-caption text-white"},"Trace su firma en el recuadro inferior.",-1),x={class:"row q-mt-md items-center"},h={class:"col-6"},k={class:"col-6"};function q(a,e,t,s,i,l){const n=(0,r.up)("q-btn"),c=(0,r.up)("q-img"),o=(0,r.up)("q-card-section"),u=(0,r.up)("q-card"),q=(0,r.up)("VueSignaturePad");return(0,r.wg)(),(0,r.j4)(u,{class:"shadow-24"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[d,m,(0,r._)("div",p,[s.dialogFirma?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(n,{key:0,color:"primary",label:t.userdata.firma?"Actualizar firma":"Añadir firma",unelevated:"",onClick:s.openDialogFirma,"no-caps":""},null,8,["label","onClick"]))]),s.dialogFirma?((0,r.wg)(),(0,r.iD)("div",g,[t.userdata.firma?((0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(u,{class:"bg-grey q-ma-md q-mx-auto",style:{"max-width":"380px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"text-center"},{default:(0,r.w5)((()=>[f,(0,r.Wm)(c,{src:t.userdata.firma,style:{width:"100%","max-width":"380px"}},null,8,["src"])])),_:1})])),_:1})])):(0,r.kq)("",!0),(0,r._)("div",w,[(0,r.Wm)(u,{class:"bg-primary q-ma-md q-mx-auto",style:{"max-width":"380px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{class:"text-center"},{default:(0,r.w5)((()=>[_,(0,r.Wm)(q,{class:"bg-white q-mx-auto",width:"320px",height:"180px",ref:"signature"},null,512),(0,r._)("div",x,[(0,r._)("div",h,[(0,r.Wm)(n,{label:"Limpiar",unelevated:"",color:"primary",size:"sm","no-caps":"",onClick:e[0]||(e[0]=a=>s.signature.clearSignature())})]),(0,r._)("div",k,[(0,r.Wm)(n,{label:"Guardar firma",unelevated:"",color:"primary","no-caps":"",onClick:s.saveSignature},null,8,["onClick"])])])])),_:1})])),_:1})])])):(0,r.kq)("",!0)])),_:1})])),_:1})}const y={props:["userdata","user"],setup(a,e){const t=(0,c.Z)(),r=(0,o.oR)(),s=((0,u.tv)(),(0,n.iH)(!1)),i=(0,n.iH)(),l=()=>{const s={coll:a.user.group+"s",_id:a.userdata._id,firma:i.value.saveSignature().data};r.dispatch("api/SaveItem",s).then((a=>{t.notify("Firma actualizada"),e.emit("reload")}))},d=()=>{s.value=!0};return{dialogFirma:s,openDialogFirma:d,signature:i,saveSignature:l}}};var C=t(151),b=t(5589),D=t(8240),F=t(4027),W=t(7518),S=t.n(W);y.render=q;const Z=y;S()(y,"components",{QCard:C.Z,QCardSection:b.Z,QBtn:D.Z,QImg:F.Z});const j={components:{firma:Z},setup(){(0,c.Z)();const a=(0,o.oR)(),e=((0,u.tv)(),(0,n.Fl)((()=>a.getters["api/getUser"]))),t=(0,n.iH)(null),r=()=>{a.dispatch("api/GetSingleData",{coll:e.value.group+"s",user_id:e.value.id}).then((a=>{t.value=a[0]}))};return r(),{user:e,userData:t,loadUserData:r}}};var Q=t(4379);j.render=l;const z=j;S()(j,"components",{QPage:Q.Z})}}]);