import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from "./js/pixabay-api.js"
import { queryTemplate } from "./js/render-functions.js";

let query;
const galleryList = document.querySelector(".gallery");
const form = document.querySelector(".form");
const button = document.querySelector(".button")
const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.remove("is-hidden");
}
function hideLoader() {
  loader.classList.add("is-hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  galleryList.innerHTML = "";
  query = event.target.elements.query.value.trim();
  showLoader();
  
  if (query === "") {
    console.log("Please fill in the field for search!");
    return
  }
  
  getImages(query).then(data => {
    if (data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        backgroundColor: "red",
        messageColor: "white",
        position: 'topRight'
      })
    }
    queryTemplate(data.hits);
    event.target.reset();
    return
  })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please, try again!`,
        position: 'topRight'
      })
    }).finally(() => hideLoader());
})