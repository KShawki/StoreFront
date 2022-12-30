import { Router, Request, Response } from "express";
import * as controller from "../../controllers/user.controller";

const router = Router();

router.post("/create", controller.create);
router.post("/auth", controller.auth);
router.get("/index", controller.index);
router.get("/show/:id", controller.show);

export default router;
