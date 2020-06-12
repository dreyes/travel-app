// Express and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

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