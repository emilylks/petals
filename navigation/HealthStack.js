import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HealthHomeScreen from '../h_screens/HealthHomeScreen.js';

function HealthStack() {
  return (
    <HealthHomeScreen />
  );
}

export default HealthStack;
