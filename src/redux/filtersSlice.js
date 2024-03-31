import { createSlice } from "@reduxjs/toolkit";

const changeFilter = createSlice({
  name: "contacts",
  initialState: {
    name: "",
  },

  reducers: {
    selectNameFilter(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addContact, deleteContact } = changeFilter.actions;

export const changeFilterReducer = changeFilter.reducer;
