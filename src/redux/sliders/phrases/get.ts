/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPhrases } from "../../../shared/_architecture/application/getPhrases";
interface IProps {
  id: string;
}
export const getPhrasesSlider = createAsyncThunk('get/phrasesSlider', async ({id}:IProps):Promise<any> => {
  const response = await getPhrases(id);
  return response;
})