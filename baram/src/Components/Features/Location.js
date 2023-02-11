//will have function here to export the location from API 
//https://www.npmjs.com/package/react-native-weather-api
import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
  } from 'react-native';


//first load location 
//run the Location function onclick again in case they need to refresh the location
export default function Location(){
    return (
      <View style = {styles.pageTitle} >
        <Text style={styles.title}> Welcome to Baram </Text>
        <Text style={styles.context}> The current weather at Your current location is:
        {"\n"} <Image source={require('../../assets/rain.png')} />
        {"\n"} There is a 20% chance of rain
        {"\n"} The current temperature is:
        {"\n"} The current windspeed is: 
        </Text>
        
        <Text style={styles.context}> The current weather in Wellingron is: [Icon here] 
        {"\n"} There is a 4% chance of rain
        {"\n"} The current temperature is: 26
        {"\n"} The current windspeed is: 12m/s
        </Text>
        
        
        <Button 
        //onPress() = {}
        title={"Press to update location"}
        />
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