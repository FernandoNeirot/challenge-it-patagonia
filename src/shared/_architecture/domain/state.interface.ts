import { IPhrases } from "./phrases.interfaces";

export interface IUser {
  id: string;
  user: string;  
  userName: string;
}
export interface IPhraseResponse{
  data: IPhrases[];
  error: string;
  loading: boolean;
}
export interface ISearch{
  search: string;
}
export interface IStateRedux {
  user: IUser;
  phrases: IPhraseResponse;
  search: ISearch;
}