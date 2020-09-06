import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Platform} from 'react-native';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function newTask() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [str, setString] = useState(' ');
  const [val, setVal] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setString(currentDate.toString());
    setVal(currentDate.toString().substring(0, str.indexOf('2020')+'2020'.length));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          NEW REPORT:
        </Text>
        <Text style={{fontSize:25, color: 'white', marginTop: -10}}>
          Tor Aamodt
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Purpose
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Enter purpose'
                   autoCapitalize='sentences'
                   autoCorrect={false}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Start Date
        </Text>
        <View style = {{flexDirection: 'row'}}>
          <Button onPress={showDatepicker} title="Show date picker" />
          <Text style= {{ paddingLeft:20, fontSize: 16}}>{val}</Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="default"
            onChange={onChange}
          />
        )}
      </View> 
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Duration of Treatment:
        </Text>
        <View style={styles.dualDropdownContainer}>
          <RNPickerSelect
             style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setVal(value)}
              placeholder = {{label: '#'}}
              items={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 },
              ]}  
          />
          <RNPickerSelect
             style={pickerSelectStyles2}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setVal(value)}
              placeholder = {{label: 'Choose Frequency'}}
              items={[
                { label: 'Minutes', value: 'Minutes' },
                { label: 'Hours', value: 'Hours' },
                { label: 'Days', value: 'Days' },
                { label: 'Weeks', value: 'Weeks' },
                { label: 'Months', value: 'Months' },
              ]}  
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
            Repeat Treatment Every:
        </Text>
        <View style={styles.dualDropdownContainer}>
          <RNPickerSelect
             style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setVal(value)}
              placeholder = {{label: '#'}}
              items={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 },
              ]}  
          />
          <RNPickerSelect
             style={pickerSelectStyles2}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setVal(value)}
              placeholder = {{label: 'Choose Frequency'}}
              items={[
                { label: 'Minutes', value: 'Minutes' },
                { label: 'Hours', value: 'Hours' },
                { label: 'Days', value: 'Days' },
                { label: 'Weeks', value: 'Weeks' },
                { label: 'Months', value: 'Months' },
              ]}  
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Receive Report Every:
        </Text>
        <View style={styles.dualDropdownContainer}>
          <RNPickerSelect
             style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setVal(value)}
              placeholder = {{label: '#'}}
              items={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 },
              ]}  
          />
          <RNPickerSelect
             style={pickerSelectStyles2}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setVal(value)}
              placeholder = {{label: 'Choose Frequency'}}
              items={[
                { label: 'Minutes', value: 'Minutes' },
                { label: 'Hours', value: 'Hours' },
                { label: 'Days', value: 'Days' },
                { label: 'Weeks', value: 'Weeks' },
                { label: 'Months', value: 'Months' },
              ]}  
          />
        </View>
      </View>
      <TouchableOpacity style={styles.confirmationButton}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          NEXT
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
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  dualDropdownContainer: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  promptText: {
    color: '#4E96AD',
    fontSize: 16,
    paddingBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4E96AD',
    width: 350,
    height: 40,
    textAlignVertical: 'top',
    textAlign: 'left',
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 2,
  },
  confirmationButton: {
    marginTop:10,
    justifyContent: 'center',
    backgroundColor: '#4C6663',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 160,
    height: 60,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 65,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#4E96AD',
    borderRadius: 10,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 65,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#4E96AD',
    borderRadius: 10,
    color: 'black',
  },
});

const pickerSelectStyles2 = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 255,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    marginLeft:30,
    marginRight:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#4E96AD',
    borderRadius: 10,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 255,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    marginLeft:30,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#4E96AD',
    borderRadius: 10,
    color: 'black',
  },
});

export default newTask;

