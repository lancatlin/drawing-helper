import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const gridSlice = createSlice({
  name: "grid",
  initialState: {
    rows: 3,
    cols: 3,
  },
  reducers: {
    setRows: (state, action: { payload: number }) => {
      state.rows = action.payload;
    },
    setCols: (state, action: { payload: number }) => {
      state.cols = action.payload;
    },
  },
});

export const { setRows, setCols } = gridSlice.actions;

export const selectGrid = (state: RootState) => state.grid;

export default gridSlice.reducer;
