import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../shared/api/popularMovies';
import css from './reviews-page.module.scss';

const ReviewsPage = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const { data } = await getReviewsById(id);
        setReview(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview();
  }, [id]);

  const elements = review.map(({ id, author, content }) => (
    <li key={id} className={css.item}>
      <h3 className={css.subtitle}>Author: {author}</h3>
      <p className={css.text}>{content}</p>
    </li>
  ));

  return (
    <>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>{review !== [] ? elements : "We don't have any reviews for this movie"}</ul>
    </>
  );
};

export default ReviewsPage;
