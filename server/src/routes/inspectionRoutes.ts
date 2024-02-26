import express from "express";

import post_inspection_controllers from "../controllers/inspection/post_inspection_controllers";
import get_inspection_controllers from "../controllers/inspection/get_inspection_controllers";
import { verifyToken } from "../middlewares/tokenMiddlewares";

const router = express.Router();

// Post routes
router.post(
  "/create-first-inspection",
  post_inspection_controllers.createFirstInspection
);
router.post(
  "/create-inspection",
  verifyToken,
  post_inspection_controllers.createInspection
);

// Get routes
router.get(
  "/list-inspections",
  verifyToken,
  get_inspection_controllers.listInspections
);
router.get(
  "/find-inspection",
  verifyToken,
  get_inspection_controllers.findInspectionItems
);
router.get(
  "/find-inspection-attribute",
  verifyToken,
  get_inspection_controllers.findInspectionAttributes
);

export default router;
