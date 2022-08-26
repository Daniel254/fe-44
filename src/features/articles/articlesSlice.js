import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { fetchArticleByQuery } from '../../api/articlesApi';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchArticlesByQuery = createAsyncThunk(
  'articles/fetchByQuery',
  async (query) => {
    return await fetchArticleByQuery(query);
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setArticles: (state, { payload }) => {
      state.items = payload;
    },
    addArticles: (state, { payload }) => {
      state.items = [...state.articles, ...payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesByQuery.fulfilled, (state, { payload }) => {
        state.items = payload.hits;
        state.isLoading = false;
      })
      .addCase(fetchArticlesByQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticlesByQuery.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      });
  },
});

export const { setArticles, addArticles } = counterSlice.actions;

export default counterSlice.reducer;

const selectArticlesChunk = (state) => state.articles;

export const selectArticles = createSelector(
  selectArticlesChunk,
  (articles) => articles.items
);
