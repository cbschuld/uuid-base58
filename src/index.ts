import { encode as base58encode, decode as base58decode, valid as base58valid } from "./uuid58";
import { v4 as uuidNoDash } from './uuid/v4';

export const uuid58 = () : string => encode(uuidNoDash());
export const encode = (id:string) => base58encode(id);
export const decode = (id:string) => base58decode(id);
export const valid = (id:string) => base58valid(id);
export const uuidV4NoDash = () => uuidNoDash();