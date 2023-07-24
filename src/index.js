import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./partials/js/search";
import { createMarcup } from "./partials/js/createMarcup";
import simpleLightbox from "simplelightbox";



// const API_KEY = "38442620-7ca8a3f607a2901725289571b";

const resourses = {

    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    submit_btn: document.querySelector('.submit'),
    load_more: document.querySelector('.load-more'),
    input: document.querySelector('input')
};

const {form, gallery, submit_btn, load_more, input} = resourses;

form.addEventListener('submit', handlerFormSubmit);
load_more.addEventListener('click', handlerBtnLoadMore);

async function handlerFormSubmit(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget.elements);
    const { searchQuery } = evt.currentTarget.elements;
    fetchImages(searchQuery.value);
    clearGallery();
}

let page = 1;

async function handlerBtnLoadMore() {
    let searchValue = input.value;
    page += 1;
    await fetchImages(searchValue, page);
};

function clearGallery() {
    gallery.innerHTML = '';
  }


Notiflix.Notify.init({
    width: '360px',
    position: 'center-center',
    distance: '50px',
    opacity: 1,
    fontSize: '20px',
  });

export {gallery, load_more}
