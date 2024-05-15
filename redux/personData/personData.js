const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  content: {
    firstName: "Ibrahim",
    lastName: "Hassouna",
    email: "ibrahim.m.hassouna@gmail.com",
  },
  image: null,
};

const personData = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateImage(state, action) {
      state.image = action.payload;
    },
    updateData(state, action) {
      const { firstName, lastName, email } = action.payload;
      if (firstName !== undefined) state.content.firstName = firstName;
      if (lastName !== undefined) state.content.lastName = lastName;
      if (email !== undefined) state.content.email = email;
    },
  },
});

export const { updateImage, updateData } = personData.actions;
export default personData.reducer;