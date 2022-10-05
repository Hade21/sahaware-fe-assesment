import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";
import articleReducer from "../features/articleSlice/articleSlice";
import { articleApi } from "../services/postApi/articleApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
