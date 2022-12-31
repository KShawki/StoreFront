import express from "express";
import userRoutes from "./api/userRoutes";
import productRoutes from "./api/productRoutes";
import orderRoutes from "./api/orderRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

export default router;
