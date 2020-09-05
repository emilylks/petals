import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PatientHomeScreen from '../p_screens/PatientHomeScreen.js';
import patientTaskScreen from '../p_screens/patientTaskScreen.js';

const Stack = createStackNavigator();

function PatientHomeStack() {
  return (
    <Stack.Navigator intialRouteName = 'Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={PatientHomeScreen}  />
        <Stack.Screen name='Task' component={patientTaskScreen} />
    </Stack.Navigator>
  );
}

export default PatientHomeStack;
