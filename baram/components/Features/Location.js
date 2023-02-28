import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Location from 'expo-location';
  
//Things to do / separate the code so that there is more structure (what is seen vs not) / if statement for Lat and Lon / use props and reusable components to build horizontal sliders for weather information

//weather key from openweather api
const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';


//user expo location and weather api to load weather details for current location.
export default function Applocation() {
  
  //hooks for forecast and location variables
  const [forecast, setForecast] = useState(null);
  const [globalLat, setglobalLat] = useState(0);
  const [globalLon, setglobalLon] = useState(0);
  
  console.log('start app');
    
  useEffect(() => {  

    const loadWeather = async () => {

    //console log to tract start of async function
    console.log('start async function')

    //Access permissions to access location services 
    await Location.requestForegroundPermissionsAsync();
    
    //load global lat and lon from the permissions
    let globalPositioning = await Location.getCurrentPositionAsync();
    
    //set global coordinates for latitude and longitude
    setglobalLat(globalPositioning.coords.latitude);
    setglobalLon(globalPositioning.coords.longitude);

    //console log to test global positioning has been set - therefore long and lat should be set 
    console.log('Global positioning: ', globalPositioning);
    console.log('before fetch lon:', globalLon);
    console.log('before fetch lat:', globalLat);
    
    
  }; 
loadWeather();
},[]);


  console.log('after fetch lon:', globalLon);
  console.log('after fetch lat:', globalLat);

  //set up if and else so that useEffect will only run if globalLon and Lat are set
  useEffect(() =>{
    //https://api.openweathermap.org/data/2.5/weather?lat=-36.8581337&lon=174.754095&units=metric&appid=bb481abe6d37c9527b03cf0575897349 at the ezyVet office
    fetch(`${base_weather_api_url}lat=${globalLat}&lon=${globalLon}&units=metric&APPID=${openWeatherKey}`)
      .then((res) => res.json())
      .then((result) => {
      setForecast(result)
      
    })
  },[globalLat,globalLon]);




  //icon list: https://openweathermap.org/weather-conditions
  return (
    <View style={styles.pageTitle}>
      
      <Image source={require('../../assets/baram-logo.png')} />
      <HorizontalSlider 
      cityName = {forecast?.name}
      cityTemp = {forecast?.main.temp}
      cityWeather = {forecast?.weather[0].main}
      //cityIcon = {}
      cityHumidity = {forecast?.main.humidity}
      />
      
      <HorizontalSlider 
      cityName = {forecast?.name}
      cityTemp = {forecast?.main.temp}
      cityWeather = {forecast?.weather[0].main}
      cityHumidity = {forecast?.main.humidity}
      />
     
    </View>
  );
  
}

//Re-usable component to display weather information per city 
//props > make sense which parts are grouped together > mental box > they become their own component > pass the data down 
const HorizontalSlider = ({cityName, cityTemp, cityWeather, cityHumidity}) => {
  return(
    <View>
      <Text style={styles.contextheader}>The current temperature at {cityName ?? 'Loading'} is: {cityTemp ?? 'Loading'}</Text>
      <Text style={styles.context}>The current weather is: {cityWeather ?? 'Loading'} </Text>
      <Text style={styles.context}>The current humidity is {cityHumidity ?? 'Loading'}% </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pageTitle: {
    flex: 1,
  },
  title: {
    marginTop: 16,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  contextheader: {
    marginTop: 30,
    fontSize: 15,
    textAlign: 'center',
  },
  context: {
    marginTop: 3,
    fontSize: 15,
    textAlign: 'center',
  },
  icons: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

