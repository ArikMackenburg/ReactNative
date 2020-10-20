import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Battery from './components/battery';
import Brightness from './components/brightness'
import Map from './components/map'
import Location from './components/location'

export default function App() {
  return (

    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Battery />
          <Brightness />
          <Location />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
