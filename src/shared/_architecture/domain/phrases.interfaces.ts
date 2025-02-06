import { IError } from "./error.interface";

export interface IPhrases{
  id?:string;
  description:string;
  userId:string;
  created:string;
  deleted:boolean;
  category?:string;
}

export interface ResponseGetPhrases {
  data: IPhrases[] | null;
  error: IError | null;
}