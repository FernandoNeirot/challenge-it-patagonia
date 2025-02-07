import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../utils/configFirebase";
import { IPhrases, ResponseGetPhrases } from "../domain/phrases.interfaces";

export const apiGetPhrases = async (id:string): Promise<ResponseGetPhrases> => {
  
  try {
    const array: IPhrases[] = [];
    const q = query(collection(db, "PHRASES"),where("userId", "==", id),where("deleted", "==", false));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data as IPhrases);
    });
    if (array.length === 0) {
      return {
        data: null,
        error: { isError: true, status: 401, message: "Error de credenciales" },
      };
    }
    return { data: array, error: null };
  } catch {

    return {
      data: null,
      error: { isError: true, status: 404, message: "Error al recuperar datos" },
    };
  }
};

export const apiCreatePhrase = async (data: IPhrases): Promise<boolean> => {  
  try{
    const docsRef = collection(db, "PHRASES");
    await addDoc(docsRef, data);
    return true;
  }catch{
    return false;
  }
};


export const apiUpdatePhrase = async (
  data: Partial<IPhrases>,
  id: string
) => {
try{
  const docRef = doc(db, "PHRASES", id);
  await updateDoc(docRef, data);
  return true;
}catch{
  return false;
}
};

export const apiDeletePhrase = async (  
  data: Partial<IPhrases>,
  id: string
) => {
  try{
    const docRef = doc(db, "PHRASES", id);
    await updateDoc(docRef, data);
    return true;
  }catch{
    return false;
  }
};