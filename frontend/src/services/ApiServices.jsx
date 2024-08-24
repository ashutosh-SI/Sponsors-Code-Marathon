import axios from 'axios';

const API_BASE_URL = 'http://localhost:5260'; 
export const fetchMatches = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/Matches/matches-with-payments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error;
  }
};

export const fetchSummary = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/Sponsors/payment-summary`);
    return response.data;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error;
  }
};

export const fetchSponsorMatchCountByYear = async (year) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/SponsorMatchCount/match-count`, {
      params: { year }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching sponsor match count:", error);
    throw error;
  }
};