import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'shared/api/popularMovies';
import { ToastContainer, toast } from 'react-toastify';
import SearchForm from './SearchForm/SearchForm';
import MoviesList from 'shared/components/MoviesList/MoviesList';
import Spinner from 'shared/components/Loader/Loader';
import Button from '../../shared/components/Button/Button';
import css from './search-movie.module.scss';

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = Number(searchParams.get('page'));

  useEffect(() => {
    const getFetchMovies = async () => {
      try {
        setStatus('pending');
        const { data } = await getSearchMovies(search, page);
        setMovies(prevMovies => [...prevMovies, ...data.results]);
        setTotal(data.total);
        setStatus('sucess');
      } catch ({ error }) {
        const errorMessage = error.data.message || 'Cannot fetch movies.';
        setError(errorMessage);
        setStatus('error');
      }
    };

    if (search) {
      getFetchMovies();
    }
  }, [search, page]);

  const getFormData = search => {
    setMovies([]);
    setTotal(null);
    setSearchParams({
      search,
      page: 1,
    });
  };

  const notifyError = message => {
    toast.error(message);
  };

  const handleLoadMoreClick = () => {
    setSearchParams({
      search,
      page: page + 1,
    });
  };

  return (
    <div className={css.container}>
      <SearchForm onSubmit={getFormData} />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && notifyError(error)}
      {total === 0 && notifyError('Cannot find movies')}
      {(status === 'sucess' || movies.length > 0) && (
        <MoviesList items={movies} />
      )}
      {Boolean(movies?.length) && <Button onClick={handleLoadMoreClick} />}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default SearchMovie;
