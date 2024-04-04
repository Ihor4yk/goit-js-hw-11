import{i as n,S as p}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){const t="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"43196488-b1a28e2a6e2ea3f6c7718f6c5",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}${o}?${i}`;return fetch(e).then(r=>r.json()).catch(r=>{throw console.error("Error occurred while fetching images:",r),r})}function u(s){return s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:l})=>`<li class="photos-list-item">
      <a class="photos-list-link" href="${o}">
        <img class="photo" src="${t}" alt="${i}"/>
      </a>
      <ul class="photo-information-container">
        <li class="item-photo-information-container">
          <p><span class="accent">Likes</span></br>${e}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Views</span></br>${r}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Comments</span></br>${a}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Downloads</span></br>${l}</p>
        </li>
      </ul>
    </li>`).join("")}const m=document.querySelector(".form"),h=document.querySelector(".gallery"),c=document.querySelector(".loading");m.addEventListener("submit",s=>{s.preventDefault(),c.classList.add("loader");const t=s.target.elements.query.value.trim();if(t===""){n.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"}),c.classList.remove("loader");return}f(t).then(o=>{o.hits&&o.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",progressBar:!1,close:!1,position:"topRight"});const i=u(o.hits);h.innerHTML=i,new p(".gallery-link",{captionsData:"alt"}).refresh()}).catch(o=>{console.error("Error occurred while fetching images:",o),n.error({message:"Sorry, an error occurred while fetching images. Please try again!",backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight"})}).finally(()=>c.classList.remove("loader")),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
