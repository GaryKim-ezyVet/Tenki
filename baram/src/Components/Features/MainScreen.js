import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from './Location';
import MapScreen from './MapScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
              let iconName;
              //set icon based on Screen Name
              
              //if the screen is Main
              if (route.name === 'Main'){
                  iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              //if the screen is map
              }else if (route.name === 'Map'){
                iconName=focused ? 'ios-map' : 'ios-map';

              //if the screen is settings
              }else if (route.name === 'Settings'){
                iconName=focused ? 'ios-list' : 'ios-list-outline';
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