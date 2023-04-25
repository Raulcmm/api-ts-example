import UserModel from "../models/users"

export const getOrders = async() => {
    const checkIs = await UserModel.find()
    if(checkIs){
        return 'ALREADY_USER'
    }
}
