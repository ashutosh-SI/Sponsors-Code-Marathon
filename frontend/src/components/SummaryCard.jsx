import React from 'react';

const SummaryCard = ({ summaries }) => {
  return (
      <div className="card" style={{display: 'block', margin: '10px'}}>
      <h3 className="card-title">{summaries.sponsorName}</h3>
      <p className="card-date"><strong>Latest Payment date :</strong> {new Date().toLocaleDateString()}</p>
      <p className="card-location"><strong>Industry</strong> {summaries.latestPaymentDate}</p>
      <p className="card-total"><strong>Total Payments:</strong> ${summaries.totalPayments}</p>
    </div>
  );
};

export default SummaryCard;


