import express from "express";
import { productController } from "./controllers.js";
import { authentication } from "../../middleware/auth.js";
const router = express.Router();

router.get("/", authentication, productController.ProductsList);
router.get("/:id", authentication, productController.ProductDetails);

export default router;
