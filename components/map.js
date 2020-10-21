import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function App(props) {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
      region={props.region}
      showsUserLocation={true}
      followUserLocation={true}
      zoomEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width * .8,
    height: Dimensions.get('window').height / 2,
  },
});