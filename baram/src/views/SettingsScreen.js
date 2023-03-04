import React, {useState} from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//load setting screen
//potential dark theme option
const SettingsScreen = () => {

  const [unit, setUnit] = useState('Celcius °C');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Picker
        unit = {unit}
        onValueChange={(itemValue, itemIndex ) => setUnit(itemValue)}
      >
        <Picker.Item label="Degrees Celcius" value="Celcius °C" />
        <Picker.Item label="Degrees Fahrenheit " value="Fahrenheit °F" />
      </Picker>

      <Text> The temperature will display in: {unit}</Text>
    </View>
  );
}

export default SettingsScreen;