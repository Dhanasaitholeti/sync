import { configureStore } from "@reduxjs/toolkit";
import chatReducer, { chatStateType } from "./features/userChats";
import msgReducer from "./features/chatMessages";
import userReducer, { userDataStateType } from "./features/userData";
import searchUserReducer, { searchUserStateType } from "./features/searchusers";
export const store = configureStore({
  reducer: {
    user: userReducer,
    userChats: chatReducer,
    chatMsgs: msgReducer,
    searchUser: searchUserReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootState = {
  user: userDataStateType; // Use the type from user.ts
  userChats: chatStateType;
  // chatMsgs: ChatMsgsState; // Define types for other slices too
  searchUser: searchUserStateType;
};
