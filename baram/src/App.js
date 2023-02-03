import './App.css';
import React from 'react';
import {useKeepAwake} from 'expo-keep-awake';

function App() {
  return (
    <view className="App">
      <h1>Welcome to Baram</h1>
      <p>Today's weather is:
      <br />
      It is x degrees 
      <br />
      It will feel like x degrees
      <br />
      Wind: 
      <br />
      Humidity:
      </p>
    </view>
  );
}

export default App;
