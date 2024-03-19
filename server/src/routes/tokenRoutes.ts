import express from "express";

import token_controllers from "../controllers/tokenControllers";

const router = express.Router();

// Post Routes
router.post("/generate-token", token_controllers.generateToken);

// Get Routes

export default router;
