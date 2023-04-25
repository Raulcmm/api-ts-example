import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items";

// aqui la logica del negocio, es decir, inserciones a la base de datos, subir aechivos
// manejar posible escenarios para solo responder algo y en el controller regresar la respues
export const insertCar = async(item: Car) =>{
    return await  ItemModel.create(item)
}

export const getCars = async() =>{
    return await ItemModel.find()
}

export const getCar = async(idCar:String) =>{
    return await ItemModel.findById(idCar)
}

export const deleteCar = async(idCar:String)=>{
    return await ItemModel.findByIdAndDelete(idCar)
}

export const updateCar= async(idCar:String, updateFields:Car)=>{
    return await ItemModel.findByIdAndUpdate(idCar,updateFields,{new:true})
}