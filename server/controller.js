const client = require('./database/index.js');
// const model = require('./model.js');

// Use Model to handle data, logic, and rules of the applications

const message = (req, res) => {
  res.send('Hello from Server')
};

// const getListings = (req, res) => {
//   model.getListings((err, result) => {
//     if (err) {
//       res.status(400).send(err)
//     } else {
//       res.status(200).send(result.rows)
//     }
//   })
// }

const getListings = (req, res) => {

  const statement = 'SELECT * FROM gallery_service.listings limit 2';
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

const getListing = (req, res) => {

  const { listingId } = req.params;
  console.log('req.params:', req.params);
  const statement = `SELECT * FROM gallery_service.listings WHERE listing_id = ${listingId}`;
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

const getPhotos = (req, res) => {

  const listingId = req.params.listingId;
  // const { listingId } = req.paramas;
  const statement = `SELECT p.photo_id, p.listing_id, p.room_id, p.photo_url, p.photo_caption FROM gallery_service.photos p JOIN gallery_service.listings l ON p.listing_id=l.listing_id WHERE p.listing_id=${listingId}`;
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
}

const addRooms = (req, res) => {

  const roomId = req.params.roomId;
  const { listing_id, room_name } = req.body;

  const statement = `INSERT INTO gallery_service.rooms (listing_id, room_name) VALUES ('${listing_id}', '${room_name}')`;
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
}


module.exports = {
  message,
  getListings,
  getListing,
  getPhotos,
  addRooms
};