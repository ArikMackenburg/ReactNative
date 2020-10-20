import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Battery from './components/battery';
import Brightness from './components/brightness'
import Map from './components/map'
import Location from './components/location'


export default function App() {
  const image = 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  return (

    <ImageBackground source={require('./assets/background.jpeg')} style={styles.container}>
      <SafeAreaView>
        <View>
          <Battery />
          <Brightness />
          <Location />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
