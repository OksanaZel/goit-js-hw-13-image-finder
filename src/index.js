import './css/common.css';
// import './js/fetch-countries.js';
import imgTemplate from './template/render-image-tpl'

const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryList: document.querySelector('.gallery')
}

console.log(refs.searchForm);
console.log(refs.galleryList);

//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

const API_KEY = '21672649-f94e47de3526d257f0e860889';
const BASE_URL = 'https://pixabay.com/api';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

let query = '';

refs.searchForm.addEventListener('submit', searchImg);

function searchImg(e){
    e.preventDefault();
    query = e.currentTarget.elements.query.value;
    console.log(query);

    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12&key=${API_KEY}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const markup = imgTemplate(data.hits);
            refs.galleryList.insertAdjacentHTML('beforeend', markup);

        })
        .catch(err => console.log(err));

}


