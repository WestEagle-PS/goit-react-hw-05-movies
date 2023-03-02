import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'shared/api/popularMovies';
import { ToastContainer, toast } from 'react-toastify';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from 'shared/components/MoviesList/MoviesList';
import Spinner from 'shared/components/Loader/Loader';
import Button from '../../shared/components/Button/Button';
import css from './movies-page.module.scss';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
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
      {(status === 'sucess' || movies.length > 0) && <MoviesList items={movies} />}
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

export default MoviesPage;
