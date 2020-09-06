import React, { useContext } from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function PatientHomeScreen({ navigation }) {

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

      <Text style={{fontFamily: 'Inter-SemiBold', fontSize: 28, color: '#000'}}>
        Welcome back,</Text>

      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: -10, fontSize: 28, color: '#4E96AD'}}>
        Dan Smith</Text>

      <Image source={require('../images/1jpg.jpg')} style = {{width: 200, height: 200, marginTop: 40, marginBottom: 30}}/>

      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: 20, fontSize: 28, color: '#000'}}>
        Today's Tasks</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360 }} />


        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Task')} >
              <MaterialCommunityIcons name= "circle-outline" size = {25} color = 'black' style= {{paddingRight: 10, paddingTop: 0}}/>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, paddingLeft: 10}}>
                 Task Name</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Task')} >
              <MaterialCommunityIcons name= "circle-outline" size = {25} color = 'black' style= {{paddingRight: 10, paddingTop: 0}}/>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, paddingLeft: 10}}>
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
    borderRadius: 15,
    height: 40,
    flexDirection: 'row'
    }
});


export default PatientHomeScreen;
