//will have function here to export the location from API 
import * as React from 'react';
import {
    Text,
    View,
    fetch,
  } from 'react-native';

//load Maps
// fetch(ww3-ecmwf.global);
export default function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> This is where I will display the map with weather information </Text>
    </View>
  );
}