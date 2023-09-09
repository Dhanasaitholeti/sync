import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { updateMsgs } = msgSlice.actions;

export default msgSlice.reducer;
