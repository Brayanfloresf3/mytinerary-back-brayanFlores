import { Router } from "express";
import { getAllCities, getCityById } from "../controllers/cities/read.js";
import createCity from "../controllers/cities/create.js";
import updateCity from "../controllers/cities/update.js";
import deleteCity from "../controllers/cities/delete.js";
import badRequestHandler from "../middlewares/bad_request_handler.js";
import validator from "../middlewares/validator.js"
import schemaCityCreated from "../schemas/cities/create.js";
import passport from "../middlewares/passport.js";

const router = Router();

const requiredFields = [
  "name",
  "photo",
  "country",
  "continent",
  "description",
  "languages",
];

router.get("/", getAllCities);
router.get("/:id", getCityById);
router.post("/create", validator(schemaCityCreated), badRequestHandler(requiredFields), createCity);
router.put("/update/:id", passport.authenticate('jwt',{session:false}), updateCity);
router.delete("/delete/:id", passport.authenticate('jwt',{session:false}), deleteCity);

export default router;
