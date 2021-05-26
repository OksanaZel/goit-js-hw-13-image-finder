import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

axios.defaults.baseURL = BASE_URL;

export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    // fetchImages() {
    //     const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    //     return fetch(url)
    //     .then(response => response.json())
    //     .then(({hits}) => {
    //         this.incrementPage();
    //         return hits;
    //     })
    //   .catch(err => console.log(err));
    // }

    fetchImages() {
        return axios
            .get(`/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
            .then(response => {
                this.incrementPage();
                return response.data.hits;
            })
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