import React, { useContext, useState } from 'react';
import {View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const window = Dimensions.get("window");
const height = window.height;
const width = window.width;

function patientClinics({ navigation }) {
  const [MCTitle, setMCTitle] = useState("title");
  const onChangeMCTitle = (textValue) => setMCTitle(textValue);
  const [editMC, setEditMC] = useState(false);
  const [ImgTitle, setImgTitle] = useState("title");
  const onChangeImgTitle = (textValue) => setImgTitle(textValue);
  const [editImg, setEditImg] = useState(false);
  const [DocTitle, setDocTitle] = useState("title");
  const onChangeDocTitle = (textValue) => setDocTitle(textValue);
  const [editDoc, setEditDoc] = useState(false);
  const [button, setButtons] = useState([
    {name: 'Mulitple choice', id: 1},
    {name: 'Image', id: 2},
    {name: 'Numerical', id: 3},
    {name: 'Video', id: 4},
    {name: 'Document', id: 5},
    {name: 'Text Entry', id: 6}
  ]);
  const [components, setComponents] = useState([]);

  const addFeedback = (item) => {
      return (
        <View style={{ marginTop: 10, height: 10, width:50}}></View>
      )
  };

  function addComponent(compType) {
    setComponents(prevItems => {
      return [...prevItems, {type: compType}];
    });
  }
  /*const deletePhrase = (name) => {
    setButtons(prevItems => {
      return prevItems.filter(item => item.name != name);
    })
  }*/

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
      <AntDesign name="arrowleft" color={'#fff'} size={28}
                 style={{marginTop: -65, marginLeft: -330}}

      />
      <View style={{marginTop: 30}}>
          <Text style={{textAlign: 'center', fontFamily: 'Inter-SemiBold', fontSize: 20, color: '#4E96AD'}}> Set Patient's Daily Tasks</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style ={styles.btn} onPress={() => addComponent("MC")}>
          <Text style ={styles.btnText}>Multiple Choice</Text>
          <Octicons name="plus" color="black" size={15} style={{paddingLeft: 10}} />
        </TouchableOpacity>
        <TouchableOpacity style ={styles.btn} onPress={() => addComponent("Image")}>
          <Text style ={styles.btnText}>Image</Text>
          <Octicons name="plus" color="black" size={15} style={{paddingLeft: 10}} />
        </TouchableOpacity>
        <TouchableOpacity style ={styles.btn} onPress={() => addComponent("Numerical")}>
          <Text style ={styles.btnText}>Numerical</Text>
          <Octicons name="plus" color="black" size={15} style={{paddingLeft: 10}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style ={styles.btn} onPress={() => addComponent("Video")}>
          <Text style ={styles.btnText}>Video</Text>
          <Octicons name="plus" color="black" size={15} style={{paddingLeft: 10}} />
        </TouchableOpacity>
        <TouchableOpacity style ={styles.btn} onPress={() => addComponent("Doc")}>
          <Text style ={styles.btnText}>Document</Text>
          <Octicons name="plus" color="black" size={15} style={{paddingLeft: 10}} />
        </TouchableOpacity>
        <TouchableOpacity style ={styles.btn} onPress={() => addComponent("Text")}>
          <Text style ={styles.btnText}>Text Entry</Text>
          <Octicons name="plus" color="black" size={15} style={{paddingLeft: 10}} />
        </TouchableOpacity>
      </View>

      <View style={styles.borderBox}>
        <Entypo name="dots-three-horizontal" color="black" size={20} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -15}} />
        <View style={styles.multipleChoice}>
          <TextInput
            style={styles.inputDesc}
            placeholder={MCTitle}
            autoCorrect={false}
            autoCapitalize='none'
            editable={editMC}
            onChangeText = {onChangeMCTitle}
          />
        <Feather name="circle" color="black" size={20} style={{paddingLeft: 10}} />
        <Feather name="circle" color="black" size={20} style={{paddingLeft: 10}} />
        <Feather name="circle" color="black" size={20} style={{paddingLeft: 10}} />
        <Feather name="circle" color="black" size={20} style={{paddingLeft: 10}} />
        <Feather name="circle" color="black" size={20} style={{paddingLeft: 10}} />
        </View>
      </View>

      <View style={styles.borderBox}>
        <Entypo name="dots-three-horizontal" color="black" size={20} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -15}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputDesc}
            placeholder={ImgTitle}
            autoCorrect={false}
            autoCapitalize='none'
            editable={editImg}
            onChangeText = {onChangeImgTitle}
          />
        <Entypo name="image" color="black" size={30} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -25}} />
        </View>
      </View>
      <View style={styles.borderBox}>
        <Entypo name="dots-three-horizontal" color="black" size={20} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -15}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputDesc}
            placeholder={DocTitle}
            autoCorrect={false}
            autoCapitalize='none'
            editable={editDoc}
            onChangeText = {onChangeDocTitle}
          />
        <Entypo name="text-document" color="black" size={30} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -25}} />
        </View>
      </View>
      <View style={styles.borderBox}>
        <Entypo name="dots-three-horizontal" color="black" size={20} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -15}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputTextDesc}
            placeholder='Input form...'
            autoCorrect={false}
            autoCapitalize='none'
            editable={editDoc}
            onChangeText = {onChangeDocTitle}
          />
          <Text>Patient Response...</Text>
        </View>
      </View>
      <View style={styles.borderBox}>
        <Entypo name="dots-three-horizontal" color="black" size={20} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -15}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputTextDesc}
            placeholder='Input form...'
            autoCorrect={false}
            autoCapitalize='none'
            editable={editDoc}
            onChangeText = {onChangeDocTitle}
          />
        <Text>Numeric Response...</Text>
        </View>
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
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical:'center',
    flexDirection: "row",
    backgroundColor: '#C9D7F8',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C9D7F8',
    margin: 5,
    padding: 10,
  },
  btnText: {
    color: '#000',
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Inter-Regular'
  },
  addBtn: {
    color: '#000',
    fontFamily: 'Inter-Regular',
    textAlign: 'left',
    fontSize: 20
  },
  deleteBtn: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 25,
    marginLeft: 10,
    marginRight: -22,
    paddingTop: -10,
    marginTop: -5
  },
  borderBox: {
    height: 80,
    width: width - 50,
    borderColor: '#4E96AD',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  multipleChoice: {
    marginTop: -5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputDesc: {
    marginRight: 80,
    color: '#000',
    fontFamily: 'Inter-Medium',
    fontSize: 25
  },
  inputTextDesc: {
    marginRight: 20,
    color: '#000',
    fontFamily: 'Inter-Medium',
    fontSize: 20
  },
  uploadImage: {
    marginTop: -5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});



export default patientClinics;
