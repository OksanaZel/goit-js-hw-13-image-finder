// import getRefs from '.get-refs';

const itemsRefs = document.querySelectorAll('li')

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 0
};

function onObserve(entries) {
    entries.forEach(entry => {
    console.log(entry.target);
  })
}

const observer = new IntersectionObserver(onObserve, options);

itemsRefs.forEach(item => {
    observer.observe(itemsRefs);
})


// export {onObserve}

// observer.observe(refs.galleryListItem);

// console.log(refs.galleryListItem);