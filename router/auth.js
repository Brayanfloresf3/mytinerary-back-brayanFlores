import { Router } from "express";
import singIn from "../controllers/auth/signIn.js";
import accountNoExists from "../middlewares/accountNoExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";

const router = Router();

router.post("/signIn", accountNoExists, isValidPassword, singIn);

export default router;
