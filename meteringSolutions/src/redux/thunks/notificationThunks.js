import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notificationApi } from '../../api/apiService';

export const fetchAdminNotifications = createAsyncThunk(
  'notifications/fetchAdminNotifications',
  async (adminId, { rejectWithValue }) => {

    console.log("=====adminId=======",adminId)
    try {
      const response = await notificationApi.getAdminNotifications(adminId);
      console.log("=======response========",response)
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchSystemNotifications = createAsyncThunk(
  'notifications/fetchSystemNotifications',
  async (adminId, { rejectWithValue }) => {
    try {
      const response = await notificationApi.getSystemNotifications(adminId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchUserNotifications = createAsyncThunk(
  'notifications/fetchUserNotifications',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await notificationApi.getUserNotifications(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const toggleNotificationStatus = createAsyncThunk(
  'notifications/toggleStatus',
  async ({ notificationId, status }, { rejectWithValue }) => {
    try {
      const response = await notificationApi.toggleNotificationStatus({ notificationId, status });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);