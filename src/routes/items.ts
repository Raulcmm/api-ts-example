import { Router } from "express";
import { deleteItem, getItem, getItems, postItems, upudateItem } from "../controllers/items.controller";

const router=Router()

router.get('/',getItems)
router.get('/:id',getItem)
router.post('/',postItems)
router.put('/:id',upudateItem)
router.delete('/:id',deleteItem)

export { router };
