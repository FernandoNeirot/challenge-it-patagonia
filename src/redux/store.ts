import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./sliders/user";
import { phrasesReducer } from "./sliders/phrases";
import { searchReducer } from "./sliders/search";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    phrases: phrasesReducer,
  },
});
