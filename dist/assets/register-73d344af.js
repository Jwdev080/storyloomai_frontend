import{a5 as R,k as A,b as P,r as a,j as e,B as D,a6 as E,y as n,a7 as L,S as o,T as x,H as B,G as r,a8 as F,R as W,I as z,aa as T,W as U}from"./index-8686e58b.js";import{u as N,L as G}from"./LoadingButton-37eb4e37.js";import{S as H,M}from"./Snackbar-cf720369.js";import{C as O}from"./Menu-8dcff58f.js";import{B as h}from"./Button-970e09f3.js";import{T as u}from"./TextField-ecf26576.js";import{I as V}from"./InputAdornment-44c93101.js";import"./Select-f7b2a74e.js";import"./isMuiElement-ba21ed0b.js";const _=W.forwardRef(function(l,s){return e.jsx(M,{elevation:6,ref:s,variant:"filled",...l})});function q(){const i=R(),l=A(),s=P();N();const[m,v]=a.useState(""),[g,y]=a.useState(""),[p,C]=a.useState(""),[c,b]=a.useState(!1),w=()=>{if(m===""||g===""||p==="")d({open:!0,text:"Please input all data"});else{let t=l(T({name:m,email:g,password:p}));console.log(t),t.then(I=>{I.payload.success?i("/login"):d({open:!0,text:"Email is already exist"})})}};function S(){i("/login")}const[f,d]=a.useState({open:!1,text:""}),j=()=>{d({open:!1,text:"Please input all data"})},k=e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:3,children:[e.jsx(u,{name:"name",label:"Name",onChange:t=>v(t.target.value)}),e.jsx(u,{name:"email",label:"Email",onChange:t=>y(t.target.value)}),e.jsx(u,{name:"password",label:"Password",type:c?"text":"password",onChange:t=>{C(t.target.value)},InputProps:{endAdornment:e.jsx(V,{position:"end",children:e.jsx(z,{onClick:()=>b(!c),edge:"end",children:e.jsx(r,{icon:c?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),e.jsx(o,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3}}),e.jsx(G,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:w,children:"Register"})]});return e.jsxs(D,{sx:{...E({color:n(s.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(L,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24},width:"300px",height:"300px"}}),e.jsx(H,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:f.open,autoHideDuration:6e3,onClose:j,children:e.jsx(_,{onClose:j,severity:"warning",sx:{width:"100%"},children:f.text})}),e.jsx(o,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(O,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(x,{variant:"h4",children:"Sign Up Stroy Loom AI"}),e.jsxs(x,{variant:"body2",sx:{mt:2,mb:5},children:["Do have an account?",e.jsx(B,{variant:"subtitle2",sx:{ml:.5},onClick:()=>S(),children:"Sign In"})]}),e.jsxs(o,{direction:"row",spacing:2,children:[e.jsx(h,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:n(s.palette.grey[500],.16)},children:e.jsx(r,{icon:"eva:google-fill",color:"#DF3E30"})}),e.jsx(h,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:n(s.palette.grey[500],.16)},children:e.jsx(r,{icon:"eva:facebook-fill",color:"#1877F2"})}),e.jsx(h,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:n(s.palette.grey[500],.16)},children:e.jsx(r,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]}),e.jsx(F,{sx:{my:3},children:e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),k]})})]})}function se(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Sign Up | Story Loom AI "})}),e.jsx(q,{})]})}export{se as default};