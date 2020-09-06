import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
          Smith, Dan 
        </Text>
        </View>
       
        <View style={{marginTop: -55, justifyContent: 'center'}}> 
        <Text style={{fontFamily: 'Inter-Bold', fontSize: 20, padding: 20}}>
          - Dan reported high levels of pain on Friday, September 4th
        </Text>

        <View style={styles.borderBox}>
        <View style={styles.multipleChoice}>
          <Text style={styles.inputDesc}>Pain Levels</Text>
        <FontAwesome name="circle" color="#4E96AD" size={20} style={{paddingLeft: 10}} />
        <FontAwesome name="circle" color="#4E96AD" size={20} style={{paddingLeft: 10}} />
        <FontAwesome name="circle" color="#4E96AD" size={20} style={{paddingLeft: 10}} />
        <FontAwesome name="circle" color="#4E96AD" size={20} style={{paddingLeft: 10}} />
        <FontAwesome name="circle" color="#4E96AD" size={20} style={{paddingLeft: 10}} />
        </View>
      </View>
        <Text style={{fontFamily: 'Inter-Regular', fontSize: 20, padding: 20, paddingTop: 30}}> 
          - Dan has been competing daily exercises for 3 weeks </Text>
        <Image source={require('../images/Calendar.png')} style={{ alignSelf: 'center'}}></Image>
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
    fontSize: 25,
    fontFamily: 'Inter-Regular',
  },
  boldHeaderText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Inter-SemiBold',
    marginTop: -60
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  borderBox: {
    marginTop: 10,
    height: 80,
    width: 400 ,
    borderColor: '#4E96AD',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  multipleChoice: {
    marginTop: -5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputDesc: {
    marginRight: 50,
    color: '#000',
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    width: 130,
  }
});

export default taskReport;
