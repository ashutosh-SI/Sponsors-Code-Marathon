import React, { useEffect, useState } from 'react';
// import { fetchMatches } from './apiService';
// import MatchCard from './MatchCard';
import { fetchMatches } from '../services/ApiServices';
import MatchCard from './MatchCard';

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await fetchMatches();
        setMatches(data);
      } catch (error) {
        console.error("Error loading matches:", error);
      }
    };

    loadMatches();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Matches</h1>
      <div className="matches-container">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;

