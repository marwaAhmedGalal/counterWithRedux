import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogIn: true };

const authSlice = createSlice({
  name: "authantication",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogIn = true;
    },
    logOut: (state) => {
      state.isLogIn = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
