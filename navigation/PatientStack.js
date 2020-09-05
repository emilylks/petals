import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PatientHomeScreen from '../p_screens/PatientHomeScreen.js';
import patientProgress from '../p_screens/patientProgress.js';
import patientBookApp from '../p_screens/patientBookApp.js';
import patientClinics from '../p_screens/patientClinics.js';
import patientSettings from '../p_screens/patientSettings.js';

const Drawer = createDrawerNavigator();

function PatientStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={PatientHomeScreen} />
      <Drawer.Screen name="Progress" component={patientProgress} />
      <Drawer.Screen name="Book an Appointment" component={patientBookApp} />
      <Drawer.Screen name="Find a Clinic" component={patientClinics} />
      <Drawer.Screen name="Settings" component={patientSettings} />
    </Drawer.Navigator>
  );
}

export default PatientStack;
