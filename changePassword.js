import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function changePassword() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          CHANGE PASSWORD
        </Text>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          CURRENT PASSWORD:
        </Text>
        <TextInput style={styles.input} placeholder = 'Enter current password'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          NEW PASSWORD:
        </Text>
        <TextInput style={styles.input} placeholder = 'Enter new password'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          CONFIRM NEW PASSWORD:
        </Text>
        <TextInput style={styles.input} placeholder = 'Confirm new password'>
        </TextInput>
      </View>
      <TouchableOpacity style={styles.confirmationButton}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          CONFIRM
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4E96AD',
    height: 85,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
  promptText: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 25,
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
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 310,
    height: 45,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
    // letterSpacing: 4,
  },
  confirmationButton: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#4C6663',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 160,
    height: 60,
  }
});

export default changePassword;

