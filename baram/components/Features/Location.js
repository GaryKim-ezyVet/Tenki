import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import * as Location from 'expo-location';

const api ={
  
//weather key from openweather api
openWeatherKey: 'bb481abe6d37c9527b03cf0575897349',
base_weather_api_url: 'https://api.openweathermap.org/data/2.5/weather?',
}

//user expo location and weather api to load weather details for current location.

export default function Applocation() {
  console.log('app started');
  const [globalPositioning, setglobalPositioning] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    loadWeather;
    }, []);
  const loadWeather = async () => {
    const {current_lat, current_long} = globalPositioning.coords;
    //fetch information from the API then assign the value to variable Forecast
    fetch('${api.base_weather_api_url}q=Auckland,nz&appid=${api.openWeatherKey}')
      .then((response) => response.json())
      .then((openWeather) => {
        setForecast(openWeather);
      })
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Please allow app to access your location to use the app');
        return;
      }

      let globalPositioning = await Location.getCurrentPositionAsync({});
      setglobalPositioning(globalPositioning);

    
  
    }
    
    catch (errorMsg){
      setErrorMsg(errorMsg.message)
    }
  }
  


  return (
    <View style={styles.pageTitle}>
      <Text style={styles.title}> Welcome to Baram </Text>
      <Text style={styles.contextheader}>It is currently : {forecast.main}</Text>
      <Image style={styles.icons} source={require('../../assets/rain.png')} />
      <Text style={styles.context}>There is a 100% chance of rain </Text>
      <Text style={styles.context}>The current temperature is:</Text>  
      <Text style={styles.context}>The current windspeed is: </Text>

      <Text style={styles.contextheader}>
        {'\n'}The current weather in Wellington is: [Icon here]
        {'\n'} There is a 4% chance of rain
        {'\n'} The current temperature is: 26
        {'\n'} The current windspeed is: 12m/s
      </Text>

      {/* Press to re-load weather*/}
      <Button 
      title = {'Update location'} 
      onClick = {loadWeather}
      />
     
    </View>
  );
  
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
    fontsize: 15,
    textAlign: 'center',
  },
  context: {
    marginTop: 3,
    fontsize: 15,
    textAlign: 'center',
  },
  icons: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

