import React from 'react';

const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const baseWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

export default function getForecast(cityLatitude, cityLongitude) {
  // Load weather data from OpenWeather API using the variables for currentlocation or defaultlocation 
  return fetch(`${baseWeatherApiUrl}lat=${cityLatitude}&lon=${cityLongitude}&units=metric&APPID=${openWeatherKey}`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('Something went wrong please try again later:', error));
}
