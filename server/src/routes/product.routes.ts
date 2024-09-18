import { Router } from "express";
import ProductControllers from "../controllers/product.controllers";
import { validateToken } from "../middlewares/validateToken";

const router = Router()


router.post('/product',validateToken)
router.get('/product', ProductControllers.findAll)
router.get('/product/:id', ProductControllers.findOne)
router.put('/product', ProductControllers.update)


export default router;