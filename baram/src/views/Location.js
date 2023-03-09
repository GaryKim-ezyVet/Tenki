import * as React from 'react';
import { SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { styles } from '../styles/styles';
import GetLocation from '../utils/GetLocation';
import {cityList} from '../../assets/cityList';
import CityForecast, {forecastList} from '../utils/CityForecast'

//main screen weather icon does not load 
//make things typescript

export default function Applocation() {
  //call current location and permissions
  GetLocation();
  CityForecast();

  /**
   * make sure you use your hooks to manage state inside a component, and remember to assign the outcome of your functions if you want to use them
   */

  //return a Flatlist value of Flatlist will be from the citylist array
  return (
    <SafeAreaView style={styles.pageTitle}>
      <Image 
      style = {styles.logo}
      source={require('../../assets/baram-logo.png') } 
      />

      <FlatList
      data = {[
        {cityList}
      ]}
        
      renderItem = {({item}) => <WeatherDisplay cityName={item.cityName} cityTemp={item.cityTemp} cityWeather={item.cityWeather} cityHumidity={item.cityHumidity}/>}
      //should not use index here id and name combination would be best since index is not unique
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{padding: 16}}
      >

      </FlatList>
    </SafeAreaView>
  );
  
}