import React, {useState} from 'react';
import MainNavigation from './src/routes/Navigation';
import SelectedUnitsContext from './src/config/UnitGenerator';

export default function App(): JSX.Element {  
const [selectedUnits, setSelectedUnits] = useState<string | null>('metric');
  return(
    <SelectedUnitsContext.Provider value={{selectedUnits,setSelectedUnits}}> 
    <MainNavigation />
    </SelectedUnitsContext.Provider>
  );

}