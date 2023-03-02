import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const SingleMoviePage = lazy(() => import('pages/SingleMoviePage/SingleMoviePage'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>.....Loading page, please wait</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
