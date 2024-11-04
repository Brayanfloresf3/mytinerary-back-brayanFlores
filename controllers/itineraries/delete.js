import Itinerary from "../../models/Itinerary.js";

// Borrar un itinerario
const deleteItinerary = async (req, res) => {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!deletedItinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    return res.status(200).json({ message: "Itinerary deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default deleteItinerary;
