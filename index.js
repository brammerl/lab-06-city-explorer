
// import express from 'express';
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const cors = require('cors');

// bag of coins that indy uses
const data = require('./data/geo.json');
const weatherData = require('./data/weather.json');
const { weatherMung, getLocation, parseLocation } = require('../utils.js');
// we're going to replace this with a fetch to the API

const app = express();

app.use(cors());

app.get('/location', (req, resp) => {
  getLocation(req.query.search).then((locationRes) => {
    const response = parseLocation(locationRes);

    resp.json(response);
  });


app.get('/weather', (req, resp) => {
  try {
    const weatherArray = weatherMung(weatherData.data);

    resp.json(weatherArray);
  } catch(e) {
    console.error(e);

    resp.json({
      status: 500,
      responseText: 'Sorry something went wrong!',
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
