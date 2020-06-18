// Global Variables
let cityName = '';
let reqURL = {};
let projectData = {};

// Run tasks
const runRequests = async () => {
  getURL()
  .then(function() {
    getCoordinates()
    .then(function() {
      // If the start day is one week from today's date, it gives current weather
      // If the start day is over one week, it gives weather forecast
      let difference = Client.calculateDifference();
      if (difference < 8) {
        getCurrentWeather()
      } else {
        getWeatherForecast()
      }
      getImage();
    })
  })
};

// Request Geonames URL from server
const getURL = async () => {
  cityName = document.getElementById('city').value;
  const URLrequest = await fetch('/url')
  try {
    reqURL = await URLrequest.json();
  } catch(error) {
    console.log("error", error);
  }
};

// Resquest data from Geonames API
const getCoordinates = async () => {
  const request = await fetch(reqURL.baseGeonames+cityName+reqURL.keyGeonames);
  try {
    const cityData = await request.json();
    projectData.country = cityData.geonames[0].countryName;
    projectData.latitude = cityData.geonames[0].lat; 
    projectData.longitude = cityData.geonames[0].lng;
    console.log(cityData);
    console.log(projectData.country);
    console.log(projectData.latitude);
    console.log(projectData.longitude);
  } catch(error) {
    console.log("error", error);
  }
};

// Request data from Weatherbit for current weather
const getCurrentWeather = async () => {
  console.log(reqURL.baseCurrent+reqURL.lat+projectData.latitude+reqURL.lon+projectData.longitude+reqURL.keyWeatherbit);
  const weatherRequest = await fetch(reqURL.baseCurrent+reqURL.lat+projectData.latitude+reqURL.lon+projectData.longitude+reqURL.keyWeatherbit);
  try{
    const weatherData = await weatherRequest.json();
    console.log(weatherData);
  } catch(error) {
    console.log("error", error);
  }
};

// Request data from Weatherbit for weather forecast
const getWeatherForecast= async () => {
  console.log(reqURL.baseForecast+reqURL.lat+projectData.latitude+reqURL.lon+projectData.longitude+reqURL.keyWeatherbit);
  const weatherRequest = await fetch(reqURL.baseForecast+reqURL.lat+projectData.latitude+reqURL.lon+projectData.longitude+reqURL.keyWeatherbit);
  try{
    const weatherData = await weatherRequest.json();
    console.log(weatherData);
  } catch(error) {
    console.log("error", error);
  }
};

const getImage= async () => {
  console.log(reqURL.basePixabay+reqURL.keyPixabay+reqURL.query+""+reqURL.imageType);
  const imageRequest = await fetch(reqURL.basePixabay+reqURL.keyPixabay+reqURL.query+"puerto+cortes"+reqURL.imageType);
  try{
    const imageData = await imageRequest.json();
    console.log(imageData);
  } catch(error) {
    console.log("error", error);
  }
};

export { 
  runRequests
}