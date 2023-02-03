import * as React from 'react';
import MainScreen from './Components/Features/MainScreen.js';
import Location from './Components/Features/Location.js';

function App(){
  Location();
  return(
    <MainScreen />
  );
}

export default App;