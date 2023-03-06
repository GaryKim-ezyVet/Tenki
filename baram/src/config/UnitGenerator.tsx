import React from 'react';

type SelectedUnitsContextType = {
    selectedUnits: string | null;
    setSelectedUnits: React.Dispatch<React.SetStateAction<string | null>>;
  };
  
export const SelectedUnitsContext = React.createContext<SelectedUnitsContextType>({
    selectedUnits: null,
    setSelectedUnits: () => {},
  });

export default SelectedUnitsContext;
