import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function healthcareNewPatient({ navigation }) {
  var usr = firebase.auth().currentUser;
  const [email, setEmail] = useState('');
  const onChangeEmail = (textValue) => setEmail(textValue);
  const [password, setPassword] = useState('');
  const onChangePassword = (textValue) => setPassword(textValue);
  const [ID, setID] = useState('');
  const onChangeID = (textValue) => setID(textValue);
  const [bday, setBday] = useState('');
  const onChangeBday = (textValue) => setBday(textValue);
  const [name, setName] = useState('');
  const onChangeName = (textValue) => setName(textValue);
  const [address, setAddress] = useState('');
  const onChangeAddress = (textValue) => setAddress(textValue);
  const [phone, setPhone] = useState('');
  const onChangePhone = (textValue) => setPhone(textValue);
  const { registerPatient } = useContext(AuthContext);

  function setNewPatient() {
    // register the patient then go back
    registerPatient(address, usr.uid, ID, phone, name, bday, email, password);
    navigation.goBack();
  }

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          NEW PATIENT
        </Text>
      </View>
      <AntDesign name="arrowleft" color={'#fff'} size={28}
                 style={{marginTop: -65, marginLeft: -330}}
                 onPress={() => navigation.goBack()}
      />
      <View style={{height: 80}} />
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Name (Last, First):
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Last, First'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeName}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Email:
        </Text>
        <TextInput style={styles.input}
                    placeholder = 'Patient Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText = {onChangeEmail}
         />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Unique Patient ID:
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Patient ID'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeID}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Birthdate (DD/MM/YYYY):
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'DD/MM/YYYY'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeBday}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Phone Number:
        </Text>
        <TextInput style={styles.input}
                   placeholder = '(xxx)-xxx-xxxx'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangePhone}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Address:
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Address'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeAddress}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Temp Password:
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Enter a temporary password...'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangePassword}
        />
      </View>
      <View style={{height: 50}} />
      <TouchableOpacity style={styles.updateBut} onPress={() => setNewPatient()}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          ENTER
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4C6663',
    height: 120,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 25,
    paddingTop: 20
  },
  promptText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingBottom: 5,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    backgroundColor: '#E5E5E5',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#CDCDC6',
        width: 350,
        height: 35,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 14,
        // letterSpacing: 4,
  },
  reportBut: {
    justifyContent: 'center',
    marginRight: 20,
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    width: 150,
    height: 70,
  },
  newReportBut: {
    justifyContent: 'center',
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    width: 150,
    height: 70,
  },
  updateBut: {
    justifyContent: 'center',
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    width: 160,
    height: 60,
    marginTop: -20
  }
});



export default healthcareNewPatient;
