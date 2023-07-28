import axios from "axios";
import { gallery, load_more } from "../../index";
import { createMarcup } from "./createMarcup";

const BASE_URL = 'https://pixabay.com/api/'



async function fetchImages(searchValue, page=1) {
    const options = new URLSearchParams({
        q: searchValue,
        key: '38442620-7ca8a3f607a2901725289571b',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '40',
        page: `${page}`,
    });

      const response = await axios.get(`${BASE_URL}?${options}`);
      console.log(response.data);
   
    
    // console.log(response.data);


    // if (response.status === 200 && response.data.hits.length !== 0) {
    //     load_more.hidden = false;
    //     load_more.style.display = 'block';
    //   }
    //   if (response.data.hits.length === 0) {
    //     load_more.style.display = 'none';
    //     Notiflix.Notify.failure('Sorry, please try again.');
    //   }
    //   if (response.data.hits.length * page > response.data.totalHits) {
    //     Notiflix.Notify.failure("We're sorry, but we can`t find results.");
    //     load_more.hidden = true;
    //   }
    //   gallery.insertAdjacentHTML('beforeend', createMarcup(response.data.hits));
    //   new SimpleLightbox('.gallery a ', { captionDelay: 250 });
};

export {fetchImages};