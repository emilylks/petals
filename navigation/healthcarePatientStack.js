import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import healthcarePatients from '../h_screens/healthcarePatients.js';
import healthcareNewPatient from '../h_screens/healthcareNewPatient.js';
import healthcareViewPatient from '../h_screens/healthcareViewPatient.js';
import healthcareNewTask from '../h_screens/healthcareNewTask.js';
import healthcareNewTaskpt2 from '../h_screens/healthcareNewTaskpt2.js';

const Stack = createStackNavigator();

function healthcarePatientStack() {
  return (
    <Stack.Navigator intialRouteName = 'Patients' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Patients' component={healthcarePatients}  />
        <Stack.Screen name='New Patient' component={healthcareNewPatient} />
        <Stack.Screen name='View Patient' component={healthcareViewPatient} />
        <Stack.Screen name='New Task pt1' component={healthcareNewTask} />
        <Stack.Screen name='New Task pt2' component={healthcareNewTaskpt2} />
    </Stack.Navigator>
  );
}

export default healthcarePatientStack;
