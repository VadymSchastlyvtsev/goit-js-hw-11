import axios from "axios";
import { options } from "../../index";
import Notiflix from "notiflix";

const BASE_URL = 'https://pixabay.com/api/'

async function fetchImages(searchValue, page = 1) {
  const options = new URLSearchParams({
    q: searchValue,
    key: '38442620-7ca8a3f607a2901725289571b',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '40',
    page: `${page}`,
  });

return fetch(`${BASE_URL}?${options}`)
.then(response => {
  console.log(response);
  return response.json();
})
.then(data => {
  
  console.log(data.hits);
})



//     const {data} = await axios.get(`${BASE_URL}?${options}`);
// return data;

// return data;
    // data.then(response => {
    //   if (!response.ok) {
    //     gallery.innerHTML = ' ';
    //     Notiflix.Notify.failure(`Ошибка: ${response.status}`);
    //     throw new Error(response.status);
    //   }
    //   console.log('object');
    //   console.log(response);
    //   return response.json();
    // })
    // return data;
  
}



export {fetchImages};