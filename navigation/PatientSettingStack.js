import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import patientSettings from '../p_screens/patientSettings.js';
import patientUpdate from '../p_screens/patientUpdate.js';
import changePassword from '../changePassword.js';

const Stack = createStackNavigator();

function PatientSettingStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name='Settings' component={patientSettings} />
      <Stack.Screen name='UpdateProfile' component={patientUpdate} />
      <Stack.Screen name='ChangePassword' component={changePassword} />
    </Stack.Navigator>
  );
}

export default PatientSettingStack;