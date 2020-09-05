import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HealthHomeScreen from '../h_screens/HealthHomeScreen.js';
import healthcareAlerts from '../h_screens/healthcareAlerts.js';
import healthcarePatientStack from './healthcarePatientStack.js';
import healthcareCalendar from '../h_screens/healthcareCalendar.js';
import healthcareSettings from '../h_screens/healthcareSettings.js';

const Drawer = createDrawerNavigator();

function HealthStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HealthHomeScreen} />
      <Drawer.Screen name="Alerts" component={healthcareAlerts} />
      <Drawer.Screen name="Patients" component={healthcarePatientStack} />
      <Drawer.Screen name="Calendar" component={healthcareCalendar} />
      <Drawer.Screen name="Settings" component={healthcareSettings} />
    </Drawer.Navigator>
  );
}

export default HealthStack;
