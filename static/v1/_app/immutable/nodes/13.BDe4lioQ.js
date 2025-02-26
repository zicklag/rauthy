import"../chunks/disclose-version.BDr9Qe-U.js";import"../chunks/legacy.DvmPJwhI.js";import{p as ea,o as K,ap as ia,s,f as W,t as v,a as na,m as f,l as o,c as p,r as u,ar as $}from"../chunks/index-client.Ds4XgiuL.js";import{s as e}from"../chunks/render.Bq2-eTRf.js";import{i as k}from"../chunks/if.Du7BDhAX.js";import{e as la}from"../chunks/each.MnMr4iw5.js";import{a as l,t as j,d as w}from"../chunks/template.DXIK6jcH.js";import{p as P}from"../chunks/proxy.CB6KOiNf.js";import{B as ma}from"../chunks/Button.nDjAKZm4.js";import{b as va}from"../chunks/helpers.BTvs6bnN.js";import{s as ca}from"../chunks/helpers.mrWtKrwW.js";import{f as da}from"../chunks/fetch.DFmyLr06.js";import{E as fa}from"../chunks/Expandable.CX2wPjIu.js";import{L as h}from"../chunks/LabeledValue.CfdJ335t.js";import{u as pa}from"../chunks/i18n_admin.svelte.B9VY-ZfA.js";import{I as ua}from"../chunks/IconCheck.CzEyprnz.js";function $a(){return{"csrf-token":va(),"Content-Type":"application/json",Accept:"application/json"}}async function wa(m){return m.status===403&&(await m.json()).error==="MfaRequired"&&(console.error("MFA is required for a rauthy admin account"),await ca(3e3),window.location.reload()),(m.status===401||m.status===403)&&window.location.reload(),m}async function ha(){const m=await fetch("/auth/v1/oidc/rotate_jwk",{method:"POST",headers:$a()});return await wa(m)}var ya=j('<div class="font-mono"> </div>'),ba=j('<div class="n svelte-8tua2b"> </div>'),ka=j("<!> <!> <!> <!> <!> <!> <!>",1),ga=j('<div class="err"> </div>'),ja=j('<h2>Json Web Keys</h2> <p> </p> <p> </p> <p> </p> <!> <div class="btn svelte-8tua2b"><!></div> <!> <!>',1);function xa(m,z){ea(z,!0);let y=pa(),L=K(P([])),T=K(!1),g=K(""),q=K(!1);ia(()=>{_()});async function _(){var a;let r=await da("/auth/v1/oidc/certs");r.body?f(L,P(r.body.keys)):f(g,P(((a=r.error)==null?void 0:a.message)||"Error"))}async function G(){f(g,""),f(T,!0);let r=await ha();if(r.ok)f(q,!0),setTimeout(()=>{f(q,!1)},3e3),await _();else{let a=await r.json();f(g,P(a.message))}f(T,!1)}var B=ja(),A=s(W(B),2),J=p(A,!0);u(A);var C=s(A,2),N=p(C,!0);u(C);var E=s(C,2),Q=p(E,!0);u(E);var D=s(E,2);la(D,17,()=>o(L),r=>r.kid,(r,a)=>{fa(r,{summary:d=>{var b=ya(),x=p(b);u(b),v(()=>e(x,`${o(a).alg??""}
                /
                ${o(a).kid??""}`)),l(d,b)},details:d=>{var b=ka(),x=W(b);h(x,{label:"Key ID",mono:!0,children:(t,c)=>{$();var i=w();v(()=>e(i,o(a).kid)),l(t,i)},$$slots:{default:!0}});var H=s(x,2);h(H,{get label(){return y.jwks.type},mono:!0,children:(t,c)=>{$();var i=w();v(()=>e(i,o(a).kty)),l(t,i)},$$slots:{default:!0}});var M=s(H,2);h(M,{get label(){return y.jwks.alg},mono:!0,children:(t,c)=>{$();var i=w();v(()=>e(i,o(a).alg)),l(t,i)},$$slots:{default:!0}});var O=s(M,2);{var Y=t=>{h(t,{label:"Curve",mono:!0,children:(c,i)=>{$();var n=w();v(()=>e(n,o(a).crv)),l(c,n)},$$slots:{default:!0}})};k(O,t=>{o(a).crv&&t(Y)})}var R=s(O,2);{var aa=t=>{h(t,{label:"n",mono:!0,children:(c,i)=>{var n=ba(),sa=p(n,!0);u(n),v(()=>e(sa,o(a).n)),l(c,n)},$$slots:{default:!0}})};k(R,t=>{o(a).n&&t(aa)})}var S=s(R,2);{var ta=t=>{h(t,{label:"e",mono:!0,children:(c,i)=>{$();var n=w();v(()=>e(n,o(a).e)),l(c,n)},$$slots:{default:!0}})};k(S,t=>{o(a).e&&t(ta)})}var ra=s(S,2);{var oa=t=>{h(t,{label:"x",mono:!0,children:(c,i)=>{$();var n=w();v(()=>e(n,o(a).x)),l(c,n)},$$slots:{default:!0}})};k(ra,t=>{o(a).x&&t(oa)})}l(d,b)},$$slots:{summary:!0,details:!0}})});var I=s(D,2),U=p(I);ma(U,{onclick:G,get isLoading(){return o(T)},children:(r,a)=>{$();var d=w();v(()=>e(d,y.jwks.rotateKeys)),l(r,d)},$$slots:{default:!0}}),u(I);var F=s(I,2);{var V=r=>{ua(r,{})};k(F,r=>{o(q)&&r(V)})}var X=s(F,2);{var Z=r=>{var a=ga(),d=p(a,!0);u(a),v(()=>e(d,o(g))),l(r,a)};k(X,r=>{o(g)&&r(Z)})}v(()=>{e(J,y.jwks.p1),e(N,y.jwks.p2),e(Q,y.jwks.p3)}),l(m,B),na()}function Ka(m){xa(m,{})}export{Ka as component};
