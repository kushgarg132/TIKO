const express = require("express");
import {signup,login} from "../controllers/auth"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;