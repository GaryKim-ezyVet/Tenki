import React, {useState} from 'react';
import MainNavigation from './src/routes/Navigation';
import SelectedUnitsContext from './src/config/UnitGenerator';

export default function App(): JSX.Element {  
  return(
    <MainNavigation />
  );

}