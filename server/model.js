const client = require('./database/index.js');

// Use Model to handle data, logic, and rules of the applications

const getListings = (callback) => {
  const statement = 'SELECT * FROM gallery_service.listings limit 2';
  client.query(statement, callback);
};

// const getListing = (req, res) => {

//   const { listingId } = req.params;
//   console.log('req.params:', req.params);
//   const statement = `SELECT * FROM gallery_service.listings WHERE listing_id = ${listingId}`;
//   client
//     .query(statement)
//     .then(response => {
//       res.status(200).send(response.rows)
//     })
//     .catch(error => {
//       res.status(400).send(error.stack)
//     })
// };

module.exports = {
  getListings,
};