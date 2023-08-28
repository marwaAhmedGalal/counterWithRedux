import { createSlice } from "@reduxjs/toolkit";

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
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
