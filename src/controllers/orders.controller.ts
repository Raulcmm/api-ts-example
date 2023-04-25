import { Request, Response } from "express";
import { getOrders } from "../services/orders";
import { handleErrorHttp } from "../utils/error.handler";
import { RequestExtend } from "../interfaces/orders.interface";


export const getItems = async (req: RequestExtend, res:Response)=>{
    try {
        const response = await getOrders()
        res.status(200).send({
            message:'ok',
            data:req.user
        })
    } catch (error) {
        handleErrorHttp(res,'ERROR_GET_ITEMS', error)
    }
}