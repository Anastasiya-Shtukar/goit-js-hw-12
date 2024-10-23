import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const btnSearch = document.querySelector('.btn-search');
const searchImagesInput = document.querySelector('.search-images-input');
const gallery = document.querySelector('.gallery');
const searchImages = document.querySelector('.search-images');
const btnLoadMore = document.querySelector('.btn-load-more');
const btnLoadMoreDiv = document.getElementById('btn-load-more-div');
let loader;

btnSearch.addEventListener('click', event => {
  event.preventDefault();
  const inputImagesValue = searchImagesInput.value;
  console.log(searchImagesInput.value);

  searchImages.insertAdjacentHTML(
    'afterend',
    `<div class="loader-div" id="loader-div"><span class="loader"></span></div>`
  );

  loader = document.getElementById('loader-div');

  const searchParams = new URLSearchParams({
    key: '46374353-2f98dff3c8dab99fd2b2fa1f1',
    q: `'${inputImagesValue}'`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
  });

  console.log(searchParams.toString());

  const url = `https://pixabay.com/api/?${searchParams}`;

  const fetchImages = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const doStuff = async () => {
    try {
      const imagesApi = await fetchImages();
      console.log(imagesApi);
      if (imagesApi.hits.length === 0) {
        throw new Error('No results found');
      }

      loader.style.display = 'none';

      const galleryImages = imagesApi.hits
        .map(
          image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${image.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${image.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${image.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${image.downloads}</span></p>
  </div>
</li>`
        )
        .join('');

      gallery.innerHTML = '';

      gallery.insertAdjacentHTML('beforeend', galleryImages);

      btnLoadMoreDiv.style.display = 'flex';

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    } catch (error) {
      console.error(error);
      loader.style.display = 'none';
      gallery.innerHTML = '';
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
    }
  };
  doStuff();
});

let pageMore = 1;

btnLoadMore.addEventListener('click', event => {
  event.preventDefault();

  gallery.insertAdjacentHTML(
    'afterend',
    `<div class="loader-div" id="loader-div-more"><span class="loader"></span></div>`
  );
  const loaderMore = document.getElementById('loader-div-more');

  const inputImagesValue = searchImagesInput.value;

  pageMore = pageMore + 1;

  const searchParams = new URLSearchParams({
    key: '46374353-2f98dff3c8dab99fd2b2fa1f1',
    q: `'${inputImagesValue}'`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: `${pageMore}`,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  const fetchImages = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const doStuffMore = async () => {
    try {
      const imagesApi = await fetchImages();
      console.log(imagesApi);
      if (imagesApi.hits.length === 0) {
        throw new Error('No results found');
      }

      if (pageMore * 40 >= imagesApi.totalHits) {
        btnLoadMoreDiv.style.display = 'none';
        iziToast.info({
          title: '',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topCenter',
        });
      }

      const galleryImages = imagesApi.hits
        .map(
          image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${image.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${image.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${image.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${image.downloads}</span></p>
  </div>
</li>`
        )
        .join('');

      gallery.insertAdjacentHTML('beforeend', galleryImages);

      const galleryItem = document
        .querySelector('.gallery-item')
        .getBoundingClientRect();
      const { height: cardHeight } = galleryItem;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });

      loaderMore.style.display = 'none';

      btnLoadMoreDiv.style.display = 'flex';

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    } catch (error) {
      console.error(error);

      btnLoadMoreDiv.style.display = 'none';
      iziToast.info({
        title: '',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topCenter',
      });
    }
  };
  doStuffMore();
});
