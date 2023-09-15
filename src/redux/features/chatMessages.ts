import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  msgs: null,
  err: false,
};

export const msgSlice: any = createSlice({
  name: "Messages",
  initialState,
  reducers: {
    updateMsgs: (state, action: any) => {
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
