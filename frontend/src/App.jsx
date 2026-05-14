import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [domain, setDomain] = useState("");
  const [results, setResults] = useState([]);
  const [savedLeads, setSavedLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchDomain = async () => {

    if (!domain) {
      alert("Enter company domain");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/search/${domain}`
      );

      setResults(res.data.data.emails);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

      alert("Search failed");

    }

  };

  const saveLead = async (lead) => {

    await axios.post(
      "http://localhost:5000/api/leads/add",
      {
        name: `${lead.first_name || ""} ${lead.last_name || ""}`,
        company: domain,
        email: lead.value,
        linkedin: lead.linkedin || "",
        position: lead.position || ""
      }
    );

    fetchLeads();

  };

  const fetchLeads = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/leads"
    );

    setSavedLeads(res.data);

  };

  useEffect(() => {

    fetchLeads();

  }, []);

  return (

    <div style={{
      padding: "30px",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        fontSize: "40px",
        marginBottom: "30px"
      }}>
        Dynamic Lead Finder
      </h1>

      <div style={{
        display: "flex",
        gap: "10px"
      }}>

        <input
          type="text"
          placeholder="Enter domain like amazon.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          style={{
            padding: "12px",
            width: "350px"
          }}
        />

        <button
          onClick={searchDomain}
          style={{
            padding: "12px 20px",
            background: "black",
            color: "white",
            border: "none"
          }}
        >
          Search
        </button>

      </div>

      {loading && <h3>Loading...</h3>}

      <h2 style={{
        marginTop: "40px"
      }}>
        Dynamic Results
      </h2>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Save</th>
          </tr>
        </thead>

        <tbody>

          {results.map((lead, index) => (

            <tr key={index}>

              <td>
                {lead.first_name} {lead.last_name}
              </td>

              <td>{lead.value}</td>

              <td>{lead.position}</td>

              <td>

                <button
                  onClick={() => saveLead(lead)}
                >
                  Save
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <h2 style={{
        marginTop: "50px"
      }}>
        Saved Leads
      </h2>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>

        </thead>

        <tbody>

          {savedLeads.map((lead) => (

            <tr key={lead._id}>

              <td>{lead.name}</td>

              <td>{lead.email}</td>

              <td>{lead.company}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default App;