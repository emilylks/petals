import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import PatientHomeScreen from '../p_screens/PatientHomeScreen.js';
=======
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PatientHomeStack from './PatientHomeStack.js';
>>>>>>> 2c89a1fe2c128434755b7dc13ee77a9733cab228
import patientProgress from '../p_screens/patientProgress.js';
import patientBookApp from '../p_screens/patientBookApp.js';
import patientClinics from '../p_screens/patientClinics.js';
import patientSettings from '../p_screens/patientSettings.js';
import patientUpdate from '../p_screens/patientUpdate.js';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();

function PatientStack() {
  return (
    <View style={{flex:1}}> 
    <Drawer.Navigator initialRouteName="Home">
<<<<<<< HEAD
      
      <Drawer.Screen name="Profile" component={patientUpdate} options = {{
                   drawerLabel: config => (<View style={{ flexDirection: 'column'}} > 
                                            <Text style={{ fontSize: 20, marginTop: 30, marginLeft: -20}}>Patient Name</Text>
                                            <Text style={{ fontSize: 15, marginLeft: -20}}>patient id </Text>
                                          </View>),
                   drawerIcon: config => ( <Image source={require('../images/daisy.png')} style={{ marginTop: 40, width: 50, height: 50, borderRadius: 20}}/> ),
                   
                  }}/>
      <Drawer.Screen name="Home" component={PatientHomeScreen} options = {{
                   drawerIcon: config => ( <MaterialCommunityIcons name="home" color="black" size={26} /> ),
                  }}/>
      <Drawer.Screen name="Progress" component={patientProgress} options = {{
                   drawerIcon: config => ( <SimpleLineIcons name="graph" color="black" size={26} /> ),
                  }}/>
      <Drawer.Screen name="Book an Appointment" component={patientBookApp} options = {{
                    drawerIcon: config => ( <MaterialCommunityIcons name="stethoscope" color="black" size={26} /> ),
                  }}/>
      <Drawer.Screen name="Find a Clinic" component={patientClinics} options = {{
                    drawerIcon: config => ( <MaterialCommunityIcons name="hospital-box" color="black" size={26} /> ),
                  }}/>
      <Drawer.Screen name="Settings" component={patientSettings} options = {{
                   drawerIcon: config => ( <SimpleLineIcons name="settings" color="black" size={26} /> ),
                  }}/>
=======
      <Drawer.Screen name="Home" component={PatientHomeStack} />
      <Drawer.Screen name="Progress" component={patientProgress} />
      <Drawer.Screen name="Book an Appointment" component={patientBookApp} />
      <Drawer.Screen name="Find a Clinic" component={patientClinics} />
      <Drawer.Screen name="Settings" component={patientSettings} />
>>>>>>> 2c89a1fe2c128434755b7dc13ee77a9733cab228
    </Drawer.Navigator>

    </View>
  );
}

export default PatientStack;
