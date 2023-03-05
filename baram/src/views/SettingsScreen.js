import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import GetSettings from '../utils/GetSettings';


export default function SettingsScreen() {

  //hook for temperature unit
  const [selectedUnits, setSelectedUnits] = useState(null);

    // Load saved value on mount
    useEffect(() => {
      async function loadSettings() {
        const value = await AsyncStorage.getItem('temperatureUnit');
        if (value) {
          setSelectedUnits(value);
        }
      }
      loadSettings();
    }, []);
  
    // Save selected value on change
    useEffect(() => {
      async function saveSettings() {
        await AsyncStorage.setItem('temperatureUnit', selectedUnits);
      }
      saveSettings();
    }, [selectedUnits]);

  return (
    <View>
      <Text>Your Temperature will display in:</Text>
      <SelectPicker
        selectedUnits={selectedUnits}
        onValueChange={(itemValue) => setSelectedUnits(itemValue)}
      > 
        <SelectPicker.Item label="Celcius" value="metric" />
        <SelectPicker.Item label="Fahrenheit" value="imperial" />
      </SelectPicker>
    </View>
  )
};