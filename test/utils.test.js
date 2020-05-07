// IMPORT MODULES under test here:
const { mungeLocation, weatherMung } = require('../utils.js');
const data = require('../data/geo.json');
const weatherData = require('../data/weather.json');

const test = QUnit.test;

test('should return data for portland when given portland api response', function(assert) {
  // Arrange
  // Set up your parameters and expectations
  const expected = {
    formatted_query: 'Portland, Multnomah County, Oregon, USA',
    latitude: '45.5202471',
    longitude: '-122.6741949'
  };
    // Act
    // Call the function you're testing and set the result to a const
  const results = mungeLocation(data);

  // Assert
  // Make assertions about what is expected valid result
  assert.deepEqual(results, expected);
});


test('should return an empty object when passed invalid input', function(assert) {
  // Arrange
  // Set up your parameters and expectations
  const expected = {};
  // Act
  // Call the function you're testing and set the result to a const
  const results = mungeLocation(null);

  // Assert
  // Make assertions about what is expected valid result
  assert.deepEqual(results, expected);
});

test('should return data for weather', function(assert) {
  // Arrange
  // Set up your parameters and expectations
  const expected = [
    {
      forecast: 'Scattered clouds',
      time: '2020-05-05'
    },
    {
      forecast: 'Light snow',
      time: '2020-05-06'
    },
    {
      forecast: 'Few clouds',
      time: '2020-05-07'
    },
    {
      forecast: 'Few clouds',
      time: '2020-05-08'
    },
    {
      forecast: 'Broken clouds',
      time: '2020-05-09'
    },
    {
      forecast: 'Overcast clouds',
      time: '2020-05-10'
    },
    {
      forecast: 'Overcast clouds',
      time: '2020-05-11'
    },
    {
      forecast: 'Light rain',
      time: '2020-05-12'
    },
    {
      forecast: 'Light rain',
      time: '2020-05-13'
    },
    {
      forecast: 'Light rain',
      time: '2020-05-14'
    },
    {
      forecast: 'Overcast clouds',
      time: '2020-05-15'
    },
    {
      forecast: 'Light shower rain',
      time: '2020-05-16'
    },
    {
      forecast: 'Light rain',
      time: '2020-05-17'
    },
    {
      forecast: 'Overcast clouds',
      time: '2020-05-18'
    },
    {
      forecast: 'Overcast clouds',
      time: '2020-05-19'
    },
    {
      forecast: 'Overcast clouds',
      time: '2020-05-20'
    }
  ];
  // Act
  // Call the function you're testing and set the result to a const
  const results = weatherMung(weatherData.data);
  
  // Assert
  // Make assertions about what is expected valid result
  assert.deepEqual(results, expected);
});

test('should return data for weather', function(assert) {
  // Arrange
  // Set up your parameters and expectations
  const expected = {};
  // Act
  // Call the function you're testing and set the result to a const
  const results = weatherMung(null);
    
  // Assert
  // Make assertions about what is expected valid result
  assert.deepEqual(results, expected);
});
