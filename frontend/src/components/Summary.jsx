import React, { useEffect, useState } from 'react';
// import { fetchMatches } from './apiService';
// import MatchCard from './MatchCard';
import { fetchSummary } from '../services/ApiServices';
import SummaryCard from './SummaryCard';

const Summaries = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const data = await fetchSummary();
        setSummary(data);
      } catch (error) {
        console.error("Error loading payment summaries", error);
      }
    };

    loadSummary();
  }, []);

  return (
    <div>
      <h1>Payment Summary</h1>
      <div className="matches-container">
        {summary.map((summaries) => (
          <SummaryCard key={summaries.id} summaries={summaries} />
        ))}
      </div>
    </div>
  );
};

export default Summaries;
