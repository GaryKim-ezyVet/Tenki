import React from 'react';
import * as Location from 'expo-location';

const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

const getLocation = async () => {
  const defaultLocation = [
      coords={
        latitude: -135,
        longitude: 35,
      }
  ]; 
  await Location.requestForegroundPermissionsAsync();
  let currentLocation = await Location.getCurrentPositionAsync();
  return currentLocation ?? defaultLocation
}

export default function GetForecast(currentLocation) {
  // Load weather data from OpenWeather API using current lat and lon
  fetch(`${base_weather_api_url}q=Auckland&units=metric&APPID=${openWeatherKey}`)
    .then((res) => res.json())
    .then((result) => {
      setForecast(result)
    })
}