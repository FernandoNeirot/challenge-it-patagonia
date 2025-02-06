import { IError } from "../../../shared/_architecture/domain/error.interface";

export interface IUser {
  id: string;
  user: string
  userName: string;
  password: string;
}

export interface ResponseApiLogin {
  data: IUser | null;
  error: IError | null;
}
