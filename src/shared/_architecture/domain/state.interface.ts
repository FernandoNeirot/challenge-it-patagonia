import { IPhrases } from "./phrases.interfaces";

export interface IUser {
  id: string;
  name: string;  
}
export interface IPhraseResponse{
  data: IPhrases[];
  error: string;
  loading: boolean;
}
export interface IStateRedux {
  user: IUser;
  phrases: IPhraseResponse;
}