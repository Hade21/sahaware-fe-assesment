import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleTypes, GetArticlesTypes } from "../../../interface.model";

interface initialStateTypes {
  content: ArticleTypes[] | undefined;
}
const initialState: initialStateTypes = {
  content: [],
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action: PayloadAction<ArticleTypes[] | undefined>) => {
      state.content = action.payload;
    },
    addArticle: (state, action: PayloadAction<ArticleTypes[]>) => {
      action.payload?.map((item) => state.content?.push(item));
    },
  },
});

export const { setArticle, addArticle } = articleSlice.actions;

export default articleSlice.reducer;
