import React, { useContext } from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/Octicons';


function PatientHomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext);
  return (

    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
      <Icon.Button
        name="three-bars"
        color="#000"
        backgroundColor = "#fff"
        size = {30}
        style={{marginTop: 50, marginRight: 320}} 
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
     
        <TouchableOpacity style={{height: 50, width: 80, backgroundColor: '#4C6663',
                                  alignItems: 'center'}}
                          onPress={() => logout()}>
          <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
            SIGNOUT
          </Text>
        </TouchableOpacity>

      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: 100, fontSize: 28, color: '#000'}}>
        Welcome back,</Text>

      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: -10, fontSize: 28, color: '#4E96AD'}}>
        Patient Name</Text>

      <Image source={require('../images/daisy.png')} style = {{marginTop: 40}}/>

      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: 20, fontSize: 28, color: '#000'}}>
        Today's Task</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360 }} />


        <TouchableOpacity style={styles.button}>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, textAlign: 'center'}}>
                 O Task Name</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, textAlign: 'center'}}>
              Task Name</Text>
        </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C9D7F8',
    margin: 5,
    padding: 5,
    marginTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 15,
    height: 40
    }
});


export default PatientHomeScreen;
