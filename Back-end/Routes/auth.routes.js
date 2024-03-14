import express from "express";
import { login, logout, signup } from "../Containers/auth.containers.js"

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

export default router;