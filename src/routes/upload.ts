import { Router } from "express";
import { uploadItems } from "../controllers/upload.controller";
import multerMiddleware from "../middlewares/multer.middleware";
import { privateRoute } from "../middlewares/privateRoute.middleware";

/**
 * Solo pueden acceder personas con secccion activa
 * un JWT valido
 */
const router=Router()

router.post('/', privateRoute, multerMiddleware.single('myfile'), uploadItems)

export { router };

