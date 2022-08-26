import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticlesByQuery } from '../../features/articles/articlesSlice';
import { Title } from '../../UI/Title/Title';

export const NatureArticles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesByQuery('nature'));
  }, [dispatch]);

  return (
    <>
      <Title>Nature Articles</Title>
    </>
  );
};
