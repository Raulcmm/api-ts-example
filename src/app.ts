
import express from "express";
import cors from 'cors';
import { PORT } from "./config/vars";
import {router} from "./routes";
import dbConnect from "./config/db";

const app = express()
app.use(express.json())


app.use(cors(
    // {
    //     origin:['http://localhost:300']
    // }
))
app.use(router)
dbConnect()

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})