import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExists from "../middlewares/accountNoExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
import validateToken from "../controllers/auth/validateToken.js";
import verifyToken from "../middlewares/verifyToken.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";

const router = Router();

router.post("/signIn", accountNoExists, isValidPassword, generateToken, signIn);
router.post("/signOut", passport.authenticate('jwt',{session:false}), signOut )
router.get("/validateToken", verifyToken, validateToken)

// Ruta para iniciar sesion con google
router.get(
    '/signIn/google',
   passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)
router.get(
    '/signIn/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signInGoogle
)


export default router;
