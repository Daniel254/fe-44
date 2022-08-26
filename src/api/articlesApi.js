import axios from 'axios';

const BASE_URL = 'http://hn.algolia.com/api/v1';

export const fetchArticleByQuery = (query) => {
  return axios
    .get(`${BASE_URL}/search?query=${query}`)
    .then((response) => response.data);
};

export const fetchSportsArticles = () => {
  return axios
    .get(`${BASE_URL}/search?query=sport`)
    .then((response) => response.data);
};

export const fetchNatureArticles = () => {
  return axios
    .get(`${BASE_URL}/search?query=nature`)
    .then((response) => response.data);
};
