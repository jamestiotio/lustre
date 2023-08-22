var ot=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var F=(n,t,e)=>(ot(n,t,"read from private field"),e?e.call(n):t.get(n)),Y=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},$=(n,t,e,r)=>(ot(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e);var Nn=(n,t,e)=>(ot(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();document.head.appendChild(Object.assign(document.createElement("base",{href:"/gleam-lustre/"})));let zt=class{inspect(){let t=r=>{let i=Fn(this[r]);return isNaN(parseInt(r))?`${r}: ${i}`:i},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}},Ot=class{static fromArray(t,e){let r=e||new Ze;return t.reduceRight((i,s)=>new Ke(s,i),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new Ye(this)}inspect(){return`[${this.toArray().map(Fn).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}};function it(n,t){return Ot.fromArray(n,t)}var zn,be;let Ye=(be=class{constructor(t){Y(this,zn,void 0);$(this,zn,t)}next(){if(F(this,zn).isEmpty())return{done:!0};{let{head:t,tail:e}=F(this,zn);return $(this,zn,e),{value:t,done:!1}}}},zn=new WeakMap,be),Ze=class extends Ot{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}},Ke=class extends Ot{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}},xe=class extends zt{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}},Xe=class extends xe{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}},nr=class extends xe{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Error"}isOk(){return!1}};function Fn(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(Fn).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(Fn).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return tr(n)}}function tr(n){var l,g;let[t,e]=er(n),r=((g=(l=Object.getPrototypeOf(n))==null?void 0:l.constructor)==null?void 0:g.name)||"Object",i=[];for(let m of t(n))i.push(`${Fn(m)}: ${Fn(e(n,m))}`);let s=i.length?" "+i.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${s}})`}function er(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function Zn(n,t,e,r,i,s){let a=new globalThis.Error(i);a.gleam_error=n,a.module=t,a.line=e,a.fn=r;for(let l in s)a[l]=s[l];return a}class bt extends zt{constructor(t){super(),this[0]=t}}class dt extends zt{}function rr(n,t){if(n instanceof bt){let e=n[0];return new bt(t(e))}else{if(n instanceof dt)return new dt;throw Zn("case_no_match","gleam/option",186,"map","No case clause matched",{values:[n]})}}const ir=void 0;function sr(n){if(Intl&&Intl.Segmenter)return new Intl.Segmenter().segment(n)[Symbol.iterator]()}function ar(n){var r,i;let t;const e=sr(n);return e?t=(r=e.next().value)==null?void 0:r.segment:t=(i=n.match(/./su))==null?void 0:i[0],t?new Xe([t,n.slice(t.length)]):new nr(ir)}function lr(n,t){const e=n[Symbol.iterator]();let r=e.next().value||"",i=e.next();for(;!i.done;)r=r+t+i.value,i=e.next();return r}function ur(n){var t;typeof process=="object"&&((t=process.stderr)!=null&&t.write)?process.stderr.write(n+`
`):typeof Deno=="object"?Deno.stderr.writeSync(new TextEncoder().encode(n+`
`)):console.log(n)}function or(n,t){let e=n<t;if(e)return n;if(e)throw Zn("case_no_match","gleam/int",335,"min","No case clause matched",{values:[e]});return t}function mr(n,t){for(;;){let e=n,r=t;if(e.hasLength(0))return r;if(e.atLeastLength(1)){let i=e.head;n=e.tail,t=it([i],r)}else throw Zn("case_no_match","gleam/list",124,"do_reverse_acc","No case clause matched",{values:[e]})}}function cr(n){return mr(n,it([]))}function gr(n){return cr(n)}function pr(n,t,e){for(;;){let r=n,i=t,s=e;if(r.hasLength(0))return gr(s);if(r.atLeastLength(1)){let a=r.head;n=r.tail,t=i,e=it([i(a)],s)}else throw Zn("case_no_match","gleam/list",361,"do_map","No case clause matched",{values:[r]})}}function Pn(n,t){return pr(n,t,it([]))}function fr(n,t,e){for(;;){let r=n,i=t,s=e;if(r.hasLength(0))return i;if(r.atLeastLength(1)){let a=r.head;n=r.tail,t=s(i,a),e=s}else throw Zn("case_no_match","gleam/list",716,"fold","No case clause matched",{values:[r]})}}function hr(n){return n}function br(n){return n}let cn=class{inspect(){let t=r=>{let i=qn(this[r]);return isNaN(parseInt(r))?`${r}: ${i}`:i},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}},st=class{static fromArray(t,e){let r=e||new Tt;return t.reduceRight((i,s)=>new Er(s,i),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new xr(this)}inspect(){return`[${this.toArray().map(qn).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}};function dr(n,t){return st.fromArray(n,t)}var On,de;let xr=(de=class{constructor(t){Y(this,On,void 0);$(this,On,t)}next(){if(F(this,On).isEmpty())return{done:!0};{let{head:t,tail:e}=F(this,On);return $(this,On,e),{value:t,done:!1}}}},On=new WeakMap,de),Tt=class extends st{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}},Er=class extends st{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}};class Ee extends cn{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}}class _r extends Ee{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}}let Kn=class extends Ee{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Error"}isOk(){return!1}};function qn(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(qn).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(qn).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return kr(n)}}function kr(n){var l,g;let[t,e]=Lr(n),r=((g=(l=Object.getPrototypeOf(n))==null?void 0:l.constructor)==null?void 0:g.name)||"Object",i=[];for(let m of t(n))i.push(`${qn(m)}: ${qn(e(n,m))}`);let s=i.length?" "+i.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${s}})`}function Lr(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function Ft(n,t,e,r,i,s){let a=new globalThis.Error(i);a.gleam_error=n,a.module=t,a.line=e,a.fn=r;for(let l in s)a[l]=s[l];return a}class yr extends cn{constructor(t){super(),this[0]=t}}function Wt(){return new yr(dr([]))}function rn(n,t){return lr(n,t)}function Ar(n){return ar(n)}function jr(n){let t=Fn(n);return hr(t)}class xt extends cn{constructor(t,e){super(),this[0]=t,this[1]=e}}class Gt extends cn{constructor(t,e){super(),this[0]=t,this[1]=e}}function wr(n,t){for(;;){let e=n,r=t,i=Ar(r);if(i.isOk()&&i[0][0]==="<"){let s=i[0][1];n=e+"&lt;",t=s}else if(i.isOk()&&i[0][0]===">"){let s=i[0][1];n=e+"&gt;",t=s}else if(i.isOk()&&i[0][0]==="&"){let s=i[0][1];n=e+"&amp;",t=s}else if(i.isOk()&&i[0][0]==='"'){let s=i[0][1];n=e+"&quot;",t=s}else if(i.isOk()&&i[0][0]==="'"){let s=i[0][1];n=e+"&#x27;",t=s}else if(i.isOk()){let s=i[0][0],a=i[0][1];n=e+s,t=a}else{if(i.isOk())throw Ft("case_no_match","lustre/attribute",42,"escape","No case clause matched",{values:[i]});return e+r}}}function jn(n,t){let e=wr("",t),r=br(e);return(i=>new xt(n,i))(r)}function Jt(n,t){if(n instanceof xt){let e=n[0],r=n[1];return new xt(e,r)}else if(n instanceof Gt){let e=n[0],r=n[1];return new Gt(e,i=>rr(r(i),t))}else throw Ft("case_no_match","lustre/attribute",129,"map","No case clause matched",{values:[n]})}function _e(n){return jn("style",fr(n,"",(t,e)=>{let r=e[0],i=e[1];return t+r+":"+i+";"}))}function D(n){return jn("class",n)}function mt(n){return jn("id",n)}function $t(n){return jn("href",n)}class Et extends cn{constructor(t){super(),this[0]=t}}class _t extends cn{constructor(t,e,r){super(),this[0]=t,this[1]=e,this[2]=r}}class Yt extends cn{constructor(t,e,r,i){super(),this[0]=t,this[1]=e,this[2]=r,this[3]=i}}function U(n,t,e){return new _t(n,t,e)}function pn(n){return new Et(n)}function kt(n,t){if(n instanceof Et){let e=n[0];return new Et(e)}else if(n instanceof _t){let e=n[0],r=n[1],i=n[2];return new _t(e,Pn(r,s=>Jt(s,t)),Pn(i,s=>kt(s,t)))}else if(n instanceof Yt){let e=n[0],r=n[1],i=n[2],s=n[3];return new Yt(e,Pn(r,a=>Jt(a,t)),Pn(i,a=>kt(a,t)),s)}else throw Ft("case_no_match","lustre/element",64,"map","No case clause matched",{values:[n]})}function In(n,t,e){return t[3]?(n==null?void 0:n.nodeType)===1&&n.nodeName===t[0].toUpperCase()&&n.namespaceURI===t[3]?Kt(n,t,t[3],e):Zt(n,t,t[3],e):t[2]?(n==null?void 0:n.nodeType)===1&&n.nodeName===t[0].toUpperCase()?Kt(n,t,null,e):Zt(n,t,null,e):t[0]?(n==null?void 0:n.nodeType)===3?vr(n,t):Sr(n,t):document.createComment(["[internal lustre error] I couldn't work out how to render this element. This","function should only be called internally by lustre's runtime: if you think","this is an error, please open an issue at","https://github.com/hayleigh-dot-dev/gleam-lustre/issues/new"].join(" "))}function Zt(n,t,e,r=null){const i=e?document.createElementNS(e,t[0]):document.createElement(t[0]);let s=t[1];for(;s.head;)Lt(i,s.head[0],s.head[0]==="class"&&i.className?`${i.className} ${s.head[1]}`:s.head[1]),s=s.tail;if(customElements.get(t[0]))i._slot=t[2];else if(t[0]==="slot"){let a=new Tt,l=r;for(;l;)if(l._slot){a=l._slot;break}else l=l.parentNode;for(;a.head;)i.appendChild(In(null,a.head,i)),a=a.tail}else{let a=t[2];for(;a.head;)i.appendChild(In(null,a.head,i)),a=a.tail;n&&n.replaceWith(i)}return i}function Kt(n,t,e,r){const i=n.attributes,s=new Map;let a=t[1];for(;a.head;)s.set(a.head[0],a.head[0]==="class"&&s.has("class")?`${s.get("class")} ${a.head[1]}`:a.head[1]),a=a.tail;for(const{name:l,value:g}of i)if(!s.has(l))n.removeAttribute(l);else{const m=s.get(l);m!==g&&(Lt(n,l,m),s.delete(l))}for(const[l,g]of s)Lt(n,l,g);if(customElements.get(t[0]))n._slot=t[2];else if(t[0]==="slot"){let l=n.firstChild,g=new Tt,m=r;for(;m;)if(m._slot){g=m._slot;break}else m=m.parentNode;for(;l;)g.head&&(In(l,g.head,n),g=g.tail),l=l.nextSibling;for(;g.head;)n.appendChild(In(null,g.head,n)),g=g.tail}else{let l=n.firstChild,g=t[2];for(;l;)if(g.head){const m=l.nextSibling;In(l,g.head,n),g=g.tail,l=m}else{const m=l.nextSibling;l.remove(),l=m}for(;g.head;)n.appendChild(In(null,g.head,n)),g=g.tail}return n}function Lt(n,t,e){switch(typeof e){case"string":n.getAttribute(t)!==e&&n.setAttribute(t,e);break;case"boolean":e?n.setAttribute(t,t):n.removeAttribute(t);break;case(t.startsWith("on")&&"function"):{const r=t.slice(2).toLowerCase();if(n[`_${t}`]===e)break;n.removeEventListener(r,n[`_${t}`]),n.addEventListener(r,e),n[`_${t}`]=e;break}default:n[t]=yt(e)}}function yt(n){return n instanceof st?n.toArray().map(yt):n instanceof bt?yt(n[0]):n instanceof dt?null:n}function Sr(n,t){if(!t[0])return n==null||n.remove(),null;const e=document.createTextNode(t[0]);return n&&n.replaceWith(e),e}function vr(n,t){const e=n.nodeValue,r=t[0];return r?(e!==r&&(n.nodeValue=r),n):(n==null||n.remove(),null)}var tn,yn,En,_n,An,Gn,Dn,Rn,rt,ke,Jn,At,Yn,jt;class Cr{constructor(t,e,r){Y(this,rt);Y(this,Jn);Y(this,Yn);Y(this,tn,null);Y(this,yn,null);Y(this,En,[]);Y(this,_n,[]);Y(this,An,!1);Y(this,Gn,null);Y(this,Dn,null);Y(this,Rn,null);$(this,Gn,t),$(this,Dn,e),$(this,Rn,r)}start(t,e){if(!Or())return new Kn(new Br);if(F(this,tn))return new Kn(new Tr);if($(this,tn,t instanceof HTMLElement?t:document.querySelector(t)),!F(this,tn))return new Kn(new $r);const[r,i]=F(this,Gn).call(this,e);return $(this,yn,r),$(this,_n,i[0].toArray()),$(this,An,!0),window.requestAnimationFrame(()=>Nn(this,Jn,At).call(this)),new _r(s=>this.dispatch(s))}dispatch(t){F(this,En).push(t),Nn(this,Jn,At).call(this)}emit(t,e=null){F(this,tn).dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e,composed:!0}))}destroy(){if(!F(this,tn))return new Kn(new Fr);F(this,tn).remove(),$(this,tn,null),$(this,yn,null),$(this,En,[]),$(this,_n,[]),$(this,An,!1),$(this,Dn,()=>{}),$(this,Rn,()=>{})}}tn=new WeakMap,yn=new WeakMap,En=new WeakMap,_n=new WeakMap,An=new WeakMap,Gn=new WeakMap,Dn=new WeakMap,Rn=new WeakMap,rt=new WeakSet,ke=function(){const t=F(this,Rn).call(this,F(this,yn)),e=kt(t,r=>this.dispatch(r));$(this,tn,In(F(this,tn),e))},Jn=new WeakSet,At=function(){Nn(this,Yn,jt).call(this),F(this,An)&&Nn(this,rt,ke).call(this),$(this,An,!1)},Yn=new WeakSet,jt=function(t=0){if(F(this,En).length){for(;F(this,En).length;){const[e,r]=F(this,Dn).call(this,F(this,yn),F(this,En).shift());$(this,yn,e),$(this,_n,F(this,_n).concat(r[0].toArray()))}$(this,An,!0)}for(;F(this,_n)[0];)F(this,_n).shift()(e=>this.dispatch(e),(e,r)=>this.emit(e,r));F(this,En).length&&(t>=5?console.warn(tooManyUpdates):Nn(this,Yn,jt).call(this,++t))};const Ir=(n,t,e)=>new Cr(n,t,e),zr=(n,t,e)=>n.start(t,e),Or=()=>window&&window.document;class Tr extends cn{}class Fr extends cn{}class $r extends cn{}class Br extends cn{}function Nr(n,t,e){return Ir(s=>[n(s),Wt()],(s,a)=>[t(s,a),Wt()],e)}function Pr(n,t){return U("body",n,t)}function Le(n,t){return U("aside",n,t)}function Mr(n,t){return U("h1",n,t)}function Bt(n,t){return U("h2",n,t)}function Dr(n,t){return U("h3",n,t)}function Rr(n,t){return U("main",n,t)}function qr(n,t){return U("nav",n,t)}function Nt(n,t){return U("div",n,t)}function ye(n,t){return U("li",n,t)}function Hr(n,t){return U("ol",n,t)}function nt(n,t){return U("p",n,t)}function Vr(n,t){return U("pre",n,t)}function Ae(n,t){return U("ul",n,t)}function Pt(n,t){return U("a",n,t)}function je(n,t){return U("code",n,t)}function Qr(n,t){return U("em",n,t)}function we(n,t){return U("span",n,t)}function Ur(n,t){return U("strong",n,t)}const Wr={};function Gr(n,t){const e=t||Wr,r=typeof e.includeImageAlt=="boolean"?e.includeImageAlt:!0,i=typeof e.includeHtml=="boolean"?e.includeHtml:!0;return Se(n,r,i)}function Se(n,t,e){if(Jr(n)){if("value"in n)return n.type==="html"&&!e?"":n.value;if(t&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Xt(n.children,t,e)}return Array.isArray(n)?Xt(n,t,e):""}function Xt(n,t,e){const r=[];let i=-1;for(;++i<n.length;)r[i]=Se(n[i],t,e);return r.join("")}function Jr(n){return!!(n&&typeof n=="object")}const ne=document.createElement("i");function Mt(n){const t="&"+n+";";ne.innerHTML=t;const e=ne.textContent;return e.charCodeAt(e.length-1)===59&&n!=="semi"||e===t?!1:e}function fn(n,t,e,r){const i=n.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,e=e>0?e:0,r.length<1e4)a=Array.from(r),a.unshift(t,e),n.splice(...a);else for(e&&n.splice(t,e);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),n.splice(...a),s+=1e4,t+=1e4}function en(n,t){return n.length>0?(fn(n,n.length,0,t),n):t}const te={}.hasOwnProperty;function Yr(n){const t={};let e=-1;for(;++e<n.length;)Zr(t,n[e]);return t}function Zr(n,t){let e;for(e in t){const i=(te.call(n,e)?n[e]:void 0)||(n[e]={}),s=t[e];let a;if(s)for(a in s){te.call(i,a)||(i[a]=[]);const l=s[a];Kr(i[a],Array.isArray(l)?l:l?[l]:[])}}}function Kr(n,t){let e=-1;const r=[];for(;++e<t.length;)(t[e].add==="after"?n:r).push(t[e]);fn(n,0,0,r)}function ve(n,t){const e=Number.parseInt(n,t);return e<9||e===11||e>13&&e<32||e>126&&e<160||e>55295&&e<57344||e>64975&&e<65008||(e&65535)===65535||(e&65535)===65534||e>1114111?"�":String.fromCharCode(e)}function Mn(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Xr=wn(/\p{P}/u),gn=wn(/[A-Za-z]/),mn=wn(/[\dA-Za-z]/),ni=wn(/[#-'*+\--9=?A-Z^-~]/);function wt(n){return n!==null&&(n<32||n===127)}const St=wn(/\d/),ti=wn(/[\dA-Fa-f]/),Ce=wn(/[!-/:-@[-`{-~]/);function A(n){return n!==null&&n<-2}function X(n){return n!==null&&(n<0||n===32)}function C(n){return n===-2||n===-1||n===32}function ei(n){return Ce(n)||Xr(n)}const ri=wn(/\s/);function wn(n){return t;function t(e){return e!==null&&e>-1&&n.test(String.fromCharCode(e))}}function B(n,t,e,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(g){return C(g)?(n.enter(e),l(g)):t(g)}function l(g){return C(g)&&s++<i?(n.consume(g),l):(n.exit(e),t(g))}}const ii={tokenize:si};function si(n){const t=n.attempt(this.parser.constructs.contentInitial,r,i);let e;return t;function r(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),B(n,t,"linePrefix")}function i(l){return n.enter("paragraph"),s(l)}function s(l){const g=n.enter("chunkText",{contentType:"text",previous:e});return e&&(e.next=g),e=g,a(l)}function a(l){if(l===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(l);return}return A(l)?(n.consume(l),n.exit("chunkText"),s):(n.consume(l),a)}}const ai={tokenize:li},ee={tokenize:ui};function li(n){const t=this,e=[];let r=0,i,s,a;return l;function l(k){if(r<e.length){const P=e[r];return t.containerState=P[1],n.attempt(P[0].continuation,g,m)(k)}return m(k)}function g(k){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&H();const P=t.events.length;let R=P,d;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){d=t.events[R][1].end;break}E(r);let z=P;for(;z<t.events.length;)t.events[z][1].end=Object.assign({},d),z++;return fn(t.events,R+1,0,t.events.slice(P)),t.events.length=z,m(k)}return l(k)}function m(k){if(r===e.length){if(!i)return h(k);if(i.currentConstruct&&i.currentConstruct.concrete)return v(k);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},n.check(ee,f,p)(k)}function f(k){return i&&H(),E(r),h(k)}function p(k){return t.parser.lazy[t.now().line]=r!==e.length,a=t.now().offset,v(k)}function h(k){return t.containerState={},n.attempt(ee,c,v)(k)}function c(k){return r++,e.push([t.currentConstruct,t.containerState]),h(k)}function v(k){if(k===null){i&&H(),E(0),n.consume(k);return}return i=i||t.parser.flow(t.now()),n.enter("chunkFlow",{contentType:"flow",previous:s,_tokenizer:i}),I(k)}function I(k){if(k===null){q(n.exit("chunkFlow"),!0),E(0),n.consume(k);return}return A(k)?(n.consume(k),q(n.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(n.consume(k),I)}function q(k,P){const R=t.sliceStream(k);if(P&&R.push(null),k.previous=s,s&&(s.next=k),s=k,i.defineSkip(k.start),i.write(R),t.parser.lazy[k.start.line]){let d=i.events.length;for(;d--;)if(i.events[d][1].start.offset<a&&(!i.events[d][1].end||i.events[d][1].end.offset>a))return;const z=t.events.length;let V=z,T,N;for(;V--;)if(t.events[V][0]==="exit"&&t.events[V][1].type==="chunkFlow"){if(T){N=t.events[V][1].end;break}T=!0}for(E(r),d=z;d<t.events.length;)t.events[d][1].end=Object.assign({},N),d++;fn(t.events,V+1,0,t.events.slice(z)),t.events.length=d}}function E(k){let P=e.length;for(;P-- >k;){const R=e[P];t.containerState=R[1],R[0].exit.call(t,n)}e.length=k}function H(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ui(n,t,e){return B(n,n.attempt(this.parser.constructs.document,t,e),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function re(n){if(n===null||X(n)||ri(n))return 1;if(ei(n))return 2}function Dt(n,t,e){const r=[];let i=-1;for(;++i<n.length;){const s=n[i].resolveAll;s&&!r.includes(s)&&(t=s(t,e),r.push(s))}return t}const vt={name:"attention",tokenize:mi,resolveAll:oi};function oi(n,t){let e=-1,r,i,s,a,l,g,m,f;for(;++e<n.length;)if(n[e][0]==="enter"&&n[e][1].type==="attentionSequence"&&n[e][1]._close){for(r=e;r--;)if(n[r][0]==="exit"&&n[r][1].type==="attentionSequence"&&n[r][1]._open&&t.sliceSerialize(n[r][1]).charCodeAt(0)===t.sliceSerialize(n[e][1]).charCodeAt(0)){if((n[r][1]._close||n[e][1]._open)&&(n[e][1].end.offset-n[e][1].start.offset)%3&&!((n[r][1].end.offset-n[r][1].start.offset+n[e][1].end.offset-n[e][1].start.offset)%3))continue;g=n[r][1].end.offset-n[r][1].start.offset>1&&n[e][1].end.offset-n[e][1].start.offset>1?2:1;const p=Object.assign({},n[r][1].end),h=Object.assign({},n[e][1].start);ie(p,-g),ie(h,g),a={type:g>1?"strongSequence":"emphasisSequence",start:p,end:Object.assign({},n[r][1].end)},l={type:g>1?"strongSequence":"emphasisSequence",start:Object.assign({},n[e][1].start),end:h},s={type:g>1?"strongText":"emphasisText",start:Object.assign({},n[r][1].end),end:Object.assign({},n[e][1].start)},i={type:g>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},l.end)},n[r][1].end=Object.assign({},a.start),n[e][1].start=Object.assign({},l.end),m=[],n[r][1].end.offset-n[r][1].start.offset&&(m=en(m,[["enter",n[r][1],t],["exit",n[r][1],t]])),m=en(m,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),m=en(m,Dt(t.parser.constructs.insideSpan.null,n.slice(r+1,e),t)),m=en(m,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),n[e][1].end.offset-n[e][1].start.offset?(f=2,m=en(m,[["enter",n[e][1],t],["exit",n[e][1],t]])):f=0,fn(n,r-1,e-r+3,m),e=r+m.length-f-2;break}}for(e=-1;++e<n.length;)n[e][1].type==="attentionSequence"&&(n[e][1].type="data");return n}function mi(n,t){const e=this.parser.constructs.attentionMarkers.null,r=this.previous,i=re(r);let s;return a;function a(g){return s=g,n.enter("attentionSequence"),l(g)}function l(g){if(g===s)return n.consume(g),l;const m=n.exit("attentionSequence"),f=re(g),p=!f||f===2&&i||e.includes(g),h=!i||i===2&&f||e.includes(r);return m._open=!!(s===42?p:p&&(i||!h)),m._close=!!(s===42?h:h&&(f||!p)),t(g)}}function ie(n,t){n.column+=t,n.offset+=t,n._bufferIndex+=t}const ci={name:"autolink",tokenize:gi};function gi(n,t,e){let r=0;return i;function i(c){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(c),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(c){return gn(c)?(n.consume(c),a):m(c)}function a(c){return c===43||c===45||c===46||mn(c)?(r=1,l(c)):m(c)}function l(c){return c===58?(n.consume(c),r=0,g):(c===43||c===45||c===46||mn(c))&&r++<32?(n.consume(c),l):(r=0,m(c))}function g(c){return c===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(c),n.exit("autolinkMarker"),n.exit("autolink"),t):c===null||c===32||c===60||wt(c)?e(c):(n.consume(c),g)}function m(c){return c===64?(n.consume(c),f):ni(c)?(n.consume(c),m):e(c)}function f(c){return mn(c)?p(c):e(c)}function p(c){return c===46?(n.consume(c),r=0,f):c===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(c),n.exit("autolinkMarker"),n.exit("autolink"),t):h(c)}function h(c){if((c===45||mn(c))&&r++<63){const v=c===45?h:p;return n.consume(c),v}return e(c)}}const at={tokenize:pi,partial:!0};function pi(n,t,e){return r;function r(s){return C(s)?B(n,i,"linePrefix")(s):i(s)}function i(s){return s===null||A(s)?t(s):e(s)}}const Ie={name:"blockQuote",tokenize:fi,continuation:{tokenize:hi},exit:bi};function fi(n,t,e){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(n.enter("blockQuote",{_container:!0}),l.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(a),n.exit("blockQuoteMarker"),s}return e(a)}function s(a){return C(a)?(n.enter("blockQuotePrefixWhitespace"),n.consume(a),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),t):(n.exit("blockQuotePrefix"),t(a))}}function hi(n,t,e){const r=this;return i;function i(a){return C(a)?B(n,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return n.attempt(Ie,t,e)(a)}}function bi(n){n.exit("blockQuote")}const ze={name:"characterEscape",tokenize:di};function di(n,t,e){return r;function r(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),i}function i(s){return Ce(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),t):e(s)}}const Oe={name:"characterReference",tokenize:xi};function xi(n,t,e){const r=this;let i=0,s,a;return l;function l(p){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),g}function g(p){return p===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(p),n.exit("characterReferenceMarkerNumeric"),m):(n.enter("characterReferenceValue"),s=31,a=mn,f(p))}function m(p){return p===88||p===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(p),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,a=ti,f):(n.enter("characterReferenceValue"),s=7,a=St,f(p))}function f(p){if(p===59&&i){const h=n.exit("characterReferenceValue");return a===mn&&!Mt(r.sliceSerialize(h))?e(p):(n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),n.exit("characterReference"),t)}return a(p)&&i++<s?(n.consume(p),f):e(p)}}const se={tokenize:_i,partial:!0},ae={name:"codeFenced",tokenize:Ei,concrete:!0};function Ei(n,t,e){const r=this,i={tokenize:R,partial:!0};let s=0,a=0,l;return g;function g(d){return m(d)}function m(d){const z=r.events[r.events.length-1];return s=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,l=d,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),f(d)}function f(d){return d===l?(a++,n.consume(d),f):a<3?e(d):(n.exit("codeFencedFenceSequence"),C(d)?B(n,p,"whitespace")(d):p(d))}function p(d){return d===null||A(d)?(n.exit("codeFencedFence"),r.interrupt?t(d):n.check(se,I,P)(d)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),h(d))}function h(d){return d===null||A(d)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),p(d)):C(d)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),B(n,c,"whitespace")(d)):d===96&&d===l?e(d):(n.consume(d),h)}function c(d){return d===null||A(d)?p(d):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),v(d))}function v(d){return d===null||A(d)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),p(d)):d===96&&d===l?e(d):(n.consume(d),v)}function I(d){return n.attempt(i,P,q)(d)}function q(d){return n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),E}function E(d){return s>0&&C(d)?B(n,H,"linePrefix",s+1)(d):H(d)}function H(d){return d===null||A(d)?n.check(se,I,P)(d):(n.enter("codeFlowValue"),k(d))}function k(d){return d===null||A(d)?(n.exit("codeFlowValue"),H(d)):(n.consume(d),k)}function P(d){return n.exit("codeFenced"),t(d)}function R(d,z,V){let T=0;return N;function N(S){return d.enter("lineEnding"),d.consume(S),d.exit("lineEnding"),y}function y(S){return d.enter("codeFencedFence"),C(S)?B(d,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):L(S)}function L(S){return S===l?(d.enter("codeFencedFenceSequence"),M(S)):V(S)}function M(S){return S===l?(T++,d.consume(S),M):T>=a?(d.exit("codeFencedFenceSequence"),C(S)?B(d,Q,"whitespace")(S):Q(S)):V(S)}function Q(S){return S===null||A(S)?(d.exit("codeFencedFence"),z(S)):V(S)}}}function _i(n,t,e){const r=this;return i;function i(a){return a===null?e(a):(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?e(a):t(a)}}const ct={name:"codeIndented",tokenize:Li},ki={tokenize:yi,partial:!0};function Li(n,t,e){const r=this;return i;function i(m){return n.enter("codeIndented"),B(n,s,"linePrefix",4+1)(m)}function s(m){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(m):e(m)}function a(m){return m===null?g(m):A(m)?n.attempt(ki,a,g)(m):(n.enter("codeFlowValue"),l(m))}function l(m){return m===null||A(m)?(n.exit("codeFlowValue"),a(m)):(n.consume(m),l)}function g(m){return n.exit("codeIndented"),t(m)}}function yi(n,t,e){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?e(a):A(a)?(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),i):B(n,s,"linePrefix",4+1)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):A(a)?i(a):e(a)}}const Ai={name:"codeText",tokenize:Si,resolve:ji,previous:wi};function ji(n){let t=n.length-4,e=3,r,i;if((n[e][1].type==="lineEnding"||n[e][1].type==="space")&&(n[t][1].type==="lineEnding"||n[t][1].type==="space")){for(r=e;++r<t;)if(n[r][1].type==="codeTextData"){n[e][1].type="codeTextPadding",n[t][1].type="codeTextPadding",e+=2,t-=2;break}}for(r=e-1,t++;++r<=t;)i===void 0?r!==t&&n[r][1].type!=="lineEnding"&&(i=r):(r===t||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return n}function wi(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Si(n,t,e){let r=0,i,s;return a;function a(p){return n.enter("codeText"),n.enter("codeTextSequence"),l(p)}function l(p){return p===96?(n.consume(p),r++,l):(n.exit("codeTextSequence"),g(p))}function g(p){return p===null?e(p):p===32?(n.enter("space"),n.consume(p),n.exit("space"),g):p===96?(s=n.enter("codeTextSequence"),i=0,f(p)):A(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),g):(n.enter("codeTextData"),m(p))}function m(p){return p===null||p===32||p===96||A(p)?(n.exit("codeTextData"),g(p)):(n.consume(p),m)}function f(p){return p===96?(n.consume(p),i++,f):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),t(p)):(s.type="codeTextData",m(p))}}function Te(n){const t={};let e=-1,r,i,s,a,l,g,m;for(;++e<n.length;){for(;e in t;)e=t[e];if(r=n[e],e&&r[1].type==="chunkFlow"&&n[e-1][1].type==="listItemPrefix"&&(g=r[1]._tokenizer.events,s=0,s<g.length&&g[s][1].type==="lineEndingBlank"&&(s+=2),s<g.length&&g[s][1].type==="content"))for(;++s<g.length&&g[s][1].type!=="content";)g[s][1].type==="chunkText"&&(g[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,vi(n,e)),e=t[e],m=!0);else if(r[1]._container){for(s=e,i=void 0;s--&&(a=n[s],a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(i&&(n[i][1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);i&&(r[1].end=Object.assign({},n[i][1].start),l=n.slice(i,e),l.unshift(r),fn(n,i,e-i+1,l))}}return!m}function vi(n,t){const e=n[t][1],r=n[t][2];let i=t-1;const s=[],a=e._tokenizer||r.parser[e.contentType](e.start),l=a.events,g=[],m={};let f,p,h=-1,c=e,v=0,I=0;const q=[I];for(;c;){for(;n[++i][1]!==c;);s.push(i),c._tokenizer||(f=r.sliceStream(c),c.next||f.push(null),p&&a.defineSkip(c.start),c._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(f),c._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=c,c=c.next}for(c=e;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(I=h+1,q.push(I),c._tokenizer=void 0,c.previous=void 0,c=c.next);for(a.events=[],c?(c._tokenizer=void 0,c.previous=void 0):q.pop(),h=q.length;h--;){const E=l.slice(q[h],q[h+1]),H=s.pop();g.unshift([H,H+E.length-1]),fn(n,H,2,E)}for(h=-1;++h<g.length;)m[v+g[h][0]]=v+g[h][1],v+=g[h][1]-g[h][0]-1;return m}const Ci={tokenize:Oi,resolve:zi},Ii={tokenize:Ti,partial:!0};function zi(n){return Te(n),n}function Oi(n,t){let e;return r;function r(l){return n.enter("content"),e=n.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):A(l)?n.check(Ii,a,s)(l):(n.consume(l),i)}function s(l){return n.exit("chunkContent"),n.exit("content"),t(l)}function a(l){return n.consume(l),n.exit("chunkContent"),e.next=n.enter("chunkContent",{contentType:"content",previous:e}),e=e.next,i}}function Ti(n,t,e){const r=this;return i;function i(a){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),B(n,s,"linePrefix")}function s(a){if(a===null||A(a))return e(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):n.interrupt(r.parser.constructs.flow,e,t)(a)}}function Fe(n,t,e,r,i,s,a,l,g){const m=g||Number.POSITIVE_INFINITY;let f=0;return p;function p(E){return E===60?(n.enter(r),n.enter(i),n.enter(s),n.consume(E),n.exit(s),h):E===null||E===32||E===41||wt(E)?e(E):(n.enter(r),n.enter(a),n.enter(l),n.enter("chunkString",{contentType:"string"}),I(E))}function h(E){return E===62?(n.enter(s),n.consume(E),n.exit(s),n.exit(i),n.exit(r),t):(n.enter(l),n.enter("chunkString",{contentType:"string"}),c(E))}function c(E){return E===62?(n.exit("chunkString"),n.exit(l),h(E)):E===null||E===60||A(E)?e(E):(n.consume(E),E===92?v:c)}function v(E){return E===60||E===62||E===92?(n.consume(E),c):c(E)}function I(E){return!f&&(E===null||E===41||X(E))?(n.exit("chunkString"),n.exit(l),n.exit(a),n.exit(r),t(E)):f<m&&E===40?(n.consume(E),f++,I):E===41?(n.consume(E),f--,I):E===null||E===32||E===40||wt(E)?e(E):(n.consume(E),E===92?q:I)}function q(E){return E===40||E===41||E===92?(n.consume(E),I):I(E)}}function $e(n,t,e,r,i,s){const a=this;let l=0,g;return m;function m(c){return n.enter(r),n.enter(i),n.consume(c),n.exit(i),n.enter(s),f}function f(c){return l>999||c===null||c===91||c===93&&!g||c===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?e(c):c===93?(n.exit(s),n.enter(i),n.consume(c),n.exit(i),n.exit(r),t):A(c)?(n.enter("lineEnding"),n.consume(c),n.exit("lineEnding"),f):(n.enter("chunkString",{contentType:"string"}),p(c))}function p(c){return c===null||c===91||c===93||A(c)||l++>999?(n.exit("chunkString"),f(c)):(n.consume(c),g||(g=!C(c)),c===92?h:p)}function h(c){return c===91||c===92||c===93?(n.consume(c),l++,p):p(c)}}function Be(n,t,e,r,i,s){let a;return l;function l(h){return h===34||h===39||h===40?(n.enter(r),n.enter(i),n.consume(h),n.exit(i),a=h===40?41:h,g):e(h)}function g(h){return h===a?(n.enter(i),n.consume(h),n.exit(i),n.exit(r),t):(n.enter(s),m(h))}function m(h){return h===a?(n.exit(s),g(a)):h===null?e(h):A(h)?(n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),B(n,m,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===a||h===null||A(h)?(n.exit("chunkString"),m(h)):(n.consume(h),h===92?p:f)}function p(h){return h===a||h===92?(n.consume(h),f):f(h)}}function Wn(n,t){let e;return r;function r(i){return A(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),e=!0,r):C(i)?B(n,r,e?"linePrefix":"lineSuffix")(i):t(i)}}const Fi={name:"definition",tokenize:Bi},$i={tokenize:Ni,partial:!0};function Bi(n,t,e){const r=this;let i;return s;function s(c){return n.enter("definition"),a(c)}function a(c){return $e.call(r,n,l,e,"definitionLabel","definitionLabelMarker","definitionLabelString")(c)}function l(c){return i=Mn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),c===58?(n.enter("definitionMarker"),n.consume(c),n.exit("definitionMarker"),g):e(c)}function g(c){return X(c)?Wn(n,m)(c):m(c)}function m(c){return Fe(n,f,e,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(c)}function f(c){return n.attempt($i,p,p)(c)}function p(c){return C(c)?B(n,h,"whitespace")(c):h(c)}function h(c){return c===null||A(c)?(n.exit("definition"),r.parser.defined.push(i),t(c)):e(c)}}function Ni(n,t,e){return r;function r(l){return X(l)?Wn(n,i)(l):e(l)}function i(l){return Be(n,s,e,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return C(l)?B(n,a,"whitespace")(l):a(l)}function a(l){return l===null||A(l)?t(l):e(l)}}const Pi={name:"hardBreakEscape",tokenize:Mi};function Mi(n,t,e){return r;function r(s){return n.enter("hardBreakEscape"),n.consume(s),i}function i(s){return A(s)?(n.exit("hardBreakEscape"),t(s)):e(s)}}const Di={name:"headingAtx",tokenize:qi,resolve:Ri};function Ri(n,t){let e=n.length-2,r=3,i,s;return n[r][1].type==="whitespace"&&(r+=2),e-2>r&&n[e][1].type==="whitespace"&&(e-=2),n[e][1].type==="atxHeadingSequence"&&(r===e-1||e-4>r&&n[e-2][1].type==="whitespace")&&(e-=r+1===e?2:4),e>r&&(i={type:"atxHeadingText",start:n[r][1].start,end:n[e][1].end},s={type:"chunkText",start:n[r][1].start,end:n[e][1].end,contentType:"text"},fn(n,r,e-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),n}function qi(n,t,e){let r=0;return i;function i(f){return n.enter("atxHeading"),s(f)}function s(f){return n.enter("atxHeadingSequence"),a(f)}function a(f){return f===35&&r++<6?(n.consume(f),a):f===null||X(f)?(n.exit("atxHeadingSequence"),l(f)):e(f)}function l(f){return f===35?(n.enter("atxHeadingSequence"),g(f)):f===null||A(f)?(n.exit("atxHeading"),t(f)):C(f)?B(n,l,"whitespace")(f):(n.enter("atxHeadingText"),m(f))}function g(f){return f===35?(n.consume(f),g):(n.exit("atxHeadingSequence"),l(f))}function m(f){return f===null||f===35||X(f)?(n.exit("atxHeadingText"),l(f)):(n.consume(f),m)}}const Hi=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],le=["pre","script","style","textarea"],Vi={name:"htmlFlow",tokenize:Gi,resolveTo:Wi,concrete:!0},Qi={tokenize:Yi,partial:!0},Ui={tokenize:Ji,partial:!0};function Wi(n){let t=n.length;for(;t--&&!(n[t][0]==="enter"&&n[t][1].type==="htmlFlow"););return t>1&&n[t-2][1].type==="linePrefix"&&(n[t][1].start=n[t-2][1].start,n[t+1][1].start=n[t-2][1].start,n.splice(t-2,2)),n}function Gi(n,t,e){const r=this;let i,s,a,l,g;return m;function m(o){return f(o)}function f(o){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(o),p}function p(o){return o===33?(n.consume(o),h):o===47?(n.consume(o),s=!0,I):o===63?(n.consume(o),i=3,r.interrupt?t:u):gn(o)?(n.consume(o),a=String.fromCharCode(o),q):e(o)}function h(o){return o===45?(n.consume(o),i=2,c):o===91?(n.consume(o),i=5,l=0,v):gn(o)?(n.consume(o),i=4,r.interrupt?t:u):e(o)}function c(o){return o===45?(n.consume(o),r.interrupt?t:u):e(o)}function v(o){const un="CDATA[";return o===un.charCodeAt(l++)?(n.consume(o),l===un.length?r.interrupt?t:L:v):e(o)}function I(o){return gn(o)?(n.consume(o),a=String.fromCharCode(o),q):e(o)}function q(o){if(o===null||o===47||o===62||X(o)){const un=o===47,Sn=a.toLowerCase();return!un&&!s&&le.includes(Sn)?(i=1,r.interrupt?t(o):L(o)):Hi.includes(a.toLowerCase())?(i=6,un?(n.consume(o),E):r.interrupt?t(o):L(o)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?e(o):s?H(o):k(o))}return o===45||mn(o)?(n.consume(o),a+=String.fromCharCode(o),q):e(o)}function E(o){return o===62?(n.consume(o),r.interrupt?t:L):e(o)}function H(o){return C(o)?(n.consume(o),H):N(o)}function k(o){return o===47?(n.consume(o),N):o===58||o===95||gn(o)?(n.consume(o),P):C(o)?(n.consume(o),k):N(o)}function P(o){return o===45||o===46||o===58||o===95||mn(o)?(n.consume(o),P):R(o)}function R(o){return o===61?(n.consume(o),d):C(o)?(n.consume(o),R):k(o)}function d(o){return o===null||o===60||o===61||o===62||o===96?e(o):o===34||o===39?(n.consume(o),g=o,z):C(o)?(n.consume(o),d):V(o)}function z(o){return o===g?(n.consume(o),g=null,T):o===null||A(o)?e(o):(n.consume(o),z)}function V(o){return o===null||o===34||o===39||o===47||o===60||o===61||o===62||o===96||X(o)?R(o):(n.consume(o),V)}function T(o){return o===47||o===62||C(o)?k(o):e(o)}function N(o){return o===62?(n.consume(o),y):e(o)}function y(o){return o===null||A(o)?L(o):C(o)?(n.consume(o),y):e(o)}function L(o){return o===45&&i===2?(n.consume(o),J):o===60&&i===1?(n.consume(o),W):o===62&&i===4?(n.consume(o),ln):o===63&&i===3?(n.consume(o),u):o===93&&i===5?(n.consume(o),hn):A(o)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(Qi,bn,M)(o)):o===null||A(o)?(n.exit("htmlFlowData"),M(o)):(n.consume(o),L)}function M(o){return n.check(Ui,Q,bn)(o)}function Q(o){return n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),S}function S(o){return o===null||A(o)?M(o):(n.enter("htmlFlowData"),L(o))}function J(o){return o===45?(n.consume(o),u):L(o)}function W(o){return o===47?(n.consume(o),a="",an):L(o)}function an(o){if(o===62){const un=a.toLowerCase();return le.includes(un)?(n.consume(o),ln):L(o)}return gn(o)&&a.length<8?(n.consume(o),a+=String.fromCharCode(o),an):L(o)}function hn(o){return o===93?(n.consume(o),u):L(o)}function u(o){return o===62?(n.consume(o),ln):o===45&&i===2?(n.consume(o),u):L(o)}function ln(o){return o===null||A(o)?(n.exit("htmlFlowData"),bn(o)):(n.consume(o),ln)}function bn(o){return n.exit("htmlFlow"),t(o)}}function Ji(n,t,e){const r=this;return i;function i(a){return A(a)?(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),s):e(a)}function s(a){return r.parser.lazy[r.now().line]?e(a):t(a)}}function Yi(n,t,e){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(at,t,e)}}const Zi={name:"htmlText",tokenize:Ki};function Ki(n,t,e){const r=this;let i,s,a;return l;function l(u){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(u),g}function g(u){return u===33?(n.consume(u),m):u===47?(n.consume(u),R):u===63?(n.consume(u),k):gn(u)?(n.consume(u),V):e(u)}function m(u){return u===45?(n.consume(u),f):u===91?(n.consume(u),s=0,v):gn(u)?(n.consume(u),H):e(u)}function f(u){return u===45?(n.consume(u),c):e(u)}function p(u){return u===null?e(u):u===45?(n.consume(u),h):A(u)?(a=p,W(u)):(n.consume(u),p)}function h(u){return u===45?(n.consume(u),c):p(u)}function c(u){return u===62?J(u):u===45?h(u):p(u)}function v(u){const ln="CDATA[";return u===ln.charCodeAt(s++)?(n.consume(u),s===ln.length?I:v):e(u)}function I(u){return u===null?e(u):u===93?(n.consume(u),q):A(u)?(a=I,W(u)):(n.consume(u),I)}function q(u){return u===93?(n.consume(u),E):I(u)}function E(u){return u===62?J(u):u===93?(n.consume(u),E):I(u)}function H(u){return u===null||u===62?J(u):A(u)?(a=H,W(u)):(n.consume(u),H)}function k(u){return u===null?e(u):u===63?(n.consume(u),P):A(u)?(a=k,W(u)):(n.consume(u),k)}function P(u){return u===62?J(u):k(u)}function R(u){return gn(u)?(n.consume(u),d):e(u)}function d(u){return u===45||mn(u)?(n.consume(u),d):z(u)}function z(u){return A(u)?(a=z,W(u)):C(u)?(n.consume(u),z):J(u)}function V(u){return u===45||mn(u)?(n.consume(u),V):u===47||u===62||X(u)?T(u):e(u)}function T(u){return u===47?(n.consume(u),J):u===58||u===95||gn(u)?(n.consume(u),N):A(u)?(a=T,W(u)):C(u)?(n.consume(u),T):J(u)}function N(u){return u===45||u===46||u===58||u===95||mn(u)?(n.consume(u),N):y(u)}function y(u){return u===61?(n.consume(u),L):A(u)?(a=y,W(u)):C(u)?(n.consume(u),y):T(u)}function L(u){return u===null||u===60||u===61||u===62||u===96?e(u):u===34||u===39?(n.consume(u),i=u,M):A(u)?(a=L,W(u)):C(u)?(n.consume(u),L):(n.consume(u),Q)}function M(u){return u===i?(n.consume(u),i=void 0,S):u===null?e(u):A(u)?(a=M,W(u)):(n.consume(u),M)}function Q(u){return u===null||u===34||u===39||u===60||u===61||u===96?e(u):u===47||u===62||X(u)?T(u):(n.consume(u),Q)}function S(u){return u===47||u===62||X(u)?T(u):e(u)}function J(u){return u===62?(n.consume(u),n.exit("htmlTextData"),n.exit("htmlText"),t):e(u)}function W(u){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),an}function an(u){return C(u)?B(n,hn,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):hn(u)}function hn(u){return n.enter("htmlTextData"),a(u)}}const Rt={name:"labelEnd",tokenize:is,resolveTo:rs,resolveAll:es},Xi={tokenize:ss},ns={tokenize:as},ts={tokenize:ls};function es(n){let t=-1;for(;++t<n.length;){const e=n[t][1];(e.type==="labelImage"||e.type==="labelLink"||e.type==="labelEnd")&&(n.splice(t+1,e.type==="labelImage"?4:2),e.type="data",t++)}return n}function rs(n,t){let e=n.length,r=0,i,s,a,l;for(;e--;)if(i=n[e][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;n[e][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(n[e][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=e,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=e);const g={type:n[s][1].type==="labelLink"?"link":"image",start:Object.assign({},n[s][1].start),end:Object.assign({},n[n.length-1][1].end)},m={type:"label",start:Object.assign({},n[s][1].start),end:Object.assign({},n[a][1].end)},f={type:"labelText",start:Object.assign({},n[s+r+2][1].end),end:Object.assign({},n[a-2][1].start)};return l=[["enter",g,t],["enter",m,t]],l=en(l,n.slice(s+1,s+r+3)),l=en(l,[["enter",f,t]]),l=en(l,Dt(t.parser.constructs.insideSpan.null,n.slice(s+r+4,a-3),t)),l=en(l,[["exit",f,t],n[a-2],n[a-1],["exit",m,t]]),l=en(l,n.slice(a+1)),l=en(l,[["exit",g,t]]),fn(n,s,n.length,l),n}function is(n,t,e){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(h){return s?s._inactive?p(h):(a=r.parser.defined.includes(Mn(r.sliceSerialize({start:s.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(h),n.exit("labelMarker"),n.exit("labelEnd"),g):e(h)}function g(h){return h===40?n.attempt(Xi,f,a?f:p)(h):h===91?n.attempt(ns,f,a?m:p)(h):a?f(h):p(h)}function m(h){return n.attempt(ts,f,p)(h)}function f(h){return t(h)}function p(h){return s._balanced=!0,e(h)}}function ss(n,t,e){return r;function r(p){return n.enter("resource"),n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),i}function i(p){return X(p)?Wn(n,s)(p):s(p)}function s(p){return p===41?f(p):Fe(n,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return X(p)?Wn(n,g)(p):f(p)}function l(p){return e(p)}function g(p){return p===34||p===39||p===40?Be(n,m,e,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):f(p)}function m(p){return X(p)?Wn(n,f)(p):f(p)}function f(p){return p===41?(n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),n.exit("resource"),t):e(p)}}function as(n,t,e){const r=this;return i;function i(l){return $e.call(r,n,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(Mn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):e(l)}function a(l){return e(l)}}function ls(n,t,e){return r;function r(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),i}function i(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),t):e(s)}}const us={name:"labelStartImage",tokenize:os,resolveAll:Rt.resolveAll};function os(n,t,e){const r=this;return i;function i(l){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(l),n.exit("labelImageMarker"),s}function s(l){return l===91?(n.enter("labelMarker"),n.consume(l),n.exit("labelMarker"),n.exit("labelImage"),a):e(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?e(l):t(l)}}const ms={name:"labelStartLink",tokenize:cs,resolveAll:Rt.resolveAll};function cs(n,t,e){const r=this;return i;function i(a){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?e(a):t(a)}}const gt={name:"lineEnding",tokenize:gs};function gs(n,t){return e;function e(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),B(n,t,"linePrefix")}}const tt={name:"thematicBreak",tokenize:ps};function ps(n,t,e){let r=0,i;return s;function s(m){return n.enter("thematicBreak"),a(m)}function a(m){return i=m,l(m)}function l(m){return m===i?(n.enter("thematicBreakSequence"),g(m)):r>=3&&(m===null||A(m))?(n.exit("thematicBreak"),t(m)):e(m)}function g(m){return m===i?(n.consume(m),r++,g):(n.exit("thematicBreakSequence"),C(m)?B(n,l,"whitespace")(m):l(m))}}const Z={name:"list",tokenize:bs,continuation:{tokenize:ds},exit:Es},fs={tokenize:_s,partial:!0},hs={tokenize:xs,partial:!0};function bs(n,t,e){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(c){const v=r.containerState.type||(c===42||c===43||c===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||c===r.containerState.marker:St(c)){if(r.containerState.type||(r.containerState.type=v,n.enter(v,{_container:!0})),v==="listUnordered")return n.enter("listItemPrefix"),c===42||c===45?n.check(tt,e,m)(c):m(c);if(!r.interrupt||c===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),g(c)}return e(c)}function g(c){return St(c)&&++a<10?(n.consume(c),g):(!r.interrupt||a<2)&&(r.containerState.marker?c===r.containerState.marker:c===41||c===46)?(n.exit("listItemValue"),m(c)):e(c)}function m(c){return n.enter("listItemMarker"),n.consume(c),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||c,n.check(at,r.interrupt?e:f,n.attempt(fs,h,p))}function f(c){return r.containerState.initialBlankLine=!0,s++,h(c)}function p(c){return C(c)?(n.enter("listItemPrefixWhitespace"),n.consume(c),n.exit("listItemPrefixWhitespace"),h):e(c)}function h(c){return r.containerState.size=s+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,t(c)}}function ds(n,t,e){const r=this;return r.containerState._closeFlow=void 0,n.check(at,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,B(n,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!C(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(hs,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,B(n,n.attempt(Z,t,e),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function xs(n,t,e){const r=this;return B(n,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):e(s)}}function Es(n){n.exit(this.containerState.type)}function _s(n,t,e){const r=this;return B(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(s){const a=r.events[r.events.length-1];return!C(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):e(s)}}const ue={name:"setextUnderline",tokenize:Ls,resolveTo:ks};function ks(n,t){let e=n.length,r,i,s;for(;e--;)if(n[e][0]==="enter"){if(n[e][1].type==="content"){r=e;break}n[e][1].type==="paragraph"&&(i=e)}else n[e][1].type==="content"&&n.splice(e,1),!s&&n[e][1].type==="definition"&&(s=e);const a={type:"setextHeading",start:Object.assign({},n[i][1].start),end:Object.assign({},n[n.length-1][1].end)};return n[i][1].type="setextHeadingText",s?(n.splice(i,0,["enter",a,t]),n.splice(s+1,0,["exit",n[r][1],t]),n[r][1].end=Object.assign({},n[s][1].end)):n[r][1]=a,n.push(["exit",a,t]),n}function Ls(n,t,e){const r=this;let i;return s;function s(m){let f=r.events.length,p;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){p=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(n.enter("setextHeadingLine"),i=m,a(m)):e(m)}function a(m){return n.enter("setextHeadingLineSequence"),l(m)}function l(m){return m===i?(n.consume(m),l):(n.exit("setextHeadingLineSequence"),C(m)?B(n,g,"lineSuffix")(m):g(m))}function g(m){return m===null||A(m)?(n.exit("setextHeadingLine"),t(m)):e(m)}}const ys={tokenize:As};function As(n){const t=this,e=n.attempt(at,r,n.attempt(this.parser.constructs.flowInitial,i,B(n,n.attempt(this.parser.constructs.flow,i,n.attempt(Ci,i)),"linePrefix")));return e;function r(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),t.currentConstruct=void 0,e}function i(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),t.currentConstruct=void 0,e}}const js={resolveAll:Pe()},ws=Ne("string"),Ss=Ne("text");function Ne(n){return{tokenize:t,resolveAll:Pe(n==="text"?vs:void 0)};function t(e){const r=this,i=this.parser.constructs[n],s=e.attempt(i,a,l);return a;function a(f){return m(f)?s(f):l(f)}function l(f){if(f===null){e.consume(f);return}return e.enter("data"),e.consume(f),g}function g(f){return m(f)?(e.exit("data"),s(f)):(e.consume(f),g)}function m(f){if(f===null)return!0;const p=i[f];let h=-1;if(p)for(;++h<p.length;){const c=p[h];if(!c.previous||c.previous.call(r,r.previous))return!0}return!1}}}function Pe(n){return t;function t(e,r){let i=-1,s;for(;++i<=e.length;)s===void 0?e[i]&&e[i][1].type==="data"&&(s=i,i++):(!e[i]||e[i][1].type!=="data")&&(i!==s+2&&(e[s][1].end=e[i-1][1].end,e.splice(s+2,i-s-2),i=s+2),s=void 0);return n?n(e,r):e}}function vs(n,t){let e=0;for(;++e<=n.length;)if((e===n.length||n[e][1].type==="lineEnding")&&n[e-1][1].type==="data"){const r=n[e-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,g;for(;s--;){const m=i[s];if(typeof m=="string"){for(a=m.length;m.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(m===-2)g=!0,l++;else if(m!==-1){s++;break}}if(l){const m={type:e===n.length||g||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+s,_bufferIndex:s?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},m.start),r.start.offset===r.end.offset?Object.assign(r,m):(n.splice(e,0,["enter",m,t],["exit",m,t]),e+=2)}e++}return n}function Cs(n,t,e){let r=Object.assign(e?Object.assign({},e):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},s=[];let a=[],l=[];const g={consume:H,enter:k,exit:P,attempt:z(R),check:z(d),interrupt:z(d,{interrupt:!0})},m={previous:null,code:null,containerState:{},events:[],parser:n,sliceStream:c,sliceSerialize:h,now:v,defineSkip:I,write:p};let f=t.tokenize.call(m,g);return t.resolveAll&&s.push(t),m;function p(y){return a=en(a,y),q(),a[a.length-1]!==null?[]:(V(t,0),m.events=Dt(s,m.events,m),m.events)}function h(y,L){return zs(c(y),L)}function c(y){return Is(a,y)}function v(){const{line:y,column:L,offset:M,_index:Q,_bufferIndex:S}=r;return{line:y,column:L,offset:M,_index:Q,_bufferIndex:S}}function I(y){i[y.line]=y.column,N()}function q(){let y;for(;r._index<a.length;){const L=a[r._index];if(typeof L=="string")for(y=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===y&&r._bufferIndex<L.length;)E(L.charCodeAt(r._bufferIndex));else E(L)}}function E(y){f=f(y)}function H(y){A(y)?(r.line++,r.column=1,r.offset+=y===-3?2:1,N()):y!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),m.previous=y}function k(y,L){const M=L||{};return M.type=y,M.start=v(),m.events.push(["enter",M,m]),l.push(M),M}function P(y){const L=l.pop();return L.end=v(),m.events.push(["exit",L,m]),L}function R(y,L){V(y,L.from)}function d(y,L){L.restore()}function z(y,L){return M;function M(Q,S,J){let W,an,hn,u;return Array.isArray(Q)?bn(Q):"tokenize"in Q?bn([Q]):ln(Q);function ln(G){return Vn;function Vn(kn){const $n=kn!==null&&G[kn],vn=kn!==null&&G.null,ut=[...Array.isArray($n)?$n:$n?[$n]:[],...Array.isArray(vn)?vn:vn?[vn]:[]];return bn(ut)(kn)}}function bn(G){return W=G,an=0,G.length===0?J:o(G[an])}function o(G){return Vn;function Vn(kn){return u=T(),hn=G,G.partial||(m.currentConstruct=G),G.name&&m.parser.constructs.disable.null.includes(G.name)?Sn():G.tokenize.call(L?Object.assign(Object.create(m),L):m,g,un,Sn)(kn)}}function un(G){return y(hn,u),S}function Sn(G){return u.restore(),++an<W.length?o(W[an]):J}}}function V(y,L){y.resolveAll&&!s.includes(y)&&s.push(y),y.resolve&&fn(m.events,L,m.events.length-L,y.resolve(m.events.slice(L),m)),y.resolveTo&&(m.events=y.resolveTo(m.events,m))}function T(){const y=v(),L=m.previous,M=m.currentConstruct,Q=m.events.length,S=Array.from(l);return{restore:J,from:Q};function J(){r=y,m.previous=L,m.currentConstruct=M,m.events.length=Q,l=S,N()}}function N(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Is(n,t){const e=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(e===i)a=[n[e].slice(r,s)];else{if(a=n.slice(e,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(n[i].slice(0,s))}return a}function zs(n,t){let e=-1;const r=[];let i;for(;++e<n.length;){const s=n[e];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}const Os={42:Z,43:Z,45:Z,48:Z,49:Z,50:Z,51:Z,52:Z,53:Z,54:Z,55:Z,56:Z,57:Z,62:Ie},Ts={91:Fi},Fs={[-2]:ct,[-1]:ct,32:ct},$s={35:Di,42:tt,45:[ue,tt],60:Vi,61:ue,95:tt,96:ae,126:ae},Bs={38:Oe,92:ze},Ns={[-5]:gt,[-4]:gt,[-3]:gt,33:us,38:Oe,42:vt,60:[ci,Zi],91:ms,92:[Pi,ze],93:Rt,95:vt,96:Ai},Ps={null:[vt,js]},Ms={null:[42,95]},Ds={null:[]},Rs=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Ms,contentInitial:Ts,disable:Ds,document:Os,flow:$s,flowInitial:Fs,insideSpan:Ps,string:Bs,text:Ns},Symbol.toStringTag,{value:"Module"}));function qs(n){const e=Yr([Rs,...(n||{}).extensions||[]]),r={defined:[],lazy:{},constructs:e,content:i(ii),document:i(ai),flow:i(ys),string:i(ws),text:i(Ss)};return r;function i(s){return a;function a(l){return Cs(r,s,l)}}}function Hs(n){for(;!Te(n););return n}const oe=/[\0\t\n\r]/g;function Vs(){let n=1,t="",e=!0,r;return i;function i(s,a,l){const g=[];let m,f,p,h,c;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",e&&(s.charCodeAt(0)===65279&&p++,e=void 0);p<s.length;){if(oe.lastIndex=p,m=oe.exec(s),h=m&&m.index!==void 0?m.index:s.length,c=s.charCodeAt(h),!m){t=s.slice(p);break}if(c===10&&p===h&&r)g.push(-3),r=void 0;else switch(r&&(g.push(-5),r=void 0),p<h&&(g.push(s.slice(p,h)),n+=h-p),c){case 0:{g.push(65533),n++;break}case 9:{for(f=Math.ceil(n/4)*4,g.push(-2);n++<f;)g.push(-1);break}case 10:{g.push(-4),n=1;break}default:r=!0,n=1}p=h+1}return l&&(r&&g.push(-5),t&&g.push(t),g.push(null)),g}}const Qs=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Us(n){return n.replace(Qs,Ws)}function Ws(n,t,e){if(t)return t;if(e.charCodeAt(0)===35){const i=e.charCodeAt(1),s=i===120||i===88;return ve(e.slice(s?2:1),s?16:10)}return Mt(e)||n}function et(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?me(n.position):"start"in n||"end"in n?me(n):"line"in n||"column"in n?Ct(n):""}function Ct(n){return ce(n&&n.line)+":"+ce(n&&n.column)}function me(n){return Ct(n&&n.start)+"-"+Ct(n&&n.end)}function ce(n){return n&&typeof n=="number"?n:1}const Me={}.hasOwnProperty;function Gs(n,t,e){return typeof t!="string"&&(e=t,t=void 0),Js(e)(Hs(qs(e).document().write(Vs()(n,t,!0))))}function Js(n){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Qt),autolinkProtocol:T,autolinkEmail:T,atxHeading:s(qt),blockQuote:s($n),characterEscape:T,characterReference:T,codeFenced:s(vn),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(vn,a),codeText:s(ut,a),codeTextData:T,data:T,codeFlowValue:T,definition:s(qe),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(He),hardBreakEscape:s(Ht),hardBreakTrailing:s(Ht),htmlFlow:s(Vt,a),htmlFlowData:T,htmlText:s(Vt,a),htmlTextData:T,image:s(Ve),label:a,link:s(Qt),listItem:s(Qe),listItemValue:h,listOrdered:s(Ut,p),listUnordered:s(Ut),paragraph:s(Ue),reference:o,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(qt),strong:s(We),thematicBreak:s(Je)},exit:{atxHeading:g(),atxHeadingSequence:R,autolink:g(),autolinkEmail:kn,autolinkProtocol:Vn,blockQuote:g(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:Sn,characterReferenceMarkerNumeric:Sn,characterReferenceValue:G,codeFenced:g(q),codeFencedFence:I,codeFencedFenceInfo:c,codeFencedFenceMeta:v,codeFlowValue:N,codeIndented:g(E),codeText:g(S),codeTextData:N,data:N,definition:g(),definitionDestinationString:P,definitionLabelString:H,definitionTitleString:k,emphasis:g(),hardBreakEscape:g(L),hardBreakTrailing:g(L),htmlFlow:g(M),htmlFlowData:N,htmlText:g(Q),htmlTextData:N,image:g(W),label:hn,labelText:an,lineEnding:y,link:g(J),listItem:g(),listOrdered:g(),listUnordered:g(),paragraph:g(),referenceString:un,resourceDestinationString:u,resourceTitleString:ln,resource:bn,setextHeading:g(V),setextHeadingLineSequence:z,setextHeadingText:d,strong:g(),thematicBreak:g()}};De(t,(n||{}).mdastExtensions||[]);const e={};return r;function r(b){let x={type:"root",children:[]};const j={stack:[x],tokenStack:[],config:t,enter:l,exit:m,buffer:a,resume:f,data:e},w=[];let O=-1;for(;++O<b.length;)if(b[O][1].type==="listOrdered"||b[O][1].type==="listUnordered")if(b[O][0]==="enter")w.push(O);else{const on=w.pop();O=i(b,on,O)}for(O=-1;++O<b.length;){const on=t[b[O][0]];Me.call(on,b[O][1].type)&&on[b[O][1].type].call(Object.assign({sliceSerialize:b[O][2].sliceSerialize},j),b[O][1])}if(j.tokenStack.length>0){const on=j.tokenStack[j.tokenStack.length-1];(on[1]||ge).call(j,void 0,on[0])}for(x.position={start:Ln(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:Ln(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},O=-1;++O<t.transforms.length;)x=t.transforms[O](x)||x;return x}function i(b,x,j){let w=x-1,O=-1,on=!1,Cn,dn,Qn,Un;for(;++w<=j;){const nn=b[w];switch(nn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{nn[0]==="enter"?O++:O--,Un=void 0;break}case"lineEndingBlank":{nn[0]==="enter"&&(Cn&&!Un&&!O&&!Qn&&(Qn=w),Un=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Un=void 0}if(!O&&nn[0]==="enter"&&nn[1].type==="listItemPrefix"||O===-1&&nn[0]==="exit"&&(nn[1].type==="listUnordered"||nn[1].type==="listOrdered")){if(Cn){let Bn=w;for(dn=void 0;Bn--;){const xn=b[Bn];if(xn[1].type==="lineEnding"||xn[1].type==="lineEndingBlank"){if(xn[0]==="exit")continue;dn&&(b[dn][1].type="lineEndingBlank",on=!0),xn[1].type="lineEnding",dn=Bn}else if(!(xn[1].type==="linePrefix"||xn[1].type==="blockQuotePrefix"||xn[1].type==="blockQuotePrefixWhitespace"||xn[1].type==="blockQuoteMarker"||xn[1].type==="listItemIndent"))break}Qn&&(!dn||Qn<dn)&&(Cn._spread=!0),Cn.end=Object.assign({},dn?b[dn][1].start:nn[1].end),b.splice(dn||w,0,["exit",Cn,nn[2]]),w++,j++}if(nn[1].type==="listItemPrefix"){const Bn={type:"listItem",_spread:!1,start:Object.assign({},nn[1].start),end:void 0};Cn=Bn,b.splice(w,0,["enter",Bn,nn[2]]),w++,j++,Qn=void 0,Un=!0}}}return b[x][1]._spread=on,j}function s(b,x){return j;function j(w){l.call(this,b(w),w),x&&x.call(this,w)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(b,x,j){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([x,j]),b.position={start:Ln(x.start),end:void 0}}function g(b){return x;function x(j){b&&b.call(this,j),m.call(this,j)}}function m(b,x){const j=this.stack.pop(),w=this.tokenStack.pop();if(w)w[0].type!==b.type&&(x?x.call(this,b,w[0]):(w[1]||ge).call(this,b,w[0]));else throw new Error("Cannot close `"+b.type+"` ("+et({start:b.start,end:b.end})+"): it’s not open");j.position.end=Ln(b.end)}function f(){return Gr(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function h(b){if(this.data.expectingFirstListItemValue){const x=this.stack[this.stack.length-2];x.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function c(){const b=this.resume(),x=this.stack[this.stack.length-1];x.lang=b}function v(){const b=this.resume(),x=this.stack[this.stack.length-1];x.meta=b}function I(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function q(){const b=this.resume(),x=this.stack[this.stack.length-1];x.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function E(){const b=this.resume(),x=this.stack[this.stack.length-1];x.value=b.replace(/(\r?\n|\r)$/g,"")}function H(b){const x=this.resume(),j=this.stack[this.stack.length-1];j.label=x,j.identifier=Mn(this.sliceSerialize(b)).toLowerCase()}function k(){const b=this.resume(),x=this.stack[this.stack.length-1];x.title=b}function P(){const b=this.resume(),x=this.stack[this.stack.length-1];x.url=b}function R(b){const x=this.stack[this.stack.length-1];if(!x.depth){const j=this.sliceSerialize(b).length;x.depth=j}}function d(){this.data.setextHeadingSlurpLineEnding=!0}function z(b){const x=this.stack[this.stack.length-1];x.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function V(){this.data.setextHeadingSlurpLineEnding=void 0}function T(b){const j=this.stack[this.stack.length-1].children;let w=j[j.length-1];(!w||w.type!=="text")&&(w=Ge(),w.position={start:Ln(b.start),end:void 0},j.push(w)),this.stack.push(w)}function N(b){const x=this.stack.pop();x.value+=this.sliceSerialize(b),x.position.end=Ln(b.end)}function y(b){const x=this.stack[this.stack.length-1];if(this.data.atHardBreak){const j=x.children[x.children.length-1];j.position.end=Ln(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(x.type)&&(T.call(this,b),N.call(this,b))}function L(){this.data.atHardBreak=!0}function M(){const b=this.resume(),x=this.stack[this.stack.length-1];x.value=b}function Q(){const b=this.resume(),x=this.stack[this.stack.length-1];x.value=b}function S(){const b=this.resume(),x=this.stack[this.stack.length-1];x.value=b}function J(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const x=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=x,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function W(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const x=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=x,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function an(b){const x=this.sliceSerialize(b),j=this.stack[this.stack.length-2];j.label=Us(x),j.identifier=Mn(x).toLowerCase()}function hn(){const b=this.stack[this.stack.length-1],x=this.resume(),j=this.stack[this.stack.length-1];if(this.data.inReference=!0,j.type==="link"){const w=b.children;j.children=w}else j.alt=x}function u(){const b=this.resume(),x=this.stack[this.stack.length-1];x.url=b}function ln(){const b=this.resume(),x=this.stack[this.stack.length-1];x.title=b}function bn(){this.data.inReference=void 0}function o(){this.data.referenceType="collapsed"}function un(b){const x=this.resume(),j=this.stack[this.stack.length-1];j.label=x,j.identifier=Mn(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function Sn(b){this.data.characterReferenceType=b.type}function G(b){const x=this.sliceSerialize(b),j=this.data.characterReferenceType;let w;j?(w=ve(x,j==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):w=Mt(x);const O=this.stack.pop();O.value+=w,O.position.end=Ln(b.end)}function Vn(b){N.call(this,b);const x=this.stack[this.stack.length-1];x.url=this.sliceSerialize(b)}function kn(b){N.call(this,b);const x=this.stack[this.stack.length-1];x.url="mailto:"+this.sliceSerialize(b)}function $n(){return{type:"blockquote",children:[]}}function vn(){return{type:"code",lang:null,meta:null,value:""}}function ut(){return{type:"inlineCode",value:""}}function qe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function He(){return{type:"emphasis",children:[]}}function qt(){return{type:"heading",depth:0,children:[]}}function Ht(){return{type:"break"}}function Vt(){return{type:"html",value:""}}function Ve(){return{type:"image",title:null,url:"",alt:null}}function Qt(){return{type:"link",title:null,url:"",children:[]}}function Ut(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function Qe(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function Ue(){return{type:"paragraph",children:[]}}function We(){return{type:"strong",children:[]}}function Ge(){return{type:"text",value:""}}function Je(){return{type:"thematicBreak"}}}function Ln(n){return{line:n.line,column:n.column,offset:n.offset}}function De(n,t){let e=-1;for(;++e<t.length;){const r=t[e];Array.isArray(r)?De(n,r):Ys(n,r)}}function Ys(n,t){let e;for(e in t)if(Me.call(t,e))switch(e){case"canContainEols":{const r=t[e];r&&n[e].push(...r);break}case"transforms":{const r=t[e];r&&n[e].push(...r);break}case"enter":case"exit":{const r=t[e];r&&Object.assign(n[e],r);break}}}function ge(n,t){throw n?new Error("Cannot close `"+n.type+"` ("+et({start:n.start,end:n.end})+"): a different token (`"+t.type+"`, "+et({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+et({start:t.start,end:t.end})+") is still open")}class Re{inspect(){let t=r=>{let i=Hn(this[r]);return isNaN(parseInt(r))?`${r}: ${i}`:i},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}}class K{static fromArray(t,e){let r=e||new Ks;return t.reduceRight((i,s)=>new Xs(s,i),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new Zs(this)}inspect(){return`[${this.toArray().map(Hn).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}}function _(n,t){return K.fromArray(n,t)}var Tn;class Zs{constructor(t){Y(this,Tn,void 0);$(this,Tn,t)}next(){if(F(this,Tn).isEmpty())return{done:!0};{let{head:t,tail:e}=F(this,Tn);return $(this,Tn,e),{value:t,done:!1}}}}Tn=new WeakMap;class Ks extends K{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}}class Xs extends K{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}}function Hn(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(Hn).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(Hn).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return na(n)}}function na(n){var l,g;let[t,e]=ta(n),r=((g=(l=Object.getPrototypeOf(n))==null?void 0:l.constructor)==null?void 0:g.name)||"Object",i=[];for(let m of t(n))i.push(`${Hn(m)}: ${Hn(e(n,m))}`);let s=i.length?" "+i.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${s}})`}function ta(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function lt(n,t,e,r,i,s){let a=new globalThis.Error(i);a.gleam_error=n,a.module=t,a.line=e,a.fn=r;for(let l in s)a[l]=s[l];return a}function ea(n){return Vr(_([]),_([je(_([]),_([pn(n)]))]))}function ra(n){return Qr(_([]),n)}function pt(n,t){return we(_([D("group")]),_([pn(n),Pt(_([$t("#"+t),D("pl-2 text-gray-200 opacity-0 transition-opacity"),D("group-hover:underline group-hover:opacity-100")]),_([pn("#")]))]))}function ia(n){return we(_([D("px-2 py-1 text-xs text-gray-700 border border-gray-200 rounded")]),_([pn(n)]))}function sa(n){return je(_([]),_([pn(n)]))}function aa(n,t){return Pt(_([$t(n)]),t)}function la(n,t){if(n)return Hr(_([]),t);if(n)throw lt("case_no_match","app/ui/markdown",96,"list","No case clause matched",{values:[n]});return Ae(_([]),t)}function ua(n,t,e,r){let i=or(n,3),s=Pn(e,ia);if(i===1)return Mr(_([D("flex items-center justify-between"),mt(r)]),_([pt(t,r),nt(_([D("flex gap-4")]),s)]));if(i===2)return Bt(_([D("flex items-center justify-between border-t"),mt(r)]),_([pt(t,r),nt(_([D("flex gap-4")]),s)]));if(i===3)return Dr(_([D("flex items-center justify-between"),mt(r)]),_([pt(t,r),nt(_([D("flex gap-2")]),s)]));throw lt("case_no_match","app/ui/markdown",28,"heading","No case clause matched",{values:[i]})}function oa(n){return ye(_([]),n)}function ma(n){return nt(_([]),n)}function ca(n){return Ur(_([]),n)}function pe(n){return pn(n)}const ft=new Map,ga=n=>{if(ft.has(n))return ft.get(n);const t=Gs(n),e=[],r=t.children.map(function s(a){switch(a.type){case"code":return ea(a.value);case"emphasis":return ra(K.fromArray(a.children.map(s)));case"heading":{const[l,g]=a.children[0].value.split("|"),m=K.fromArray(g?g.trim().split(" "):[]),f=/^[A-Z]/.test(l.trim())&&a.depth===3?`${l.toLowerCase().trim().replace(/\s/g,"-")}-type`:`${l.toLowerCase().trim().replace(/\s/g,"-")}`;return a.depth>1&&e.push(U("a",K.fromArray([jn("href",`#${f}`),jn("class","text-sm text-gray-400 no-underline"),jn("class","hover:text-gray-700 hover:underline"),jn("class",a.depth===2?"mt-4 first:mt-0":"ml-2")]),K.fromArray([pn(l.trim())]))),ua(a.depth,l.trim(),m,f)}case"inlineCode":return sa(a.value);case"link":return aa(a.url,K.fromArray(a.children));case"list":return la(!!a.ordered,K.fromArray(a.children.map(s)));case"listItem":return oa(K.fromArray(a.children.map(s)));case"paragraph":return ma(K.fromArray(a.children.map(s)));case"strong":return ca(K.fromArray(a.children.map(s)));case"text":return pe(a.value);default:return pe("")}}),i=[K.fromArray(r),K.fromArray(e)];return ft.set(n,i),i};function ht(n,t){return qr(_([]),_([Bt(_([]),_([pn(n)])),Ae(_([D("ml-2")]),Pn(t,e=>{let r=e[0],i=e[1];return ye(_([]),_([Pt(_([$t(i)]),_([pn(r)]))]))}))]))}function pa(){return Le(_([_e(_([["align-self","start"]])),D("sticky top-0 border-r hidden px-4 h-screen"),D("lg:block lg:col-span-2"),D("xl:col-span-2")]),_([Nt(_([D("absolute right-0 inset-y-0 w-[50vw] bg-gray-100 -z-10")]),_([])),Bt(_([D("text-indigo-600")]),_([pn("Lustre.")])),ht("Docs",_([["Quickstart","/docs/quickstart"],["Managing state","/docs/managing-state"],["Side effects","/docs/side-effects"],["Components","/docs/components"],["Server-side rendering","/docs/server-side-rendering"]])),ht("Reference",_([["lustre","/api/lustre"],["lustre/attribute","/api/lustre/attribute"],["lustre/effect","/api/lustre/effect"],["lustre/element","/api/lustre/element"],["lustre/element/html","/api/lustre/element/html"],["lustre/element/svg","/api/lustre/element/svg"],["lustre/event","/api/lustre/event"]])),ht("External",_([["GitHub","https://github.com/hayleigh-dot-dev/gleam-lustre"],["Discord","https://discord.gg/Fm8Pwmy"],["Buy me a coffee?","https://github.com/sponsors/hayleigh-dot-dev"]]))]))}function fa(n){return Rr(_([D("col-span-8 pt-4 px-4 pb-32"),D("lg:px-8 lg:col-span-6"),D("xl:col-span-5")]),n)}function ha(n){return Le(_([_e(_([["align-self","start"]])),D("sticky top-0 border-l hidden p-4 py10 h-screen"),D("xl:block xl:col-span-1")]),_([Nt(_([D("flex flex-col h-full overflow-y-scroll")]),n)]))}function sn(n){let t=ga(n),e=t[0],r=t[1];return Pr(_([D("bg-gray-50 prose max-w-none")]),_([Nt(_([D("max-w-[96rem] mx-auto grid grid-cols-8")]),_([pa(),fa(e),ha(r)]))]))}const ba=`
# lustre
`,da=`
## Applications

### App | erlang javascript

\`\`\`gleam
pub type App(flags, model, msg)
\`\`\`

### Error | erlang javascript

\`\`\`gleam
pub type Error {
  AppAlreadyStarted
  AppNotYetStarted
  ComponentAlreadyRegistered
  ElementNotFound
  NotABrowser
}
\`\`\`

### element | javascript

\`\`\`gleam
pub fn element(el: Element(msg)) -> App(Nil, Nil, msg)
\`\`\`

### simple | javascript

\`\`\`gleam
pub fn simple(
  init: fn(flags) -> model,
  update: fn(model, msg) -> model,
  view: fn(model) -> Element(msg)
) -> App(flags, model, msg)
\`\`\`

### application | javascript

\`\`\`gleam
pub fn application(
  init: fn(flags) -> #(model, Effect(msg)),
  update: fn(model, msg) -> #(model, Effect(msg)),
  view: fn(model) -> Element(msg)
) -> App(flags, model, msg)
\`\`\`

### start | javascript

\`\`\`gleam
pub fn start(
  app: App(flags, model, msg),
  selector: String,
  flags: flags,
) -> Result(fn(msg) -> Nil, Error)
\`\`\`

### destroy | javascript

\`\`\`gleam
pub fn destroy(app: App(flags, model, msg)) -> Nil
\`\`\`
`,xa=`
## Components

### component | javascript

\`\`\`gleam
pub fn component(
  name: String,
  init: fn() -> #(model, Effect(msg)),
  update: fn(model, msg) -> #(model, Effect(msg)),
  view: fn(model) -> Element(msg),
  on_attribute_change: Map(String, Decoder(msg)),
) -> Result(Nil, Error)
\`\`\`
`,Ea=`
## Utilities

### is_browser | erlang javascript

\`\`\`gleam
pub fn is_browser() -> Bool
\`\`\`

### is_registered | erlang javascript

\`\`\`gleam
pub fn is_registered(_name: String) -> Bool
\`\`\`

`;function fe(){let n=_([ba,da,xa,Ea]),t=rn(n,`
`);return sn(t)}const _a=`
# lustre/attribute
`,ka=`
## Constructing attributes

### Attribute | erlang javascript

\`\`\`gleam
pub opaque type Attribute(msg)
\`\`\`

### attribute | erlang javascript

\`\`\`gleam
pub fn attribute(name: String, value: String) -> Attribute(msg)
\`\`\`

### property | erlang javascript

\`\`\`gleam
pub fn property(name: String, value: any) -> Attribute(msg)
\`\`\`

### on | erlang javascript

\`\`\`gleam
pub fn on(name: String, handler: fn(Dynamic) -> Option(msg)) -> Attribute(msg)
\`\`\`
`,La=`
## Mapping attributes

### map | erlang javascript

\`\`\`gleam
pub fn map(attr: Attribute(a), f: fn(a) -> b) -> Attribute(b)
\`\`\`
`,ya=`
## Conversions

### to_string | erlang javascript

\`\`\`gleam
pub fn to_string(attr: Attribute(msg)) -> String
\`\`\`

### to_string_builder | erlang javascript

\`\`\`gleam
pub fn to_string_builder(attr: Attribute(msg)) -> StringBuilder
\`\`\`
`,Aa=`
## Common attributes

### style | erlang javascript

\`\`\`gleam
pub fn style(properties: List(#(String, String))) -> Attribute(msg)
\`\`\`

### class | erlang javascript

\`\`\`gleam
pub fn class(name: String) -> Attribute(msg)
\`\`\`

### classes | erlang javascript

\`\`\`gleam
pub fn classes(names: List(#(String, Bool))) -> Attribute(msg) 
\`\`\`

### id | erlang javascript

\`\`\`gleam
pub fn id(name: String) -> Attribute(msg)
\`\`\`
`,ja=`
## Input attributes

### type_ | erlang javascript

\`\`\`gleam
pub fn type_(name: String) -> Attribute(msg)
\`\`\`

### value | erlang javascript

\`\`\`gleam
pub fn value(val: Dynamic) -> Attribute(msg)
\`\`\`

### checked | erlang javascript

\`\`\`gleam
pub fn checked(is_checked: Bool) -> Attribute(msg)
\`\`\`

### placeholder | erlang javascript

\`\`\`gleam
pub fn placeholder(text: String) -> Attribute(msg)
\`\`\`

### selected | erlang javascript

\`\`\`gleam
pub fn selected(is_selected: Bool) -> Attribute(msg
\`\`\`
`,wa=`
## More input attributes

### accept | erlang javascript

\`\`\`gleam
pub fn accept(types: List(String)) -> Attribute(msg)
\`\`\`

### accept_charset | erlang javascript

\`\`\`gleam
pub fn accept_charset(types: List(String)) -> Attribute(msg)
\`\`\`

### msg | erlang javascript

\`\`\`gleam
pub fn msg(uri: String) -> Attribute(msg)
\`\`\`

### autocomplete | erlang javascript

\`\`\`gleam
pub fn autocomplete(name: String) -> Attribute(msg)
\`\`\`

### autofocus | erlang javascript

\`\`\`gleam
pub fn autofocus(should_autofocus: Bool) -> Attribute(msg)
\`\`\`

### disabled | erlang javascript

\`\`\`gleam
pub fn disabled(is_disabled: Bool) -> Attribute(msg)
\`\`\`

### name | erlang javascript

\`\`\`gleam
pub fn name(name: String) -> Attribute(msg)
\`\`\`

### pattern | erlang javascript

\`\`\`gleam
pub fn pattern(regex: String) -> Attribute(msg)
\`\`\`

### readonly | erlang javascript

\`\`\`gleam
pub fn readonly(is_readonly: Bool) -> Attribute(msg)
\`\`\`

### required | erlang javascript

\`\`\`gleam
pub fn required(is_required: Bool) -> Attribute(msg)
\`\`\`

### for | erlang javascript

\`\`\`gleam
pub fn for(id: String) -> Attribute(msg)
\`\`\`
`,Sa=`
## Range attributes

### max | erlang javascript

\`\`\`gleam
pub fn max(val: String) -> Attribute(msg)
\`\`\`

### min | erlang javascript

\`\`\`gleam
pub fn min(val: String) -> Attribute(msg)
\`\`\`

### step | erlang javascript

\`\`\`gleam
pub fn step(val: String) -> Attribute(msg)
\`\`\`
`,va=`
## Textarea attributes

### cols | erlang javascript

\`\`\`gleam
pub fn cols(val: Int) -> Attribute(msg)
\`\`\`

### rows | erlang javascript

\`\`\`gleam
pub fn rows(val: Int) -> Attribute(msg)
\`\`\`

### wrap | erlang javascript

\`\`\`gleam
pub fn wrap(mode: String) -> Attribute(msg)
\`\`\`
`,Ca=`
## Link attributes

### href | erlang javascript

\`\`\`gleam
pub fn href(uri: String) -> Attribute(msg)
\`\`\`

### target | erlang javascript

\`\`\`gleam
pub fn target(target: String) -> Attribute(msg)
\`\`\`

### download | erlang javascript

\`\`\`gleam
pub fn download(filename: String) -> Attribute(msg)
\`\`\`

### rel | erlang javascript

\`\`\`gleam
pub fn rel(relationship: String) -> Attribute(msg)
\`\`\`
`,Ia=`
## Embedded content

### gleam | erlang javascript

\`\`\`gleam
pub fn src(uri: String) -> Attribute(msg)
\`\`\`

### gleam | erlang javascript

\`\`\`gleam
pub fn height(val: Int) -> Attribute(msg)
\`\`\`

### gleam | erlang javascript

\`\`\`gleam
pub fn width(val: Int) -> Attribute(msg)
\`\`\`

### gleam | erlang javascript

\`\`\`gleam
pub fn alt(text: String) -> Attribute(msg)
\`\`\`
`,za=`
## Audio and video attributes


### autoplay | erlang javascript

\`\`\`gleam
pub fn autoplay(should_autoplay: Bool) -> Attribute(msg)
\`\`\`


### controls | erlang javascript

\`\`\`gleam
pub fn controls(visible: Bool) -> Attribute(msg)
\`\`\`


### loop | erlang javascript

\`\`\`gleam
pub fn loop(should_loop: Bool) -> Attribute(msg)
\`\`\`
`;function Oa(){let n=_([_a,ka,La,ya,Aa,ja,wa,Sa,va,Ca,Ia,za]),t=rn(n,`
`);return sn(t)}const Ta=`
# lustre/effect
`,Fa=`
## Constructing Effects

### Effect | erlang javascript

\`\`\`gleam
pub opaque type Effect(action) 
\`\`\`

### from | erlang javascript

\`\`\`gleam
pub fn from(effect: fn(fn(action) -> Nil) -> Nil) -> Effect(action)
\`\`\`

### none | erlang javascript

\`\`\`gleam
pub fn none() -> Effect(action)
\`\`\`

### batch | erlang javascript

\`\`\`gleam
pub fn batch(effects: List(Effect(action))) -> Effect(action)
\`\`\`
`,$a=`
## Manipulating Effects

### map | erlang javascript

\`\`\`gleam
pub fn map(effect: Effect(a), f: fn(a) -> b) -> Effect(b)
\`\`\`
`;function Ba(){let n=_([Ta,Fa,$a]),t=rn(n,`
`);return sn(t)}const Na=`
# lustre/element
`,Pa=`
## Constructing elements

### Element | erlang javascript

\`\`\`gleam
pub opaque type Element(msg)
\`\`\`

### element | erlang javascript

\`\`\`gleam
pub fn element(
  tag: String,
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### namespaced | erlang javascript

\`\`\`gleam
pub fn namespaced(
  namespace: String,
  tag: String,
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### text | erlang javascript

\`\`\`gleam
pub fn text(content: String) -> Element(msg) 
\`\`\`
`,Ma=`
## Mapping elements

### map | erlang javascript

\`\`\`gleam
pub fn map(element: Element(a), f: fn(a) -> b) -> Element(b)
\`\`\`
`,Da=`
## Conversions

### to_string | erlang javascript

\`\`\`gleam
pub fn to_string(element: Element(msg)) -> String
\`\`\`

### to_string_builder | erlang javascript

\`\`\`gleam
pub fn to_string_builder(element: Element(msg)) -> StringBuilder
\`\`\`
`;function Ra(){let n=_([Na,Pa,Ma,Da]),t=rn(n,`
`);return sn(t)}const qa=`
# lustre/element/html
`,Ha=`
## Main Root

### html | erlang javascript

\`\`\`gleam
pub fn html(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Va=`
## Document Metadata

### base | erlang javascript

\`\`\`gleam
pub fn base(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### head | erlang javascript

\`\`\`gleam
pub fn head(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### link | erlang javascript

\`\`\`gleam
pub fn link(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### meta | erlang javascript

\`\`\`gleam
pub fn meta(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### style | erlang javascript

\`\`\`gleam
pub fn style(attrs: List(Attribute(msg)), css: String) -> Element(msg)
\`\`\`

### title | erlang javascript

\`\`\`gleam
pub fn title(attrs: List(Attribute(msg)), content: String) -> Element(msg)
\`\`\`
`,Qa=`
## Sectioning root

### body | erlang javascript

\`\`\`gleam
pub fn body(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Ua=`
## Content sectioning

### address | erlang javascript

\`\`\`gleam
pub fn address(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### article | erlang javascript

\`\`\`gleam
pub fn article(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### aside | erlang javascript

\`\`\`gleam
pub fn aside(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### footer | erlang javascript

\`\`\`gleam
pub fn footer(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### header | erlang javascript

\`\`\`gleam
pub fn header(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### h1 | erlang javascript

\`\`\`gleam
pub fn h1(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### h2 | erlang javascript

\`\`\`gleam
pub fn h2(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### h3 | erlang javascript

\`\`\`gleam
pub fn h3(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### h4 | erlang javascript

\`\`\`gleam
pub fn h4(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### h5 | erlang javascript

\`\`\`gleam
pub fn h5(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### h6 | erlang javascript

\`\`\`gleam
pub fn h6(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### hgroup | erlang javascript

\`\`\`gleam
pub fn hgroup(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### main | erlang javascript

\`\`\`gleam
pub fn main(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### nav | erlang javascript

\`\`\`gleam
pub fn nav(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### section | erlang javascript

\`\`\`gleam
pub fn section(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### search | erlang javascript

\`\`\`gleam
pub fn search(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Wa=`
## Text content

### blockquote | erlang javascript

\`\`\`gleam
pub fn blockquote(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### dd | erlang javascript

\`\`\`gleam
pub fn dd(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### div | erlang javascript

\`\`\`gleam
pub fn div(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### dl | erlang javascript

\`\`\`gleam
pub fn dl(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### dt | erlang javascript

\`\`\`gleam
pub fn dt(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### figcaption | erlang javascript

\`\`\`gleam
pub fn figcaption(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### figure | erlang javascript

\`\`\`gleam
pub fn figure(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### hr | erlang javascript

\`\`\`gleam
pub fn hr(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### li | erlang javascript

\`\`\`gleam
pub fn li(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### menu | erlang javascript

\`\`\`gleam
pub fn menu(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### ol | erlang javascript

\`\`\`gleam
pub fn ol(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### p | erlang javascript

\`\`\`gleam
pub fn p(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### pre | erlang javascript

\`\`\`gleam
pub fn pre(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### ul | erlang javascript

\`\`\`gleam
pub fn ul(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Ga=`
## Inline text semantics

### a | erlang javascript

\`\`\`gleam
pub fn a(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### abbr | erlang javascript

\`\`\`gleam
pub fn abbr(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### b | erlang javascript

\`\`\`gleam
pub fn b(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### bdi | erlang javascript

\`\`\`gleam
pub fn bdi(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### bdo | erlang javascript

\`\`\`gleam
pub fn bdo(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### br | erlang javascript

\`\`\`gleam
pub fn br(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### cite | erlang javascript

\`\`\`gleam
pub fn cite(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### code | erlang javascript

\`\`\`gleam
pub fn code(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### data | erlang javascript

\`\`\`gleam
pub fn data(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### dfn | erlang javascript

\`\`\`gleam
pub fn dfn(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### em | erlang javascript

\`\`\`gleam
pub fn em(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### i | erlang javascript

\`\`\`gleam
pub fn i(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### kbd | erlang javascript

\`\`\`gleam
pub fn kbd(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### mark | erlang javascript

\`\`\`gleam
pub fn mark(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### q | erlang javascript

\`\`\`gleam
pub fn q(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### rp | erlang javascript

\`\`\`gleam
pub fn rp(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### rt | erlang javascript

\`\`\`gleam
pub fn rt(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### ruby | erlang javascript

\`\`\`gleam
pub fn ruby(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### s | erlang javascript

\`\`\`gleam
pub fn s(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### samp | erlang javascript

\`\`\`gleam
pub fn samp(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### small | erlang javascript

\`\`\`gleam
pub fn small(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### span | erlang javascript

\`\`\`gleam
pub fn span(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### strong | erlang javascript

\`\`\`gleam
pub fn strong(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### sub | erlang javascript

\`\`\`gleam
pub fn sub(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### sup | erlang javascript

\`\`\`gleam
pub fn sup(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### time | erlang javascript

\`\`\`gleam
pub fn time(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### u | erlang javascript

\`\`\`gleam
pub fn u(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### var | erlang javascript

\`\`\`gleam
pub fn var(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### wbr | erlang javascript

\`\`\`gleam
pub fn wbr(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Ja=`
## Image and multimedia

### area | erlang javascript

\`\`\`gleam
pub fn area(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### audio | erlang javascript

\`\`\`gleam
pub fn audio(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### img | erlang javascript

\`\`\`gleam
pub fn img(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### map | erlang javascript

\`\`\`gleam
pub fn map(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### track | erlang javascript

\`\`\`gleam
pub fn track(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### video | erlang javascript

\`\`\`gleam
pub fn video(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Ya=`
## Embedded content

### embed | erlang javascript

\`\`\`gleam
pub fn embed(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### iframe | erlang javascript

\`\`\`gleam
pub fn iframe(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### object | erlang javascript

\`\`\`gleam
pub fn object(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### picture | erlang javascript

\`\`\`gleam
pub fn picture(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### portal | erlang javascript

\`\`\`gleam
pub fn portal(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### source | erlang javascript

\`\`\`gleam
pub fn source(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Za=`
## SVG and MathML

### svg | erlang javascript

\`\`\`gleam
pub fn svg(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)

### math | erlang javascript

\`\`\`gleam
pub fn math(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Ka=`
## Scripting

### canvas | erlang javascript

\`\`\`gleam
pub fn canvas(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### noscript | erlang javascript

\`\`\`gleam
pub fn noscript(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### script | erlang javascript

\`\`\`gleam
pub fn script(attrs: List(Attribute(msg)), js: String) -> Element(msg)
\`\`\`
`,Xa=`
## Demarcating edits

### del | erlang javascript

\`\`\`gleam
pub fn del(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### ins | erlang javascript

\`\`\`gleam
pub fn ins(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,nl=`
## Table content

### caption | erlang javascript

\`\`\`gleam
pub fn caption(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### col | erlang javascript

\`\`\`gleam
pub fn col(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### colgroup | erlang javascript

\`\`\`gleam
pub fn colgroup(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### table | erlang javascript

\`\`\`gleam
pub fn table(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### tbody | erlang javascript

\`\`\`gleam
pub fn tbody(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### td | erlang javascript

\`\`\`gleam
pub fn td(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### tfoot | erlang javascript

\`\`\`gleam
pub fn tfoot(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### th | erlang javascript

\`\`\`gleam
pub fn th(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### thead | erlang javascript

\`\`\`gleam
pub fn thead(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### tr | erlang javascript

\`\`\`gleam
pub fn tr(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,tl=`
## Forms

### button | erlang javascript

\`\`\`gleam
pub fn button(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### datalist | erlang javascript

\`\`\`gleam
pub fn datalist(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### fieldset | erlang javascript

\`\`\`gleam
pub fn fieldset(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### form | erlang javascript

\`\`\`gleam
pub fn form(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### input | erlang javascript

\`\`\`gleam
pub fn input(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### label | erlang javascript

\`\`\`gleam
pub fn label(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### legend | erlang javascript

\`\`\`gleam
pub fn legend(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### meter | erlang javascript

\`\`\`gleam
pub fn meter(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### optgroup | erlang javascript

\`\`\`gleam
pub fn optgroup(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### option | erlang javascript

\`\`\`gleam
pub fn option(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### output | erlang javascript

\`\`\`gleam
pub fn output(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### progress | erlang javascript

\`\`\`gleam
pub fn progress(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### select | erlang javascript

\`\`\`gleam
pub fn select(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### textarea | erlang javascript

\`\`\`gleam
pub fn textarea(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,el=`
## Interactive elements

### details | erlang javascript

\`\`\`gleam
pub fn details(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### dialog | erlang javascript

\`\`\`gleam
pub fn dialog(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### summary | erlang javascript

\`\`\`gleam
pub fn summary(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,rl=`
## Web components

### slot | erlang javascript

\`\`\`gleam
pub fn slot(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### template | erlang javascript

\`\`\`gleam
pub fn template(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`;function il(){let n=_([qa,Ha,Va,Qa,Ua,Wa,Ga,Ja,Ya,Za,Ka,Xa,nl,tl,el,rl]),t=rn(n,`
`);return sn(t)}const sl=`
# lustre/element/svg
`,al=`
## Animation elements

### animate | erlang javascript

\`\`\`
pub fn animate(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### animate_motion | erlang javascript

\`\`\`
pub fn animate_motion(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### animate_transform | erlang javascript

\`\`\`
pub fn animate_transform(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### mpath | erlang javascript

\`\`\`
pub fn mpath(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### set | erlang javascript

\`\`\`
pub fn set(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,ll=`
## Basic shapes

### circle | erlang javascript

\`\`\`
pub fn circle(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### ellipse | erlang javascript

\`\`\`
pub fn ellipse(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### line | erlang javascript

\`\`\`
pub fn line(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### polygon | erlang javascript

\`\`\`
pub fn polygon(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### polyline | erlang javascript

\`\`\`
pub fn polyline(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### rect | erlang javascript

\`\`\`
pub fn rect(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,ul=`
## Container elements

### a | erlang javascript

\`\`\`gleam
pub fn a(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### defs | erlang javascript

\`\`\`gleam
pub fn defs(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### g | erlang javascript

\`\`\`gleam
pub fn g(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### marker | erlang javascript

\`\`\`gleam
pub fn marker(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### mask | erlang javascript

\`\`\`gleam
pub fn mask(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### missing_glyph | erlang javascript

\`\`\`gleam
pub fn missing_glyph(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### pattern | erlang javascript

\`\`\`gleam
pub fn pattern(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### svg | erlang javascript

\`\`\`gleam
pub fn svg(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### switch | erlang javascript

\`\`\`gleam
pub fn switch(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### symbol | erlang javascript

\`\`\`gleam
pub fn symbol(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,ol=`
## Descriptive elements

### desc | erlang javascript

\`\`\`gleam
pub fn desc(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### metadata | erlang javascript

\`\`\`gleam
pub fn metadata(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### title | erlang javascript

\`\`\`gleam
pub fn title(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,ml=`
## Filter effects

### fe_blend | erlang javascript

\`\`\`
pub fn fe_blend(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_color_matrix | erlang javascript

\`\`\`
pub fn fe_color_matrix(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_component_transfer | erlang javascript

\`\`\`
pub fn fe_component_transfer(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_composite | erlang javascript

\`\`\`
pub fn fe_composite(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_convolve_matrix | erlang javascript

\`\`\`
pub fn fe_convolve_matrix(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_diffuse_lighting | erlang javascript

\`\`\`gleam
pub fn fe_diffuse_lighting(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### fe_displacement_map | erlang javascript

\`\`\`
pub fn fe_displacement_map(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_drop_shadow | erlang javascript

\`\`\`
pub fn fe_drop_shadow(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_flood | erlang javascript

\`\`\`
pub fn fe_flood(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_a | erlang javascript

\`\`\`
pub fn fe_func_a(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_b | erlang javascript

\`\`\`
pub fn fe_func_b(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_g | erlang javascript

\`\`\`
pub fn fe_func_g(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_r | erlang javascript

\`\`\`
pub fn fe_func_r(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_gaussian_blur | erlang javascript

\`\`\`
pub fn fe_gaussian_blur(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_image | erlang javascript

\`\`\`
pub fn fe_image(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_merge | erlang javascript

\`\`\`gleam
pub fn fe_merge(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### fe_merge_node | erlang javascript

\`\`\`
pub fn fe_merge_node(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_morphology | erlang javascript

\`\`\`
pub fn fe_morphology(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_offset | erlang javascript

\`\`\`
pub fn fe_offset(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_specular_lighting | erlang javascript

\`\`\`gleam
pub fn fe_specular_lighting(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### fe_tile | erlang javascript

\`\`\`gleam
pub fn fe_tile(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### fe_turbulence | erlang javascript

\`\`\`
pub fn fe_turbulence(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,cl=`
## Gradient elements

### linear_gradient | erlang javascript

\`\`\`gleam
pub fn linear_gradient(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### radial_gradient | erlang javascript

\`\`\`gleam
pub fn radial_gradient(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### stop | erlang javascript

\`\`\`
pub fn stop(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,gl=`
## Graphical elements

### image | erlang javascript

\`\`\`
pub fn image(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### path | erlang javascript

\`\`\`
pub fn path(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### text | erlang javascript

\`\`\`
pub fn text(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### use_ | erlang javascript

\`\`\`
pub fn use_(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,pl=`
## Lighting elements

### fe_distant_light | erlang javascript

\`\`\`
pub fn fe_distant_light(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_point_light | erlang javascript

\`\`\`
pub fn fe_point_light(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_spot_light | erlang javascript

\`\`\`
pub fn fe_spot_light(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,fl=`
## Non-rendered elements 

### clip_path | erlang javascript

\`\`\`gleam
pub fn clip_path(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### script | erlang javascript

\`\`\`
pub fn script(attrs: List(Attribute(msg)), js: String) -> Element(msg)
\`\`\`

### style | erlang javascript

\`\`\`
pub fn style(attrs: List(Attribute(msg)), css: String) -> Element(msg)
\`\`\`
`,hl=`
## Renderable elements

### foreign_object | erlang javascript

\`\`\`gleam
pub fn foreign_object(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### text_path | erlang javascript

\`\`\`gleam
pub fn text_path(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### tspan | erlang javascript

\`\`\`gleam
pub fn tspan(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`;function bl(){let n=_([sl,al,ll,ul,ol,ml,cl,gl,pl,fl,hl]),t=rn(n,`
`);return sn(t)}const dl=`
# lustre/event
`,xl=`
## Mouse events

### on_click | erlang javascript

\`\`\`gleam
pub fn on_click(msg: msg) -> Attribute(msg)
\`\`\`

### on_mouse_down | erlang javascript

\`\`\`gleam
pub fn on_mouse_down(msg: msg) -> Attribute(msg)
\`\`\`

### on_mouse_up | erlang javascript

\`\`\`gleam
pub fn on_mouse_up(msg: msg) -> Attribute(msg)
\`\`\`

### on_mouse_enter | erlang javascript

\`\`\`gleam
pub fn on_mouse_enter(msg: msg) -> Attribute(msg)
\`\`\`

### on_mouse_leave | erlang javascript

\`\`\`gleam
pub fn on_mouse_leave(msg: msg) -> Attribute(msg)
\`\`\`

### on_mouse_over | erlang javascript

\`\`\`gleam
pub fn on_mouse_over(msg: msg) -> Attribute(msg)
\`\`\`

### on_mouse_out | erlang javascript

\`\`\`gleam
pub fn on_mouse_out(msg: msg) -> Attribute(msg)
\`\`\`
`,El=`
## Keyboard events

### on_keypress | erlang javascript

\`\`\`gleam
pub fn on_keypress(msg: fn(String) -> msg) -> Attribute(msg)
\`\`\`

### on_keydown | erlang javascript

\`\`\`gleam
pub fn on_keydown(msg: fn(String) -> msg) -> Attribute(msg)
\`\`\`

### on_keyup | erlang javascript

\`\`\`gleam
pub fn on_keyup(msg: fn(String) -> msg) -> Attribute(msg)
\`\`\`
`,_l=`
## Form messages

### on_input | erlang javascript

\`\`\`gleam
pub fn on_input(msg: fn(String) -> msg) -> Attribute(msg)
\`\`\`

### on_change | erlang javascript

\`\`\`gleam
pub fn on_change(msg: fn(Bool) -> msg) -> Attribute(msg)
\`\`\`

### on_submit | erlang javascript

\`\`\`gleam
pub fn on_submit(msg: msg) -> Attribute(msg)
\`\`\`
`,kl=`
## Focus events

### on_focus | erlang javascript

\`\`\`gleam
pub fn on_focus(msg: msg) -> Attribute(msg)
\`\`\`

### on_blur | erlang javascript

\`\`\`gleam
pub fn on_blur(msg: msg) -> Attribute(msg)
\`\`\`
`,Ll=`
## Custom events

### on | erlang javascript

\`\`\`gleam
pub fn on(name: String, handler: fn(Dynamic) -> Option(msg)) -> Attribute(msg)
\`\`\`

### prevent_default | javascript

\`\`\`gleam
pub fn prevent_default(event: Dynamic) -> Nil
\`\`\`

### stop_propagation | javascript

\`\`\`gleam
pub fn stop_propagation(event: Dynamic) -> Nil
\`\`\`

### value | erlang javascript

\`\`\`gleam
pub fn value(event: Dynamic) -> Decoded(String)
\`\`\`

### checked | erlang javascript

\`\`\`gleam
pub fn checked(event: Dynamic) -> Decoded(Bool)
\`\`\`

### mouse_position | erlang javascript

\`\`\`gleam
pub fn mouse_position(event: Dynamic) -> Decoded(#(Float, Float)) 
\`\`\`

### emit | javascript

\`\`\`gleam
pub fn emit(event: String, data: any) -> Effect(msg)
\`\`\`
`;function yl(){let n=_([dl,xl,El,_l,kl,Ll]),t=rn(n,`
`);return sn(t)}const Al=`
# Components
`;function jl(){let n=_([Al]),t=rn(n,`
`);return sn(t)}const wl=`
# Managing state
`;function Sl(){let n=_([wl]),t=rn(n,`
`);return sn(t)}function he(n){let e=jr(n);return ur(e),n}const vl=`# Quickstart
`;function Xn(){let n=_([vl]),t=he(n),e=rn(t,`
`),r=he(e);return sn(r)}const Cl=`
# Server-side rendering
`;function Il(){let n=_([Cl]),t=rn(n,`
`);return sn(t)}const zl=`
# Side effects
`;function Ol(){let n=_([zl]),t=rn(n,`
`);return sn(t)}class Tl extends Re{constructor(t){super(),this.route=t}}class It extends Re{constructor(t){super(),this[0]=t}}function Fl(n){return new Tl(n)}function $l(n,t){if(t instanceof It){let e=t[0];return n.withFields({route:e})}else throw lt("case_no_match","app",48,"update","No case clause matched",{values:[t]})}function Bl(n){let t=n.route.path;return t==="/"?Xn():t==="/api"||t==="/api/lustre"?fe():t==="/api/lustre/attribute"?Oa():t==="/api/lustre/effect"?Ba():t==="/api/lustre/element"?Ra():t==="/api/lustre/element/html"?il():t==="/api/lustre/element/svg"?bl():t==="/api/lustre/event"?yl():t==="/docs"||t==="/docs/quickstart"?Xn():t==="/docs/managing-state"?Sl():t==="/docs/side-effects"?Ol():t==="/docs/components"?jl():t==="/docs/server-side-rendering"?Il():Xn()}function Nl(n){let t=Nr(Fl,$l,Bl),e=zr(t,"body",n);if(!e.isOk())throw lt("assignment_no_match","app",22,"main","Assignment pattern did not match",{value:e});return e[0]}document.addEventListener("DOMContentLoaded",()=>{const n=new URL(window.location.href),t=Nl({path:n.pathname,hash:n.hash});document.addEventListener("click",e=>{let r=e.target;for(;r;){if(r===document.body)return;if(r.tagName==="A"){const i=new URL(r.href);return i.origin!==window.location.origin?void 0:(i.pathname!==window.location.pathname&&e.preventDefault(),window.requestAnimationFrame(()=>window.history.pushState({},"",i.href)),void t(new It({path:i.pathname,hash:i.hash})))}r=r.parentNode}}),window.addEventListener("popstate",()=>{const e=new URL(window.location.href);t(new It({path:e.pathname,hash:e.hash}))})});
