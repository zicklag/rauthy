import"./disclose-version.BDr9Qe-U.js";import{p as P,ap as U,m as q,a6 as B,l,f as S,a as F,o as M,c as n,r as c,s as T,t as x}from"./index-client.Ds4XgiuL.js";import{s as E}from"./render.Bq2-eTRf.js";import{i as j}from"./if.Du7BDhAX.js";import{e as _,a as g,t as I}from"./template.DXIK6jcH.js";import{p as Q}from"./proxy.CB6KOiNf.js";import{L as V}from"./Button.nDjAKZm4.js";import{G as X,H as Y,p as Z,I as D}from"./helpers.BTvs6bnN.js";import{b as N}from"./fetch.DFmyLr06.js";import{u as ee}from"./i18n.svelte.CgUwCKxn.js";function re(i){let t=Y(i);const s={"+":"-","/":"_","=":""};return t.replace(/[+/=]/g,e=>s[e])}function z(i){if(typeof i=="string"){const t={"-":"+",_:"/",".":"="},s=i.replace(/[-_.]/g,e=>t[e]);return X(s)}else return i}async function ae(i,t,s,e){var k;let b={purpose:t},d=await N(`/auth/v1/users/${i}/webauthn/auth/start`,b);if(d.error)return console.error(d.error),{error:d.error.message||"Error starting the Authentication"};if(!d.body){let r="Did not receive a valid webauthn body";return console.error(r),{error:r}}let y=d.body,a=y.rcr;if(!a.publicKey){let r="no publicKey in challenge from the backend";return console.error(r),{error:r}}if(a.publicKey.challenge=z(a.publicKey.challenge),a.publicKey.allowCredentials)for(let r of a.publicKey.allowCredentials)r.id=z(r.id);const m=(y.exp-1)*1e3,w=new Date().getTime()+m;let o;try{const r=await Z(navigator.credentials.get(a),m);if(r)o=r;else return{error:s}}catch{return{error:new Date().getTime()>=w?e:s}}let h={code:y.code,data:{id:o.id,rawId:D(o.rawId),response:{authenticatorData:D(o.response.authenticatorData),clientDataJSON:D(o.response.clientDataJSON),signature:D(o.response.signature)},extensions:o.getClientExtensionResults(),type:o.type}},u=await N(`/auth/v1/users/${i}/webauthn/auth/finish`,h);return u.status===202?{data:u.body}:(console.error(u),{error:((k=u.error)==null?void 0:k.message)||"Authentication Error"})}var te=I('<div class="err svelte-jfkcym"> </div>'),se=I('<div class="good svelte-jfkcym"> </div>'),oe=I('<div class="wrapperOuter svelte-jfkcym"><div class="wrapperInner svelte-jfkcym"><div class="content svelte-jfkcym"><div class="contentRow svelte-jfkcym"><div class="contentHeader svelte-jfkcym"> </div></div> <div class="contentRow svelte-jfkcym"><div><!></div></div> <div class="contentRow svelte-jfkcym"><!></div></div></div></div>');function ie(i,t){P(t,!0);let s=ee(),e=M(void 0);U(async()=>{q(e,Q(await ae(t.userId,t.purpose,s.authorize.invalidKeyUsed,s.authorize.requestExpired)))}),B(()=>{l(e)&&(l(e).error?setTimeout(()=>{var a;t.onError(((a=l(e))==null?void 0:a.error)||"Webauthn Error")},3e3):t.onSuccess(l(e).data))});var b=_(),d=S(b);{var y=a=>{var m=oe(),w=n(m),o=n(w),h=n(o),u=n(h),k=n(u,!0);c(u),c(h);var r=T(h,2),R=n(r),O=n(R);{var W=v=>{V(v,{})};j(O,v=>{l(e)||v(W)})}c(R),c(r);var A=T(r,2),$=n(A);{var G=v=>{var C=_(),H=S(C);{var J=f=>{var p=te(),K=n(p,!0);c(p),x(()=>E(K,l(e).error)),g(f,p)},L=f=>{var p=se(),K=n(p,!0);c(p),x(()=>E(K,s.authorize.mfaAck)),g(f,p)};j(H,f=>{l(e).error?f(J):f(L,!1)})}g(v,C)};j($,v=>{l(e)&&v(G)})}c(A),c(o),c(w),c(m),x(()=>E(k,s.authorize.expectingPasskey)),g(a,m)};j(d,a=>{t.purpose&&a(y)})}g(i,b),F()}export{ie as W,re as a,z as b};
