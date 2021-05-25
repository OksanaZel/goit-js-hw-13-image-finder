import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function onLightBoxOpen(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const fullsizeImg = basicLightbox.create(`<img src="${e.target.dataset.src}"`);
    fullsizeImg.show();
}

