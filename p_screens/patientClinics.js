import React, { useContext } from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

function patientClinics({ navigation }) {
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <View style={{height: 50}} />
      <Text>Patient Clinics</Text>
    </View>
  );
}

export default patientClinics;