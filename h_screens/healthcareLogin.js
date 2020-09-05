import React, { useState, useContext} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

function healthcareLogin({navigation}) {
  const [email, setEmail] = useState('');
  const onChangeEmail = (textValue) => setEmail(textValue);
  const [password, setPassword] = useState('');
  const onChangePassword = (textValue) => setPassword(textValue);
  const [name, setName] = useState('');
  const onChangeName = (textValue) => setName(textValue);
  const [org, setOrg] = useState('');
  const onChangeOrg = (textValue) => setOrg(textValue);
  const { registerProvider, loginProvider } = useContext(AuthContext);

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          PROVIDER LOGIN
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          ORGANIZATION:
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Enter your organization name'
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText = {onChangeOrg}>
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
      <View style={{height: 20}} />
      <TouchableOpacity style={styles.confirmationButton}
                        onPress={() => registerProvider(org, name, email, password)}>
        <Text style={{fontSize: 13, textAlign: 'center', color: 'white'}}>
          CREATE ACCOUNT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmationButton}
                        onPress={() => loginProvider(email, password)}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          SIGN IN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4E96AD',
    height: 100,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 75,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
  promptText: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 15,
    paddingBottom: 5,
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
    backgroundColor: '#A2E1E2',
    opacity: 0.7,
    borderRadius: 30,
    //borderWidth: 1,
    //borderColor: '#CDCDC6',
    width: 310,
    height: 45,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
    // letterSpacing: 4,
  },
  confirmationButton: {
    marginTop: 8,
    justifyContent: 'center',
    backgroundColor: '#4C6663',
    borderRadius: 30,
    //borderWidth: 1,
    //borderColor: '#CDCDC6',
    width: 160,
    height: 60,
  }
});

export default healthcareLogin;
