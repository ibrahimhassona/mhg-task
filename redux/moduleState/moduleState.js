import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdd: false,
  edit: {
    isEdit: false,
    id: 0,
  },
};
const moduleState = createSlice({
  name: "module",
  initialState,
  reducers: {
    setModuleAdd(state, action) {
      state.edit = { isEdit: false, id: 0 }; // Resetting edit state
      state.isAdd = action.payload; // Setting isAdd to the payload value
    },
    setModuleEdit(state, action) {
      state.isAdd = false; // Resetting isAdd state
      state.edit = action.payload; // Setting edit to the payload value
    }
  },
});

export const { setModuleAdd, setModuleEdit } = moduleState.actions;
export default moduleState.reducer;
