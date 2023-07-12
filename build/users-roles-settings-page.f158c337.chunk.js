(self.webpackChunksmmart_cms=self.webpackChunksmmart_cms||[]).push([[8853],{7842:(h,E,t)=>{"use strict";t.r(E),t.d(E,{default:()=>Dt});var e=t(67294),n=t(88376),a=t(16550),o=t(99771),l=t(31498),g=t(185),c=t(53979),y=t(29728),M=t(49066),f=t(11047),O=t(41580),x=t(75515),m=t(11276),d=t(67819),R=t(16364),C=t(61467),b=t(85018),U=t(14916),j=t(86896),I=t(45697),B=t.n(I);const $=(0,e.createContext)({}),z=({children:s,value:i})=>e.createElement($.Provider,{value:i},s),W=()=>(0,e.useContext)($);z.propTypes={children:B().node.isRequired,value:B().object.isRequired};var w=t(84757),V=t(48734),oe=t(74756),te=t(63081),ie=t(11700),J=t.n(ie);function ne(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return J()(s.replace("api::","").replace("plugin::",""))}}const le=ne,ce=(s,i)=>{const r=Object.keys(i).sort().map(u=>({name:u,isOpen:!1}));return{...s,collapses:r}};var de=t(89734),q=t.n(de),_=t(36213),ee=t(63237),je=t(78114),Be=t(27361),se=t.n(Be),ae=t(71997);const fe=(0,ae.iv)`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Se=(0,ae.ZP)(O.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&fe}
  &:hover {
    ${fe}
  }
`,Ze=ae.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,xe=({subCategory:s})=>{const{formatMessage:i}=(0,j.Z)(),{onChange:r,onChangeSelectAll:u,onSelectedAction:P,selectedAction:p,modifiedData:T}=W(),D=(0,e.useMemo)(()=>se()(T,s.name,{}),[T,s]),L=(0,e.useMemo)(()=>Object.values(D).every(v=>v.enabled===!0),[D]),A=(0,e.useMemo)(()=>Object.values(D).some(v=>v.enabled===!0)&&!L,[D,L]),Z=(0,e.useCallback)(({target:{name:v}})=>{u({target:{name:v,value:!L}})},[L,u]),S=(0,e.useCallback)(v=>p===v,[p]);return e.createElement(O.x,null,e.createElement(f.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(O.x,{paddingRight:4},e.createElement(x.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(Ze,null),e.createElement(O.x,{paddingLeft:4},e.createElement(_.X,{name:s.name,value:L,onValueChange:v=>Z({target:{name:s.name,value:v}}),indeterminate:A},i({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(f.k,{paddingTop:6,paddingBottom:6},e.createElement(m.r,{gap:2,style:{flex:1}},s.actions.map(v=>{const N=`${v.name}.enabled`;return e.createElement(d.P,{col:6,key:v.name},e.createElement(Se,{isActive:S(v.name),padding:2,hasRadius:!0},e.createElement(_.X,{value:se()(T,N,!1),name:N,onValueChange:G=>r({target:{name:N,value:G}})},v.label),e.createElement("button",{type:"button",onClick:()=>P(v.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(ee.T,{as:"span"},i({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:v.name})),e.createElement(je.Z,null))))}))))};xe.propTypes={subCategory:B().object.isRequired};const Ue=xe,ve=({name:s,permissions:i})=>{const r=(0,e.useMemo)(()=>q()(Object.values(i.controllers).reduce((u,P,p)=>{const T=`${s}.controllers.${Object.keys(i.controllers)[p]}`,D=q()(Object.keys(P).reduce((L,A)=>[...L,{...P[A],label:A,name:`${T}.${A}`}],[]),"label");return[...u,{actions:D,label:Object.keys(i.controllers)[p],name:T}]},[]),"label"),[s,i]);return e.createElement(O.x,{padding:6},r.map(u=>e.createElement(Ue,{key:u.name,subCategory:u})))};ve.propTypes={name:B().string.isRequired,permissions:B().object.isRequired};const $e=ve;var ue=t(18172);const Ie={collapses:[]},ke=(s,i)=>(0,ue.ZP)(s,r=>{switch(i.type){case"TOGGLE_COLLAPSE":{r.collapses=s.collapses.map((u,P)=>P===i.index?{...u,isOpen:!u.isOpen}:{...u,isOpen:!1});break}default:return r}}),We=()=>{const{modifiedData:s}=W(),{formatMessage:i}=(0,j.Z)(),[{collapses:r},u]=(0,e.useReducer)(ke,Ie,p=>ce(p,s)),P=p=>u({type:"TOGGLE_COLLAPSE",index:p});return e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:1},r.map((p,T)=>e.createElement(V.U,{expanded:p.isOpen,onToggle:()=>P(T),key:p.name,variant:T%2===0?"secondary":void 0},e.createElement(oe.B,{title:le(p.name),description:i({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:p.name}),variant:T%2?"primary":"secondary"}),e.createElement(te.v,null,e.createElement(O.x,null,e.createElement($e,{permissions:s[p.name],name:p.name}))))))};var Ne=t(41609),Fe=t.n(Ne),we=t(82569),Ge=t.n(we),Ke=t(35161),ze=t.n(Ke),He=t(13217),Ve=t.n(He);const Ye=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Xe=(0,ae.ZP)(O.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function me({route:s}){const{formatMessage:i}=(0,j.Z)(),{method:r,handler:u,path:P}=s,p=P?Ve()(P.split("/")):[],[T="",D=""]=u?u.split("."):[],L=Ye(s.method);return e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(x.Z,{variant:"delta",as:"h3"},i({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,T),e.createElement(x.Z,{variant:"delta",textColor:"primary600"},".",D)),e.createElement(f.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Xe,{background:L.background,borderColor:L.border,padding:2},e.createElement(x.Z,{fontWeight:"bold",textColor:L.text},r)),e.createElement(O.x,{paddingLeft:2,paddingRight:2},ze()(p,A=>e.createElement(x.Z,{key:A,textColor:A.includes(":")?"neutral600":"neutral900"},"/",A)))))}me.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},me.propTypes={route:B().shape({handler:B().string,method:B().string,path:B().string})};const Qe=me,Je=()=>{const{formatMessage:s}=(0,j.Z)(),{selectedAction:i,routes:r}=W(),u=Ge()(i.split("."),"controllers"),P=se()(r,u[0]),p=u.slice(1).join("."),T=Fe()(P)?[]:P.filter(D=>D.handler.endsWith(p));return e.createElement(d.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},i?e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},T.map((D,L)=>e.createElement(Qe,{key:L,route:D}))):e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(x.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(x.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},qe=(s,i,r)=>({...s,initialData:i,modifiedData:i,routes:r});var _e=t(36968),ye=t.n(_e),et=t(69572),tt=t.n(et);const nt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},st=(s,i)=>(0,ue.ZP)(s,r=>{switch(i.type){case"ON_CHANGE":{const u=i.keys.length,P=i.keys[u-1]==="enabled";if(i.value&&P){const p=tt()(i.keys,u-1).join(".");r.selectedAction=p}ye()(r,["modifiedData",...i.keys],i.value);break}case"ON_CHANGE_SELECT_ALL":{const u=["modifiedData",...i.keys],P=se()(s,u,{}),p=Object.keys(P).reduce((T,D)=>(T[D]={...P[D],enabled:i.value},T),{});ye()(r,u,p);break}case"ON_RESET":{r.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{r.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:u}=i;r.selectedAction=u===s.selectedAction?"":u;break}default:return r}}),Re=(0,e.forwardRef)(({permissions:s,routes:i},r)=>{const{formatMessage:u}=(0,j.Z)(),[P,p]=(0,e.useReducer)(st,nt,Z=>qe(Z,s,i));(0,e.useImperativeHandle)(r,()=>({getPermissions(){return{permissions:P.modifiedData}},resetForm(){p({type:"ON_RESET"})},setFormAfterSubmit(){p({type:"ON_SUBMIT_SUCCEEDED"})}}));const A={...P,onChange:({target:{name:Z,value:S}})=>p({type:"ON_CHANGE",keys:Z.split("."),value:S==="empty__string_value"?"":S}),onChangeSelectAll:({target:{name:Z,value:S}})=>p({type:"ON_CHANGE_SELECT_ALL",keys:Z.split("."),value:S}),onSelectedAction:Z=>p({type:"SELECT_ACTION",actionToSelect:Z})};return e.createElement(z,{value:A},e.createElement(m.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(d.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(x.Z,{variant:"delta",as:"h2"},u({id:(0,w.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(x.Z,{as:"p",textColor:"neutral600"},u({id:(0,w.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(We,null))),e.createElement(Je,null)))});Re.propTypes={permissions:B().object.isRequired,routes:B().object.isRequired};const Ce=(0,e.memo)(Re);var Y=t(89031);const Kt={isLoading:!0,modifiedData:{}},zt=(s,i)=>produce(s,r=>{switch(i.type){case"GET_DATA":{r.isLoading=!0,r.modifiedData={};break}case"GET_DATA_SUCCEEDED":{r.isLoading=!1,r.modifiedData=i.data;break}case"GET_DATA_ERROR":{r.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{r.modifiedData=i.data;break}default:return r}}),Ht=null,Vt=(s,i)=>{const{isLoading:r,allowedActions:u}=useRBAC(i),[{isLoading:P,modifiedData:p},T]=useReducer(reducer,initialState),D=useNotification(),L=useRef(!0),{get:A}=useFetchClient();useEffect(()=>(r||(async()=>{try{T({type:"GET_DATA"});const{data:v}=await A(getRequestURL(s));T({type:"GET_DATA_SUCCEEDED",data:v})}catch(v){L.current&&(T({type:"GET_DATA_ERROR"}),console.error(v),D({type:"warning",message:{id:"notification.error"}}))}})(),()=>{L.current=!1}),[r,s,A,D]);const Z=useCallback(S=>{T({type:"ON_SUBMIT_SUCCEEDED",data:S})},[]);return{allowedActions:u,dispatchSubmitSucceeded:Z,isLoading:P,isLoadingForPermissions:r,modifiedData:p}},Yt=null,Xt={roles:[],isLoading:!0},Qt=(s,i)=>produce(s,r=>{switch(i.type){case"GET_DATA":{r.isLoading=!0,r.roles=[];break}case"GET_DATA_SUCCEEDED":{r.roles=i.data,r.isLoading=!1;break}case"GET_DATA_ERROR":{r.isLoading=!1;break}default:return r}}),Jt=null,qt=(s=!0)=>{const[{roles:i,isLoading:r},u]=useReducer(reducer,initialState,()=>init(initialState,s)),P=useNotification(),p=useRef(!0),T=useFetchClient(),D=useCallback(async()=>{try{u({type:"GET_DATA"});const{data:{roles:L}}=await T.get(`/${pluginId}/roles`);u({type:"GET_DATA_SUCCEEDED",data:L})}catch(L){const A=get(L,["response","payload","message"],"An error occured");p.current&&(u({type:"GET_DATA_ERROR"}),A!=="Forbidden"&&P({type:"warning",message:A}))}},[T,P]);return useEffect(()=>(s&&D(),()=>{p.current=!1}),[s,D]),{roles:i,isLoading:r,getData:D}},_t=null;var ge=t(88767);const Pe=()=>{const s=(0,n.lm)(),{get:i}=(0,n.kY)(),{formatAPIError:r}=(0,n.So)(Y.OB),[{data:u,isLoading:P,error:p,refetch:T},{data:D,isLoading:L,error:A,refetch:Z}]=(0,ge.useQueries)([{queryKey:[l.Z,"permissions"],async queryFn(){return(await i(`/${l.Z}/permissions`)).data.permissions}},{queryKey:[l.Z,"routes"],async queryFn(){return(await i(`/${l.Z}/routes`)).data.routes}}]),S=async()=>{await Promise.all([T(),Z()])};(0,e.useEffect)(()=>{p&&s({type:"warning",message:r(p)})},[s,p,r]),(0,e.useEffect)(()=>{A&&s({type:"warning",message:r(A)})},[s,A,r]);const v=P||L;return{permissions:u?(0,Y.YX)(u):{},routes:D??{},getData:S,isLoading:v}},at={role:{},isLoading:!0},rt=(s,i)=>(0,ue.ZP)(s,r=>{switch(i.type){case"GET_DATA_SUCCEEDED":{r.role=i.role,r.isLoading=!1;break}case"GET_DATA_ERROR":{r.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{r.role.name=i.name,r.role.description=i.description;break}default:return r}}),ot=s=>{const[i,r]=(0,e.useReducer)(rt,at),u=(0,n.lm)(),P=(0,e.useRef)(null),{get:p}=(0,n.kY)();(0,e.useEffect)(()=>(P.current=!0,s?T(s):r({type:"GET_DATA_SUCCEEDED",role:{}}),()=>P.current=!1),[s]);const T=async L=>{try{const{data:{role:A}}=await p(`/${l.Z}/roles/${L}`);P.current&&r({type:"GET_DATA_SUCCEEDED",role:A})}catch(A){console.error(A),r({type:"GET_DATA_ERROR"}),u({type:"warning",message:{id:"notification.error"}})}},D=(0,e.useCallback)(L=>{r({type:"ON_SUBMIT_SUCCEEDED",...L})},[]);return{...i,onSubmitSucceeded:D}};var pe=t(87561);const Ae=pe.Ry().shape({name:pe.Z_().required(n.I0.required),description:pe.Z_().required(n.I0.required)}),it=()=>{const{formatMessage:s}=(0,j.Z)(),[i,r]=(0,e.useState)(!1),u=(0,n.lm)(),{goBack:P}=(0,a.k6)(),{lockApp:p,unlockApp:T}=(0,n.o1)(),{isLoading:D,permissions:L,routes:A}=Pe(),{trackUsage:Z}=(0,n.rS)(),S=(0,e.useRef)(),{post:v}=(0,n.kY)(),N=async G=>{p(),r(!0);try{const k=S.current.getPermissions();await v(`/${l.Z}/roles`,{...G,...k,users:[]}),Z("didCreateRole"),u({type:"success",message:{id:(0,w.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),P()}catch(k){console.error(k),u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}r(!1),T()};return e.createElement(g.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(U.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:N,validationSchema:Ae},({handleSubmit:G,values:k,handleChange:F,errors:K})=>e.createElement(n.l0,{noValidate:!0,onSubmit:G},e.createElement(c.T,{primaryAction:!D&&e.createElement(y.z,{type:"submit",loading:i,startIcon:e.createElement(b.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(M.D,null,e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(x.Z,{variant:"delta",as:"h2"},s({id:(0,w.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(m.r,{gap:4},e.createElement(d.P,{col:6},e.createElement(R.o,{name:"name",value:k.name||"",onChange:F,label:s({id:"global.name",defaultMessage:"Name"}),error:K.name?s({id:K.name,defaultMessage:"Invalid value"}):null})),e.createElement(d.P,{col:6},e.createElement(C.g,{id:"description",value:k.description||"",onChange:F,label:s({id:"global.description",defaultMessage:"Description"}),error:K.description?s({id:K.description,defaultMessage:"Invalid value"}):null}))))),!D&&e.createElement(Ce,{ref:S,permissions:L,routes:A}))))))},lt=()=>e.createElement(n.O4,{permissions:o._.createRole},e.createElement(it,null));var ct=t(67109);const dt=()=>{const{formatMessage:s}=(0,j.Z)(),[i,r]=(0,e.useState)(!1),u=(0,n.lm)(),{lockApp:P,unlockApp:p}=(0,n.o1)(),{params:{id:T}}=(0,a.$B)(`/settings/${l.Z}/roles/:id`),{isLoading:D,routes:L}=Pe(),{role:A,onSubmitSucceeded:Z,isLoading:S}=ot(T),v=(0,e.useRef)(),{put:N}=(0,n.kY)(),G=async k=>{P(),r(!0);try{const F=v.current.getPermissions();await N(`/${l.Z}/roles/${T}`,{...k,...F,users:[]}),Z({name:k.name,description:k.description}),u({type:"success",message:{id:(0,w.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(F){console.error(F),u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}r(!1),p()};return S?e.createElement(n.dO,null):e.createElement(g.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(U.J9,{enableReinitialize:!0,initialValues:{name:A.name,description:A.description},onSubmit:G,validationSchema:Ae},({handleSubmit:k,values:F,handleChange:K,errors:X})=>e.createElement(n.l0,{noValidate:!0,onSubmit:k},e.createElement(c.T,{primaryAction:!D&&e.createElement(y.z,{disabled:A.code==="strapi-super-admin",type:"submit",loading:i,startIcon:e.createElement(b.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:A.name,subtitle:A.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(ct.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(M.D,null,e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(x.Z,{variant:"delta",as:"h2"},s({id:(0,w.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(m.r,{gap:4},e.createElement(d.P,{col:6},e.createElement(R.o,{name:"name",value:F.name||"",onChange:K,label:s({id:"global.name",defaultMessage:"Name"}),error:X.name?s({id:X.name,defaultMessage:"Invalid value"}):null})),e.createElement(d.P,{col:6},e.createElement(C.g,{id:"description",value:F.description||"",onChange:K,label:s({id:"global.description",defaultMessage:"Description"}),error:X.description?s({id:X.description,defaultMessage:"Invalid value"}):null}))))),!D&&e.createElement(Ce,{ref:v,permissions:A.permissions,routes:L}))))))},ut=()=>e.createElement(n.O4,{permissions:o._.updateRole},e.createElement(dt,null));var mt=t(14087),gt=t(17034),pt=t(36989),ht=t(38939),Et=t(8060),Te=t(79031),H=t(37909),ft=t(96315),xt=t(15234),De=t(12028),vt=t(4585),yt=t(20022);const he=({sortedRoles:s,canDelete:i,permissions:r,setRoleToDelete:u,onDelete:P})=>{const{formatMessage:p}=(0,j.Z)(),{push:T}=(0,a.k6)(),[D,L]=P,A=v=>i&&!["public","authenticated"].includes(v.type),Z=v=>{u(v),L(!D)},S=v=>{T(`/settings/${l.Z}/roles/${v}`)};return e.createElement(xt.p,null,s?.map(v=>e.createElement(Te.Tr,{key:v.name,...(0,n.X7)({fn:()=>S(v.id)})},e.createElement(H.Td,{width:"20%"},e.createElement(x.Z,null,v.name)),e.createElement(H.Td,{width:"50%"},e.createElement(x.Z,null,v.description)),e.createElement(H.Td,{width:"30%"},e.createElement(x.Z,null,`${v.nb_users} ${p({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(H.Td,null,e.createElement(f.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:r.updateRole},e.createElement(De.h,{onClick:()=>S(v.id),noBorder:!0,icon:e.createElement(vt.Z,null),label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${v.name}`})})),A(v)&&e.createElement(n.jW,{permissions:r.deleteRole},e.createElement(De.h,{onClick:()=>Z(v.id),noBorder:!0,icon:e.createElement(yt.Z,null),label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${v.name}`})})))))))},Rt=he;he.defaultProps={canDelete:!1},he.propTypes={onDelete:B().array.isRequired,permissions:B().object.isRequired,setRoleToDelete:B().func.isRequired,sortedRoles:B().array.isRequired,canDelete:B().bool};const Ct=async(s,i)=>{try{const{get:r}=(0,n.tg)(),{data:u}=await r((0,Y.Gc)("roles"));return i("The roles have loaded successfully"),u}catch(r){throw s({type:"warning",message:{id:"notification.error"}}),new Error(r)}},Pt=async(s,i)=>{try{const{del:r}=(0,n.tg)();await r(`${(0,Y.Gc)("roles")}/${s}`)}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},At=()=>{const{trackUsage:s}=(0,n.rS)(),{formatMessage:i,locale:r}=(0,j.Z)(),{push:u}=(0,a.k6)(),P=(0,n.lm)(),{notifyStatus:p}=(0,mt.G)(),[{query:T}]=(0,n.Kx)(),D=T?._q||"",[L,A]=(0,e.useState)(!1),[Z,S]=(0,e.useState)(!1),[v,N]=(0,e.useState)();(0,n.go)();const{isLoading:G,allowedActions:{canRead:k,canDelete:F}}=(0,n.ss)({create:o._.createRole,read:o._.readRoles,update:o._.updateRole,delete:o._.deleteRole}),{isLoading:K,data:{roles:X},isFetching:Mt,refetch:bt}=(0,ge.useQuery)("get-roles",()=>Ct(P,p),{initialData:{},enabled:k}),{includes:Me}=(0,n.L0)(r,{sensitivity:"base"}),be=(0,n.Xe)(r,{sensitivity:"base"}),Le=K||Mt,Lt=()=>{s("willCreateRole"),u(`/settings/${l.Z}/roles/new`)},Ot=()=>{A(!L)},jt={roles:{id:(0,Y.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,Y.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Bt=i({id:"global.roles",defaultMessage:"Roles"}),St=(0,ge.useMutation)(Q=>Pt(Q,P),{async onSuccess(){await bt()}}),Zt=async()=>{S(!0),await St.mutateAsync(v),A(!L),S(!1)},re=(X||[]).filter(Q=>Me(Q.name,D)||Me(Q.description,D)).sort((Q,Oe)=>be.compare(Q.name,Oe.name)||be.compare(Q.description,Oe.description)),Ut=D&&!re.length?"search":"roles",$t=4,It=(X?.length||0)+1;return e.createElement(gt.A,null,e.createElement(n.SL,{name:Bt}),e.createElement(g.o,{"aria-busy":Le},e.createElement(c.T,{title:i({id:"global.roles",defaultMessage:"Roles"}),subtitle:i({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:o._.createRole},e.createElement(y.z,{onClick:Lt,startIcon:e.createElement(ft.Z,null),size:"S"},i({id:(0,Y.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(pt.Z,{startActions:e.createElement(n.m,{label:i({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(M.D,null,!k&&e.createElement(n.ZF,null),(Le||G)&&e.createElement(n.dO,null),k&&re&&re?.length?e.createElement(ht.i,{colCount:$t,rowCount:It},e.createElement(Et.h,null,e.createElement(Te.Tr,null,e.createElement(H.Th,null,e.createElement(x.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(H.Th,null,e.createElement(x.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.description",defaultMessage:"Description"}))),e.createElement(H.Th,null,e.createElement(x.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.users",defaultMessage:"Users"}))),e.createElement(H.Th,null,e.createElement(ee.T,null,i({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(Rt,{sortedRoles:re,canDelete:F,permissions:o._,setRoleToDelete:N,onDelete:[L,A]})):e.createElement(n.x7,{content:jt[Ut]})),e.createElement(n.QH,{isConfirmButtonLoading:Z,onConfirm:Zt,onToggleDialog:Ot,isOpen:L})))},Tt=()=>e.createElement(n.O4,{permissions:o._.accessRoles},e.createElement(At,null)),Dt=()=>e.createElement(n.O4,{permissions:o._.accessRoles},e.createElement(a.rs,null,e.createElement(a.AW,{path:`/settings/${l.Z}/roles/new`,component:lt,exact:!0}),e.createElement(a.AW,{path:`/settings/${l.Z}/roles/:id`,component:ut,exact:!0}),e.createElement(a.AW,{path:`/settings/${l.Z}/roles`,component:Tt,exact:!0}),e.createElement(a.AW,{path:"",component:n.Hn})))},89031:(h,E,t)=>{"use strict";t.d(E,{YX:()=>o,Gc:()=>c,OB:()=>y.Z});var e=t(41609),n=t.n(e);const o=M=>Object.keys(M).reduce((f,O)=>{const x=M[O].controllers,m=Object.keys(x).reduce((d,R)=>(n()(x[R])||(d[R]=x[R]),d),{});return n()(m)||(f[O]={controllers:m}),f},{});var l=t(31498);const c=M=>`/${l.Z}/${M}`;var y=t(84757)},47443:(h,E,t)=>{var e=t(42118);function n(a,o){var l=a==null?0:a.length;return!!l&&e(a,o,0)>-1}h.exports=n},1196:h=>{function E(t,e,n){for(var a=-1,o=t==null?0:t.length;++a<o;)if(n(e,t[a]))return!0;return!1}h.exports=E},20731:(h,E,t)=>{var e=t(88668),n=t(47443),a=t(1196),o=t(29932),l=t(7518),g=t(74757),c=200;function y(M,f,O,x){var m=-1,d=n,R=!0,C=M.length,b=[],U=f.length;if(!C)return b;O&&(f=o(f,l(O))),x?(d=a,R=!1):f.length>=c&&(d=g,R=!1,f=new e(f));e:for(;++m<C;){var j=M[m],I=O==null?j:O(j);if(j=x||j!==0?j:0,R&&I===I){for(var B=U;B--;)if(f[B]===I)continue e;b.push(j)}else d(f,I,x)||b.push(j)}return b}h.exports=y},89881:(h,E,t)=>{var e=t(47816),n=t(99291),a=n(e);h.exports=a},41848:h=>{function E(t,e,n,a){for(var o=t.length,l=n+(a?1:-1);a?l--:++l<o;)if(e(t[l],l,t))return l;return-1}h.exports=E},42118:(h,E,t)=>{var e=t(41848),n=t(62722),a=t(42351);function o(l,g,c){return g===g?a(l,g,c):e(l,n,c)}h.exports=o},62722:h=>{function E(t){return t!==t}h.exports=E},69199:(h,E,t)=>{var e=t(89881),n=t(98612);function a(o,l){var g=-1,c=n(o)?Array(o.length):[];return e(o,function(y,M,f){c[++g]=l(y,M,f)}),c}h.exports=a},82689:(h,E,t)=>{var e=t(29932),n=t(97786),a=t(67206),o=t(69199),l=t(71131),g=t(7518),c=t(85022),y=t(6557),M=t(1469);function f(O,x,m){x.length?x=e(x,function(C){return M(C)?function(b){return n(b,C.length===1?C[0]:C)}:C}):x=[y];var d=-1;x=e(x,g(a));var R=o(O,function(C,b,U){var j=e(x,function(I){return I(C)});return{criteria:j,index:++d,value:C}});return l(R,function(C,b){return c(C,b,m)})}h.exports=f},71131:h=>{function E(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}h.exports=E},26393:(h,E,t)=>{var e=t(33448);function n(a,o){if(a!==o){var l=a!==void 0,g=a===null,c=a===a,y=e(a),M=o!==void 0,f=o===null,O=o===o,x=e(o);if(!f&&!x&&!y&&a>o||y&&M&&O&&!f&&!x||g&&M&&O||!l&&O||!c)return 1;if(!g&&!y&&!x&&a<o||x&&l&&c&&!g&&!y||f&&l&&c||!M&&c||!O)return-1}return 0}h.exports=n},85022:(h,E,t)=>{var e=t(26393);function n(a,o,l){for(var g=-1,c=a.criteria,y=o.criteria,M=c.length,f=l.length;++g<M;){var O=e(c[g],y[g]);if(O){if(g>=f)return O;var x=l[g];return O*(x=="desc"?-1:1)}}return a.index-o.index}h.exports=n},99291:(h,E,t)=>{var e=t(98612);function n(a,o){return function(l,g){if(l==null)return l;if(!e(l))return a(l,g);for(var c=l.length,y=o?c:-1,M=Object(l);(o?y--:++y<c)&&g(M[y],y,M)!==!1;);return l}}h.exports=n},42351:h=>{function E(t,e,n){for(var a=n-1,o=t.length;++a<o;)if(t[a]===e)return a;return-1}h.exports=E},35161:(h,E,t)=>{var e=t(29932),n=t(67206),a=t(69199),o=t(1469);function l(g,c){var y=o(g)?e:a;return y(g,n(c,3))}h.exports=l},89734:(h,E,t)=>{var e=t(21078),n=t(82689),a=t(5976),o=t(16612),l=a(function(g,c){if(g==null)return[];var y=c.length;return y>1&&o(g,c[0],c[1])?c=[]:y>2&&o(c[0],c[1],c[2])&&(c=[c[0]]),n(g,e(c,1),[])});h.exports=l},13217:(h,E,t)=>{var e=t(14259);function n(a){var o=a==null?0:a.length;return o?e(a,1,o):[]}h.exports=n},69572:(h,E,t)=>{var e=t(14259),n=t(40554);function a(o,l,g){return o&&o.length?(l=g||l===void 0?1:n(l),e(o,0,l<0?0:l)):[]}h.exports=a},82569:(h,E,t)=>{var e=t(20731),n=t(5976),a=t(29246),o=n(function(l,g){return a(l)?e(l,g):[]});h.exports=o},48734:(h,E,t)=>{"use strict";t.d(E,{U:()=>x,y:()=>f});var e=t(85893),n=t(67294),a=t(71997),o=t(13819),l=t(2504),g=t(75515),c=t(11047),y=t(41580);const M=({theme:m,expanded:d,variant:R,disabled:C,error:b})=>b?`1px solid ${m.colors.danger600} !important`:C?`1px solid ${m.colors.neutral150}`:d?`1px solid ${m.colors.primary600}`:R==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,f=(0,a.ZP)(g.Z)``,O=(0,a.ZP)(y.x)`
  border: ${M};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${f} {
      color: ${({theme:m,expanded:d})=>d?void 0:m.colors.primary700};
    }

    ${g.Z} {
      color: ${({theme:m,expanded:d})=>d?void 0:m.colors.primary600};
    }

    & > ${c.k} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,x=({children:m,disabled:d=!1,error:R,expanded:C=!1,hasErrorMessage:b=!0,id:U,onToggle:j,toggle:I,size:B="M",variant:$="primary",shadow:z})=>{const W=(0,l.M)(U),w=n.useMemo(()=>({expanded:C,onToggle:j,toggle:I,id:W,size:B,variant:$,disabled:d}),[d,C,W,j,B,I,$]);return(0,e.jsxs)(o.S.Provider,{value:w,children:[(0,e.jsx)(O,{"data-strapi-expanded":C,disabled:d,"aria-disabled":d,expanded:C,hasRadius:!0,variant:$,error:R,shadow:z,children:m}),R&&b&&(0,e.jsx)(y.x,{paddingTop:1,children:(0,e.jsx)(g.Z,{variant:"pi",textColor:"danger600",children:R})})]})}},63081:(h,E,t)=>{"use strict";t.d(E,{v:()=>o});var e=t(85893),n=t(13819),a=t(41580);const o=({children:l,...g})=>{const{expanded:c,id:y}=(0,n.A)();if(!c)return null;const M=`accordion-content-${y}`,f=`accordion-label-${y}`,O=`accordion-desc-${y}`;return(0,e.jsx)(a.x,{role:"region",id:M,"aria-labelledby":f,"aria-describedby":O,...g,children:l})}},13819:(h,E,t)=>{"use strict";t.d(E,{A:()=>a,S:()=>n});var e=t(67294);const n=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),a=()=>(0,e.useContext)(n)},74756:(h,E,t)=>{"use strict";t.d(E,{B:()=>m});var e=t(85893),n=t(12645),a=t(71997),o=t(48734),l=t(13819);const g=({expanded:d,disabled:R,variant:C})=>{let b="neutral100";return d?b="primary100":R?b="neutral150":C==="primary"&&(b="neutral0"),b};var c=t(39785),y=t(52624),M=t(11047),f=t(75515);const O=(0,a.ZP)(c.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:d,expanded:R})=>R?d.colors.primary600:d.colors.neutral500};
    }
  }
`,x=(0,a.ZP)(M.k)`
  min-height: ${({theme:d,size:R})=>d.sizes.accordions[R]};
  border-radius: ${({theme:d,expanded:R})=>R?`${d.borderRadius} ${d.borderRadius} 0 0`:d.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:d})=>d.colors.primary600};
      }
    }
  }
`,m=({title:d,description:R,as:C="span",togglePosition:b="right",action:U,...j})=>{const{onToggle:I,toggle:B,expanded:$,id:z,size:W,variant:w,disabled:V}=(0,l.A)(),oe=`accordion-content-${z}`,te=`accordion-label-${z}`,ie=`accordion-desc-${z}`,J=W==="M"?6:4,ne=W==="M"?J:J-2,le=g({expanded:$,disabled:V,variant:w}),Ee={as:C,fontWeight:W==="S"?"bold":void 0,id:te,textColor:$?"primary600":"neutral700",ellipsis:!0,variant:W==="M"?"delta":void 0},ce=$?"primary600":"neutral600",de=$?"primary200":"neutral200",q=W==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{V||(B&&!I?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),B()):I&&I())},ee=(0,e.jsx)(M.k,{justifyContent:"center",borderRadius:"50%",height:q,width:q,transform:$?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:de,cursor:V?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(y.J,{as:n.Z,width:W==="M"?`${11/16}rem`:`${8/16}rem`,color:$?"primary600":"neutral600"})});return(0,e.jsx)(x,{paddingBottom:ne,paddingLeft:J,paddingRight:J,paddingTop:ne,background:le,expanded:$,size:W,justifyContent:"space-between",cursor:V?"not-allowed":"",children:(0,e.jsxs)(M.k,{gap:3,flex:1,maxWidth:"100%",children:[b==="left"&&ee,(0,e.jsx)(O,{onClick:_,"aria-disabled":V,"aria-expanded":$,"aria-controls":oe,"aria-labelledby":te,"data-strapi-accordion-toggle":!0,expanded:$,type:"button",flex:1,minWidth:0,...j,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.y,{...Ee,children:d}),R&&(0,e.jsx)(f.Z,{as:"p",id:ie,textColor:ce,children:R})]})}),b==="right"&&(0,e.jsxs)(M.k,{gap:3,children:[ee,U]}),b==="left"&&U]})})}},36989:(h,E,t)=>{"use strict";t.d(E,{Z:()=>a});var e=t(85893),n=t(11047);const a=({startActions:o,endActions:l})=>!o&&!l?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:o}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},49066:(h,E,t)=>{"use strict";t.d(E,{D:()=>a});var e=t(85893),n=t(41580);const a=({children:o})=>(0,e.jsx)(n.x,{paddingLeft:10,paddingRight:10,children:o})},53979:(h,E,t)=>{"use strict";t.d(E,{T:()=>f});var e=t(85893),n=t(67294),a=t(71997);const o=m=>{const d=(0,n.useRef)(null),[R,C]=(0,n.useState)(!0),b=([U])=>{C(U.isIntersecting)};return(0,n.useEffect)(()=>{const U=d.current,j=new IntersectionObserver(b,m);return U&&j.observe(d.current),()=>{U&&j.disconnect()}},[d,m]),[d,R]};var l=t(79698);const g=(m,d)=>{const R=(0,l.W)(d);(0,n.useLayoutEffect)(()=>{const C=new ResizeObserver(R);return Array.isArray(m)?m.forEach(b=>{b.current&&C.observe(b.current)}):m.current&&C.observe(m.current),()=>{C.disconnect()}},[m,R])};var c=t(41580),y=t(11047),M=t(75515);const f=m=>{const d=(0,n.useRef)(null),[R,C]=(0,n.useState)(null),[b,U]=o({root:null,rootMargin:"0px",threshold:0});return g(b,()=>{b.current&&C(b.current.getBoundingClientRect())}),(0,n.useEffect)(()=>{d.current&&C(d.current.getBoundingClientRect())},[d]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:R?.height},ref:b,children:U&&(0,e.jsx)(x,{ref:d,...m})}),!U&&(0,e.jsx)(x,{...m,sticky:!0,width:R?.width})]})};f.displayName="HeaderLayout";const O=(0,a.ZP)(c.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,x=n.forwardRef(({navigationAction:m,primaryAction:d,secondaryAction:R,subtitle:C,title:b,sticky:U,width:j,...I},B)=>{const $=typeof C=="string";return U?(0,e.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(y.k,{justifyContent:"space-between",children:[(0,e.jsxs)(y.k,{children:[m&&(0,e.jsx)(c.x,{paddingRight:3,children:m}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(M.Z,{variant:"beta",as:"h1",...I,children:b}),$?(0,e.jsx)(M.Z,{variant:"pi",textColor:"neutral600",children:C}):C]}),R?(0,e.jsx)(c.x,{paddingLeft:4,children:R}):null]}),(0,e.jsx)(y.k,{children:d?(0,e.jsx)(c.x,{paddingLeft:2,children:d}):void 0})]})}):(0,e.jsxs)(c.x,{ref:B,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,e.jsx)(c.x,{paddingBottom:2,children:m}):null,(0,e.jsxs)(y.k,{justifyContent:"space-between",children:[(0,e.jsxs)(y.k,{minWidth:0,children:[(0,e.jsx)(M.Z,{as:"h1",variant:"alpha",...I,children:b}),R?(0,e.jsx)(c.x,{paddingLeft:4,children:R}):null]}),d]}),$?(0,e.jsx)(M.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:C}):C]})})},17034:(h,E,t)=>{"use strict";t.d(E,{A:()=>g});var e=t(85893),n=t(71997),a=t(41580);const o=(0,n.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:c})=>c?"auto 1fr":"1fr"};
`,l=(0,n.ZP)(a.x)`
  overflow-x: hidden;
`,g=({sideNav:c,children:y})=>(0,e.jsxs)(o,{hasSideNav:!!c,children:[c,(0,e.jsx)(l,{paddingBottom:10,children:y})]})},185:(h,E,t)=>{"use strict";t.d(E,{o:()=>l});var e=t(85893),n=t(71997),a=t(41580);const o=(0,n.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:g="main-content-title",...c})=>(0,e.jsx)(o,{"aria-labelledby":g,as:"main",id:"main-content",tabIndex:-1,...c})},67109:(h,E,t)=>{"use strict";t.d(E,{Z:()=>a});var e=t(85893);const n=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=n},78114:(h,E,t)=>{"use strict";t.d(E,{Z:()=>a});var e=t(85893);const n=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=n}}]);
