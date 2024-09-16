import { Router } from "express";
import userControllers from "../controllers/user.controllers";
const router = Router();

router.post('/auth/register', userControllers.register);
router.post('/auth/login', userControllers.login)
router.get('/auth', userControllers.getUserByToken)


export default router;