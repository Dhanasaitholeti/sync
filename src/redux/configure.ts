import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./features/userChats";

export const store = configureStore({
  reducer: {
    userChats: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
