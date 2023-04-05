import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slicers/counterSlice";

const store = configureStore({
  reducer: counterSlice,
});

export default store;
