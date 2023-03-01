import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

//Re-usable component to display weather information per city 
//props > make sense which parts are grouped together > mental box > they become their own component > pass the data down 
export const WeatherDisplay = ({cityName, cityTemp, cityWeather, cityHumidity}) => {
  return(
    <View>
      <Text style={styles.contextheader}>
        {cityName ?? 'Finding city'} is: {cityTemp ?? 'Loading'}  
        The current weather is: {cityWeather ?? 'Loading'}  
        The current humidity is {cityHumidity ?? 'Loading'}%  
      </Text>
    </View>
  )
}
