import { createSlice } from "@reduxjs/toolkit";

interface chatType {
  ChatId: string;
  Chatpartner: string;
  ChatpartnerId: string;
}

interface actionType {
  payload: { chats: chatType[]; err: Boolean };
}

export interface chatStateType {
  chats: chatType[] | null;
  err: Boolean;
}

const initialState: chatStateType = {
  chats: null,
  err: false,
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    updateChats: (state, action: actionType) => {
      state.chats = action.payload.chats;
      state.err = action.payload.err;
    },
  },
});

export const { updateChats } = chatSlice.actions;

export default chatSlice.reducer;
