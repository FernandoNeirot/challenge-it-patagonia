import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  openMobileMenu: false,
  openModalCreatePhrase: false,
};

export const globalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      const { search } = action.payload;
      state.search = search;      
    },
    changeMobileMenu: (state) => {      
      state.openMobileMenu = !state.openMobileMenu;      
    },
    changeModalCreatePhrases: (state) => {      
      state.openModalCreatePhrase = !state.openModalCreatePhrase;      
    },
  },
});

export const { changeSearch,changeMobileMenu,changeModalCreatePhrases } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
