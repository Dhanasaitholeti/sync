import { createSlice } from "@reduxjs/toolkit";

export interface themeStateType {
  theme: string;
}

interface actionType {
  payload: {
    theme: string;
  };
}

const initialState: themeStateType = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: actionType) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
