import{S as p,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function f(o){const r="https://pixabay.com",n="/api/",s=new URLSearchParams({key:"43196488-b1a28e2a6e2ea3f6c7718f6c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${n}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const h=document.querySelector(".gallery"),d=new p(".gallery a",{captionsData:"alt"});function g(o){const r=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:i,comments:u,downloads:m})=>`<li class="photos-list-item">
      <a class="photos-list-link" href="${s}">
        <img class="photo" src="${n}" alt="${e}"/>
      </a>
      <ul class="photo-information-container">
        <li class="item-photo-information-container">
          <p><span class="accent">Likes</span></br>${t}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Views</span></br>${i}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Comments</span></br>${u}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Downloads</span></br>${m}</p>
        </li>
      </ul>
    </li>`).join("");h.insertAdjacentHTML("beforeend",r),d.refresh()}let a;const y=document.querySelector(".gallery"),L=document.querySelector(".form");document.querySelector(".button");const l=document.querySelector(".loader");function b(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}L.addEventListener("submit",o=>{if(o.preventDefault(),y.innerHTML="",a=o.target.elements.query.value.trim(),b(),a===""){console.log("Please fill in the field for search!");return}f(a).then(r=>{r.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}),g(r.hits),o.target.reset()}).catch(r=>{console.log(r),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).finally(()=>q())});
//# sourceMappingURL=commonHelpers.js.map
