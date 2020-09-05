import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function healthcarePatients() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          PATIENTS
        </Text>
        </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}> 
          Name
        </Text>
        <TextInput style={styles.input} placeholder = ' '>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <TextInput style={styles.input} placeholder = ' '>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <TextInput style={styles.input} placeholder = ' '>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <TextInput style={styles.input} placeholder = ' '>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <TextInput style={styles.input} placeholder = ' '>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <TextInput style={styles.input} placeholder = ' '>
        </TextInput>
      </View>
      <View style={styles.promptText}>
      </View>
      <View style={styles.container}> 
        <TextInput style={styles.input} placeholder = ' '>
        </TextInput>
        </View>
      <TouchableOpacity style={styles.addBut}>
        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
          +
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
    marginBottom: 75,
  },
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
  promptText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'stretch',
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
  addBut: {
    marginTop: 10,
    marginRight: 35,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#4E96AD',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 60,
    height: 60,
  }
});



export default healthcarePatients;



