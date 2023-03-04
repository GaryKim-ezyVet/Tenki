import * as React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Text,
    Image,
  } from 'react-native';
import { styles } from '../styles/styles';
import GetForecast from '../utils/GetForecast';
import { Card } from 'react-native-paper';


//load Maps
// fetch(ww3-ecmwf.global);
export default function MapScreen() {
  const forecast = GetForecast();

  return (
    <ImageBackground source={require('../../assets/New_Zealand_map.png')} style={styles.map}>
      
      <SafeAreaView style={styles.mapView}>
      <Card elevation={3} style={styles.mapCard} >
        <Text>{forecast?.name}</Text>
        <Text>{forecast?.main.temp}</Text>
        <Text>{forecast?.weather[0].main}</Text>
        <Text>{forecast?.main.humidity}</Text>
      </Card>
      <Image 
      style = {styles.mapLogo}
      source={require('../../assets/baram-logo.png') } 
      />
      </SafeAreaView>
    </ImageBackground>
  );
}