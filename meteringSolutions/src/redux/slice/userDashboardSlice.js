// here we will make the slice for the userDashboard.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userDashboard } from "../../api/apiService";
import { setCharts } from "./currentPowerChartSlice";

export const fetchUserInit = createAsyncThunk("userDashboard/fetchUserInit", async (userId, thunkAPI) => {
    try {

        const response = await userDashboard.init(userId);

        thunkAPI.dispatch(setCharts(response?.data?.summary?.chartData));

        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


const initialState = {
    data: [],
    loading: false,
    error: null,
    selectedMeter: null,
    filterSettings: {
        dateRange: {
            startDate: null,
            endDate: null
        },
        meterType: 'all',
        dataType: 'recent'
    }
};

const userDashboardSlice = createSlice({
    name: "userDashboard",
    initialState,
    reducers: {
        // Set loading state
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        // Set error state
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        // Clear error
        clearError: (state) => {
            state.error = null;
        },

        // Set dashboard data
        setDashboardData: (state, action) => {
            console.log("this is inside the setDashbaord in reducer", action.payload)
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },

        // Update recent data for a specific meter
        updateRecentData: (state, action) => {
            const { meterId, recentData } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                state.data[meterIndex].summary.recentData = {
                    ...state.data[meterIndex].summary.recentData,
                    ...recentData,
                    timestamp: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };
            }
        },

        // Add new meter data
        addMeterData: (state, action) => {
            state.data.push(action.payload);
        },

        // Remove meter data
        removeMeterData: (state, action) => {
            const meterId = action.payload;
            state.data = state.data.filter(
                item => item.summary.recentData.meterId !== meterId
            );
        },

        // Update chart data
        updateChartData: (state, action) => {
            const { meterId, chartData, labelsData } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                state.data[meterIndex].summary.chartData = {
                    chartData: chartData || [],
                    labelsData: labelsData || state.data[meterIndex].summary.chartData.labelsData
                };
            }
        },

        // Set historical data
        setHistoricalData: (state, action) => {
            const { meterId, historicalData } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                state.data[meterIndex].summary.historicalDataPerDay = historicalData;
            }
        },

        // Update power readings (voltage, current, power factor, frequency)
        updatePowerReadings: (state, action) => {
            const { meterId, powerReadings } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                const recentData = state.data[meterIndex].summary.recentData;

                // Update power-related fields
                if (powerReadings.voltage_r) recentData.voltage_r = powerReadings.voltage_r;
                if (powerReadings.current_r) recentData.current_r = powerReadings.current_r;
                if (powerReadings.current_y) recentData.current_y = powerReadings.current_y;
                if (powerReadings.current_b) recentData.current_b = powerReadings.current_b;
                if (powerReadings.power_factor) recentData.power_factor = powerReadings.power_factor;
                if (powerReadings.frequency) recentData.frequency = powerReadings.frequency;

                recentData.timestamp = new Date().toISOString();
                recentData.updatedAt = new Date().toISOString();
            }
        },

        // Update energy consumption
        updateEnergyConsumption: (state, action) => {
            const { meterId, energyData } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                const recentData = state.data[meterIndex].summary.recentData;

                // Update energy-related fields
                if (energyData.cum_eb_kwh) recentData.cum_eb_kwh = energyData.cum_eb_kwh;
                if (energyData.cum_dg_kwh) recentData.cum_dg_kwh = energyData.cum_dg_kwh;
                if (energyData.cum_kvah_eb) recentData.cum_kvah_eb = energyData.cum_kvah_eb;
                if (energyData.cum_kvah_dg) recentData.cum_kvah_dg = energyData.cum_kvah_dg;
                if (energyData.cum_kvarh_eb) recentData.cum_kvarh_eb = energyData.cum_kvarh_eb;
                if (energyData.cum_kvarh_dg) recentData.cum_kvarh_dg = energyData.cum_kvarh_dg;

                recentData.timestamp = new Date().toISOString();
                recentData.updatedAt = new Date().toISOString();
            }
        },

        // Update relay status
        updateRelayStatus: (state, action) => {
            const { meterId, relayStatus } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                state.data[meterIndex].summary.recentData.relay_status = relayStatus;
                state.data[meterIndex].summary.recentData.timestamp = new Date().toISOString();
                state.data[meterIndex].summary.recentData.updatedAt = new Date().toISOString();
            }
        },

        // Update balance amount
        updateBalanceAmount: (state, action) => {
            const { meterId, balanceAmount } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                state.data[meterIndex].summary.recentData.balance_amount = balanceAmount;
                state.data[meterIndex].summary.recentData.timestamp = new Date().toISOString();
                state.data[meterIndex].summary.recentData.updatedAt = new Date().toISOString();
            }
        },

        // Update tariff settings
        updateTariffSettings: (state, action) => {
            const { meterId, tariffSettings } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                const recentData = state.data[meterIndex].summary.recentData;

                if (tariffSettings.eb_tariff_setting) recentData.eb_tariff_setting = tariffSettings.eb_tariff_setting;
                if (tariffSettings.dg_tariff_setting) recentData.dg_tariff_setting = tariffSettings.dg_tariff_setting;
                if (tariffSettings.daily_charge_setting) recentData.daily_charge_setting = tariffSettings.daily_charge_setting;

                recentData.timestamp = new Date().toISOString();
                recentData.updatedAt = new Date().toISOString();
            }
        },

        // Update load settings
        updateLoadSettings: (state, action) => {
            const { meterId, loadSettings } = action.payload;
            const meterIndex = state.data.findIndex(
                item => item.summary.recentData.meterId === meterId
            );

            if (meterIndex !== -1) {
                const recentData = state.data[meterIndex].summary.recentData;

                if (loadSettings.eb_load_setting) recentData.eb_load_setting = loadSettings.eb_load_setting;
                if (loadSettings.dg_load_setting) recentData.dg_load_setting = loadSettings.dg_load_setting;

                recentData.timestamp = new Date().toISOString();
                recentData.updatedAt = new Date().toISOString();
            }
        },

        // Set selected meter
        setSelectedMeter: (state, action) => {
            state.selectedMeter = action.payload;
        },

        // Update filter settings
        updateFilterSettings: (state, action) => {
            state.filterSettings = {
                ...state.filterSettings,
                ...action.payload
            };
        },

        // Reset filter settings
        resetFilterSettings: (state) => {
            state.filterSettings = {
                dateRange: {
                    startDate: null,
                    endDate: null
                },
                meterType: 'all',
                dataType: 'recent'
            };
        },

        // Bulk update multiple meters
        bulkUpdateMeters: (state, action) => {
            const updates = action.payload; // Array of { meterId, data }

            updates.forEach(({ meterId, data }) => {
                const meterIndex = state.data.findIndex(
                    item => item.summary.recentData.meterId === meterId
                );

                if (meterIndex !== -1) {
                    state.data[meterIndex].summary.recentData = {
                        ...state.data[meterIndex].summary.recentData,
                        ...data,
                        timestamp: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    };
                }
            });
        },

        // Reset entire state
        resetDashboard: (state) => {
            Object.assign(state, initialState);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserInit.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserInit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch dashboard data";
            });
    },
});

export const {
    setLoading,
    setError,
    clearError,
    setDashboardData,
    updateRecentData,
    addMeterData,
    removeMeterData,
    updateChartData,
    setHistoricalData,
    updatePowerReadings,
    updateEnergyConsumption,
    updateRelayStatus,
    updateBalanceAmount,
    updateTariffSettings,
    updateLoadSettings,
    setSelectedMeter,
    updateFilterSettings,
    resetFilterSettings,
    bulkUpdateMeters,
    resetDashboard
} = userDashboardSlice.actions;

// Selectors
export const selectDashboardData = (state) => state.userDashboard.data;
export const selectLoading = (state) => state.userDashboard.loading;
export const selectError = (state) => state.userDashboard.error;
export const selectSelectedMeter = (state) => state.userDashboard.selectedMeter;
export const selectFilterSettings = (state) => state.userDashboard.filterSettings;

// Advanced selectors
export const selectMeterById = (meterId) => (state) =>
    state.userDashboard.data.find(item => item.summary.recentData.meterId === meterId);

export const selectMetersByType = (meterType) => (state) => {
    if (meterType === 'all') return state.userDashboard.data;

    return state.userDashboard.data.filter(item => {
        const ebStatus = item.summary.recentData.eb_dg_status?.value;
        if (meterType === 'eb') return ebStatus === 1;
        if (meterType === 'dg') return ebStatus === 0;
        return true;
    });
};

export const selectTotalEnergyConsumption = (state) => {
  const data = Array.isArray(state.userDashboard.data) ? state.userDashboard.data : [];

  return data.reduce((total, item) => {
    const ebKwh = item.summary?.recentData?.cum_eb_kwh?.value || 0;
    const dgKwh = item.summary?.recentData?.cum_dg_kwh?.value || 0;
    return total + ebKwh + dgKwh;
  }, 0);
};


export const selectTotalBalance = (state) => {
    
  const data = Array.isArray(state.userDashboard.data) ? state.userDashboard.data : [];
    return data.reduce((total, item) => {
        const balance = item.summary.recentData.balance_amount?.value || 0;
        return total + balance;
    }, 0);
};

export const selectActiveMeters = (state) => {
       
  const data = Array.isArray(state.userDashboard.data) ? state.userDashboard.data : [];
    return data.filter(item => {
        const relayStatus = item.summary.recentData.relay_status?.status;
        return relayStatus === 'ON' || relayStatus === 'ACTIVE';
    });
};

export const selectMetersByDateRange = (startDate, endDate) => (state) => {
    if (!startDate || !endDate) return state.userDashboard.data;

    const start = new Date(startDate);
    const end = new Date(endDate);

       
  const data = Array.isArray(state.userDashboard.data) ? state.userDashboard.data : [];
    return data.filter(item => {
        const timestamp = new Date(item.summary.recentData.timestamp);
        return timestamp >= start && timestamp <= end;
    });
};

// Export reducer
export default userDashboardSlice.reducer;