import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../shared/api/popularMovies';
import MoviesList from 'shared/components/MoviesList/MoviesList';

import css from './home-page.module.scss';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const { data } = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h2 className={css.title}>Trending today</h2>
      <MoviesList items={movies} />;
    </div>
  );
};

export default HomePage;
