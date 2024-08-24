import React, { useState } from 'react';
import { fetchSponsorMatchCountByYear } from '../services/ApiServices';

const SponsorMatchCount = () => {
  const [year, setYear] = useState('');
  const [sponsorMatchCount, setSponsorMatchCount] = useState([]);
  const [error, setError] = useState('');

  const handleFetch = async () => {
    if (!year) {
      setError('Year is required');
      return;
    }
    try {
      const data = await fetchSponsorMatchCountByYear(year);
      setSponsorMatchCount(data);
      setError('');
    } catch (err) {
      console.error("Error fetching sponsor match count:", err);
      setError('Failed to fetch sponsor match count');
    }
  };

  return (
    <div>
      <h2>Sponsor Match Count</h2>
      <div className="form-group">
        <label htmlFor="year">Enter Year:</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button onClick={handleFetch}>Fetch Sponsor Match Count</button>
      </div>
      {error && <div className="error">{error}</div>}
      <div>
        {sponsorMatchCount.length > 0 ? (
          <ul>
            {sponsorMatchCount.map((sponsor, index) => (
              <li key={index}>
                {sponsor.sponsorName} sponsored {sponsor.matchCount} matches in {year}.
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available for the year {year}.</p>
        )}
      </div>
    </div>
  );
};

export default SponsorMatchCount;
