import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(s){const r="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"43196488-b1a28e2a6e2ea3f6c7718f6c5",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.query.value.trim();r!==""&&l(r).then(o=>{c.reset()}).catch(o=>{console.log(o),a.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
