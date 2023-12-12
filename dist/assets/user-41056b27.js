import{x as ce,j as t,a as O,g as z,s as w,_ as l,w as U,y as Z,r as c,u as D,c as F,b as Lo,q as pt,N as dt,z as ut,d as $,O as lo,Q as xe,i as E,U as gt,V as mt,I as Y,X as ko,M as Ue,Y as ht,A as ft,P as bt,T as le,K as b,S as No,F as xt,G as J,Z as vt,B as Tt,$ as yt,W as Ct}from"./index-8686e58b.js";import{l as co,C as Ao,L as wt}from"./label-ad697597.js";import{f as ve}from"./index-e5f22473.js";import{S as Pt,I as Rt,O as jt}from"./Select-f7b2a74e.js";import{I as $t}from"./InputAdornment-44c93101.js";import{P as Bo}from"./Popper-10583b54.js";import{a as St,u as Fe,C as Mt}from"./Menu-8dcff58f.js";import{C as It}from"./Container-bae2f028.js";import{B as Lt}from"./Button-970e09f3.js";const po=ce(t.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),uo=ce(t.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");function kt(e){return z("MuiTooltip",e)}const Nt=O("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),V=Nt,At=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Bt(e){return Math.round(e*1e5)/1e5}const _t=e=>{const{classes:o,disableInteractive:n,arrow:s,touch:r,placement:i}=e,p={popper:["popper",!n&&"popperInteractive",s&&"popperArrow"],tooltip:["tooltip",s&&"tooltipArrow",r&&"touch",`tooltipPlacement${U(i.split("-")[0])}`],arrow:["arrow"]};return E(p,kt,o)},Ut=w(Bo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.popper,!n.disableInteractive&&o.popperInteractive,n.arrow&&o.popperArrow,!n.open&&o.popperClose]}})(({theme:e,ownerState:o,open:n})=>l({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${V.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${V.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${V.arrow}`]:l({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${V.arrow}`]:l({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ft=w("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.tooltip,n.touch&&o.touch,n.arrow&&o.tooltipArrow,o[`tooltipPlacement${U(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:o})=>l({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Z(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Bt(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${V.popper}[data-popper-placement*="left"] &`]:l({transformOrigin:"right center"},o.isRtl?l({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):l({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${V.popper}[data-popper-placement*="right"] &`]:l({transformOrigin:"left center"},o.isRtl?l({marginRight:"14px"},o.touch&&{marginRight:"24px"}):l({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${V.popper}[data-popper-placement*="top"] &`]:l({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${V.popper}[data-popper-placement*="bottom"] &`]:l({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),Ht=w("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Z(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Te=!1,Be=null,re={x:0,y:0};function ye(e,o){return n=>{o&&o(n),e(n)}}const Ot=c.forwardRef(function(o,n){var s,r,i,p,d,a,g,m,f,P,x,L,N,y,C,v,R,h,T;const S=D({props:o,name:"MuiTooltip"}),{arrow:j=!1,children:M,components:K={},componentsProps:_={},describeChild:Pe=!1,disableFocusListener:pe=!1,disableHoverListener:de=!1,disableInteractive:A=!1,disableTouchListener:Do=!1,enterDelay:He=100,enterNextDelay:Oe=0,enterTouchDelay:Eo=700,followCursor:Re=!1,id:Wo,leaveDelay:ze=0,leaveTouchDelay:Vo=1500,onClose:De,onOpen:Ee,open:Ko,placement:We="bottom",PopperComponent:je,PopperProps:q={},slotProps:X={},slots:ue={},title:Q,TransitionComponent:qo=lo,TransitionProps:Xo}=S,Ve=F(S,At),W=c.isValidElement(M)?M:t.jsx("span",{children:M}),$e=Lo(),Go=$e.direction==="rtl",[ee,Ke]=c.useState(),[Se,Yo]=c.useState(null),ge=c.useRef(!1),Me=A||Re,me=c.useRef(),he=c.useRef(),G=c.useRef(),qe=c.useRef(),[Jo,Xe]=St({controlled:Ko,default:!1,name:"Tooltip",state:"open"});let H=Jo;const Ie=Fe(Wo),oe=c.useRef(),fe=c.useCallback(()=>{oe.current!==void 0&&(document.body.style.WebkitUserSelect=oe.current,oe.current=void 0),clearTimeout(qe.current)},[]);c.useEffect(()=>()=>{clearTimeout(me.current),clearTimeout(he.current),clearTimeout(G.current),fe()},[fe]);const Ge=u=>{clearTimeout(Be),Te=!0,Xe(!0),Ee&&!H&&Ee(u)},be=pt(u=>{clearTimeout(Be),Be=setTimeout(()=>{Te=!1},800+ze),Xe(!1),De&&H&&De(u),clearTimeout(me.current),me.current=setTimeout(()=>{ge.current=!1},$e.transitions.duration.shortest)}),Le=u=>{ge.current&&u.type!=="touchstart"||(ee&&ee.removeAttribute("title"),clearTimeout(he.current),clearTimeout(G.current),He||Te&&Oe?he.current=setTimeout(()=>{Ge(u)},Te?Oe:He):Ge(u))},Ye=u=>{clearTimeout(he.current),clearTimeout(G.current),G.current=setTimeout(()=>{be(u)},ze)},{isFocusVisibleRef:Je,onBlur:Qo,onFocus:Zo,ref:et}=dt(),[,Qe]=c.useState(!1),Ze=u=>{Qo(u),Je.current===!1&&(Qe(!1),Ye(u))},eo=u=>{ee||Ke(u.currentTarget),Zo(u),Je.current===!0&&(Qe(!0),Le(u))},oo=u=>{ge.current=!0;const k=W.props;k.onTouchStart&&k.onTouchStart(u)},to=Le,no=Ye,ot=u=>{oo(u),clearTimeout(G.current),clearTimeout(me.current),fe(),oe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",qe.current=setTimeout(()=>{document.body.style.WebkitUserSelect=oe.current,Le(u)},Eo)},tt=u=>{W.props.onTouchEnd&&W.props.onTouchEnd(u),fe(),clearTimeout(G.current),G.current=setTimeout(()=>{be(u)},Vo)};c.useEffect(()=>{if(!H)return;function u(k){(k.key==="Escape"||k.key==="Esc")&&be(k)}return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[be,H]);const nt=ut(W.ref,et,Ke,n);!Q&&Q!==0&&(H=!1);const ke=c.useRef(),st=u=>{const k=W.props;k.onMouseMove&&k.onMouseMove(u),re={x:u.clientX,y:u.clientY},ke.current&&ke.current.update()},te={},Ne=typeof Q=="string";Pe?(te.title=!H&&Ne&&!de?Q:null,te["aria-describedby"]=H?Ie:null):(te["aria-label"]=Ne?Q:null,te["aria-labelledby"]=H&&!Ne?Ie:null);const B=l({},te,Ve,W.props,{className:$(Ve.className,W.props.className),onTouchStart:oo,ref:nt},Re?{onMouseMove:st}:{}),ne={};Do||(B.onTouchStart=ot,B.onTouchEnd=tt),de||(B.onMouseOver=ye(to,B.onMouseOver),B.onMouseLeave=ye(no,B.onMouseLeave),Me||(ne.onMouseOver=to,ne.onMouseLeave=no)),pe||(B.onFocus=ye(eo,B.onFocus),B.onBlur=ye(Ze,B.onBlur),Me||(ne.onFocus=eo,ne.onBlur=Ze));const rt=c.useMemo(()=>{var u;let k=[{name:"arrow",enabled:!!Se,options:{element:Se,padding:4}}];return(u=q.popperOptions)!=null&&u.modifiers&&(k=k.concat(q.popperOptions.modifiers)),l({},q.popperOptions,{modifiers:k})},[Se,q]),se=l({},S,{isRtl:Go,arrow:j,disableInteractive:Me,placement:We,PopperComponentProp:je,touch:ge.current}),Ae=_t(se),so=(s=(r=ue.popper)!=null?r:K.Popper)!=null?s:Ut,ro=(i=(p=(d=ue.transition)!=null?d:K.Transition)!=null?p:qo)!=null?i:lo,ao=(a=(g=ue.tooltip)!=null?g:K.Tooltip)!=null?a:Ft,io=(m=(f=ue.arrow)!=null?f:K.Arrow)!=null?m:Ht,at=xe(so,l({},q,(P=X.popper)!=null?P:_.popper,{className:$(Ae.popper,q==null?void 0:q.className,(x=(L=X.popper)!=null?L:_.popper)==null?void 0:x.className)}),se),it=xe(ro,l({},Xo,(N=X.transition)!=null?N:_.transition),se),lt=xe(ao,l({},(y=X.tooltip)!=null?y:_.tooltip,{className:$(Ae.tooltip,(C=(v=X.tooltip)!=null?v:_.tooltip)==null?void 0:C.className)}),se),ct=xe(io,l({},(R=X.arrow)!=null?R:_.arrow,{className:$(Ae.arrow,(h=(T=X.arrow)!=null?T:_.arrow)==null?void 0:h.className)}),se);return t.jsxs(c.Fragment,{children:[c.cloneElement(W,B),t.jsx(so,l({as:je??Bo,placement:We,anchorEl:Re?{getBoundingClientRect:()=>({top:re.y,left:re.x,right:re.x,bottom:re.y,width:0,height:0})}:ee,popperRef:ke,open:ee?H:!1,id:Ie,transition:!0},ne,at,{popperOptions:rt,children:({TransitionProps:u})=>t.jsx(ro,l({timeout:$e.transitions.duration.shorter},u,it,{children:t.jsxs(ao,l({},lt,{children:[Q,j?t.jsx(io,l({},ct,{ref:Yo})):null]}))}))}))]})}),go=Ot,zt=c.createContext(),_o=zt;function Dt(e){return z("MuiTable",e)}O("MuiTable",["root","stickyHeader"]);const Et=["className","component","padding","size","stickyHeader"],Wt=e=>{const{classes:o,stickyHeader:n}=e;return E({root:["root",n&&"stickyHeader"]},Dt,o)},Vt=w("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>l({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":l({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),mo="table",Kt=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTable"}),{className:r,component:i=mo,padding:p="normal",size:d="medium",stickyHeader:a=!1}=s,g=F(s,Et),m=l({},s,{component:i,padding:p,size:d,stickyHeader:a}),f=Wt(m),P=c.useMemo(()=>({padding:p,size:d,stickyHeader:a}),[p,d,a]);return t.jsx(_o.Provider,{value:P,children:t.jsx(Vt,l({as:i,role:i===mo?null:"table",ref:n,className:$(f.root,r),ownerState:m},g))})}),qt=Kt,Xt=c.createContext(),Ce=Xt;function Gt(e){return z("MuiTableBody",e)}O("MuiTableBody",["root"]);const Yt=["className","component"],Jt=e=>{const{classes:o}=e;return E({root:["root"]},Gt,o)},Qt=w("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-row-group"}),Zt={variant:"body"},ho="tbody",en=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTableBody"}),{className:r,component:i=ho}=s,p=F(s,Yt),d=l({},s,{component:i}),a=Jt(d);return t.jsx(Ce.Provider,{value:Zt,children:t.jsx(Qt,l({className:$(a.root,r),as:i,ref:n,role:i===ho?null:"rowgroup",ownerState:d},p))})}),on=en;function tn(e){return z("MuiTableCell",e)}const nn=O("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),sn=nn,rn=["align","className","component","padding","scope","size","sortDirection","variant"],an=e=>{const{classes:o,variant:n,align:s,padding:r,size:i,stickyHeader:p}=e,d={root:["root",n,p&&"stickyHeader",s!=="inherit"&&`align${U(s)}`,r!=="normal"&&`padding${U(r)}`,`size${U(i)}`]};return E(d,tn,o)},ln=w("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`size${U(n.size)}`],n.padding!=="normal"&&o[`padding${U(n.padding)}`],n.align!=="inherit"&&o[`align${U(n.align)}`],n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>l({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?gt(Z(e.palette.divider,1),.88):mt(Z(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},o.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},o.variant==="body"&&{color:(e.vars||e).palette.text.primary},o.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},o.size==="small"&&{padding:"6px 16px",[`&.${sn.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},o.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},o.padding==="none"&&{padding:0},o.align==="left"&&{textAlign:"left"},o.align==="center"&&{textAlign:"center"},o.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},o.align==="justify"&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),cn=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTableCell"}),{align:r="inherit",className:i,component:p,padding:d,scope:a,size:g,sortDirection:m,variant:f}=s,P=F(s,rn),x=c.useContext(_o),L=c.useContext(Ce),N=L&&L.variant==="head";let y;p?y=p:y=N?"th":"td";let C=a;y==="td"?C=void 0:!C&&N&&(C="col");const v=f||L&&L.variant,R=l({},s,{align:r,component:y,padding:d||(x&&x.padding?x.padding:"normal"),size:g||(x&&x.size?x.size:"medium"),sortDirection:m,stickyHeader:v==="head"&&x&&x.stickyHeader,variant:v}),h=an(R);let T=null;return m&&(T=m==="asc"?"ascending":"descending"),t.jsx(ln,l({as:y,ref:n,className:$(h.root,i),"aria-sort":T,scope:C,ownerState:R},P))}),I=cn;function pn(e){return z("MuiTableContainer",e)}O("MuiTableContainer",["root"]);const dn=["className","component"],un=e=>{const{classes:o}=e;return E({root:["root"]},pn,o)},gn=w("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,o)=>o.root})({width:"100%",overflowX:"auto"}),mn=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTableContainer"}),{className:r,component:i="div"}=s,p=F(s,dn),d=l({},s,{component:i}),a=un(d);return t.jsx(gn,l({ref:n,as:i,className:$(a.root,r),ownerState:d},p))}),hn=mn;function fn(e){return z("MuiTableHead",e)}O("MuiTableHead",["root"]);const bn=["className","component"],xn=e=>{const{classes:o}=e;return E({root:["root"]},fn,o)},vn=w("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-header-group"}),Tn={variant:"head"},fo="thead",yn=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTableHead"}),{className:r,component:i=fo}=s,p=F(s,bn),d=l({},s,{component:i}),a=xn(d);return t.jsx(Ce.Provider,{value:Tn,children:t.jsx(vn,l({as:i,className:$(a.root,r),ref:n,role:i===fo?null:"rowgroup",ownerState:d},p))})}),Cn=yn,bo=ce(t.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),xo=ce(t.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var vo,To,yo,Co,wo,Po,Ro,jo;const wn=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],Pn=c.forwardRef(function(o,n){const{backIconButtonProps:s,count:r,getItemAriaLabel:i,nextIconButtonProps:p,onPageChange:d,page:a,rowsPerPage:g,showFirstButton:m,showLastButton:f}=o,P=F(o,wn),x=Lo(),L=v=>{d(v,0)},N=v=>{d(v,a-1)},y=v=>{d(v,a+1)},C=v=>{d(v,Math.max(0,Math.ceil(r/g)-1))};return t.jsxs("div",l({ref:n},P,{children:[m&&t.jsx(Y,{onClick:L,disabled:a===0,"aria-label":i("first",a),title:i("first",a),children:x.direction==="rtl"?vo||(vo=t.jsx(uo,{})):To||(To=t.jsx(po,{}))}),t.jsx(Y,l({onClick:N,disabled:a===0,color:"inherit","aria-label":i("previous",a),title:i("previous",a)},s,{children:x.direction==="rtl"?yo||(yo=t.jsx(xo,{})):Co||(Co=t.jsx(bo,{}))})),t.jsx(Y,l({onClick:y,disabled:r!==-1?a>=Math.ceil(r/g)-1:!1,color:"inherit","aria-label":i("next",a),title:i("next",a)},p,{children:x.direction==="rtl"?wo||(wo=t.jsx(bo,{})):Po||(Po=t.jsx(xo,{}))})),f&&t.jsx(Y,{onClick:C,disabled:a>=Math.ceil(r/g)-1,"aria-label":i("last",a),title:i("last",a),children:x.direction==="rtl"?Ro||(Ro=t.jsx(po,{})):jo||(jo=t.jsx(uo,{}))})]}))}),Rn=Pn;function jn(e){return z("MuiTablePagination",e)}const $n=O("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),ie=$n;var $o;const Sn=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],Mn=w(I,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}})),In=w(ko,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,o)=>l({[`& .${ie.actions}`]:o.actions},o.toolbar)})(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${ie.actions}`]:{flexShrink:0,marginLeft:20}})),Ln=w("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,o)=>o.spacer})({flex:"1 1 100%"}),kn=w("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,o)=>o.selectLabel})(({theme:e})=>l({},e.typography.body2,{flexShrink:0})),Nn=w(Pt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,o)=>l({[`& .${ie.selectIcon}`]:o.selectIcon,[`& .${ie.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${ie.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),An=w(Ue,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,o)=>o.menuItem})({}),Bn=w("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,o)=>o.displayedRows})(({theme:e})=>l({},e.typography.body2,{flexShrink:0}));function _n({from:e,to:o,count:n}){return`${e}–${o} of ${n!==-1?n:`more than ${o}`}`}function Un(e){return`Go to ${e} page`}const Fn=e=>{const{classes:o}=e;return E({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},jn,o)},Hn=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTablePagination"}),{ActionsComponent:r=Rn,backIconButtonProps:i,className:p,colSpan:d,component:a=I,count:g,getItemAriaLabel:m=Un,labelDisplayedRows:f=_n,labelRowsPerPage:P="Rows per page:",nextIconButtonProps:x,onPageChange:L,onRowsPerPageChange:N,page:y,rowsPerPage:C,rowsPerPageOptions:v=[10,25,50,100],SelectProps:R={},showFirstButton:h=!1,showLastButton:T=!1}=s,S=F(s,Sn),j=s,M=Fn(j),K=R.native?"option":An;let _;(a===I||a==="td")&&(_=d||1e3);const Pe=Fe(R.id),pe=Fe(R.labelId),de=()=>g===-1?(y+1)*C:C===-1?g:Math.min(g,(y+1)*C);return t.jsx(Mn,l({colSpan:_,ref:n,as:a,ownerState:j,className:$(M.root,p)},S,{children:t.jsxs(In,{className:M.toolbar,children:[t.jsx(Ln,{className:M.spacer}),v.length>1&&t.jsx(kn,{className:M.selectLabel,id:pe,children:P}),v.length>1&&t.jsx(Nn,l({variant:"standard"},!R.variant&&{input:$o||($o=t.jsx(Rt,{}))},{value:C,onChange:N,id:Pe,labelId:pe},R,{classes:l({},R.classes,{root:$(M.input,M.selectRoot,(R.classes||{}).root),select:$(M.select,(R.classes||{}).select),icon:$(M.selectIcon,(R.classes||{}).icon)}),children:v.map(A=>c.createElement(K,l({},!ht(K)&&{ownerState:j},{className:M.menuItem,key:A.label?A.label:A,value:A.value?A.value:A}),A.label?A.label:A))})),t.jsx(Bn,{className:M.displayedRows,children:f({from:g===0?0:y*C+1,to:de(),count:g===-1?-1:g,page:y})}),t.jsx(r,{className:M.actions,backIconButtonProps:i,count:g,nextIconButtonProps:x,onPageChange:L,page:y,rowsPerPage:C,showFirstButton:h,showLastButton:T,getItemAriaLabel:m})]})}))}),On=Hn;function zn(e){return z("MuiTableRow",e)}const Dn=O("MuiTableRow",["root","selected","hover","head","footer"]),So=Dn,En=["className","component","hover","selected"],Wn=e=>{const{classes:o,selected:n,hover:s,head:r,footer:i}=e;return E({root:["root",n&&"selected",s&&"hover",r&&"head",i&&"footer"]},zn,o)},Vn=w("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.head&&o.head,n.footer&&o.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${So.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${So.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Z(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Z(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Mo="tr",Kn=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTableRow"}),{className:r,component:i=Mo,hover:p=!1,selected:d=!1}=s,a=F(s,En),g=c.useContext(Ce),m=l({},s,{component:i,hover:p,selected:d,head:g&&g.variant==="head",footer:g&&g.variant==="footer"}),f=Wn(m);return t.jsx(Vn,l({as:i,ref:n,className:$(f.root,r),role:i===Mo?null:"row",ownerState:m},a))}),we=Kn,qn=ce(t.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function Xn(e){return z("MuiTableSortLabel",e)}const Gn=O("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),_e=Gn,Yn=["active","children","className","direction","hideSortIcon","IconComponent"],Jn=e=>{const{classes:o,direction:n,active:s}=e,r={root:["root",s&&"active"],icon:["icon",`iconDirection${U(n)}`]};return E(r,Xn,o)},Qn=w(ft,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.active&&o.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${_e.icon}`]:{opacity:.5}},[`&.${_e.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${_e.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),Zn=w("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.icon,o[`iconDirection${U(n.direction)}`]]}})(({theme:e,ownerState:o})=>l({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},o.direction==="desc"&&{transform:"rotate(0deg)"},o.direction==="asc"&&{transform:"rotate(180deg)"})),es=c.forwardRef(function(o,n){const s=D({props:o,name:"MuiTableSortLabel"}),{active:r=!1,children:i,className:p,direction:d="asc",hideSortIcon:a=!1,IconComponent:g=qn}=s,m=F(s,Yn),f=l({},s,{active:r,direction:d,hideSortIcon:a,IconComponent:g}),P=Jn(f);return t.jsxs(Qn,l({className:$(P.root,p),component:"span",disableRipple:!0,ownerState:f,ref:n},m,{children:[i,a&&!r?null:t.jsx(Zn,{as:g,className:$(P.icon),ownerState:f})]}))}),os=es,ae=[...Array(24)].map((e,o)=>({id:ve.string.uuid(),avatarUrl:`/assets/images/avatars/avatar_${o+1}.jpg`,name:ve.person.fullName(),company:ve.company.name(),isVerified:ve.datatype.boolean(),status:co.sample(["active","banned"]),role:co.sample(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}));function Uo({query:e}){return t.jsx(we,{children:t.jsx(I,{align:"center",colSpan:6,sx:{py:3},children:t.jsxs(bt,{sx:{textAlign:"center"},children:[t.jsx(le,{variant:"h6",paragraph:!0,children:"Not found"}),t.jsxs(le,{variant:"body2",children:["No results found for  ",t.jsxs("strong",{children:['"',e,'"']}),".",t.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}Uo.propTypes={query:b.string};function Fo({selected:e,name:o,avatarUrl:n,company:s,role:r,isVerified:i,status:p,handleClick:d}){const[a,g]=c.useState(null),m=P=>{g(P.currentTarget)},f=()=>{g(null)};return t.jsxs(t.Fragment,{children:[t.jsxs(we,{hover:!0,tabIndex:-1,role:"checkbox",selected:e,children:[t.jsx(I,{padding:"checkbox",children:t.jsx(Ao,{disableRipple:!0,checked:e,onChange:d})}),t.jsx(I,{component:"th",scope:"row",padding:"none",children:t.jsxs(No,{direction:"row",alignItems:"center",spacing:2,children:[t.jsx(xt,{alt:o,src:n}),t.jsx(le,{variant:"subtitle2",noWrap:!0,children:o})]})}),t.jsx(I,{children:s}),t.jsx(I,{children:r}),t.jsx(I,{align:"center",children:i?"Yes":"No"}),t.jsx(I,{children:t.jsx(wt,{color:p==="banned"&&"error"||"success",children:p})}),t.jsx(I,{align:"right",children:t.jsx(Y,{onClick:m,children:t.jsx(J,{icon:"eva:more-vertical-fill"})})})]}),t.jsxs(vt,{open:!!a,anchorEl:a,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[t.jsxs(Ue,{onClick:f,children:[t.jsx(J,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),t.jsxs(Ue,{onClick:f,sx:{color:"error.main"},children:[t.jsx(J,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}Fo.propTypes={avatarUrl:b.any,company:b.any,handleClick:b.func,isVerified:b.any,name:b.any,role:b.any,selected:b.any,status:b.string};const ts={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function ns(e,o,n){return e?Math.max(0,(1+e)*o-n):0}function Io(e,o,n){return e[n]===null?1:o[n]===null||o[n]<e[n]?-1:o[n]>e[n]?1:0}function ss(e,o){return e==="desc"?(n,s)=>Io(n,s,o):(n,s)=>-Io(n,s,o)}function rs({inputData:e,comparator:o,filterName:n}){const s=e.map((r,i)=>[r,i]);return s.sort((r,i)=>{const p=o(r[0],i[0]);return p!==0?p:r[1]-i[1]}),e=s.map(r=>r[0]),n&&(e=e.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1)),e}function Ho({order:e,orderBy:o,rowCount:n,headLabel:s,numSelected:r,onRequestSort:i,onSelectAllClick:p}){const d=a=>g=>{i(g,a)};return t.jsx(Cn,{children:t.jsxs(we,{children:[t.jsx(I,{padding:"checkbox",children:t.jsx(Ao,{indeterminate:r>0&&r<n,checked:n>0&&r===n,onChange:p})}),s.map(a=>t.jsx(I,{align:a.align||"left",sortDirection:o===a.id?e:!1,sx:{width:a.width,minWidth:a.minWidth},children:t.jsxs(os,{hideSortIcon:!0,active:o===a.id,direction:o===a.id?e:"asc",onClick:d(a.id),children:[a.label,o===a.id?t.jsx(Tt,{sx:{...ts},children:e==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))]})})}Ho.propTypes={order:b.oneOf(["asc","desc"]),orderBy:b.string,rowCount:b.number,headLabel:b.array,numSelected:b.number,onRequestSort:b.func,onSelectAllClick:b.func};function Oo({emptyRows:e,height:o}){return e?t.jsx(we,{sx:{...o&&{height:o*e}},children:t.jsx(I,{colSpan:9})}):null}Oo.propTypes={emptyRows:b.number,height:b.number};function zo({numSelected:e,filterName:o,onFilterName:n}){return t.jsxs(ko,{sx:{height:96,display:"flex",justifyContent:"space-between",p:s=>s.spacing(0,1,0,3),...e>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[e>0?t.jsxs(le,{component:"div",variant:"subtitle1",children:[e," selected"]}):t.jsx(jt,{value:o,onChange:n,placeholder:"Search user...",startAdornment:t.jsx($t,{position:"start",children:t.jsx(J,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),e>0?t.jsx(go,{title:"Delete",children:t.jsx(Y,{children:t.jsx(J,{icon:"eva:trash-2-fill"})})}):t.jsx(go,{title:"Filter list",children:t.jsx(Y,{children:t.jsx(J,{icon:"ic:round-filter-list"})})})]})}zo.propTypes={numSelected:b.number,filterName:b.string,onFilterName:b.func};function as(){const[e,o]=c.useState(0),[n,s]=c.useState("asc"),[r,i]=c.useState([]),[p,d]=c.useState("name"),[a,g]=c.useState(""),[m,f]=c.useState(5),P=(h,T)=>{T!==""&&(s(p===T&&n==="asc"?"desc":"asc"),d(T))},x=h=>{if(h.target.checked){const T=ae.map(S=>S.name);i(T);return}i([])},L=(h,T)=>{const S=r.indexOf(T);let j=[];S===-1?j=j.concat(r,T):S===0?j=j.concat(r.slice(1)):S===r.length-1?j=j.concat(r.slice(0,-1)):S>0&&(j=j.concat(r.slice(0,S),r.slice(S+1))),i(j)},N=(h,T)=>{o(T)},y=h=>{o(0),f(parseInt(h.target.value,10))},C=h=>{o(0),g(h.target.value)},v=rs({inputData:ae,comparator:ss(n,p),filterName:a}),R=!v.length&&!!a;return t.jsxs(It,{children:[t.jsxs(No,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[t.jsx(le,{variant:"h4",children:"Users"}),t.jsx(Lt,{variant:"contained",color:"inherit",startIcon:t.jsx(J,{icon:"eva:plus-fill"}),children:"New User"})]}),t.jsxs(Mt,{children:[t.jsx(zo,{numSelected:r.length,filterName:a,onFilterName:C}),t.jsx(yt,{children:t.jsx(hn,{sx:{overflow:"unset"},children:t.jsxs(qt,{sx:{minWidth:800},children:[t.jsx(Ho,{order:n,orderBy:p,rowCount:ae.length,numSelected:r.length,onRequestSort:P,onSelectAllClick:x,headLabel:[{id:"name",label:"Name"},{id:"company",label:"Company"},{id:"role",label:"Role"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status"},{id:""}]}),t.jsxs(on,{children:[v.slice(e*m,e*m+m).map(h=>t.jsx(Fo,{name:h.name,role:h.role,status:h.status,company:h.company,avatarUrl:h.avatarUrl,isVerified:h.isVerified,selected:r.indexOf(h.name)!==-1,handleClick:T=>L(T,h.name)},h.id)),t.jsx(Oo,{height:77,emptyRows:ns(e,m,ae.length)}),R&&t.jsx(Uo,{query:a})]})]})})}),t.jsx(On,{page:e,component:"div",count:ae.length,rowsPerPage:m,onPageChange:N,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:y})]})]})}function fs(){return t.jsxs(t.Fragment,{children:[t.jsx(Ct,{children:t.jsx("title",{children:" User | Story Loom AI "})}),t.jsx(as,{})]})}export{fs as default};
