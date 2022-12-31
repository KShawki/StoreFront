import express from "express";
import userRoutes from "./api/userRoutes";
import productRoutes from "./api/productRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);

export default router;
