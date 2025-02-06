import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./sliders/user";
import { phrasesReducer } from "./sliders/phrases";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userType: phrasesReducer,
  },
});
