import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { INewsLatest } from '../models/INews';
import { INewsQuery } from '../models/INewsQuery';
import { IPostResponse } from '../models/IPost';
import { TSlug } from '../models/TSlug';

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["News"],
  endpoints: (build) => ({
    getNews: build.query<INewsLatest, INewsQuery>({
      query: ({ slug, type, from, to, page }) => ({
        url:
          `/news/${slug}/news/` +
          `page/${page || 1}` +
          `?sort=${type || "publishAtDesk"}` +
          `&from=${from || null}` +
          `&to=${to || null}` +
          `&lang=ru`,
      }),
      providesTags: (result) => ["News"],
    }),
    getNewsPage: build.query<IPostResponse, { slug: TSlug; postSlug: string }>({
      query: ({ slug, postSlug }) => ({
        url: `/page/${slug}/news/${postSlug}?lang=ru`,
      }),
    }),
  }),
});
