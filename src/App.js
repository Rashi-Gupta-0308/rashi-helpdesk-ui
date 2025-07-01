import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import TicketList from "./components/TicketList";
import AddTicketForm from "./components/AddTicketForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [tickets, setTickets] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  useEffect(() => {
    const stored = localStorage.getItem("tickets");
    if (stored) {
      try {
        setTickets(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse tickets:", e);
        setTickets([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = (ticket) => {
    const updated = [...tickets, ticket];
    setTickets(updated);
    // Optional safeguard:
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const deleteTicket = (index) => {
    const updated = tickets.filter((_, i) => i !== index);
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (!isLoggedIn) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="app-wrapper dashboard-container">
      <aside className="sidebar">
        <h2>Helpdesk</h2>
        <ul>
          <li onClick={() => setCurrentScreen("dashboard")}>Dashboard</li>
          <li onClick={() => setCurrentScreen("add")}>Add Ticket</li>
          <li onClick={() => setCurrentScreen("tickets")}>Show Tickets</li>
        </ul>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </aside>

      <main className="dashboard-main">
        {currentScreen === "dashboard" && <Dashboard tickets={tickets} />}
        {currentScreen === "add" && <AddTicketForm onAdd={addTicket} />}
        {currentScreen === "tickets" && (
          <TicketList tickets={tickets} onDelete={deleteTicket} />
        )}
      </main>
    </div>
  );
}

export default App;
