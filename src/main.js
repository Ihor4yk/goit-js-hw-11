import { getImage } from "./js/pixabay-api"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.query.value.trim();

  if (inputValue !== "") {
    getImage(inputValue).then((resolve) => {
      form.reset();
    }).catch((error) => {
      console.log(error);
      iziToast.error({
        message: 'Sorry, an error occurred while loading. Please try again!',
        theme: 'dark',
        progressBarColor: '#FFFFFF',
        color: '#EF4040',
        position: 'topRight',
      });
    })
  }
})

