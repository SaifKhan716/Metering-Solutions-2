import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { meterApi } from "../../api/apiService";


// Async action to fetch meters
export const fetchMeters = createAsyncThunk("meters/fetchMeters", async () => {
    const response = await meterApi.getAllMeterWithPayment();

    console.log("========", response);
    return response.data.data;
});

const metersSlice = createSlice({
    name: "meters",
    initialState: {
        allMeters: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMeters.fulfilled, (state, action) => {
                state.loading = false;
                state.allMeters = action.payload;
            })
            .addCase(fetchMeters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default metersSlice.reducer;