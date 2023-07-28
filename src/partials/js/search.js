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

  try {
    const {data} = await axios.get(`${BASE_URL}?${options}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}



export {fetchImages};