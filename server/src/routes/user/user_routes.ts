import express from "express";

import user_controllers from "../../controllers/user/user_controllers";

const router = express.Router();

// Post Routes
router.post("/create-user", user_controllers.createUser);

// Get Routes
router.get("/generate-access_code", user_controllers.createAccessCode);
router.get("/find-user", user_controllers.findUser);

export default router;
