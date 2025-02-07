import { createSlice } from "@reduxjs/toolkit";
import { IGlobal } from "../../../shared/_architecture/domain/state.interface";

const initialState:IGlobal = {
  search: "",
  openMobileMenu: false,
  openModalCreatePhrase: false,
  phraseSelected: {
    type: "",
    phrase: null
  },
  openPopupAlert: {
    open: false,
    message: "",
    title:"",
    type: "",
  },
};

export const globalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changePhraseSelected: (state, action) => {
      const  {phrase,type} = action.payload;
      state.phraseSelected.phrase = phrase;      
      state.phraseSelected.type = type;
    },
    changeSearch: (state, action) => {
      const { search } = action.payload;
      state.search = search;      
    },
    changeMobileMenu: (state) => {      
      state.openMobileMenu = !state.openMobileMenu;      
    },
    changePopupAlert: (state, action) => {      
      const {  message, type,title } = action.payload;         
      state.openPopupAlert.open = !state.openPopupAlert.open;
      state.openPopupAlert.message = message;
      state.openPopupAlert.type = type;
      state.openPopupAlert.title = title;
    },
    changeModalCreatePhrases: (state) => {          
      state.openModalCreatePhrase = !state.openModalCreatePhrase;      
    },
  },
});

export const { changeSearch,changeMobileMenu,changeModalCreatePhrases, changePhraseSelected, changePopupAlert } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
