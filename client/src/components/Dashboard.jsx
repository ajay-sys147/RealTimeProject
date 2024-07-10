import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
