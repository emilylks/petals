import React, { useContext } from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

function HealthHomeScreen({ navigation }) {

  return (
  <View style={{ flex: 1, backgroundColor: '#FFF'}}>
    <Icon.Button
      name="three-bars"
      color="#000"
      backgroundColor = "#fff"
      size = {30}
      style={{marginTop: 50, marginLeft: 20}} 
      onPress={() => navigation.openDrawer()}>
    </Icon.Button>
   
    <Text style={{fontFamily: 'Inter-SemiBold', fontSize: 28, color: '#000', marginLeft: 50, marginTop: 20}}>
      Dr. Joe Brown</Text>
    <Text style={{fontFamily: 'Inter-Regular', marginTop: -10, fontSize: 20, color: '#000',  marginLeft: 50}}> ID: 98765</Text>

    <Image source={require('../images/male-doctor.png')} style = {{marginTop: -80, marginLeft: 260, width: 100, height: 100, borderRadius: 100}}/>

    
      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: 50, fontSize: 20, color: '#000', textAlign: 'center'}}>
      Today's Appointments:</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360, alignSelf: 'center'}} />
      
      <TouchableOpacity style={styles.button}>
          <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, textAlign: 'center'}}>
           Task Name</Text>
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
  alignSelf: 'center',
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



export default HealthHomeScreen;
