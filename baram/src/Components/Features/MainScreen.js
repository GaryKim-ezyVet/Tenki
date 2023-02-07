import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from './Location';
import MapScreen from './MapScreen';
import SettingsScreen from './SettingsScreen';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
              let iconName;
              //set icon based on Screen Name
              
              //if the focused screen is Main display the refresh icon to tell users they can refresh the location else cloud icon so they can 'reopen' the screen
              if (route.name === 'Main'){
                  iconName = focused
                  ? 'ios-refresh'
                  : 'ios-cloud';
              
              //if the screen is map display map icon regardless of focus 
              }else if (route.name === 'Map'){
                iconName="md-map";

              //if the screen is settings
              }else if (route.name === 'Settings'){
                iconName="md-settings";
              }

              //set the configurations of the
              return <Ionicons name={iconName} size={25} color={color}/>;
            },
            //set the color of the icons based on whether they are active or inactive 
            tabBarActiveTintColor: '#32bef6',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name='Main' component={Location} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}