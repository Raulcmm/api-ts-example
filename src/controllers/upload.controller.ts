import { Request, Response, response } from "express";
import { getOrders } from "../services/orders";
import { handleErrorHttp } from "../utils/error.handler";
import { RequestExtend } from "../interfaces/orders.interface";
import { uploadFiles } from "../services/upload";
import { Storage } from "../interfaces/storage.interface";


export const uploadItems = async (req: RequestExtend, res:Response)=>{
    try {
        const { user, file } = req;
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id || ''}`,
            path: `${file?.path}`,
        };
        const response = await uploadFiles(dataToRegister);
        res.send({
            message:'ok',
            data:response
        })
    } catch (error) {
        handleErrorHttp(res,'ERROR_UPLOAD_ITEMS', error)
    }
}