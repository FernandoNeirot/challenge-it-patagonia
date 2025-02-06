import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./sliders/user";
import { phrasesReducer } from "./sliders/phrases";
import { globalReducer } from "./sliders/global";

export const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer,
    phrases: phrasesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
