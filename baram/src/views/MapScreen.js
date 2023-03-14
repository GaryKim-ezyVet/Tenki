import * as React from 'react';
import {
    SafeAreaView,
    ImageBackground
  } from 'react-native';
import { styles } from '../styles/styles';
export default function mapScreen() {

  return (
    <SafeAreaView>
      <ImageBackground source={require('../../assets/New_Zealand_map.png')} style={styles.map}>
      </ImageBackground>
    </SafeAreaView>
  );
}