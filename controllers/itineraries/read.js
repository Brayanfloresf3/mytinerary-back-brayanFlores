import Itinerary from "../../models/Itinerary.js"; // Asegúrate de que la ruta sea correcta
import "../../models/City.js";

// Obtener todos los itinerarios
const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find().populate("city"); // Puedes incluir 'city' si necesitas la información de la ciudad
    return res.status(200).json({
      response: itineraries,
    });
  } catch (error) {
    return res.status(500).json({
      response: error.message,
    });
  }
};

// Obtener itinerarios de una ciudad específica
const getItinerariesByCityId = async (req, res) => {
  try {
    const { cityId } = req.params; // Suponiendo que el ID de la ciudad se pasa como un parámetro
    const itineraries = await Itinerary.find({ city: cityId }); // Buscamos itinerarios que correspondan a la ciudad
    return res.status(200).json({
      response: itineraries,
    });
  } catch (error) {
    return res.status(500).json({
      response: error.message,
    });
  }
};

// Obtener un itinerario por su ID
const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id).populate("city");
    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    return res.status(200).json({
      response: itinerary,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getAllItineraries, getItinerariesByCityId, getItineraryById };
