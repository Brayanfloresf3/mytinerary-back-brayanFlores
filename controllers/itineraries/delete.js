import Itinerary from "../../models/Itinerary.js";

let deleteItinerary = async (req, res, next) => {
  try {
    let deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!deletedItinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    return res.status(200).json({ message: "Itinerary deleted successfully" });
  } catch (error) {
    next(error)
  }
};

export default deleteItinerary;
