import City from "../../models/City.js";

let updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCity = await City.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el documento actualizado
      runValidators: true // Valida los campos según el esquema
    });

    if (!updatedCity) {
      return res.status(404).json({ message: "City not found" });
    }

    return res.status(200).json({
      message: "City updated successfully",
      response: updatedCity,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default updateCity;
