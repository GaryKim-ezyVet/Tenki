//will have function here to export the location from API 
//https://www.npmjs.com/package/react-native-weather-api
import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
  } from 'react-native';
  


//first load location 
//run the Location function onclick again in case they need to refresh the location
export default function Location(){
    return (
      <View style = {styles.pageTitle} >
        <Text style={styles.title}> Welcome to Baram </Text>
        <Text style={styles.context}> The current weather in [Your current location] is: [Icon here] 
        {"\n"} There is a 20% chance of rain
        {"\n"} The current temperature is:
        {"\n"} The current windspeed is: 
        </Text>
        
        <Text style={styles.context}> The weather for the week will be:
        {"\n"}
        [display scrollable weather list here] 
        </Text>
        
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