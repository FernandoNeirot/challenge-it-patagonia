/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { getPhrasesSlider } from "./get";


const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const phrasesSliderSlice = createSlice({
  name: "get/phrasesSlider",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getPhrasesSlider.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getPhrasesSlider.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = action.payload.error;
    });
    builder.addCase(getPhrasesSlider.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const phrasesReducer = phrasesSliderSlice.reducer;
