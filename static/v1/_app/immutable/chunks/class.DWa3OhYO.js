import{aK as V,Y as j,k as _,aL as I,aM as K}from"./index-client.DAoU_hDn.js";import{b as M,i as P,c as R,d as S,f as w,n as x,g as G}from"./render.mNhspeV3.js";function g(e){var t,a,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var u=e.length;for(t=0;t<u;t++)e[t]&&(a=g(e[t]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function T(){for(var e,t,a=0,l="",u=arguments.length;a<u;a++)(e=arguments[a])&&(t=g(e))&&(l&&(l+=" "),l+=t);return l}function A(e){return typeof e=="object"?T(e):e??""}function Y(e){if(_){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var l=e.value;d(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var u=e.checked;d(e,"checked",null),e.checked=u}}};e.__on_r=a,K(a),M()}}function q(e,t){var a=e.__attributes??(e.__attributes={});a.value===(a.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t)}function z(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function d(e,t,a,l){var u=e.__attributes??(e.__attributes={});_&&(u[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||u[t]!==(u[t]=a)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[V]=a),a==null?e.removeAttribute(t):typeof a!="string"&&L(e).includes(t)?e[t]=a:e.setAttribute(t,a))}function B(e,t,a,l,u=!1,s=!1,U=!1){var o=t||{},b=e.tagName==="OPTION";for(var y in t)y in a||(a[y]=null);a.class&&(a.class=A(a.class)),l!==void 0&&(a.class=a.class?a.class+" "+l:l);var $=L(e),C=e.__attributes??(e.__attributes={});for(const i in a){let n=a[i];if(b&&i==="value"&&n==null){e.value=e.__value="",o[i]=n;continue}var h=o[i];if(n!==h){o[i]=n;var p=i[0]+i[1];if(p!=="$$"){if(p==="on"){const c={},v="$$"+i;let f=i.slice(2);var m=G(f);if(P(f)&&(f=f.slice(0,-7),c.capture=!0),!m&&h){if(n!=null)continue;e.removeEventListener(f,o[v],c),o[v]=null}if(n!=null)if(m)e[`__${f}`]=n,S([f]);else{let E=function(O){o[i].call(this,O)};o[v]=R(f,e,E,c)}else m&&(e[`__${f}`]=void 0)}else if(i==="style"&&n!=null)e.style.cssText=n+"";else if(i==="autofocus")w(e,!!n);else if(i==="__value"||i==="value"&&n!=null)e.value=e[i]=e.__value=n;else if(i==="selected"&&b)z(e,n);else{var r=i;u||(r=x(r));var N=r==="defaultValue"||r==="defaultChecked";if(n==null&&!s&&!N)if(C[i]=null,r==="value"||r==="checked"){let c=e;if(r==="value"){let v=c.defaultValue;c.removeAttribute(r),c.defaultValue=v}else{let v=c.defaultChecked;c.removeAttribute(r),c.defaultChecked=v}}else e.removeAttribute(i);else N||$.includes(r)&&(s||typeof n!="string")?e[r]=n:typeof n!="function"&&(_&&(r==="src"||r==="href"||r==="srcset")||d(e,r,n))}i==="style"&&"__styles"in e&&(e.__styles={})}}}return o}var k=new Map;function L(e){var t=k.get(e.nodeName);if(t)return t;k.set(e.nodeName,t=[]);for(var a,l=e,u=Element.prototype;u!==l;){a=I(l);for(var s in a)a[s].set&&t.push(s);l=j(l)}return t}function D(e,t,a){var l=e.__className,u=J(t,a);_&&e.className===u?e.__className=u:(l!==u||_&&e.className!==u)&&(t==null&&!a?e.removeAttribute("class"):e.className=u,e.__className=u)}function J(e,t){return(e??"")+(t?" "+t:"")}function Q(e,t,a){if(a){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}export{q as a,D as b,A as c,B as d,Y as r,d as s,Q as t};
