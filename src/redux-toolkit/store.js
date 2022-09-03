import { configureStore } from "@reduxjs/toolkit";
import mainCategoryReducer from "./reducers/mainCategory";
import regionsReducer from "./reducers/regionList";

export const store = configureStore({
  reducer: {
    category: mainCategoryReducer,
    regions: regionsReducer,
  },
});
