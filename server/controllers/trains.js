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
  let { source, destination, journeyDay } = req.body;
  var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  try {
    const trainList = [];
    // source = 'Amritsar';
    // destination = 'Jammu';
    // journeyDay = 'Saturday';

    const trains = await Trains.find({
    });

    let journeyIndex = -1;
    for (let q = 0; q < weekday.length; q++) {
      if (journeyDay == weekday[q]) {
        journeyIndex = q;
        break;
      }
    }

    for (let i = 0; i < trains.length; i++) {
      let flag = -1;

      let trainDaysIndex = [];
      for (let p = 0; p < trains[i].journeyDay.length; p++) {
        for (let q = 0; q < weekday.length; q++) {
          if(trains[i].journeyDay[p] == weekday[q]){
            trainDaysIndex.push(q);
          }
        }
      }
      for (let j = 0; j < trains[i].route.length; j++) {
        if (trains[i].route[j].stationName == source
        ) {
          for(let d  = 0; d<trainDaysIndex.length; d++){
            console.log(trainDaysIndex[d],trains[i].route[j].arrivalDay,journeyIndex);
            if((trainDaysIndex[d] + trains[i].route[j].arrivalDay-1)%7  == journeyIndex){
              flag = j;
              break;
            }
          }
        }
      }

      if(flag == -1)continue;
      for (let j = flag + 1; j < trains[i].route.length; j++) {
        if (trains[i].route[j].stationName == destination) {
          flag = j;
          trainList.push(trains[i]);
        }
      }
    }
    res.json(trainList);
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