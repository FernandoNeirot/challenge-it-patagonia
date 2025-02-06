import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../../shared/utils/localStorage";
// recupero datos de session del localstorage
const user = LOCAL_STORAGE.get(LOCAL_STORAGE.constants.JWT);

const initialState = {
  id: user?.id || "",
  user: user?.user || "",
  userName: user?.userName || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id, user,userName } = action.payload;
      state.id = id;
      state.user = user;
      state.userName = userName;

    },
  },
});

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;