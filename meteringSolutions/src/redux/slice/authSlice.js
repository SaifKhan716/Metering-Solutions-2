// store/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/auththunks";

// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null ,
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;

export const selectUserId = (state) => state.auth.user?.id;
export const selectUserEmail = (state)=> state.auth.user?.email;
export const selectUserRole = (state)=> state.auth.user?.role;
export const selectAuthLoading = (state)=> state.auth.loading;

export default authSlice.reducer;
