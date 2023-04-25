import { Response } from "express"


export const handleErrorHttp=(res:Response, message:string, errorRaw? : any)=>{
    res.status(500).send({
        failed:message,
        error: errorRaw?.message
    })

}

export const handleForbidden =(res:Response)=>{
    res.status(403).send({
        message:'ok',
        error:'NOT AUTHORIZED'
    })
}