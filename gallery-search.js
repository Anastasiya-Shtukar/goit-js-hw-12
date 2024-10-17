import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as g,i as d,a as u}from"./assets/vendor-D73Uttp0.js";/* empty css                      */const b=document.querySelector(".btn-search"),p=document.querySelector(".search-images-input"),t=document.querySelector(".gallery"),w=document.querySelector(".search-images"),L=document.querySelector(".btn-load-more"),o=document.getElementById("btn-load-more-div");let h,i;b.addEventListener("click",n=>{n.preventDefault();const c=p.value;console.log(p.value),w.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div"><span class="loader"></span></div>'),i=document.getElementById("loader-div");const s=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${c}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1});console.log(s.toString());const y=`https://pixabay.com/api/?${s}`,l=async()=>(await u.get(y)).data;(async()=>{try{const a=await l();if(console.log(a),a.hits.length===0)throw new Error("No results found");i.style.display="none",h=a.hits.map(e=>`<li class="gallery-item">
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
</li>`).join(""),t.innerHTML="",t.insertAdjacentHTML("beforeend",h),o.style.display="flex",new g(".gallery a",{captionsData:"alt",captionDelay:250})}catch(a){console.error(a),i.style.display="none",t.innerHTML="",d.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}})()});let r=1;L.addEventListener("click",n=>{n.preventDefault(),t.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div-more"><span class="loader"></span></div>');const c=document.getElementById("loader-div-more"),s=p.value;r=r+1;const l=`https://pixabay.com/api/?${new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${s}'`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${r}`})}`,m=async()=>(await u.get(l)).data;(async()=>{try{const e=await m();if(console.log(e),e.hits.length===0)throw new Error("No results found");r*40>=e.totalHits&&(o.style.display="none",d.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})),t.insertAdjacentHTML("beforeend",h);const f=document.querySelector(".gallery-item").getBoundingClientRect(),{height:v}=f;window.scrollBy({top:v*2,behavior:"smooth"}),c.style.display="none",o.style.display="flex",new g(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){console.error(e),o.style.display="none",d.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}})()});
//# sourceMappingURL=gallery-search.js.map
