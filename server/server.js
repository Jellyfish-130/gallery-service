const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const client = require('./database/index.js');
const controller = require('./controller.js');
const path = require('path');

const app = express();

app.get('/', controller.message);
app.get('/listings', controller.getListings);
app.get('/listings/:listingId', controller.getListing);
app.get('/listings/:listingId/photos', controller.getPhotos);

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
