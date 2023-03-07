import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';

const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

const getLocation = async () => {
  const defaultLocation = 'Auckland coords';
  await Location.requestForegroundPermissionsAsync();
  let currentLocation = await Location.getCurrentPositionAsync();
  return currentLocation ?? defaultLocation
}

//reviewing console log this seems to keep loading
export default function GetForecast(currentLocation) {
  const [forecast, setForecast] = useState(null);
  useEffect = () => {
  getLocation;
  // Load weather data from OpenWeather API using the variables for currentlocation or defaultlocation 
  fetch(`${base_weather_api_url}q=Auckland&units=metric&APPID=${openWeatherKey}`)
    .then((res) => res.json())
    .then((result) => {
      setForecast(result)
    })
    return forecast;
}, [currentLocation]}