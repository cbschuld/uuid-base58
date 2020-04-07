import { encode as base58encode, decode as base58decode } from "./uuid58";
import { v4 as uuid } from 'uuid';

export const uuid58 = () : string => encode(uuid().replace(/-/g,""));
export const encode = (id:string) => base58encode(id);
export const decode = (id:string) => base58decode(id);