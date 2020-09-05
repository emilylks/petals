/*landing screen */

import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;

function LandingScreen({navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>

      <View style={styles.rectangle}>
      <Text style={{fontFamily: 'Inter-SemiBold', fontSize: 50, marginTop: -55, color: '#4C6663'}}>
        petals</Text>

        <Text style={{fontFamily: 'Inter-Regular', fontSize: 25, paddingTop: 50, textAlign:'center', color: '#000'}}>
          I am a...</Text>

        <Image source={require('./images/doctor.png')} style = {{marginTop: 40}}/>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('healthLogin')}>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, textAlign: 'center'}}>
                  healthcare provider/organization</Text>
        </TouchableOpacity>

        <Image source={require('./images/patient.png')} style = {{marginTop: 30}}/>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('patientLogin')}>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, textAlign: 'center'}}>
                  patient</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    marginTop: 120,
    height: 571,
    width: 355,
    borderColor: '#80CFA9',
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center'
  },
  button1: {
    backgroundColor: '#C9D7F8',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    marginTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 15,
    height: 40
    },
  button2: {
    backgroundColor: '#C9D7F8',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    marginTop: 10,
    paddingRight: 130,
    paddingLeft: 130,
    borderRadius: 15,
    height: 40
    }
});

export default LandingScreen;
