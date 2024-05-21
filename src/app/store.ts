import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../features/image/imageSlice";
import viewportSlice from "../features/viewport/viewportSlice";
import gridSlice from "../features/grid/gridSlice";

const store = configureStore({
  reducer: {
    image: imageSlice,
    viewport: viewportSlice,
    grid: gridSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
