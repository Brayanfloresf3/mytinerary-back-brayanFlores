import City from "../../models/City.js";

let updateCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedCity = await City.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true 
    });

    if (!updatedCity) {
      return res.status(404).json({ message: "City not found" });
    }

    return res.status(200).json({
      message: "City updated successfully",
      response: updatedCity,
    });
  } catch (error) {
    next(error)
  }
};

export default updateCity;
