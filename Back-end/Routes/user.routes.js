import express from "express";
import protectRoute from "../Middleware/Protectroute.js";
import getUsersForSidebar from "../Containers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)

export default router;