import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

const api_key = "89982a4f09932ccfb4818f10692c02f2";

export const listMovies = (query: string) => {
  return api.get(`/search/movie?api_key=${api_key}&language=pt-BR&query=${query}`)
};

export const posterMovie = (path: string) => {
  return `https://image.tmdb.org/t/p/w500${path}`
};

export const detailsMovie = (id: string) => {
  return api.get(`/movie/${id}?api_key=${api_key}&language=pt-BR`)
};

export const trailerMovie = (id: string) => {
  return api.get(`/movie/${id}/videos?api_key=${api_key}&language=pt-BR`)
};

export const listGenre = () => {
  return api.get(`/genre/movie/list?api_key=${api_key}&language=pt-BR`)
};