
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "hello",
  breadcrumbs: [],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderTitle: (state, action) => {
      state.title = action.payload;
    },
    setBreadcrumbs: (state, action) => {
      state.breadcrumbs = action.payload;
    },
  },
});

export const { setHeaderTitle, setBreadcrumbs } = headerSlice.actions;
export default headerSlice.reducer;
