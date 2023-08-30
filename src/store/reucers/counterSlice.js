import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./authSlice";

const initialState = { countValue: 0 };

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

  //extraReducers using when want to slice listen to another slice (state = counterSlice but action = logOut(authSlice))

  //way one
  // extraReducers:
  //  {
  //   [logOut]: (state, action) => {
  //     state.countValue = action.payload;
  //   },
  // },

  //way two
  extraReducers: (blunder) => {
    blunder.addCase(logOut, (state, action) => {
      state.countValue = action.payload;
    });
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
