if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>t(e,r),l={module:{uri:r},exports:o,require:f};i[r]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(n(...e),o)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"8441fe8b1f06b908b3b98e2798b97a5f"},{url:"main.js",revision:"bf534b4fdea3f23968e824f34d38ea4e"},{url:"main.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
