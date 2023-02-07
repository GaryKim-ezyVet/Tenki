import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from './Location';
import MapScreen from './MapScreen';
import SettingsScreen from './SettingsScreen';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Tab_icon = {
  //after optimising I am unsure how to change the icon based on it's focus
  Main: 'md-cloud',
  Map: 'md-map',
  Settings: 'md-settings',

}

const createScreenOptions = ({route}) => {
  const iconName = Tab_icon[route.name]
  return {
    tabBarIcon: ({size, color}) => (
      //set configuration of the navigation bar 
      <Ionicons name={iconName} size={25} color={color}/>
    ),
  };
};

export default function MainScreen() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {createScreenOptions} 
          tabBarOptions={{
            //set the color of the icons based on whether they are active or inactive 
            tabBarActiveTintColor: '#32bef6',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name='Main' component={Location} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}