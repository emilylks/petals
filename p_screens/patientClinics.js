import React, { useContext, useState } from 'react';
import {View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;

function patientClinics({ navigation }) {
  return (
    <View style={styles.background}>
      <Icon.Button
        name="three-bars"
        color="#000"
        backgroundColor = "#fff"
        size = {30}
        style={{marginTop: 30, marginRight: 320}}
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
      <Image source={require('../images/Burnaby-Clinics.png')} style = {{width: width, height: height / 2.5}}/>
      <View style={styles.mainContent}>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Clinics Near Me...</Text>
        </View>
        <Entypo name="dots-three-horizontal" color="black" size={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  searchText: {
    fontStyle: "italic",
    //fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#727070',
  },
  searchBar: {
    marginTop: -20,
    width: width - 80,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C4C4C4',
    borderWidth: 1
  },
  mainContent: {
    height: height * 0.7,
    width: width,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    borderRadius: 30,
  }
});

export default patientClinics;
