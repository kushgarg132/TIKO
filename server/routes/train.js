import express from "express";
import {getAllTrains,getTrain,addTrains} from "../controllers/trains.js";

const router = express.Router();

router.get("/getAllTrains",getAllTrains);
router.post("/getTrain/:id", getTrain);
router.post("/admin/addTrains",addTrains);


export default router;