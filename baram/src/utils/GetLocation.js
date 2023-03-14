import * as Location from 'expo-location';

const defaultLocation = {
  id: 0,
  city: 'Auckland',
  lat: -35,
  lon: 175,
};

export default async function getLocation() {
  await Location.requestForegroundPermissionsAsync();
  const {coords} = await Location.getCurrentPositionAsync();
  return {latitude: coords.latitude, longitude: coords.longitude} ?? {latitude: defaultLocation.latitude, longitude:defaultLocation.longitude};
}
