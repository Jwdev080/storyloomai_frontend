import{a5 as $,r as v,a as b,g as C,s as h,_ as d,w as c,u as E,c as y,j as g,i as R}from"./index-8686e58b.js";import{B as j}from"./Button-970e09f3.js";import{u as M}from"./Menu-8dcff58f.js";import{C as W}from"./Snackbar-cf720369.js";function J(){const n=$();return v.useMemo(()=>({back:()=>n(-1),forward:()=>n(1),reload:()=>window.location.reload(),push:i=>n(i),replace:i=>n(i,{replace:!0})}),[n])}function z(n){return C("MuiLoadingButton",n)}const U=b("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),t=U,_=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],k=n=>{const{loading:o,loadingPosition:i,classes:a}=n,r={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${c(i)}`],endIcon:[o&&`endIconLoading${c(i)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${c(i)}`]},l=R(r,z,a);return d({},a,l)},F=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",N=h(j,{shouldForwardProp:n=>F(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${t.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${t.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${t.startIconLoadingStart}, & .${t.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${t.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${t.startIconLoadingStart}, & .${t.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${t.startIconLoadingStart}, & .${t.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),T=h("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.loadingIndicator,o[`loadingIndicator${c(i.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),q=v.forwardRef(function(o,i){const a=E({props:o,name:"MuiLoadingButton"}),{children:r,disabled:l=!1,id:B,loading:e=!1,loadingIndicator:u,loadingPosition:m="center",variant:I="text"}=a,x=y(a,_),L=M(B),p=u??g.jsx(W,{"aria-labelledby":L,color:"inherit",size:16}),s=d({},a,{disabled:l,loading:e,loadingIndicator:p,loadingPosition:m,variant:I}),f=k(s),P=e?g.jsx(T,{className:f.loadingIndicator,ownerState:s,children:p}):null;return g.jsxs(N,d({disabled:l||e,id:L,ref:i},x,{variant:I,classes:f,ownerState:s,children:[s.loadingPosition==="end"?r:P,s.loadingPosition==="end"?P:r]}))}),K=q;export{K as L,J as u};
