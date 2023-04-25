import { compare } from "bcryptjs"
import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/users"
import { encrypt, verified } from "../utils/bcrypt.handler"
import { generateToken } from "../utils/jwt.handler"

export const registerNewUser = async({email, password, name, description}: User) => {
    const checkIs = await UserModel.findOne({email})
    if(checkIs){
        return 'ALREADY_USER'
    }
    const passwordEncrypted = await encrypt(password)
    const registerNewUSer = await UserModel.create({email,password: passwordEncrypted, name, description})
    return registerNewUSer
}
export const loginNewUser = async(userAuth: User ) => {
    const userRegisted = await UserModel.findOne({email:userAuth.email})
    const isValid = await verified(userAuth.password, userRegisted?.password!)
    if(isValid){
        const jwt = await generateToken(String(userRegisted?._id), String(userRegisted?.email))
        return jwt
    }
}