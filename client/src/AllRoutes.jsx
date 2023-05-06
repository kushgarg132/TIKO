import React from "react";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/avail" element={<Availability/>} />
      {/* <Route path="/AskQuestion" element={<AskQuestion />} /> */}
    </Routes>
  );
};

export default AllRoutes;
