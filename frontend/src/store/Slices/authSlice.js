import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    email: "",
  },

  reducers: {
    setAuth: (state, action) => {
      const { user } = action.payload;
      state.user = user;

      if (state.user === null || !user) {
        state.isAuth = false;
      } else {
        state.isAuth = true;
      }
    },
    setEmail: (state, action) => {
      const { email } = action.payload;
      state.email = email;
    },
  },
});

export const { setAuth, setEmail } = authSlice.actions;

export default authSlice.reducer;
