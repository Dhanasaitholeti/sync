import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./features/userChats";
import msgReducer from "./features/chatMessages";

export const store = configureStore({
  reducer: {
    userChats: chatReducer,
    chatMsgs: msgReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
