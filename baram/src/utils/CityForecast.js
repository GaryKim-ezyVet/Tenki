import React from 'react';
import GetForecast from './GetForecast';
import GetLocation from './GetLocation';

export default function CityForecast({cityList}) {
  return GetLocation().then((currentLocation) => {
    const forecastPromises = [ currentLocation, ...cityList].map((city) =>
      GetForecast(city.latitude, city.longitude)
    );
    return Promise.all(forecastPromises).then((forecastList) => {
      return forecastList;
    });
  });
}
