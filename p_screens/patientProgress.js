import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';

function patientProgress({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
        <Icon.Button
          name="three-bars"
          color="#000"
          backgroundColor = "#fff"
          size = {30}
          style={{marginTop: 50, marginRight: 320}}
          onPress={() => navigation.openDrawer()}>
      </Icon.Button>

        <Text style={styles.headerText}>
          Dan's Progress
        </Text>
  
        <Calendar
          // Initially visible month. Default = Date()
          current={Date()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2020-09-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2024-05-30'}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          style={{
            borderWidth: 0.5,
            borderColor: '#C9D7F8',
            shadowColor: "#000",
            borderRadius:10,
            marginBottom: 10,
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            selectedDayBackgroundColor: '#C9D7F8',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#DE8EC8',
            dayTextColor: '#2D4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'blue',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#4E96AD',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 14,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 16,
          }}
          >
        </Calendar>
      <View>
        <Text style={{fontFamily: 'Inter-Medium', textAlign: 'center', marginTop: 20, fontSize: 28, color: '#000'}}>
          Tommorow's Tasks</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360 }} />

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Task')} >
            <MaterialCommunityIcons name= "circle-outline" size = {25} color = 'black' style= {{paddingRight: 10, paddingTop: 0}}/>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, paddingLeft: 10}}>
                 Exercise # 2 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Task')} >
            <MaterialCommunityIcons name= "circle-outline" size = {25} color = 'black' style= {{paddingRight: 10, paddingTop: 0}}/>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, paddingLeft: 10}}>
                Exercise # 3</Text>
          </TouchableOpacity>
      </View>
    </View>
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
    marginBottom: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width:350,
    height:350,
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 2,
    marginBottom: 20,
  },
  headerText: {
    paddingTop: 20,
    color: 'black',
    fontSize: 30,
    fontFamily: 'Inter-SemiBold'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#C9D7F8',
    margin: 5,
    padding: 5,
    marginTop: 10,
    paddingRight: 30,
    borderRadius: 15,
    height: 40,
    flexDirection: 'row'
  },
});

export default patientProgress;
