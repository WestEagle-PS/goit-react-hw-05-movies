import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import placeholder from '../../../images/posterPlaceholder.jpg';
import css from './movies-list.module.scss';

const MoviesList = ({ items = [] }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id} className={css.item}>
      <Link to={`/movies/${id}`} state={{ from: location }} className={css.link}>
        <div>
          <img
            className={css.img}
            src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholder}
            alt={title}
            width="250"
          />
          <h2 className={css.title}>{title}</h2>
        </div>
      </Link>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default MoviesList;

MoviesList.propTypes = {
  items: PropTypes.array,
};
