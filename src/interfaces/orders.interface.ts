import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface Order{
    name:String,
    description:string;
    price:number
}
export interface RequestExtend extends Request{
    user?: JwtPayload |  { id: string }
}