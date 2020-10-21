import React, { useEffect, useState } from 'react';
import {View, Text, Button } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function BrightnessDemo() {
  const [permission, setPermission] = useState(false);
 
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        setPermission(true)
      }
    })();
  }, [])
    
  
  
  async function danceMode() {
    if (!permission) {
      console.log('Cannot dance mode')
      return;
    }

    for(let i = 0; i < 1000; i++) {
      await Brightness.setBrightnessAsync(Math.random());
    }

    // let i = 0;
    // let canSet = true;
    // const id = setInterval(async () => {

    //   if (canSet) {
    //     canSet = false;
    //     await Brightness.setBrightnessAsync(Math.random());
    //     canSet = true;
    //   }
    //   else {
    //     console.log('Skipping because brightness is still being set')
    //   }

    //   // We've had enough, so stop the interval
    //   if (i++ > 1000) {
    //     clearInterval(id);
    //   }
    // }, 5)
  }

  return (
    <View>
      <View
      style={{
        justifyContent: 'center',
      }}>
        <Text>Welcome to the Dance Party!</Text>
      </View>
      <View>
        <Button title="Dance" onPress={()=>danceMode()} />

      </View>
    </View>
    
    
  );
  
}
