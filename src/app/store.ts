import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../features/image/imageSlice";

const store = configureStore({
  reducer: {
    image: imageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
