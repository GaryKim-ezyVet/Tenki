import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetForecast from './GetForecast';

export default function getSettings() {
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
  
  return [];
}


