// Global Variables
let cityName = '';
let reqURL = {};
let projectData = {};

// Run tasks
const runRequests = async () => {
  getURL()
    .then(function() {
      getCoordinates();
    })
    .then(function() {

    })
};

// Request Geonames URL from server
const getURL = async () => {
  cityName = document.getElementById('city').value;
  const URLrequest = await fetch('/url')
  try{
    reqURL = await URLrequest.json();
  }catch(error) {
    console.log("error", error);
  }
};

// Resquest data from Geonames API
const getCoordinates = async (URLdata = {}) => {
  const request = await fetch(reqURL.base+cityName+reqURL.key);
  try {
    const cityData = await request.json();
    projectData.country = cityData.geonames[0].countryName;
    projectData.latitude = cityData.geonames[0].lat; 
    projectData.longitude = cityData.geonames[0].lng;
    console.log(cityData);
    console.log(projectData.country);
    console.log(projectData.latitude);
    console.log(projectData.longitude);
  }catch(error) {
    console.log("error", error);
  }
};

export { 
  runRequests
}