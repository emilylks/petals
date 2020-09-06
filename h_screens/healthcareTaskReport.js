

import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function taskReport() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.boldHeaderText}>
          TASK REPORT: 
        </Text>
        <Text style={styles.headerText}>
          Billy Jim 
        </Text>
        </View>
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
  headerText: {
    color: 'white',
    fontSize: 30,
  },
  boldHeaderText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

export default taskReport;
