import express from "express";

import multer from "multer";
import multerConfig from "../config/multer";

import fileController from "../controllers/fileControllers";
import { verifyToken } from "../middlewares/tokenMiddlewares";

const router = express.Router();

const upload = multer(multerConfig);

// Post
router.post("/upload-file", upload.array("files"), fileController.uploadFile);

router.post(
  "/logged-upload-file",
  verifyToken,
  upload.array("files"),
  fileController.loggedUploadFile
);

// Delete
router.delete("/delete-file-from-s3", fileController.deleteFileFromS3)
router.delete("/delete-document", verifyToken, fileController.deleteFile)

export default router;
