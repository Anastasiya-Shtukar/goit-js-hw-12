import{S as m,i as f,a as g}from"./assets/vendor-D73Uttp0.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const w=document.querySelector(".btn-search"),y=document.querySelector(".search-images-input"),l=document.querySelector(".gallery"),b=document.querySelector(".search-images"),$=document.querySelector(".btn-load-more"),u=document.getElementById("btn-load-more-div");let h;w.addEventListener("click",d=>{d.preventDefault();const c=y.value;console.log(y.value),b.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div"><span class="loader"></span></div>'),h=document.getElementById("loader-div");const n=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${c}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1});console.log(n.toString());const i=`https://pixabay.com/api/?${n}`,e=async()=>(await g.get(i)).data;(async()=>{try{const a=await e();if(console.log(a),a.hits.length===0)throw new Error("No results found");h.style.display="none";const r=a.hits.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${t.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${t.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${t.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${t.downloads}</span></p>
  </div>
</li>`).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",r),u.style.display="flex",new m(".gallery a",{captionsData:"alt",captionDelay:250})}catch(a){console.error(a),h.style.display="none",l.innerHTML="",f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}})()});let p=1;$.addEventListener("click",d=>{d.preventDefault(),l.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div-more"><span class="loader"></span></div>');const c=document.getElementById("loader-div-more"),n=y.value;p=p+1;const e=`https://pixabay.com/api/?${new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${n}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${p}`})}`,s=async()=>(await g.get(e)).data;(async()=>{try{const r=await s();if(console.log(r),r.hits.length===0)throw new Error("No results found");p*40>=r.totalHits&&(u.style.display="none",f.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}));const t=r.hits.map(o=>`<li class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img
      class="gallery-image"
      src="${o.webformatURL}"
      data-source="${o.largeImageURL}"
      alt="${o.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${o.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${o.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${o.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${o.downloads}</span></p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",t);const v=document.querySelector(".gallery-item").getBoundingClientRect(),{height:L}=v;window.scrollBy({top:L*2,behavior:"smooth"}),c.style.display="none",u.style.display="flex",new m(".gallery a",{captionsData:"alt",captionDelay:250})}catch(r){console.error(r),u.style.display="none",f.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}})()});
//# sourceMappingURL=index.js.map
