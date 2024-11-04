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

const router = Router();

const requiredFields = ["author", "price", "duration", "hashtags"];

// Rutas
router.get("/", getAllItineraries);
router.get("/:id", getItineraryById);
router.get("/city/:cityId", getItinerariesByCityId); // Consultar itinerarios por ID de ciudad
router.post("/create", badRequestHandler(requiredFields), createItinerary);
router.put("/update/:id", updateItinerary);
router.delete("/delete/:id", deleteItinerary);

export default router;
