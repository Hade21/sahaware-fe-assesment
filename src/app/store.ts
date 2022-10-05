import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";
import articleReducer from "../features/articleSlice/articleSlice";
import { articleApi } from "../services/postApi/articleApi";
import { userApi } from "../services/userApi/userApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
