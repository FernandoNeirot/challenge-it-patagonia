import { IPhrases } from "../domain/phrases.interfaces";
import { apiUpdatePhrase } from "../infrastructure/phrases.api";

export const updatePhrases = async (data:IPhrases): Promise<boolean> => {
  const response = await apiUpdatePhrase(data, data.id??"");
  //-----------------------------------------------------------------------------------------------
  // Se agrega alguna logica de negocio sobre la respuesta para enviarle a la capa de presentación
  //-----------------------------------------------------------------------------------------------
  return response;
};