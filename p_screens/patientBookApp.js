import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Platform, ScrollView, FlatList} from 'react-native';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function newTask() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [str, setString] = useState(' ');
  const [val, setVal] = useState('');
  const [positiveAns, setPositiveAns] = useState('');
  const [travelAns, setTravelAns] = useState('');
  const [symptomAns, setSymptomAns] = useState('');

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
    <ScrollView style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Request Appointment
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Date
        </Text>
        <View style = {{flexDirection: 'row'}}>
          <Button onPress={showDatepicker} title="Select date" />
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
          Describe your symptoms
        </Text>
        <TextInput style={styles.input}
                   placeholder = 'Enter symptoms'
                   autoCapitalize='sentences'
                   autoCorrect={false}>
        </TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Have you travelled internationally in the past 14 days? 
        </Text>
        <RNPickerSelect
             style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setTravelAns(value)}
              placeholder = {{label: 'Select...'}}
              items={[
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
              ]}  
          />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Have you tested positive for COVID-19? 
        </Text>
        <RNPickerSelect
             style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setPositiveAns(value)}
              placeholder = {{label: 'Select...'}}
              items={[
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
              ]}  
          />
      </View>
      <View style={styles.container}>
        <Text style={styles.promptText}>
          Do you display any of the following symptoms? 
        </Text>
        <FlatList
            data={[
              {key: '• Fever'},
              {key: '• Worsening chronic cough'},
              {key: '• Shortness of breath'},
              {key: '• Difficulty breathing'},
              {key: '• Sore throat'},
              {key: '• Difficulty swallowing'},
              {key: '• Decrease of loss of sense of taste or smell'},
              {key: '• Chills'},
              {key: '• Headaches'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        <RNPickerSelect
             style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setSymptomAns(value)}
              placeholder = {{label: 'Select...'}}
              items={[
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
              ]}  
          />
      </View>
      <TouchableOpacity style={styles.confirmationButton}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          NEXT
        </Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 20,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  background: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#FFF',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  promptText: {
    color: '#4E96AD',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 10,
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
    marginBottom: 40,
    justifyContent: 'center',
    alignSelf: 'center',
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
    width: 200,
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
    width: 200,
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

export default newTask;

