import { Router } from "express";
import FileController from "../controllers/FileController";
import { singleFileUpload } from "../utils/upload";

const router = Router();

router.post("/", singleFileUpload, FileController.create);

export default router;