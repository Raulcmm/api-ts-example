import { Schema, model } from "mongoose";
import { Order } from "../interfaces/orders.interface";

const OrdersSchema= new Schema <Order>(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true, // cuando se guarde un dato, se crea fecha creacion y actualizacion
        versionKey:false
    }
)

const OrdersItem = model('orders', OrdersSchema)

export default OrdersItem;
