import { Router } from "express";
import register from "../controllers/users/register.js";
import { getAllUsers, getUserById } from "../controllers/users/read.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js";
import schemaUsersCreated from "../schemas/users/create.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const router = Router();

router.get("/all", getAllUsers);
router.get("/:id", getUserById);
router.post(
  "/register",
  validator(schemaUsersCreated),
  accountExists,
  createHash,
  register
);
router.put("/update/:id",  passport.authenticate('jwt',{session:false}),updateUser);
router.delete("/delete/:id", passport.authenticate('jwt',{session:false}), deleteUser);
 
export default router;
