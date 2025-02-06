import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../../shared/utils/localStorage";

const user = LOCAL_STORAGE.get(LOCAL_STORAGE.constants.JWT);

const initialState = {
  id: user?.id || "",
  userName: user?.userName || "",
  userTypeId: user?.userTypeId || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id, userName, userTypeId } = action.payload;
      state.id = id;
      state.userName = userName;
      state.userTypeId = userTypeId;
    },
  },
});

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;