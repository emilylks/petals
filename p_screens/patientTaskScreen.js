
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function patientTask() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Task
        </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    height: 85,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

export default patientTask;


