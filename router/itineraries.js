import { Router } from "express";
import {
  getAllItineraries,
  getItineraryById,
  getItinerariesByCityId,
} from "../controllers/itineraries/read.js";
import createItinerary from "../controllers/itineraries/create.js";
import updateItinerary from "../controllers/itineraries/update.js";
import deleteItinerary from "../controllers/itineraries/delete.js";
import badRequestHandler from "../middlewares/bad_request_handler.js";
import validator from "../middlewares/validator.js"
import schemaItineraryCreated from "../schemas/itineraries/create.js";



const router = Router();

const requiredFields = ["author", "price", "duration", "hashtags"];

router.get("/", getAllItineraries);
router.get("/:id", getItineraryById);
router.get("/city/:cityId", getItinerariesByCityId);
router.post("/create", validator(schemaItineraryCreated), badRequestHandler(requiredFields), createItinerary);
router.put("/update/:id", updateItinerary);
router.delete("/delete/:id", deleteItinerary);

export default router;
