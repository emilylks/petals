import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import healthcareAlerts from '../h_screens/healthcareAlerts.js';
import healthcareTaskReport from '../h_screens/healthcareTaskReport.js';

const Stack = createStackNavigator();

function AlertStack() {
  return (
    <Stack.Navigator initialRouteName="Alerts">
      <Stack.Screen name='Alerts' component={healthcareAlerts} />
      <Stack.Screen name='TaskReport' component={healthcareTaskReport} />
    </Stack.Navigator>
  );
}

export default AlertStack;

