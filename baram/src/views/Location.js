import * as React from 'react';
import { SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { styles } from '../styles/styles';
import GetForecast from '../utils/GetForecast';
import GetLocation, {currentLocation} from '../utils/GetLocation';
import {cityList} from '../../assets/cityList';

//main screen weather icon does not load 
//make things typescript

export default function Applocation() {
  console.log(cityList);  
  //call current location and permissions
  GetLocation();

  console.log('location',currentLocation);

  //return a Flatlist which will load forecast into the Weather display cards if forecast value is not null
  return (
    <SafeAreaView style={styles.pageTitle}>
      <Image 
      style = {styles.logo}
      source={require('../../assets/baram-logo.png') } 
      />

      <FlatList
      data = {[
        {cityList}
      //could I load a function in the data here to then return theese fore units to then use in the Flat list? - this way I can pull the location with the API url then dynamically pull out the information like temp or icon etc
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