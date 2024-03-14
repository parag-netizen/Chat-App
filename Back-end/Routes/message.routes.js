import express from "express";
import { sendMessage } from "../Containers/message.controller.js";
import protectRoute from "../Middleware/Protectroute.js";
import { getMessage } from "../Containers/message.controller.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessage)
router.post("/send/:id", protectRoute, sendMessage)

export default router;