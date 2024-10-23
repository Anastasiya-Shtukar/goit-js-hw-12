import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as u,i as h,a as f}from"./assets/vendor-D73Uttp0.js";/* empty css                      */const L=document.querySelector(".btn-search"),y=document.querySelector(".search-images-input"),r=document.querySelector(".gallery"),$=document.querySelector(".search-images"),b=document.querySelector(".btn-load-more"),n=document.getElementById("btn-load-more-div");let d;L.addEventListener("click",l=>{l.preventDefault();const i=y.value;console.log(y.value),$.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div"><span class="loader"></span></div>'),d=document.getElementById("loader-div");const o=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${i}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1});console.log(o.toString());const m=`https://pixabay.com/api/?${o}`,p=async()=>(await f.get(m)).data;(async()=>{try{const t=await p();if(console.log(t),t.hits.length===0)throw new Error("No results found");d.style.display="none";const a=t.hits.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${e.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${e.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${e.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${e.downloads}</span></p>
  </div>
</li>`).join("");r.innerHTML="",r.insertAdjacentHTML("beforeend",a),n.style.display="flex",new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(t){console.error(t),d.style.display="none",r.innerHTML="",h.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}})()});let c=1;b.addEventListener("click",l=>{l.preventDefault(),r.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div-more"><span class="loader"></span></div>');const i=document.getElementById("loader-div-more"),o=y.value;c=c+1;const p=`https://pixabay.com/api/?${new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${o}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${c}`})}`,g=async()=>(await f.get(p)).data;(async()=>{try{const a=await g();if(console.log(a),a.hits.length===0)throw new Error("No results found");c*40>=a.totalHits&&(n.style.display="none",h.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}));const e=a.hits.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
      class="gallery-image"
      src="${s.webformatURL}"
      data-source="${s.largeImageURL}"
      alt="${s.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${s.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${s.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${s.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${s.downloads}</span></p>
  </div>
</li>`).join("");r.insertAdjacentHTML("beforeend",e);const v=document.querySelector(".gallery-item").getBoundingClientRect(),{height:w}=v;window.scrollBy({top:w*2,behavior:"smooth"}),i.style.display="none",n.style.display="flex",new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(a){console.error(a),n.style.display="none",h.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}})()});
//# sourceMappingURL=gallery-search.js.map
