import * as React from 'react';
import { SafeAreaView, Image, FlatList } from 'react-native';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { styles } from '../styles/styles';
import GetForecast from '../utils/GetForecast';

//dropdown setting - how to persist this on app close 
//map make things look prettier
//main screen weather icon does not load 
//make things typescript

export default function Applocation() {

  const forecast = GetForecast();

  //return a Flatlist which will load forecast into the Weather display cards if forecast value is not null
  return (
    <SafeAreaView style={styles.pageTitle}>
      <Image 
      style = {styles.logo}
      source={require('../../assets/baram-logo.png') } 
      />

      <FlatList
      data = {forecast ? [
        {cityName: forecast?.name, 
          cityTemp:forecast?.main.temp,
          cityWeather:forecast?.weather[0].icon,
          cityHumidity:forecast?.main.humidity
        },
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
        },
      //could I load a function in the data here to then return theese fore units to then use in the Flat list? - this way I can pull the location with the API url then dynamically pull out the information like temp or icon etc
      ] : []}
        
      renderItem = {({item}) => <WeatherDisplay cityName={item.cityName} cityTemp={item.cityTemp} cityWeather={item.cityWeather} cityHumidity={item.cityHumidity}/>}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{padding: 16}}
      >

      </FlatList>
    </SafeAreaView>
  );
  
}