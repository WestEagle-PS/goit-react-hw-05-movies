import { Link, useLocation } from 'react-router-dom';
import css from './movies-list.module.scss';

const MoviesList = ({ items = [] }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, poster_path, original_title }) => (
    <li key={id} className={css.item}>
      <Link to={`/movies/${id}`} state={{ from: location }} className={css.link}>
        <div>
          <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="250" />
          <h2 className={css.title}>{title}</h2>
        </div>
      </Link>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default MoviesList;
