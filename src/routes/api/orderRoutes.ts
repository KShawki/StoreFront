import express, { Router, Request, Response } from "express";
import * as controller from "../../controllers/order.controller";

const router = Router();

router.post("/create", controller.create);
router.get("/index", controller.index);
router.get("/show/:id", controller.show);

router.post("/addProduct", controller.addProductToOrder);
router.get("/getProduct:id", controller.getProductsOnOrder);

// router.get("/completed/:id", controller.completed);
// router.get("/active/:id", controller.active);

export default router;
