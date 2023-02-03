import './App.css'
import * as React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

function MainScreen({navigation}){
  return(
    <SafeAreaView>
      <Text>Welcome to Baram</Text> 
      <Button title="Refresh" />
      <Button title="Map" />
      <Button title="Settings" />
    </SafeAreaView>
  )
}


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
