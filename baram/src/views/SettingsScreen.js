import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const[selectedUnit, setSelectedUnit] = useState('metric');

  // Load saved value on mount
  useEffect(() => {
    async function loadSettings() {
      const value = await AsyncStorage.getItem('temperatureUnit');
      if (value) {
        setSelectedUnit(value);
      }
    }
    loadSettings();
  }, []);

  // Save selected value on change
  useEffect(() => {
    async function saveSettings() {
      await AsyncStorage.setItem('temperatureUnit', selectedUnit);
    }
    saveSettings();
  }, [selectedUnit]);

  return (
    <View>
      <Text>Your Temperature will display in:</Text>
      <SelectPicker
        selectedValue={selectedUnit}
        onValueChange={(itemValue) => setSelectedUnit(itemValue)}
      > 
        <SelectPicker.Item label="Celcius" value="metric" />
        <SelectPicker.Item label="Fahrenheit" value="imperial" />
      </SelectPicker>
    </View>
  )
};
