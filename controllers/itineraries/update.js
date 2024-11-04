import Itinerary from "../../models/Itinerary.js"; // Asegúrate de que la ruta sea correcta

// Modificar un itinerario
const updateItinerary = async (req, res) => {
  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Retorna el nuevo objeto
        runValidators: true, // Ejecuta las validaciones
      }
    );
    if (!updatedItinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    return res.status(200).json({
      message: "Itinerary updated successfully",
      response: updatedItinerary,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default updateItinerary;
