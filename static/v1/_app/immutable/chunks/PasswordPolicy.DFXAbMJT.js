import"./disclose-version.BDr9Qe-U.js";import{p as Y,a3 as Z,a4 as D,a as H,j as J,a7 as o,a9 as t,a5 as u,a6 as y,g as w}from"./index-client.wsxBsMrC.js";import{s as v}from"./render.CGk_31K2.js";import{i as g}from"./if.CdP3FEr9.js";import{c as K,a as f,t as $}from"./template.CyQ6qVeq.js";import{t as b}from"./helpers.DikdX20z.js";import{p as q}from"./proxy.MUfQDWlv.js";import{p as z}from"./props.byAfpN0R.js";import{r as L}from"./legacy-client.Dm1n63jC.js";import{u as O}from"./i18n.svelte.B_PCuqyN.js";var ii=$('<li class="li svelte-1f8mmbi"> </li>'),li=$('<li class="li svelte-1f8mmbi"> </li>'),ei=$('<li class="li svelte-1f8mmbi"> </li>'),si=$('<li class="li svelte-1f8mmbi"> </li>'),ai=$('<li class="li svelte-1f8mmbi"> </li>'),ri=$('<div class="policyContainer svelte-1f8mmbi"><span style="margin-left: 20px"><b> </b></span> <ul class="svelte-1f8mmbi"><li class="li svelte-1f8mmbi"> </li> <li class="li svelte-1f8mmbi"> </li> <!> <!> <!> <!> <!></ul></div>');function ci(B,P){Y(P,!0);let i=z(P,"policy",19,()=>({})),F=z(P,"accepted",15,!1),m=O(),_=Z(q([!1,!1,!1,!1,!1,!1]));const G=d=>{if(!i())return!1;let r=[!1,!1,!1,!1,!1,!1],c=!1;d.length<i().length_min&&(r[0]=!0,c=!0),d.length>i().length_max&&(r[1]=!0,c=!0);let s=[0,0,0,0];for(let E=0;E<d.length;E++){let n=d.charCodeAt(E);if(n>=97&&n<=122){s[0]=s[0]+1;continue}if(n>=65&&n<=90){s[1]=s[1]+1;continue}if(n>=48&&n<=57){s[2]=s[2]+1;continue}s[3]=s[3]+1}i().include_lower_case!==-1&&i().include_lower_case>s[0]&&(r[2]=!0,c=!0),i().include_upper_case!==-1&&i().include_upper_case>s[1]&&(r[3]=!0,c=!0),i().include_digits!==-1&&i().include_digits>s[2]&&(r[4]=!0,c=!0),i().include_special!==-1&&i().include_special>s[3]&&(r[5]=!0,c=!0),J(_,q(r)),F(!c)};L(()=>{P.password&&G(P.password)});var x=K(),I=D(x);{var N=d=>{var r=ri(),c=o(r),s=o(c),E=o(s,!0);t(s),t(c);var n=u(c,2),M=o(n),Q=o(M);t(M);var h=u(M,2),R=o(h);t(h);var C=u(h,2);{var S=e=>{var l=ii(),p=o(l);t(l),y(()=>{var a;b(l,"policyErr",!!w(_)[2]),v(p,`${m.passwordPolicy.lowercaseMin??""}
                    ${(((a=i())==null?void 0:a.include_lower_case)||0)??""}`)}),f(e,l)};g(C,e=>{i().include_lower_case!==-1&&e(S)})}var j=u(C,2);{var T=e=>{var l=li(),p=o(l);t(l),y(()=>{var a;b(l,"policyErr",!!w(_)[3]),v(p,`${m.passwordPolicy.uppercaseMin??""}
                    ${(((a=i())==null?void 0:a.include_upper_case)||0)??""}`)}),f(e,l)};g(j,e=>{i().include_upper_case!==-1&&e(T)})}var A=u(j,2);{var U=e=>{var l=ei(),p=o(l);t(l),y(()=>{var a;b(l,"policyErr",!!w(_)[4]),v(p,`${m.passwordPolicy.digitsMin??""}
                    ${(((a=i())==null?void 0:a.include_digits)||0)??""}`)}),f(e,l)};g(A,e=>{i().include_digits!==-1&&e(U)})}var k=u(A,2);{var V=e=>{var l=si(),p=o(l);t(l),y(()=>{var a;b(l,"policyErr",!!w(_)[5]),v(p,`${m.passwordPolicy.specialMin??""}
                    ${(((a=i())==null?void 0:a.include_special)||0)??""}`)}),f(e,l)};g(k,e=>{i().include_special!==-1&&e(V)})}var W=u(k,2);{var X=e=>{var l=ai(),p=o(l);t(l),y(()=>{var a;return v(p,`${m.passwordPolicy.notRecent??""}
                    ${(((a=i())==null?void 0:a.not_recently_used)||0)??""}`)}),f(e,l)};g(W,e=>{i().not_recently_used!==-1&&e(X)})}t(n),t(r),y(()=>{var e;v(E,m.passwordPolicy.passwordPolicy),b(M,"policyErr",!!w(_)[0]),v(Q,`${m.passwordPolicy.lengthMin??""}
                ${i().length_min??""}`),b(h,"policyErr",!!w(_)[1]),v(R,`${m.passwordPolicy.lengthMax??""}
                ${(((e=i())==null?void 0:e.length_max)||0)??""}`)}),f(d,r)};g(I,d=>{i()&&d(N)})}f(B,x),H()}export{ci as P};
