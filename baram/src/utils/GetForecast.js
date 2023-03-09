import React from 'react';
import { cityList } from '../../assets/cityList';

const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
/* 
    Style Comment: 
    keep your naming style consistent - snake_case vs camelCase here
*/ 
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

export default function GetForecast(cityLatitude,cityLongitude) {
  // Load weather data from OpenWeather API using the variables for currentlocation or defaultlocation 
  
  fetch(`${base_weather_api_url}lat=${cityLatitude}&lon=${cityLongitude}&units=metric&APPID=${openWeatherKey}`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('Something went wrong please try again later:', error));
}