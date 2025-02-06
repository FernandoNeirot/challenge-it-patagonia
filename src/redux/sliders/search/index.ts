import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search:""
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addsearch: (state, action) => {
      const { search } = action.payload;
      state.search = search;      
    },
  },
});

export const { addsearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;