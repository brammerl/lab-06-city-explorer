
// import express from 'express';
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const cors = require('cors');

// bag of coins that indy uses
const data = require('./data/geo.json');
const weatherData = require('./data/weather.json');
// we're going to replace this with a fetch to the API

const app = express();

app.use(cors());

const mungedData = ((array) => {
  const locationData = array[0];
  const locationObject = {
    formatted_query: locationData.display_name,
    latitude: locationData.lat,
    longtitude: locationData.lonç,
  };
  return locationObject;
});

const mungedWeatherArray = ((array) => array.map((weatherObj) => {
  const newObject = {
    forecast: weatherObj.weather.description,
    time: weatherObj.datetime,
  };
  return newObject;
}));

app.get('/location', (request, response) => {
  try {
    const firstLocationData = mungedData(data);

    response.json(firstLocationData);
  } catch (e) {
    console.error(e);

    response.json({
      status: 500,
      responseText: 'Sorry something went wrong!',
    });
  }
});

app.get('/weather', (req, resp) => {
  try {
    const weatherArray = mungedWeatherArray(weatherData.data);

    resp.json(weatherArray);
  } catch (e) {
    console.error(e);

    resp.json({
      status: 500,
      responseText: 'Sorry something went wrong!',
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
