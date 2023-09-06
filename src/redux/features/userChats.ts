import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: null,
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChats: (state) => {
      console.log("chats added");
    },
    removeChats: (state) => {
      console.log("chats removed");
    },
  },
});

export const { addChats, removeChats } = chatSlice.actions;

export default chatSlice.reducer;
