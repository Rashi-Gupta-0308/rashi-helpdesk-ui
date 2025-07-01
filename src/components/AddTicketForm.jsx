import React, { useState } from "react";

const AddTicketForm = ({ onAdd }) => {
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("Open");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject.trim()) {
      onAdd({ subject, status });
      setSubject("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <input
        type="text"
        placeholder="Ticket subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>
      <button type="submit">Add Ticket</button>
    </form>
  );
};

export default AddTicketForm;
