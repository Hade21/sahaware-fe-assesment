import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetArticlesTypes } from "../../../interface.model";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restify-sahaware-boilerplate.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<GetArticlesTypes, undefined>({
      query: () => "/article",
    }),
  }),
});

export const { useGetArticlesQuery } = articleApi;
