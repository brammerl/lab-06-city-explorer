
// import express from 'express';
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const cors = require('cors');

// bag of coins that indy uses
const data = require('./data/geo.json');
// we're going to replace this with a fetch to the API

const app = express();

// const mungeWeather = (dataArr) => {
//   dataArr
// };

app.use(cors());

// function toLocation(/*geoData*/) {
//   const firstResult = geoData.results[0];
//   const geometry = firstResult.geometry;
//   return {
//     formatted_query: firstResult.formatted_address,
//     latitude: geometry.location.lat,
//     longitude: geometry.location.lng
//   };
// }

// function getLatLng(location) {
//   // simulate an error if special "bad location" is provided:
//   if (location === 'bad location') {
//     throw new Error();
//   }

//   const geoData = './data/geo.json';

//   // convert to desired data format:
//   return toLocation(geoData);
// }

const mungedData = ((array) => {
  const locationData = array[0];
  const locationObject = {
    formatted_query: locationData.display_name,
    latitude: locationData.lat,
    longtitude: locationData.lon,
  };
  return locationObject;
});


app.get('/location', (request, response) => {
  const firstLocationData = mungedData(data);

  response.json(firstLocationData);

//   const locationData = data.results[0];
//   response.json({
//     formatted_query: locationData.display_name,
//     latitude: locationData.lat,
//     longtitude: locationData.long,
//   });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
