import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    // Actualiza el estado en la base de datos
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { online: true },
      { new: true } // Retorna el documento actualizado
    );

    // Verifica que el usuario exista
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extrae los datos necesarios
    const { email, name, photoUrl } = user;

    // Construye la URL con todos los parámetros
    const redirectUrl = `https://5173-idx-mytinerarybrayanfloresgit-1732483231714.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev/?token=${req.token}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&photoUrl=${encodeURIComponent(photoUrl)}`;

    console.log("Redirecting to:", redirectUrl);

    // Redirecciona al cliente
    return res.redirect(redirectUrl);
  } catch (error) {
    // Manejo de errores
    next(error);
  }
};
