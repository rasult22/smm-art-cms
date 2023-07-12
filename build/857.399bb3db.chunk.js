(self.webpackChunksmmart_cms=self.webpackChunksmmart_cms||[]).push([[857],{94654:(c,m,n)=>{var o=n(21078),u=n(35161);function l(p,h){return o(u(p,h),1)}c.exports=l},35161:(c,m,n)=>{var o=n(29932),u=n(67206),l=n(69199),p=n(1469);function h(f,d){var v=p(f)?o:l;return v(f,u(d,3))}c.exports=h},17061:(c,m,n)=>{var o=n(18698).default;function u(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c.exports=u=function(){return l},c.exports.__esModule=!0,c.exports.default=c.exports;var l={},p=Object.prototype,h=p.hasOwnProperty,f=Object.defineProperty||function(e,t,r){e[t]=r.value},d=typeof Symbol=="function"?Symbol:{},v=d.iterator||"@@iterator",j=d.asyncIterator||"@@asyncIterator",P=d.toStringTag||"@@toStringTag";function g(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{g({},"")}catch{g=function(r,i,s){return r[i]=s}}function D(e,t,r,i){var s=t&&t.prototype instanceof L?t:L,a=Object.create(s.prototype),E=new W(i||[]);return f(a,"_invoke",{value:G(e,r,E)}),a}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(i){return{type:"throw",arg:i}}}l.wrap=D;var _={};function L(){}function w(){}function x(){}var O={};g(O,v,function(){return this});var C=Object.getPrototypeOf,R=C&&C(C(N([])));R&&R!==p&&h.call(R,v)&&(O=R);var T=x.prototype=L.prototype=Object.create(O);function I(e){["next","throw","return"].forEach(function(t){g(e,t,function(r){return this._invoke(t,r)})})}function B(e,t){function r(s,a,E,b){var M=y(e[s],e,a);if(M.type!=="throw"){var K=M.arg,S=K.value;return S&&o(S)=="object"&&h.call(S,"__await")?t.resolve(S.__await).then(function(U){r("next",U,E,b)},function(U){r("throw",U,E,b)}):t.resolve(S).then(function(U){K.value=U,E(K)},function(U){return r("throw",U,E,b)})}b(M.arg)}var i;f(this,"_invoke",{value:function(a,E){function b(){return new t(function(M,K){r(a,E,M,K)})}return i=i?i.then(b,b):b()}})}function G(e,t,r){var i="suspendedStart";return function(s,a){if(i==="executing")throw new Error("Generator is already running");if(i==="completed"){if(s==="throw")throw a;return Z()}for(r.method=s,r.arg=a;;){var E=r.delegate;if(E){var b=k(E,r);if(b){if(b===_)continue;return b}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(i==="suspendedStart")throw i="completed",r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);i="executing";var M=y(e,t,r);if(M.type==="normal"){if(i=r.done?"completed":"suspendedYield",M.arg===_)continue;return{value:M.arg,done:r.done}}M.type==="throw"&&(i="completed",r.method="throw",r.arg=M.arg)}}}function k(e,t){var r=t.method,i=e.iterator[r];if(i===void 0)return t.delegate=null,r==="throw"&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),t.method==="throw")||r!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),_;var s=y(i,e.iterator,t.arg);if(s.type==="throw")return t.method="throw",t.arg=s.arg,t.delegate=null,_;var a=s.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,_):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,_)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function W(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function N(e){if(e){var t=e[v];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var r=-1,i=function s(){for(;++r<e.length;)if(h.call(e,r))return s.value=e[r],s.done=!1,s;return s.value=void 0,s.done=!0,s};return i.next=i}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return w.prototype=x,f(T,"constructor",{value:x,configurable:!0}),f(x,"constructor",{value:w,configurable:!0}),w.displayName=g(x,P,"GeneratorFunction"),l.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return!!t&&(t===w||(t.displayName||t.name)==="GeneratorFunction")},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,g(e,P,"GeneratorFunction")),e.prototype=Object.create(T),e},l.awrap=function(e){return{__await:e}},I(B.prototype),g(B.prototype,j,function(){return this}),l.AsyncIterator=B,l.async=function(e,t,r,i,s){s===void 0&&(s=Promise);var a=new B(D(e,t,r,i),s);return l.isGeneratorFunction(t)?a:a.next().then(function(E){return E.done?E.value:a.next()})},I(T),g(T,P,"Generator"),g(T,v,function(){return this}),g(T,"toString",function(){return"[object Generator]"}),l.keys=function(e){var t=Object(e),r=[];for(var i in t)r.push(i);return r.reverse(),function s(){for(;r.length;){var a=r.pop();if(a in t)return s.value=a,s.done=!1,s}return s.done=!0,s}},l.values=N,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var r in this)r.charAt(0)==="t"&&h.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(K,S){return E.type="throw",E.arg=t,r.next=K,S&&(r.method="next",r.arg=void 0),!!S}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],E=a.completion;if(a.tryLoc==="root")return i("end");if(a.tryLoc<=this.prev){var b=h.call(a,"catchLoc"),M=h.call(a,"finallyLoc");if(b&&M){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(b){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!M)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,r){for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i];if(s.tryLoc<=this.prev&&h.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&(t==="break"||t==="continue")&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var E=a?a.completion:{};return E.type=t,E.arg=r,a?(this.method="next",this.next=a.finallyLoc,_):this.complete(E)},complete:function(t,r){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&r&&(this.next=r),_},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),$(i),_}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===t){var s=i.completion;if(s.type==="throw"){var a=s.arg;$(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:N(t),resultName:r,nextLoc:i},this.method==="next"&&(this.arg=void 0),_}},l}c.exports=u,c.exports.__esModule=!0,c.exports.default=c.exports},18698:c=>{function m(n){return c.exports=m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},c.exports.__esModule=!0,c.exports.default=c.exports,m(n)}c.exports=m,c.exports.__esModule=!0,c.exports.default=c.exports},64687:(c,m,n)=>{var o=n(17061)();c.exports=o;try{regeneratorRuntime=o}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},15861:(c,m,n)=>{"use strict";n.d(m,{Z:()=>u});function o(l,p,h,f,d,v,j){try{var P=l[v](j),g=P.value}catch(D){h(D);return}P.done?p(g):Promise.resolve(g).then(f,d)}function u(l){return function(){var p=this,h=arguments;return new Promise(function(f,d){var v=l.apply(p,h);function j(g){o(v,f,d,j,P,"next",g)}function P(g){o(v,f,d,j,P,"throw",g)}j(void 0)})}}},17034:(c,m,n)=>{"use strict";n.d(m,{A:()=>f});var o=n(85893),u=n(71997),l=n(41580);const p=(0,u.ZP)(l.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:d})=>d?"auto 1fr":"1fr"};
`,h=(0,u.ZP)(l.x)`
  overflow-x: hidden;
`,f=({sideNav:d,children:v})=>(0,o.jsxs)(p,{hasSideNav:!!d,children:[d,(0,o.jsx)(h,{paddingBottom:10,children:v})]})},53192:(c,m,n)=>{"use strict";n.d(m,{m:()=>f});var o=n(85893),u=n(71997),l=n(11276);const p=`${232/16}rem`,h=(0,u.ZP)(l.r)`
  width: ${p};
  background: ${({theme:d})=>d.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
  z-index: 1;
`,f=({ariaLabel:d,...v})=>(0,o.jsx)(h,{"aria-label":d,as:"nav",...v})},60984:(c,m,n)=>{"use strict";n.d(m,{p:()=>w});var o=n(85893),u=n(67294),l=n(97184),p=n(71997),h=n(7801),f=n(2504);const d=x=>{const O=(0,u.useRef)();return(0,u.useEffect)(()=>{O.current=x}),O.current};var v=n(70004),j=n(41580),P=n(8509),g=n(49123),D=n(11047),y=n(75515),_=n(12028);const L=(0,p.ZP)(v.i)`
  width: ${24/16}rem;
  background-color: ${({theme:x})=>x.colors.neutral200};
`,w=({as:x="h2",label:O,searchLabel:C="",searchable:R=!1,onChange:T=()=>{},value:I="",onClear:B=()=>{},onSubmit:G=()=>{},id:k})=>{const[A,$]=(0,u.useState)(!1),W=d(A),N=(0,f.M)(k),Z=(0,u.useRef)(void 0),e=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{A&&Z.current&&Z.current.focus(),W&&!A&&e.current&&e.current.focus()},[A,W]);const t=()=>{$(a=>!a)},r=a=>{B(a),Z.current.focus()},i=a=>{a.relatedTarget?.id!==N&&$(!1)},s=a=>{a.key===h.y.ESCAPE&&$(!1)};return A?(0,o.jsxs)(j.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,o.jsx)(P.U,{children:(0,o.jsx)(g.w,{name:"searchbar",value:I,onChange:T,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:s,ref:Z,onBlur:i,onClear:r,onSubmit:G,clearLabel:"Clear",size:"S",children:C})}),(0,o.jsx)(j.x,{paddingLeft:2,paddingTop:4,children:(0,o.jsx)(L,{})})]}):(0,o.jsxs)(j.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,o.jsxs)(D.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,o.jsx)(y.Z,{variant:"beta",as:x,children:O}),R&&(0,o.jsx)(_.h,{ref:e,onClick:t,label:C,icon:(0,o.jsx)(l.Z,{})})]}),(0,o.jsx)(j.x,{paddingTop:4,children:(0,o.jsx)(L,{})})]})}},52305:(c,m,n)=>{"use strict";n.d(m,{E:()=>D});var o=n(85893),u=n(67294),l=n(71818),p=n(71997),h=n(41580),f=n(75515),d=n(11047),v=n(63507);const j=(0,p.ZP)(h.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:y})=>y.colors.neutral800};
  svg > * {
    fill: ${({theme:y})=>y.colors.neutral600};
  }

  &.active {
    ${({theme:y})=>`
      background-color: ${y.colors.primary100};
      border-right: 2px solid ${y.colors.primary600};
      svg > * {
        fill: ${y.colors.primary700};
      }
      ${f.Z} {
        color: ${y.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,P=(0,p.ZP)(l.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:y,$active:_})=>_?y.colors.primary600:y.colors.neutral600};
  }
`,g=p.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,D=u.forwardRef(({children:y,icon:_=null,withBullet:L=!1,as:w=v.f,isSubSectionChild:x=!1,...O},C)=>(0,o.jsxs)(j,{as:w,icon:_,background:"neutral100",paddingLeft:x?9:7,paddingBottom:2,paddingTop:2,ref:C,...O,children:[(0,o.jsxs)(d.k,{children:[_?(0,o.jsx)(g,{children:_}):(0,o.jsx)(P,{}),(0,o.jsx)(h.x,{paddingLeft:2,children:(0,o.jsx)(f.Z,{as:"span",children:y})})]}),L&&(0,o.jsx)(h.x,{as:d.k,paddingRight:4,children:(0,o.jsx)(P,{$active:!0})})]}))},29489:(c,m,n)=>{"use strict";n.d(m,{D:()=>_});var o=n(85893),u=n(67294),l=n(71997),p=n(12645),h=n(11047),f=n(41580),d=n(75515);const v=(0,l.ZP)(h.k)`
  border: none;
  padding: 0;
  background: transparent;
`,j=l.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:L})=>L?"0deg":"180deg"});
`,P=({collapsable:L=!1,label:w,onClick:x=()=>{},ariaExpanded:O,ariaControls:C})=>L?(0,o.jsxs)(v,{as:"button",onClick:x,"aria-expanded":O,"aria-controls":C,textAlign:"left",children:[(0,o.jsx)(f.x,{paddingRight:1,children:(0,o.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:w})}),L&&(0,o.jsx)(j,{rotated:O,children:(0,o.jsx)(p.Z,{"aria-hidden":!0})})]}):(0,o.jsx)(v,{children:(0,o.jsx)(f.x,{paddingRight:1,children:(0,o.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:w})})});var g=n(2504),D=n(30190);const y=(0,l.ZP)(f.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:L})=>L.colors.neutral500};
    }
  }
`,_=({collapsable:L=!1,label:w,badgeLabel:x,children:O,id:C})=>{const[R,T]=(0,u.useState)(!0),I=(0,g.M)(C);return(0,o.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,o.jsx)(y,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,o.jsxs)(f.x,{position:"relative",paddingRight:x?6:0,children:[(0,o.jsx)(P,{onClick:()=>{T(B=>!B)},ariaExpanded:R,ariaControls:I,collapsable:L,label:w}),x&&(0,o.jsx)(D.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:x})]})}),(!L||R)&&(0,o.jsx)("ol",{id:I,children:u.Children.map(O,(B,G)=>(0,o.jsx)("li",{children:B},G))})]})}},34446:(c,m,n)=>{"use strict";n.d(m,{Z:()=>h});var o=n(85893),u=n(67294),l=n(41580),p=n(11047);const h=({children:f,spacing:d=2,horizontal:v=!1,...j})=>(0,o.jsx)(l.x,{paddingTop:2,paddingBottom:4,children:(0,o.jsx)(p.k,{as:"ol",gap:d,direction:v?"row":"column",alignItems:v?"center":"stretch",...j,children:u.Children.map(f,(P,g)=>(0,o.jsx)("li",{children:P},g))})})},71818:(c,m,n)=>{"use strict";n.d(m,{Z:()=>l});var o=n(85893);const u=p=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 4 4",...p,children:(0,o.jsx)("rect",{width:4,height:4,fill:"#A5A5BA",rx:2})}),l=u}}]);
