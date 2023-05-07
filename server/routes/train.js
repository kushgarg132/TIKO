import express from "express";
import {getAllTrains} from "../controllers/trains.js";

const router = express.Router();

router.get("/getAllTrains",getAllTrains);
// router.post("/login", login);

export default router;