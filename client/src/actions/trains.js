import * as api from "../api";

export const getAllTrains = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTrains();
    console.log(data);
    dispatch({ type: "FETCH_TRAINS", payload:data });
  } catch (error) {
    console.log(error);
  }
};

export const getTrain = (trainData) => async (dispatch) => {
  const {fromCity,toCity,day,today} = trainData;
  const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  try {
    const { data } = await api.getAllTrains();
    const filteredTrains = data.filter(train => {
      var check_source=false;
      var check_destination=false;
      return train.route.some(routeObj => {
        console.log(train.journeyDay);
        console.log(routeObj.arrivalDay);
        console.log(day);
        
        if(routeObj.stationName === fromCity && train.journeyDay.includes(DAYS[day-1]))
          check_source=true;
        if(routeObj.stationName === toCity)
          check_destination=true;
        return (check_source && check_destination);
      });
    });

    dispatch({ type: "FETCH_TRAINS", payload: filteredTrains });
    
  } catch (error) {
    console.log(error);
  }
};

