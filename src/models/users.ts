import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";
import { User } from "../interfaces/user.interface";

const UserSchema= new Schema <User>(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            default:'Sin description'
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true, // cuando se guarde un dato, se crea fecha creacion y actualizacion
        versionKey:false
    }
)

const UserModel = model('users', UserSchema)

export default UserModel;