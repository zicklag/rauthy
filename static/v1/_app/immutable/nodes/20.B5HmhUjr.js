import"../chunks/disclose-version.BDr9Qe-U.js";import"../chunks/legacy.DvmPJwhI.js";import{p as U,o as y,a6 as J,m as s,l as e,f as G,ar as W,t as L,s as T,a as V,ab as ee,c as z,r as P,ap as ve}from"../chunks/index-client.Ds4XgiuL.js";import{s as O}from"../chunks/render.Bq2-eTRf.js";import{i as x}from"../chunks/if.Du7BDhAX.js";import{e as pe}from"../chunks/each.MnMr4iw5.js";import{d as K,a as l,t as S,e as oe}from"../chunks/template.DXIK6jcH.js";import{a as ue}from"../chunks/index.L0FyJ7Re.js";import{p as n}from"../chunks/proxy.CB6KOiNf.js";import{u as X}from"../chunks/i18n_admin.svelte.B9VY-ZfA.js";import{O as fe}from"../chunks/OrderSearchBar.LuMLhfeB.js";import{d as ge,c as he,b as $e,f as ne}from"../chunks/fetch.DFmyLr06.js";import{C as be}from"../chunks/ContentAdmin.COLOikfe.js";import{N as ye}from"../chunks/NavButtonTile.ClPY4kTr.js";import{B as Se}from"../chunks/ButtonAddModal.mDcrP-vd.js";import{N as we}from"../chunks/NavSub.9PtxGldh.js";import{u as _e}from"../chunks/param.svelte.D0F_0zrI.js";import{Q as Y}from"../chunks/helpers.BTvs6bnN.js";import{B as se}from"../chunks/Button.nDjAKZm4.js";import{I as ie}from"../chunks/pow.C3ENfqN0.js";import{I as Ie}from"../chunks/IconCheck.CzEyprnz.js";import{u as ae}from"../chunks/i18n.svelte.CgUwCKxn.js";import{F as ce}from"../chunks/Form.JHjwURkX.js";import{L as Te}from"../chunks/LabeledValue.CfdJ335t.js";import{S as me}from"../chunks/SelectList.CYvFRDSp.js";import{e as le}from"../chunks/patterns.D9HtGhEC.js";import{T as Me}from"../chunks/Tabs.Cqg7xZCh.js";var Ce=S("<p> </p>"),Ne=S("<p> </p> <p> </p> <!> <!>",1),qe=S('<div class="err"> </div>'),Ae=S('<div class="flex gap-05"><!> <!></div> <!>',1),De=S("<!> <!> <!> <!>",1);function Oe(R,r){U(r,!0);let B=ae(),g=X(),p=y(""),f=y(!1),w=ee(()=>Y(r.scope.name)),v=y(n(r.scope.name)),u=y(void 0),M=y(void 0);J(()=>{r.scope.id&&s(v,n(r.scope.name))}),J(()=>{Y(r.scope.name)?(s(u,void 0),s(M,void 0)):(s(u,n(r.attrs.map(i=>{var t;return{name:i.name,selected:((t=r.scope.attr_include_access)==null?void 0:t.includes(i.name))||!1}}).toSorted((i,t)=>i.name.localeCompare(t.name)))),s(M,n(r.attrs.map(i=>{var t;return{name:i.name,selected:((t=r.scope.attr_include_id)==null?void 0:t.includes(i.name))||!1}}).toSorted((i,t)=>i.name.localeCompare(t.name)))))});async function d(i,t){if(s(p,""),Y(e(v))||r.scopes.find(_=>_.name===e(v))){s(p,n(g.common.nameExistsAlready));return}let h={scope:e(v)};if(e(u)){let _=e(u).filter(o=>o.selected).map(o=>o.name);_.length>0&&(h.attr_include_access=_)}if(e(M)){let _=e(M).filter(o=>o.selected).map(o=>o.name);_.length>0&&(h.attr_include_id=_)}let N=await ge(i.action,h);N.error?s(p,n(N.error.message)):(s(f,!0),r.onSave(),setTimeout(()=>{s(f,!1)},2e3))}var C=ee(()=>`/auth/v1/scopes/${r.scope.id}`);ce(R,{get action(){return e(C)},onSubmit:d,children:(i,t)=>{var h=De(),N=G(h);Te(N,{label:"ID",mono:!0,children:(a,c)=>{W();var m=K();L(()=>O(m,r.scope.id)),l(a,m)},$$slots:{default:!0}});var _=T(N,2);ie(_,{autocomplete:"off",get label(){return g.scopes.name},get placeholder(){return g.scopes.name},get disabled(){return e(w)},width:"14.5rem",required:!0,pattern:le,get value(){return e(v)},set value(a){s(v,n(a))}});var o=T(_,2);{var E=a=>{var c=Ce(),m=z(c,!0);P(c),L(()=>O(m,g.scopes.defaultNoMod)),l(a,c)},D=a=>{var c=Ne(),m=G(c),I=z(m,!0);P(m);var b=T(m,2),F=z(b,!0);P(b);var A=T(b,2);{var j=q=>{me(q,{get items(){return e(u)},set items(H){s(u,n(H))},children:(H,re)=>{W();var Q=K("Access Token Mappings");l(H,Q)},$$slots:{default:!0}})};x(A,q=>{e(u)&&q(j)})}var $=T(A,2);{var k=q=>{me(q,{get items(){return e(M)},set items(H){s(M,n(H))},children:(H,re)=>{W();var Q=K("Id Token Mappings");l(H,Q)},$$slots:{default:!0}})};x($,q=>{e(M)&&q(k)})}L(()=>{O(I,g.scopes.mapping1),O(F,g.scopes.mapping2)}),l(a,c)};x(o,a=>{e(w)?a(E):a(D,!1)})}var Z=T(o,2);{var te=a=>{var c=Ae(),m=G(c),I=z(m);se(I,{type:"submit",children:($,k)=>{W();var q=K();L(()=>O(q,B.common.save)),l($,q)},$$slots:{default:!0}});var b=T(I,2);{var F=$=>{Ie($,{})};x(b,$=>{e(f)&&$(F)})}P(m);var A=T(m,2);{var j=$=>{var k=qe(),q=z(k,!0);P(k),L(()=>O(q,e(p))),l($,k)};x(A,$=>{e(p)&&$(j)})}l(a,c)};x(Z,a=>{e(w)||a(te)})}l(i,h)},$$slots:{default:!0}}),V()}var xe=S("<p> </p>"),Ee=S('<div class="err"> </div>'),Fe=S("<p> </p> <!> <!>",1);function ke(R,r){U(r,!0);let B=ae(),g=X(),p=y("");async function f(){s(p,"");let d=await he(`/auth/v1/scopes/${r.scope.id}`);d.error?s(p,n(d.error.message)):r.onSave()}var w=oe(),v=G(w);{var u=d=>{var C=xe(),i=z(C,!0);P(C),L(()=>O(i,g.scopes.deleteDefault)),l(d,C)},M=d=>{var C=Fe(),i=G(C),t=z(i,!0);P(i);var h=T(i,2);se(h,{level:-1,onclick:f,children:(o,E)=>{W();var D=K();L(()=>O(D,B.common.delete)),l(o,D)},$$slots:{default:!0}});var N=T(h,2);{var _=o=>{var E=Ee(),D=z(E,!0);P(E),L(()=>O(D,e(p))),l(o,E)};x(N,o=>{e(p)&&o(_)})}L(()=>O(t,g.scopes.delete1)),l(d,C)};x(v,d=>{Y(r.scope.name)?d(u):d(M,!1)})}l(R,w),V()}var Ge=S('<div class="flex"><!></div> <!>',1);function Le(R,r){U(r,!0);let B=ae(),g=X();const p=[g.nav.config,B.common.delete];let f=y(n(p[0])),w=y(void 0);J(()=>{r.scope.id&&requestAnimationFrame(()=>{var t;(t=e(w))==null||t()})});var v=Ge(),u=G(v),M=z(u);Me(M,{tabs:p,get selected(){return e(f)},set selected(t){s(f,n(t))},get focusFirst(){return e(w)},set focusFirst(t){s(w,n(t))}}),P(u);var d=T(u,2);{var C=t=>{Oe(t,{get attrs(){return r.attrs},get scope(){return r.scope},get scopes(){return r.scopes},get onSave(){return r.onSave}})},i=t=>{var h=oe(),N=G(h);{var _=o=>{ke(o,{get scope(){return r.scope},get onSave(){return r.onSave}})};x(N,o=>{e(f)===B.common.delete&&o(_)},!0)}l(t,h)};x(d,t=>{e(f)===g.nav.config?t(C):t(i,!1)})}l(R,v),V()}var ze=S('<div class="err"> </div>'),Pe=S("<!> <!> <!>",1),Re=S('<div class="container svelte-s1196z"><!></div>');function Be(R,r){U(r,!0);let B=ae(),g=X(),p=y(void 0),f=y(""),w=y("");J(()=>{requestAnimationFrame(()=>{var d;(d=e(p))==null||d.focus()})});async function v(d,C){var h;if(r.scopes.find(N=>N.name===e(w))){s(f,n(g.common.nameExistsAlready));return}s(f,"");let i={scope:e(w)},t=await $e(d.action,i);t.body?r.onSave(t.body.id):s(f,n(((h=t.error)==null?void 0:h.message)||"Error"))}var u=Re(),M=z(u);ce(M,{action:"/auth/v1/scopes",onSubmit:v,children:(d,C)=>{var i=Pe(),t=G(i);ie(t,{autocomplete:"off",get label(){return g.scopes.name},get placeholder(){return g.scopes.name},required:!0,pattern:le,get ref(){return e(p)},set ref(o){s(p,n(o))},get value(){return e(w)},set value(o){s(w,n(o))}});var h=T(t,2);se(h,{type:"submit",children:(o,E)=>{W();var D=K();L(()=>O(D,B.common.save)),l(o,D)},$$slots:{default:!0}});var N=T(h,2);{var _=o=>{var E=ze(),D=z(E,!0);P(E),L(()=>O(D,e(f))),l(o,E)};x(N,o=>{e(f)&&o(_)})}l(d,i)},$$slots:{default:!0}}),P(u),l(R,u),V()}var He=S('<span class="default svelte-1bjjcss"><i>default</i></span>'),je=S(" <!>",1),Qe=S("<div></div> <!>",1),We=S("<!> <!>",1),Je=S('<div class="err"> </div>'),Ke=S('<!> <div id="scopes"><!></div>',1),Ue=S("<!> <!>",1);function Ve(R,r){U(r,!0);let B=X(),g=y(void 0),p=y(""),f=_e("sid"),w=y(n([])),v=y(n([])),u=y(n([])),M=y(void 0);const d=[B.common.name,"ID"];let C=y(n(d[0])),i=y("");const t=[B.common.name,"ID"];ve(()=>{N(),h()}),J(()=>{s(M,n(e(v).find(a=>a.id===f.get())))}),J(()=>{let a=e(i).toLowerCase();a?e(C)===d[0]?s(u,n(e(v).filter(c=>{var m;return(m=c.name)==null?void 0:m.toLowerCase().includes(a)}))):e(C)===d[1]&&s(u,n(e(v).filter(c=>c.id.toLowerCase().includes(a)))):s(u,n(e(v)))});async function h(){var c;let a=await ne("/auth/v1/users/attr");a.body?s(w,n(a.body.values)):s(p,n(((c=a.error)==null?void 0:c.message)||"Error"))}async function N(){var c;let a=await ne("/auth/v1/scopes");a.body?s(v,n(a.body)):s(p,n(((c=a.error)==null?void 0:c.message)||"Error"))}function _(a,c){let m=c==="up";a===t[0]?e(v).sort((I,b)=>m?I.name.localeCompare(b.name):b.name.localeCompare(I.name)):a===t[1]&&e(v).sort((I,b)=>m?I.id.localeCompare(b.id):b.id.localeCompare(I.id))}function o(){N()}async function E(a){var c;(c=e(g))==null||c(),await N(),f.set(a)}var D=Ue(),Z=G(D);we(Z,{paddingTop:"2.1rem",buttonTilesAriaControls:"scopes",width:"min(20rem, 100dvw)",thresholdNavSub:700,buttonTiles:a=>{var c=Qe(),m=G(c);ue(m,"height",".5rem");var I=T(m,2);pe(I,17,()=>e(u),b=>b.id,(b,F)=>{var A=ee(()=>f.get()===e(F).id);ye(b,{onclick:()=>f.set(e(F).id),get selected(){return e(A)},children:(j,$)=>{W();var k=je(),q=G(k),H=T(q);{var re=Q=>{var de=He();l(Q,de)};x(H,Q=>{Y(e(F).name)&&Q(re)})}L(()=>O(q,`${e(F).name??""} `)),l(j,k)},$$slots:{default:!0}})}),l(a,c)},children:(a,c)=>{var m=We(),I=G(m),b=ee(()=>e(v).length===0?1:2);Se(I,{get level(){return e(b)},alignRight:!0,get closeModal(){return e(g)},set closeModal(A){s(g,n(A))},children:(A,j)=>{Be(A,{onSave:E,get scopes(){return e(v)}})},$$slots:{default:!0}});var F=T(I,2);fe(F,{searchOptions:d,orderOptions:t,onChangeOrder:_,searchWidth:"min(19.5rem, 100dvw - .5rem)",get searchOption(){return e(C)},set searchOption(A){s(C,n(A))},get value(){return e(i)},set value(A){s(i,n(A))}}),l(a,m)},$$slots:{buttonTiles:!0,default:!0}});var te=T(Z,2);be(te,{children:(a,c)=>{var m=Ke(),I=G(m);{var b=$=>{var k=Je(),q=z(k,!0);P(k),L(()=>O(q,e(p))),l($,k)};x(I,$=>{e(p)&&$(b)})}var F=T(I,2),A=z(F);{var j=$=>{Le($,{get attrs(){return e(w)},get scope(){return e(M)},get scopes(){return e(v)},onSave:o})};x(A,$=>{e(M)&&$(j)})}P(F),l(a,m)},$$slots:{default:!0}}),l(R,D),V()}function Xe(R){Ve(R,{})}export{Xe as component};
