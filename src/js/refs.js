export default function getRefs() {
    return {
        searchForm: document.querySelector('.search-form'),
        galleryList: document.querySelector('.gallery'),
        galleryListItem: document.querySelector('.gallery-list__item:last-child'),
        loadMoreBtn: document.querySelector('.button[data-action="load-more"]'),
}
}