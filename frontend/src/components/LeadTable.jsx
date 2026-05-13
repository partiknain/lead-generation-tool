export default function LeadTable({ leads }) {

  return (
    <table border="1" cellPadding="10">

      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>City</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead, index) => (
          <tr key={index}>
            <td>{lead.name}</td>
            <td>{lead.company}</td>
            <td>{lead.city}</td>
            <td>{lead.email}</td>
            <td>{lead.phone}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}