import { Router } from "express";
import citiesRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";

const router = Router();

router.use("/cities", citiesRouter);
router.use("/itineraries", itinerariesRouter);

export default router;
