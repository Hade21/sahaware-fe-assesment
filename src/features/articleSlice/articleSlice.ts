import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleTypes } from "../../../interface.model";

interface initialStateTypes {
  content: ArticleTypes[] | undefined;
  selectedArticle: ArticleTypes | undefined;
}
const initialState: initialStateTypes = {
  content: [],
  selectedArticle: {
    id: "",
    title: "",
    short_description: "",
    image: "",
    description: "",
    created_at: "",
    created_by: "",
    category: "",
  },
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
    setSelectedArticle: (
      state,
      action: PayloadAction<ArticleTypes | undefined>
    ) => {
      state.selectedArticle = action.payload;
    },
  },
});

export const { setArticle, addArticle, setSelectedArticle } =
  articleSlice.actions;

export default articleSlice.reducer;
