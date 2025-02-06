import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../shared/utils/configFirebase";
import { IUser, ResponseApiLogin } from "../domain/interfaces";

interface ILoginProps {
  user: string;
  pass: string;
}

export const apiLoginFirebase = async ({
  user,
  pass,
}: ILoginProps): Promise<ResponseApiLogin> => {
  try {
    const array: IUser[] = [];
    const q = query(
      collection(db, "USERS"),
      where("user", "==", user),
      where("password", "==", pass)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data as IUser);
    });
    if (array.length === 0) {
      return {
        data: null,
        error: { isError: true, status: 401, message: "Error de credenciales" },
      };
    }
    return { data: {...array[0],password:"********"}, error: null };
  } catch (e) {
    console.log("error", e);
    return {
      data: null,
      error: { isError: true, status: 401, message: "Error de credenciales" },
    };
  }
};
