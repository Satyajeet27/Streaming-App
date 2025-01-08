import { configureStore } from "@reduxjs/toolkit";
import { streamingApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [streamingApi.reducerPath]: streamingApi.reducer,
  },
  middleware: (gDM) => gDM().concat(streamingApi.middleware),
});
