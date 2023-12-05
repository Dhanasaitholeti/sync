import { configureStore } from "@reduxjs/toolkit";
import chatReducer, { chatStateType } from "./features/userChats";
import msgReducer from "./features/chatMessages";
import userReducer, { userDataStateType } from "./features/userData";
import searchUserReducer, { searchUserStateType } from "./features/searchusers";
import themeReducer, { themeStateType } from "./features/theme";
import filterMiddleware from "./filterMiddleware";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userChats: chatReducer,
    chatMsgs: msgReducer,
    searchUser: searchUserReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filterMiddleware),
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootState = {
  user: userDataStateType; // Use the type from user.ts
  userChats: chatStateType;
  chatMsgs: any; // Define types for other slices too
  searchUser: searchUserStateType;
  theme: themeStateType;
};
