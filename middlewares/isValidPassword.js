import bcryptjs from "bcryptjs";

export default (req, res, next) => {
  let passwordBody = req.body.password;
  let passwordDB = req.user.password;

  let compare = bcryptjs.compareSync(passwordBody, passwordDB);
  if (compare) {
    return next();
  }
  return res.status(400).json({
    success: false,
    menssage: "Invalid Credentials",
  });
};
