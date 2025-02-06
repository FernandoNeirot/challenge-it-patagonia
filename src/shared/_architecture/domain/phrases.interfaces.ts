import { IError } from "./error.interface";

export interface IPhrases{
  id:string;
  description:string;
}

export interface ResponseGetPhrases {
  data: IPhrases[] | null;
  error: IError | null;
}