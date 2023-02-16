import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';

//load setting screen
//potential dark theme option
export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Text>Slider to select C° or F°</Text> 
    </View>
  );
}
