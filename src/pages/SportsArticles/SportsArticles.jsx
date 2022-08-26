import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Title } from '../../UI/Title/Title';
import { fetchArticlesByQuery } from '../../features/articles/articlesSlice';

export const SportsArticles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesByQuery('sport'));
  }, [dispatch]);

  return (
    <>
      <Title>Sport articles</Title>
    </>
  );
};
