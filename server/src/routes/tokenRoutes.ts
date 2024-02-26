import express from "express";

import token_controllers from "../controllers/tokenControllers";

const router = express.Router();

// Post Routes
router.post("/refresh-token", token_controllers.generateRefreshToken);

// Get Routes

export default router;
