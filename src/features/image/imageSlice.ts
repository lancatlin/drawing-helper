import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    src: "/leopard.jpg" as string | null,
  },
  reducers: {
    setImage: (state, action: { payload: string | null }) => {
      state.src = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;

export const selectImage = (state: RootState) => state.image.src;

export default imageSlice.reducer;
