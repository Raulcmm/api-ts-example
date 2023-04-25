import { verify,sign, JwtPayload } from 'jsonwebtoken'
import { SECRET_JWT } from '../config/vars'
import { ObjectId } from 'mongoose';


export const generateToken = async(id:string, email:string) => {
    const decoded = await sign({id, email}, SECRET_JWT,{
        expiresIn:'2h'
    })
    return decoded
}


export const verifyToken = async(token:string) => {
    const decoded = await verify(token,SECRET_JWT)
    return decoded
}