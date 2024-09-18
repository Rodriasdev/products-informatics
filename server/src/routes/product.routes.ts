import { Router } from "express";
import ProductControllers from "../controllers/product.controllers";
import { validateToken } from "../middlewares/validateToken";
import { productValidationRules } from "../models/Schema/productValidator";
import { validator } from "../middlewares/validator";
const router = Router()


router.post('/product',validateToken,productValidationRules,validator, ProductControllers.create)
router.get('/product', ProductControllers.findAll)
router.put('/product', ProductControllers.update)
router.get('/product/:id', ProductControllers.findOne)
router.delete('/product/:id', validateToken, ProductControllers.delete)

export default router;