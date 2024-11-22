import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    // Verifica que req.user exista
    if (!req.user) {
      return res.status(400).json({
        success: false,
        message: "No user information found. Please try again.",
      });
    }

    // Actualiza el estado en línea del usuario
    await User.findOneAndUpdate({ email: req.user.email }, { isOnline: true });

    // Obtén los datos del usuario
    const user = await User.findOne({ email: req.user.email });

    // Si el usuario no existe por algún motivo, devuelve un error
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found in database.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Signed In",
      user: {
        email: user.email,
        name: user.name,
        photo: user.photo,
        photoUrl: user.photoUrl || "/default-avatar.jpg",
      },
      token: req.token,
    });
  } catch (error) {
    next(error);
  }
};
