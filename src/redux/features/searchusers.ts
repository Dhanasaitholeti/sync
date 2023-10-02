import { createSlice } from "@reduxjs/toolkit";

export interface searchUsersType {
  id: string;
  Name: string;
  Email: string;
}

interface actionType {
  payload: {
    userlist: searchUsersType[];
    err: Boolean;
  };
}

export interface searchUserStateType {
  users: searchUsersType[] | null;
  err: Boolean;
}

const initialState: searchUserStateType = {
  users: null,
  err: false,
};

export const searchSlice: any = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchusers: (state, action: actionType) => {
      state.users = action.payload.userlist;
      state.err = action.payload.err;
    },
  },
});

export const { updateSearchusers } = searchSlice.actions;

export default searchSlice.reducer;
