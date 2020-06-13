// Resquest data from Geonames API
const requestCoordinates = async () => {
  let cityName = document.getElementById('city').value;
  const URLrequest = await fetch('/url')
  try{
    const reqURL = await URLrequest.json();
    const request = await fetch(reqURL.base+cityName+reqURL.key);
    try {
      const cityData = await request.json();
      console.log(cityData);
      return cityData;
    }catch(error) {
      console.log("error", error);
    }
  }catch(error) {
    console.log("error", error);
  }
};

export { 
  requestCoordinates
}