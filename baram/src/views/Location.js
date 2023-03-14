import React, {useEffect, useState} from 'react';
import { SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { styles } from '../styles/styles';
import {cityList} from '../../assets/cityList';
import cityForecast from '../utils/CityForecast'

//main screen weather icon does not load 

export default function appLocation() {
  const [forecastList, setForecastList] = useState([]);

  useEffect(() => {
    cityForecast({cityList})
      .then((result) => {
        setForecastList(result);
      })
      .catch((error) => {
        console.log('Error fetching forecast:', error);
      });
  }, []);

  //return a Flatlist value of Flatlist will be from the citylist array
  return (
    <SafeAreaView style={styles.pageTitle}>
      <Image 
      style = {styles.logo}
      source={require('../../assets/baram-logo.png') } 
      />

      <FlatList
      data = {
        forecastList
      }
        
      renderItem = {({item}) => <WeatherDisplay cityName={item.name} cityTemp={item.main.temp} cityWeather={item.weather[0].icon} cityHumidity={item.main.humidity}/>}
      //should not use index here id and name combination would be best since index is not unique
      keyExtractor={(item, id) => id.toString()}
      contentContainerStyle={{padding: 16}}
      >
      </FlatList>
    </SafeAreaView>
  );
  
}