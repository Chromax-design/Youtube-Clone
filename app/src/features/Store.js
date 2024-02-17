import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});
