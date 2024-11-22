import { token } from "morgan";
import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    await User.findOneAndUpdate({ email: req.body.email }, { online: true });

    // Obtén los datos del usuario
    const user = await User.findOne({ email: req.body.email });

    return res.status(200).json({
      success: true,
      message: "Signed In",
      user: {
        email: user.email,
        name: user.name, 
        photo: user.photo, 
        photoUrl: user.photoUrl || "/default-avatar.jpg", 
      },
      token: req.token
    });
  } catch (error) {
    next(error);
  }
};

