import React, { useEffect, useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;

function healthcarePatients({ navigation }) {
  var usr = firebase.auth().currentUser;
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('doctors')
      .doc(usr.uid)
      .collection('patients')
      .orderBy('name','desc') // initially order by date
      .onSnapshot(querySnapshot => {
        const p = [];

        querySnapshot.forEach(documentSnapshot => {
          p.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setPatients(p);
        patients.sort(function(a, b) {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
              return 0;
          });
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          PATIENTS
        </Text>
      </View>
      <FlatList
        data={patients}
        extraData={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}
                onPress={() => navigation.navigate('View Patient', {
                  patientName: item.name,
                  ID: item.patient_id,
                  dob: item.bday,
                  phone: item.phone_number,
                  address: item.address
                })}>
            <Text style={styles.itemText}>{item.name} ({item.givenID})</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addBut}>
        <AntDesign name="plus" color={'#fff'} size={26}
                   onPress={() => { navigation.navigate('New Patient', {
                                    edit: true,
                                    newUser: true
                                  });}}
        />
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
    marginBottom: 75,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 30,
    paddingTop: 20
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
  addBut: {
    marginTop: 10,
    marginRight: 35,
    marginBottom: 120,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#74C9E4',
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  listItem: {
    height: 50,
    width: width,
    backgroundColor: '#C9D7F8',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 0.5
  },
  itemText: {
    fontSize: 18,
    fontFamily: 'Inter-Medium'
  }
});



export default healthcarePatients;
