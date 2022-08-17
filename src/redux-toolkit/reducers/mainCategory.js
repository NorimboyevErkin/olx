import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const mainCategory = createSlice({
  name: "category",
  initialState,
  reducers: {
    setmainCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setmainCategory } = mainCategory.actions;

export default mainCategory.reducer;
