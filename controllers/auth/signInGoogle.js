import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    // Actualiza el estado en la base de datos
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { online: true },
      { new: true } 
    );

    // Verifica que el usuario exista
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { email, name, photoUrl } = user;

    const redirectUrl = `https://5173-idx-mytinerarybrayanfloresgit-1732483231714.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev/?token=${req.token}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&photoUrl=${encodeURIComponent(photoUrl)}`;

    return res.redirect(redirectUrl);
  } catch (error) {
    next(error);
  }
};
