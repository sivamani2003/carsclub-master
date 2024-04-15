import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Addcars from "./dashboardComponents/Addcars";
import Salecarreports from "./dashboardComponents/Salecarreports";
import Rentcarreports from "./dashboardComponents/Rentcarreports";
import Availableusers from "./dashboardComponents/Availableusers";
import Usermessages from "./dashboardComponents/Usermessages";
import Getsalecars from "./dashboardComponents/Getsalecars";
import Getrentcars from "./dashboardComponents/Getrentcars";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/addcars" element={<Addcars />} />
      <Route path="/salecarsreports" element={<Salecarreports />} />
      <Route path="/rentcarsreports" element={<Rentcarreports />} />
      <Route path="/availableusers" element={<Availableusers />} />
      <Route path="/usermessages" element={<Usermessages />} />
      <Route path="/getsalecarsforadmin" element={<Getsalecars />} />
      <Route path="/getrentcarsforadmin" element={<Getrentcars />} />
    </Routes>
  );
};

export default DashboardRoutes;
