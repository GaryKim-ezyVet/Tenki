import React, {useContext} from 'react';
import * as Location from 'expo-location';

const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

const getLocation = async () => {
  const defaultLocation = 'Auckland coords';
  await Location.requestForegroundPermissionsAsync();
  let currentLocation = await Location.getCurrentPositionAsync();
  return currentLocation ?? defaultLocation
}

export default function GetForecast({setForecast}) {
  const forecast = useContext(ForecastContext);
  getLocation;
  // Load weather data from OpenWeather API using the variables for currentlocation or defaultlocation 
  fetch(`${base_weather_api_url}q=Auckland&units=metric&APPID=${openWeatherKey}`)
    .then((res) => res.json())
    .then((result) => {
      setForecast(result)
    })
    return forecast;
}