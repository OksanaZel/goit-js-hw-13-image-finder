import './css/common.css';
import ImagesApiService from './js/api-service';
import getRefs from './js/get-refs';
import imgTemplate from './template/render-image-tpl'


const refs = getRefs();

//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

// const API_KEY = '21672649-f94e47de3526d257f0e860889';
// const BASE_URL = 'https://pixabay.com/api';

// let searchQuery = '';
// let page = 1;
// let perPage = 12;

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearchImg);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearchImg(e){
  e.preventDefault();
  imagesApiService.query = e.currentTarget.elements.query.value;
  imagesApiService.fetchImages();
}

function onLoadMore() {
  imagesApiService.fetchImages();
  
}


