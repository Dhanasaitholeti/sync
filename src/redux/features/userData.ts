import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  err: false,
};

export const userSlice: any = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateUser: (state, action: any) => {
      state.user = action.payload.user;
      state.err = action.payload.err;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
