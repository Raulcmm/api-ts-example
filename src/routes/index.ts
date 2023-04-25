import { Router } from "express";
import {readdirSync} from 'fs'

const router = Router()

const cleanName = ( filename: string ) => {
    return filename.split('.').shift()
}

readdirSync(__dirname).forEach(filename=>{
    const nameRoute = cleanName(filename)
    import(`./${nameRoute}`)
    .then(routerModule=>{
        if( nameRoute !== 'index' ){
            console.log('Cargando ruta... /',nameRoute);
            router.use(`/${nameRoute}`, routerModule.router);
        }
    })
    .catch(err=>{
        throw new Error(err);
    })
})

export {router}
