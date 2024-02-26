import express from "express";

import multer from "multer";
import multerConfig from "../config/multer";

import file_controller from "../controllers/fileControllers";

const router = express.Router();

const upload = multer(multerConfig);
router.post("/upload-file", upload.array("files"), file_controller.uploadFile);

export default router;
