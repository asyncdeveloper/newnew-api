import { Router } from "express";
import FileController from "../controllers/FileController";

const router = Router();

router.post("/", FileController.create);

export default router;