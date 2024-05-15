const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  dataLinks: [
    { id: 1, title: "github", url: "https://github.com/ibrahimhassona" },
    {
      id: 2,
      title: "linkedin",
      url: "https://www.linkedin.com/in/ibrahim-hassouna-332448285/",
    },
    {
      id: 3,
      title: "youtube",
      url: "https://www.youtube.com/@Ibrahim_hassouna_web",
    },
  ],
};
const dataLinks = createSlice({
  name: "dataLinks",
  initialState,
  reducers: {
    addLink(state, action) {
      const id = state.dataLinks.length > 0 ? state.dataLinks.length + 1 :1;
      state.dataLinks.push({ id, ...action.payload });
    },
    removeLink(state, action) {
      state.dataLinks = state.dataLinks.filter(
        (link) => link.id !== action.payload
      );
    },
    updateLink(state, action) {
      const { id, title, url } = action.payload;
      const index = state.dataLinks.findIndex((link) => link.id === id);
      if (index !== -1) {
        state.dataLinks[index] = { id, title, url };
      }
    },
  },
});

export const { addLink, removeLink, updateLink } = dataLinks.actions;
export default dataLinks.reducer;
