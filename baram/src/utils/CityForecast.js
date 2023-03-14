import React from 'react';
import getForecast from './GetForecast';
import getLocation from './GetLocation';

export default function cityForecast({cityList}) {
  return getLocation().then((currentLocation) => {
    const forecastPromises = [ currentLocation, ...cityList].map((city) =>
      getForecast(city.latitude, city.longitude)
    );
    return Promise.all(forecastPromises).then((forecastList) => {
      return forecastList;
    });
  });
}
