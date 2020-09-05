import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LandingScreen from '../LandingScreen.js';
import healthCareLogin from '../h_screens/healthcareLogin.js';
import patientLogin from '../p_screens/patientLogin.js';

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator intialRouteName = 'Landing' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Landing' component={LandingScreen}  />
        <Stack.Screen name='healthLogin' component={healthCareLogin} />
        <Stack.Screen name='patientLogin' component={patientLogin} />
    </Stack.Navigator>
  );
}

export default LoginStack;
