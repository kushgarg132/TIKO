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
  try {
    const { data } = await api.getTrain(trainData);
    dispatch({ type: "FETCH_TRAINS", payload:data });
  } catch (error) {
    console.log(error);
  }
}