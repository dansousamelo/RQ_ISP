import express from "express";

import inspectionControllers from "../controllers/inspectionControllers";

import { verifyToken } from "../middlewares/tokenMiddlewares";

const router = express.Router();

// Post routes
router.post(
  "/create-first-inspection",
  inspectionControllers.createFirstInspection
);
router.post(
  "/create-inspection",
  verifyToken,
  inspectionControllers.createInspection
);

router.post("/create-trail", verifyToken, inspectionControllers.createTrail);

// Get routes
router.get(
  "/list-inspections",
  verifyToken,
  inspectionControllers.listInspections
);
router.get(
  "/find-inspection",
  verifyToken,
  inspectionControllers.findInspectionItems
);
router.get(
  "/find-inspection-attribute",
  verifyToken,
  inspectionControllers.findInspectionAttributes
);

// Delete Routes
router.delete(
  "/delete-inspection",
  verifyToken,
  inspectionControllers.deleteInspection
);
router.delete(
  "/delete-document-trail",
  verifyToken,
  inspectionControllers.deleteDocumentTrail
);

export default router;
