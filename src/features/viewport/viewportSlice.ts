import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const viewportSlice = createSlice({
  name: "viewport",
  initialState: {
    scale: 1,
    x: 0,
    y: 0,
  },
  reducers: {
    setScale: (state, action: { payload: number }) => {
      state.scale = action.payload;
    },
    zoomIn: (state) => {
      state.scale = Math.min(10, state.scale * 1.1);
    },
    zoomOut: (state) => {
      state.scale = Math.max(1, state.scale * 0.9);
    },
    setX: (state, action: { payload: number }) => {
      state.x = action.payload;
    },
    setY: (state, action: { payload: number }) => {
      state.y = action.payload;
    },
  },
});

export const { setScale, zoomIn, zoomOut, setX, setY } = viewportSlice.actions;

export const selectViewport = (state: RootState) => state.viewport;

export default viewportSlice.reducer;