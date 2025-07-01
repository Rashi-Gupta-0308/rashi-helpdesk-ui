import React from "react";

const Dashboard = ({ tickets }) => {
  const open = tickets.filter(t => t.status === "Open").length;
  const progress = tickets.filter(t => t.status === "In Progress").length;
  const resolved = tickets.filter(t => t.status === "Resolved").length;

  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
      <h2>Dashboard</h2>
      <div className="card-grid">
        <div className="card blue">Open: {open}</div>
        <div className="card orange">In Progress: {progress}</div>
        <div className="card green">Resolved: {resolved}</div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
