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



// Get routes
router.get(
  "/find-user-inspections",
  verifyToken,
  inspectionControllers.findUserInspections
);
router.get(
  "/find-inspection-items",
  verifyToken,
  inspectionControllers.findInspectionItems
);
router.get(
  "/find-inspection-attributes",
  verifyToken,
  inspectionControllers.findInspectionAttributes
);

// Delete Routes
router.delete(
  "/delete-inspection",
  verifyToken,
  inspectionControllers.deleteInspection
);

export default router;
