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
}
