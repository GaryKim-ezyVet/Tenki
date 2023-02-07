//will have function here to export the location from API 
//https://www.npmjs.com/package/react-native-weather-api
import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

//first load location 
//run the Location function onclick again in case they need to refresh the location
export default function Location(){
    return (
      <View style = {styles.pageTitle} >
        <Text style={styles.title}> Welcome to Baram </Text>
        <Text style={styles.context}> To refresh location tap 'Main' again please </Text>
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
  context:{
    marginTop:50,
    fontsize:15,
    textAlign: 'center',
  }
});