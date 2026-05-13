import { useEffect, useState } from 'react';

import { fetchLeads } from './api';

import LeadTable from './components/LeadTable';

export default function App() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {

    const data = await fetchLeads();

    setLeads(data);
  };

  return (
    <div style={{ padding: '20px' }}>

      <h1>Lead Finder Dashboard</h1>

      <LeadTable leads={leads} />

    </div>
  );
}