import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../views/Location';
import MapScreen from '../views/MapScreen';
import SettingsScreen from '../views/SettingsScreen.js';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Tab_icon = {
  Main: 'md-cloud',
  Map: 'md-search',
  Settings: 'md-settings',

}

const createScreenOptions = ({route}) => {
  const iconName = Tab_icon[route.name]
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={25} color={color}/>
    ),
  };
};

export default function MainNavigation() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {createScreenOptions} 
          tabBarOptions={{
            //set the color of the icons based on whether they are active or inactive 
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