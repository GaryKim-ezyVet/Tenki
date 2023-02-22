import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import * as Location from 'expo-location';

  
//weather key from openweather api
const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
const base_weather_api_url = 'https://api.openweathermap.org/data/2.5/weather?';


//user expo location and weather api to load weather details for current location.
export default function Applocation() {
  console.log('app started');
  const [forecast, setForecast] = useState(null);
  const [globalLat, setglobalLat] = useState([]);
  const [globalLon, setglobalLon] = useState([]);
  console.log('start app');
  
  useEffect(() => {
    loadWeather
  }, []);
    const loadWeather = async () => {
    console.log('start async function')
    //Access permissions to access location services 
    let { status } = await Location.requestForegroundPermissionsAsync();
    let globalPositioning = await Location.getCurrentPositionAsync({});
    
    //set global coordinates for latitude and longitude
    setglobalLat(globalPositioning.coords.latitude);
    setglobalLon(globalPositioning.coords.longitude);
    
    console.log('Global positioning: ', globalPositioning);
    //fetch information from the API then assign the value to variable Forecast
    console.log('lon:', globalLon);
    console.log('lat:', globalLat);

    //fetch(`${base_weather_api_url}lat=${globalLat}?&lon=${globalLon}?&units=metric&APPID=${openWeatherKey}`)
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.4226711&lon=-122.0849872&appid=bb481abe6d37c9527b03cf0575897349')
      .then((res) => res.json())
      .then((result) => {
      setForecast(result)
      console.log('result',result)
    })
    
    console.log('forecast', forecast);
  }

  return (
    <View style={styles.pageTitle}>
      
      <Text style={styles.title}> Welcome to Baram </Text>
      <Text>{forecast?.main.temp}</Text>
      <Image style={styles.icons} source={require('../../assets/rain.png')} />
      <Text style={styles.contextheader}>
        {'\n'}The current weather in Wellington is: [Icon here]
        {'\n'} There is a 4% chance of rain
        {'\n'} The current temperature is: 26
        {'\n'} The current windspeed is: 12m/s
      </Text>
      
      <Button 
      title = {'Update location'} 
      onPress = {loadWeather}
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

