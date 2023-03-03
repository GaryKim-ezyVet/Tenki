import React, { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';
//import useWeather from '../utils/LoadWeather';
//import loadLocation from '../utils/GlobalLocation';
import * as Location from 'expo-location';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { styles } from '../styles/styles';


const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';



export default function Applocation() {

  const [globalLat, setglobalLat] = useState(null);
  const [globalLon, setglobalLon] = useState(null);
  const [forecast, setForecast] = useState(null);

//will prompt for permission to load location details from the device to generate a lat and lon position
  useEffect(() => {  

    const loadWeather = async () => {

    //Access permissions to access location services 
    await Location.requestForegroundPermissionsAsync();
    
    let globalPositioning = await Location.getCurrentPositionAsync();
    setglobalLat(globalPositioning.coords.latitude);
    setglobalLon(globalPositioning.coords.longitude);

  }; 
loadWeather();
},[]);
  

//if lat and lon values exist pull the API link with current lat and lon to set forecast information 
  useEffect(() =>{
    if (globalLat && globalLon) {
    fetch(`${base_weather_api_url}lat=${globalLat}&lon=${globalLon}&units=metric&APPID=${openWeatherKey}`)
      .then((res) => res.json())
      .then((result) => {
      setForecast(result)
    })
  }
  },[globalLat,globalLon]);


  //icon list: https://openweathermap.org/weather-conditions 
  //return a Flatlist which will load forecast into the Weather display cards if forecast value is not null
  return (
    <View style={styles.pageTitle}>
      <Image 
      style = {styles.logo}
      source={require('../../assets/baram-logo.png') } 
      />

      <FlatList
      data = {forecast ? [
        {cityName: forecast?.name, 
          cityTemp:forecast?.main.temp,
          cityWeather:forecast?.weather[0].icon,
          cityHumidity:forecast?.main.humidity},
        {cityName: 'Christchurch',
          cityTemp: 21,
          cityWeather: '09d',
          cityHumidity: 60
        },
        {cityName: 'Wellington',
          cityTemp: 18,
          cityWeather: '10d',
          cityHumidity: 30
        },
        {cityName: 'Seoul',
          cityTemp: -1,
          cityWeather: '13n',
          cityHumidity: 4
        },
        {cityName: 'Tokyo',
          cityTemp: 6,
          cityWeather: '50n',
          cityHumidity: 30
        },] : []}
      renderItem = {({item}) => <WeatherDisplay cityName={item.cityName} cityTemp={item.cityTemp} cityWeather={item.cityWeather} cityHumidity={item.cityHumidity}/>}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{padding: 16}}
      >

      </FlatList>
    </View>
  );
  
}