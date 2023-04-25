import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";
import { handleForbidden } from "../utils/error.handler";
import { RequestExtend } from "../interfaces/orders.interface";

export const privateRoute = async (req:RequestExtend, res:Response, next:NextFunction)=>{
    try {
        const authHeader = req.headers['authorization']?.split(' ')[1]
        const userVerified = await verifyToken(String(authHeader)) as {id:string}
        req.user = userVerified
        next();
    } catch (error) {
        handleForbidden(res)
    }
}