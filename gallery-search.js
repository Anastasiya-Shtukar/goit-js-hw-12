import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as u,i as y,a as f}from"./assets/vendor-D73Uttp0.js";/* empty css                      */const v=document.querySelector(".btn-search"),g=document.querySelector(".search-images-input"),r=document.querySelector(".gallery"),w=document.querySelector(".search-images"),L=document.querySelector(".btn-load-more"),o=document.getElementById("btn-load-more-div");v.addEventListener("click",n=>{n.preventDefault();const l=g.value;console.log(g.value),w.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div"><span class="loader"></span></div>');const i=document.getElementById("loader-div"),c=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${l}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1});console.log(c.toString());const p=`https://pixabay.com/api/?${c}`,m=async()=>(await f.get(p)).data;(async()=>{try{const s=await m();if(console.log(s),s.hits.length===0)throw new Error("No results found");i.style.display="none";const d=s.hits.map(a=>`<li class="gallery-item">
  <a class="gallery-link" href="${a.largeImageURL}">
    <img
      class="gallery-image"
      src="${a.webformatURL}"
      data-source="${a.largeImageURL}"
      alt="${a.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${a.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${a.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${a.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${a.downloads}</span></p>
  </div>
</li>`).join("");r.innerHTML="",r.insertAdjacentHTML("beforeend",d),o.style.display="flex",new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(s){console.error(s),i.style.display="none",r.innerHTML="",y.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}})()});let h=1;L.addEventListener("click",n=>{n.preventDefault();const l=g.value;h=h+1;const c=`https://pixabay.com/api/?${new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${l}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${h}`})}`,p=async()=>(await f.get(c)).data;(async()=>{try{const e=await p();if(console.log(e),e.hits.length===0)throw new Error("No results found");e.hits.length>e.totalHits&&(o.style.display="none",y.info({title:"",message:"We're sorry, but you've reached the end of search results."}));const s=document.getElementById("loader-div");s.style.display="none";const d=e.hits.map(t=>`<li class="gallery-item">
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
</li>`).join("");r.insertAdjacentHTML("beforeend",d);const $=document.querySelector(".gallery-item").getBoundingClientRect();o.style.display="flex",new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){console.error(e),o.style.display="none",r.innerHTML="",y.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}})()});
//# sourceMappingURL=gallery-search.js.map
