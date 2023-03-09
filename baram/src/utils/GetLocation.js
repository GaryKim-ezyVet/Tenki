import * as Location from 'expo-location';


const defaultLocation = {
    id:0,
    city: 'Auckland',
    lat: -35,
    lon: 175,
}
const currentLocation = null;

/* 
    Style Comment: 
    Functions, like variables, are usually camelCase (first letter lowercase)
    React components should be PascalCase (first letter uppercase)
*/ 
export default async function getLocation() {
    await Location.requestForegroundPermissionsAsync();
    let currentLocation = await Location.getCurrentPositionAsync();
    return currentLocation ?? defaultLocation;
}
