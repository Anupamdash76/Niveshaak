import React from "react";
import { Route, Routes } from "react-router-dom";
import './Dashboard.css';

// Import your components
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
   
    <GeneralContextProvider>
      <div className="dashboard-layout">
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
        <div className="sidebar-content">
          {/* WatchList no longer needs its own provider here */}
          <WatchList />
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;