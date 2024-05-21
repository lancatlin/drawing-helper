import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    src: "./leopard.jpg" as string | null,
    width: 0,
    height: 0,
  },
  reducers: {
    setImage: (state, action: { payload: string | null }) => {
      state.src = action.payload;
    },
    setDimensions: (
      state,
      action: { payload: { width: number; height: number } }
    ) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { setImage, setDimensions } = imageSlice.actions;

export const selectImage = (state: RootState) => state.image.src;
export const selectDimensions = (state: RootState) => ({
  width: state.image.width,
  height: state.image.height,
});

export default imageSlice.reducer;
