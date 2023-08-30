import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogIn: false };

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

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
