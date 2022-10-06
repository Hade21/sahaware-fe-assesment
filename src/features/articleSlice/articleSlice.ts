import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleTypes } from "../../../interface.model";

interface initialStateTypes {
  content: ArticleTypes[] | undefined;
  selectedArticle: ArticleTypes | undefined;
  newTitle: string;
  newShortDescription: string;
  newImage: string;
  newCategory: string;
  published: boolean;
  newDiscription: string;
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
  newTitle: "",
  newShortDescription: "",
  newImage: "",
  newCategory: "",
  published: false,
  newDiscription: "",
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
    setNewTitle: (state, action: PayloadAction<string>) => {
      state.newTitle = action.payload;
    },
    setNewShortDescription: (state, action: PayloadAction<string>) => {
      state.newShortDescription = action.payload;
    },
    setNewImage: (state, action: PayloadAction<string>) => {
      state.newImage = action.payload;
    },
    setNewCategory: (state, action: PayloadAction<string>) => {
      state.newCategory = action.payload;
    },
    setPublished: (state, action: PayloadAction<boolean>) => {
      state.published = action.payload;
    },
    setNewDiscription: (state, action: PayloadAction<string>) => {
      state.newDiscription = action.payload;
    },
  },
});

export const {
  setArticle,
  addArticle,
  setSelectedArticle,
  setNewTitle,
  setNewCategory,
  setNewDiscription,
  setNewImage,
  setNewShortDescription,
  setPublished,
} = articleSlice.actions;

export default articleSlice.reducer;
