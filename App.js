import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import React, { useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Marker from './screens/Marker';
import Map from './screens/Map';
import BuysAdd from './screens/BuysAdd';

const Stack = createStackNavigator();

const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BuysAdd" component={BuysAdd} options={{headerShown:false}} />
        <Stack.Screen name="Map" component={Map} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});