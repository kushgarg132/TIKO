import express from "express";
import {signup,login,profile} from "../controllers/user.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/profile/:id",profile);

export default router;