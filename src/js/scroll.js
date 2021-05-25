import getRefs from './get-refs';

const refs = getRefs();

function scroll() {
   refs.loadMoreBtn.scrollIntoView({behavior: 'smooth', block: 'end'});
}

export { scroll };