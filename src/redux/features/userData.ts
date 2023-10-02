import { createSlice } from "@reduxjs/toolkit";

interface userDataType {
  userId: string;
  userEmail: string;
  userName: string;
}

interface actionType {
  payload: {
    user: userDataType;
    err: Boolean;
  };
}

export interface userDataStateType {
  user: userDataType | null;
  err: Boolean;
}

const initialState: userDataStateType = {
  user: null,
  err: false,
};

export const userSlice: any = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateUser: (state, action: actionType) => {
      state.user = action.payload.user;
      state.err = action.payload.err;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
