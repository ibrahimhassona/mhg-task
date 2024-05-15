import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isValid: false,
};
const urlValidSlice = createSlice({
  name: 'url', 
  initialState, 
  reducers: {
    setUrlValidity(state, action) {
      state.isValid = action.payload; 
    },
  },
});

export const { setUrlValidity } = urlValidSlice.actions;
export default urlValidSlice.reducer;
