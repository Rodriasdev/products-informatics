import { Router } from "express";
import ProductControllers from "../controllers/product.controllers";

const router = Router()


router.post('/product',ProductControllers.create)
router.get('/product', ProductControllers.findAll)
router.get('/product/:id', ProductControllers.findOne)
router.put('/product', ProductControllers.update)


export default router;