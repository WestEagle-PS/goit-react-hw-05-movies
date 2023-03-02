import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../../shared/api/popularMovies';
import MoviesList from 'shared/components/MoviesList/MoviesList';
import css from './popular-movies.module.scss';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const { data } = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopularMovies();
  }, []);

  return <MoviesList items={movies} />;
};

export default PopularMovies;