import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastById } from '../../shared/api/popularMovies';
import css from './cast-page.module.scss';

const imgURL = 'https://image.tmdb.org/t/p/original/';

const CastPage = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getCastById(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, []);

  const elements = cast.map(({ cast_id, profile_path, character, original_name, name }) => (
    <li key={cast_id}>
      <img src={`${imgURL}${profile_path}`} alt={name} width="140" />
      <p>{original_name}</p>
      <p>character: {character}</p>
    </li>
  ));

  return (
    <>
      <h2 className={css.title}>casts info</h2>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

export default CastPage;
