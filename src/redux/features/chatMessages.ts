import { createSlice } from "@reduxjs/toolkit";

interface messageType {
  id: string;
  content: string;
  senderId: string;
  chatId: string;
  sentTime: string;
}

interface updatemsgsActionType {
  payload: {
    msgs: msgstype;
    err: Boolean;
  };
}

type msgstype = Record<string, messageType[]>;

export interface chatMsgsStateType {
  msgs: msgstype | null;
  err: Boolean;
}

const initialState: chatMsgsStateType = {
  msgs: null,
  err: false,
};

export const msgSlice: any = createSlice({
  name: "Messages",
  initialState,
  reducers: {
    updateMsgs: (state, action: updatemsgsActionType) => {
      state.msgs = action.payload.msgs;
      state.err = action.payload.err;
    },
    realtimeUpdate: (state, action: any) => {
      const { msg } = action.payload;
      state.msgs[msg.chatId].push(msg);
    },
  },
});

export const { updateMsgs, realtimeUpdate } = msgSlice.actions;

export default msgSlice.reducer;
