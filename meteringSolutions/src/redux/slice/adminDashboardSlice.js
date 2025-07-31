import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboardData, fetchAdminDailyConsumption, fetchFilteredChartData, fetchAdminUserMeterData, fetchMeterListByAdmin } from "../thunks/adminDashboardThunks";


const adminDashboardDataSlice = createSlice({
    name: 'adminDashboard',
    initialState: {
        data: null,
        loading: false,
        error: null,
        dailyConsumption: [],
        adminUserMeterData: [],
        adminMeterList: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(fetchAdminDailyConsumption.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdminDailyConsumption.fulfilled, (state, action) => {
                state.dailyConsumption = action.payload;
                state.loading = false;
            })
            .addCase(fetchAdminDailyConsumption.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(fetchFilteredChartData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilteredChartData.fulfilled, (state, action) => {
                state.dailyConsumption = action.payload;
                state.loading = false;
            })
            .addCase(fetchFilteredChartData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(fetchAdminUserMeterData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdminUserMeterData.fulfilled, (state, action) => {
                state.adminUserMeterData = action.payload;
                state.loading = false;
            })
            .addCase(fetchAdminUserMeterData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(fetchMeterListByAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMeterListByAdmin.fulfilled, (state, action) => {
                state.adminMeterList = action.payload;
                state.loading = false;
            })
            .addCase(fetchMeterListByAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    }
});

export const selectMeterList = (state) => state.adminDashboard.adminMeterList;
export const selectLoading = (state) => state.adminDashboard.loading;
export const selectDailyConsuption = (state) => state.adminDashboard.dailyConsumption;
export const selectAdminUserMeterData = (state) => state.adminDashboard.adminUserMeterData;
export const selectFetchDashboardData = (state) => state.adminDashboard.data;
export const selectError = (state) => state.adminDashboard.error;

export default adminDashboardDataSlice.reducer;