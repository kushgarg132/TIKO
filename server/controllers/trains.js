import Trains from "../models/Train.js";

export const getAllTrains = async (req, res) => {
  try {
    const trainList = await Trains.find();
    res.status(200).json(trainList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTrain = async (req, res) => {
  let { source, dest, day } = req.body;
  // source = 'Amritsar';
  // dest = 'Jammu';
  // day = 'Tuesday';
  try {
    // const trains = await Trains.find({});

    const trains = await Trains.find({
      journeyDay: { $elemMatch: { $eq: day } }
    });

    for (let i = 0; i < trains.length; i++) {
      let flag = -1;
      for (let j = 0; j < trains[i].route.length; j++) {
        if (trains[i].route[j].stationName == source) {
          flag = j;
          break;
        }
      }

      for (let j = flag+1; j < trains[i].route.length; j++) {
        if (trains[i].route[j].stationName == dest) {
          flag = j;
          res.json(trains[i]);
        }
      }
    }
    res.json({});
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