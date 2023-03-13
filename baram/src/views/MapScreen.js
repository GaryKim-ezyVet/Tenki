import * as React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    FlatList
  } from 'react-native';
import { styles } from '../styles/styles';
import GetForecast from '../utils/GetForecast';
import { WeatherDisplay } from '../components/WeatherDisplay';
import GetLocation from '../utils/GetLocation';

export default function MapScreen() {


  return (
    <SafeAreaView>
      <ImageBackground source={require('../../assets/New_Zealand_map.png')} style={styles.map}>
      </ImageBackground>
    </SafeAreaView>
  );
}