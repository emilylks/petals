import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import HealthHomeScreen from '../h_screens/HealthHomeScreen.js';
import AlertStack from './AlertStack.js';
import healthcarePatientStack from './healthcarePatientStack.js';
import healthcareCalendar from '../h_screens/healthcareCalendar.js';
import HealthcareSettingStack from './HealthcareSettingStack.js';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

function HealthStack() {
  return (
    <View style={{flex:1}}>
    <Drawer.Navigator initialRouteName="Home">

      <Drawer.Screen name="Profile" component={HealthHomeScreen} options = {{
                   drawerLabel: config => (<View style={{ flexDirection: 'column'}} >
                                            <Text style={{ fontSize: 20, marginTop: 30, marginLeft: -20}}>doctor Name</Text>
                                            <Text style={{ fontSize: 15, marginLeft: -20}}>doctor id </Text>
                                          </View>),
                   drawerIcon: config => ( <Image source={require('../images/doctor.png')} style={{ marginTop: 40, width: 50, height: 50}}/> ),

                  }}/>
      <Drawer.Screen name="Home" component={HealthHomeScreen} options = {{
                   drawerIcon: config => ( <MaterialCommunityIcons name="home" color="black" size={26} /> ),
                  }}/>
      <Drawer.Screen name="Alerts" component={healthcareAlerts} options = {{
                   drawerIcon: config => ( <MaterialCommunityIcons name="comment-alert" color="black" size={26} /> ),
                  }}/>
                <Drawer.Screen name="Patients" component={healthcarePatientStack} options = {{
                    drawerIcon: config => ( <MaterialCommunityIcons name="contacts" color="black" size={26} /> ),
                  }}/>
      <Drawer.Screen name="Calendar" component={healthcareCalendar} options = {{
                    drawerIcon: config => ( <MaterialCommunityIcons name="calendar" color="black" size={26} /> ),
                  }}/>
      <Drawer.Screen name="Settings" component={HealthcareSettingStack} options = {{
                   drawerIcon: config => ( <SimpleLineIcons name="settings" color="black" size={26} /> ),
                  }}/>
    </Drawer.Navigator>

    </View>
  );
}

export default HealthStack;
