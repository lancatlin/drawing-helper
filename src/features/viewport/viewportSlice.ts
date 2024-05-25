import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const viewportSlice = createSlice({
  name: "viewport",
  initialState: {
    scale: 1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  reducers: {
    setScale: (state, action: { payload: number }) => {
      state.scale = action.payload;
    },
    zoomIn: (state, action: { payload: number }) => {
      state.scale = Math.min(10, state.scale * (1 - action.payload / 500));
    },
    zoomOut: (state, action: { payload: number }) => {
      state.scale = Math.max(1, state.scale * (1 - action.payload / 500));
    },
    setX: (state, action: { payload: number }) => {
      state.x = action.payload;
    },
    setY: (state, action: { payload: number }) => {
      state.y = action.payload;
    },
    setViewportDimensions: (
      state,
      action: { payload: { width: number; height: number } }
    ) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { setScale, zoomIn, zoomOut, setX, setY, setViewportDimensions } =
  viewportSlice.actions;

export const selectViewport = (state: RootState) => state.viewport;

export default viewportSlice.reducer;
