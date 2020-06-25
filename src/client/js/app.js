// Global Variables
let reqURL = {};
let projectData = {};

//let location = 
//location = replaceSpace.replace(/ /g, "+");

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
      let cityName = projectData.city.replace(/ /g, "+");
      getImage(cityName).then(imageData => {
        console.log( "::: IMAGE DATA :::");
        let results = imageData.total;
        console.log("Results: "+results);
        // If no results are received back from the city name, then a new search is done for the country
        if (results == 0) {
          getImage(projectData.country).then(imageData => {
            console.log(imageData)
            projectData.image = imageData.hits[1].largeImageURL;
            console.log(projectData);
            updateUI(projectData);
          })
        } else {
          projectData.image = imageData.hits[1].largeImageURL;
          console.log(projectData);
          updateUI(projectData);
        }
      })
    })
  })
};

// Request Geonames URL from server
const getURL = async () => {
  projectData.city = document.getElementById('city').value;
  const URLrequest = await fetch('/url')
  try {
    reqURL = await URLrequest.json();
  } catch(error) {
    console.log("error", error);
  }
};

// Resquest data from Geonames API
const getCoordinates = async () => {
  const request = await fetch(reqURL.baseGeonames+projectData.city+reqURL.keyGeonames);
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

// Request image from Pixabay
const getImage= async (location = "") => {
  console.log(reqURL.basePixabay+reqURL.keyPixabay+reqURL.query+location+reqURL.imageType);
  const imageRequest = await fetch(reqURL.basePixabay+reqURL.keyPixabay+reqURL.query+location+reqURL.imageType);
  try{
    const imageData = await imageRequest.json();
    return imageData;
  } catch(error) {
    console.log("error", error);
  }
};

// Add image via HTML
const updateUI = (myData) => {
  console.log(myData.image);
  let locationCard = document.createElement("div");
  locationCard.classList.add("card");
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  imageDiv.style.backgroundImage = `url(${myData.image})`;
  let infoDiv = document.createElement("div");
  infoDiv.classList.add("info");
  infoDiv.innerHTML = 
    '<div class="card-heading">\n'+
    `<h2>${myData.city}, ${myData.country}</h2>\n` +
    '<div class="delete-btn"></div>' +
    '</div>\n' +
    `<h4>${myData.city}, ${myData.country}</h2>\n`;
  locationCard.appendChild(imageDiv);
  locationCard.appendChild(infoDiv);
  document.getElementById("app").appendChild(locationCard);
}

// Request country data to Restcountries API
const getCountryData= async () => {
  const countryDataRequest = await fetch("https://restcountries.eu/rest/v2/name/"+projectData.country);
  try{
    const countryData = await countryDataRequest.json();
    return countryData;
  } catch(error) {
    console.log("error", error);
  }
};

export { 
  runRequests
}