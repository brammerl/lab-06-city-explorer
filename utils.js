const request = require('superagent');

function mungeLocation(array) {
  try {
    const locationData = array[0];
    return {
      formatted_query: locationData.display_name,
      latitude: locationData.lat,
      longitude: locationData.lon,
    };
  } catch(e) {
    return {};
  }
}

function weatherMung(array) {
  try {
    const specificWeather = array.map((weatherObj) => {
    
      return {
        forecast: weatherObj.weather.description,
        time: weatherObj.datetime,
      };
    });
    return specificWeather;
  } catch(e) {
    return {};
  }
}

const getLocation = async(city) => {
  try {
    const data = await request.get(`GET https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${city}&format=json`);
    
    return JSON.parse(data.text)[0];
  } catch(e) {
    console.error(e);
  }
};

const parseLocation = (location) => ({
  formatted_query: location.display_name,
  latitude: location.lat,
  longitude: location.lon
});

module.exports = {
  mungeLocation,
  weatherMung,
  getLocation,
  parseLocation
};
