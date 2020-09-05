import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function patientSettings() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Settings
        </Text>
      </View>
      <TouchableOpacity style={styles.settingsButtons}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>
          Update Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButtons}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButtons}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>
          Dark Mode
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButtons}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>
          Sign Out
        </Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center', width: 350, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 12, color: 'black', fontStyle: 'italic', textAlign: 'center'}}>
          Note: if you have changed healthcare providers, please sign out and
          log in with the updated provider ID. This is for enhanced security.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 85,
    width: 415,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width:350,
    marginBottom: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 30,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  settingsButtons: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4E96AD',
    width: 350,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 2,
  }
});

export default patientSettings;

