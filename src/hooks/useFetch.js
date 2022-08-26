import { useEffect, useState } from 'react';

export const useFetch = (requestFn, deps) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    requestFn()
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, deps);

  return {
    isLoading,
    error,
    data,
  };
};
