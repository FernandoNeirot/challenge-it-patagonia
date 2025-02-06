import { IError } from "../../../shared/_architecture/domain/error.interface";

export interface IUser {
  id: string;
  userName: string;
  password: string;
  userTypeId: string;
}

export interface ResponseApiLogin {
  data: IUser | null;
  error: IError | null;
}
