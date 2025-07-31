import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApis, userApi } from "../../api/apiService";


// Async login thunk
export const loginUser = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await authApis.login(credentials);
    const user = response.data.data;
    console.log("user data",user);

    localStorage.setItem("authToken", user.authToken);
    localStorage.setItem("refreshToken", user.refreshToken);


    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
}
);

const me = createAsyncThunk('auth/profile', async (thunkAPI) => {
  try {
    const response = await userApi.login();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})