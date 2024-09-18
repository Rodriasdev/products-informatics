import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import { userValidationRules } from "../models/Schema/userValidator";
import { validator } from "../middlewares/validator";
const router = Router();

router.post('/auth/register', userControllers.register);
router.post('/auth/login', userValidationRules,validator,userControllers.login)
router.get('/auth', userControllers.getUserByToken)


export default router;