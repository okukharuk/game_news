import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { newsAPI } from '../services/NewsService';
import NewsReducer from './reducers/NewsSlice';
import PostsReducer from './reducers/PostsSlice';

const rootReducer = combineReducers({
  [newsAPI.reducerPath]: newsAPI.reducer,
  NewsReducer,
  PostsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsAPI.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
