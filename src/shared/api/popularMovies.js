import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '77da55832de63d39c695f15c5d27b3f3',
    language: 'en-US',
  },
});

export const getPopularMovies = () => {
  return instance.get('/trending/movie/day');
};

export const getMoviesById = id => {
  return instance.get(`/movie/${id}`);
};

export const getSearchMovies = (search, page = 1) => {
  return instance.get(`/search/movie?query=${search}`, {
    params: {
      search,
      page,
    },
  });
};

export const getCastById = id => instance.get(`/movie/${id}/credits`);

export const getReviewsById = id => instance.get(`/movie/${id}/reviews`);
