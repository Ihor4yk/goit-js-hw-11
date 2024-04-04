import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from "./js/pixabay-api.js"
import { queryTemplate } from "./js/render-functions.js";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loading = document.querySelector('.loading');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  loading.classList.add('loader');
  const query = event.target.elements.query.value.trim();
  if (query === "") {
    iziToast.error({
      backgroundColor: 'lightred',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
      message: 'Please, fill the field!',
    });
    loading.classList.remove('loader');
    return;
  }

  getImages(query)
    .then(data => {
      if (data.hits && data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'red',
          progressBar: false,
          close: false,
          position: 'topRight',
        })
      }
      const markup = queryTemplate(data.hits);
      gallery.innerHTML = markup;
      const lightbox = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
      });
      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error occurred while fetching images:', error);
      iziToast.error({
        message: 'Sorry, an error occurred while fetching images. Please try again!',
        backgroundColor: 'red',
        icon: false,
        progressBar: false,
        close: false,
        position: 'topRight',
      });
    })
    .finally(() => loading.classList.remove("loader"));
  event.target.reset();
})