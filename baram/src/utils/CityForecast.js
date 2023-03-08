import React from 'react';
import { cityList } from '../../assets/cityList';
import GetForecast from './GetForecast';

export default function CityForecast(cityList) {
  const forecastList = [];
  for (const city of cityList) {
    const forecast = GetForecast(city.lat, city.lon);
    forecastList.push(forecast);

  }
};

