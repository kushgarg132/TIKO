import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Availability from "./Pages/Availability/Availability";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/avail" element={<Availability/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
