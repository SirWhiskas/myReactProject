import http from './httpService';
import { apiUrl } from '../config.json';

const movieAPI = apiUrl + "/movies";

function movieUrl(id) {
    return `${movieAPI}/${id}`;
}

export function getMovies() {
    return http.get(movieAPI);
}

export function getMovie(id) {
    return http.get(movieUrl(id));
}

export async function saveMovie(movie) {
    if (movie._id) {
        const body = { ...movie };
        delete body._id;
        return http.put(movieUrl(movie._id), body);
    }

    return http.post(movieAPI, movie);
}

export function deleteMovie(id) {
    return http.delete(movieUrl(id));
}