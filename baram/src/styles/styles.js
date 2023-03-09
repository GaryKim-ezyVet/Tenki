import React from 'react';
import { StyleSheet } from 'react-native';

/* 
    Stucture Tip: 
    You can do `StyleSheet.create` as many times as you want, which means your can do small stylesheets inside your individual component files
    This can be helpful for knowing what CSS is for which component, and preventing unintended changes. 
*/ 

export const styles = StyleSheet.create({
    pageTitle: {
      flex: 1,
      backgroundColor: 'white',
    },
    title: {
      marginTop: 16,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    contextheader: {
      marginTop: 30,
      fontSize: 15,
      textAlign: 'center',
    },
    context: {
      marginTop: 3,
      fontSize: 15,
      textAlign: 'center',
    },
    icons: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width:50,
      height:50,
    },
    logo: {
      width: 150,
      height: 150,
      marginTop: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    card: {
      backgroundColor: 'lightblue',
      marginTop: 3,
      marginBottom: 3
    },
    cover: {
      padding: 20
    },
    container: {
      flexDirection: 'row',
      padding: 16,
    },
    column:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label:{
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      alignItems: 'center',
    },
    values: {
      fontSize: 13,
      alignItems: 'center',
    },
    appBackground:{
      backgroundColor: 'blue',
    },
    map:{
      width: '100%',
      height: undefined,
      aspectRatio: 0.7,
    },
    mapCard:{
      backgroundColor: 'lightblue',
      height:100,
      width:130,
      marginTop: 160,
      marginRight: 200,
      alignItems: 'center',
    },
    mapLogo: {
      width: 150,
      height: 150,
      marginTop: 480,
      justifyContent: 'center', 
      backgroundColor: 'white'
    },
    mapView:{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    }
  });
  