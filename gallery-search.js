import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as d,i as h,a as y}from"./assets/vendor-D73Uttp0.js";/* empty css                      */const g=document.querySelector(".btn-search"),o=document.querySelector(".search-images-input"),r=document.querySelector(".gallery"),v=document.querySelector(".search-images"),b=document.querySelector(".btn-load-more"),m=document.getElementById("btn-load-more-div");g.addEventListener("click",f=>{f.preventDefault();const l=o.value;console.log(o.value),v.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div"><span class="loader"></span></div>');const n=document.getElementById("loader-div");let c=1;const i=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${l}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${c}`});console.log(i.toString());const u=`https://pixabay.com/api/?${i}`,L=async()=>(await y.get(u)).data;(async()=>{try{const e=await L();if(console.log(e),e.hits.length===0)throw new Error("No results found");n.style.display="none";const p=e.hits.map(a=>`<li class="gallery-item">
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
</li>`).join("");r.innerHTML="",r.insertAdjacentHTML("beforeend",p),m.style.display="flex",new d(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){console.error(e),n.style.display="none",r.innerHTML="",h.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}})(),b.addEventListener("click",e=>{e.preventDefault(),c=c+1;const a=`https://pixabay.com/api/?${new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${l}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${c}`})}`,w=async()=>(await y.get(a)).data;(async()=>{try{const t=await w();if(console.log(t),t.hits.length===0)throw new Error("No results found");n.style.display="none";const $=t.hits.map(s=>`<li class="gallery-item">
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
</li>`).join("");r.insertAdjacentHTML("beforeend",$),m.style.display="flex",new d(".gallery a",{captionsData:"alt",captionDelay:250})}catch(t){console.error(t),n.style.display="none",r.innerHTML="",h.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}})(),g.addEventListener("click",()=>{c=1,r.innerHTML=""})}),o.textContent=""});
//# sourceMappingURL=gallery-search.js.map
