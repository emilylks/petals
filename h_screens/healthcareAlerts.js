import React, { useContext} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

function healthcareAlerts({navigation}) {

  return (

    <View style={styles.background}>
      <View style={styles.header}>
        <Icon.Button
          name="three-bars"
          color="#fff"
          backgroundColor = "#4E96AD"
          size = {30}
          style={{marginTop: 20, paddingRight:80}} 
          onPress={() => navigation.openDrawer()}>
        </Icon.Button>
        <Text style={styles.headerText}>
          ALERTS
        </Text>
        </View>
      <View style={styles.container}> 
        <Text style={{marginTop: -40, fontSize: 25, textAlign: 'left', color: 'black', fontFamily: 'Inter-SemiBold', alignSelf: 'stretch'}}> 
          Name</Text>
        </View>

        <View style={{
           borderBottomColor: 'black',
           borderBottomWidth: 1,
           width: 400,
           marginTop: -20,
           marginBottom: 40
           }}>
             </View>


        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TaskReport')}>
        <View style={styles.input}>
        <Text style={styles.promptText}>Billy Jim</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TaskReport')}>
        <View style={styles.input}>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TaskReport')}>
        <View style={styles.input}>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TaskReport')}>
        <View style={styles.input}>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TaskReport')}>
        <View style={styles.input}>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TaskReport')}>
        <View style={styles.input}>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('TaskReport')}>
        <View style={styles.input}>
        </View>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline'
  },
  header: {
    backgroundColor: '#4E96AD',
    height: 120,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 75,
    flexDirection: 'row'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    fontFamily: 'Inter-Bold',
    paddingTop: 20,
    marginRight: 90
  },
  promptText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'left',
    paddingBottom: 5,
    fontFamily: 'Inter-Regular',
    paddingLeft: 20
  },
  img: { 
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    backgroundColor: '#E5E5E5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CDCDC6',
        width: 350,
        height: 40,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 14,
  },
});



export default healthcareAlerts;






