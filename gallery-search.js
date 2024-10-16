import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as u,i as y,a as f}from"./assets/vendor-D73Uttp0.js";/* empty css                      */const w=document.querySelector(".btn-search"),g=document.querySelector(".search-images-input"),o=document.querySelector(".gallery"),$=document.querySelector(".search-images"),b=document.querySelector(".btn-load-more"),n=document.getElementById("btn-load-more-div");w.addEventListener("click",l=>{l.preventDefault();const i=g.value;console.log(g.value),$.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div"><span class="loader"></span></div>');const p=document.getElementById("loader-div"),r=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${i}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1});console.log(r.toString());const d=`https://pixabay.com/api/?${r}`,m=async()=>(await f.get(d)).data;(async()=>{try{const s=await m();if(console.log(s),s.hits.length===0)throw new Error("No results found");p.style.display="none";const h=s.hits.map(e=>`<li class="gallery-item">
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
</li>`).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",h),n.style.display="flex",new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(s){console.error(s),p.style.display="none",o.innerHTML="",y.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}})()});let c=1;b.addEventListener("click",l=>{l.preventDefault();const i=g.value;c=c+1;const r=`https://pixabay.com/api/?${new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${i}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${c}`})}`,d=async()=>(await f.get(r)).data;(async()=>{try{const a=await d();if(console.log(a),a.hits.length===0)throw new Error("No results found");c*40>=a.totalHits&&(n.style.display="none",y.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}));const s=document.getElementById("loader-div");s.style.display="none";const h=a.hits.map(t=>`<li class="gallery-item">
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
</li>`).join("");o.insertAdjacentHTML("beforeend",h);const e=document.querySelector(".gallery-item").getBoundingClientRect(),{height:v}=e;window.scrollBy({top:v*2,behavior:"smooth"}),n.style.display="flex",new u(".gallery a",{captionsData:"alt",captionDelay:250})}catch(a){console.error(a),n.style.display="none",y.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}})()});
//# sourceMappingURL=gallery-search.js.map
