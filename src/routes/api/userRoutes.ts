import { Router, Request, Response } from "express";
import * as controller from "../../controllers/user.controller";
import authMiddleware from "../../middleware/auth.middleware";

const router = Router();

router.post("/create", authMiddleware, controller.create);
router.post("/auth", controller.auth);
router.get("/index", authMiddleware, controller.index);
router.get("/show/:id", controller.show);

export default router;
