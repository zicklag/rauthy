import{C as u}from"./helpers.D3KrX4pz.js";function d(t,a){let n;return a==="json"?n={"Content-Type":"application/json",Accept:"application/json"}:n={"Content-type":"application/x-www-form-urlencoded",Accept:"application/json"},t!=="GET"&&(n["csrf-token"]=localStorage.getItem(u)),n}async function f(t,a="json",n="default"){return r("GET",t,a,n)}async function p(t,a,n="json"){return a?s("POST",t,n,a):r("POST",t,n)}async function l(t,a){return await fetch(t.action,{method:t.method,headers:{"content-type":"application/x-www-form-urlencoded"},body:a})}async function y(t,a,n="json"){return a?s("PUT",t,n,a):r("PUT",t,n)}async function w(t,a,n="json"){return a?await s("DELETE",t,n,a):await r("DELETE",t,n)}async function r(t,a,n,o){let e=await fetch(a,{method:t,headers:d(t,n),redirect:"manual",cache:o});return await i(e)}async function s(t,a,n,o){let e;n==="json"?e=JSON.stringify(o):n==="form"&&(e=h(o));let c=await fetch(a,{method:t,headers:d(t,n),redirect:"manual",body:e});return i(c)}function h(t){let a=new FormData;for(let n of Object.keys(t)){let o=t[n];typeof o=="object"?a.append(n,JSON.stringify(o)):a.append(n,t[n])}return a}async function i(t,a){t.status===401&&window.location.reload();let n={body:void 0,text:void 0,error:void 0,status:t.status,headers:t.headers};return t.ok?t.headers.get("content-type")==="application/json"?n.body=await t.json():n.text=await t.text():t.status!==405&&(n.error=await t.json()),n}async function m(t,a){return await t.json()}async function j(t,a,n,o){const e=new FormData;e.append(o,n);const c=await fetch(a,{method:t,headers:{"csrf-token":localStorage.getItem(u)||""},body:e});return i(c)}export{l as a,p as b,w as c,y as d,m as e,f,j as u};
