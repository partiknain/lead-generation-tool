const createCsvWriter =
  require('csv-writer').createObjectCsvWriter;

async function searchLeads() {

  const leads = [
    {
      name: 'John Smith',
      company: 'Modern Decor USA',
      city: 'New York',
      email: 'john@example.com',
      phone: '+1 1234567890'
    },
    {
      name: 'Emma Brown',
      company: 'Luxury Home Studio',
      city: 'California',
      email: 'emma@example.com',
      phone: '+1 9999999999'
    }
  ];

  const csvWriter = createCsvWriter({
    path: './data/leads.csv',
    header: [
      { id: 'name', title: 'NAME' },
      { id: 'company', title: 'COMPANY' },
      { id: 'city', title: 'CITY' },
      { id: 'email', title: 'EMAIL' },
      { id: 'phone', title: 'PHONE' }
    ]
  });

  await csvWriter.writeRecords(leads);

  return leads;
}

module.exports = { searchLeads };