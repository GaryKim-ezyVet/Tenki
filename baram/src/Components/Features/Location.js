import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    State,
    Alert,
    Component,
  } from 'react-native';
import * as Location from 'expo-location';

//weather key from openweather api
const openWeatherKey = 'bb481abe6d37c9527b03cf0575897349';
let weatherurl = 'https://api.openweathermap.org/data/3.0/onecall?&units=metric&exclude=minutely,hourly,&appid=${openWeatherKey}'

//user expo location and weather api to load weather details for current location. 
const Update_Weather=() =>  {
  //Hook for location variable and forecast variable
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    (async () => {
      //request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      //Error message for when permission is not granted
      if (status !== 'granted') {
        Alert.alert('Please allow the app to access your location');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const resposne = await fetch('${weatherurl}&lat=${location.coords.latitude}}&lon=${location.coords.longitude}&exclude={part}&appid=${openWeatherKey}')
      const weatherresult = await resposne.json();

      if(!response.ok){
        setErrorMsg('Something is wrong')
      }
      else{
        setForecast(weatherresult);
      }
      loadForecast();
    })();
    }, []);
    console.log("test");
    console.log(weatherresult);
    }

export default function Applocation(){
    return (
      <View style = {styles.pageTitle} >
        <Text style={styles.title}> Welcome to Baram </Text>
        <Text style={styles.contextheader}>It is currently : </Text>
        <Image style={styles.icons} source={require('../../assets/rain.png')} />
        <Text style={styles.context}>There is a 100% chance of rain </Text>
        <Text style={styles.context}>The current temperature is:</Text>
        <Text style={styles.context}>The current windspeed is: </Text>
      
        
        <Text style={styles.contextheader}> The current weather in Wellingron is: [Icon here] 
        {"\n"} There is a 4% chance of rain
        {"\n"} The current temperature is: 26
        {"\n"} The current windspeed is: 12m/s
        </Text>
    

        {/* Press to re-load weather and location information */ }
       <Button 
        title={"Press to update location"}
        onPress = { () => {
          console.log('test button');
        }}
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
  contextheader:{
    marginTop: 30,
    fontsize:15,
    textAlign: 'center',
  },
  context:{
    marginTop: 3,
    fontsize:15,
    textAlign: 'center',
  },
  icons:{
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});