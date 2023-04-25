import { Request, Response } from "express"
import { handleErrorHttp } from "../utils/error.handler"
import { loginNewUser, registerNewUser } from "../services/auth"
import UserModel from "../models/users";
import { generateToken } from "../utils/jwt.handler";


export const registerCtrl = async(req: Request, res: Response)=>{
    try {
        const response = await registerNewUser(req.body)
        res.send({response})
    } catch (error) {
        handleErrorHttp(res,'ERROR_LOGIN',error)
    }
}

export const loginCtrl = async(req: Request, res: Response) => {
    try {
        if(req.body.email){
            const usuarioValido = await loginNewUser(req?.body)
            if(usuarioValido){
                res.status(201).send({
                    message:'ok',
                    data:usuarioValido,
                    // jwt:
                })
            }else{
                res.status(404).send({
                    message:'error',
                    data:"Correo o contraseña invalidos"
                })
            }
        }
    } catch (error) {
        handleErrorHttp(res,'ERROR_LOGIN')
    }

}