import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

const api_key = "89982a4f09932ccfb4818f10692c02f2";

export const ListMovies = (query: string) => {
  return api.get(`/search/movie?api_key=${api_key}&language=pt-BR&query=${query}`)
};