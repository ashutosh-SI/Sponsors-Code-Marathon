import React from 'react';
import './matchcard.css';

const MatchCard = ({ match }) => {
  return (
    <div className="card">
      <h3 className="card-title">{match.matchName}</h3>
      <p className="card-date"><strong>Date:</strong> {new Date(match.matchDate).toLocaleDateString()}</p>
      <p className="card-location"><strong>Location:</strong> {match.location}</p>
      <p className="card-total"><strong>Total Payments:</strong> ${match.totalAmountPaid}</p>
    </div>
  );
};

export default MatchCard;