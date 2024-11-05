import Itinerary from "../../models/Itinerary.js";

let updateItinerary = async (req, res, next) => {
  try {
    let updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
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
    next(error);
  }
};

export default updateItinerary;
