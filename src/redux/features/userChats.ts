import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: null,
  err: false,
};

export const chatSlice: any = createSlice({
  name: "chats",
  initialState,
  reducers: {
    updateChats: (state, action: any) => {
      state.chats = action.payload.chats;
      state.err = action.payload.err;
    },
  },
});

export const { updateChats } = chatSlice.actions;

export default chatSlice.reducer;
