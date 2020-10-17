const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', express.static(__dirname + '/client/dist'))

//MONGOOSE CONNECTION
// mongodb://172.17.0.3:27017/airbnb_plus
mongoose.connect('mongodb://localhost/airbnb_plus', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB Connected!');
}).catch((err) => {
    console.log('MongoDB Connection Error');
});

//ROUTES
const listingsRoute = require('./routes/listing');
const favoritesRoute = require('./routes/favorites');

app.use('/listing/', listingsRoute);
app.use('/favorites/', favoritesRoute);

const PORT = 3001;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Server started on PORT: ${PORT}`);
    }
})