// // src/redux/slices/powerChartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// // Dummy chart data
// const initialState = {
//     charts: [
//         {
//             id: 1,
//             title: "Main Building",
//             labels: ["Jan", "Feb", "Mar", "Apr"],
//             dataPoints: [20, 30, 25, 40],
//             barColor: "#00ffff",
//             bgColor: "rgba(0,255,255,0.5)",
//         },

//     ],
// };

// const currentPowerChartSlice = createSlice({
//     name: "powerChart",
//     initialState,
//     reducers: {
//         addChart: (state, action) => {
//             state.charts.push(action.payload);
//         },
//         removeChart: (state, action) => {
//             state.charts = state.charts.filter((chart) => chart.id !== action.payload);
//         },
//         updateChart: (state, action) => {
//             const index = state.charts.findIndex((chart) => chart.id === action.payload.id);
//             if (index !== -1) {
//                 state.charts[index] = action.payload;
//             }
//         },
//     },
// });

// export const { addChart, removeChart, updateChart } = currentPowerChartSlice.actions;
// export const selectPowerCharts = (state) => state.powerChart.charts;
// export default currentPowerChartSlice.reducer;

// src/redux/slices/powerChartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  charts: [], // start empty — you'll fill this with init data
};

const currentPowerChartSlice = createSlice({
  name: "powerChart",
  initialState,
  reducers: {
    setCharts: (state, action) => {
      state.charts = action.payload;
    },
    addChart: (state, action) => {
      state.charts.push(action.payload);
    },
    removeChart: (state, action) => {
      state.charts = state.charts.filter(
        (chart) => chart.id !== action.payload
      );
    },
    updateChart: (state, action) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index] = action.payload;
      }
    },
  },
});

export const { setCharts, addChart, removeChart, updateChart } =
  currentPowerChartSlice.actions;

export const selectChartsByDashboard = (state) => state.powerChart.charts;


export default currentPowerChartSlice.reducer;
