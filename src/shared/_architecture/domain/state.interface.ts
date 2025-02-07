import store from "../../../redux/store";
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
export interface IAlert{
  title: string;
  message: string;
  open: boolean;
  type: string;
}
export interface IPhraseSelected{
  phrase: IPhrases | null;
  type: string;
}
export interface IGlobal{
  search: string;
  openModalCreatePhrase: boolean;
  openMobileMenu: boolean;
  phraseSelected: IPhraseSelected;
  openPopupAlert: IAlert;
}
export interface IStateRedux {
  user: IUser;
  phrases: IPhraseResponse;
  search: ISearch;
  global:IGlobal
}

export type AppDispatch = typeof store.dispatch;