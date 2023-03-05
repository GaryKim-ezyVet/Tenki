import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GetSettings() {
    const [selectedValue, setSelectedValue] = useState('metric');

    // Load saved value on mount
    useEffect(() => {
      async function loadSettings() {
        const value = await AsyncStorage.getItem('temperatureUnit');
        if (value) {
          setSelectedValue(value);
        }
      }
      loadSettings();
    }, []);
  
    // Save selected value on change
    useEffect(() => {
      async function saveSettings() {
        await AsyncStorage.setItem('temperatureUnit', selectedValue);
      }
      saveSettings();
    }, [selectedValue]);

  return selectedValue;
}