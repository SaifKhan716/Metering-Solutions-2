// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from ".";
// import { persistStore } from "redux-persist";

// // Create and configure store
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store); 
// export default { store, persistor };

// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "."; // assuming index.js is in redux/

import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
