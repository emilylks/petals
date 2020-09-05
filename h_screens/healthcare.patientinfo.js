import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          BILLY JIM
        </Text>
        </View>
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
      <View style={styles.container}> 
        <Text style={styles.promptText}> 
          Name:
        </Text>
        <TextInput style={styles.input} placeholder = 'Jim, Billy'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          Birthdate:
        </Text>
        <TextInput style={styles.input} placeholder = '01/21/1972'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          Phone Number:
        </Text>
        <TextInput style={styles.input} placeholder = '(604)-283-1389'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          Address:
        </Text>
        <TextInput style={styles.input} placeholder = '222 Royal Birch View, Vancouver BC Canada V1N 9A2'>
        </TextInput>
      </View>
      <View style={styles.promptText}>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}> 
          Medical History:
        </Text>
        <TextInput style={styles.input} placeholder = 'History of angina, takes nitroglycerin'>
        </TextInput>
        </View>
      <TouchableOpacity style={styles.updateBut}>
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
  reportBut: {
    marginTop: -50,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 160,
    height: 60,
  },
  newReportBut: {
    marginTop: -50,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 160,
    height: 60,
  },
  updateBut: {
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 160,
    height: 60,
  }
});

export default App;
