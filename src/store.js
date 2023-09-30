import { configureStore } from "@reduxjs/toolkit";
import { mockApi } from "./api/mockApi";
import { countryApi } from "./api/countryApi";

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(mockApi.middleware)
      .concat(countryApi.middleware),
});
