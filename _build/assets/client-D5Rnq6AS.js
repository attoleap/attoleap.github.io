const __vite__fileDeps=["assets/_...404_-B21R-qwR.js","assets/index-BM6vt2eu.js","assets/routing-DaqVXGeE.js","assets/about-DV3SIRxl.js","assets/index--Y9OOC6V.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as G,a as R,b as p,g as J,u as X,S as z,o as Y,d as Q,e as ee,f as H,h as te,i as y,s as A,m as L,j,r as _,t as C,l as ne,k as re,n as ae,p as D,q as oe,M as ie,E as se,v as le}from"./index-BM6vt2eu.js";import{c as ce,a as ue,R as de,s as M,g as fe,b as he,d as me,m as pe,k as ge,e as we,f as be,n as ve,u as Ee}from"./routing-DaqVXGeE.js";const S="Invariant Violation",{setPrototypeOf:ye=function(e,n){return e.__proto__=n,e}}=Object;class N extends Error{framesToPop=1;name=S;constructor(n=S){super(typeof n=="number"?`${S}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),ye(this,N.prototype)}}function k(e,n){if(!e)throw new N(n)}const Ce=/^[A-Za-z]:\//;function $e(e=""){return e&&e.replace(/\\/g,"/").replace(Ce,n=>n.toUpperCase())}const Re=/^[/\\]{2}/,Ae=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Le=/^[A-Za-z]:$/,_e=function(e){if(e.length===0)return".";e=$e(e);const n=e.match(Re),t=P(e),r=e[e.length-1]==="/";return e=Se(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),Le.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!P(e)?`/${e}`:e)},V=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":_e(n.replace(/\/\/+/g,"/"))};function Se(e,n){let t="",r=0,a=-1,i=0,l=null;for(let o=0;o<=e.length;++o){if(o<e.length)l=e[o];else{if(l==="/")break;l="/"}if(l==="/"){if(!(a===o-1||i===1))if(i===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const u=t.lastIndexOf("/");u===-1?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),a=o,i=0;continue}else if(t.length>0){t="",r=0,a=o,i=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(a+1,o)}`:t=e.slice(a+1,o),r=o-a-1;a=o,i=0}else l==="."&&i!==-1?++i:i=-1}return t}const P=function(e){return Ae.test(e)};function ke(e){return`virtual:${e}`}function xe(e){return e.handler?.endsWith(".html")?P(e.handler)?e.handler:V(e.root,e.handler):`#vinxi/handler/${e.name}`}const Pe=new Proxy({},{get(e,n){return k(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:ke(xe({name:n})),baseURL:"/_build",chunks:new Proxy({},{get(t,r){k(typeof r=="string","Chunk expected");let a=V("/_build",r+".mjs");return{import(){return import(a)},output:{path:a}}}}),inputs:new Proxy({},{get(t,r){k(typeof r=="string","Input must be string");let a=window.manifest[r].output;return{async import(){return import(a)},async assets(){return window.manifest[r].assets},output:{path:a}}}})}}});globalThis.MANIFEST=Pe;const Ne=e=>n=>{const{base:t}=n,r=G(()=>n.children),a=R(()=>ce(r(),n.base||""));let i;const l=ue(e,a,()=>i,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(l),p(de.Provider,{value:l,get children(){return p(Te,{routerState:l,get root(){return n.root},get load(){return n.rootLoad},get children(){return[R(()=>(i=J())&&null),p(Ie,{routerState:l,get branches(){return a()}})]}})}})};function Te(e){const n=e.routerState.location,t=e.routerState.params,r=R(()=>e.load&&X(()=>{M(!0),e.load({params:t,location:n,intent:fe()||"initial"}),M(!1)}));return p(z,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:a=>p(a,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function Ie(e){const n=[];let t;const r=R(Y(e.routerState.matches,(a,i,l)=>{let o=i&&a.length===i.length;const u=[];for(let s=0,f=a.length;s<f;s++){const g=i&&i[s],w=a[s];l&&g&&w.route.key===g.route.key?u[s]=l[s]:(o=!1,n[s]&&n[s](),Q(b=>{n[s]=b,u[s]=me(e.routerState,u[s-1]||e.routerState.base,U(()=>r()[s+1]),()=>e.routerState.matches()[s])}))}return n.splice(a.length).forEach(s=>s()),l&&o?l:(t=u[0],u)}));return U(()=>r()&&t)()}const U=e=>()=>p(z,{get when(){return e()},keyed:!0,children:n=>p(he.Provider,{value:n,get children(){return n.outlet()}})});function Oe([e,n],t,r){return[e,r?a=>n(r(a)):n]}function De(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Me(e){let n=!1;const t=a=>typeof a=="string"?{value:a}:a,r=Oe(ee(t(e.get()),{equals:(a,i)=>a.value===i.value&&a.state===i.state}),void 0,a=>(!n&&e.set(a),a));return e.init&&H(e.init((a=e.get())=>{n=!0,r[1](t(a)),n=!1})),Ne({signal:r,create:e.create,utils:e.utils})}function Ue(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function Fe(e,n){const t=De(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const qe=new Map;function Be(e=!0,n=!1,t="/_server",r){return a=>{const i=a.base.path(),l=a.navigatorFactory(a.base);let o={};function u(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function s(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const d=c.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!d||n&&!d.hasAttribute("link"))return;const m=u(d),h=m?d.href.baseVal:d.href;if((m?d.target.baseVal:d.target)||!h&&!d.hasAttribute("state"))return;const E=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||E&&E.includes("external"))return;const $=m?new URL(h,document.baseURI):new URL(h);if(!($.origin!==window.location.origin||i&&$.pathname&&!$.pathname.toLowerCase().startsWith(i.toLowerCase())))return[d,$]}function f(c){const d=s(c);if(!d)return;const[m,h]=d,I=a.parsePath(h.pathname+h.search+h.hash),E=m.getAttribute("state");c.preventDefault(),l(I,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:E&&JSON.parse(E)})}function g(c){const d=s(c);if(!d)return;const[m,h]=d;typeof r=="function"&&(h.pathname=r(h.pathname)),o[h.pathname]||a.preloadRoute(h,m.getAttribute("preload")!=="false")}function w(c){const d=s(c);if(!d)return;const[m,h]=d;typeof r=="function"&&(h.pathname=r(h.pathname)),!o[h.pathname]&&(o[h.pathname]=setTimeout(()=>{a.preloadRoute(h,m.getAttribute("preload")!=="false"),delete o[h.pathname]},200))}function b(c){const d=s(c);if(!d)return;const[,m]=d;typeof r=="function"&&(m.pathname=r(m.pathname)),o[m.pathname]&&(clearTimeout(o[m.pathname]),delete o[m.pathname])}function T(c){if(c.defaultPrevented)return;let d=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.getAttribute("formaction"):c.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const h=new URL(d,pe);if(d=a.parsePath(h.pathname+h.search),!d.startsWith(t))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const m=qe.get(d);if(m){c.preventDefault();const h=new FormData(c.target);c.submitter&&c.submitter.name&&h.append(c.submitter.name,c.submitter.value),m.call({r:a,f:c.target},h)}}te(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mouseover",w),document.addEventListener("mouseout",b),document.addEventListener("focusin",g),document.addEventListener("touchstart",g)),document.addEventListener("submit",T),H(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mouseover",w),document.removeEventListener("mouseout",b),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",T)})}}function We(e){const n=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},t=be();return Me({get:n,set({value:r,replace:a,scroll:i,state:l}){a?window.history.replaceState(ge(l),"",r):window.history.pushState(l,"",r),Fe(window.location.hash.slice(1),i),we()},init:r=>Ue(window,"popstate",ve(r,a=>{if(a&&a<0)return!t.confirm(a);{const i=n();return!t.confirm(i.value,{state:i.state})}})),create:Be(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function ze(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var He=C("<style>"),je=C("<link>"),Ve=C("<script> ");const Ze={style:e=>(()=>{var n=y(He);return A(n,L(()=>e.attrs),!1,!0),j(n,()=>e.children),_(),n})(),link:e=>(()=>{var n=y(je);return A(n,L(()=>e.attrs),!1,!1),_(),n})(),script:e=>e.attrs.src?(()=>{var n=y(Ve);return A(n,L(()=>e.attrs,{get id(){return e.key}}),!1,!0),_(),n})():null};function Ke(e,n){let{tag:t,attrs:{key:r,...a}={key:void 0},children:i}=e;return Ze[t]({attrs:{...a,nonce:n},key:r,children:i})}function Ge(e,n,t,r="default"){return ne(async()=>{{const i=(await e.import())[r],o=(await n.inputs?.[e.src].assets()).filter(s=>s.tag==="style"||s.attrs.rel==="stylesheet");return typeof window<"u"&&ze(o),{default:s=>[...o.map(f=>Ke(f)),p(i,s)]}}})}const v={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Je(e={}){const n={options:e,rootNode:Z(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)F(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>Xe(n,t(r)),insert:(r,a)=>F(n,t(r),a),remove:r=>Ye(n,t(r))}}function Xe(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),a={};let i=!1,l=null,o=e.rootNode,u=null;for(let s=0;s<r.length;s++){const f=r[s];o.wildcardChildNode!==null&&(l=o.wildcardChildNode,u=r.slice(s).join("/"));const g=o.children.get(f);if(g===void 0){if(o&&o.placeholderChildren.length>1){const w=r.length-s;o=o.placeholderChildren.find(b=>b.maxDepth===w)||null}else o=o.placeholderChildren[0]||null;if(!o)break;o.paramName&&(a[o.paramName]=f),i=!0}else o=g}return(o===null||o.data===null)&&l!==null&&(o=l,a[o.paramName||"_"]=u,i=!0),o?i?{...o.data,params:i?a:void 0}:o.data:null}function F(e,n,t){let r=!0;const a=n.split("/");let i=e.rootNode,l=0;const o=[i];for(const u of a){let s;if(s=i.children.get(u))i=s;else{const f=Qe(u);s=Z({type:f,parent:i}),i.children.set(u,s),f===v.PLACEHOLDER?(s.paramName=u==="*"?`_${l++}`:u.slice(1),i.placeholderChildren.push(s),r=!1):f===v.WILDCARD&&(i.wildcardChildNode=s,s.paramName=u.slice(3)||"_",r=!1),o.push(s),i=s}}for(const[u,s]of o.entries())s.maxDepth=Math.max(o.length-u,s.maxDepth||0);return i.data=t,r===!0&&(e.staticRoutesMap[n]=i),i}function Ye(e,n){let t=!1;const r=n.split("/");let a=e.rootNode;for(const i of r)if(a=a.children.get(i),!a)return t;if(a.data){const i=r.at(-1)||"";a.data=null,Object.keys(a.children).length===0&&a.parent&&(a.parent.children.delete(i),a.parent.wildcardChildNode=null,a.parent.placeholderChildren=[]),t=!0}return t}function Z(e={}){return{type:e.type||v.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Qe(e){return e.startsWith("**")?v.WILDCARD:e[0]===":"||e==="*"?v.PLACEHOLDER:v.NORMAL}const et="modulepreload",tt=function(e){return"/_build/"+e},q={},x=function(n,t,r){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");a=Promise.all(t.map(o=>{if(o=tt(o),o in q)return;q[o]=!0;const u=o.endsWith(".css"),s=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":et,u||(f.as="script",f.crossOrigin=""),f.href=o,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((g,w)=>{f.addEventListener("load",g),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${o}`)))})}))}return a.then(()=>n()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},K=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>x(()=>import("./_...404_-B21R-qwR.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/attoleap.github.io/attoleap.github.io/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>x(()=>import("./about-DV3SIRxl.js"),__vite__mapDeps([3,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/attoleap.github.io/attoleap.github.io/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>x(()=>import("./index--Y9OOC6V.js"),__vite__mapDeps([4,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/attoleap.github.io/attoleap.github.io/src/routes/index.tsx"}],nt=rt(K.filter(e=>e.page));function rt(e){function n(t,r,a,i){const l=Object.values(t).find(o=>a.startsWith(o.id+"/"));return l?(n(l.children||(l.children=[]),r,a.slice(l.id.length)),t):(t.push({...r,id:a,path:a.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function at(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Je({routes:K.reduce((e,n)=>{if(!at(n))return e;let t=n.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,a)=>`**:${a}`);if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function ot(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&Ge(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return nt.map(e)}let B;const it=()=>B||(B=ot()),st="data:image/svg+xml,%3csvg%20width='384'%20height='384'%20viewBox='0%200%20384%20384'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M384%20192C384%20208.51%20381.916%20224.533%20377.997%20239.821C376.675%20244.978%20370.648%20247.099%20366.218%20244.145L196.438%20130.958C193.75%20129.167%20190.25%20129.167%20187.562%20130.958L17.782%20244.145C13.3516%20247.099%207.32496%20244.978%206.00273%20239.821C2.0838%20224.533%200%20208.51%200%20192C0%2085.9613%2085.9613%200%20192%200C298.039%200%20384%2085.9613%20384%20192Z'%20fill='white'/%3e%3cpath%20d='M187.562%20178.958C190.25%20177.167%20193.75%20177.167%20196.438%20178.958L352.566%20283.044C356.065%20285.377%20357.176%20290.031%20354.947%20293.598C347.929%20304.83%20339.782%20315.284%20330.664%20324.802C328.051%20327.529%20323.858%20327.905%20320.715%20325.81L196.438%20242.958C193.75%20241.167%20190.25%20241.167%20187.562%20242.958L63.2846%20325.81C60.1418%20327.905%2055.9485%20327.529%2053.3356%20324.802C44.2183%20315.284%2036.0711%20304.83%2029.0531%20293.598C26.8244%20290.031%2027.9349%20285.377%2031.4345%20283.044L187.562%20178.958Z'%20fill='white'/%3e%3cpath%20d='M101.365%20348.424C96.5194%20351.654%2096.655%20358.793%20101.793%20361.533C128.687%20375.872%20159.394%20384%20192%20384C224.606%20384%20255.313%20375.872%20282.207%20361.533C287.345%20358.793%20287.481%20351.654%20282.635%20348.424L196.438%20290.958C193.75%20289.167%20190.25%20289.167%20187.562%20290.958L101.365%20348.424Z'%20fill='white'/%3e%3c/svg%3e";var lt=C(`<nav class=uno-9688c5><div class=uno-4wtp87><a href=/><img width=32px height=32px alt="Attoleap's white logo"></a><h1 class=uno-e8mu95 text-color=white tracking-wider>attoleap</h1></div><ul class=uno-sfhb7d><li><a href=/>Home</a></li><li><a href=/about>About`);function ct(){const e=Ee(),n=t=>t===e.pathname?"text-color-gray-100":"text-color-gray-400";return(()=>{var t=y(lt),r=t.firstChild,a=r.firstChild,i=a.firstChild,l=r.nextSibling,o=l.firstChild,u=o.nextSibling;return re(i,"src",st),ae(s=>{var f=`${n("/")}`,g=`${n("/about")}`;return f!==s.e&&D(o,s.e=f),g!==s.t&&D(u,s.t=g),s},{e:void 0,t:void 0}),t})()}function ut(){return p(ie,{get children(){return p(We,{root:e=>[p(ct,{}),p(oe,{get children(){return e.children}})],get children(){return p(it,{})}})}})}const dt=e=>null;var ft=C("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const ht=e=>{const n="Error | Uncaught Client Exception";return p(se,{fallback:t=>(console.error(t),[(()=>{var r=y(ft);return j(r,n),r})(),p(dt,{code:500})]),get children(){return e.children}})};function mt(e,n){return le(e,n)}function W(e){return e.children}function pt(){return p(W,{get children(){return p(W,{get children(){return p(ht,{get children(){return p(ut,{})}})}})}})}mt(()=>p(pt,{}),document.getElementById("app"));const bt=void 0;export{bt as default};