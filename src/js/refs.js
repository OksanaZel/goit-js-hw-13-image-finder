export default function getRefs() {
    return {
        searchForm: document.querySelector('.search-form'),
        galleryList: document.querySelector('.gallery'),
        galleryListItem: document.querySelectorAll('.gallery-list__item'),
        loadMoreBtn: document.querySelector('.button[data-action="load-more"]'),
}
}