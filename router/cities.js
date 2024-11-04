import { Router } from "express";
import { getAllCities, getCityById } from "../controllers/cities/read.js";
import createCity from "../controllers/cities/create.js";
import updateCity from "../controllers/cities/update.js";
import deleteCity from "../controllers/cities/delete.js";
import badRequestHandler from "../middlewares/bad_request_handler.js";

const router = Router();

const requiredFields = [
  "name",
  "photo",
  "country",
  "continent",
  "description",
  "languages",
];

// Rutas
router.get("/", getAllCities);
router.get("/:id", getCityById);
router.post("/create", badRequestHandler(requiredFields), createCity);
router.put("/update/:id", updateCity);
router.delete("/delete/:id", deleteCity);

export default router;
