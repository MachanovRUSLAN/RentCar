import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    addToForm(state, action) {
      let isExit = state.find((item) => item.id === action.payload.id);
      if (!isExit) {
        state.push(action.payload);
      }
    },
  },
});

export const { addToForm } = counterSlice.actions;

export default counterSlice.reducer;
