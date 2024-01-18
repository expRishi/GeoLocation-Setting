import React from 'react';
import { View, Dimensions } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'

const Marker = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{  position: "absolute", top: '50%', left: '50%', marginLeft: -30, marginTop: -30}}>
      <Ionicon name="location-sharp" size={60} color="red" />
    </View>
  );
};

export default Marker;