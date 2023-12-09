import express from "express";
import { signIn, signUp, googleAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/g-auth", googleAuth);

export default router;
