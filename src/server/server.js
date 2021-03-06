// Express and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let favicon = require('serve-favicon');
var path = require('path');
const dotenv = require('dotenv');
dotenv.config();

/* API calls */
// Geonames http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo
const baseURLGeonames = 'http://api.geonames.org/searchJSON?q=';
const appKeyGeonames = `&maxRows=10&username=${process.env.GEONAMES_API_USER}`;

// Weatherbit current weather https://api.weatherbit.io/v2.0/current?&lat=38.123&lon=-78.543&key=API_KEY
// Weatherbit weather forecast https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&key=API_KEY
const baseURLCurrent = 'https://api.weatherbit.io/v2.0/current?';
const baseURLForecast = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const lat = '&lat=';
const lon = '&lon=';
const appKeyWeatherbit = `&key=${process.env.WEATHERBIT_API_KEY}`;

// Pixabay https://pixabay.com/api/?key=17030772-6b41962d31393a5481c5f30e6&q=yellow+flowers&image_type=photo
const baseURLPixabay = 'https://pixabay.com/api/';
const appKeyPixabay = `?key=${process.env.PIXABAY_API_KEY}`;
const query = '&q=';
const imageType = '&image_type=photo';

// Start up an instance of app
const app = express();
// app.use(favicon(path.join(__dirname, 'dist', '/media/travelmate_favicon.png')))
app.use(favicon(path.join(__dirname, 'favicon.ico')));

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
  res.send({ baseGeonames: baseURLGeonames, keyGeonames: appKeyGeonames, baseCurrent: baseURLCurrent, baseForecast: baseURLForecast, keyWeatherbit: appKeyWeatherbit, lat:lat, lon:lon, basePixabay: baseURLPixabay, keyPixabay: appKeyPixabay, query: query, imageType: imageType });
});

module.exports = app;