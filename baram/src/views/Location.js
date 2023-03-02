import React, { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';
//import useWeather from '../utils/LoadWeather';
//import loadLocation from '../utils/GlobalLocation';
import * as Location from 'expo-location';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { styles } from '../styles/styles';


//Things to do  

const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

//user expo location and weather api to load weather details for current location.

export default function Applocation() {

  const [globalLat, setglobalLat] = useState(null);
  const [globalLon, setglobalLon] = useState(null);
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
  

//if globallat and lon exist execute below code
  useEffect(() =>{
    if (globalLat && globalLon) {
    fetch(`${base_weather_api_url}lat=${globalLat}&lon=${globalLon}&units=metric&APPID=${openWeatherKey}`)
      .then((res) => res.json())
      .then((result) => {
      setForecast(result)
    })
  }
  },[globalLat,globalLon]);

  //else 

  
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
      cityWeather ={forecast?.weather[0].main}
      cityHumidity = {forecast?.main.humidity}
      />
      
      <WeatherDisplay 
      cityName = {'Christchurch'}
      cityTemp = {forecast?.main.temp}
      cityWeather = {forecast?.weather[0].main}
      cityHumidity = {forecast?.main.humidity}
      />
      <FlatList
      data = {[{cityName: forecast?.name, cityTemp:forecast?.main.temp,cityWeather:forecast?.weather[0].main,cityHumidity:forecast?.main.humidity},{name:2},{name:3},{name:4},{name:5}]}
      renderItem = {() => <WeatherDisplay/>}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{padding: 16}}
      >

      </FlatList>
    </View>
  );
  
}