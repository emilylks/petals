import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function patientUpdate({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" color={'#FFF'} size={28}
                  style={{paddingRight: 30, paddingTop: 20}}
                  onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>
          UPDATE PROFILE
        </Text>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          NAME (LAST, FIRST):
        </Text>
        <TextInput style={styles.input} placeholder = 'Last, first name'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          EMAIL:
        </Text>
        <TextInput style={styles.input} placeholder = 'Enter your email address'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          UPDATE PHONE NUMBER:
        </Text>
        <TextInput style={styles.input} placeholder = 'Enter your phone number'>
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
    height: 120,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
    flexDirection: 'row'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Inter-SemiBold',
    paddingTop: 20,
    marginRight: 40
  },
  promptText: {
    color: 'black',
    fontFamily: 'Inter-Medium',
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
    backgroundColor: '#EBF8F9',
    borderRadius: 30,
    width: 310,
    height: 45,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    // letterSpacing: 4,
  },
  confirmationButton: {
    marginTop: 35,
    justifyContent: 'center',
    backgroundColor: '#4C6663',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 160,
    height: 60,
  }
});

export default patientUpdate;

