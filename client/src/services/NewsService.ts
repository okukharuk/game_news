import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { INewsLatest } from '../models/INews';
import { INewsQuery } from '../models/INewsQuery';
import { IPostResponse } from '../models/IPost';

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  tagTypes: ["News"],
  endpoints: (build) => ({
    getNews: build.query<INewsLatest, INewsQuery>({
      query: ({ type, from, to, page }) => ({
        url:
          `/news/counterstrike/news/` +
          `page/${page || 1}` +
          `?sort=${type || "publishAtDesk"}` +
          `&from=${from || null}` +
          `&to=${to || null}` +
          `&lang=ru`,
      }),
      providesTags: (result) => ["News"],
    }),
    getNewsPage: build.query<IPostResponse, string>({
      query: (slug) => ({
        url: `/page/counterstrike/news/` + slug + `?lang=ru`,
      }),
    }),
  }),
});
