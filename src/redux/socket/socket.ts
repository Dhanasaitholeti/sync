import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  socketInstance: null,
};

export const socketSlice: any = createSlice({
  name: "socket",
  initialState,
  reducers: {
    InitializeSocket: (state, action: any) => {
      state.socketInstance = action.payload.socket;
    },
  },
});

export const { InitializeSocket } = socketSlice.actions;

export default socketSlice.reducer;
