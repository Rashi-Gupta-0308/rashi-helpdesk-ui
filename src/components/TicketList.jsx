import React from "react";

const TicketList = ({ tickets, onDelete }) => {
  return (
    <div className="ticket-container">
      <h2>Ticket List</h2>
      <table className="ticket-table">
        <thead>
          <tr><th>ID</th><th>Subject</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td><button onClick={() => onDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
