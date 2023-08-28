import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialState = { countValue: 0, showCount: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.countValue += action.payload;
    },
    decrease: (state, action) => {
      state.countValue -= action.payload;
    },
  },
});

const store = createStore(counterSlice.reducer);
export const { increase, decrease } = counterSlice.actions;

export default store;
