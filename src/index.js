import './css/common.css';
import ImagesApiService from './js/api-service';
import getRefs from './js/get-refs';
import imgTemplate from './template/render-image-tpl';
import { onShowNotification } from './js/notification';
import { scroll } from './js/scroll';
// import onLightBoxOpen from './js/lightbox'

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = getRefs();

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearchImg);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.galleryList.addEventListener('click', onLightBoxOpen);

// refs.loadMoreBtn.classList.add('is-hidden');

function onSearchImg(e){
  e.preventDefault();
  
  imagesApiService.query = e.currentTarget.elements.query.value;
  
  if (!imagesApiService.query) {
    onShowNotification();
    return;
  }

  imagesApiService.resetPage();
  imagesApiService.fetchImages().then((images) => {

    if (images.length === 0) {
      onShowNotification();
    }

    onClearImgPage();
    onRenderImgPage(images);
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(entry.target)
          // onLoadMore()
        }
        observer.unobserve(entry.target);
      })
    }, options);

    const arr = document.querySelectorAll('.gallery-list__item')

    arr.forEach(item => {
      console.log(item);
      observer.observe(item);
    })
    
  
  });

  // refs.loadMoreBtn.classList.remove('is-hidden');
}


function onLoadMore() {
  imagesApiService.fetchImages().then((images) => {
    onRenderImgPage(images);
    scroll();
  });
}

function onRenderImgPage(images) {
  const markup = imgTemplate(images);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

function onClearImgPage() {
  refs.galleryList.innerHTML = '';
}

function onLightBoxOpen(e){
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const fullSizeImg = basicLightbox.create(`<img src="${e.target.dataset.src}">`);
  fullSizeImg.show();
  
  console.log(e.target.dataset.src);
};

// refs.galleryList.addEventListener()


// const items = document.querySelectorAll('.gallery-list__item');
// console.log(items);

// refs.galleryListItem.forEach(item => {
//   observer.observe(item);
// })

// observer.observe(refs.galleryList);

// const targets = document.querySelectorAll('.gallery-list__item');

// targets.forEach(target => {
//   observer.observe(target);
// })
