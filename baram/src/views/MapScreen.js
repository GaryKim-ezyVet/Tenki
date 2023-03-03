import * as React from 'react';
import {
    SafeAreaView,
    ImageBackground
  } from 'react-native';
import { styles } from '../styles/styles';


//load Maps
// fetch(ww3-ecmwf.global);
export default function MapScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('../../assets/New_Zealand_map.png')} style={styles.map} /> 
    </SafeAreaView>
  );
}