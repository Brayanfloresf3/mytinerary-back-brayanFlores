import Itinerary from "../../models/Itinerary.js"; // Asegúrate de que la ruta sea correcta

// Crear un nuevo itinerario
const createItinerary = async (req, res) => {
  try {
    const newItinerary = new Itinerary(req.body);
    await newItinerary.save();
    return res.status(201).json({
      message: "Itinerary created successfully",
      response: newItinerary,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default createItinerary;
