import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/configFirebase";
import { IPhrases, ResponseGetPhrases } from "../domain/phrases.interfaces";

export const apiGetPhrases = async (id:string): Promise<ResponseGetPhrases> => {
  
  try {
    const array: IPhrases[] = [];
    const q = query(collection(db, "PHRASES"),where("userId", "==", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data as IPhrases);
    });
    console.log(array)
    if (array.length === 0) {
      return {
        data: null,
        error: { isError: true, status: 401, message: "Error de credenciales" },
      };
    }
    return { data: array, error: null };
  } catch (e) {
    console.log("error", e);
    return {
      data: null,
      error: { isError: true, status: 404, message: "Error al recuperar datos" },
    };
  }
};
