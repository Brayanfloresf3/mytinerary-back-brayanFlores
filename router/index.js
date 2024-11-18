import { Router } from "express";
import citiesRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";
import usersRouter from "./users.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/cities", citiesRouter);
router.use("/itineraries", itinerariesRouter);
router.use("/auth", authRouter);

export default router;
