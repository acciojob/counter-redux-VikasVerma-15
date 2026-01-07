import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";

const store = configureStore({
  reducer: counterReducer
});

export default store;
