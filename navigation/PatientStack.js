import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PatientHomeScreen from '../p_screens/PatientHomeScreen.js';

const Drawer = createDrawerNavigator();

function PatientStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={PatientHomeScreen} />
    </Drawer.Navigator>
  );
}

export default PatientStack;
