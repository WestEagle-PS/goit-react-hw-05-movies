import PopularMovies from 'components/PopularMovies/PopularMovies';
import css from './home-page.module.scss';

const HomePage = () => {
  return (
    <div>
      <h2 className={css.title}>Trending today</h2>
      {<PopularMovies />}
    </div>
  );
};

export default HomePage;
