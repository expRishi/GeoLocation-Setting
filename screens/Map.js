import React, { useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Marker from './Marker';



const Map =(props) => {
  // console.log(props);
  const mapRef = useRef(null);
  const [location, setLocation] = React.useState({
    latitude: props.route.params.lat,
    longitude: props.route.params.lng,
    latitudeDelta: 0.000600,
    longitudeDelta: 0.000600,
  });

  const handleConfirm = async () => {
    const camera = await mapRef.current.getCamera();
    console.log(camera);
    if(camera){
      console.log(camera.center);
    setLocation({
      latitude: camera.center.latitude,
      longitude: camera.center.longitude,
      latitudeDelta: location.latitudeDelta,
      longitudeDelta: location.longitudeDelta,
    });
    console.log('Saved location:', camera.center.latitude, camera.center.longitude);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={location}
        mapType="standard"
      />
      <Marker />
      <Button title="Confirm Location" onPress={handleConfirm} />
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    //position: 'absolute',
    //top: windowHeight/2,
    //left: windowWidth,
  },
});