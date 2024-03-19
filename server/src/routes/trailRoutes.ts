import express from "express";

const router = express.Router();

import trailControllers from "../controllers/trailControllers";
import { verifyToken } from "../middlewares/tokenMiddlewares";

// Post Routes
router.post(
  "/create-document-trail",
  verifyToken,
  trailControllers.createTrail
);

// Get Routes
router.get(
  "/find-document-trails",
  verifyToken,
  trailControllers.findDocumentTrails
);

// Delete Routes
router.delete(
  "/delete-document-trail",
  verifyToken,
  trailControllers.deleteDocumentTrail
);

router.delete(
  "/delete-all-document-trails", 
  verifyToken, 
  trailControllers.deleteAllDocumentTrail
)

export default router;
