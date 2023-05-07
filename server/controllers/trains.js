import Trains from "../models/Train.js";
import mongoose from "mongoose";

export const getAllTrains = async (req, res) => {
    try {
        const trainList = await Trains.find();
        res.status(200).json(trainList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};