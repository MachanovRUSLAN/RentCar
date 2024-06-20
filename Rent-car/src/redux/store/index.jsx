import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/index.jsx";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
