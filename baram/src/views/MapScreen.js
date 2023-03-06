import * as React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    FlatList
  } from 'react-native';
import { styles } from '../styles/styles';
import GetForecast from '../utils/GetForecast';
import { WeatherDisplay } from '../components/WeatherDisplay';

//load Maps
// fetch(ww3-ecmwf.global);
export default function MapScreen() {
  const forecast = GetForecast();

  return (
    
    <SafeAreaView>
       <FlatList
        data = {forecast ? [
          {cityName: forecast?.name, 
          cityTemp:forecast?.main.temp,
          cityWeather:forecast?.weather[0].icon,
          cityHumidity:forecast?.main.humidity
          },] : []}
        renderItem = {({item}) => <WeatherDisplay cityName={item.cityName} cityTemp={item.cityTemp} cityWeather={item.cityWeather} cityHumidity={item.cityHumidity}/>}
        keyExtractor={(item, index) => index.toString()}
      >
  
      </FlatList>
      <ImageBackground source={require('../../assets/New_Zealand_map.png')} style={styles.map}>
      </ImageBackground>
    </SafeAreaView>
  );
}