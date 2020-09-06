import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import healthcareSettings from '../h_screens/healthcareSettings.js';
import healthcareUpdate from '../h_screens/healthcareUpdate.js';
import changePassword from '../changePassword.js';

const Stack = createStackNavigator();

function HealthcareSettingStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name='Settings' component={healthcareSettings} />
      <Stack.Screen name='UpdateProfile' component={healthcareUpdate} />
      <Stack.Screen name='ChangePassword' component={changePassword} />
    </Stack.Navigator>
  );
}

export default HealthcareSettingStack;