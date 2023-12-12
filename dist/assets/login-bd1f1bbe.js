import{a5 as I,k as L,b as A,r as o,j as e,S as n,I as D,G as r,H as f,B as F,a6 as P,y as a,a7 as W,T as h,a8 as B,R as E,a9 as R,W as z}from"./index-8686e58b.js";import{u as T,L as G}from"./LoadingButton-37eb4e37.js";import{S as H,M}from"./Snackbar-cf720369.js";import{T as j}from"./TextField-ecf26576.js";import{I as O}from"./InputAdornment-44c93101.js";import{C as U}from"./Menu-8dcff58f.js";import{B as u}from"./Button-970e09f3.js";import"./Select-f7b2a74e.js";import"./isMuiElement-ba21ed0b.js";const N=E.forwardRef(function(l,t){return e.jsx(M,{elevation:6,ref:t,variant:"filled",...l})});function V(){const i=I(),l=L(),t=A();T();const[p,v]=o.useState(""),[g,y]=o.useState(""),[c,w]=o.useState(!1),[d,x]=o.useState({open:!1,text:""}),C=()=>{p===""||g===""?x({open:!0,text:"Please input all data"}):l(R({email:p,password:g})).then(k=>{k.payload.success?i("/overview"):x({open:!0,text:"Wrong Credintial"})})},m=()=>{x({...d,open:!1})};function b(){i("/register")}const S=e.jsxs(e.Fragment,{children:[e.jsx(H,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:d.open,autoHideDuration:6e3,onClose:m,children:e.jsx(N,{onClose:m,severity:"warning",sx:{width:"100%"},children:d.text})}),e.jsxs(n,{spacing:3,children:[e.jsx(j,{name:"email",label:"Email",onChange:s=>v(s.target.value)}),e.jsx(j,{name:"password",label:"Password",type:c?"text":"password",onChange:s=>{y(s.target.value)},InputProps:{endAdornment:e.jsx(O,{position:"end",children:e.jsx(D,{onClick:()=>w(!c),edge:"end",children:e.jsx(r,{icon:c?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),e.jsx(n,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:e.jsx(f,{variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),e.jsx(G,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:C,children:"Login"})]});return e.jsxs(F,{sx:{...P({color:a(t.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(W,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24},width:"300px",height:"300px"}}),e.jsx(n,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(U,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(h,{variant:"h4",children:"Sign in Stroy Loom AI"}),e.jsxs(h,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",e.jsx(f,{variant:"subtitle2",sx:{ml:.5},onClick:()=>b(),children:"Get started"})]}),e.jsxs(n,{direction:"row",spacing:2,children:[e.jsx(u,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:a(t.palette.grey[500],.16)},children:e.jsx(r,{icon:"eva:google-fill",color:"#DF3E30"})}),e.jsx(u,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:a(t.palette.grey[500],.16)},children:e.jsx(r,{icon:"eva:facebook-fill",color:"#1877F2"})}),e.jsx(u,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:a(t.palette.grey[500],.16)},children:e.jsx(r,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]}),e.jsx(B,{sx:{my:3},children:e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),S]})})]})}function ee(){return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx("title",{children:" Sign In | Story Loom AI "})}),e.jsx(V,{})]})}export{ee as default};
