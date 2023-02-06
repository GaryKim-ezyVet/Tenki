//will have function here to export the location from API 
//https://www.npmjs.com/package/react-native-weather-apihttps://www.npmjs.com/package/react-native-weather-api
import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';


//run the Location function onclick
export default function Location(){
    return (
      <View style = {styles.pageTitle} >
        <text style={styles.title}>Welcome to Baram</text>
      </View>
    );
}

const styles = StyleSheet.create({
  pageTitle: {
    flex: 1,
  },
    title: {
    marginTop: 16,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});