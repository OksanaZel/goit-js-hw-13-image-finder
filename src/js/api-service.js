// import axios from 'axios';

const API_KEY = '21672649-f94e47de3526d257f0e860889';
const BASE_URL = 'https://pixabay.com/api';

// axios.defaults.baseURL = BASE_URL;

// export const fetchImg = (searchQuery) => {
//         return axios
//             .get(`/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
//             .then(response => response.data);
// }

export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
        return fetch(url)
        .then(response => response.json())
        .then(({hits}) => {
            this.incrementPage();
            return hits;
        })
      .catch(err => console.log(err));
    }

    incrementPage() {
        this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}