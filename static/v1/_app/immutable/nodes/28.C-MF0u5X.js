import"../chunks/disclose-version.BDr9Qe-U.js";import{p as le,i as p,ao as ce,f as R,a as de,h as c,s as r,c as a,g as t,r as s,aq as $,t as ve}from"../chunks/index-client.DAoU_hDn.js";import{s as z}from"../chunks/render.mNhspeV3.js";import{i as _}from"../chunks/if.BANCODOf.js";import{a as n,t as I,d as y}from"../chunks/template.DcxtE4ym.js";import{p as m}from"../chunks/proxy.D3ASEzk3.js";import{g as fe}from"../chunks/helpers.mrWtKrwW.js";import{B as A}from"../chunks/Button.CKHLXer8.js";import{c as ue,a as K,I as Q}from"../chunks/Input.C04-Kl2S.js";import{n as S,o as ge}from"../chunks/helpers.BV-akmwW.js";import{C as V}from"../chunks/CheckIcon.CrU43zqd.js";import{c as pe}from"../chunks/dataFetching.dLYaql-r.js";import{M as me}from"../chunks/Main.B9oV9Is2.js";import{C as he}from"../chunks/ContentCenter.DlYnOTAE.js";var $e=I("<br>-> enable idp registration:<br> <code>chrome://flags/#fedcm-idp-registration</code>",1),Ie=I('<p><!></p> <p><!> <!> <!></p> <div class="row svelte-wuqbvo"><b>Logged In:</b> <div class="check svelte-wuqbvo"><!></div></div>',1),be=I('<div class="flex-col"><h1>FedCM Testing</h1> <div class="row svelte-wuqbvo"><div><b>FedCM supported:</b></div> <div class="check svelte-wuqbvo"><!></div></div> <!> <!></div>'),we=I('<div class="row svelte-wuqbvo"><b>Credential Type:</b> <span> </span></div> <div class="token svelte-wuqbvo"> </div>',1),Ce=I("<!> <!>",1);function ye(W,X){le(X,!0);let T=p(""),b=p(!1),U=p(!1),M=p(""),x=p(""),l=m({clientId:"fedcm",configUrl:"any"}),f=p(m({}));const Y=ue().shape({clientId:K().required("Client ID is required").trim().matches(S,"Must be URL safe"),configUrl:K().nullable().trim().matches(S,"Must be URL safe")});ce(async()=>{if(c(T,`${window.location.origin}/auth/v1/fed_cm/config`),l.clientId=`${window.location.origin}/auth/v1/fed_cm/client_config`,(await pe()).ok?(console.log("FedCM status is: logged-in"),c(U,!0)):console.log("FedCM status is: logged-out"),window.IdentityProvider&&IdentityProvider.register!=null)console.log("FedCM is supported"),c(b,!0);else{console.error("FedCM is not supported");return}});async function Z(){if(!await k())return;let i=l.configUrl||void 0,u=l.clientId;console.log("using credentials get values: configUrl: "+i+" / clientId: "+u);try{let o=await navigator.credentials.get({identity:{mode:"button",providers:[{configURL:i,clientId:u,nonce:fe(48)}]}});console.log(o),c(x,m(o.type)),c(M,m(o.token)),c(U,!0)}catch(o){console.error("FedCM credentials error: "+o)}}function H(){IdentityProvider.register(t(T))}async function k(){try{return await Y.validate(l,{abortEarly:!1}),c(f,m({})),!0}catch(i){return c(f,m(ge(i))),!1}}var B=Ce(),D=R(B);me(D,{children:(i,u)=>{he(i,{children:(o,q)=>{var h=be(),g=r(a(h),2),w=r(a(g),2),re=a(w);V(re,{get check(){return t(b)}}),s(w),s(g);var E=r(g,2);{var te=d=>{var C=$e();$(4),n(d,C)};_(E,d=>{t(b)||d(te)})}var oe=r(E,2);{var ie=d=>{var C=Ie(),F=R(C),ae=a(F);A(ae,{level:3,$$events:{click:H},children:(e,P)=>{$();var v=y("Register IdP");n(e,v)},$$slots:{default:!0}}),s(F);var L=r(F,2),N=a(L);Q(N,{autocomplete:"off",placeholder:"Client Id",get value(){return l.clientId},set value(e){l.clientId=e},get error(){return t(f).clientId},set error(e){t(f).clientId=e},$$events:{input:k},children:(e,P)=>{$();var v=y("CLIENT ID");n(e,v)},$$slots:{default:!0}});var G=r(N,2);Q(G,{autocomplete:"off",placeholder:"Config URL",get value(){return l.configUrl},set value(e){l.configUrl=e},get error(){return t(f).configUrl},set error(e){t(f).configUrl=e},$$events:{input:k},children:(e,P)=>{$();var v=y("CONFIG URL");n(e,v)},$$slots:{default:!0}});var se=r(G,2);A(se,{$$events:{click:Z},children:(e,P)=>{$();var v=y("Login");n(e,v)},$$slots:{default:!0}}),s(L);var O=r(L,2),j=r(a(O),2),ne=a(j);V(ne,{get check(){return t(U)}}),s(j),s(O),n(d,C)};_(oe,d=>{t(b)&&d(ie)})}s(h),n(o,h)},$$slots:{default:!0}})},$$slots:{default:!0}});var J=r(D,2);{var ee=i=>{var u=we(),o=R(u),q=r(a(o),2),h=a(q,!0);s(q),s(o);var g=r(o,2),w=a(g,!0);s(g),ve(()=>{z(h,t(x)),z(w,t(M))}),n(i,u)};_(J,i=>{t(M)&&i(ee)})}n(W,B),de()}export{ye as component};
