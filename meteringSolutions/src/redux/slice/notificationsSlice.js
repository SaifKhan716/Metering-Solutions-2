import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import api from "../../api/apiService";
// import { notificationApi } from '../../api/apiService';

import {
  fetchAdminNotifications,
  fetchSystemNotifications,
  fetchUserNotifications,
  toggleNotificationStatus
} from '../thunks/notificationThunks'; // Adjust path as needed

// // Async thunks for API calls
// export const fetchAdminNotifications = createAsyncThunk(
//   'notifications/fetchAdminNotifications',
//   async (adminId, { rejectWithValue }) => {
//     try {
//       const response = await api.get(`/notifications/admin/${adminId}`);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const fetchSystemNotifications = createAsyncThunk(
//   'notifications/fetchSystemNotifications',
//   async (adminId, { rejectWithValue }) => {
//     try {
//       const response = await api.get(`/notifications/system/${adminId}`);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const fetchUserNotifications = createAsyncThunk(
//   'notifications/fetchUserNotifications',
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await api.get(`/notifications/user/${userId}`);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const toggleNotificationStatus = createAsyncThunk(
//   'notifications/toggleStatus',
//   async ({ notificationId, status }, { rejectWithValue }) => {
//     try {
//       const response = await api.patch(`/notifications/${notificationId}/status`, { status });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );



// export const fetchAdminNotifications = createAsyncThunk(
//   'notifications/fetchAdminNotifications',
//   async (adminId, { rejectWithValue }) => {
//     try {
//       const response = await notificationApi.getAdminNotifications(adminId);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const fetchSystemNotifications = createAsyncThunk(
//   'notifications/fetchSystemNotifications',
//   async (adminId, { rejectWithValue }) => {
//     try {
//       const response = await notificationApi.getSystemNotifications(adminId);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const fetchUserNotifications = createAsyncThunk(
//   'notifications/fetchUserNotifications',
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await notificationApi.getUserNotifications(userId);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const toggleNotificationStatus = createAsyncThunk(
//   'notifications/toggleStatus',
//   async ({ notificationId, status }, { rejectWithValue }) => {
//     try {
//       const response = await notificationApi.toggleNotificationStatus({ notificationId, status });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: null,
    usersList: [],
    adminNotifications: [],
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 6,
    searchTerm: '',
    activeTab: 'users',
    selectedUser: null
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
      state.currentPage = 1;
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
      state.currentPage = 1;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
      state.currentPage = 1;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Admin Notifications
      .addCase(fetchAdminNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.usersList = formatUsersList(action.payload);
      })
      .addCase(fetchAdminNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch admin notifications';
      })
      
      // Fetch System Notifications
      .addCase(fetchSystemNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSystemNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.adminNotifications = formatAdminNotifications(action.payload);
      })
      .addCase(fetchSystemNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch system notifications';
      })
      
      // Fetch User Notifications
      .addCase(fetchUserNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchUserNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch user notifications';
      })
      
      // Toggle Notification Status
      .addCase(toggleNotificationStatus.fulfilled, (state, action) => {
        if (state.notifications && state.notifications._id === action.payload._id) {
          state.notifications.status = action.payload.status;
        }
        
        // Update status in usersList if it exists there
        state.usersList = state.usersList.map(user => {
          if (user.notificationId === action.payload._id) {
            return { ...user, status: action.payload.status };
          }
          return user;
        });
      });
  }
});

// Helper functions to format data (same as before)
const formatUsersList = (notifications) => {
  const usersMap = new Map();
  
  notifications.forEach(notification => {
    if (!usersMap.has(notification.userId._id)) {
      usersMap.set(notification.userId._id, {
        _id: notification.userId._id,
        userId: notification.userId._id,
        meterId: notification.meterId?.meterId || 'N/A',
        lastNotificationDate: notification.lastNotificationDate || new Date(),
        status: notification.status,
        notificationCount: notification.userNotification?.length || 0,
        notificationId: notification._id,
        userDetails: notification.userId
      });
    }
  });
  
  return Array.from(usersMap.values());
};

const formatAdminNotifications = (notifications) => {
  return notifications.flatMap(notification => 
    notification.userNotification.map(notif => ({
      ...notif,
      userId: notification.userId?._id || 'system',
      meterId: notification.meterId?.meterId || 'N/A'
    }))
  );
};

export const { 
  setSearchTerm, 
  setCurrentPage, 
  setActiveTab, 
  selectUser, 
  clearSelectedUser 
} = notificationSlice.actions;

export default notificationSlice.reducer;