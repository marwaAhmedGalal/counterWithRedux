import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reucers/counterSlice";
import authReducer from "./reucers/authSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
export default store;
