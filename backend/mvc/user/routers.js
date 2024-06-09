import express from "express";
import { usersController } from "./controllers.js";
import { authentication } from "../../middleware/auth.js";
const router = express.Router();

router.post("/", usersController.UserRegister);
router.post("/login", usersController.UserLogin);
router.get("/authentication", authentication, (req, res) => {
  res.status(200).json({
    isTokenExp: false,
    isTokenNotProvided: false,
    message: "Token verified successfully",
  });
});

export default router;
