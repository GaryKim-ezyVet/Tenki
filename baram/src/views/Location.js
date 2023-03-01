import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
//import GlobalLocation from '../utils/GlobalLocation';
//import Forecast, {forecast} from '../utils/Forecast';
import * as Location from 'expo-location';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { styles } from '../styles/styles';
  
//Things to do  
//separate the code so that there is more structure (what is seen vs not) 
// if statement for Lat and Lon 
// use props and reusable components to build horizontal sliders for weather information

const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

//user expo location and weather api to load weather details for current location.
export default function Applocation() {

  //GlobalLocation;
  const [globalLat, setglobalLat] = useState(0);
  const [globalLon, setglobalLon] = useState(0);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {  

    const loadWeather = async () => {

    //Access permissions to access location services 
    await Location.requestForegroundPermissionsAsync();
    
    //load global lat and lon from the permissions
    let globalPositioning = await Location.getCurrentPositionAsync();
    
    //set global coordinates for latitude and longitude
    setglobalLat(globalPositioning.coords.latitude);
    setglobalLon(globalPositioning.coords.longitude);

    
  }; 
loadWeather();
},[]);

  //Forecast;
  useEffect(() =>{
    fetch(`${base_weather_api_url}lat=${globalLat}&lon=${globalLon}&units=metric&APPID=${openWeatherKey}`)
      .then((res) => res.json())
      .then((result) => {
      setForecast(result)
      
    })
  },[globalLat,globalLon]);

  
  //icon list: https://openweathermap.org/weather-conditions 
  return (
    <View style={styles.pageTitle}>
      <Image 
      style = {styles.logo}
      source={require('../../assets/baram-logo.png') } 
      />
      <WeatherDisplay 
      cityName = {forecast?.name}
      cityTemp = {forecast?.main.temp}
      cityWeather = {forecast?.weather[0].main}
      //cityIcon = {}
      cityHumidity = {forecast?.main.humidity}
      />
      
      <WeatherDisplay 
      cityName = {'Christchurch'}
      cityTemp = {forecast?.main.temp}
      cityWeather = {forecast?.weather[0].main}
      cityHumidity = {forecast?.main.humidity}
      />
     
    </View>
  );
  
}