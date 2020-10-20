import React, { useEffect, useState } from 'react';
import {View, Text, Button } from 'react-native';
import * as Brightness from 'expo-brightness';


export default function App() {
 
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(.5);
      }
    })();
  })
    
  
  
  function danceMode() {
    for(let i = 0; i < 1000; i++) {
      Brightness.setBrightnessAsync(Math.random());
    }
  }

  return (
    <View>
      <View
      style={{
        justifyContent: 'center',
      }}>
        <Text>Welcome to the Dance Party!</Text>
      </View>
      <View 
      style= {{
        display: 'inline',
      }}>
        <Button title="Dance" onPress={()=>danceMode()} />

      </View>
    </View>
    
    
  );
  
}
