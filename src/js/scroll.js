import getRefs from './get-refs';

const refs = getRefs();

function scroll() {
   setTimeout(() => {
      refs.loadMoreBtn.scrollIntoView({behavior: 'smooth', block: 'end'});
   }, 300)
   
}

export { scroll };