import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SignInBody,
  SignUpBody,
  SignInResponse,
  SignUpResponse,
} from "../../../interface.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restify-sahaware-boilerplate.herokuapp.com/api/auth",
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResponse, SignInBody>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<SignUpResponse, SignUpBody>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = userApi;
