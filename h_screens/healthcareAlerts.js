
import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function alerts() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          ALERTS
        </Text>
        </View>
      <View style={styles.container}> 
        <Text style={{fontSize: 20, textAlign: 'left', color: 'black', fontWeight: 'bold', alignSelf: 'stretch'}}> 
          Name
        </Text>
        </View>

        <View style={{
           borderBottomColor: 'black',
           borderBottomWidth: 1,
           width: 400,
           marginTop: -20,
           marginBottom: 40
           }}>
             </View>


        <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
          Billy Jim
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
      </View>
  );
}

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline'
  },
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
    fontSize: 22,
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
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CDCDC6',
        width: 350,
        height: 40,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 14,
  },
});



export default alerts;











