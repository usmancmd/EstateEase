import express from "express";
import {
  signIn,
  signUp,
  googleAuth,
  signOut,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/g-auth", googleAuth);
router.get("/signout", signOut);

export default router;
