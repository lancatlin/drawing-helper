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
    zoom: (
      state,
      action: { payload: { x: number; y: number; delta: number } }
    ) => {
      // state.scale = Math.min(
      //   10,
      //   state.scale * (1 - action.payload.amount / 500)
      // );
      const xs = (action.payload.x - state.x) / state.scale;
      const ys = (action.payload.y - state.y) / state.scale;
      const scale = state.scale * (1 - action.payload.delta / 500);
      state.scale = scale;
      state.x = action.payload.x - xs * scale;
      state.y = action.payload.y - ys * scale;
    },
    setTranslation: (state, action: { payload: { x: number; y: number } }) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
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

export const { setScale, zoom, setTranslation, setViewportDimensions } =
  viewportSlice.actions;

export const selectViewport = (state: RootState) => state.viewport;

export default viewportSlice.reducer;
