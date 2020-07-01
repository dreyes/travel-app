import 'regenerator-runtime/runtime'

// Global Variables
let reqURL = {};
let projectData = {};

// Run tasks
const runRequests = async () => {
  getURL()
  .then(function() {
    getCoordinates()
    .then(async () => {
      return await getCountryData(projectData)
    }).then(async () => {
        return await getWeatherAndImage(); 
      }).then(function() {
        updateUI(projectData)
      })
  })
};

// Request Geonames URL from server
const getURL = async () => {
  addToObject();
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

// Collect weather and image data
const getWeatherAndImage = async () => {
  // If the start day is one week from today's date, it gives current weather
  // If the start day is over one week, it gives weather forecast
  let difference = Client.calculateDifference();
  let w;
  projectData.tripLength = difference.tripLength;
  if (difference.daysDiff < 8) {
    projectData.weatherTitle = "Current Weather:";
    w = await getCurrentWeather();
  } else {
    projectData.weatherTitle = "Weather Forecast:"
    w = await getWeatherForecast();
  }
  let cityName = projectData.city.replace(/ /g, "+");
  let i = await getImage(cityName).then(async (imageData) => {
    console.log( "::: IMAGE DATA :::");
    let results = imageData.total;
    console.log("Results: "+results);
    // If no results are received back from the city name, then a new search is done for the country
    if (results == 0) {
      i = await getImage(projectData.country).then(imageData => {
        console.log(imageData)
        projectData.image = imageData.hits[0].largeImageURL;
        console.log(projectData);
      });
    } else {
      projectData.image = imageData.hits[0].largeImageURL;
      console.log(projectData);
    }
  });
  return [w,i];
}

// Request data from Weatherbit for current weather
const getCurrentWeather = async () => {
  console.log(reqURL.baseCurrent+reqURL.lat+projectData.latitude+reqURL.lon+projectData.longitude+reqURL.keyWeatherbit);
  const weatherRequest = await fetch(reqURL.baseCurrent+reqURL.lat+projectData.latitude+reqURL.lon+projectData.longitude+reqURL.keyWeatherbit);
  try{
    const weatherData = await weatherRequest.json();
    projectData.temp = weatherData.data[0].temp;
    projectData.temp = parseInt(projectData.temp, 10);
    projectData.icon = weatherData.data[0].weather.icon;
    projectData.icon = projectData.icon.slice(-1);
    projectData.weatherCode = weatherData.data[0].weather.code;
    projectData.weatherDescription = weatherData.data[0].weather.description;
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
    projectData.max = weatherData.data[0].max_temp;
    projectData.max = parseInt(projectData.max, 10);
    projectData.min = weatherData.data[0].min_temp;
    projectData.min = parseInt(projectData.min, 10);
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

// Add initial data to object
const addToObject = () => {
  projectData.city = document.getElementById('city').value;
  projectData.city = capitalize(projectData.city);
  projectData.departure = document.getElementById('start').value;
  projectData.return = document.getElementById('end').value;
  projectData.flights = document.getElementById('flights').value;
  projectData.notes = document.getElementById('notes').value;
}

// Add image via HTML
const updateUI = (myData) => {
  console.log("CHECKING DATA");
  console.log(myData);
  myData.departure = fixDate(myData.departure);
  myData.return = fixDate(myData.return);
  addWeatherImg();
  console.log(myData.image);
  let expandedCard = document.createElement("div");
  expandedCard.classList.add("expanded-card");
  let locationCard = document.createElement("div");
  locationCard.classList.add("card");
  let additionalElements = document.createElement("div");
  additionalElements.classList.add("additional-elements");
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  imageDiv.style.backgroundImage = `url(${myData.image})`;
  let infoDiv = document.createElement("div");
  infoDiv.classList.add("info");
  let notesBtnText = "";
  if (myData.notes === "") {
    notesBtnText = "+ add notes";
  } else {
    notesBtnText = "- remove notes";
    let notesDiv = document.createElement('div');
    notesDiv.classList.add('additional');
    notesDiv.classList.add('notes');
    notesDiv.innerHTML = 
    '<h3 class="inner-h3">notes: </h3>\n' +
    `<textarea class="inner-ta">${myData.notes}</textarea>\n`;
    additionalElements.appendChild(notesDiv);
  }

  // Weather card selection
  let weatherCard = "";
  if (myData.weatherTitle === "Current Weather:") {
    weatherCard = 
    `<div class="weather-data-current">\n` +
    '<div class="weather-title">\n' +
    `<h3>${myData.weatherTitle}</h3>\n`+
    '</div>\n' +
    '<div class="weather-temp">\n' +
    `<div class="temp">${myData.temp}</div>\n` +
    '<div class="celsius">  °C</div>\n' +
    '</div>\n' +
    `<div class="weather-img" style="background-image: ${myData.weatherImg}"></div>\n` +
    '</div>\n';
  } else {
    weatherCard = 
    `<div class="weather-data-forecast">\n` +
      '<div class="weather-title">\n' +
        `<h3>${myData.weatherTitle}</h3>\n`+
      '</div>\n' +
      '<div class="min-temp">\n' +
        `<div class="temp">min: ${myData.min}</div>\n` +
        '<div class="celsius"> °C</div>\n' +
      '</div>\n' +
      '<div class="max-temp">\n' +
        `<div class="temp">max: ${myData.max}</div>\n` +
        '<div class="celsius"> °C</div>\n' +
      '</div>\n' +
    '</div>\n';
  }
  infoDiv.innerHTML =
    '<div class="card-heading">\n' +
      `<h2>${myData.city}, ${myData.country}</h2>\n` +
      '<div class="delete-btn"></div>\n' +
    '</div>\n' +
    '<div class="card-subheading">\n' +
      `<h4>${myData.departure} - ${myData.return}</h4>\n` +
      `<h4>Trip Length: ${myData.tripLength} days</h4>\n` +
    '</div>\n' +
    '<div class="card-data">\n' +
      weatherCard +
      `<div class="trip-data">\n` +
        '<div class="mixed-text">\n' +
          '<h3 class="inner-h3">flight info: </h3>\n' +
          `<textarea class="inner-ta">${myData.flights}</textarea>\n` +
        '</div>\n' +
        '<div class="mixed-text">\n' +
          '<h3 class="inner-h3">country info: </h3>\n' +
          `<textarea class="inner-ta">Region: ${myData.region}\nLanguage: ${myData.language}\nCurrency: ${myData.currency}\nPopulation: ${myData.population}</textarea>\n` +
        '</div>\n' +
      '</div>\n' +
    '</div>\n' +
    `<div class="card-btns">\n` +
      '<div class="card-btn" id="lodging-btn">+ add lodging info</div>\n' +
      '<div class="card-btn" id="packing-btn">+ add packing list</div>\n' +
      `<div class="card-btn" id="notes-btn">${notesBtnText}</div>\n` +
    '</div>\n';
  locationCard.appendChild(imageDiv);
  locationCard.appendChild(infoDiv);
  expandedCard.appendChild(locationCard);
  expandedCard.appendChild(additionalElements);
  document.getElementById("app").appendChild(expandedCard);
}

// Fix date format for card
const fixDate = (myDate) => {
  myDate = new Date(myDate);
  let dt = myDate.getDate() + 1;
  let mn = myDate.getMonth() + 1;
  let yy = myDate.getFullYear() % 100;
  return `${mn}/${dt}/${yy}`;
}

// Add an image based on weather code
const addWeatherImg = () => {
  const weatherDiv = document.getElementsByClassName("weather-img")[0];
  const x = projectData.weatherCode;
  switch (true){
    case (x < 300):
      // Thunderstorm
      projectData.weatherImg = "url('media/thunderstorm.png')";
      break;
    case (x < 600):
      // Rain
      projectData.weatherImg = "url('media/rainy.png')";
       break;
    case (x < 700):
      // Snow
      projectData.weatherImg = "url('media/snowy.png')";
      break;
    case (x < 800):
      // Mist
      projectData.weatherImg = "url('media/mist.png')";
      break;
    case (x < 801):
      // Clear
      if (projectData.icon === "d") {
        projectData.weatherImg = "url('media/clear_d.png')";
      } else{
        projectData.weatherImg = "url('media/clear_n.png')";
      }
      break;
    case (x < 802):
      // Partially Clouded
      if (projectData.icon === "d") {
        projectData.weatherImg = "url('media/partially_cloudy_d.png')";
      } else{
        projectData.weatherImg = "url('media/partially_cloudy_n.png')";
      }
      break;
    case (x > 801):
      // Cloudy
      projectData.weatherImg = "url('media/cloudy.png')";
      break;
  }
}

// Capitalize first letter of each word
const capitalize = (input) => {  
  return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
}

// Request country data to Restcountries API
const getCountryData = async (myData) => {
  const countryDataRequest = await fetch("https://restcountries.eu/rest/v2/name/"+projectData.country);
  try{
    const countryData = await countryDataRequest.json();
    console.log("::: COUNTRY DATA :::");
    console.log(countryData);
    myData.currency = countryData[0].currencies[0].name;
    myData.language = countryData[0].languages[0].name;
    myData.population = countryData[0].population;
    myData.population = myData.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    myData.region = countryData[0].region;
    return countryData;
  } catch(error) {
    console.log("error", error);
  }
};

export {
  runRequests,
  getURL,
  getCountryData
}