import React, { useContext } from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

function HealthHomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>Health Home Screen</Text>
        <TouchableOpacity style={{height: 50, width: 80, backgroundColor: '#4C6663',
                                  alignItems: 'center'}}
                          onPress={() => logout()}>
          <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
            SIGNOUT
          </Text>
        </TouchableOpacity>
    </View>
  );
}

export default HealthHomeScreen;
