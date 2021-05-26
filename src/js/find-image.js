
import ImagesApiService from './api-service';
import getRefs from './get-refs';
import imgTemplate from '../template/render-image-tpl';
import { onShowInfoNotification, onShowErrorNotification, onShowNoticeNotification } from './notification';
import { scroll } from './scroll';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = getRefs();

const imagesApiService = new ImagesApiService();

const observerOptions = {
  root: null,
  rootMargin: '-10px',
  threshold: 0
};

refs.searchForm.addEventListener('submit', onSearchImg);
refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);
refs.galleryList.addEventListener('click', onLightBoxOpen);

function onSearchImg(e){
  e.preventDefault();
  
  imagesApiService.query = e.currentTarget.elements.query.value;
  
  if (!imagesApiService.query) {
    onShowInfoNotification();
    return;
  }

  imagesApiService.resetPage();
  imagesApiService.fetchImages().then((images) => {

    if (images.length === 0) {
      onShowErrorNotification();
    }

    onClearImgPage();
    onRenderImgPage(images);
  });
}

export function onLoadMore() {
  imagesApiService.fetchImages().then((images) => {
    onRenderImgPage(images);

    if (images.length === 0) {
      onShowNoticeNotification();
      refs.loadMoreBtn.classList.add('is-hidden');
    }
  });
}

function onClickLoadMoreBtn() {
  scroll();

  const observer = new IntersectionObserver(onLoadMore, observerOptions);
  observer.observe(refs.loadMoreBtn);
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
  basicLightbox.create(`<img src="${e.target.dataset.src}">`).show();
};

