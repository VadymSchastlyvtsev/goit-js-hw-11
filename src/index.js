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
    console.log(searchValue);
    // console.log(searchValue);
    const array = fetchImages(searchValue);
    console.log('1233');
    // console.log(array);
    if (array.total === 0) {
      Notiflix.Notify.failure("Sorry, there are no images. Please try again!")
    } 
    if(array.totalHits > page * 40) {
      load_more.style.display = 'block';
    }
    gallery.innerHTML = await createMarcup(array.hits);
    lightBox.refresh();
  }
  

async function handlerBtnLoadMore() {
  const searchValue = form.searchQuery.value.split(' ').join('+');
    page += 1;

    const array = fetchImages(searchValue, page);
    gallery.insertAdjacentElement('beforeend', await createMarcup(array.hits));
    lightBox.refresh();
    if (page >= 13) {
      load_more.style.display = 'none';
    }

};



