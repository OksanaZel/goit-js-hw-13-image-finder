
import ImagesApiService from './api-service';
import getRefs from './get-refs';
import imgTemplate from '../template/render-image-tpl';
import { onShowInfoNotification, onShowErrorNotification, onShowNoticeNotification } from './notification';
import { scroll } from './scroll';
import onLightBoxOpen from './light-box';

const refs = getRefs();

const imagesApiService = new ImagesApiService();

refs.loadMoreBtn.classList.add('is-hidden');

const observerOptions = {
  root: null,
  rootMargin: '100px',
  threshold: 0
};

refs.searchForm.addEventListener('submit', onSearchImg);
refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);
refs.galleryList.addEventListener('click', onLightBoxOpen);

async function onSearchImg(e){
  e.preventDefault();
  refs.loadMoreBtn.classList.remove('is-hidden');
  
  imagesApiService.query = e.currentTarget.elements.query.value;
  
  if (!imagesApiService.query) {
    onShowInfoNotification();
    refs.loadMoreBtn.classList.add('is-hidden');
    return;
  }

    imagesApiService.resetPage();
    const images = await imagesApiService.fetchImages();
      
    if (images.length === 0) {
      onShowErrorNotification();
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.searchForm.reset();
  }
  
  
    onClearImgPage();
    onRenderImgPage(images);
}

async function onLoadMore() {
    const images = await imagesApiService.fetchImages();
  onRenderImgPage(images);

    if (images.length === 0) {
      onShowNoticeNotification();
    }
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
