import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";
import UserModel from "../models/users"

export const uploadFiles = async ({ fileName, idUser, path }: Storage) => {
    const responseItem = await StorageModel.create({ fileName, idUser, path });
    // console.log(responseItem);
    return responseItem;
};