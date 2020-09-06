import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import healthcarePatients from '../h_screens/healthcarePatients.js';
import healthcareNewPatient from '../h_screens/healthcareNewPatient.js';
import healthcareViewPatient from '../h_screens/healthcareViewPatient.js';

const Stack = createStackNavigator();

function healthcarePatientStack() {
  return (
    <Stack.Navigator intialRouteName = 'Patients' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Patients' component={healthcarePatients}  />
        <Stack.Screen name='New Patient' component={healthcareNewPatient} />
        <Stack.Screen name='View Patient' component={healthcareViewPatient} />
    </Stack.Navigator>
  );
}

export default healthcarePatientStack;
