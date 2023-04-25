import { connect } from "mongoose";
import { MONGODB_URI } from "./vars";


async function dbConnect(): Promise<void> {
    try {
        const DB_URI = MONGODB_URI
        const response= await connect(DB_URI)
        console.log('Databse connected to ', response.connection.name);
    } catch (error: any) {
        throw new Error( error );
    }
}

export default dbConnect