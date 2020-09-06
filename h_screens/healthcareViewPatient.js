import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';

function healthcareViewPatient({ route, navigation }) {
  var usr = firebase.auth().currentUser;
  const { userType, setUserType } = useContext(AuthContext);
  const { patientName } = route.params;
  const { ID } = route.params;
  const { dob } = route.params;
  const { phone } = route.params;
  const { address } = route.params;
  const [canEdit, changeCanEdit] = useState(false);
  const [phoneNum, changePhoneNum] = useState(phone);
  const [name, changeName] = useState(patientName);
  const [addr, changeAddr] = useState(address);

  useEffect(() => {
    const subscriber = () => {
      setUserType("provider");
    }
    return () => subscriber();
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {name}
        </Text>
      </View>
      <AntDesign name="arrowleft" color={'#fff'} size={28}
                 style={{marginTop: -60, marginLeft: -330}}
                 onPress={() => navigation.goBack()}
      />
      <View style={{
        marginTop: 60,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <TouchableOpacity style={styles.reportBut}>
          <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
            REPORTS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newReportBut}>
          <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
            NEW REPORT
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Name:
        </Text>
        <TextInput style={styles.input}
                   placeholder = {name}
                   editable = {canEdit}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          ID:
        </Text>
        <TextInput style={styles.input}
                   placeholder = {ID}
                   editable = {canEdit} >
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Birthdate:
        </Text>
        <TextInput style={styles.input}
                  placeholder = {dob}
                  editable = {canEdit}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Phone Number:
        </Text>
        <TextInput style={styles.input}
                   placeholder = {phone}
                   editable = {canEdit}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Address:
        </Text>
        <TextInput style={styles.input}
                   placeholder = {address}
                   editable = {canEdit}>
        </TextInput>
      </View>
      <View style={styles.promptText}>
      </View>
      <TouchableOpacity style={styles.updateBut} onPress={() => navigation.goBack()}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          UPDATE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4C6663',
    height: 100,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 25,
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
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    width: 160,
    height: 60,
  }
});



export default healthcareViewPatient;
