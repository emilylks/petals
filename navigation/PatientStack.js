import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PatientHomeScreen from '../p_screens/PatientHomeScreen.js';

function PatientStack() {
  return (
    <PatientHomeScreen />
  );
}

export default PatientStack;
