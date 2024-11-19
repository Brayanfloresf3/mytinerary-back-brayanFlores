import { Router } from "express";
import singIn from "../controllers/auth/signIn.js";
import accountNoExists from "../middlewares/accountNoExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";

const router = Router();

router.post("/signIn", accountNoExists, isValidPassword, generateToken, singIn);

export default router;
