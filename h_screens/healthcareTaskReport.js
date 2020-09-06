import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function taskReport({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
      <AntDesign name="arrowleft" color={'#fff'} size={28}
                 style={{marginTop: 60, marginLeft: -330}}
                 onPress={() => navigation.goBack()}
      />
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
    height: 120,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 75,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Inter-SemiBold',
  },
  boldHeaderText: {
    color: 'white',
    fontSize: 30,
    marginTop: -60
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

export default taskReport;
