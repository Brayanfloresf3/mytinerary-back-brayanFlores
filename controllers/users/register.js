import User from "../../models/User.js";

const register = async (req, res) => {
  try {
    let user = req.body;
    user.online = false;

    let all = await User.create(user);
    return res.status(201).json({
      response: all,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export default register;
