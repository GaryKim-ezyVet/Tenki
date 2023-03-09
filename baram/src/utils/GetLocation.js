import * as Location from 'expo-location';


const defaultLocation = {
    id:0,
    city: 'Auckland',
    lat: -35,
    lon: 175,
}
const currentLocation = null;

export default async function GetLocation() {
    await Location.requestForegroundPermissionsAsync();
    let currentLocation = await Location.getCurrentPositionAsync();
    console.log(currentLocation);
    return currentLocation ?? defaultLocation;
}
