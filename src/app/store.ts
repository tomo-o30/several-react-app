import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/userSlice";
import channelReducer from "../redux/features/channelSlice";

export const store = configureStore({
  reducer: {
    user:userReducer,
    channel:channelReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
