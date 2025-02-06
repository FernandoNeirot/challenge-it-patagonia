import { IPhrases } from "../domain/phrases.interfaces";
import { apiCreatePhrase } from "../infrastructure/phrases.api";

export const createPhrases = async (data:IPhrases): Promise<boolean> => {
  const response = await apiCreatePhrase(data);
  //-----------------------------------------------------------------------------------------------
  // Se agrega alguna logica de negocio sobre la respuesta para enviarle a la capa de presentación
  //-----------------------------------------------------------------------------------------------
  return response;
};