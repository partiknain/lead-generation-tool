import axios from 'axios';

export const fetchLeads = async () => {

  const response =
    await axios.get(
      'http://localhost:5000/api/leads'
    );

  return response.data;
};