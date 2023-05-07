import * as api from "../api";

export const getAllTrains = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTrains();
    dispatch({ type: "FETCH_TRAINS", data });
  } catch (error) {
    console.log(error);
  }
};

export const getTrain = (trainData) => async (dispatch) => {
  try {
    // console.log("HII");
    const { data } = await api.getTrain(trainData);
    // console.log("Bye");
    dispatch({ type: "FETCH_TRAINS", data });
  } catch (error) {
    console.log(error);
  }
};
