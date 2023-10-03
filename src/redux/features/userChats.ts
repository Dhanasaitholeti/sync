import { createSlice } from "@reduxjs/toolkit";

interface chatType {
  ChatId: string;
  Chatpartner: string;
  ChatpartnerId: string;
}

interface actionType {
  payload: { chats: chatType[] | null; err: Boolean };
}

export interface chatStateType {
  chats: null | chatType[];
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
    realtimeUpdate: (
      state,
      action: { payload: { chat: chatType | null; err: Boolean } }
    ) => {
      if (action.payload.chat) {
        state.chats?.push(action.payload.chat);
        state.err = action.payload.err;
      }
    },
  },
});

export const { updateChats, realtimeUpdate } = chatSlice.actions;

export default chatSlice.reducer;
