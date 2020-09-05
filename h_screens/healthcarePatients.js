
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
        </View>

        <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
          BILLY JIM
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  promptText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
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
  },
  addBut: {
    marginTop: 10,
    marginRight: 35,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#74C9E4',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 60,
    height: 60,
  }
});



export default healthcarePatients;



