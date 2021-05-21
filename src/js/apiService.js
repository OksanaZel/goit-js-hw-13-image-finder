import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';


axios.defaults.baseURL = BASE_URL;

export const fetchImg = (searchQuery) => {
        return axios
            .get(`/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
            .then(response => response.data);
}