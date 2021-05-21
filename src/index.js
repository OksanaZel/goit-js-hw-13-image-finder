import './css/common.css';
import getRefs from './js/get-refs';
// import { BASE_URL, API_KEY } from './js/constants';
import './js/apiService';
import { fetchImg } from './js/apiService';
import imgTemplate from './template/render-image-tpl'

// const refs = {
//     searchForm: document.querySelector('.search-form input'),
//     galleryList: document.querySelector('.gallery'),
//     searchForm: document.querySelector('.search-form')
// }

const refs = getRefs();

console.log(refs.searchForm);
console.log(refs.galleryList);

//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

const API_KEY = '21672649-f94e47de3526d257f0e860889';
const BASE_URL = 'https://pixabay.com/api';

let searchQuery = '';

refs.searchForm.addEventListener('submit', onSearchImg);

function onSearchImg(e){
  e.preventDefault();
  const form = e.currentTarget
    searchQuery = form.elements.query.value;
  console.log(searchQuery);
  
  // fetchImg().then(hits => {
  //   const markup = imgTemplate(hits);
  //   refs.galleryList.insertAdjacentHTML('beforeend', markup);
  // }).catch(err => console.log(err));

    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const markup = imgTemplate(data.hits);
            refs.galleryList.insertAdjacentHTML('beforeend', markup);

        })
      .catch(err => console.log(err)).finally(() => {
        form.reset();
        });

}

// function renderImg() {
//   const markup = imgTemplate(data.hits);
//   refs.galleryList.insertAdjacentHTML('beforeend', markup);
// }


