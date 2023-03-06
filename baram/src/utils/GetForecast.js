
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import GetSettings, {selectedUnit} from './GetSettings';

export const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

export default function GetForecast() {

//selected unit is undefined currently - once I can call the selectedUnit's updated values here the API result should also update.
console.log(selectedUnit);

const [globalLat, setglobalLat] = useState(null);
const [globalLon, setglobalLon] = useState(null);
const [forecast, setForecast] = useState(null);  

  useEffect(() => {  
    const loadWeather = async () => {
      // Request permission to access location services 
      await Location.requestForegroundPermissionsAsync();
      let globalPositioning = await Location.getCurrentPositionAsync();
      setglobalLat(globalPositioning.coords.latitude);
      setglobalLon(globalPositioning.coords.longitude);
    }; 
    loadWeather();
  },[]);

  //if global lat and lon are not null values
  useEffect(() =>{
    if (globalLat && globalLon) {
      // Load weather data from OpenWeather API using current lat and lon
      fetch(`${base_weather_api_url}lat=${globalLat}&lon=${globalLon}&units=${selectedUnit}&APPID=${openWeatherKey}`)
        .then((res) => res.json())
        .then((result) => {
          setForecast(result)
        })
    }
  },[globalLat,globalLon,selectedUnit]);

  return forecast;
}