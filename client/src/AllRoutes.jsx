import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Availability from "./Pages/Availability/Availability";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Pnr from "./Pages/PNR"
import PaymentBoxContainer from "./Pages/Booking/Booking";
import AdminPage from "./Pages/AdminPage/AdminPage";
import UserProfile from "./Pages/User/User";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/avail/:fromCity/:toCity" element={<Availability/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/checkPNR" element={<Pnr />} />
      <Route path="/book" element={<PaymentBoxContainer />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default AllRoutes;
