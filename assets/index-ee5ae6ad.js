var Nt=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var S=(n,t,e)=>(Nt(n,t,"read from private field"),e?e.call(n):t.get(n)),Y=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},F=(n,t,e,r)=>(Nt(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e);var mt=(n,t,e)=>(Nt(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();let $t=class{inspect(){let t=r=>{let i=st(this[r]);return isNaN(parseInt(r))?`${r}: ${i}`:i},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}},it=class{static fromArray(t,e){let r=e||new mi;return t.reduceRight((i,s)=>new gi(s,i),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new ci(this)}inspect(){return`[${this.toArray().map(st).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}};function gn(n,t){return it.fromArray(n,t)}var Un,sr;let ci=(sr=class{constructor(t){Y(this,Un,void 0);F(this,Un,t)}next(){if(S(this,Un).isEmpty())return{done:!0};{let{head:t,tail:e}=S(this,Un);return F(this,Un,e),{value:t,done:!1}}}},Un=new WeakMap,sr),mi=class extends it{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}},gi=class extends it{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}};class jt{static isBitString(t){return(t==null?void 0:t.__gleam_prelude_variant__)==="BitString"}constructor(t){this.buffer=t}get __gleam_prelude_variant__(){return"BitString"}inspect(){return`<<${Array.from(this.buffer).join(", ")}>>`}get length(){return this.buffer.length}byteAt(t){return this.buffer[t]}floatAt(t){return fi(this.buffer.slice(t,t+8))}intFromSlice(t,e){return pi(this.buffer.slice(t,e))}binaryFromSlice(t,e){return new jt(this.buffer.slice(t,e))}sliceAfter(t){return new jt(this.buffer.slice(t))}}function pi(n){n=n.reverse();let t=0;for(let e=n.length-1;e>=0;e--)t=t*256+n[e];return t}function fi(n){return new Float64Array(n.reverse().buffer)[0]}let re=class extends $t{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}},pn=class extends re{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}},Mn=class extends re{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Error"}isOk(){return!1}};function st(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(st).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(st).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return hi(n)}}function hi(n){var l,o;let[t,e]=lr(n),r=((o=(l=Object.getPrototypeOf(n))==null?void 0:l.constructor)==null?void 0:o.name)||"Object",i=[];for(let u of t(n))i.push(`${st(u)}: ${st(e(n,u))}`);let s=i.length?" "+i.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${s}})`}function Dn(n,t){let e=[n,t];for(;e.length;){let r=e.pop(),i=e.pop();if(r===i)continue;if(!Ie(r)||!Ie(i)||!xi(r,i)||di(r,i)||bi(r,i)||yi(r,i)||_i(r,i)||Ei(r,i))return!1;const a=Object.getPrototypeOf(r);if(a!==null&&typeof a.equals=="function")try{if(r.equals(i))continue;return!1}catch{}let[l,o]=lr(r);for(let u of l(r))e.push(o(r,u),o(i,u))}return!0}function lr(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function di(n,t){return n instanceof Date&&(n>t||n<t)}function bi(n,t){return n.buffer instanceof ArrayBuffer&&n.BYTES_PER_ELEMENT&&!(n.byteLength===t.byteLength&&n.every((e,r)=>e===t[r]))}function yi(n,t){return Array.isArray(n)&&n.length!==t.length}function _i(n,t){return n instanceof Map&&n.size!==t.size}function Ei(n,t){return n instanceof Set&&(n.size!=t.size||[...n].some(e=>!t.has(e)))}function Ie(n){return typeof n=="object"&&n!==null}function xi(n,t){return typeof n!="object"&&typeof t!="object"&&(!n||!t)||[Promise,WeakSet,WeakMap,Function].some(r=>n instanceof r)?!1:n.constructor===t.constructor||n.__gleam_prelude_variant__&&n.__gleam_prelude_variant__===t.__gleam_prelude_variant__}function un(n,t,e,r,i,s){let a=new globalThis.Error(i);a.gleam_error=n,a.module=t,a.line=e,a.fn=r;for(let l in s)a[l]=s[l];return a}class Yn extends $t{constructor(t){super(),this[0]=t}}class St extends $t{}function wi(n,t){if(n instanceof Yn){let e=n[0];return new pn(e)}else return new Mn(t)}function ki(n,t){if(n instanceof Yn){let e=n[0];return new Yn(t(e))}else{if(n instanceof St)return new St;throw un("case_no_match","gleam/option",186,"map","No case clause matched",{values:[n]})}}const Oe=new WeakMap,Bt=new DataView(new ArrayBuffer(8));let Mt=0;function Wt(n){const t=Oe.get(n);if(t!==void 0)return t;const e=Mt++;return Mt===2147483647&&(Mt=0),Oe.set(n,e),e}function Ut(n,t){return n^t+2654435769+(n<<6)+(n>>2)|0}function ie(n){let t=0;const e=n.length;for(let r=0;r<e;r++)t=Math.imul(31,t)+n.charCodeAt(r)|0;return t}function ur(n){Bt.setFloat64(0,n);const t=Bt.getInt32(0),e=Bt.getInt32(4);return Math.imul(73244475,t>>16^t)^e}function Li(n){return ie(n.toString())}function Ai(n){const t=Object.getPrototypeOf(n);if(t!==null&&typeof t.hashCode=="function")try{const r=n.hashCode(n);if(typeof r=="number")return r}catch{}if(n instanceof Promise||n instanceof WeakSet||n instanceof WeakMap)return Wt(n);if(n instanceof Date)return ur(n.getTime());let e=0;if(n instanceof ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||n instanceof Uint8Array)for(let r=0;r<n.length;r++)e=Math.imul(31,e)+on(n[r])|0;else if(n instanceof Set)n.forEach(r=>{e=e+on(r)|0});else if(n instanceof Map)n.forEach((r,i)=>{e=e+Ut(on(r),on(i))|0});else{const r=Object.keys(n);for(let i=0;i<r.length;i++){const s=r[i],a=n[s];e=e+Ut(on(a),ie(s))|0}}return e}function on(n){if(n===null)return 1108378658;if(n===void 0)return 1108378659;if(n===!0)return 1108378657;if(n===!1)return 1108378656;switch(typeof n){case"number":return ur(n);case"string":return ie(n);case"bigint":return Li(n);case"object":return Ai(n);case"symbol":return Wt(n);case"function":return Wt(n);default:return 0}}const Ln=5,se=Math.pow(2,Ln),vi=se-1,ji=se/2,Si=se/4,J=0,kn=1,ln=2,Zn=3,ae={type:ln,bitmap:0,array:[]};function yt(n,t){return n>>>t&vi}function zt(n,t){return 1<<yt(n,t)}function Ci(n){return n-=n>>1&1431655765,n=(n&858993459)+(n>>2&858993459),n=n+(n>>4)&252645135,n+=n>>8,n+=n>>16,n&127}function le(n,t){return Ci(n&t-1)}function mn(n,t,e){const r=n.length,i=new Array(r);for(let s=0;s<r;++s)i[s]=n[s];return i[t]=e,i}function Ii(n,t,e){const r=n.length,i=new Array(r+1);let s=0,a=0;for(;s<t;)i[a++]=n[s++];for(i[a++]=e;s<r;)i[a++]=n[s++];return i}function Qt(n,t){const e=n.length,r=new Array(e-1);let i=0,s=0;for(;i<t;)r[s++]=n[i++];for(++i;i<e;)r[s++]=n[i++];return r}function or(n,t,e,r,i,s){const a=on(t);if(a===r)return{type:Zn,hash:a,array:[{type:J,k:t,v:e},{type:J,k:i,v:s}]};const l={val:!1};return _t(ue(ae,n,a,t,e,l),n,r,i,s,l)}function _t(n,t,e,r,i,s){switch(n.type){case kn:return Oi(n,t,e,r,i,s);case ln:return ue(n,t,e,r,i,s);case Zn:return $i(n,t,e,r,i,s)}}function Oi(n,t,e,r,i,s){const a=yt(e,t),l=n.array[a];if(l===void 0)return s.val=!0,{type:kn,size:n.size+1,array:mn(n.array,a,{type:J,k:r,v:i})};if(l.type===J)return Dn(r,l.k)?i===l.v?n:{type:kn,size:n.size,array:mn(n.array,a,{type:J,k:r,v:i})}:(s.val=!0,{type:kn,size:n.size,array:mn(n.array,a,or(t+Ln,l.k,l.v,e,r,i))});const o=_t(l,t+Ln,e,r,i,s);return o===l?n:{type:kn,size:n.size,array:mn(n.array,a,o)}}function ue(n,t,e,r,i,s){const a=zt(e,t),l=le(n.bitmap,a);if(n.bitmap&a){const o=n.array[l];if(o.type!==J){const p=_t(o,t+Ln,e,r,i,s);return p===o?n:{type:ln,bitmap:n.bitmap,array:mn(n.array,l,p)}}const u=o.k;return Dn(r,u)?i===o.v?n:{type:ln,bitmap:n.bitmap,array:mn(n.array,l,{type:J,k:r,v:i})}:(s.val=!0,{type:ln,bitmap:n.bitmap,array:mn(n.array,l,or(t+Ln,u,o.v,e,r,i))})}else{const o=n.array.length;if(o>=ji){const u=new Array(32),p=yt(e,t);u[p]=ue(ae,t+Ln,e,r,i,s);let f=0,h=n.bitmap;for(let g=0;g<32;g++){if(h&1){const j=n.array[f++];u[g]=j}h=h>>>1}return{type:kn,size:o+1,array:u}}else{const u=Ii(n.array,l,{type:J,k:r,v:i});return s.val=!0,{type:ln,bitmap:n.bitmap|a,array:u}}}}function $i(n,t,e,r,i,s){if(e===n.hash){const a=oe(n,r);if(a!==-1)return n.array[a].v===i?n:{type:Zn,hash:e,array:mn(n.array,a,{type:J,k:r,v:i})};const l=n.array.length;return s.val=!0,{type:Zn,hash:e,array:mn(n.array,l,{type:J,k:r,v:i})}}return _t({type:ln,bitmap:zt(n.hash,t),array:[n]},t,e,r,i,s)}function oe(n,t){const e=n.array.length;for(let r=0;r<e;r++)if(Dn(t,n.array[r].k))return r;return-1}function Ct(n,t,e,r){switch(n.type){case kn:return zi(n,t,e,r);case ln:return Ti(n,t,e,r);case Zn:return Fi(n,r)}}function zi(n,t,e,r){const i=yt(e,t),s=n.array[i];if(s!==void 0){if(s.type!==J)return Ct(s,t+Ln,e,r);if(Dn(r,s.k))return s}}function Ti(n,t,e,r){const i=zt(e,t);if(!(n.bitmap&i))return;const s=le(n.bitmap,i),a=n.array[s];if(a.type!==J)return Ct(a,t+Ln,e,r);if(Dn(r,a.k))return a}function Fi(n,t){const e=oe(n,t);if(!(e<0))return n.array[e]}function ce(n,t,e,r){switch(n.type){case kn:return Ni(n,t,e,r);case ln:return Bi(n,t,e,r);case Zn:return Mi(n,r)}}function Ni(n,t,e,r){const i=yt(e,t),s=n.array[i];if(s===void 0)return n;let a;if(s.type===J){if(!Dn(s.k,r))return n}else if(a=ce(s,t+Ln,e,r),a===s)return n;if(a===void 0){if(n.size<=Si){const l=n.array,o=new Array(n.size-1);let u=0,p=0,f=0;for(;u<i;){const h=l[u];h!==void 0&&(o[p]=h,f|=1<<u,++p),++u}for(++u;u<l.length;){const h=l[u];h!==void 0&&(o[p]=h,f|=1<<u,++p),++u}return{type:ln,bitmap:f,array:o}}return{type:kn,size:n.size-1,array:mn(n.array,i,a)}}return{type:kn,size:n.size,array:mn(n.array,i,a)}}function Bi(n,t,e,r){const i=zt(e,t);if(!(n.bitmap&i))return n;const s=le(n.bitmap,i),a=n.array[s];if(a.type!==J){const l=ce(a,t+Ln,e,r);return l===a?n:l!==void 0?{type:ln,bitmap:n.bitmap,array:mn(n.array,s,l)}:n.bitmap===i?void 0:{type:ln,bitmap:n.bitmap^i,array:Qt(n.array,s)}}return Dn(r,a.k)?n.bitmap===i?void 0:{type:ln,bitmap:n.bitmap^i,array:Qt(n.array,s)}:n}function Mi(n,t){const e=oe(n,t);if(e<0)return n;if(n.array.length!==1)return{type:Zn,hash:n.hash,array:Qt(n.array,e)}}function cr(n,t){if(n===void 0)return;const e=n.array,r=e.length;for(let i=0;i<r;i++){const s=e[i];if(s!==void 0){if(s.type===J){t(s.v,s.k);continue}cr(s,t)}}}class En{static fromObject(t){const e=Object.keys(t);let r=En.new();for(let i=0;i<e.length;i++){const s=e[i];r=r.set(s,t[s])}return r}static fromMap(t){let e=En.new();return t.forEach((r,i)=>{e=e.set(i,r)}),e}static new(){return new En(void 0,0)}constructor(t,e){this.root=t,this.size=e}get(t,e){if(this.root===void 0)return e;const r=Ct(this.root,0,on(t),t);return r===void 0?e:r.v}set(t,e){const r={val:!1},i=this.root===void 0?ae:this.root,s=_t(i,0,on(t),t,e,r);return s===this.root?this:new En(s,r.val?this.size+1:this.size)}delete(t){if(this.root===void 0)return this;const e=ce(this.root,0,on(t),t);return e===this.root?this:e===void 0?En.new():new En(e,this.size-1)}has(t){return this.root===void 0?!1:Ct(this.root,0,on(t),t)!==void 0}entries(){if(this.root===void 0)return[];const t=[];return this.forEach((e,r)=>t.push([r,e])),t}forEach(t){cr(this.root,t)}hashCode(){let t=0;return this.forEach((e,r)=>{t=t+Ut(on(e),on(r))|0}),t}equals(t){if(!(t instanceof En))return!1;let e=!0;return this.forEach((r,i)=>{e=e&&Dn(t.get(i,!r),r)}),e}}const Di=void 0,$e={};function qi(n){return n.toString()}function Pi(n,t){return n+t}function Ri(n,t){const e=n[Symbol.iterator]();let r=e.next().value||"",i=e.next();for(;!i.done;)r=r+t+i.value,i=e.next();return r}function Hi(n){let t="";for(const e of n)t=t+e;return t}function Vi(){return En.new()}function mr(n,t){const e=n.get(t,$e);return e===$e?new Mn(Di):new pn(e)}function Wi(n,t,e){return e.set(n,t)}function gr(n){if(typeof n=="string")return"String";if(re.isResult(n))return"Result";if(it.isList(n))return"List";if(Number.isInteger(n))return"Int";if(Array.isArray(n))return`Tuple of ${n.length} elements`;if(jt.isBitString(n))return"BitString";if(n instanceof En)return"Map";if(typeof n=="number")return"Float";if(n===null)return"Null";if(n===void 0)return"Nil";{const t=typeof n;return t.charAt(0).toUpperCase()+t.slice(1)}}function me(n,t){return Ui(n,gr(t))}function Ui(n,t){return new Mn(it.fromArray([new pe(n,t,it.fromArray([]))]))}function Qi(n){return typeof n=="string"?new pn(n):me("String",n)}function Gi(n){return Number.isInteger(n)?new pn(n):me("Int",n)}function Yi(n,t){const e=()=>me("Map",n);if(n instanceof En||n instanceof WeakMap||n instanceof Map){const r=mr(n,t);return new pn(r.isOk()?new Yn(r[0]):new St)}else return Object.getPrototypeOf(n)==Object.prototype?ze(n,t,()=>new pn(new St)):ze(n,t,e)}function ze(n,t,e){try{return t in n?new pn(new Yn(n[t])):e()}catch{return e()}}function Zi(n){return qi(n)}function Ki(n,t){let e=n<t;if(e)return n;if(e)throw un("case_no_match","gleam/int",335,"min","No case clause matched",{values:[e]});return t}function pr(){return Vi()}function Te(n,t){return mr(n,t)}function fr(n,t,e){return Wi(t,e,n)}function Ji(n,t){for(;;){let e=n,r=t;if(e.hasLength(0))return r;if(e.atLeastLength(1)){let i=e.head;n=e.tail,t=fr(r,i[0],i[1])}else throw un("case_no_match","gleam/map",85,"fold_list_of_pair","No case clause matched",{values:[e]})}}function Xi(n){return Ji(n,pr())}function ns(n){return Xi(n)}function ts(n,t){for(;;){let e=n,r=t;if(e.hasLength(0))return r;if(e.atLeastLength(1)){let i=e.head;n=e.tail,t=gn([i],r)}else throw un("case_no_match","gleam/list",124,"do_reverse_acc","No case clause matched",{values:[e]})}}function es(n){return ts(n,gn([]))}function rs(n){return es(n)}function is(n,t,e){for(;;){let r=n,i=t,s=e;if(r.hasLength(0))return rs(s);if(r.atLeastLength(1)){let a=r.head;n=r.tail,t=i,e=gn([i(a)],s)}else throw un("case_no_match","gleam/list",361,"do_map","No case clause matched",{values:[r]})}}function ge(n,t){return is(n,t,gn([]))}function ss(n,t,e){for(;;){let r=n,i=t,s=e;if(r.hasLength(0))return i;if(r.atLeastLength(1)){let a=r.head;n=r.tail,t=s(i,a),e=s}else throw un("case_no_match","gleam/list",716,"fold","No case clause matched",{values:[r]})}}function as(n,t){if(n.isOk()){let e=n[0];return new pn(t(e))}else{if(n.isOk())throw un("case_no_match","gleam/result",67,"map","No case clause matched",{values:[n]});{let e=n[0];return new Mn(e)}}}function ls(n,t){if(n.isOk()){let e=n[0];return new pn(e)}else{if(n.isOk())throw un("case_no_match","gleam/result",95,"map_error","No case clause matched",{values:[n]});{let e=n[0];return new Mn(t(e))}}}function Fe(n,t){if(n.isOk()){let e=n[0];return t(e)}else{if(n.isOk())throw un("case_no_match","gleam/result",163,"try","No case clause matched",{values:[n]});{let e=n[0];return new Mn(e)}}}function us(n,t){return Pi(n,t)}function os(n){return Hi(n)}function hr(n){return n}function cs(n,t){return us(n,hr(t))}function dr(n){return n}class pe extends $t{constructor(t,e,r){super(),this.expected=t,this.found=e,this.path=r}}function fe(n){return n}function Gt(n){return n}function ms(n){return new pn(n)}function gs(n){return Qi(n)}function br(n){return gr(n)}function ps(n){return Gi(n)}function yr(n){return t=>{if(n.hasLength(0))return new Mn(gn([new pe("another type",br(t),gn([]))]));if(n.atLeastLength(1)){let e=n.head,r=n.tail,i=e(t);if(i.isOk()){let s=i[0];return new pn(s)}else{if(i.isOk())throw un("case_no_match","gleam/dynamic",1009,"","No case clause matched",{values:[i]});return yr(r)(t)}}else throw un("case_no_match","gleam/dynamic",1002,"","No case clause matched",{values:[n]})}}function fs(n){if(n.isOk())return gn([]);if(n.isOk())throw un("case_no_match","gleam/dynamic",1487,"all_errors","No case clause matched",{values:[n]});return n[0]}function Ne(n,t){return e=>{let r=t(e);if(r.isOk()){let i=r[0];return new pn(n(i))}else{let i=r;return new Mn(fs(i))}}}function hs(n,t){let e=fe(t),r=yr(gn([gs,s=>as(ps(s),Zi)])),i=(()=>{let s=r(e);if(s.isOk())return s[0];if(s.isOk())throw un("case_no_match","gleam/dynamic",593,"push_path","No case clause matched",{values:[s]});{let a=gn(["<",br(e),">"]),l=os(a);return dr(l)}})();return n.withFields({path:gn([i],n.path)})}function ds(n,t){return ls(n,e=>ge(e,t))}function bs(n,t){return e=>{let r=new pe("field","nothing",gn([]));return Fe(Yi(e,n),i=>{let a=wi(i,gn([r])),l=Fe(a,t);return ds(l,o=>hs(o,n))})}}let fn=class{inspect(){let t=r=>{let i=at(this[r]);return isNaN(parseInt(r))?`${r}: ${i}`:i},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}},he=class{static fromArray(t,e){let r=e||new be;return t.reduceRight((i,s)=>new _s(s,i),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new ys(this)}inspect(){return`[${this.toArray().map(at).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}};function de(n,t){return he.fromArray(n,t)}var Qn,ar;let ys=(ar=class{constructor(t){Y(this,Qn,void 0);F(this,Qn,t)}next(){if(S(this,Qn).isEmpty())return{done:!0};{let{head:t,tail:e}=S(this,Qn);return F(this,Qn,e),{value:t,done:!1}}}},Qn=new WeakMap,ar),be=class extends he{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}},_s=class extends he{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}},_r=class extends fn{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}},Er=class extends _r{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}},Xn=class extends _r{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Error"}isOk(){return!1}};function at(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(at).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(at).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return Es(n)}}function Es(n){var l,o;let[t,e]=xr(n),r=((o=(l=Object.getPrototypeOf(n))==null?void 0:l.constructor)==null?void 0:o.name)||"Object",i=[];for(let u of t(n))i.push(`${at(u)}: ${at(e(n,u))}`);let s=i.length?" "+i.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${s}})`}function xs(n,t){let e=[n,t];for(;e.length;){let r=e.pop(),i=e.pop();if(r===i)continue;if(!Be(r)||!Be(i)||!js(r,i)||ws(r,i)||ks(r,i)||Ls(r,i)||As(r,i)||vs(r,i))return!1;const a=Object.getPrototypeOf(r);if(a!==null&&typeof a.equals=="function")try{if(r.equals(i))continue;return!1}catch{}let[l,o]=xr(r);for(let u of l(r))e.push(o(r,u),o(i,u))}return!0}function xr(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function ws(n,t){return n instanceof Date&&(n>t||n<t)}function ks(n,t){return n.buffer instanceof ArrayBuffer&&n.BYTES_PER_ELEMENT&&!(n.byteLength===t.byteLength&&n.every((e,r)=>e===t[r]))}function Ls(n,t){return Array.isArray(n)&&n.length!==t.length}function As(n,t){return n instanceof Map&&n.size!==t.size}function vs(n,t){return n instanceof Set&&(n.size!=t.size||[...n].some(e=>!t.has(e)))}function Be(n){return typeof n=="object"&&n!==null}function js(n,t){return typeof n!="object"&&typeof t!="object"&&(!n||!t)||[Promise,WeakSet,WeakMap,Function].some(r=>n instanceof r)?!1:n.constructor===t.constructor||n.__gleam_prelude_variant__&&n.__gleam_prelude_variant__===t.__gleam_prelude_variant__}class wr extends fn{constructor(t){super(),this[0]=t}}function Ss(n){return new wr(de([n]))}function It(){return new wr(de([]))}function Wn(n,t,e,r){return t[3]?(n==null?void 0:n.nodeType)===1&&n.nodeName===t[0].toUpperCase()&&n.namespaceURI===t[3]?De(n,t,t[3],e,r):Me(n,t,t[3],e,r):t[2]?(n==null?void 0:n.nodeType)===1&&n.nodeName===t[0].toUpperCase()?De(n,t,null,e,r):Me(n,t,null,e,r):t[0]?(n==null?void 0:n.nodeType)===3?Is(n,t):Cs(n,t):document.createComment(["[internal lustre error] I couldn't work out how to render this element. This","function should only be called internally by lustre's runtime: if you think","this is an error, please open an issue at","https://github.com/hayleigh-dot-dev/gleam-lustre/issues/new"].join(" "))}function Me(n,t,e,r,i=null){const s=e?document.createElementNS(e,t[0]):document.createElement(t[0]);let a=t[1];for(;a.head;)Yt(s,a.head[0],a.head[0]==="class"&&s.className?`${s.className} ${a.head[1]}`:a.head[1],r),a=a.tail;if(customElements.get(t[0]))s._slot=t[2];else if(t[0]==="slot"){let l=new be,o=i;for(;o;)if(o._slot){l=o._slot;break}else o=o.parentNode;for(;l.head;)s.appendChild(Wn(null,l.head,r,s)),l=l.tail}else{let l=t[2];for(;l.head;)s.appendChild(Wn(null,l.head,r,s)),l=l.tail;n&&n.replaceWith(s)}return s}function De(n,t,e,r,i){const s=n.attributes,a=new Map;let l=t[1];for(;l.head;)a.set(l.head[0],l.head[0]==="class"&&a.has("class")?`${a.get("class")} ${l.head[1]}`:l.head[1]),l=l.tail;for(const{name:o,value:u}of s)if(!a.has(o))n.removeAttribute(o);else{const p=a.get(o);p!==u&&(Yt(n,o,p,r),a.delete(o))}for(const[o,u]of a)Yt(n,o,u,r);if(customElements.get(t[0]))n._slot=t[2];else if(t[0]==="slot"){let o=n.firstChild,u=new be,p=i;for(;p;)if(p._slot){u=p._slot;break}else p=p.parentNode;for(;o;)u.head&&(Wn(o,u.head,r,n),u=u.tail),o=o.nextSibling;for(;u.head;)n.appendChild(Wn(null,u.head,r,n)),u=u.tail}else{let o=n.firstChild,u=t[2];for(;o;)if(u.head){const p=o.nextSibling;Wn(o,u.head,r,n),u=u.tail,o=p}else{const p=o.nextSibling;o.remove(),o=p}for(;u.head;)n.appendChild(Wn(null,u.head,r,n)),u=u.tail}return n}function Yt(n,t,e,r){switch(typeof e){case"string":n.getAttribute(t)!==e&&n.setAttribute(t,e);break;case(t.startsWith("on")&&"function"):{const i=t.slice(2).toLowerCase(),s=a=>ki(e(a),r);n.removeEventListener(i,n[`_${t}`]),n.addEventListener(i,s),n[`_${t}`]=s;break}default:n[t]=e}}function Cs(n,t){if(!t[0])return n==null||n.remove(),null;const e=document.createTextNode(t[0]);return n&&n.replaceWith(e),e}function Is(n,t){const e=n.nodeValue,r=t[0];return r?(e!==r&&(n.nodeValue=r),n):(n==null||n.remove(),null)}var an,In,On,$n,Bn,ht,et,rt,dt,Zt,bt,Kt;class kr{constructor(t,e,r){Y(this,dt);Y(this,bt);Y(this,an,null);Y(this,In,null);Y(this,On,[]);Y(this,$n,[]);Y(this,Bn,!1);Y(this,ht,null);Y(this,et,null);Y(this,rt,null);F(this,ht,t),F(this,et,e),F(this,rt,r)}start(t,e){if(!Lr())return new Xn(new jr);if(S(this,an))return new Xn(new Rs);if(F(this,an,t instanceof HTMLElement?t:document.querySelector(t)),!S(this,an))return new Xn(new Ws);const[r,i]=S(this,ht).call(this,e);return F(this,In,r),F(this,$n,i[0].toArray()),F(this,Bn,!0),window.requestAnimationFrame(()=>mt(this,dt,Zt).call(this)),new Er(s=>this.dispatch(s))}dispatch(t){S(this,On).push(t),mt(this,dt,Zt).call(this)}emit(t,e=null){S(this,an).dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e,composed:!0}))}destroy(){if(!S(this,an))return new Xn(new Hs);S(this,an).remove(),F(this,an,null),F(this,In,null),F(this,On,[]),F(this,$n,[]),F(this,Bn,!1),F(this,et,()=>{}),F(this,rt,()=>{})}}an=new WeakMap,In=new WeakMap,On=new WeakMap,$n=new WeakMap,Bn=new WeakMap,ht=new WeakMap,et=new WeakMap,rt=new WeakMap,dt=new WeakSet,Zt=function(){if(mt(this,bt,Kt).call(this),S(this,Bn)){const t=S(this,rt).call(this,S(this,In));F(this,an,Wn(S(this,an),t,e=>this.dispatch(e))),F(this,Bn,!1)}},bt=new WeakSet,Kt=function(t=0){if(S(this,an)){if(S(this,On).length)for(;S(this,On).length;){const[e,r]=S(this,et).call(this,S(this,In),S(this,On).shift());S(this,Bn)||F(this,Bn,S(this,In)!==e),F(this,In,e),F(this,$n,S(this,$n).concat(r[0].toArray()))}for(;S(this,$n).length;)S(this,$n).shift()(e=>this.dispatch(e),(e,r)=>this.emit(e,r));S(this,On).length&&(t>=5?console.warn(tooManyUpdates):mt(this,bt,Kt).call(this,++t))}};const Os=(n,t,e)=>new kr(n,t,e),$s=(n,t,e)=>n.start(t,e),zs=(n,t)=>Ss((e,r)=>{r(n,t)}),Ts=(n,t,e,r,i)=>{var s,a,l,o;return Lr()?customElements.get(n)?new Xn(new Vs):(customElements.define(n,(o=class extends HTMLElement{constructor(){super();Y(this,s,document.createElement("div"));Y(this,a,null);Y(this,l,null);F(this,a,new kr(t,e,r)),S(this,s).appendChild(document.createElement("div"));const p=S(this,a).start(S(this,s).firstChild);F(this,l,p[0]),i.forEach((f,h)=>{Object.defineProperty(this,h,{get:()=>this[`_${h}`]||this.getAttribute(h),set:g=>{const j=this[h],O=f(g);O.isOk()&&!xs(j,O[0])&&S(this,l).call(this,O[0]),typeof g=="string"?this.setAttribute(h,g):this[`_${h}`]=g}})})}static get observedAttributes(){return i.entries().map(([p,f])=>p)}connectedCallback(){this.appendChild(S(this,s).firstChild)}attributeChangedCallback(p,f,h){f!==h&&(this[p]=h)}disconnectedCallback(){S(this,a).destroy()}},s=new WeakMap,a=new WeakMap,l=new WeakMap,o)),new Er(null)):new Xn(new jr)},Lr=()=>window&&window.document,Fs=n=>!!customElements.get(n);function Ns(n,t){let r=hr(n),i=cs(r,t);return dr(i)}function en(n,t){return Ri(n,t)}class Ar extends fn{constructor(t,e,r){super(),this[0]=t,this[1]=e,this.as_property=r}}let Bs=class extends fn{constructor(t,e){super(),this[0]=t,this[1]=e}};function K(n,t){return new Ar(n,fe(t),!1)}function qe(n,t){return new Ar(n,fe(t),!0)}function Ms(n,t){return new Bs("on"+n,t)}function ye(n){return K("style",ss(n,"",(t,e)=>{let r=e[0],i=e[1];return t+r+":"+i+";"}))}function A(n){return K("class",n)}function Dt(n){return K("id",n)}function _e(n){return K("href",n)}class Ds extends fn{constructor(t){super(),this[0]=t}}class qs extends fn{constructor(t,e,r){super(),this[0]=t,this[1]=e,this[2]=r}}class Ps extends fn{constructor(t,e,r,i){super(),this[0]=t,this[1]=e,this[2]=r,this[3]=i}}function V(n,t,e){return new qs(n,t,e)}function vr(n,t,e,r){return new Ps(t,e,r,n)}function tn(n){return new Ds(n)}class Rs extends fn{}class Hs extends fn{}class Vs extends fn{}class Ws extends fn{}class jr extends fn{}function Us(n,t,e){return Os(s=>[n(s),It()],(s,a)=>[t(s,a),It()],e)}function Qs(n,t){return V("body",n,t)}function Sr(n,t){return V("aside",n,t)}function Gs(n,t){return V("header",n,t)}function Ys(n,t){return V("h1",n,t)}function Et(n,t){return V("h2",n,t)}function Zs(n,t){return V("h3",n,t)}function Ks(n,t){return V("main",n,t)}function Cr(n,t){return V("nav",n,t)}function zn(n,t){return V("div",n,t)}function Ir(n,t){return V("li",n,t)}function Js(n,t){return V("ol",n,t)}function pt(n,t){return V("p",n,t)}function Xs(n,t){return V("pre",n,t)}function Or(n,t){return V("ul",n,t)}function Ee(n,t){return V("a",n,t)}function $r(n,t){return V("code",n,t)}function na(n,t){return V("em",n,t)}function zr(n,t){return V("span",n,t)}function ta(n,t){return V("strong",n,t)}function ea(n,t){return vr("http://www.w3.org/2000/svg","svg",n,t)}function Tr(n,t){return V("button",n,t)}function Fr(n,t){return Ms(n,t)}function Nr(n){return Fr("click",t=>new Yn(n))}function ra(){return"/gleam-lustre/"}class xt{inspect(){let t=r=>{let i=lt(this[r]);return isNaN(parseInt(r))?`${r}: ${i}`:i},e=Object.keys(this).map(t).join(", ");return e?`${this.constructor.name}(${e})`:this.constructor.name}withFields(t){let e=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...e)}}class nt{static fromArray(t,e){let r=e||new Br;return t.reduceRight((i,s)=>new xe(s,i),r)}static isList(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="EmptyList"||e==="NonEmptyList"}[Symbol.iterator](){return new ia(this)}inspect(){return`[${this.toArray().map(lt).join(", ")}]`}toArray(){return[...this]}atLeastLength(t){for(let e of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let e of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let e of this)t++;return t}}function b(n,t){return nt.fromArray(n,t)}var Gn;class ia{constructor(t){Y(this,Gn,void 0);F(this,Gn,t)}next(){if(S(this,Gn).isEmpty())return{done:!0};{let{head:t,tail:e}=S(this,Gn);return F(this,Gn,e),{value:t,done:!1}}}}Gn=new WeakMap;class Br extends nt{get __gleam_prelude_variant__(){return"EmptyList"}isEmpty(){return!0}}class xe extends nt{constructor(t,e){super(),this.head=t,this.tail=e}get __gleam_prelude_variant__(){return"NonEmptyList"}isEmpty(){return!1}}class sa extends xt{static isResult(t){let e=t==null?void 0:t.__gleam_prelude_variant__;return e==="Ok"||e==="Error"}}class qt extends sa{constructor(t){super(),this[0]=t}get __gleam_prelude_variant__(){return"Ok"}isOk(){return!0}}function lt(n){let t=typeof n;if(n===!0)return"True";if(n===!1)return"False";if(n===null)return"//js(null)";if(n===void 0)return"Nil";if(t==="string")return JSON.stringify(n);if(t==="bigint"||t==="number")return n.toString();if(Array.isArray(n))return`#(${n.map(lt).join(", ")})`;if(n instanceof Set)return`//js(Set(${[...n].map(lt).join(", ")}))`;if(n instanceof RegExp)return`//js(${n})`;if(n instanceof Date)return`//js(Date("${n.toISOString()}"))`;if(n instanceof Function){let e=[];for(let r of Array(n.length).keys())e.push(String.fromCharCode(r+97));return`//fn(${e.join(", ")}) { ... }`}try{return n.inspect()}catch{return aa(n)}}function aa(n){var l,o;let[t,e]=la(n),r=((o=(l=Object.getPrototypeOf(n))==null?void 0:l.constructor)==null?void 0:o.name)||"Object",i=[];for(let u of t(n))i.push(`${lt(u)}: ${lt(e(n,u))}`);let s=i.length?" "+i.join(", ")+" ":"";return`//js(${r==="Object"?"":r+" "}{${s}})`}function la(n){if(n instanceof Map)return[t=>t.keys(),(t,e)=>t.get(e)];{let t=n instanceof globalThis.Error?["message"]:[];return[e=>[...t,...Object.keys(e)],(e,r)=>e[r]]}}function Tn(n,t,e,r,i,s){let a=new globalThis.Error(i);a.gleam_error=n,a.module=t,a.line=e,a.fn=r;for(let l in s)a[l]=s[l];return a}let Ot=class extends xt{constructor(t,e){super(),this[0]=t,this[1]=e}};class Mr extends xt{constructor(t){super(),this[0]=t}}function ua(){return[pr(),It()]}function oa(n,t){if(t instanceof Ot){let e=t[0],r=t[1];return[fr(n,e,r),It()]}else if(t instanceof Mr){let e=t[0];return[n,zs("dispatch",e)]}else throw Tn("case_no_match","app/ui/hooks",96,"update_hook","No case clause matched",{values:[t]})}function ca(n){let t=Te(n,"state"),e=Te(n,"view");if(t.isOk()&&e.isOk()){let r=t[0],i=e[0],s=Gt(r);return Gt(i)(s,l=>new Ot("state",l),l=>new Mr(l))}else return tn("???")}function ma(n){let t=Fs(n);if(t)return new qt(void 0);if(t)throw Tn("case_no_match","app/ui/hooks",64,"register_hook","No case clause matched",{values:[t]});return Ts(n,ua,oa,ca,ns(b([["state",Ne(e=>new Ot("state",e),e=>new qt(e))],["view",Ne(e=>new Ot("view",e),e=>new qt(e))]])))}function ga(){return Fr("dispatch",n=>{let t=bs("detail",ms)(n);if(!t.isOk())throw Tn("assignment_no_match","app/ui/hooks",118,"","Assignment pattern did not match",{value:t});let e=t[0];return new Yn(Gt(e))})}function pa(n,t){let e=b([qe("state",n),qe("view",t),ga()]),r=ma("use-state");if(!r.isOk())throw Tn("assignment_no_match","app/ui/hooks",31,"use_state","Assignment pattern did not match",{value:r});return V("use-state",e,b([]))}const fa={};function ha(n,t){const e=t||fa,r=typeof e.includeImageAlt=="boolean"?e.includeImageAlt:!0,i=typeof e.includeHtml=="boolean"?e.includeHtml:!0;return Dr(n,r,i)}function Dr(n,t,e){if(da(n)){if("value"in n)return n.type==="html"&&!e?"":n.value;if(t&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Pe(n.children,t,e)}return Array.isArray(n)?Pe(n,t,e):""}function Pe(n,t,e){const r=[];let i=-1;for(;++i<n.length;)r[i]=Dr(n[i],t,e);return r.join("")}function da(n){return!!(n&&typeof n=="object")}const Re=document.createElement("i");function we(n){const t="&"+n+";";Re.innerHTML=t;const e=Re.textContent;return e.charCodeAt(e.length-1)===59&&n!=="semi"||e===t?!1:e}function An(n,t,e,r){const i=n.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,e=e>0?e:0,r.length<1e4)a=Array.from(r),a.unshift(t,e),n.splice(...a);else for(e&&n.splice(t,e);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),n.splice(...a),s+=1e4,t+=1e4}function cn(n,t){return n.length>0?(An(n,n.length,0,t),n):t}const He={}.hasOwnProperty;function ba(n){const t={};let e=-1;for(;++e<n.length;)ya(t,n[e]);return t}function ya(n,t){let e;for(e in t){const i=(He.call(n,e)?n[e]:void 0)||(n[e]={}),s=t[e];let a;if(s)for(a in s){He.call(i,a)||(i[a]=[]);const l=s[a];_a(i[a],Array.isArray(l)?l:l?[l]:[])}}}function _a(n,t){let e=-1;const r=[];for(;++e<t.length;)(t[e].add==="after"?n:r).push(t[e]);An(n,0,0,r)}function qr(n,t){const e=Number.parseInt(n,t);return e<9||e===11||e>13&&e<32||e>126&&e<160||e>55295&&e<57344||e>64975&&e<65008||(e&65535)===65535||(e&65535)===65534||e>1114111?"�":String.fromCharCode(e)}function tt(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ea=qn(/\p{P}/u),wn=qn(/[A-Za-z]/),xn=qn(/[\dA-Za-z]/),xa=qn(/[#-'*+\--9=?A-Z^-~]/);function Jt(n){return n!==null&&(n<32||n===127)}const Xt=qn(/\d/),wa=qn(/[\dA-Fa-f]/),Pr=qn(/[!-/:-@[-`{-~]/);function L(n){return n!==null&&n<-2}function nn(n){return n!==null&&(n<0||n===32)}function $(n){return n===-2||n===-1||n===32}function ka(n){return Pr(n)||Ea(n)}const La=qn(/\s/);function qn(n){return t;function t(e){return e!==null&&e>-1&&n.test(String.fromCharCode(e))}}function B(n,t,e,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(o){return $(o)?(n.enter(e),l(o)):t(o)}function l(o){return $(o)&&s++<i?(n.consume(o),l):(n.exit(e),t(o))}}const Aa={tokenize:va};function va(n){const t=n.attempt(this.parser.constructs.contentInitial,r,i);let e;return t;function r(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),B(n,t,"linePrefix")}function i(l){return n.enter("paragraph"),s(l)}function s(l){const o=n.enter("chunkText",{contentType:"text",previous:e});return e&&(e.next=o),e=o,a(l)}function a(l){if(l===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(l);return}return L(l)?(n.consume(l),n.exit("chunkText"),s):(n.consume(l),a)}}const ja={tokenize:Sa},Ve={tokenize:Ca};function Sa(n){const t=this,e=[];let r=0,i,s,a;return l;function l(x){if(r<e.length){const D=e[r];return t.containerState=D[1],n.attempt(D[0].continuation,o,u)(x)}return u(x)}function o(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&H();const D=t.events.length;let P=D,y;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){y=t.events[P][1].end;break}E(r);let z=D;for(;z<t.events.length;)t.events[z][1].end=Object.assign({},y),z++;return An(t.events,P+1,0,t.events.slice(D)),t.events.length=z,u(x)}return l(x)}function u(x){if(r===e.length){if(!i)return h(x);if(i.currentConstruct&&i.currentConstruct.concrete)return j(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},n.check(Ve,p,f)(x)}function p(x){return i&&H(),E(r),h(x)}function f(x){return t.parser.lazy[t.now().line]=r!==e.length,a=t.now().offset,j(x)}function h(x){return t.containerState={},n.attempt(Ve,g,j)(x)}function g(x){return r++,e.push([t.currentConstruct,t.containerState]),h(x)}function j(x){if(x===null){i&&H(),E(0),n.consume(x);return}return i=i||t.parser.flow(t.now()),n.enter("chunkFlow",{contentType:"flow",previous:s,_tokenizer:i}),O(x)}function O(x){if(x===null){R(n.exit("chunkFlow"),!0),E(0),n.consume(x);return}return L(x)?(n.consume(x),R(n.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(n.consume(x),O)}function R(x,D){const P=t.sliceStream(x);if(D&&P.push(null),x.previous=s,s&&(s.next=x),s=x,i.defineSkip(x.start),i.write(P),t.parser.lazy[x.start.line]){let y=i.events.length;for(;y--;)if(i.events[y][1].start.offset<a&&(!i.events[y][1].end||i.events[y][1].end.offset>a))return;const z=t.events.length;let W=z,N,M;for(;W--;)if(t.events[W][0]==="exit"&&t.events[W][1].type==="chunkFlow"){if(N){M=t.events[W][1].end;break}N=!0}for(E(r),y=z;y<t.events.length;)t.events[y][1].end=Object.assign({},M),y++;An(t.events,W+1,0,t.events.slice(z)),t.events.length=y}}function E(x){let D=e.length;for(;D-- >x;){const P=e[D];t.containerState=P[1],P[0].exit.call(t,n)}e.length=x}function H(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Ca(n,t,e){return B(n,n.attempt(this.parser.constructs.document,t,e),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function We(n){if(n===null||nn(n)||La(n))return 1;if(ka(n))return 2}function ke(n,t,e){const r=[];let i=-1;for(;++i<n.length;){const s=n[i].resolveAll;s&&!r.includes(s)&&(t=s(t,e),r.push(s))}return t}const ne={name:"attention",tokenize:Oa,resolveAll:Ia};function Ia(n,t){let e=-1,r,i,s,a,l,o,u,p;for(;++e<n.length;)if(n[e][0]==="enter"&&n[e][1].type==="attentionSequence"&&n[e][1]._close){for(r=e;r--;)if(n[r][0]==="exit"&&n[r][1].type==="attentionSequence"&&n[r][1]._open&&t.sliceSerialize(n[r][1]).charCodeAt(0)===t.sliceSerialize(n[e][1]).charCodeAt(0)){if((n[r][1]._close||n[e][1]._open)&&(n[e][1].end.offset-n[e][1].start.offset)%3&&!((n[r][1].end.offset-n[r][1].start.offset+n[e][1].end.offset-n[e][1].start.offset)%3))continue;o=n[r][1].end.offset-n[r][1].start.offset>1&&n[e][1].end.offset-n[e][1].start.offset>1?2:1;const f=Object.assign({},n[r][1].end),h=Object.assign({},n[e][1].start);Ue(f,-o),Ue(h,o),a={type:o>1?"strongSequence":"emphasisSequence",start:f,end:Object.assign({},n[r][1].end)},l={type:o>1?"strongSequence":"emphasisSequence",start:Object.assign({},n[e][1].start),end:h},s={type:o>1?"strongText":"emphasisText",start:Object.assign({},n[r][1].end),end:Object.assign({},n[e][1].start)},i={type:o>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},l.end)},n[r][1].end=Object.assign({},a.start),n[e][1].start=Object.assign({},l.end),u=[],n[r][1].end.offset-n[r][1].start.offset&&(u=cn(u,[["enter",n[r][1],t],["exit",n[r][1],t]])),u=cn(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=cn(u,ke(t.parser.constructs.insideSpan.null,n.slice(r+1,e),t)),u=cn(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),n[e][1].end.offset-n[e][1].start.offset?(p=2,u=cn(u,[["enter",n[e][1],t],["exit",n[e][1],t]])):p=0,An(n,r-1,e-r+3,u),e=r+u.length-p-2;break}}for(e=-1;++e<n.length;)n[e][1].type==="attentionSequence"&&(n[e][1].type="data");return n}function Oa(n,t){const e=this.parser.constructs.attentionMarkers.null,r=this.previous,i=We(r);let s;return a;function a(o){return s=o,n.enter("attentionSequence"),l(o)}function l(o){if(o===s)return n.consume(o),l;const u=n.exit("attentionSequence"),p=We(o),f=!p||p===2&&i||e.includes(o),h=!i||i===2&&p||e.includes(r);return u._open=!!(s===42?f:f&&(i||!h)),u._close=!!(s===42?h:h&&(p||!f)),t(o)}}function Ue(n,t){n.column+=t,n.offset+=t,n._bufferIndex+=t}const $a={name:"autolink",tokenize:za};function za(n,t,e){let r=0;return i;function i(g){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(g){return wn(g)?(n.consume(g),a):u(g)}function a(g){return g===43||g===45||g===46||xn(g)?(r=1,l(g)):u(g)}function l(g){return g===58?(n.consume(g),r=0,o):(g===43||g===45||g===46||xn(g))&&r++<32?(n.consume(g),l):(r=0,u(g))}function o(g){return g===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.exit("autolink"),t):g===null||g===32||g===60||Jt(g)?e(g):(n.consume(g),o)}function u(g){return g===64?(n.consume(g),p):xa(g)?(n.consume(g),u):e(g)}function p(g){return xn(g)?f(g):e(g)}function f(g){return g===46?(n.consume(g),r=0,p):g===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.exit("autolink"),t):h(g)}function h(g){if((g===45||xn(g))&&r++<63){const j=g===45?h:f;return n.consume(g),j}return e(g)}}const Tt={tokenize:Ta,partial:!0};function Ta(n,t,e){return r;function r(s){return $(s)?B(n,i,"linePrefix")(s):i(s)}function i(s){return s===null||L(s)?t(s):e(s)}}const Rr={name:"blockQuote",tokenize:Fa,continuation:{tokenize:Na},exit:Ba};function Fa(n,t,e){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(n.enter("blockQuote",{_container:!0}),l.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(a),n.exit("blockQuoteMarker"),s}return e(a)}function s(a){return $(a)?(n.enter("blockQuotePrefixWhitespace"),n.consume(a),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),t):(n.exit("blockQuotePrefix"),t(a))}}function Na(n,t,e){const r=this;return i;function i(a){return $(a)?B(n,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return n.attempt(Rr,t,e)(a)}}function Ba(n){n.exit("blockQuote")}const Hr={name:"characterEscape",tokenize:Ma};function Ma(n,t,e){return r;function r(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),i}function i(s){return Pr(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),t):e(s)}}const Vr={name:"characterReference",tokenize:Da};function Da(n,t,e){const r=this;let i=0,s,a;return l;function l(f){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(f),n.exit("characterReferenceMarker"),o}function o(f){return f===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(f),n.exit("characterReferenceMarkerNumeric"),u):(n.enter("characterReferenceValue"),s=31,a=xn,p(f))}function u(f){return f===88||f===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(f),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,a=wa,p):(n.enter("characterReferenceValue"),s=7,a=Xt,p(f))}function p(f){if(f===59&&i){const h=n.exit("characterReferenceValue");return a===xn&&!we(r.sliceSerialize(h))?e(f):(n.enter("characterReferenceMarker"),n.consume(f),n.exit("characterReferenceMarker"),n.exit("characterReference"),t)}return a(f)&&i++<s?(n.consume(f),p):e(f)}}const Qe={tokenize:Pa,partial:!0},Ge={name:"codeFenced",tokenize:qa,concrete:!0};function qa(n,t,e){const r=this,i={tokenize:P,partial:!0};let s=0,a=0,l;return o;function o(y){return u(y)}function u(y){const z=r.events[r.events.length-1];return s=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,l=y,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),p(y)}function p(y){return y===l?(a++,n.consume(y),p):a<3?e(y):(n.exit("codeFencedFenceSequence"),$(y)?B(n,f,"whitespace")(y):f(y))}function f(y){return y===null||L(y)?(n.exit("codeFencedFence"),r.interrupt?t(y):n.check(Qe,O,D)(y)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===null||L(y)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),f(y)):$(y)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),B(n,g,"whitespace")(y)):y===96&&y===l?e(y):(n.consume(y),h)}function g(y){return y===null||L(y)?f(y):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),j(y))}function j(y){return y===null||L(y)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),f(y)):y===96&&y===l?e(y):(n.consume(y),j)}function O(y){return n.attempt(i,D,R)(y)}function R(y){return n.enter("lineEnding"),n.consume(y),n.exit("lineEnding"),E}function E(y){return s>0&&$(y)?B(n,H,"linePrefix",s+1)(y):H(y)}function H(y){return y===null||L(y)?n.check(Qe,O,D)(y):(n.enter("codeFlowValue"),x(y))}function x(y){return y===null||L(y)?(n.exit("codeFlowValue"),H(y)):(n.consume(y),x)}function D(y){return n.exit("codeFenced"),t(y)}function P(y,z,W){let N=0;return M;function M(I){return y.enter("lineEnding"),y.consume(I),y.exit("lineEnding"),k}function k(I){return y.enter("codeFencedFence"),$(I)?B(y,w,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):w(I)}function w(I){return I===l?(y.enter("codeFencedFenceSequence"),q(I)):W(I)}function q(I){return I===l?(N++,y.consume(I),q):N>=a?(y.exit("codeFencedFenceSequence"),$(I)?B(y,U,"whitespace")(I):U(I)):W(I)}function U(I){return I===null||L(I)?(y.exit("codeFencedFence"),z(I)):W(I)}}}function Pa(n,t,e){const r=this;return i;function i(a){return a===null?e(a):(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?e(a):t(a)}}const Pt={name:"codeIndented",tokenize:Ha},Ra={tokenize:Va,partial:!0};function Ha(n,t,e){const r=this;return i;function i(u){return n.enter("codeIndented"),B(n,s,"linePrefix",4+1)(u)}function s(u){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?a(u):e(u)}function a(u){return u===null?o(u):L(u)?n.attempt(Ra,a,o)(u):(n.enter("codeFlowValue"),l(u))}function l(u){return u===null||L(u)?(n.exit("codeFlowValue"),a(u)):(n.consume(u),l)}function o(u){return n.exit("codeIndented"),t(u)}}function Va(n,t,e){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?e(a):L(a)?(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),i):B(n,s,"linePrefix",4+1)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):L(a)?i(a):e(a)}}const Wa={name:"codeText",tokenize:Ga,resolve:Ua,previous:Qa};function Ua(n){let t=n.length-4,e=3,r,i;if((n[e][1].type==="lineEnding"||n[e][1].type==="space")&&(n[t][1].type==="lineEnding"||n[t][1].type==="space")){for(r=e;++r<t;)if(n[r][1].type==="codeTextData"){n[e][1].type="codeTextPadding",n[t][1].type="codeTextPadding",e+=2,t-=2;break}}for(r=e-1,t++;++r<=t;)i===void 0?r!==t&&n[r][1].type!=="lineEnding"&&(i=r):(r===t||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return n}function Qa(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ga(n,t,e){let r=0,i,s;return a;function a(f){return n.enter("codeText"),n.enter("codeTextSequence"),l(f)}function l(f){return f===96?(n.consume(f),r++,l):(n.exit("codeTextSequence"),o(f))}function o(f){return f===null?e(f):f===32?(n.enter("space"),n.consume(f),n.exit("space"),o):f===96?(s=n.enter("codeTextSequence"),i=0,p(f)):L(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),o):(n.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||L(f)?(n.exit("codeTextData"),o(f)):(n.consume(f),u)}function p(f){return f===96?(n.consume(f),i++,p):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}function Wr(n){const t={};let e=-1,r,i,s,a,l,o,u;for(;++e<n.length;){for(;e in t;)e=t[e];if(r=n[e],e&&r[1].type==="chunkFlow"&&n[e-1][1].type==="listItemPrefix"&&(o=r[1]._tokenizer.events,s=0,s<o.length&&o[s][1].type==="lineEndingBlank"&&(s+=2),s<o.length&&o[s][1].type==="content"))for(;++s<o.length&&o[s][1].type!=="content";)o[s][1].type==="chunkText"&&(o[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Ya(n,e)),e=t[e],u=!0);else if(r[1]._container){for(s=e,i=void 0;s--&&(a=n[s],a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(i&&(n[i][1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);i&&(r[1].end=Object.assign({},n[i][1].start),l=n.slice(i,e),l.unshift(r),An(n,i,e-i+1,l))}}return!u}function Ya(n,t){const e=n[t][1],r=n[t][2];let i=t-1;const s=[],a=e._tokenizer||r.parser[e.contentType](e.start),l=a.events,o=[],u={};let p,f,h=-1,g=e,j=0,O=0;const R=[O];for(;g;){for(;n[++i][1]!==g;);s.push(i),g._tokenizer||(p=r.sliceStream(g),g.next||p.push(null),f&&a.defineSkip(g.start),g._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(p),g._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=g,g=g.next}for(g=e;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(O=h+1,R.push(O),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(a.events=[],g?(g._tokenizer=void 0,g.previous=void 0):R.pop(),h=R.length;h--;){const E=l.slice(R[h],R[h+1]),H=s.pop();o.unshift([H,H+E.length-1]),An(n,H,2,E)}for(h=-1;++h<o.length;)u[j+o[h][0]]=j+o[h][1],j+=o[h][1]-o[h][0]-1;return u}const Za={tokenize:Xa,resolve:Ja},Ka={tokenize:nl,partial:!0};function Ja(n){return Wr(n),n}function Xa(n,t){let e;return r;function r(l){return n.enter("content"),e=n.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):L(l)?n.check(Ka,a,s)(l):(n.consume(l),i)}function s(l){return n.exit("chunkContent"),n.exit("content"),t(l)}function a(l){return n.consume(l),n.exit("chunkContent"),e.next=n.enter("chunkContent",{contentType:"content",previous:e}),e=e.next,i}}function nl(n,t,e){const r=this;return i;function i(a){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),B(n,s,"linePrefix")}function s(a){if(a===null||L(a))return e(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):n.interrupt(r.parser.constructs.flow,e,t)(a)}}function Ur(n,t,e,r,i,s,a,l,o){const u=o||Number.POSITIVE_INFINITY;let p=0;return f;function f(E){return E===60?(n.enter(r),n.enter(i),n.enter(s),n.consume(E),n.exit(s),h):E===null||E===32||E===41||Jt(E)?e(E):(n.enter(r),n.enter(a),n.enter(l),n.enter("chunkString",{contentType:"string"}),O(E))}function h(E){return E===62?(n.enter(s),n.consume(E),n.exit(s),n.exit(i),n.exit(r),t):(n.enter(l),n.enter("chunkString",{contentType:"string"}),g(E))}function g(E){return E===62?(n.exit("chunkString"),n.exit(l),h(E)):E===null||E===60||L(E)?e(E):(n.consume(E),E===92?j:g)}function j(E){return E===60||E===62||E===92?(n.consume(E),g):g(E)}function O(E){return!p&&(E===null||E===41||nn(E))?(n.exit("chunkString"),n.exit(l),n.exit(a),n.exit(r),t(E)):p<u&&E===40?(n.consume(E),p++,O):E===41?(n.consume(E),p--,O):E===null||E===32||E===40||Jt(E)?e(E):(n.consume(E),E===92?R:O)}function R(E){return E===40||E===41||E===92?(n.consume(E),O):O(E)}}function Qr(n,t,e,r,i,s){const a=this;let l=0,o;return u;function u(g){return n.enter(r),n.enter(i),n.consume(g),n.exit(i),n.enter(s),p}function p(g){return l>999||g===null||g===91||g===93&&!o||g===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?e(g):g===93?(n.exit(s),n.enter(i),n.consume(g),n.exit(i),n.exit(r),t):L(g)?(n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),p):(n.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===null||g===91||g===93||L(g)||l++>999?(n.exit("chunkString"),p(g)):(n.consume(g),o||(o=!$(g)),g===92?h:f)}function h(g){return g===91||g===92||g===93?(n.consume(g),l++,f):f(g)}}function Gr(n,t,e,r,i,s){let a;return l;function l(h){return h===34||h===39||h===40?(n.enter(r),n.enter(i),n.consume(h),n.exit(i),a=h===40?41:h,o):e(h)}function o(h){return h===a?(n.enter(i),n.consume(h),n.exit(i),n.exit(r),t):(n.enter(s),u(h))}function u(h){return h===a?(n.exit(s),o(a)):h===null?e(h):L(h)?(n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),B(n,u,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===a||h===null||L(h)?(n.exit("chunkString"),u(h)):(n.consume(h),h===92?f:p)}function f(h){return h===a||h===92?(n.consume(h),p):p(h)}}function ft(n,t){let e;return r;function r(i){return L(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),e=!0,r):$(i)?B(n,r,e?"linePrefix":"lineSuffix")(i):t(i)}}const tl={name:"definition",tokenize:rl},el={tokenize:il,partial:!0};function rl(n,t,e){const r=this;let i;return s;function s(g){return n.enter("definition"),a(g)}function a(g){return Qr.call(r,n,l,e,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function l(g){return i=tt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(n.enter("definitionMarker"),n.consume(g),n.exit("definitionMarker"),o):e(g)}function o(g){return nn(g)?ft(n,u)(g):u(g)}function u(g){return Ur(n,p,e,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function p(g){return n.attempt(el,f,f)(g)}function f(g){return $(g)?B(n,h,"whitespace")(g):h(g)}function h(g){return g===null||L(g)?(n.exit("definition"),r.parser.defined.push(i),t(g)):e(g)}}function il(n,t,e){return r;function r(l){return nn(l)?ft(n,i)(l):e(l)}function i(l){return Gr(n,s,e,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return $(l)?B(n,a,"whitespace")(l):a(l)}function a(l){return l===null||L(l)?t(l):e(l)}}const sl={name:"hardBreakEscape",tokenize:al};function al(n,t,e){return r;function r(s){return n.enter("hardBreakEscape"),n.consume(s),i}function i(s){return L(s)?(n.exit("hardBreakEscape"),t(s)):e(s)}}const ll={name:"headingAtx",tokenize:ol,resolve:ul};function ul(n,t){let e=n.length-2,r=3,i,s;return n[r][1].type==="whitespace"&&(r+=2),e-2>r&&n[e][1].type==="whitespace"&&(e-=2),n[e][1].type==="atxHeadingSequence"&&(r===e-1||e-4>r&&n[e-2][1].type==="whitespace")&&(e-=r+1===e?2:4),e>r&&(i={type:"atxHeadingText",start:n[r][1].start,end:n[e][1].end},s={type:"chunkText",start:n[r][1].start,end:n[e][1].end,contentType:"text"},An(n,r,e-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),n}function ol(n,t,e){let r=0;return i;function i(p){return n.enter("atxHeading"),s(p)}function s(p){return n.enter("atxHeadingSequence"),a(p)}function a(p){return p===35&&r++<6?(n.consume(p),a):p===null||nn(p)?(n.exit("atxHeadingSequence"),l(p)):e(p)}function l(p){return p===35?(n.enter("atxHeadingSequence"),o(p)):p===null||L(p)?(n.exit("atxHeading"),t(p)):$(p)?B(n,l,"whitespace")(p):(n.enter("atxHeadingText"),u(p))}function o(p){return p===35?(n.consume(p),o):(n.exit("atxHeadingSequence"),l(p))}function u(p){return p===null||p===35||nn(p)?(n.exit("atxHeadingText"),l(p)):(n.consume(p),u)}}const cl=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ye=["pre","script","style","textarea"],ml={name:"htmlFlow",tokenize:hl,resolveTo:fl,concrete:!0},gl={tokenize:bl,partial:!0},pl={tokenize:dl,partial:!0};function fl(n){let t=n.length;for(;t--&&!(n[t][0]==="enter"&&n[t][1].type==="htmlFlow"););return t>1&&n[t-2][1].type==="linePrefix"&&(n[t][1].start=n[t-2][1].start,n[t+1][1].start=n[t-2][1].start,n.splice(t-2,2)),n}function hl(n,t,e){const r=this;let i,s,a,l,o;return u;function u(m){return p(m)}function p(m){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(m),f}function f(m){return m===33?(n.consume(m),h):m===47?(n.consume(m),s=!0,O):m===63?(n.consume(m),i=3,r.interrupt?t:c):wn(m)?(n.consume(m),a=String.fromCharCode(m),R):e(m)}function h(m){return m===45?(n.consume(m),i=2,g):m===91?(n.consume(m),i=5,l=0,j):wn(m)?(n.consume(m),i=4,r.interrupt?t:c):e(m)}function g(m){return m===45?(n.consume(m),r.interrupt?t:c):e(m)}function j(m){const bn="CDATA[";return m===bn.charCodeAt(l++)?(n.consume(m),l===bn.length?r.interrupt?t:w:j):e(m)}function O(m){return wn(m)?(n.consume(m),a=String.fromCharCode(m),R):e(m)}function R(m){if(m===null||m===47||m===62||nn(m)){const bn=m===47,Pn=a.toLowerCase();return!bn&&!s&&Ye.includes(Pn)?(i=1,r.interrupt?t(m):w(m)):cl.includes(a.toLowerCase())?(i=6,bn?(n.consume(m),E):r.interrupt?t(m):w(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?e(m):s?H(m):x(m))}return m===45||xn(m)?(n.consume(m),a+=String.fromCharCode(m),R):e(m)}function E(m){return m===62?(n.consume(m),r.interrupt?t:w):e(m)}function H(m){return $(m)?(n.consume(m),H):M(m)}function x(m){return m===47?(n.consume(m),M):m===58||m===95||wn(m)?(n.consume(m),D):$(m)?(n.consume(m),x):M(m)}function D(m){return m===45||m===46||m===58||m===95||xn(m)?(n.consume(m),D):P(m)}function P(m){return m===61?(n.consume(m),y):$(m)?(n.consume(m),P):x(m)}function y(m){return m===null||m===60||m===61||m===62||m===96?e(m):m===34||m===39?(n.consume(m),o=m,z):$(m)?(n.consume(m),y):W(m)}function z(m){return m===o?(n.consume(m),o=null,N):m===null||L(m)?e(m):(n.consume(m),z)}function W(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||nn(m)?P(m):(n.consume(m),W)}function N(m){return m===47||m===62||$(m)?x(m):e(m)}function M(m){return m===62?(n.consume(m),k):e(m)}function k(m){return m===null||L(m)?w(m):$(m)?(n.consume(m),k):e(m)}function w(m){return m===45&&i===2?(n.consume(m),Z):m===60&&i===1?(n.consume(m),Q):m===62&&i===4?(n.consume(m),dn):m===63&&i===3?(n.consume(m),c):m===93&&i===5?(n.consume(m),vn):L(m)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(gl,jn,q)(m)):m===null||L(m)?(n.exit("htmlFlowData"),q(m)):(n.consume(m),w)}function q(m){return n.check(pl,U,jn)(m)}function U(m){return n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),I}function I(m){return m===null||L(m)?q(m):(n.enter("htmlFlowData"),w(m))}function Z(m){return m===45?(n.consume(m),c):w(m)}function Q(m){return m===47?(n.consume(m),a="",hn):w(m)}function hn(m){if(m===62){const bn=a.toLowerCase();return Ye.includes(bn)?(n.consume(m),dn):w(m)}return wn(m)&&a.length<8?(n.consume(m),a+=String.fromCharCode(m),hn):w(m)}function vn(m){return m===93?(n.consume(m),c):w(m)}function c(m){return m===62?(n.consume(m),dn):m===45&&i===2?(n.consume(m),c):w(m)}function dn(m){return m===null||L(m)?(n.exit("htmlFlowData"),jn(m)):(n.consume(m),dn)}function jn(m){return n.exit("htmlFlow"),t(m)}}function dl(n,t,e){const r=this;return i;function i(a){return L(a)?(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),s):e(a)}function s(a){return r.parser.lazy[r.now().line]?e(a):t(a)}}function bl(n,t,e){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(Tt,t,e)}}const yl={name:"htmlText",tokenize:_l};function _l(n,t,e){const r=this;let i,s,a;return l;function l(c){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(c),o}function o(c){return c===33?(n.consume(c),u):c===47?(n.consume(c),P):c===63?(n.consume(c),x):wn(c)?(n.consume(c),W):e(c)}function u(c){return c===45?(n.consume(c),p):c===91?(n.consume(c),s=0,j):wn(c)?(n.consume(c),H):e(c)}function p(c){return c===45?(n.consume(c),g):e(c)}function f(c){return c===null?e(c):c===45?(n.consume(c),h):L(c)?(a=f,Q(c)):(n.consume(c),f)}function h(c){return c===45?(n.consume(c),g):f(c)}function g(c){return c===62?Z(c):c===45?h(c):f(c)}function j(c){const dn="CDATA[";return c===dn.charCodeAt(s++)?(n.consume(c),s===dn.length?O:j):e(c)}function O(c){return c===null?e(c):c===93?(n.consume(c),R):L(c)?(a=O,Q(c)):(n.consume(c),O)}function R(c){return c===93?(n.consume(c),E):O(c)}function E(c){return c===62?Z(c):c===93?(n.consume(c),E):O(c)}function H(c){return c===null||c===62?Z(c):L(c)?(a=H,Q(c)):(n.consume(c),H)}function x(c){return c===null?e(c):c===63?(n.consume(c),D):L(c)?(a=x,Q(c)):(n.consume(c),x)}function D(c){return c===62?Z(c):x(c)}function P(c){return wn(c)?(n.consume(c),y):e(c)}function y(c){return c===45||xn(c)?(n.consume(c),y):z(c)}function z(c){return L(c)?(a=z,Q(c)):$(c)?(n.consume(c),z):Z(c)}function W(c){return c===45||xn(c)?(n.consume(c),W):c===47||c===62||nn(c)?N(c):e(c)}function N(c){return c===47?(n.consume(c),Z):c===58||c===95||wn(c)?(n.consume(c),M):L(c)?(a=N,Q(c)):$(c)?(n.consume(c),N):Z(c)}function M(c){return c===45||c===46||c===58||c===95||xn(c)?(n.consume(c),M):k(c)}function k(c){return c===61?(n.consume(c),w):L(c)?(a=k,Q(c)):$(c)?(n.consume(c),k):N(c)}function w(c){return c===null||c===60||c===61||c===62||c===96?e(c):c===34||c===39?(n.consume(c),i=c,q):L(c)?(a=w,Q(c)):$(c)?(n.consume(c),w):(n.consume(c),U)}function q(c){return c===i?(n.consume(c),i=void 0,I):c===null?e(c):L(c)?(a=q,Q(c)):(n.consume(c),q)}function U(c){return c===null||c===34||c===39||c===60||c===61||c===96?e(c):c===47||c===62||nn(c)?N(c):(n.consume(c),U)}function I(c){return c===47||c===62||nn(c)?N(c):e(c)}function Z(c){return c===62?(n.consume(c),n.exit("htmlTextData"),n.exit("htmlText"),t):e(c)}function Q(c){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(c),n.exit("lineEnding"),hn}function hn(c){return $(c)?B(n,vn,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):vn(c)}function vn(c){return n.enter("htmlTextData"),a(c)}}const Le={name:"labelEnd",tokenize:Al,resolveTo:Ll,resolveAll:kl},El={tokenize:vl},xl={tokenize:jl},wl={tokenize:Sl};function kl(n){let t=-1;for(;++t<n.length;){const e=n[t][1];(e.type==="labelImage"||e.type==="labelLink"||e.type==="labelEnd")&&(n.splice(t+1,e.type==="labelImage"?4:2),e.type="data",t++)}return n}function Ll(n,t){let e=n.length,r=0,i,s,a,l;for(;e--;)if(i=n[e][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;n[e][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(n[e][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=e,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=e);const o={type:n[s][1].type==="labelLink"?"link":"image",start:Object.assign({},n[s][1].start),end:Object.assign({},n[n.length-1][1].end)},u={type:"label",start:Object.assign({},n[s][1].start),end:Object.assign({},n[a][1].end)},p={type:"labelText",start:Object.assign({},n[s+r+2][1].end),end:Object.assign({},n[a-2][1].start)};return l=[["enter",o,t],["enter",u,t]],l=cn(l,n.slice(s+1,s+r+3)),l=cn(l,[["enter",p,t]]),l=cn(l,ke(t.parser.constructs.insideSpan.null,n.slice(s+r+4,a-3),t)),l=cn(l,[["exit",p,t],n[a-2],n[a-1],["exit",u,t]]),l=cn(l,n.slice(a+1)),l=cn(l,[["exit",o,t]]),An(n,s,n.length,l),n}function Al(n,t,e){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(h){return s?s._inactive?f(h):(a=r.parser.defined.includes(tt(r.sliceSerialize({start:s.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(h),n.exit("labelMarker"),n.exit("labelEnd"),o):e(h)}function o(h){return h===40?n.attempt(El,p,a?p:f)(h):h===91?n.attempt(xl,p,a?u:f)(h):a?p(h):f(h)}function u(h){return n.attempt(wl,p,f)(h)}function p(h){return t(h)}function f(h){return s._balanced=!0,e(h)}}function vl(n,t,e){return r;function r(f){return n.enter("resource"),n.enter("resourceMarker"),n.consume(f),n.exit("resourceMarker"),i}function i(f){return nn(f)?ft(n,s)(f):s(f)}function s(f){return f===41?p(f):Ur(n,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return nn(f)?ft(n,o)(f):p(f)}function l(f){return e(f)}function o(f){return f===34||f===39||f===40?Gr(n,u,e,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):p(f)}function u(f){return nn(f)?ft(n,p)(f):p(f)}function p(f){return f===41?(n.enter("resourceMarker"),n.consume(f),n.exit("resourceMarker"),n.exit("resource"),t):e(f)}}function jl(n,t,e){const r=this;return i;function i(l){return Qr.call(r,n,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(tt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):e(l)}function a(l){return e(l)}}function Sl(n,t,e){return r;function r(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),i}function i(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),t):e(s)}}const Cl={name:"labelStartImage",tokenize:Il,resolveAll:Le.resolveAll};function Il(n,t,e){const r=this;return i;function i(l){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(l),n.exit("labelImageMarker"),s}function s(l){return l===91?(n.enter("labelMarker"),n.consume(l),n.exit("labelMarker"),n.exit("labelImage"),a):e(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?e(l):t(l)}}const Ol={name:"labelStartLink",tokenize:$l,resolveAll:Le.resolveAll};function $l(n,t,e){const r=this;return i;function i(a){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?e(a):t(a)}}const Rt={name:"lineEnding",tokenize:zl};function zl(n,t){return e;function e(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),B(n,t,"linePrefix")}}const At={name:"thematicBreak",tokenize:Tl};function Tl(n,t,e){let r=0,i;return s;function s(u){return n.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(n.enter("thematicBreakSequence"),o(u)):r>=3&&(u===null||L(u))?(n.exit("thematicBreak"),t(u)):e(u)}function o(u){return u===i?(n.consume(u),r++,o):(n.exit("thematicBreakSequence"),$(u)?B(n,l,"whitespace")(u):l(u))}}const X={name:"list",tokenize:Bl,continuation:{tokenize:Ml},exit:ql},Fl={tokenize:Pl,partial:!0},Nl={tokenize:Dl,partial:!0};function Bl(n,t,e){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(g){const j=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(j==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:Xt(g)){if(r.containerState.type||(r.containerState.type=j,n.enter(j,{_container:!0})),j==="listUnordered")return n.enter("listItemPrefix"),g===42||g===45?n.check(At,e,u)(g):u(g);if(!r.interrupt||g===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),o(g)}return e(g)}function o(g){return Xt(g)&&++a<10?(n.consume(g),o):(!r.interrupt||a<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(n.exit("listItemValue"),u(g)):e(g)}function u(g){return n.enter("listItemMarker"),n.consume(g),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,n.check(Tt,r.interrupt?e:p,n.attempt(Fl,h,f))}function p(g){return r.containerState.initialBlankLine=!0,s++,h(g)}function f(g){return $(g)?(n.enter("listItemPrefixWhitespace"),n.consume(g),n.exit("listItemPrefixWhitespace"),h):e(g)}function h(g){return r.containerState.size=s+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,t(g)}}function Ml(n,t,e){const r=this;return r.containerState._closeFlow=void 0,n.check(Tt,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,B(n,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!$(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(Nl,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,B(n,n.attempt(X,t,e),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Dl(n,t,e){const r=this;return B(n,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):e(s)}}function ql(n){n.exit(this.containerState.type)}function Pl(n,t,e){const r=this;return B(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(s){const a=r.events[r.events.length-1];return!$(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):e(s)}}const Ze={name:"setextUnderline",tokenize:Hl,resolveTo:Rl};function Rl(n,t){let e=n.length,r,i,s;for(;e--;)if(n[e][0]==="enter"){if(n[e][1].type==="content"){r=e;break}n[e][1].type==="paragraph"&&(i=e)}else n[e][1].type==="content"&&n.splice(e,1),!s&&n[e][1].type==="definition"&&(s=e);const a={type:"setextHeading",start:Object.assign({},n[i][1].start),end:Object.assign({},n[n.length-1][1].end)};return n[i][1].type="setextHeadingText",s?(n.splice(i,0,["enter",a,t]),n.splice(s+1,0,["exit",n[r][1],t]),n[r][1].end=Object.assign({},n[s][1].end)):n[r][1]=a,n.push(["exit",a,t]),n}function Hl(n,t,e){const r=this;let i;return s;function s(u){let p=r.events.length,f;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){f=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(n.enter("setextHeadingLine"),i=u,a(u)):e(u)}function a(u){return n.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(n.consume(u),l):(n.exit("setextHeadingLineSequence"),$(u)?B(n,o,"lineSuffix")(u):o(u))}function o(u){return u===null||L(u)?(n.exit("setextHeadingLine"),t(u)):e(u)}}const Vl={tokenize:Wl};function Wl(n){const t=this,e=n.attempt(Tt,r,n.attempt(this.parser.constructs.flowInitial,i,B(n,n.attempt(this.parser.constructs.flow,i,n.attempt(Za,i)),"linePrefix")));return e;function r(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),t.currentConstruct=void 0,e}function i(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),t.currentConstruct=void 0,e}}const Ul={resolveAll:Zr()},Ql=Yr("string"),Gl=Yr("text");function Yr(n){return{tokenize:t,resolveAll:Zr(n==="text"?Yl:void 0)};function t(e){const r=this,i=this.parser.constructs[n],s=e.attempt(i,a,l);return a;function a(p){return u(p)?s(p):l(p)}function l(p){if(p===null){e.consume(p);return}return e.enter("data"),e.consume(p),o}function o(p){return u(p)?(e.exit("data"),s(p)):(e.consume(p),o)}function u(p){if(p===null)return!0;const f=i[p];let h=-1;if(f)for(;++h<f.length;){const g=f[h];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function Zr(n){return t;function t(e,r){let i=-1,s;for(;++i<=e.length;)s===void 0?e[i]&&e[i][1].type==="data"&&(s=i,i++):(!e[i]||e[i][1].type!=="data")&&(i!==s+2&&(e[s][1].end=e[i-1][1].end,e.splice(s+2,i-s-2),i=s+2),s=void 0);return n?n(e,r):e}}function Yl(n,t){let e=0;for(;++e<=n.length;)if((e===n.length||n[e][1].type==="lineEnding")&&n[e-1][1].type==="data"){const r=n[e-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,o;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)o=!0,l++;else if(u!==-1){s++;break}}if(l){const u={type:e===n.length||o||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+s,_bufferIndex:s?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(n.splice(e,0,["enter",u,t],["exit",u,t]),e+=2)}e++}return n}function Zl(n,t,e){let r=Object.assign(e?Object.assign({},e):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},s=[];let a=[],l=[];const o={consume:H,enter:x,exit:D,attempt:z(P),check:z(y),interrupt:z(y,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:n,sliceStream:g,sliceSerialize:h,now:j,defineSkip:O,write:f};let p=t.tokenize.call(u,o);return t.resolveAll&&s.push(t),u;function f(k){return a=cn(a,k),R(),a[a.length-1]!==null?[]:(W(t,0),u.events=ke(s,u.events,u),u.events)}function h(k,w){return Jl(g(k),w)}function g(k){return Kl(a,k)}function j(){const{line:k,column:w,offset:q,_index:U,_bufferIndex:I}=r;return{line:k,column:w,offset:q,_index:U,_bufferIndex:I}}function O(k){i[k.line]=k.column,M()}function R(){let k;for(;r._index<a.length;){const w=a[r._index];if(typeof w=="string")for(k=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===k&&r._bufferIndex<w.length;)E(w.charCodeAt(r._bufferIndex));else E(w)}}function E(k){p=p(k)}function H(k){L(k)?(r.line++,r.column=1,r.offset+=k===-3?2:1,M()):k!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=k}function x(k,w){const q=w||{};return q.type=k,q.start=j(),u.events.push(["enter",q,u]),l.push(q),q}function D(k){const w=l.pop();return w.end=j(),u.events.push(["exit",w,u]),w}function P(k,w){W(k,w.from)}function y(k,w){w.restore()}function z(k,w){return q;function q(U,I,Z){let Q,hn,vn,c;return Array.isArray(U)?jn(U):"tokenize"in U?jn([U]):dn(U);function dn(G){return ut;function ut(Fn){const Kn=Fn!==null&&G[Fn],Rn=Fn!==null&&G.null,Ft=[...Array.isArray(Kn)?Kn:Kn?[Kn]:[],...Array.isArray(Rn)?Rn:Rn?[Rn]:[]];return jn(Ft)(Fn)}}function jn(G){return Q=G,hn=0,G.length===0?Z:m(G[hn])}function m(G){return ut;function ut(Fn){return c=N(),vn=G,G.partial||(u.currentConstruct=G),G.name&&u.parser.constructs.disable.null.includes(G.name)?Pn():G.tokenize.call(w?Object.assign(Object.create(u),w):u,o,bn,Pn)(Fn)}}function bn(G){return k(vn,c),I}function Pn(G){return c.restore(),++hn<Q.length?m(Q[hn]):Z}}}function W(k,w){k.resolveAll&&!s.includes(k)&&s.push(k),k.resolve&&An(u.events,w,u.events.length-w,k.resolve(u.events.slice(w),u)),k.resolveTo&&(u.events=k.resolveTo(u.events,u))}function N(){const k=j(),w=u.previous,q=u.currentConstruct,U=u.events.length,I=Array.from(l);return{restore:Z,from:U};function Z(){r=k,u.previous=w,u.currentConstruct=q,u.events.length=U,l=I,M()}}function M(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Kl(n,t){const e=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(e===i)a=[n[e].slice(r,s)];else{if(a=n.slice(e,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(n[i].slice(0,s))}return a}function Jl(n,t){let e=-1;const r=[];let i;for(;++e<n.length;){const s=n[e];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}const Xl={42:X,43:X,45:X,48:X,49:X,50:X,51:X,52:X,53:X,54:X,55:X,56:X,57:X,62:Rr},nu={91:tl},tu={[-2]:Pt,[-1]:Pt,32:Pt},eu={35:ll,42:At,45:[Ze,At],60:ml,61:Ze,95:At,96:Ge,126:Ge},ru={38:Vr,92:Hr},iu={[-5]:Rt,[-4]:Rt,[-3]:Rt,33:Cl,38:Vr,42:ne,60:[$a,yl],91:Ol,92:[sl,Hr],93:Le,95:ne,96:Wa},su={null:[ne,Ul]},au={null:[42,95]},lu={null:[]},uu=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:au,contentInitial:nu,disable:lu,document:Xl,flow:eu,flowInitial:tu,insideSpan:su,string:ru,text:iu},Symbol.toStringTag,{value:"Module"}));function ou(n){const e=ba([uu,...(n||{}).extensions||[]]),r={defined:[],lazy:{},constructs:e,content:i(Aa),document:i(ja),flow:i(Vl),string:i(Ql),text:i(Gl)};return r;function i(s){return a;function a(l){return Zl(r,s,l)}}}function cu(n){for(;!Wr(n););return n}const Ke=/[\0\t\n\r]/g;function mu(){let n=1,t="",e=!0,r;return i;function i(s,a,l){const o=[];let u,p,f,h,g;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),f=0,t="",e&&(s.charCodeAt(0)===65279&&f++,e=void 0);f<s.length;){if(Ke.lastIndex=f,u=Ke.exec(s),h=u&&u.index!==void 0?u.index:s.length,g=s.charCodeAt(h),!u){t=s.slice(f);break}if(g===10&&f===h&&r)o.push(-3),r=void 0;else switch(r&&(o.push(-5),r=void 0),f<h&&(o.push(s.slice(f,h)),n+=h-f),g){case 0:{o.push(65533),n++;break}case 9:{for(p=Math.ceil(n/4)*4,o.push(-2);n++<p;)o.push(-1);break}case 10:{o.push(-4),n=1;break}default:r=!0,n=1}f=h+1}return l&&(r&&o.push(-5),t&&o.push(t),o.push(null)),o}}const gu=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function pu(n){return n.replace(gu,fu)}function fu(n,t,e){if(t)return t;if(e.charCodeAt(0)===35){const i=e.charCodeAt(1),s=i===120||i===88;return qr(e.slice(s?2:1),s?16:10)}return we(e)||n}function vt(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Je(n.position):"start"in n||"end"in n?Je(n):"line"in n||"column"in n?te(n):""}function te(n){return Xe(n&&n.line)+":"+Xe(n&&n.column)}function Je(n){return te(n&&n.start)+"-"+te(n&&n.end)}function Xe(n){return n&&typeof n=="number"?n:1}const Kr={}.hasOwnProperty;function hu(n,t,e){return typeof t!="string"&&(e=t,t=void 0),du(e)(cu(ou(e).document().write(mu()(n,t,!0))))}function du(n){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Se),autolinkProtocol:N,autolinkEmail:N,atxHeading:s(Ae),blockQuote:s(Kn),characterEscape:N,characterReference:N,codeFenced:s(Rn),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(Rn,a),codeText:s(Ft,a),codeTextData:N,data:N,codeFlowValue:N,definition:s(ei),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(ri),hardBreakEscape:s(ve),hardBreakTrailing:s(ve),htmlFlow:s(je,a),htmlFlowData:N,htmlText:s(je,a),htmlTextData:N,image:s(ii),label:a,link:s(Se),listItem:s(si),listItemValue:h,listOrdered:s(Ce,f),listUnordered:s(Ce),paragraph:s(ai),reference:m,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(Ae),strong:s(li),thematicBreak:s(oi)},exit:{atxHeading:o(),atxHeadingSequence:P,autolink:o(),autolinkEmail:Fn,autolinkProtocol:ut,blockQuote:o(),characterEscapeValue:M,characterReferenceMarkerHexadecimal:Pn,characterReferenceMarkerNumeric:Pn,characterReferenceValue:G,codeFenced:o(R),codeFencedFence:O,codeFencedFenceInfo:g,codeFencedFenceMeta:j,codeFlowValue:M,codeIndented:o(E),codeText:o(I),codeTextData:M,data:M,definition:o(),definitionDestinationString:D,definitionLabelString:H,definitionTitleString:x,emphasis:o(),hardBreakEscape:o(w),hardBreakTrailing:o(w),htmlFlow:o(q),htmlFlowData:M,htmlText:o(U),htmlTextData:M,image:o(Q),label:vn,labelText:hn,lineEnding:k,link:o(Z),listItem:o(),listOrdered:o(),listUnordered:o(),paragraph:o(),referenceString:bn,resourceDestinationString:c,resourceTitleString:dn,resource:jn,setextHeading:o(W),setextHeadingLineSequence:z,setextHeadingText:y,strong:o(),thematicBreak:o()}};Jr(t,(n||{}).mdastExtensions||[]);const e={};return r;function r(d){let _={type:"root",children:[]};const v={stack:[_],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:p,data:e},C=[];let T=-1;for(;++T<d.length;)if(d[T][1].type==="listOrdered"||d[T][1].type==="listUnordered")if(d[T][0]==="enter")C.push(T);else{const yn=C.pop();T=i(d,yn,T)}for(T=-1;++T<d.length;){const yn=t[d[T][0]];Kr.call(yn,d[T][1].type)&&yn[d[T][1].type].call(Object.assign({sliceSerialize:d[T][2].sliceSerialize},v),d[T][1])}if(v.tokenStack.length>0){const yn=v.tokenStack[v.tokenStack.length-1];(yn[1]||nr).call(v,void 0,yn[0])}for(_.position={start:Nn(d.length>0?d[0][1].start:{line:1,column:1,offset:0}),end:Nn(d.length>0?d[d.length-2][1].end:{line:1,column:1,offset:0})},T=-1;++T<t.transforms.length;)_=t.transforms[T](_)||_;return _}function i(d,_,v){let C=_-1,T=-1,yn=!1,Hn,Sn,ot,ct;for(;++C<=v;){const sn=d[C];switch(sn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{sn[0]==="enter"?T++:T--,ct=void 0;break}case"lineEndingBlank":{sn[0]==="enter"&&(Hn&&!ct&&!T&&!ot&&(ot=C),ct=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ct=void 0}if(!T&&sn[0]==="enter"&&sn[1].type==="listItemPrefix"||T===-1&&sn[0]==="exit"&&(sn[1].type==="listUnordered"||sn[1].type==="listOrdered")){if(Hn){let Jn=C;for(Sn=void 0;Jn--;){const Cn=d[Jn];if(Cn[1].type==="lineEnding"||Cn[1].type==="lineEndingBlank"){if(Cn[0]==="exit")continue;Sn&&(d[Sn][1].type="lineEndingBlank",yn=!0),Cn[1].type="lineEnding",Sn=Jn}else if(!(Cn[1].type==="linePrefix"||Cn[1].type==="blockQuotePrefix"||Cn[1].type==="blockQuotePrefixWhitespace"||Cn[1].type==="blockQuoteMarker"||Cn[1].type==="listItemIndent"))break}ot&&(!Sn||ot<Sn)&&(Hn._spread=!0),Hn.end=Object.assign({},Sn?d[Sn][1].start:sn[1].end),d.splice(Sn||C,0,["exit",Hn,sn[2]]),C++,v++}if(sn[1].type==="listItemPrefix"){const Jn={type:"listItem",_spread:!1,start:Object.assign({},sn[1].start),end:void 0};Hn=Jn,d.splice(C,0,["enter",Jn,sn[2]]),C++,v++,ot=void 0,ct=!0}}}return d[_][1]._spread=yn,v}function s(d,_){return v;function v(C){l.call(this,d(C),C),_&&_.call(this,C)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(d,_,v){this.stack[this.stack.length-1].children.push(d),this.stack.push(d),this.tokenStack.push([_,v]),d.position={start:Nn(_.start),end:void 0}}function o(d){return _;function _(v){d&&d.call(this,v),u.call(this,v)}}function u(d,_){const v=this.stack.pop(),C=this.tokenStack.pop();if(C)C[0].type!==d.type&&(_?_.call(this,d,C[0]):(C[1]||nr).call(this,d,C[0]));else throw new Error("Cannot close `"+d.type+"` ("+vt({start:d.start,end:d.end})+"): it’s not open");v.position.end=Nn(d.end)}function p(){return ha(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(d){if(this.data.expectingFirstListItemValue){const _=this.stack[this.stack.length-2];_.start=Number.parseInt(this.sliceSerialize(d),10),this.data.expectingFirstListItemValue=void 0}}function g(){const d=this.resume(),_=this.stack[this.stack.length-1];_.lang=d}function j(){const d=this.resume(),_=this.stack[this.stack.length-1];_.meta=d}function O(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function R(){const d=this.resume(),_=this.stack[this.stack.length-1];_.value=d.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function E(){const d=this.resume(),_=this.stack[this.stack.length-1];_.value=d.replace(/(\r?\n|\r)$/g,"")}function H(d){const _=this.resume(),v=this.stack[this.stack.length-1];v.label=_,v.identifier=tt(this.sliceSerialize(d)).toLowerCase()}function x(){const d=this.resume(),_=this.stack[this.stack.length-1];_.title=d}function D(){const d=this.resume(),_=this.stack[this.stack.length-1];_.url=d}function P(d){const _=this.stack[this.stack.length-1];if(!_.depth){const v=this.sliceSerialize(d).length;_.depth=v}}function y(){this.data.setextHeadingSlurpLineEnding=!0}function z(d){const _=this.stack[this.stack.length-1];_.depth=this.sliceSerialize(d).codePointAt(0)===61?1:2}function W(){this.data.setextHeadingSlurpLineEnding=void 0}function N(d){const v=this.stack[this.stack.length-1].children;let C=v[v.length-1];(!C||C.type!=="text")&&(C=ui(),C.position={start:Nn(d.start),end:void 0},v.push(C)),this.stack.push(C)}function M(d){const _=this.stack.pop();_.value+=this.sliceSerialize(d),_.position.end=Nn(d.end)}function k(d){const _=this.stack[this.stack.length-1];if(this.data.atHardBreak){const v=_.children[_.children.length-1];v.position.end=Nn(d.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(_.type)&&(N.call(this,d),M.call(this,d))}function w(){this.data.atHardBreak=!0}function q(){const d=this.resume(),_=this.stack[this.stack.length-1];_.value=d}function U(){const d=this.resume(),_=this.stack[this.stack.length-1];_.value=d}function I(){const d=this.resume(),_=this.stack[this.stack.length-1];_.value=d}function Z(){const d=this.stack[this.stack.length-1];if(this.data.inReference){const _=this.data.referenceType||"shortcut";d.type+="Reference",d.referenceType=_,delete d.url,delete d.title}else delete d.identifier,delete d.label;this.data.referenceType=void 0}function Q(){const d=this.stack[this.stack.length-1];if(this.data.inReference){const _=this.data.referenceType||"shortcut";d.type+="Reference",d.referenceType=_,delete d.url,delete d.title}else delete d.identifier,delete d.label;this.data.referenceType=void 0}function hn(d){const _=this.sliceSerialize(d),v=this.stack[this.stack.length-2];v.label=pu(_),v.identifier=tt(_).toLowerCase()}function vn(){const d=this.stack[this.stack.length-1],_=this.resume(),v=this.stack[this.stack.length-1];if(this.data.inReference=!0,v.type==="link"){const C=d.children;v.children=C}else v.alt=_}function c(){const d=this.resume(),_=this.stack[this.stack.length-1];_.url=d}function dn(){const d=this.resume(),_=this.stack[this.stack.length-1];_.title=d}function jn(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function bn(d){const _=this.resume(),v=this.stack[this.stack.length-1];v.label=_,v.identifier=tt(this.sliceSerialize(d)).toLowerCase(),this.data.referenceType="full"}function Pn(d){this.data.characterReferenceType=d.type}function G(d){const _=this.sliceSerialize(d),v=this.data.characterReferenceType;let C;v?(C=qr(_,v==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):C=we(_);const T=this.stack.pop();T.value+=C,T.position.end=Nn(d.end)}function ut(d){M.call(this,d);const _=this.stack[this.stack.length-1];_.url=this.sliceSerialize(d)}function Fn(d){M.call(this,d);const _=this.stack[this.stack.length-1];_.url="mailto:"+this.sliceSerialize(d)}function Kn(){return{type:"blockquote",children:[]}}function Rn(){return{type:"code",lang:null,meta:null,value:""}}function Ft(){return{type:"inlineCode",value:""}}function ei(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ri(){return{type:"emphasis",children:[]}}function Ae(){return{type:"heading",depth:0,children:[]}}function ve(){return{type:"break"}}function je(){return{type:"html",value:""}}function ii(){return{type:"image",title:null,url:"",alt:null}}function Se(){return{type:"link",title:null,url:"",children:[]}}function Ce(d){return{type:"list",ordered:d.type==="listOrdered",start:null,spread:d._spread,children:[]}}function si(d){return{type:"listItem",spread:d._spread,checked:null,children:[]}}function ai(){return{type:"paragraph",children:[]}}function li(){return{type:"strong",children:[]}}function ui(){return{type:"text",value:""}}function oi(){return{type:"thematicBreak"}}}function Nn(n){return{line:n.line,column:n.column,offset:n.offset}}function Jr(n,t){let e=-1;for(;++e<t.length;){const r=t[e];Array.isArray(r)?Jr(n,r):bu(n,r)}}function bu(n,t){let e;for(e in t)if(Kr.call(t,e))switch(e){case"canContainEols":{const r=t[e];r&&n[e].push(...r);break}case"transforms":{const r=t[e];r&&n[e].push(...r);break}case"enter":case"exit":{const r=t[e];r&&Object.assign(n[e],r);break}}}function nr(n,t){throw n?new Error("Cannot close `"+n.type+"` ("+vt({start:n.start,end:n.end})+"): a different token (`"+t.type+"`, "+vt({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+vt({start:t.start,end:t.end})+") is still open")}const yu="modulepreload",_u=function(n){return"/gleam-lustre/"+n},tr={},wt=function(t,e,r){if(!e||e.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=_u(s),s in tr)return;tr[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const f=i[p];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":yu,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((p,f)=>{u.addEventListener("load",p),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};let er=!1;highlight.registerLanguage("html",highlight_html);highlight.registerLanguage("javascript",highlight_js);highlight.registerLanguage("sh",highlight_sh);highlight.registerLanguage("gleam",highlight_gleam);async function Eu(n){const t=await wt(()=>import("./index-33034be5.js"),[]);if(!er){const[e,r,i]=await Promise.all([wt(()=>import("./xml-7b0fd495.js"),[]),wt(()=>import("./javascript-e0819b20.js"),[]),wt(()=>import("./shell-c79fdff2.js"),[])]);t.registerLanguage("html",e.default),t.registerLanguage("javascript",r.default),t.registerLanguage("sh",i.default),t.registerLanguage("gleam",xu),er=!0}n.classList.contains("hljs")||t.highlightElement(n)}function xu(n){const t="as assert case const fn if import let panic use opaque pub todo type",e={className:"string",variants:[{begin:/"/,end:/"/}],contains:[n.BACKSLASH_ESCAPE],relevance:0},r={className:"variable",begin:"\\b[a-z][a-z0-9_]*\\b",relevance:0},i={className:"comment",begin:"\\b_[a-z][a-z0-9_]*\\b",relevance:0},s={className:"number",variants:[{begin:"\\b0[bB](?:_?[01]+)+"},{begin:"\\b0[oO](?:_?[0-7]+)+"},{begin:"\\b0[xX](?:_?[0-9a-fA-F]+)+"},{begin:"\\b\\d(?:_?\\d+)*(?:\\.(?:\\d(?:_?\\d+)*)*)?"}],relevance:0};return{name:"Gleam",aliases:["gleam"],contains:[n.C_LINE_COMMENT_MODE,e,{begin:"<<",end:">>",contains:[{className:"keyword",beginKeywords:"binary bytes int float bit_string bits utf8 utf16 utf32 utf8_codepoint utf16_codepoint utf32_codepoint signed unsigned big little native unit size"},t,e,r,i,s],relevance:10},{className:"function",beginKeywords:"fn",end:"\\(",excludeEnd:!0,contains:[{className:"title",begin:"[a-z][a-z0-9_]*\\w*",relevance:0}]},{className:"attribute",begin:"@",end:"\\(",excludeEnd:!0},{className:"keyword",beginKeywords:t},{className:"title",begin:"\\b[A-Z][A-Za-z0-9]*\\b",relevance:0},{className:"operator",begin:"[+\\-*/%!=<>&|.]+",relevance:0},r,i,s]}}const Xr=new Br,wu=n=>new xe(n,Xr),Vn=(n,t)=>n.reduceRight((e,r)=>new xe(t(r),e),Xr);function ku(n){let t=0;for(let e=0,r=n.length;e<r;e++){let i=n.charCodeAt(e);t=(t<<5)-t+i,t|=0}return`${~t}`}function Lu(n){for(const[t,e]of Object.entries(Au))n.innerHTML=n.innerHTML.replace(new RegExp(`\\b${t}\\b`,"g"),`<a href="${e}" class="hover:underline">${t}</a>`)}const gt="/gleam-lustre/",_n="https://hexdocs.pm/gleam_stdlib/gleam/",Au={App:`${gt}api/lustre#app-type`,Attribute:`${gt}api/lustre/attribute#attribute-type`,Bool:`${_n}bool.html`,Decoder:`${_n}dynamic.html#Decoder`,Dynamic:`${_n}dynamic.html#Dynamic`,Effect:`${gt}api/lustre/effect#effect-type`,Element:`${gt}api/lustre/element#element-type`,Error:`${gt}api/lustre#error-type`,Float:`${_n}float.html`,Int:`${_n}int.html`,List:`${_n}list.html`,Map:`${_n}map.html#Map`,Option:`${_n}option.html#Option`,Result:`${_n}result.html`,String:`${_n}string.html`,StringBuilder:`${_n}string_builder.html#StringBuilder`};function vu(n){const t=hu(n),e=[];return[Vn(t.children,function i(s){switch(s.type){case"code":const a=ku(s.value);return window.requestAnimationFrame(()=>{const l=`[data-hash="${a}"]:not(.hljs)`;for(const o of document.querySelectorAll(l))Eu(o),Lu(o)}),ju(s.value,a,s.lang);case"emphasis":return Su(Vn(s.children,i));case"heading":{const[l,o]=s.children[0].value.split("|"),u=nt.fromArray(o?o.trim().split(" "):[]),p=/^[A-Z]/.test(l.trim())&&s.depth===3&&window.location.pathname.includes("/api/")?`${l.toLowerCase().trim().replace(/\s/g,"-").replace(/[^a-zA-Z0-9-_]/g,"")}-type`:`${l.toLowerCase().trim().replace(/\s/g,"-").replace(/[^a-zA-Z0-9-_]/g,"")}`;return s.depth>1&&e.unshift(V("a",nt.fromArray([K("href",`#${p}`),K("class","text-sm text-gray-400 no-underline"),K("class","hover:text-gray-700 hover:underline"),K("class",s.depth===2?"mt-4 first:mt-0":"ml-2")]),wu(tn(l.trim())))),zu(s.depth,l.trim(),u,p)}case"inlineCode":return Iu(s.value);case"link":return Ou(s.url.startsWith("/")?import.meta.BASE_URL+s.url.slice(1):s.url,Vn(s.children,i));case"list":return $u(!!s.ordered,Vn(s.children,i));case"listItem":return Tu(Vn(s.children,i));case"paragraph":return Fu(Vn(s.children,i));case"strong":return Nu(Vn(s.children,i));case"text":return rr(s.value);default:return rr("")}}),nt.fromArray(e)]}function ju(n,t,e){return Xs(b([A("not-prose rounded-xl")]),b([$r(b([K("data-hash",t),A("language-"+e),ye(b([["background","transparent"]]))]),b([tn(n)]))]))}function Su(n){return na(b([]),n)}function Ht(n,t){return zr(b([A("group")]),b([tn(n),Ee(b([_e("#"+t),A("pl-2 text-gray-200 opacity-0 transition-opacity"),A("group-hover:underline group-hover:opacity-100")]),b([tn("#")]))]))}function Cu(n){return zr(b([A("px-2 py-1 text-xs text-gray-700 border border-gray-200 rounded")]),b([tn(n)]))}function Iu(n){return $r(b([]),b([tn(n)]))}function Ou(n,t){return Ee(b([_e(n)]),t)}function $u(n,t){if(n)return Js(b([]),t);if(n)throw Tn("case_no_match","app/ui/markdown",115,"list","No case clause matched",{values:[n]});return Or(b([]),t)}function zu(n,t,e,r){let i=Ki(n,3),s=ge(e,Cu);if(i===1)return Ys(b([A("flex items-center justify-between"),Dt(r)]),b([Ht(t,r),pt(b([A("flex gap-4")]),s)]));if(i===2)return Et(b([A("flex items-center justify-between border-t"),Dt(r)]),b([Ht(t,r),pt(b([A("flex gap-4")]),s)]));if(i===3)return Zs(b([A("flex items-center justify-between"),Dt(r)]),b([Ht(t,r),pt(b([A("flex gap-2")]),s)]));throw Tn("case_no_match","app/ui/markdown",47,"heading","No case clause matched",{values:[i]})}function Tu(n){return Ir(b([]),n)}function Fu(n){return pt(b([]),n)}function Nu(n){return ta(b([]),n)}function rr(n){return tn(n)}const Bu="http://www.w3.org/2000/svg";function Mu(n){return vr(Bu,"path",n,de([]))}function ni(n,t){return ea(b([K("viewBox","0 0 15 15"),K("fill","none")],n),b([Mu(b([K("d",t),K("fill","currentColor"),K("fill-rule","evenodd"),K("clip-rule","evenodd")]))]))}function Du(n){return ni(n,"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z")}function qu(n){return ni(n,"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z")}function Pu(n){return zn(b([A("flex justify-between items-center px-4 py-2 bg-gray-100 border-b shadow")]),b([Et(b([A("text-indigo-600 my-0")]),b([tn("Lustre.")])),Tr(b([Nr(n),A("hover:bg-gray-200 rounded p-2")]),b([Du(b([A("w-4 h-4")]))]))]))}function kt(n,t){return Cr(b([]),b([Et(b([A("my-0 lg:mt-8 lg:mb-4")]),b([tn(n)])),Or(b([A("ml-2")]),ge(t,e=>{let r=e[0],i=e[1];return Ir(b([]),b([Ee(b([_e(i)]),b([tn(r)]))]))}))]))}function ti(){let n=t=>Ns(ra(),t);return b([kt("Docs",b([["Quickstart",n("docs/quickstart")],["Managing state",n("docs/managing-state")],["Side effects",n("docs/side-effects")],["Components",n("docs/components")],["Server-side rendering",n("docs/server-side-rendering")]])),kt("Guides",b([["Using with Mist",n("guides/mist")],["Using with Wisp",n("guides/wisp")]])),kt("Reference",b([["lustre",n("api/lustre")],["lustre/attribute",n("api/lustre/attribute")],["lustre/effect",n("api/lustre/effect")],["lustre/element",n("api/lustre/element")],["lustre/element/html",n("api/lustre/element/html")],["lustre/element/svg",n("api/lustre/element/svg")],["lustre/event",n("api/lustre/event")]])),kt("External",b([["GitHub","https://github.com/hayleigh-dot-dev/gleam-lustre"],["Discord","https://discord.gg/Fm8Pwmy"],["Buy me a coffee?","https://github.com/sponsors/hayleigh-dot-dev"]]))])}function Ru(n){return zn(b([A("relative")]),b([zn(b([A("flex justify-between items-center px-4 py-2 bg-gray-100 border-b")]),b([Et(b([A("text-indigo-600 my-0")]),b([tn("Lustre.")])),Tr(b([Nr(n),A("hover:bg-gray-200 rounded p-2")]),b([qu(b([A("w-4 h-4")]))]))])),Cr(b([A("absolute top-0 w-full bg-gray-100 rounded-b-2xl px-4 mt-12 shadow")]),ti())]))}function Hu(){return pa(!1,(n,t,e)=>{if(n)return Ru(t(!1));if(n)throw Tn("case_no_match","app/layout",37,"","No case clause matched",{values:[n]});return Pu(t(!0))})}function Vu(){return Gs(b([A("sticky top-0 z-10 col-span-8 lg:hidden")]),b([Hu()]))}function Wu(){return Sr(b([ye(b([["align-self","start"]])),A("relative sticky top-0 border-r hidden px-4 pb-10 h-screen"),A("lg:block lg:col-span-2"),A("xl:col-span-2")]),b([zn(b([A("absolute right-0 inset-y-0 w-[50vw] bg-gray-100 -z-10")]),b([])),zn(b([A("flex flex-col h-full overflow-y-scroll")]),b([Et(b([A("text-indigo-600 mb-0")]),b([tn("Lustre")])),pt(b([A("text-gray-400 font-bold")]),b([tn("Web apps from space.")]))],ti())),zn(b([A("absolute bottom-10 h-12 w-full pointer-events-none"),A("bg-gradient-to-t from-gray-100 to-transparent")]),b([])),zn(b([A("absolute top-0 h-12 w-full pointer-events-none"),A("bg-gradient-to-b from-gray-100 to-transparent")]),b([]))]))}function Uu(n){return Ks(b([A("col-span-8 pt-4 px-4 pb-32"),A("lg:px-8 lg:col-span-6"),A("xl:col-span-5")]),n)}function Qu(n){return Sr(b([ye(b([["align-self","start"]])),A("sticky top-0 border-l hidden p-4 py-10 h-screen"),A("xl:block xl:col-span-1")]),b([zn(b([A("flex flex-col h-full overflow-y-scroll")]),n)]))}function rn(n){let t=vu(n),e=t[0],r=t[1];return Qs(b([A("bg-gray-50 prose prose-lustre max-w-none")]),b([zn(b([A("max-w-[96rem] mx-auto grid grid-cols-8")]),b([Vu(),Wu(),Uu(e),Qu(r)]))]))}const Gu=`
# lustre
`,Yu=`
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
`,Zu=`
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
`,Ku=`
## Utilities

### is_browser | erlang javascript

\`\`\`gleam
pub fn is_browser() -> Bool
\`\`\`

### is_registered | erlang javascript

\`\`\`gleam
pub fn is_registered(_name: String) -> Bool
\`\`\`

`;function ir(){let n=b([Gu,Yu,Zu,Ku]),t=en(n,`
`);return rn(t)}const Ju=`
# lustre/attribute
`,Xu=`
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
`,no=`
## Mapping attributes

### map | erlang javascript

\`\`\`gleam
pub fn map(attr: Attribute(a), f: fn(a) -> b) -> Attribute(b)
\`\`\`
`,to=`
## Conversions

### to_string | erlang javascript

\`\`\`gleam
pub fn to_string(attr: Attribute(msg)) -> String
\`\`\`

### to_string_builder | erlang javascript

\`\`\`gleam
pub fn to_string_builder(attr: Attribute(msg)) -> StringBuilder
\`\`\`
`,eo=`
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
`,ro=`
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
`,io=`
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
`,so=`
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
`,ao=`
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
`,lo=`
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
`,uo=`
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
`,oo=`
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
`;function co(){let n=b([Ju,Xu,no,to,eo,ro,io,so,ao,lo,uo,oo]),t=en(n,`
`);return rn(t)}const mo=`
# lustre/effect
`,go=`
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
`,po=`
## Manipulating Effects

### map | erlang javascript

\`\`\`gleam
pub fn map(effect: Effect(a), f: fn(a) -> b) -> Effect(b)
\`\`\`
`;function fo(){let n=b([mo,go,po]),t=en(n,`
`);return rn(t)}const ho=`
# lustre/element
`,bo=`
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
`,yo=`
## Mapping elements

### map | erlang javascript

\`\`\`gleam
pub fn map(element: Element(a), f: fn(a) -> b) -> Element(b)
\`\`\`
`,_o=`
## Conversions

### to_string | erlang javascript

\`\`\`gleam
pub fn to_string(element: Element(msg)) -> String
\`\`\`

### to_string_builder | erlang javascript

\`\`\`gleam
pub fn to_string_builder(element: Element(msg)) -> StringBuilder
\`\`\`
`;function Eo(){let n=b([ho,bo,yo,_o]),t=en(n,`
`);return rn(t)}const xo=`
# lustre/element/html
`,wo=`
## Main Root

### html | erlang javascript

\`\`\`gleam
pub fn html(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,ko=`
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
`,Lo=`
## Sectioning root

### body | erlang javascript

\`\`\`gleam
pub fn body(
  attrs: List(Attribute(msg)),
  children: List(Element(msg)),
) -> Element(msg)
\`\`\`
`,Ao=`
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
`,vo=`
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
`,jo=`
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
`,So=`
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
`,Co=`
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
`,Io=`
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
`,Oo=`
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
`,$o=`
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
`,zo=`
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
`,To=`
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
`,Fo=`
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
`,No=`
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
`;function Bo(){let n=b([xo,wo,ko,Lo,Ao,vo,jo,So,Co,Io,Oo,$o,zo,To,Fo,No]),t=en(n,`
`);return rn(t)}const Mo=`
# lustre/element/svg
`,Do=`
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
`,qo=`
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
`,Po=`
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
`,Ro=`
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
`,Ho=`
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
`,Vo=`
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
`,Wo=`
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
`,Uo=`
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
`,Qo=`
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
`,Go=`
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
`;function Yo(){let n=b([Mo,Do,qo,Po,Ro,Ho,Vo,Wo,Uo,Qo,Go]),t=en(n,`
`);return rn(t)}const Zo=`
# lustre/event
`,Ko=`
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
`,Jo=`
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
`,Xo=`
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
`,nc=`
## Focus events

### on_focus | erlang javascript

\`\`\`gleam
pub fn on_focus(msg: msg) -> Attribute(msg)
\`\`\`

### on_blur | erlang javascript

\`\`\`gleam
pub fn on_blur(msg: msg) -> Attribute(msg)
\`\`\`
`,tc=`
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
`;function ec(){let n=b([Zo,Ko,Jo,Xo,nc,tc]),t=en(n,`
`);return rn(t)}const rc=`
# Components

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function ic(){let n=b([rc]),t=en(n,`
`);return rn(t)}const sc=`
# Managing state

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function ac(){let n=b([sc]),t=en(n,`
`);return rn(t)}const lc=`# Quickstart

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
`,uc=`## In the browser | javascript

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
`,oc=`## On the server | erlang javascript

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
`,cc="## Next steps";function Lt(){let n=b([lc,uc,oc,cc]),t=en(n,`
`);return rn(t)}const mc=`
# Server-side rendering

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function gc(){let n=b([mc]),t=en(n,`
`);return rn(t)}const pc=`
# Side effects

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function fc(){let n=b([pc]),t=en(n,`
`);return rn(t)}const hc=`
# Using with Mist

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function dc(){let n=b([hc]),t=en(n,`
`);return rn(t)}const bc=`
# Using with Wisp

Whoopsie, I haven't got round to writing this guide yet. If you haven't checked
out the [quickstart guide](/docs/quickstart) that is probably the best place to
go to get up to speed.

If you have any questions, feel free to ping \`@hayleigh.dev\` over on the Gleam
[Discord server](https://discord.gg/Fm8Pwmy) and I'd be happy to help you out!
`;function yc(){let n=b([bc]),t=en(n,`
`);return rn(t)}class _c extends xt{constructor(t){super(),this.route=t}}class ee extends xt{constructor(t){super(),this[0]=t}}function Ec(n){return new _c(n)}function xc(n,t){if(t instanceof ee){let e=t[0];return n.withFields({route:e})}else throw Tn("case_no_match","app",50,"update","No case clause matched",{values:[t]})}function wc(n){let t=n.route.path;return t==="/"?Lt():t==="/api"||t==="/api/lustre"?ir():t==="/api/lustre/attribute"?co():t==="/api/lustre/effect"?fo():t==="/api/lustre/element"?Eo():t==="/api/lustre/element/html"?Bo():t==="/api/lustre/element/svg"?Yo():t==="/api/lustre/event"?ec():t==="/docs"||t==="/docs/quickstart"?Lt():t==="/docs/managing-state"?ac():t==="/docs/side-effects"?fc():t==="/docs/components"?ic():t==="/docs/server-side-rendering"?gc():t==="/guides/mist"?dc():t==="/guides/wisp"?yc():Lt()}function kc(n){let t=Us(Ec,xc,wc),e=$s(t,"body",n);if(!e.isOk())throw Tn("assignment_no_match","app",24,"main","Assignment pattern did not match",{value:e});return e[0]}const Vt=n=>`/${n.slice(14)}`;document.addEventListener("DOMContentLoaded",()=>{const n=new URL(window.location.href),t=kc({path:Vt(n.pathname),hash:n.hash});document.addEventListener("click",e=>{let r=e.target;for(;r;){if(r===document.body)return;if(r.tagName==="A"){const i=new URL(r.href);return i.origin!==window.location.origin?void 0:(e.preventDefault(),window.requestAnimationFrame(()=>{var s;window.history.pushState({},"",i.href),i.pathname===window.location.pathname&&i.hash?(s=document.querySelector(i.hash))==null||s.scrollIntoView():window.scrollTo(0,0)}),void t(new ee({path:Vt(i.pathname),hash:i.hash})))}r=r.parentNode}}),window.addEventListener("popstate",()=>{const e=new URL(window.location.href);t(new ee({path:Vt(e.pathname),hash:e.hash}))})});
