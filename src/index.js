import axios from "axios";
import Notiflix from 'notiflix';
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./partials/js/search";
import {createMarcup} from "./partials/js/createMarcup"
import simpleLightbox from "simplelightbox";
import { resourses } from "./partials/resourses";




const {form, gallery, submit_btn, load_more,} = resourses;
load_more.style.display = 'none';

form.addEventListener('submit', handlerFormSubmit);
load_more.addEventListener('click', handlerBtnLoadMore);

let page;

const lightBox = new simpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: `alt`,
});

Notiflix.Notify.init({
  width: '360px',
  position: 'center-center',
  distance: '50px',
  opacity: 1,
  fontSize: '20px',
});

async function handlerFormSubmit(evt) {
  // try {
    evt.preventDefault();
    load_more.style.display = 'none';
    window.scroll(0, 0);
    page = 1;

    const searchValue = form.searchQuery.value.split(' ').join('+');

    // console.log(searchValue);
    fetchImages(searchValue)
    .then(data => {
      if (data.total === 0) {
        Notiflix.Notify.failure("Sorry, there are no images. Please try again!")
      } 

      gallery.innerHTML = createMarcup(data.hits);
      lightBox.refresh();
      load_more.style.display = 'block';
    })
    .catch((err) => {
      console.log(err);
    })
    
   

  }
  

async function handlerBtnLoadMore() {
  const searchValue = form.searchQuery.value.split(' ').join('+');
    page += 1;

    fetchImages(searchValue, page)
    .then(data => {
      console.log(data);
      gallery.insertAdjacentHTML('beforeend', createMarcup(data.hits));
      lightBox.refresh();
      if (page >= 13) {
        load_more.style.display = 'none';
      }
    })
    .catch((error) => {
      console.log(error);
    })
 
    

};



