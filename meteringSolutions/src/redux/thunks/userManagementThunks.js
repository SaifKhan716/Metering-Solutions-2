
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userManagement } from "../../api/apiService"; // Adjust path to API service

export const fetchUsersByQuery = createAsyncThunk(
  "usersMangement/fetchUsersByQuery",
  async ({ superAdminId, adminId, role, search }, { rejectWithValue }) => {
    try {
      const response = await userManagement.getUsersByQuery({
        superAdminId,
        adminId,
        search,
      });
      console.log('thunk call----------->',response)
      return response.data.data;

    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return rejectWithValue(message);
    }
  }
);

export const updateUserById = createAsyncThunk(
  "usersMangement/updateUserById",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await userManagement.updateUserById(id, data);
      return response.data.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to update user";
      return rejectWithValue(message);
    }
  }
);


export const createUser = createAsyncThunk(
  "usersMangement/createUser",
  async (data, { rejectWithValue }) => {
    try {
      console.log("====data===", data);
      const response = await userManagement.createUser(data);
      console.log("thunk response",response.data.data);
      return response.data.data; // Assuming API response structure: { success, data }
      
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to create user";
      return rejectWithValue(message);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  "usersMangement/deleteUserById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await userManagement.deleteUserById(id);
      return { id }; // Only need ID to remove from frontend state
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to delete user";
      return rejectWithValue(message);
    }
  }
);
