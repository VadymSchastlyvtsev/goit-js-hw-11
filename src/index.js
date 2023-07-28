import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./partials/js/search";
import { createMarcup } from "./partials/js/createMarcup";
import simpleLightbox from "simplelightbox";
import { resourses } from "./partials/resourses";



// const API_KEY = "38442620-7ca8a3f607a2901725289571b";
const {form, gallery, submit_btn, load_more, input} = resourses;

form.addEventListener('submit', handlerFormSubmit);
load_more.addEventListener('click', handlerBtnLoadMore);

async function handlerFormSubmit(evt) {
  try {
    evt.preventDefault();


    
    // console.log(form.elements.searchQuery.value);
    // let searchValue = form.elements.searchQuery.value.trim()
    // const searchimg = await fetchImages(searchValue);
    // gallery.innerHTML = createMarcup({hits});
    // lightbox.refresh();
    // load_more.style.display = 'none'
    // evt.currentTarget.reset();
  } catch (error) {
    Notiflix.Notify.failure('Sorry!!!')
  }
  
}

let page = 1;

async function handlerBtnLoadMore() {
    let searchValue = form.elements.searchQuery.value.trim();
    page += 1;
    await fetchImages(searchValue, page);
};

function clearGallery() {
    gallery.innerHTML = '';
  }

  const lightbox = new SimpleLightbox('.gallery a', {
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

export {gallery, load_more}
