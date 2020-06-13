// Express and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

/* Global Variables */
// API call http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo
const baseURLGeonames = 'http://api.geonames.org/searchJSON?q=';
const appKeyGeonames = `&maxRows=10&username=${process.env.GEONAMES_API_USER}`;

// Start up an instance of app
const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('dist'));

const port = 8081;

// TODO-Spin up the server
const server = app.listen(port, () => {
  console.log(`running on localhost port: ${port}`);
})

app.get('/url', (req, res) => {
  res.send({ base: baseURLGeonames, key: appKeyGeonames});
});