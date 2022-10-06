import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateArticleBody,
  GetArticlesTypes,
  GetListCategoryResponse,
} from "../../../interface.model";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restify-sahaware-boilerplate.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<GetArticlesTypes, undefined>({
      query: () => "/article",
    }),
    getListCategory: builder.query<GetListCategoryResponse, undefined>({
      query: () => "/article-category",
    }),
    createNewArticle: builder.mutation<any, CreateArticleBody>({
      query: ({ body, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        url: "/article/create",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetListCategoryQuery,
  useCreateNewArticleMutation,
} = articleApi;
