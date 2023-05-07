import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);
export const profile = (id) => API.patch(`/user/profile/${id}`);

export const getAllTrains = () =>API.post("/train/getAllTrains");
export const getTrain = (id) => API.patch(`/train/getTrain/${id}`);
export const addTrains = (data) => API.get(`/train/admin/addTrains`, data);

export const saveTicket = (data) => API.post(`/ticket/save`, data );
export const getTicketByPNR = (pnr) => API.patch(`/ticket/${pnr}`);