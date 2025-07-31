// import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import headerReducer from "../slice/headerSlice";
// import currentPowerChartReducer from "../slice/currentPowerChartSlice";
// import initialUserDashboardReducer from "../slice/userDashboardSlice";
// import authReducer from "../slice/authSlice"; 
// import meterReducer from "../slice/meterManagementSlice";

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["user", "token"],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// const rootReducer = combineReducers({
//   header: headerReducer,
//   powerChart: currentPowerChartReducer,
//   userDashboard: initialUserDashboardReducer,
//   auth: persistedAuthReducer, 
//   meter: meterReducer,
// });

// export default rootReducer;

// redux/index.js or redux/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import headerReducer from "../slice/headerSlice";
import currentPowerChartReducer from "../slice/currentPowerChartSlice";
import initialUserDashboardReducer from "../slice/userDashboardSlice";
import authReducer from "../slice/authSlice";
import meterReducer from "../slice/meterManagementSlice";
import userMangementReducer from "../slice/userMangementSlice";
import { adminDashboard } from "../../api/apiService";
import adminDahboardReducer from "../slice/adminDashboardSlice";
import superAdminMeterDataReducer from '../slice/superAdminMeterSlice'

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  header: headerReducer,
  powerChart: currentPowerChartReducer,
  userDashboard: initialUserDashboardReducer,
  auth: persistedAuthReducer,
  meter: meterReducer,
  usersMangement: userMangementReducer,
  adminDashboard: adminDahboardReducer,
  meters:superAdminMeterDataReducer
});

export default rootReducer;
