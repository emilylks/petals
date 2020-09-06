import React from 'react';
import { TouchableOpacity, TextInput, Image, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function patientTask({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
      <AntDesign name="arrowleft" color={'#000'} size={28}
                 style={{marginTop: 30, marginLeft: -330}}
                 onPress={() => navigation.goBack()}
      />

      <Text style={{fontFamily: 'Inter-SemiBold', fontSize: 28, color: '#000'}}>
        Task Name</Text>

      <Text style={{fontFamily: 'Inter-Regular', marginTop: -5, marginBottom: 10, fontSize: 20, color: '#000'}}>
        description of the task</Text>

      <TouchableOpacity style={styles.feedbacks} onPress={()=> navigation.navigate('Task')} >
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 24}}>
                 Task Name:</Text>
              <MaterialCommunityIcons name= "circle" size = {25} color = '#4E96AD' style= {{paddingLeft: 50}}/>
              <MaterialCommunityIcons name= "circle" size = {25} color = '#4E96AD' style= {{paddingLeft:10}}/>
              <MaterialCommunityIcons name= "circle" size = {25} color = '#4E96AD' style= {{paddingLeft:10}}/>
              <MaterialCommunityIcons name= "circle" size = {25} color = '#C4C4C4' style= {{paddingLeft:10}}/>
              <MaterialCommunityIcons name= "circle" size = {25} color = '#C4C4C4' style= {{paddingLeft:10}}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.feedbacks2}  >
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 24, alignSelf: 'center'}}>
                 Enter Numerical Response:</Text>
              <TextInput style={styles.input} placeholder = 'Type number'/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.feedbacks2} >
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 24, alignSelf: 'center'}}>
                 Enter Text Response:</Text>
              <TextInput style={styles.input} placeholder = 'Enter Text'/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.feedbacks}  >
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 24}}>
                 Attach Image/Video:</Text>
              <FontAwesome  name= "square" size = {70} color = '#E5E5E5' style= {{paddingLeft: 50}}/>
              <Entypo name= "attachment" size = {40} color = '#000' style= {{marginLeft: -50}}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.feedbacks}  >
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 24}}>
                Book an appointment</Text>
              <FontAwesome  name= "long-arrow-right" size = {70} color = '#4E96AD' style= {{paddingLeft: 30}}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.confirmationButton} onPress={()=> navigation.navigate('Home')}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  feedbacks: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
    width: 420,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    },
  feedbacks2: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#000',
      width: 420,
      height: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      },
  input: {
      backgroundColor: '#EBF8F9',
      color: '#727070',
      marginTop: 10,
      width: 170,
      borderRadius: 15,
      height: 40,
      textAlignVertical: 'top',
      textAlign: 'center',
      fontSize: 18,
      alignSelf: 'center'
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
    }

});


export default patientTask;
