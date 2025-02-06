import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  openMobileMenu: false,
  openModalCreatePhrase: false,
  phraseSelected: null
};

export const globalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changePhraseSelected: (state, action) => {
      const  phrase = action.payload;
      state.phraseSelected = phrase;      
    },
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

export const { changeSearch,changeMobileMenu,changeModalCreatePhrases, changePhraseSelected } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
