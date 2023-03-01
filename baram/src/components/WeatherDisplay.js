import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

//Re-usable component to display weather information per city 
//props > make sense which parts are grouped together > mental box > they become their own component > pass the data down 
export const WeatherDisplay = ({cityName, cityTemp, cityWeather, cityHumidity}) => {
  return(
    <View>
      <Text style={styles.contextheader}>The current temperature at {cityName ?? 'Finding city'} is: {cityTemp ?? 'Loading'}</Text>
      <Text style={styles.context}>The current weather is: {cityWeather ?? 'Loading'} </Text>
      <Text style={styles.context}>The current humidity is {cityHumidity ?? 'Loading'}% </Text>
    </View>
  )
}
