import React, { ReactNode } from "react";

export interface CardArticleTypes {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
}

export interface ArticleTypes {
  id: string;
  title: string;
  short_description: string;
  image: string;
  description: string;
  created_at: string;
  created_by: string;
  category: string;
}

export interface GetArticlesTypes {
  code: number;
  content: ArticleTypes[];
  meta: {
    show: number | null;
    show_from: number | null;
    show_to: number | null;
    totalPage: number;
    totalData: number;
  };
  message: string;
}

export interface UserTypes {
  email: string;
  name: string;
  password: string;
  phone: string;
  width: number;
}

export interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  children: ReactNode;
  type: "submit" | "button";
}

export interface SignInBody {
  email: string;
  password: string;
}

export interface SignUpBody {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface ErrorResponse {
  isJoi: boolean;
  name: string;
  details: [
    {
      message: string;
      path: string[];
      type: string;
      context: {
        limit: number;
        value: string;
        key: string;
        label: string;
      };
    }
  ];
  _object: {
    name: string;
    email: string;
    password: string;
    phone: string;
  };
}

export interface SignInResponse {
  code: number;
  content: [
    {
      token?: string;
      user?: {
        id: string;
        name: string;
        email: string;
        phone: string;
        created_at: string;
        updated_at: string | null;
        photo: string | null;
        password: string;
        expired_token: string | null;
        reset_token: string | null;
        is_user: boolean;
        iat: number;
        exp: number;
      };
    }
  ];
  totalItem?: number;
  message?: ErrorResponse;
}

export interface SignUpResponse {
  code: number;
  content?: {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    id?: string;
  };
  totalItems?: number;
  message?: ErrorResponse;
}
