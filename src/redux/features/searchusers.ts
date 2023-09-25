import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  err: false,
};

export const searchSlice: any = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchusers: (state, action: any) => {
      state.users = action.payload.userlist;
      state.err = action.payload.err;
    },
  },
});

export const { updateSearchusers } = searchSlice.actions;

export default searchSlice.reducer;
