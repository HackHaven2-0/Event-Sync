import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { getOrganizerEvents, getUserProfile, updateUserProfile } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/profile", authenticate, getUserProfile);
UserRouter.put("/profile", authenticate, updateUserProfile);
UserRouter.get("/organizer/events", authenticate, getOrganizerEvents);

export default UserRouter;