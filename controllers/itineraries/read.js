import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js";

// Obtener todos los itinerarios
let getAllItineraries = async (req, res, next) => {
  try {
    let itineraries = await Itinerary.find().populate("city");
    return res.status(200).json({
      response: itineraries,
    });
  } catch (error) {
    next(Error);
  }
};

// Obtener itinerarios de una ciudad específica
let getItinerariesByCityId = async (req, res, next) => {
  try {
    let { cityId } = req.params;
    let itineraries = await Itinerary.find({ city: cityId });
    return res.status(200).json({
      response: itineraries,
    });
  } catch (error) {
    next(Error);
  }
};

// Obtener un itinerario por su ID
let getItineraryById = async (req, res, next) => {
  try {
    let itinerary = await Itinerary.findById(req.params.id).populate("city");
    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    return res.status(200).json({
      response: itinerary,
    });
  } catch (error) {
    next(Error);
  }
};

export { getAllItineraries, getItinerariesByCityId, getItineraryById };
