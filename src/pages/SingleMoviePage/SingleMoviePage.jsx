import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { getMoviesById } from '../../shared/api/popularMovies';
import css from './single-movie-page.module.scss';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();
  const goBackBtn = () => navigate(from);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMoviesById(id);

        const { poster_path, title, original_title, vote_average, overview, genres } = data;

        const userScore = (vote_average * 10).toFixed(2);
        const genresInfo = genres.map(item => item.name).join(`, `);

        setMovie({ poster_path, title, original_title, userScore, overview, genresInfo });
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  const { poster_path, title, original_title, userScore, overview, genresInfo } = movie;

  return (
    <div className={css.wrapper}>
      <div className={css.poster}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="300" />
        </div>

        <div className={css.info}>
          <h2 className={css.title}>{original_title}</h2>
          <p className={css.text}>User Score: {userScore} %</p>
          <h3 className={css.subtitle}>Overview:</h3>
          <p className={css.text}>{overview}</p>
          <h3 className={css.subtitle}>Genres:</h3>
          <p className={css.text}>{genresInfo}</p>
          <button className={css.button} onClick={goBackBtn}>
            GO BACK
          </button>
        </div>
      </div>

      <div className={css.moreinfo}>
        <h3 className={css.subtitle}>Additional information</h3>
        <Link to={'cast'} state={{ from }} className={css.link}>
          cast
        </Link>
        <Link to={'reviews'} state={{ from }} className={css.link}>
          reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default SingleMoviePage;
