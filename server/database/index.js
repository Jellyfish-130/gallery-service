const { Client } = require('pg');
const client = new Client({
  user: 'sdc_user',
  password: 'sdc_password',
  host: 'localhost',
  database: 'gallery_service',
});

// Use Promise to connect

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((error) => console.error('DB connection error: ', error.stack))

module.exports = client;

// .then(() => console.log('Querying...'))
// .then(() => client.query('SELECT * FROM gallery_service.listings where listing_id = 2300;'))
// .then((result) => console.log(result.rows))