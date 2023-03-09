import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetForecast from './GetForecast'; // <-  unused - making sure you tidy up unused imports/variables/etc as you work will help keep your code clean and yourself sane

/* 
  This is a custom hook (nice) - these should always start with 'use', and where you use it should follow the rules of hooks 
  https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook
  https://reactjs.org/docs/hooks-rules.html
*/ 

export default function GetSettings() {
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

  return [selectedUnit, setSelectedUnit];
}


