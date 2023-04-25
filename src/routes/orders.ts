import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.controller";
import { getItems } from "../controllers/orders.controller";
import { privateRoute } from "../middlewares/privateRoute.middleware";

/**
 * Solo pueden acceder personas con secccion activa
 * un JWT valido
 */
const router=Router()

router.get('/', privateRoute, getItems)

export { router };
