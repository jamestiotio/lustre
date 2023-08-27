var Nn=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var p=(n,t,e)=>(Nn(n,t,"read from private field"),e?e.call(n):t.get(n)),_=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},f=(n,t,e,r)=>(Nn(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e);var ln=(n,t,e)=>(Nn(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();let kn=class{inspect(){let t=r=>{let s=J(this[r]);return isNaN(parseInt(r))?`${r}: ${s}`:s},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}},rn=class{static fromArray(t,e){let r=e||new ce;return t.reduceRight((s,i)=>new ge(i,s),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new me(this)}inspect(){return`[${this.toArray().map(J).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}};function O(n,t){return rn.fromArray(n,t)}var V,xt;let me=(xt=class{constructor(t){_(this,V,void 0);f(this,V,t)}next(){if(p(this,V).isEmpty())return{done:!0};{let{head:t,tail:e}=p(this,V);return f(this,V,e),{value:t,done:!1}}}},V=new WeakMap,xt),ce=class extends rn{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}},ge=class extends rn{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}};class wn{static isBitString(t){return(t==null?void 0:t.__gleam_prelude_variant__)==="BitString"}constructor(t){this.buffer=t}get __gleam_prelude_variant__(){return"BitString"}inspect(){return`<<${Array.from(this.buffer).join(", ")}>>`}get length(){return this.buffer.length}byteAt(t){return this.buffer[t]}floatAt(t){return fe(this.buffer.slice(t,t+8))}intFromSlice(t,e){return pe(this.buffer.slice(t,e))}binaryFromSlice(t,e){return new wn(this.buffer.slice(t,e))}sliceAfter(t){return new wn(this.buffer.slice(t))}}function pe(n){n=n.reverse();let t=0;for(let e=n.length-1;e>=0;e--)t=t*256+n[e];return t}function fe(n){return new Float64Array(n.reverse().buffer)[0]}let Gn=class extends kn{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}},N=class extends Gn{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}},H=class extends Gn{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Error"}isOk(){return!1}};function J(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(J).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(J).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return he(n)}}function he(n){var u,m;let[t,e]=Ot(n),r=((m=(u=Object.getPrototypeOf(n))==null?void 0:u.constructor)==null?void 0:m.name)||"Object",s=[];for(let o of t(n))s.push(`${J(o)}: ${J(e(n,o))}`);let i=s.length?" "+s.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${i}})`}function U(n,t){let e=[n,t];for(;e.length;){let r=e.pop(),s=e.pop();if(r===s)continue;if(!gt(r)||!gt(s)||!Ee(r,s)||de(r,s)||be(r,s)||_e(r,s)||ye(r,s)||ve(r,s))return!1;const a=Object.getPrototypeOf(r);if(a!==null&&typeof a.equals=="function")try{if(r.equals(s))continue;return!1}catch{}let[u,m]=Ot(r);for(let o of u(r))e.push(m(r,o),m(s,o))}return!0}function Ot(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function de(n,t){return n instanceof Date&&(n>t||n<t)}function be(n,t){return n.buffer instanceof ArrayBuffer&&n.BYTES_PER_ELEMENT&&!(n.byteLength===t.byteLength&&n.every((e,r)=>e===t[r]))}function _e(n,t){return Array.isArray(n)&&n.length!==t.length}function ye(n,t){return n instanceof Map&&n.size!==t.size}function ve(n,t){return n instanceof Set&&(n.size!=t.size||[...n].some(e=>!t.has(e)))}function gt(n){return typeof n=="object"&&n!==null}function Ee(n,t){return typeof n!="object"&&typeof t!="object"&&(!n||!t)||[Promise,WeakSet,WeakMap,Function].some(r=>n instanceof r)?!1:n.constructor===t.constructor||n.__gleam_prelude_variant__&&n.__gleam_prelude_variant__===t.__gleam_prelude_variant__}function $(n,t,e,r,s,i){let a=new globalThis.Error(s);a.gleam_error=n,a.module=t,a.line=e,a.fn=r;for(let u in i)a[u]=i[u];return a}class K extends kn{constructor(t){super(),this[0]=t}}class Ln extends kn{}function we(n,t){if(n instanceof K){let e=n[0];return new N(e)}else return new H(t)}function Le(n,t){if(n instanceof K){let e=n[0];return new K(t(e))}else{if(n instanceof Ln)return new Ln;throw $("case_no_match","gleam/option",186,"map","No case clause matched",{values:[n]})}}const pt=new WeakMap,Cn=new DataView(new ArrayBuffer(8));let In=0;function Rn(n){const t=pt.get(n);if(t!==void 0)return t;const e=In++;return In===2147483647&&(In=0),pt.set(n,e),e}function Bn(n,t){return n^t+2654435769+(n<<6)+(n>>2)|0}function Vn(n){let t=0;const e=n.length;for(let r=0;r<e;r++)t=Math.imul(31,t)+n.charCodeAt(r)|0;return t}function Nt(n){Cn.setFloat64(0,n);const t=Cn.getInt32(0),e=Cn.getInt32(4);return Math.imul(73244475,t>>16^t)^e}function je(n){return Vn(n.toString())}function Ae(n){const t=Object.getPrototypeOf(n);if(t!==null&&typeof t.hashCode=="function")try{const r=n.hashCode(n);if(typeof r=="number")return r}catch{}if(n instanceof Promise||n instanceof WeakSet||n instanceof WeakMap)return Rn(n);if(n instanceof Date)return Nt(n.getTime());let e=0;if(n instanceof ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||n instanceof Uint8Array)for(let r=0;r<n.length;r++)e=Math.imul(31,e)+x(n[r])|0;else if(n instanceof Set)n.forEach(r=>{e=e+x(r)|0});else if(n instanceof Map)n.forEach((r,s)=>{e=e+Bn(x(r),x(s))|0});else{const r=Object.keys(n);for(let s=0;s<r.length;s++){const i=r[s],a=n[i];e=e+Bn(x(a),Vn(i))|0}}return e}function x(n){if(n===null)return 1108378658;if(n===void 0)return 1108378659;if(n===!0)return 1108378657;if(n===!1)return 1108378656;switch(typeof n){case"number":return Nt(n);case"string":return Vn(n);case"bigint":return je(n);case"object":return Ae(n);case"symbol":return Rn(n);case"function":return Rn(n);default:return 0}}const q=5,Yn=Math.pow(2,q),$e=Yn-1,ke=Yn/2,xe=Yn/4,v=0,M=1,A=2,Q=3,Zn={type:A,bitmap:0,array:[]};function hn(n,t){return n>>>t&$e}function xn(n,t){return 1<<hn(n,t)}function Se(n){return n-=n>>1&1431655765,n=(n&858993459)+(n>>2&858993459),n=n+(n>>4)&252645135,n+=n>>8,n+=n>>16,n&127}function Jn(n,t){return Se(n&t-1)}function S(n,t,e){const r=n.length,s=new Array(r);for(let i=0;i<r;++i)s[i]=n[i];return s[t]=e,s}function Oe(n,t,e){const r=n.length,s=new Array(r+1);let i=0,a=0;for(;i<t;)s[a++]=n[i++];for(s[a++]=e;i<r;)s[a++]=n[i++];return s}function Fn(n,t){const e=n.length,r=new Array(e-1);let s=0,i=0;for(;s<t;)r[i++]=n[s++];for(++s;s<e;)r[i++]=n[s++];return r}function Ct(n,t,e,r,s,i){const a=x(t);if(a===r)return{type:Q,hash:a,array:[{type:v,k:t,v:e},{type:v,k:s,v:i}]};const u={val:!1};return dn(Kn(Zn,n,a,t,e,u),n,r,s,i,u)}function dn(n,t,e,r,s,i){switch(n.type){case M:return Ne(n,t,e,r,s,i);case A:return Kn(n,t,e,r,s,i);case Q:return Ce(n,t,e,r,s,i)}}function Ne(n,t,e,r,s,i){const a=hn(e,t),u=n.array[a];if(u===void 0)return i.val=!0,{type:M,size:n.size+1,array:S(n.array,a,{type:v,k:r,v:s})};if(u.type===v)return U(r,u.k)?s===u.v?n:{type:M,size:n.size,array:S(n.array,a,{type:v,k:r,v:s})}:(i.val=!0,{type:M,size:n.size,array:S(n.array,a,Ct(t+q,u.k,u.v,e,r,s))});const m=dn(u,t+q,e,r,s,i);return m===u?n:{type:M,size:n.size,array:S(n.array,a,m)}}function Kn(n,t,e,r,s,i){const a=xn(e,t),u=Jn(n.bitmap,a);if(n.bitmap&a){const m=n.array[u];if(m.type!==v){const g=dn(m,t+q,e,r,s,i);return g===m?n:{type:A,bitmap:n.bitmap,array:S(n.array,u,g)}}const o=m.k;return U(r,o)?s===m.v?n:{type:A,bitmap:n.bitmap,array:S(n.array,u,{type:v,k:r,v:s})}:(i.val=!0,{type:A,bitmap:n.bitmap,array:S(n.array,u,Ct(t+q,o,m.v,e,r,s))})}else{const m=n.array.length;if(m>=ke){const o=new Array(32),g=hn(e,t);o[g]=Kn(Zn,t+q,e,r,s,i);let b=0,h=n.bitmap;for(let P=0;P<32;P++){if(h&1){const Sn=n.array[b++];o[P]=Sn}h=h>>>1}return{type:M,size:m+1,array:o}}else{const o=Oe(n.array,u,{type:v,k:r,v:s});return i.val=!0,{type:A,bitmap:n.bitmap|a,array:o}}}}function Ce(n,t,e,r,s,i){if(e===n.hash){const a=Qn(n,r);if(a!==-1)return n.array[a].v===s?n:{type:Q,hash:e,array:S(n.array,a,{type:v,k:r,v:s})};const u=n.array.length;return i.val=!0,{type:Q,hash:e,array:S(n.array,u,{type:v,k:r,v:s})}}return dn({type:A,bitmap:xn(n.hash,t),array:[n]},t,e,r,s,i)}function Qn(n,t){const e=n.array.length;for(let r=0;r<e;r++)if(U(t,n.array[r].k))return r;return-1}function jn(n,t,e,r){switch(n.type){case M:return Ie(n,t,e,r);case A:return Me(n,t,e,r);case Q:return qe(n,r)}}function Ie(n,t,e,r){const s=hn(e,t),i=n.array[s];if(i!==void 0){if(i.type!==v)return jn(i,t+q,e,r);if(U(r,i.k))return i}}function Me(n,t,e,r){const s=xn(e,t);if(!(n.bitmap&s))return;const i=Jn(n.bitmap,s),a=n.array[i];if(a.type!==v)return jn(a,t+q,e,r);if(U(r,a.k))return a}function qe(n,t){const e=Qn(n,t);if(!(e<0))return n.array[e]}function Xn(n,t,e,r){switch(n.type){case M:return Te(n,t,e,r);case A:return De(n,t,e,r);case Q:return Re(n,r)}}function Te(n,t,e,r){const s=hn(e,t),i=n.array[s];if(i===void 0)return n;let a;if(i.type===v){if(!U(i.k,r))return n}else if(a=Xn(i,t+q,e,r),a===i)return n;if(a===void 0){if(n.size<=xe){const u=n.array,m=new Array(n.size-1);let o=0,g=0,b=0;for(;o<s;){const h=u[o];h!==void 0&&(m[g]=h,b|=1<<o,++g),++o}for(++o;o<u.length;){const h=u[o];h!==void 0&&(m[g]=h,b|=1<<o,++g),++o}return{type:A,bitmap:b,array:m}}return{type:M,size:n.size-1,array:S(n.array,s,a)}}return{type:M,size:n.size,array:S(n.array,s,a)}}function De(n,t,e,r){const s=xn(e,t);if(!(n.bitmap&s))return n;const i=Jn(n.bitmap,s),a=n.array[i];if(a.type!==v){const u=Xn(a,t+q,e,r);return u===a?n:u!==void 0?{type:A,bitmap:n.bitmap,array:S(n.array,i,u)}:n.bitmap===s?void 0:{type:A,bitmap:n.bitmap^s,array:Fn(n.array,i)}}return U(r,a.k)?n.bitmap===s?void 0:{type:A,bitmap:n.bitmap^s,array:Fn(n.array,i)}:n}function Re(n,t){const e=Qn(n,t);if(e<0)return n;if(n.array.length!==1)return{type:Q,hash:n.hash,array:Fn(n.array,e)}}function It(n,t){if(n===void 0)return;const e=n.array,r=e.length;for(let s=0;s<r;s++){const i=e[s];if(i!==void 0){if(i.type===v){t(i.v,i.k);continue}It(i,t)}}}class I{static fromObject(t){const e=Object.keys(t);let r=I.new();for(let s=0;s<e.length;s++){const i=e[s];r=r.set(i,t[i])}return r}static fromMap(t){let e=I.new();return t.forEach((r,s)=>{e=e.set(s,r)}),e}static new(){return new I(void 0,0)}constructor(t,e){this.root=t,this.size=e}get(t,e){if(this.root===void 0)return e;const r=jn(this.root,0,x(t),t);return r===void 0?e:r.v}set(t,e){const r={val:!1},s=this.root===void 0?Zn:this.root,i=dn(s,0,x(t),t,e,r);return i===this.root?this:new I(i,r.val?this.size+1:this.size)}delete(t){if(this.root===void 0)return this;const e=Xn(this.root,0,x(t),t);return e===this.root?this:e===void 0?I.new():new I(e,this.size-1)}has(t){return this.root===void 0?!1:jn(this.root,0,x(t),t)!==void 0}entries(){if(this.root===void 0)return[];const t=[];return this.forEach((e,r)=>t.push([r,e])),t}forEach(t){It(this.root,t)}hashCode(){let t=0;return this.forEach((e,r)=>{t=t+Bn(x(e),x(r))|0}),t}equals(t){if(!(t instanceof I))return!1;let e=!0;return this.forEach((r,s)=>{e=e&&U(t.get(s,!r),r)}),e}}const Be=void 0,ft={};function Fe(n){return n.toString()}function ze(n,t){return n+t}function Pe(n,t){const e=n[Symbol.iterator]();let r=e.next().value||"",s=e.next();for(;!s.done;)r=r+t+s.value,s=e.next();return r}function We(n){let t="";for(const e of n)t=t+e;return t}function He(n){var t;typeof process=="object"&&((t=process.stderr)!=null&&t.write)?process.stderr.write(n+`
`):typeof Deno=="object"?Deno.stderr.writeSync(new TextEncoder().encode(n+`
`)):console.log(n)}function Ue(){return I.new()}function Mt(n,t){const e=n.get(t,ft);return e===ft?new H(Be):new N(e)}function Ge(n,t,e){return e.set(n,t)}function qt(n){if(typeof n=="string")return"String";if(Gn.isResult(n))return"Result";if(rn.isList(n))return"List";if(Number.isInteger(n))return"Int";if(Array.isArray(n))return`Tuple of ${n.length} elements`;if(wn.isBitString(n))return"BitString";if(n instanceof I)return"Map";if(typeof n=="number")return"Float";if(n===null)return"Null";if(n===void 0)return"Nil";{const t=typeof n;return t.charAt(0).toUpperCase()+t.slice(1)}}function nt(n,t){return Ve(n,qt(t))}function Ve(n,t){return new H(rn.fromArray([new rt(n,t,rn.fromArray([]))]))}function Ye(n){return typeof n=="string"?new N(n):nt("String",n)}function Ze(n){return Number.isInteger(n)?new N(n):nt("Int",n)}function Je(n,t){const e=()=>nt("Map",n);if(n instanceof I||n instanceof WeakMap||n instanceof Map){const r=Mt(n,t);return new N(r.isOk()?new K(r[0]):new Ln)}else return Object.getPrototypeOf(n)==Object.prototype?ht(n,t,()=>new N(new Ln)):ht(n,t,e)}function ht(n,t,e){try{return t in n?new N(new K(n[t])):e()}catch{return e()}}function Ke(n){return Fe(n)}function Qe(n,t){let e=n<t;if(e)return n;if(e)throw $("case_no_match","gleam/int",335,"min","No case clause matched",{values:[e]});return t}function Tt(){return Ue()}function dt(n,t){return Mt(n,t)}function Dt(n,t,e){return Ge(t,e,n)}function Xe(n,t){for(;;){let e=n,r=t;if(e.hasLength(0))return r;if(e.atLeastLength(1)){let s=e.head;n=e.tail,t=Dt(r,s[0],s[1])}else throw $("case_no_match","gleam/map",85,"fold_list_of_pair","No case clause matched",{values:[e]})}}function nr(n){return Xe(n,Tt())}function tr(n){return nr(n)}function er(n){return n[0]}function rr(n){return n[1]}function sr(n,t){for(;;){let e=n,r=t;if(e.hasLength(0))return r;if(e.atLeastLength(1)){let s=e.head;n=e.tail,t=O([s],r)}else throw $("case_no_match","gleam/list",124,"do_reverse_acc","No case clause matched",{values:[e]})}}function ir(n){return sr(n,O([]))}function ar(n){return ir(n)}function lr(n,t,e){for(;;){let r=n,s=t,i=e;if(r.hasLength(0))return ar(i);if(r.atLeastLength(1)){let a=r.head;n=r.tail,t=s,e=O([s(a)],i)}else throw $("case_no_match","gleam/list",361,"do_map","No case clause matched",{values:[r]})}}function tt(n,t){return lr(n,t,O([]))}function ur(n,t,e){for(;;){let r=n,s=t,i=e;if(r.hasLength(0))return s;if(r.atLeastLength(1)){let a=r.head;n=r.tail,t=i(s,a),e=i}else throw $("case_no_match","gleam/list",716,"fold","No case clause matched",{values:[r]})}}function or(n,t){if(n.isOk()){let e=n[0];return new N(t(e))}else{if(n.isOk())throw $("case_no_match","gleam/result",67,"map","No case clause matched",{values:[n]});{let e=n[0];return new H(e)}}}function mr(n,t){if(n.isOk()){let e=n[0];return new N(e)}else{if(n.isOk())throw $("case_no_match","gleam/result",95,"map_error","No case clause matched",{values:[n]});{let e=n[0];return new H(t(e))}}}function bt(n,t){if(n.isOk()){let e=n[0];return t(e)}else{if(n.isOk())throw $("case_no_match","gleam/result",163,"try","No case clause matched",{values:[n]});{let e=n[0];return new H(e)}}}function cr(n,t){return ze(n,t)}function gr(n){return We(n)}function Rt(n){return n}function pr(n,t){return cr(n,Rt(t))}function et(n){return n}class rt extends kn{constructor(t,e,r){super(),this.expected=t,this.found=e,this.path=r}}function st(n){return n}function zn(n){return n}function fr(n){return new N(n)}function hr(n){return Ye(n)}function Bt(n){return qt(n)}function dr(n){return Ze(n)}function Ft(n){return t=>{if(n.hasLength(0))return new H(O([new rt("another type",Bt(t),O([]))]));if(n.atLeastLength(1)){let e=n.head,r=n.tail,s=e(t);if(s.isOk()){let i=s[0];return new N(i)}else{if(s.isOk())throw $("case_no_match","gleam/dynamic",1009,"","No case clause matched",{values:[s]});return Ft(r)(t)}}else throw $("case_no_match","gleam/dynamic",1002,"","No case clause matched",{values:[n]})}}function br(n){if(n.isOk())return O([]);if(n.isOk())throw $("case_no_match","gleam/dynamic",1487,"all_errors","No case clause matched",{values:[n]});return n[0]}function _t(n,t){return e=>{let r=t(e);if(r.isOk()){let s=r[0];return new N(n(s))}else{let s=r;return new H(br(s))}}}function _r(n,t){let e=st(t),r=Ft(O([hr,i=>or(dr(i),Ke)])),s=(()=>{let i=r(e);if(i.isOk())return i[0];if(i.isOk())throw $("case_no_match","gleam/dynamic",593,"push_path","No case clause matched",{values:[i]});{let a=O(["<",Bt(e),">"]),u=gr(a);return et(u)}})();return n.withFields({path:O([s],n.path)})}function yr(n,t){return mr(n,e=>tt(e,t))}function vr(n,t){return e=>{let r=new rt("field","nothing",O([]));return bt(Je(e,n),s=>{let a=we(s,O([r])),u=bt(a,t);return yr(u,m=>_r(m,n))})}}let k=class{inspect(){let t=r=>{let s=sn(this[r]);return isNaN(parseInt(r))?`${r}: ${s}`:s},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}},it=class{static fromArray(t,e){let r=e||new lt;return t.reduceRight((s,i)=>new wr(i,s),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new Er(this)}inspect(){return`[${this.toArray().map(sn).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}};function at(n,t){return it.fromArray(n,t)}var Y,St;let Er=(St=class{constructor(t){_(this,Y,void 0);f(this,Y,t)}next(){if(p(this,Y).isEmpty())return{done:!0};{let{head:t,tail:e}=p(this,Y);return f(this,Y,e),{value:t,done:!1}}}},Y=new WeakMap,St),lt=class extends it{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}},wr=class extends it{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}},zt=class extends k{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}},Pt=class extends zt{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}},X=class extends zt{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Error"}isOk(){return!1}};function sn(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(sn).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(sn).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return Lr(n)}}function Lr(n){var u,m;let[t,e]=Wt(n),r=((m=(u=Object.getPrototypeOf(n))==null?void 0:u.constructor)==null?void 0:m.name)||"Object",s=[];for(let o of t(n))s.push(`${sn(o)}: ${sn(e(n,o))}`);let i=s.length?" "+s.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${i}})`}function jr(n,t){let e=[n,t];for(;e.length;){let r=e.pop(),s=e.pop();if(r===s)continue;if(!yt(r)||!yt(s)||!Or(r,s)||Ar(r,s)||$r(r,s)||kr(r,s)||xr(r,s)||Sr(r,s))return!1;const a=Object.getPrototypeOf(r);if(a!==null&&typeof a.equals=="function")try{if(r.equals(s))continue;return!1}catch{}let[u,m]=Wt(r);for(let o of u(r))e.push(m(r,o),m(s,o))}return!0}function Wt(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function Ar(n,t){return n instanceof Date&&(n>t||n<t)}function $r(n,t){return n.buffer instanceof ArrayBuffer&&n.BYTES_PER_ELEMENT&&!(n.byteLength===t.byteLength&&n.every((e,r)=>e===t[r]))}function kr(n,t){return Array.isArray(n)&&n.length!==t.length}function xr(n,t){return n instanceof Map&&n.size!==t.size}function Sr(n,t){return n instanceof Set&&(n.size!=t.size||[...n].some(e=>!t.has(e)))}function yt(n){return typeof n=="object"&&n!==null}function Or(n,t){return typeof n!="object"&&typeof t!="object"&&(!n||!t)||[Promise,WeakSet,WeakMap,Function].some(r=>n instanceof r)?!1:n.constructor===t.constructor||n.__gleam_prelude_variant__&&n.__gleam_prelude_variant__===t.__gleam_prelude_variant__}class Ht extends k{constructor(t){super(),this[0]=t}}function Nr(n){return new Ht(at([n]))}function An(){return new Ht(at([]))}async function B(n,t,e,r){if(t[3])return(n==null?void 0:n.nodeType)===1&&n.nodeName===t[0].toUpperCase()&&n.namespaceURI===t[3]?Et(n,t,t[3],e,r):vt(n,t,t[3],e,r);if(t[2])return(n==null?void 0:n.nodeType)===1&&n.nodeName===t[0].toUpperCase()?Et(n,t,null,e,r):vt(n,t,null,e,r);if(t[0]&&typeof t[0]=="string")return(n==null?void 0:n.nodeType)===3?Ir(n,t):Cr(n,t);if(t[0]&&typeof t[0]=="object")try{return B(n,await t[0],null,e,r)}catch{return B(n,[""],null,e)}return document.createComment(["[internal lustre error] I couldn't work out how to render this element. This","function should only be called internally by lustre's runtime: if you think","this is an error, please open an issue at","https://github.com/hayleigh-dot-dev/gleam-lustre/issues/new"].join(" "))}async function vt(n,t,e,r,s=null){const i=e?document.createElementNS(e,t[0]):document.createElement(t[0]);let a=t[1];for(;a.head;)Pn(i,a.head[0],a.head[0]==="class"&&i.className?`${i.className} ${a.head[1]}`:a.head[1],r),a=a.tail;if(customElements.get(t[0]))i._slot=t[2];else if(t[0]==="slot"){let u=new lt,m=s;for(;m;)if(m._slot){u=m._slot;break}else m=m.parentNode;for(;u.head;)i.appendChild(await B(null,u.head,r,i)),u=u.tail}else{let u=t[2];for(;u.head;)i.appendChild(await B(null,u.head,r,i)),u=u.tail;n&&n.replaceWith(i)}return i}async function Et(n,t,e,r,s){const i=n.attributes,a=new Map;let u=t[1];for(;u.head;)a.set(u.head[0],u.head[0]==="class"&&a.has("class")?`${a.get("class")} ${u.head[1]}`:u.head[1]),u=u.tail;for(const{name:m,value:o}of i)if(!a.has(m))n.removeAttribute(m);else{const g=a.get(m);g!==o&&(Pn(n,m,g,r),a.delete(m))}for(const[m,o]of a)Pn(n,m,o,r);if(customElements.get(t[0]))n._slot=t[2];else if(t[0]==="slot"){let m=n.firstChild,o=new lt,g=s;for(;g;)if(g._slot){o=g._slot;break}else g=g.parentNode;for(;m;)o.head&&(await B(m,o.head,r,n),o=o.tail),m=m.nextSibling;for(;o.head;)n.appendChild(await B(null,o.head,r,n)),o=o.tail}else{let m=n.firstChild,o=t[2];for(;m;)if(o.head){const g=m.nextSibling;await B(m,o.head,r,n),o=o.tail,m=g}else{const g=m.nextSibling;m.remove(),m=g}for(;o.head;)n.appendChild(await B(null,o.head,r,n)),o=o.tail}return n}function Pn(n,t,e,r){switch(typeof e){case"string":n.getAttribute(t)!==e&&n.setAttribute(t,e);break;case(t.startsWith("on")&&"function"):{const s=t.slice(2).toLowerCase(),i=a=>Le(e(a),r);n.removeEventListener(s,n[`_${t}`]),n.addEventListener(s,i),n[`_${t}`]=i;break}default:n[t]=e}}function Cr(n,t){if(!t[0])return n==null||n.remove(),null;const e=document.createTextNode(t[0]);return n&&n.replaceWith(e),e}function Ir(n,t){const e=n.nodeValue,r=t[0];return r?(e!==r&&(n.nodeValue=r),n):(n==null||n.remove(),null)}var j,T,D,R,W,gn,tn,en,pn,Wn,fn,Hn;class Ut{constructor(t,e,r){_(this,pn);_(this,fn);_(this,j,null);_(this,T,null);_(this,D,[]);_(this,R,[]);_(this,W,!1);_(this,gn,null);_(this,tn,null);_(this,en,null);f(this,gn,t),f(this,tn,e),f(this,en,r)}start(t,e){if(!Gt())return new X(new Zt);if(p(this,j))return new X(new Vr);if(f(this,j,t instanceof HTMLElement?t:document.querySelector(t)),!p(this,j))return new X(new Jr);const[r,s]=p(this,gn).call(this,e);return f(this,T,r),f(this,R,s[0].toArray()),f(this,W,!0),window.requestAnimationFrame(()=>ln(this,pn,Wn).call(this)),new Pt(i=>this.dispatch(i))}dispatch(t){p(this,D).push(t),ln(this,pn,Wn).call(this)}emit(t,e=null){p(this,j).dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e,composed:!0}))}destroy(){if(!p(this,j))return new X(new Yr);p(this,j).remove(),f(this,j,null),f(this,T,null),f(this,D,[]),f(this,R,[]),f(this,W,!1),f(this,tn,()=>{}),f(this,en,()=>{})}}j=new WeakMap,T=new WeakMap,D=new WeakMap,R=new WeakMap,W=new WeakMap,gn=new WeakMap,tn=new WeakMap,en=new WeakMap,pn=new WeakSet,Wn=async function(){if(ln(this,fn,Hn).call(this),p(this,W)){const t=p(this,en).call(this,p(this,T));f(this,j,await B(p(this,j),t,e=>this.dispatch(e))),f(this,W,!1)}},fn=new WeakSet,Hn=function(t=0){if(p(this,j)){if(p(this,D).length)for(;p(this,D).length;){const[e,r]=p(this,tn).call(this,p(this,T),p(this,D).shift());p(this,W)||f(this,W,p(this,T)!==e),f(this,T,e),f(this,R,p(this,R).concat(r[0].toArray()))}for(;p(this,R).length;)p(this,R).shift()(e=>this.dispatch(e),(e,r)=>this.emit(e,r));p(this,D).length&&(t>=5?console.warn(tooManyUpdates):ln(this,fn,Hn).call(this,++t))}};const Mr=(n,t,e)=>new Ut(n,t,e),qr=(n,t,e)=>n.start(t,e),Tr=(n,t)=>Nr((e,r)=>{r(n,t)}),Dr=(n,t,e,r,s)=>{var i,a,u,m;return Gt()?customElements.get(n)?new X(new Zr):(customElements.define(n,(m=class extends HTMLElement{constructor(){super();_(this,i,document.createElement("div"));_(this,a,null);_(this,u,null);f(this,a,new Ut(t,e,r)),p(this,i).appendChild(document.createElement("div"));const g=p(this,a).start(p(this,i).firstChild);f(this,u,g[0]),s.forEach((b,h)=>{Object.defineProperty(this,h,{get:()=>this[`_${h}`]||this.getAttribute(h),set:P=>{const Sn=this[h],On=b(P);On.isOk()&&!jr(Sn,On[0])&&p(this,u).call(this,On[0]),typeof P=="string"?this.setAttribute(h,P):this[`_${h}`]=P}})})}static get observedAttributes(){return s.entries().map(([g,b])=>g)}connectedCallback(){this.appendChild(p(this,i).firstChild)}attributeChangedCallback(g,b,h){b!==h&&(this[g]=h)}disconnectedCallback(){p(this,a).destroy()}},i=new WeakMap,a=new WeakMap,u=new WeakMap,m)),new Pt(null)):new X(new Zt)},Gt=()=>window&&window.document,Rr=n=>!!customElements.get(n);class cn{constructor(t){this.promise=t}static wrap(t){return t instanceof Promise?new cn(t):t}static unwrap(t){return t instanceof cn?t.promise:t}}function yn(n,t){return n.then(e=>cn.wrap(t(cn.unwrap(e))))}function Br(n,t){let r=Rt(n),s=pr(r,t);return et(s)}function w(n,t){return Pe(n,t)}function Fr(n){let t=J(n);return et(t)}class Vt extends k{constructor(t,e,r){super(),this[0]=t,this[1]=e,this.as_property=r}}let zr=class extends k{constructor(t,e){super(),this[0]=t,this[1]=e}};function y(n,t){return new Vt(n,st(t),!1)}function wt(n,t){return new Vt(n,st(t),!0)}function Pr(n,t){return new zr("on"+n,t)}function ut(n){return y("style",ur(n,"",(t,e)=>{let r=e[0],s=e[1];return t+r+":"+s+";"}))}function c(n){return y("class",n)}function Mn(n){return y("id",n)}function ot(n){return y("href",n)}class Wr extends k{constructor(t){super(),this[0]=t}}class Hr extends k{constructor(t,e,r){super(),this[0]=t,this[1]=e,this[2]=r}}class Ur extends k{constructor(t,e,r,s){super(),this[0]=t,this[1]=e,this[2]=r,this[3]=s}}class Gr extends k{constructor(t){super(),this[0]=t}}function Lt(n){return new Gr(n)}function d(n,t,e){return new Hr(n,t,e)}function Yt(n,t,e,r){return new Ur(t,e,r,n)}function E(n){return new Wr(n)}class Vr extends k{}class Yr extends k{}class Zr extends k{}class Jr extends k{}class Zt extends k{}function Kr(n,t,e){return Mr(i=>[n(i),An()],(i,a)=>[t(i,a),An()],e)}function Qr(n,t){return d("body",n,t)}function Jt(n,t){return d("aside",n,t)}function Xr(n,t){return d("header",n,t)}function ns(n,t){return d("h1",n,t)}function bn(n,t){return d("h2",n,t)}function ts(n,t){return d("h3",n,t)}function es(n,t){return d("main",n,t)}function Kt(n,t){return d("nav",n,t)}function F(n,t){return d("div",n,t)}function Qt(n,t){return d("li",n,t)}function rs(n,t){return d("ol",n,t)}function mn(n,t){return d("p",n,t)}function ss(n,t){return d("pre",n,t)}function Xt(n,t){return d("ul",n,t)}function mt(n,t){return d("a",n,t)}function ne(n,t){return d("code",n,t)}function is(n,t){return d("em",n,t)}function te(n,t){return d("span",n,t)}function as(n,t){return d("strong",n,t)}function ls(n,t){return Yt("http://www.w3.org/2000/svg","svg",n,t)}function ee(n,t){return d("button",n,t)}function re(n,t){return Pr(n,t)}function se(n){return re("click",t=>new K(n))}function us(){return"/gleam-lustre/"}function on(n){let e=Fr(n);return He(e),n}class _n{inspect(){let t=r=>{let s=an(this[r]);return isNaN(parseInt(r))?`${r}: ${s}`:s},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}}class nn{static fromArray(t,e){let r=e||new ie;return t.reduceRight((s,i)=>new ct(i,s),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new os(this)}inspect(){return`[${this.toArray().map(an).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}}function l(n,t){return nn.fromArray(n,t)}var Z;class os{constructor(t){_(this,Z,void 0);f(this,Z,t)}next(){if(p(this,Z).isEmpty())return{done:!0};{let{head:t,tail:e}=p(this,Z);return f(this,Z,e),{value:t,done:!1}}}}Z=new WeakMap;class ie extends nn{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}}class ct extends nn{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}}class ms extends _n{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}}class qn extends ms{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}}function an(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(an).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(an).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return cs(n)}}function cs(n){var u,m;let[t,e]=gs(n),r=((m=(u=Object.getPrototypeOf(n))==null?void 0:u.constructor)==null?void 0:m.name)||"Object",s=[];for(let o of t(n))s.push(`${an(o)}: ${an(e(n,o))}`);let i=s.length?" "+s.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${i}})`}function gs(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function z(n,t,e,r,s,i){let a=new globalThis.Error(s);a.gleam_error=n,a.module=t,a.line=e,a.fn=r;for(let u in i)a[u]=i[u];return a}let $n=class extends _n{constructor(t,e){super(),this[0]=t,this[1]=e}};class ae extends _n{constructor(t){super(),this[0]=t}}function ps(){return[Tt(),An()]}function fs(n,t){let e=on(t);if(e instanceof $n){let r=e[0],s=e[1];return[Dt(n,r,s),An()]}else if(e instanceof ae){let r=e[0];return[n,Tr("dispatch",r)]}else throw z("case_no_match","app/ui/hooks",96,"update_hook","No case clause matched",{values:[e]})}function hs(n){on(n);let t=dt(n,"state"),e=dt(n,"view");if(t.isOk()&&e.isOk()){let r=t[0],s=e[0],i=zn(r),a=zn(s);on(i),on(a);let u=a(i,m=>new $n("state",m),m=>new ae(m));return on(u)}else return E("???")}function ds(n){let t=Rr(n);if(t)return new qn(void 0);if(t)throw z("case_no_match","app/ui/hooks",64,"register_hook","No case clause matched",{values:[t]});return Dr(n,ps,fs,hs,tr(l([["state",_t(e=>new $n("state",e),e=>new qn(e))],["view",_t(e=>new $n("view",e),e=>new qn(e))]])))}function bs(){return re("dispatch",n=>{let t=vr("detail",fr)(n);if(!t.isOk())throw z("assignment_no_match","app/ui/hooks",122,"","Assignment pattern did not match",{value:t});let e=t[0];return new K(zn(e))})}function _s(n,t){let e=l([wt("state",n),wt("view",t),bs()]),r=ds("use-state");if(!r.isOk())throw z("assignment_no_match","app/ui/hooks",31,"use_state","Assignment pattern did not match",{value:r});return d("use-state",e,l([]))}const ys="modulepreload",vs=function(n){return"/gleam-lustre/"+n},jt={},At=function(t,e,r){if(!e||e.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=vs(i),i in jt)return;jt[i]=!0;const a=i.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let g=s.length-1;g>=0;g--){const b=s[g];if(b.href===i&&(!a||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":ys,a||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),a)return new Promise((g,b)=>{o.addEventListener("load",g),o.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},le=new ie,Es=n=>new ct(n,le),G=(n,t)=>n.reduceRight((e,r)=>new ct(t(r),e),le);function ws(n){let t=0;for(let e=0,r=n.length;e<r;e++){let s=n.charCodeAt(e);t=(t<<5)-t+s,t|=0}return`${~t}`}function Ls(n){for(const[t,e]of Object.entries(js))n.innerHTML=n.innerHTML.replace(new RegExp(`\\b${t}\\b`,"g"),`<a href="${e}" class="hover:underline">${t}</a>`)}const un="/gleam-lustre/",C="https://hexdocs.pm/gleam_stdlib/gleam/",js={App:`${un}api/lustre#app-type`,Attribute:`${un}api/lustre/attribute#attribute-type`,Bool:`${C}bool.html`,Decoder:`${C}dynamic.html#Decoder`,Dynamic:`${C}dynamic.html#Dynamic`,Effect:`${un}api/lustre/effect#effect-type`,Element:`${un}api/lustre/element#element-type`,Error:`${un}api/lustre#error-type`,Float:`${C}float.html`,Int:`${C}int.html`,List:`${C}list.html`,Map:`${C}map.html#Map`,Option:`${C}option.html#Option`,Result:`${C}result.html`,String:`${C}string.html`,StringBuilder:`${C}string_builder.html#StringBuilder`};async function As(n){const{fromMarkdown:t}=await At(()=>import("./index-2ada3908.js"),[]),{highlight_element:e}=await At(()=>import("./highlight.ffi-2f08bdd2.js"),["assets/highlight.ffi-2f08bdd2.js","assets/highlight.ffi-5f5db245.css"]),r=t(n),s=[];return[G(r.children,function a(u){switch(u.type){case"code":const m=ws(u.value);return window.requestAnimationFrame(async()=>{const o=`[data-hash="${m}"]:not(.hljs)`;for(const g of document.querySelectorAll(o))await e(g,u.lang),Ls(g)}),$s(u.value,m,u.lang);case"emphasis":return ks(G(u.children,a));case"heading":{const[o,g]=u.children[0].value.split("|"),b=nn.fromArray(g?g.trim().split(" "):[]),h=/^[A-Z]/.test(o.trim())&&u.depth===3&&window.location.pathname.includes("/api/")?`${o.toLowerCase().trim().replace(/\s/g,"-").replace(/[^a-zA-Z0-9-_]/g,"")}-type`:`${o.toLowerCase().trim().replace(/\s/g,"-").replace(/[^a-zA-Z0-9-_]/g,"")}`;return u.depth>1&&s.unshift(d("a",nn.fromArray([y("href",`#${h}`),y("class","text-sm text-gray-400 no-underline"),y("class","hover:text-gray-700 hover:underline"),y("class",u.depth===2?"mt-4 first:mt-0":"ml-2")]),Es(E(o.trim())))),Cs(u.depth,o.trim(),b,h)}case"inlineCode":return Ss(u.value);case"link":return Os(u.url.startsWith("/")?import.meta.BASE_URL+u.url.slice(1):u.url,G(u.children,a));case"list":return Ns(!!u.ordered,G(u.children,a));case"listItem":return Is(G(u.children,a));case"paragraph":return Ms(G(u.children,a));case"strong":return qs(G(u.children,a));case"text":return $t(u.value);default:return $t("")}}),nn.fromArray(s)]}function $s(n,t,e){return ss(l([c("not-prose rounded-xl")]),l([ne(l([y("data-hash",t),c("language-"+e),ut(l([["background","transparent"]]))]),l([E(n)]))]))}function ks(n){return is(l([]),n)}function Tn(n,t){return te(l([c("group")]),l([E(n),mt(l([ot("#"+t),c("pl-2 text-gray-200 opacity-0 transition-opacity"),c("group-hover:underline group-hover:opacity-100")]),l([E("#")]))]))}function xs(n){return te(l([c("px-2 py-1 text-xs text-gray-700 border border-gray-200 rounded")]),l([E(n)]))}function Ss(n){return ne(l([]),l([E(n)]))}function Os(n,t){return mt(l([ot(n)]),t)}function Ns(n,t){if(n)return rs(l([]),t);if(n)throw z("case_no_match","app/ui/markdown",116,"list","No case clause matched",{values:[n]});return Xt(l([]),t)}function Cs(n,t,e,r){let s=Qe(n,3),i=tt(e,xs);if(s===1)return ns(l([c("flex items-center justify-between"),Mn(r)]),l([Tn(t,r),mn(l([c("flex gap-4")]),i)]));if(s===2)return bn(l([c("flex items-center justify-between border-t"),Mn(r)]),l([Tn(t,r),mn(l([c("flex gap-4")]),i)]));if(s===3)return ts(l([c("flex items-center justify-between"),Mn(r)]),l([Tn(t,r),mn(l([c("flex gap-2")]),i)]));throw z("case_no_match","app/ui/markdown",48,"heading","No case clause matched",{values:[s]})}function Is(n){return Qt(l([]),n)}function Ms(n){return mn(l([]),n)}function qs(n){return as(l([]),n)}function $t(n){return E(n)}const Ts="http://www.w3.org/2000/svg";function Ds(n){return Yt(Ts,"path",n,at([]))}function ue(n,t){return ls(l([y("viewBox","0 0 15 15"),y("fill","none")],n),l([Ds(l([y("d",t),y("fill","currentColor"),y("fill-rule","evenodd"),y("clip-rule","evenodd")]))]))}function Rs(n){return ue(n,"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z")}function Bs(n){return ue(n,"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z")}function Fs(n){return F(l([c("flex justify-between items-center px-4 py-2 bg-gray-100 border-b shadow")]),l([bn(l([c("text-indigo-600 my-0")]),l([E("Lustre.")])),ee(l([se(n),c("hover:bg-gray-200 rounded p-2")]),l([Rs(l([c("w-4 h-4")]))]))]))}function vn(n,t){return Kt(l([]),l([bn(l([c("my-0 lg:mt-8 lg:mb-4")]),l([E(n)])),Xt(l([c("ml-2")]),tt(t,e=>{let r=e[0],s=e[1];return Qt(l([]),l([mt(l([ot(s)]),l([E(r)]))]))}))]))}function oe(){let n=t=>Br(us(),t);return l([vn("Docs",l([["Quickstart",n("docs/quickstart")],["Managing state",n("docs/managing-state")],["Side effects",n("docs/side-effects")],["Components",n("docs/components")],["Server-side rendering",n("docs/server-side-rendering")]])),vn("Guides",l([["Using with Mist",n("guides/mist")],["Using with Wisp",n("guides/wisp")]])),vn("Reference",l([["lustre",n("api/lustre")],["lustre/attribute",n("api/lustre/attribute")],["lustre/effect",n("api/lustre/effect")],["lustre/element",n("api/lustre/element")],["lustre/element/html",n("api/lustre/element/html")],["lustre/element/svg",n("api/lustre/element/svg")],["lustre/event",n("api/lustre/event")]])),vn("External",l([["GitHub","https://github.com/hayleigh-dot-dev/gleam-lustre"],["Discord","https://discord.gg/Fm8Pwmy"],["Buy me a coffee?","https://github.com/sponsors/hayleigh-dot-dev"]]))])}function zs(n){return F(l([c("relative")]),l([F(l([c("flex justify-between items-center px-4 py-2 bg-gray-100 border-b")]),l([bn(l([c("text-indigo-600 my-0")]),l([E("Lustre.")])),ee(l([se(n),c("hover:bg-gray-200 rounded p-2")]),l([Bs(l([c("w-4 h-4")]))]))])),Kt(l([c("absolute top-0 w-full bg-gray-100 rounded-b-2xl px-4 mt-12 shadow")]),oe())]))}function Ps(){return _s(!1,(n,t,e)=>{if(n)return zs(t(!1));if(n)throw z("case_no_match","app/layout",49,"","No case clause matched",{values:[n]});return Fs(t(!0))})}function Ws(){return Xr(l([c("sticky top-0 z-10 col-span-8 lg:hidden")]),l([Ps()]))}function Hs(){return Jt(l([ut(l([["align-self","start"]])),c("relative sticky top-0 border-r hidden px-4 pb-10 h-screen"),c("lg:block lg:col-span-2"),c("xl:col-span-2")]),l([F(l([c("absolute right-0 inset-y-0 w-[50vw] bg-gray-100 -z-10")]),l([])),F(l([c("flex flex-col h-full overflow-y-scroll")]),l([bn(l([c("text-indigo-600 mb-0")]),l([E("Lustre")])),mn(l([c("text-gray-400 font-bold")]),l([E("Web apps from space.")]))],oe())),F(l([c("absolute bottom-10 h-12 w-full pointer-events-none"),c("bg-gradient-to-t from-gray-100 to-transparent")]),l([])),F(l([c("absolute top-0 h-12 w-full pointer-events-none"),c("bg-gradient-to-b from-gray-100 to-transparent")]),l([]))]))}function Us(n){return es(l([c("col-span-8 pt-4 px-4 pb-32"),c("lg:px-8 lg:col-span-6"),c("xl:col-span-5")]),n)}function Gs(n){return Jt(l([ut(l([["align-self","start"]])),c("sticky top-0 border-l hidden p-4 py-10 h-screen"),c("xl:block xl:col-span-1")]),l([F(l([c("flex flex-col h-full overflow-y-scroll")]),n)]))}function L(n){let t=As(n),e=(()=>{let i=yn(t,er),a=yn(i,Us);return Lt(a)})(),r=(()=>{let i=yn(t,rr),a=yn(i,Gs);return Lt(a)})();return Qr(l([c("bg-gray-50 prose prose-lustre max-w-none")]),l([F(l([c("max-w-[96rem] mx-auto grid grid-cols-8")]),l([Ws(),Hs(),e,r]))]))}const Vs=`
# lustre
`,Ys=`
## Applications

### App | erlang javascript

\`\`\`gleam
pub type App(flags, model, msg)
\`\`\`

The \`App\` type typically represents all the parts that make up a Lustre program
in the Model-View-Update architecture, along with the runtime necessary to run
it.

Although the type itself is exposed to both the Erlang and JavaScript targets,
the functions in this module to construct an \`App\` are only available in the
JavaScript target, and \`start\` will only succeed when ran in the browser.

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

An \`element\` application is the simplest kind of Lustre program. It takes an
\`Element\` to render and renders it to the DOM. These applications hold no state
and do not respond to messages, but that doesn't mean they are not interactive!

It is possible for [\`components\`](#component)

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
`,Zs=`
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
`,Js=`
## Utilities

### is_browser | erlang javascript

\`\`\`gleam
pub fn is_browser() -> Bool
\`\`\`

### is_registered | erlang javascript

\`\`\`gleam
pub fn is_registered(_name: String) -> Bool
\`\`\`

`;function kt(){let n=l([Vs,Ys,Zs,Js]),t=w(n,`
`);return L(t)}const Ks=`
# lustre/attribute
`,Qs=`
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
`,Xs=`
## Mapping attributes

### map | erlang javascript

\`\`\`gleam
pub fn map(attr: Attribute(a), f: fn(a) -> b) -> Attribute(b)
\`\`\`
`,ni=`
## Conversions

### to_string | erlang javascript

\`\`\`gleam
pub fn to_string(attr: Attribute(msg)) -> String
\`\`\`

### to_string_builder | erlang javascript

\`\`\`gleam
pub fn to_string_builder(attr: Attribute(msg)) -> StringBuilder
\`\`\`
`,ti=`
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
`,ei=`
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
`,ri=`
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
`,si=`
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
`,ii=`
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
`,ai=`
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
`,li=`
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
`,ui=`
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
`;function oi(){let n=l([Ks,Qs,Xs,ni,ti,ei,ri,si,ii,ai,li,ui]),t=w(n,`
`);return L(t)}const mi=`
# lustre/effect
`,ci=`
## Constructing Effects

### Effect | erlang javascript

\`\`\`gleam
pub opaque type Effect(msg) 
\`\`\`

### from | erlang javascript

\`\`\`gleam
pub fn from(effect: fn(fn(msg) -> Nil) -> Nil) -> Effect(msg)
\`\`\`

### none | erlang javascript

\`\`\`gleam
pub fn none() -> Effect(msg)
\`\`\`

### batch | erlang javascript

\`\`\`gleam
pub fn batch(effects: List(Effect(msg))) -> Effect(msg)
\`\`\`
`,gi=`
## Manipulating Effects

### map | erlang javascript

\`\`\`gleam
pub fn map(effect: Effect(a), f: fn(a) -> b) -> Effect(b)
\`\`\`
`;function pi(){let n=l([mi,ci,gi]),t=w(n,`
`);return L(t)}const fi=`
# lustre/element
`,hi=`
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
`,di=`
## Mapping elements

### map | erlang javascript

\`\`\`gleam
pub fn map(element: Element(a), f: fn(a) -> b) -> Element(b)
\`\`\`
`,bi=`
## Conversions

### to_string | erlang javascript

\`\`\`gleam
pub fn to_string(element: Element(msg)) -> String
\`\`\`

### to_string_builder | erlang javascript

\`\`\`gleam
pub fn to_string_builder(element: Element(msg)) -> StringBuilder
\`\`\`
`;function _i(){let n=l([fi,hi,di,bi]),t=w(n,`
`);return L(t)}const yi=`
# lustre/element/html
`,vi=`
## Main Root

### html | erlang javascript

\`\`\`gleam
pub fn html(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Ei=`
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
`,wi=`
## Sectioning root

### body | erlang javascript

\`\`\`gleam
pub fn body(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Li=`
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
`,ji=`
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
`,Ai=`
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
`,$i=`
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
`,ki=`
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
`,xi=`
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
`,Si=`
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
`,Oi=`
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
`,Ni=`
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
`,Ci=`
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
`,Ii=`
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
`,Mi=`
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
`;function qi(){let n=l([yi,vi,Ei,wi,Li,ji,Ai,$i,ki,xi,Si,Oi,Ni,Ci,Ii,Mi]),t=w(n,`
`);return L(t)}const Ti=`
# lustre/element/svg
`,Di=`
## Animation elements

### animate | erlang javascript

\`\`\`gleam
pub fn animate(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### animate_motion | erlang javascript

\`\`\`gleam
pub fn animate_motion(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### animate_transform | erlang javascript

\`\`\`gleam
pub fn animate_transform(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### mpath | erlang javascript

\`\`\`gleam
pub fn mpath(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### set | erlang javascript

\`\`\`gleam
pub fn set(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Ri=`
## Basic shapes

### circle | erlang javascript

\`\`\`gleam
pub fn circle(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### ellipse | erlang javascript

\`\`\`gleam
pub fn ellipse(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### line | erlang javascript

\`\`\`gleam
pub fn line(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### polygon | erlang javascript

\`\`\`gleam
pub fn polygon(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### polyline | erlang javascript

\`\`\`gleam
pub fn polyline(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### rect | erlang javascript

\`\`\`gleam
pub fn rect(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Bi=`
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
`,Fi=`
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
`,zi=`
## Filter effects

### fe_blend | erlang javascript

\`\`\`gleam
pub fn fe_blend(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_color_matrix | erlang javascript

\`\`\`gleam
pub fn fe_color_matrix(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_component_transfer | erlang javascript

\`\`\`gleam
pub fn fe_component_transfer(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_composite | erlang javascript

\`\`\`gleam
pub fn fe_composite(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_convolve_matrix | erlang javascript

\`\`\`gleam
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

\`\`\`gleam
pub fn fe_displacement_map(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_drop_shadow | erlang javascript

\`\`\`gleam
pub fn fe_drop_shadow(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_flood | erlang javascript

\`\`\`gleam
pub fn fe_flood(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_a | erlang javascript

\`\`\`gleam
pub fn fe_func_a(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_b | erlang javascript

\`\`\`gleam
pub fn fe_func_b(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_g | erlang javascript

\`\`\`gleam
pub fn fe_func_g(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_func_r | erlang javascript

\`\`\`gleam
pub fn fe_func_r(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_gaussian_blur | erlang javascript

\`\`\`gleam
pub fn fe_gaussian_blur(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_image | erlang javascript

\`\`\`gleam
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

\`\`\`gleam
pub fn fe_merge_node(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_morphology | erlang javascript

\`\`\`gleam
pub fn fe_morphology(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_offset | erlang javascript

\`\`\`gleam
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

\`\`\`gleam
pub fn fe_turbulence(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Pi=`
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

\`\`\`gleam
pub fn stop(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Wi=`
## Graphical elements

### image | erlang javascript

\`\`\`gleam
pub fn image(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### path | erlang javascript

\`\`\`gleam
pub fn path(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### text | erlang javascript

\`\`\`gleam
pub fn text(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### use_ | erlang javascript

\`\`\`gleam
pub fn use_(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Hi=`
## Lighting elements

### fe_distant_light | erlang javascript

\`\`\`gleam
pub fn fe_distant_light(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_point_light | erlang javascript

\`\`\`gleam
pub fn fe_point_light(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`

### fe_spot_light | erlang javascript

\`\`\`gleam
pub fn fe_spot_light(attrs: List(Attribute(msg))) -> Element(msg)
\`\`\`
`,Ui=`
## Non-rendered elements 

### clip_path | erlang javascript

\`\`\`gleam
pub fn clip_path(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`

### script | erlang javascript

\`\`\`gleam
pub fn script(attrs: List(Attribute(msg)), js: String) -> Element(msg)
\`\`\`

### style | erlang javascript

\`\`\`gleam
pub fn style(attrs: List(Attribute(msg)), css: String) -> Element(msg)
\`\`\`
`,Gi=`
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
`;function Vi(){let n=l([Ti,Di,Ri,Bi,Fi,zi,Pi,Wi,Hi,Ui,Gi]),t=w(n,`
`);return L(t)}const Yi=`
# lustre/event
`,Zi=`
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
`,Ji=`
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
`,Ki=`
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
`,Qi=`
## Focus events

### on_focus | erlang javascript

\`\`\`gleam
pub fn on_focus(msg: msg) -> Attribute(msg)
\`\`\`

### on_blur | erlang javascript

\`\`\`gleam
pub fn on_blur(msg: msg) -> Attribute(msg)
\`\`\`
`,Xi=`
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
pub fn value(event: Dynamic) -> Decoder(String)
\`\`\`

### checked | erlang javascript

\`\`\`gleam
pub fn checked(event: Dynamic) -> Decoder(Bool)
\`\`\`

### mouse_position | erlang javascript

\`\`\`gleam
pub fn mouse_position(event: Dynamic) -> Decoder(#(Float, Float)) 
\`\`\`

### emit | javascript

\`\`\`gleam
pub fn emit(event: String, data: any) -> Effect(msg)
\`\`\`
`;function na(){let n=l([Yi,Zi,Ji,Ki,Qi,Xi]),t=w(n,`
`);return L(t)}const ta=`
# Components

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function ea(){let n=l([ta]),t=w(n,`
`);return L(t)}const ra=`
# Managing state

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function sa(){let n=l([ra]),t=w(n,`
`);return L(t)}const ia=`# Quickstart

Lustre is a frontend web framework for Gleam. It is primarily focused on helping
you build robust single-page applications (SPAs), but it can also be used on the
server to render static HTML. To get an idea of what it's all about, here's a
quick overview of Lustre's key features:

- Elm-inspired runtime with state management and controlled side effects out of
  the box.
- A simple, declarative API for building type-safe user interfaces.
- Stateful components built as custom elements and useable just like any other
  HTML element.
- Static HTML rendering anywhere Gleam can run: the BEAM, Node.js, Deno, or the
  browser.

In this quickstart guide we'll take a look at how to get up and running with
Lustre in both the browser and on the server.
`,aa=`## In the browser | javascript

To get started, we'll scaffold a new Gleam project using \`gleam new\`. If you've
found your way to this guide but don't already know what Gleam is you can read
about it over at [gleam.run](https://gleam.run).

\`\`\`sh
$ gleam new lustre_quickstart && gleam add lustre
\`\`\`

In a real project you probably want to use a build tool like [vite](https://vitejs.dev)
along with the [vite-gleam](https://github.com/Enderchief/vite-gleam) plugin, but
to keep this guide simple we'll just show you what code your need to write and leave
the details on serving the app up to you. MDN have a handy guide covering some
different options to [set up a local web server for development](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server)
if you need some ideas.

### Basic HTML setup

With our Gleam project scaffolded, go ahead and create an \`index.html\` in the root
of the project. This is the minimal code you'll typically want to get started:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lustre Quickstart</title>

    <script type="module">
      import { main } from "./build/dev/javascript/lustre_quickstart/app.mjs"

      document.addEventListener("DOMContentLoaded", () => {
        main()
      }, { once: true })
    <\/script>
  </head>

  <body>
    <div data-lustre-app></div>
  </body>
</html>
\`\`\`

We wait until the DOM has loaded before calling the our app's \`main\` function.
This will mount the Lustre app and start rendering. We also add the \`data-lustre-app\`
attribute to the element we want to mount the app to. You could use a class or an
id instead, or none of that: [\`lustre.start\`](/api/lustre#start) takes a CSS
selector so go wild!

### Hello, world!

Go ahead and rename the generated \`lustre_quickstart.gleam\` file to \`app.gleam\`
and replace the contents with the following:

\`\`\`gleam
import lustre
import lustre/element.{text}

pub fn main() {
  let app = lustre.element(text("Hello, world!"))
  let assert Ok(_) = lustre.start(app, "[data-lustre-app]", Nil)

  Nil
}
\`\`\`

This will create a static Lustre app and mount it onto the element that matches
the CSS selector. While we're asserting everything is OK here, it is possible
for \`lustre.start\` to fail in a couple of ways. Check out the docs for the
[\`lustre.Error\`](/api/lustre#error-type) type if you want to know more.

Run \`gleam build\` and serve the HTML with your preferred static file server (this
step is necessary: JavaScript modules can't be imported when just opening a HTML
file) and admire your handiwork.

### Adding interactivity

Now that we know how to get things up and running, let's try something a little
more exciting and add some interactivity. Replace the contents of your \`app.gleam\`
file with the code below and rebuild the project.

\`\`\`gleam
import gleam/int
import lustre
import lustre/element.{text}
import lustre/element/html.{div, button, p}
import lustre/event.{on_click}

pub fn main() {
  let app = lustre.simple(init, update, view)
  let assert Ok(_) = lustre.start("[data-lustre-app]", Nil)

  Nil
}

fn init(_) {
  0
}

type Msg {
  Incr
  Decr
}

fn update(model, msg) {
  case msg {
    Incr -> model + 1
    Decr -> model - 1
  }
}

fn view(model) {
  let count = int.to_string(model)

  div([], [
    button([on_click(Decr)], [text(" + ")]),
    p([], [text(count)]),
    button([on_click(Incr)], [text(" - ")])
  ])
}
\`\`\`

You should know have a very exciting counter app! Almost every Lustre app will
boil down to the same three parts:

- A \`Model\` type that represents your application's state and a function to
  \`init\` it.
- A \`Msg\` type and an \`update\` function to update that state based on incoming
  messages.
- A \`view\` function that takes the current state and renders some HTML.

This architecture is not unique to Lustre. It was introduced by the Elm community
and known as the [Elm Architecture](https://guide.elm-lang.org/architecture/)
before making its way to React as [Redux](https://redux.js.org) and beyond, known
more generally as the Model-View-Update architecture. If you work through the
rest of our guides you'll see how this architecture helps keep side effects out
of our view code and how to create components that can encapsulate their own state
and update logic.

For now though, we'll leave things here. If you're interested in seeing how Lustre
can be used to render static HTML on the server, read on! Otherwise, you can take
this counter application as a base and start building something of your own.
`,la=`## On the server | erlang javascript

As we've seen, Lustre is primarily meant to be used in the browser to build
interactive SPAs. It is possible to render Lustre elements to static HTML and
simply use Lustre as a templating DSL. As before, we'll start by scaffolding a
new Gleam project and adding Lustre as a dependency:

\`\`\`sh
$ gleam new lustre_quickstart && gleam add lustre
\`\`\`

The [\`lustre/element\`](/api/lustre/element) module contains functions to render
an element as either a \`String\` or \`StringBuilder\`. Copy the following code into
\`lustre_quickstart.gleam\`:
\`\`\`gleam
import gleam/io
import lustre/attribute.{attribute}
import lustre/element.{text}
import lustre/element/html.{html, head, title, body, div, h1}

pub fn main() {
  html([attribute("lang", "en")], [
    head([], [
     title([], [text("Lustre Quickstart")])
    ]),
    body([], [
      h1([], [text("Hello, world!")])
    ])
  ])
  |> element.to_string
  |> io.println
}
\`\`\`

We can test this out by running \`gleam run\` and seeing the HTML printed to the
console. From here we could set up a web server using [mist](/guides/mist) or
[wisp](/guides/wisp) to serve the HTML to the browser or write it to a file using
[simplifile](https://hexdocs.pm/simplifile/). Because the API is the same for
both client and server rendering, it is easy to create reusable components that
can be rendered anywhere Gleam can run!
`,ua="## Next steps";function En(){let n=l([ia,aa,la,ua]),t=w(n,`
`);return L(t)}const oa=`
# Server-side rendering

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function ma(){let n=l([oa]),t=w(n,`
`);return L(t)}const ca=`
# Side effects

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function ga(){let n=l([ca]),t=w(n,`
`);return L(t)}const pa=`
# Using with Mist

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function fa(){let n=l([pa]),t=w(n,`
`);return L(t)}const ha=`
# Using with Wisp

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function da(){let n=l([ha]),t=w(n,`
`);return L(t)}class ba extends _n{constructor(t){super(),this.route=t}}class Un extends _n{constructor(t){super(),this[0]=t}}function _a(n){return new ba(n)}function ya(n,t){if(t instanceof Un){let e=t[0];return n.withFields({route:e})}else throw z("case_no_match","app",50,"update","No case clause matched",{values:[t]})}function va(n){let t=n.route.path;return t==="/"?En():t==="/api"||t==="/api/lustre"?kt():t==="/api/lustre/attribute"?oi():t==="/api/lustre/effect"?pi():t==="/api/lustre/element"?_i():t==="/api/lustre/element/html"?qi():t==="/api/lustre/element/svg"?Vi():t==="/api/lustre/event"?na():t==="/docs"||t==="/docs/quickstart"?En():t==="/docs/managing-state"?sa():t==="/docs/side-effects"?ga():t==="/docs/components"?ea():t==="/docs/server-side-rendering"?ma():t==="/guides/mist"?fa():t==="/guides/wisp"?da():En()}function Ea(n){let t=Kr(_a,ya,va),e=qr(t,"body",n);if(!e.isOk())throw z("assignment_no_match","app",24,"main","Assignment pattern did not match",{value:e});return e[0]}const Dn=n=>`/${n.slice(14)}`;document.addEventListener("DOMContentLoaded",()=>{const n=new URL(window.location.href),t=Ea({path:Dn(n.pathname),hash:n.hash});document.addEventListener("click",e=>{let r=e.target;for(;r;){if(r===document.body)return;if(r.tagName==="A"){const s=new URL(r.href);return s.origin!==window.location.origin?void 0:(e.preventDefault(),window.requestAnimationFrame(()=>{var i;window.history.pushState({},"",s.href),s.pathname===window.location.pathname&&s.hash?(i=document.querySelector(s.hash))==null||i.scrollIntoView():window.scrollTo(0,0)}),void t(new Un({path:Dn(s.pathname),hash:s.hash})))}r=r.parentNode}}),window.addEventListener("popstate",()=>{const e=new URL(window.location.href);t(new Un({path:Dn(e.pathname),hash:e.hash}))})});export{At as _};
