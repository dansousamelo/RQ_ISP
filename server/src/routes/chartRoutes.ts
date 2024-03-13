import Router from "express"

import chartControllers from "../controllers/chartControllers";
import { verifyToken } from "../middlewares/tokenMiddlewares";

const router = Router()

// Get Routes
router.get("/inspection-items-categories", verifyToken, chartControllers.findInspectionCategories)

export default router;