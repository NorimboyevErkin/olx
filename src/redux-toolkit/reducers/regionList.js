import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const regionList = createSlice({
  name: "regions",
  initialState,
  reducers: {
    setregionList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setregionList } = regionList.actions;

export default regionList.reducer;
