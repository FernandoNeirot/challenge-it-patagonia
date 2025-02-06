import { ResponseGetPhrases } from "../domain/phrases.interfaces";
import { apiGetPhrases } from "../infrastructure/phrases.api";

export const getPhrases = async (id:string): Promise<ResponseGetPhrases> => {
  const response = await apiGetPhrases(id);
  //-----------------------------------------------------------------------------------------------
  // Se agrega alguna logica de negocio sobre la respuesta para enviarle a la capa de presentación
  //-----------------------------------------------------------------------------------------------
  return response;
};