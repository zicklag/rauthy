import"../chunks/disclose-version.BDr9Qe-U.js";import{t as w,c as d,r as u,p as Lr,A as n,ap as Mr,a6 as le,f as H,a as Sr,y as e,z as t,aq as Tr,s as c,ar as ge,ab as pe}from"../chunks/index-client.Di99sPv0.js";import{s as M}from"../chunks/render.Cjc4CIr8.js";import{i as p}from"../chunks/if.DgeUjMU2.js";import{e as Wr}from"../chunks/each.DxtmCefA.js";import{a as l,n as Rr,t as f,d as _e,e as rr}from"../chunks/template.BEKX6jgL.js";import{h as Nr}from"../chunks/svelte-head.B7nS6fh6.js";import{s as K}from"../chunks/class.BCapn1bP.js";import{p as s}from"../chunks/proxy.BQ2dmY0t.js";import{p as jr}from"../chunks/dataFetching.B_eQV28B.js";import{f as tr,M as Br,N as Cr,O as Fr,w as Or,P as Ur,k as Er,l as Gr,_ as Hr,Q as Kr,S as Vr}from"../chunks/helpers.D3KrX4pz.js";import{B as we}from"../chunks/Button.D-14suAe.js";import{W as Qr}from"../chunks/WebauthnRequest.BW_iBuNs.js";import{I as Xr}from"../chunks/Input.-lhBsjDF.js";import{L as Ar}from"../chunks/LangSelector.CCDP_eNQ.js";import{p as Ne}from"../chunks/props.ClgLgKUv.js";import{M as Dr}from"../chunks/Main.DKi4VjsM.js";import{C as Pr}from"../chunks/ContentCenter.BgFVBEpa.js";import{u as Yr}from"../chunks/i18n.svelte.Bc6aINkd.js";import{T as D}from"../chunks/Template.DiUnptz0.js";import{u as B}from"../chunks/param.svelte.B2CvjQ2c.js";import{T as Zr}from"../chunks/ThemeSwitch._9IF3ElF.js";import{I as Jr}from"../chunks/InputPassword.Bl28d8lQ.js";import{b as be}from"../chunks/fetch.DxJS_Pk_.js";import{u as ar}from"../chunks/is_dev.svelte.DF22tCPV.js";import{F as et}from"../chunks/Form.C0Yvca1O.js";import{B as rt}from"../chunks/ButtonAuthProvider.Ct2rZk8A.js";var tt=Rr(`<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125
            1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504
            1.125-1.125V9.75M8.25 21h8.25"></path></svg>`);function at(P,C){let S=Ne(C,"opacity",3,.9),v=Ne(C,"width",3,"1.5rem"),Y=Ne(C,"color",3,"currentColor");var F=tt();K(F,"stroke-width",2),w(()=>{K(F,"stroke",Y()),K(F,"width",v()),K(F,"opacity",S())}),l(P,F)}var ot=f('<div class="logo svelte-1gwy16z"><img alt="No Logo Available"></div>');function st(P,C){console.log("rendering clientLogo");var S=ot(),v=d(S);u(S),w(()=>K(v,"src",`/auth/v1/clients/${C.clientId}/logo`)),l(P,S)}var it=f('<a class="home svelte-1hqs85f"><!></a>'),lt=f('<div class="forgotten svelte-1hqs85f"><!></div>'),nt=f("<!> <!>",1),ct=f('<div class="btn flex-col svelte-1hqs85f"><!></div>'),vt=f('<div class="btn flex-col svelte-1hqs85f"><!></div>'),dt=f("<!> <!> <!>",1),ut=f('<a class="reg svelte-1hqs85f" target="_blank"> </a>'),ft=f('<a class="reg svelte-1hqs85f" href="/auth/v1/users/register" target="_blank"> </a>'),ht=f("<!> <!>",1),mt=f('<div class="errMsg svelte-1hqs85f"> </div>'),gt=f('<div class="success svelte-1hqs85f"> </div>'),pt=f('<div class="btn flex-col svelte-1hqs85f"><!></div>'),_t=f('<div class="providers flex-col svelte-1hqs85f"><div class="providersSeparator svelte-1hqs85f"><div class="separator svelte-1hqs85f"></div> <div class="loginWith svelte-1hqs85f"><div class="svelte-1hqs85f"> </div></div></div> <!></div>'),wt=f('<div class="container svelte-1hqs85f"><div class="head svelte-1hqs85f"><!> <!></div> <div class="name svelte-1hqs85f"><h2> </h2></div> <!> <!> <!> <!> <!> <!></div> <!> <!>',1),bt=f("<!> <!> <!> <!> <!> <!> <!>",1);function qt(P,C){var Ve;Lr(C,!0);const S="18rem";let v=Yr(),Y=ar().get(),F=pe(()=>Y?"/auth/v1/dev/authorize":"/auth/v1/oidc/authorize"),b=B("client_id").get(),ne=n(""),T=n(s(Y?"/auth/v1":"")),Z=B("redirect_uri").get(),qe=B("nonce").get(),$e=((Ve=B("scope").get())==null?void 0:Ve.split(" "))||[],ze=n(void 0),ke=n(void 0),ye=B("state").get(),J=B("code_challenge").get(),x=B("code_challenge_method").get(),je=!1,xe=n(void 0),ce=n(s([])),ve=n(void 0),V=n(!1),h=n(""),ee=n(""),de=n(""),W=n(!1),O=n(!1),ue=n(!1),fe=n(!1),he=n(!1),U=n(!1),Be=n(""),Ie=n(!1),$=n(s(B("login_hint").get()||"")),R=n(""),Le=n("");Mr(()=>{var r;e(W)||((r=e(ze))==null||r.focus())}),le(()=>{je&&(b!=null&&b.length)&&ir()}),le(()=>{e(he)&&setTimeout(()=>{t(he,!1),t(ue,!1),t(fe,!1)},3e3)}),le(()=>{var r;(r=e(ke))==null||r.focus()}),le(()=>{var r;if(e(ee)==="Refresh")je=!0;else if((r=e(ee))!=null&&r.startsWith("MfaLogin ")){let o=e(ee).replace("MfaLogin ","");t($,s(o)),t(xe,s(o))}}),le(()=>{Y?or():e(de)&&tr(e(de))});async function or(){var o;let r=await be("/auth/v1/oidc/session");console.log("manual session",r.body),(o=r.body)!=null&&o.csrf_token?tr(r.body.csrf_token):console.error(r.error)}function sr(){t(h,""),t(ue,!0),t(R,"")}async function ir(){if(!b){console.error("clientId is undefined");return}if(!Z){console.error("redirectUri is undefined");return}t(V,!0);const r={client_id:b,redirect_uri:Z,state:ye,nonce:qe,scopes:$e};J&&x&&(x==="plain"||x==="S256")&&(r.code_challenge=J,r.code_challenge_method=x);let o=await be("/auth/v1/oidc/authorize/refresh",r);await Ce(o)}async function lr(r,o){if(t(h,""),!b){console.error("clientId is undefined");return}if(!Z){console.error("redirectUri is undefined");return}const _={email:e($),client_id:b,redirect_uri:Z,state:ye,nonce:qe,scopes:$e};if(J&&x&&(x==="plain"||x==="S256")&&(_.code_challenge=J,_.code_challenge_method=x),e(W)&&e($)!==e(xe)){if(!e(R)){t(h,s(v.authorize.passwordRequired));return}if(e(R).length>256){t(h,"max 256");return}_.password=e(R)}t(V,!0);let q="/auth/v1/oidc/authorize";ar().get()&&(q="/auth/v1/dev/authorize");let k=await be(q,_);await Ce(k)}async function Ce(r){if(r.status===202){let o=r.headers.get("location");if(!o){console.error("location header missing");return}window.location.replace(o)}else if(r.status===200){t(h,"");let o=r.body;o&&"user_id"in o&&"code"in o?(t(Le,s(o.user_id)),t(ve,s({Login:o.code}))):console.error("did not receive a proper WebauthnLoginResponse after HTTP200")}else if(r.status===406)t(h,s(v.authorize.clientForceMfa)),t(O,!0);else if(r.status===429){let o=r.headers.get("x-retry-not-before");if(!o){console.error("x-retry-not-before header missing");return}let _=Number.parseInt(o),q=Gr(_),k=_*1e3-new Date().getTime();t(U,!0),t(h,`${v.authorize.http429} ${q}`),t($,""),t(R,""),t(W,!1),setTimeout(()=>{t(U,!1),t(h,"")},k)}else e(W)?(t(h,s(v.authorize.invalidCredentials)),t(fe,!0)):(t(W,!0),t(Be,s(e($))));t(V,!1)}function nr(){e(W)&&e(Be)!==e($)&&(t(W,!1),t(R,""),t(h,""))}function cr(r){Hr(64,(o,{challenge:_,verifier:q})=>{o||(localStorage.setItem(Kr,q),vr(r,_))})}async function vr(r,o){let _={email:e($)||null,client_id:b,redirect_uri:Z,scopes:$e,state:ye,nonce:qe,code_challenge:J,code_challenge_method:x,provider_id:r,pkce_challenge:o},q=await jr(_);if(q.ok){const k=await q.text();Vr(k);let Q=q.headers.get("location");if(!Q){console.error("no location header set for provider login");return}window.location.href=Q}else{let k=await q.json();t(h,s(k.message))}}function dr(r){t(ve,void 0),t(h,s(r))}function ur(r){console.log("onWebauthnSuccess",r),r&&"loc"in r&&window.location.replace(r.loc)}async function fr(){let r={email:e($)};e(T)&&(r.redirect_uri=encodeURI(e(T))),t(V,!0);let o=await be("/auth/v1/users/request_reset",r);o.error?t(h,s(o.error.message)):t(he,!0),t(V,!1)}var Fe=bt();Nr(r=>{w(()=>Tr.title=`Login ${(e(ne)||b)??""}`)});var Oe=H(Fe);D(Oe,{id:Br,get value(){return e(ce)},set value(r){t(ce,s(r))}});var Ue=c(Oe,2);D(Ue,{id:Cr,get value(){return e(ne)},set value(r){t(ne,s(r))}});var Ee=c(Ue,2);D(Ee,{id:Fr,get value(){return e(T)},set value(r){t(T,s(r))}});var Ge=c(Ee,2);D(Ge,{id:Or,get value(){return e(de)},set value(r){t(de,s(r))}});var He=c(Ge,2);D(He,{id:Ur,get value(){return e(ee)},set value(r){t(ee,s(r))}});var Ke=c(He,2);D(Ke,{id:Er,get value(){return e(Ie)},set value(r){t(Ie,s(r))}});var hr=c(Ke,2);Dr(hr,{children:(r,o)=>{Pr(r,{children:(_,q)=>{var k=wt(),Q=H(k),Me=d(Q),Qe=d(Me);{var mr=a=>{st(a,{clientId:b})};p(Qe,a=>{b&&a(mr)})}var gr=c(Qe,2);{var pr=a=>{var i=it(),g=d(i);at(g,{color:"hsla(var(--text) / .4)"}),u(i),w(()=>K(i,"href",e(T))),l(a,i)};p(gr,a=>{e(T)&&a(pr)})}u(Me);var Se=c(Me,2),Xe=d(Se),_r=d(Xe,!0);u(Xe),u(Se);var Ae=c(Se,2);{var wr=a=>{Qr(a,{get userId(){return e(Le)},get purpose(){return e(ve)},onSuccess:ur,onError:dr})};p(Ae,a=>{e(ve)&&e(Le)&&a(wr)})}var De=c(Ae,2);{var br=a=>{var i=ht(),g=H(i);et(g,{get action(){return e(F)},onSubmit:lr,children:(I,te)=>{var N=dt(),E=H(N),ae=pe(()=>e(U)||e(O));Xr(E,{typ:"email",name:"email",autocomplete:"email",get label(){return v.common.email},get placeholder(){return v.common.email},get disabled(){return e(ae)},onInput:nr,width:S,required:!0,get ref(){return e(ze)},set ref(z){t(ze,s(z))},get value(){return e($)},set value(z){t($,s(z))}});var L=c(E,2);{var y=z=>{var se=nt(),me=H(se),Te=pe(()=>e(U)||e(O));Jr(me,{name:"password",autocomplete:"current-password",get label(){return v.common.password},get placeholder(){return v.common.password},maxLength:256,get disabled(){return e(Te)},width:S,required:!0,get ref(){return e(ke)},set ref(m){t(ke,s(m))},get value(){return e(R)},set value(m){t(R,s(m))}});var We=c(me,2);{var j=m=>{var G=lt(),ie=d(G);we(ie,{invisible:!0,onclick:sr,children:(Re,A)=>{ge();var er=_e();w(()=>M(er,v.authorize.passwordForgotten)),l(Re,er)},$$slots:{default:!0}}),u(G),l(m,G)};p(We,m=>{e(fe)&&!e(U)&&m(j)})}l(z,se)};p(L,z=>{e(W)&&e(xe)!==e($)&&!e(ue)&&z(y)})}var oe=c(L,2);{var Ir=z=>{var se=rr(),me=H(se);{var Te=j=>{var m=ct(),G=d(m);we(G,{onclick:fr,children:(ie,Re)=>{ge();var A=_e();w(()=>M(A,v.authorize.passwordRequest)),l(ie,A)},$$slots:{default:!0}}),u(m),l(j,m)},We=j=>{var m=vt(),G=d(m);we(G,{type:"submit",get isLoading(){return e(V)},children:(ie,Re)=>{ge();var A=_e();w(()=>M(A,v.authorize.login)),l(ie,A)},$$slots:{default:!0}}),u(m),l(j,m)};p(me,j=>{e(ue)?j(Te):j(We,!1)})}l(z,se)};p(oe,z=>{!e(U)&&!e(O)&&z(Ir)})}l(I,N)},$$slots:{default:!0}});var X=c(g,2);{var re=I=>{var te=rr(),N=H(te);{var E=L=>{var y=ut(),oe=d(y,!0);u(y),w(()=>{K(y,"href",`/auth/v1/users/register?redirect_uri=${e(T)??""}`),M(oe,v.authorize.signUp)}),l(L,y)},ae=L=>{var y=ft(),oe=d(y,!0);u(y),w(()=>M(oe,v.authorize.signUp)),l(L,y)};p(N,L=>{e(T)?L(E):L(ae,!1)})}l(I,te)};p(X,I=>{e(Ie)&&!e(fe)&&!e(U)&&I(re)})}l(a,i)};p(De,a=>{e(O)||a(br)})}var Pe=c(De,2);{var qr=a=>{var i=mt(),g=d(i,!0);u(i),w(()=>M(g,e(h))),l(a,i)};p(Pe,a=>{e(h)&&a(qr)})}var Ye=c(Pe,2);{var $r=a=>{var i=gt(),g=d(i,!0);u(i),w(()=>M(g,v.authorize.emailSentMsg)),l(a,i)};p(Ye,a=>{e(he)&&a($r)})}var Ze=c(Ye,2);{var zr=a=>{var i=pt(),g=d(i);we(g,{onclick:()=>window.location.href="/auth/v1/account",children:(X,re)=>{ge();var I=_e("Account");l(X,I)},$$slots:{default:!0}}),u(i),l(a,i)};p(Ze,a=>{e(O)&&a(zr)})}var kr=c(Ze,2);{var yr=a=>{var i=_t(),g=d(i),X=c(d(g),2),re=d(X),I=d(re,!0);u(re),u(X),u(g);var te=c(g,2);Wr(te,17,()=>e(ce),N=>N.id,(N,E)=>{var ae=pe(()=>`Login: ${e(E).name}`);rt(N,{get ariaLabel(){return e(ae)},get provider(){return e(E)},onclick:cr})}),u(i),w(()=>M(I,v.authorize.orLoginWith)),l(a,i)};p(kr,a=>{!e(O)&&e(ce)&&a(yr)})}u(Q);var Je=c(Q,2);Zr(Je,{absolute:!0});var xr=c(Je,2);Ar(xr,{absolute:!0}),w(()=>M(_r,e(ne)||b)),l(_,k)},$$slots:{default:!0}})},$$slots:{default:!0}}),l(P,Fe),Sr()}export{qt as component};
