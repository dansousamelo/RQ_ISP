import express from "express";

import multer from "multer";
import multerConfig from "../config/multer";

import file_controller from "../controllers/fileControllers";
import { verifyToken } from "../middlewares/tokenMiddlewares";

const router = express.Router();

const upload = multer(multerConfig);

// POST
router.post("/upload-file", upload.array("files"), file_controller.uploadFile);
router.post(
  "/logged-upload-file",
  verifyToken,
  upload.array("files"),
  file_controller.loggedUploadFile
);

export default router;
