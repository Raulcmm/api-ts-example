import { Request, Response } from "express"
import { handleErrorHttp } from "../utils/error.handler"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item"


export const getItems = async (req: Request, res:Response)=>{
    try {
        const response = await getCars()
        res.status(200).send({
            message:'ok',
            data: response
        })
    } catch (error) {
        handleErrorHttp(res,'ERROR_GET_ITEMS', error)
    }
}


export const getItem=async(req: Request, res:Response)=>{
    try {
        if(req?.params?.id){
            const response = await getCar(req.params.id)
            res.status(200).send({
                    message:'ok',
                    data:response
                })
        }else{
            handleErrorHttp(res,'Param id is required')
        }
    } catch (error) {
        handleErrorHttp(res,'ERROR_GET_ITEM', error)
    }
}


export const postItems= async(req: Request, res:Response)=>{
    try {
        const response = await  insertCar(req.body)
        res.status(201).send({
            message:'ok',
            data:response
        })
    } catch (error) {
        handleErrorHttp(res,'ERROR_POST_ITEM', error)
    }
}

export const upudateItem=async(req: Request, res:Response)=>{
    const idCar= req?.params?.id
    try {
        if(idCar){
            const response= await updateCar(idCar,req.body)
            return res.status(200).send({
                message:'ok',
                data: response
            })
        }
        handleErrorHttp(res,'ERROR_UPDATE_ITEM',{message:'Id not provided'})
    } catch (error) {
        handleErrorHttp(res,'ERROR_UPDATE_ITEM', error)
    }
}

export const deleteItem = async (req: Request, res:Response) => {
    try {
        if(req?.params?.id){
            const response = await  deleteCar(req.params.id)
            res.status(200).send({
                message:'ok',
                data:response
            })
        }
    } catch (error) {
        handleErrorHttp(res,'ERROR_DELETE_ITEM', error)
    }
}