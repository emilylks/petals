import React, { useState, useContext} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

function patientLogin({navigation}) {
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
  const { registerPatient, loginPatient } = useContext(AuthContext);

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          PATIENT LOGIN
        </Text>
      </View>
      <View style = {{ marginTop: -20,justifyContent: 'center', alignItems: 'center'}} >
      <View style={styles.container}>
        <Text style={styles.promptText}>
          ID:
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Enter your provider issued ID'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeID}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          NAME (LAST, FIRST):
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Last, first name'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeName}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          DATE OF BIRTH (DD/MM/YYYY):
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'DD/MM/YYYY'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeBday}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          EMAIL:
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Enter your email address'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeEmail}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          PASSWORD:
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Enter your password'
                   autoCapitalize='none'
                   autoCorrect={false}
                   secureTextEntry={true}
                   onChangeText = {onChangePassword}>
        </TextInput>
      </View>
      <View style={{marginTop: -15}}>
      <TouchableOpacity style={styles.confirmationButton}
                        onPress={() => loginPatient(email, password)}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          SIGN IN
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4E96AD',
    height: 120,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    paddingTop: 20,
    fontFamily: 'Inter-Bold'
  },
  promptText: {
    color: 'black',
    fontSize: 15,
    paddingBottom: 5,
    fontFamily: 'Inter-Medium'
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
    backgroundColor: '#EBF8F9',
    opacity: 0.7,
    borderRadius: 30,
    //borderWidth: 1,
    //borderColor: '#CDCDC6',
    width: 310,
    height: 45,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
    fontFamily: 'Inter-Regular'
    // letterSpacing: 4,
  },
  confirmationButton: {
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#4C6663',
    borderRadius: 30,
    width: 160,
    height: 60,
  }
});

export default patientLogin;
