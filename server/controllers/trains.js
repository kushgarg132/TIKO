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

export const getTrain = async (req, res) => {
  const { source, dest, day } = req.body;

  try {
    const trainList = await Trains.find();
    res.status(200).json(trainList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

};

export const addTrains = async (req, res) => {
  const postTrainData = req.body;
  const postTrains = new Trains({ ...postTrainData });
  try {
    await postTrains.save();
    res.status(200).json("Added Trains Successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't add new Trains");
  }
};