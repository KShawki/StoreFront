import express, { Router, Request, Response } from "express";
import * as controller from "../../controllers/prodcut.controller";
import authMiddleware from "../../middleware/auth.middleware";

const router = Router();

router.post("/create", controller.create);
router.get("/index", controller.index);
router.get("/show/:id", controller.show);

export default router;
