import { compare, hash } from "bcryptjs"

export const encrypt = async(passwordPlane: string)=>{
    return await hash(passwordPlane,8)
}

export const verified = async(passwordPlane:string, passwordHash:string)=>{
    const isValid = await compare(passwordPlane, passwordHash)
    return isValid
}