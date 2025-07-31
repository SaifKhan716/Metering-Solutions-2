import { createSlice } from "@reduxjs/toolkit";
import { fetchMeters, fetchUnassignedIoTMeters, assignUserToMeter, deleteMeter } from "../thunks/meterThunks";



const initialState = {
    metersAssigned: [],
    iotMeter: [],
    loading: false,
    error: null,
};

const meterManagementSlice = createSlice({
    name: "meter",
    initialState,
    reducers: {
        clearMeters(state) {
            state.metersAssigned = [];
        },
        addMeterInMetering(state, action) {
            state.metersAssigned = [...state.metersAssigned, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
            //iot Meter builders
            .addCase(fetchUnassignedIoTMeters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUnassignedIoTMeters.fulfilled, (state, action) => {
                state.loading = false;
                state.iotMeter = action.payload;
            })
            .addCase(fetchUnassignedIoTMeters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //metering Meter 
            .addCase(fetchMeters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMeters.fulfilled, (state, action) => {
                state.loading = false;
                state.metersAssigned = action.payload;
            })
            .addCase(fetchMeters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //addMeter and AssignUser
            .addCase(assignUserToMeter.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.metersAssigned.findIndex((m) => m.id === updated.id);

                if (index !== -1) {
                    state.metersAssigned[index] = updated;
                } else {
                    state.metersAssigned.push(updated);
                }
            })

    },
});

export const { clearMeters,addMeterInMetering } = meterManagementSlice.actions;

export const selectMeteringMeters = (state) => state.meter.metersAssigned;
export const selectIotMeters = (state) => state.meter.iotMeter;
export const selectMeterLoading = (state) => state.meter.loading;
export const selectMeterError = (state) => state.meter.error;

export default meterManagementSlice.reducer;
