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

function healthcareNewTaskpt2({ navigation }) {
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
  const [refresh, setRefresh] = useState(true);
  const [ID, setID] = useState(Number(0));

  const addFeedback = (item) => {
      return (
        <View style={{ marginTop: 10, height: 10, width:50}}></View>
      )
  };

  function addComponent(compType) {
    setComponents(prevItems => {
      return [...prevItems, {type: compType, id: ID}];
    });
    setID(Number(ID) + +1);
    setRefresh(!refresh);
    console.log(components);
  }

  function renderMC() {
    return (
      <View style={styles.borderBox}>
        <Entypo name="cross" color="black" size={25} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -5}} />
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
    );
  }

  function renderImg() {
    return(
      <View style={styles.borderBox}>
        <Entypo name="cross" color="black" size={25} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -5}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputDesc}
            placeholder='title'
            autoCorrect={false}
            autoCapitalize='none'
            editable={editImg}
            onChangeText = {onChangeImgTitle}
          />
        <Entypo name="image" color="black" size={40} style={{ paddingRight: 100}} />
        </View>
      </View>
    );
  }

  function renderDoc() {
    return (
      <View style={styles.borderBox}>
        <Entypo name="cross" color="black" size={25} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -5}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputDesc}
            placeholder='title'
            autoCorrect={false}
            autoCapitalize='none'
            editable={editDoc}
            onChangeText = {onChangeDocTitle}
          />
        <Entypo name="text-document" color="black" size={40} style={{ paddingRight: 100}} />
        </View>
      </View>
    );
  }

  function renderVid() {
    return(
      <View style={styles.borderBox}>
        <Entypo name="cross" color="black" size={25} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -5}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputDesc}
            placeholder='title'
            autoCorrect={false}
            autoCapitalize='none'
            editable={editImg}
            onChangeText = {onChangeImgTitle}
          />
        <Entypo name="folder-video" color="black" size={30} style={{ paddingRight: 110}} />
        </View>
      </View>
    );
  }

  function renderText() {
    return (
      <View style={styles.borderBox}>
        <Entypo name="cross" color="black" size={25} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -5}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputDesc}
            placeholder='title'
            autoCorrect={false}
            autoCapitalize='none'
            editable={editDoc}
            onChangeText = {onChangeDocTitle}
          />
          <Text style={{paddingRight: 20,fontSize:15}}>Patient Response...</Text>
        </View>
      </View>
    );
  }

  function renderNum() {
    return (
      <View style={styles.borderBox}>
        <Entypo name="cross" color="black" size={25} style={{alignSelf: 'flex-end', paddingRight: 15, marginTop: -5}} />
        <View style={styles.uploadImage}>
          <TextInput
            style={styles.inputDesc}
            placeholder='title'
            autoCorrect={false}
            autoCapitalize='none'
            editable={editDoc}
            onChangeText = {onChangeDocTitle}
          />
        <Text style={{paddingRight: 20, fontSize:15}}>Numeric Response...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          NEW REPORT:
        </Text>
        <Text style={{fontSize:25, color: 'white', marginTop: -5}}>
          Smith, Dan
        </Text>
      </View>
      <AntDesign name="arrowleft" color={'#fff'} size={28}
                 style={{marginTop: -79, marginLeft: -330}}
                 onPress={() => navigation.goBack()}
      />

      <View style={{marginTop: 50}}>
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

      <FlatList
        data={components}
        extraData={refresh}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          item.type == "MC" ? renderMC() :
          item.type == "Image" ? renderImg() :
          item.type == "Doc" ? renderDoc() :
          item.type == "Video" ? renderVid() :
          item.type == "Text" ? renderText() : renderNum()
        )}
      />

    <TouchableOpacity style={styles.submitButton}
                      onPress={() => navigation.navigate('Patients')}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          ENTER
        </Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 20
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
    marginTop: 10,
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
    marginRight: 50,
    color: '#000',
    fontFamily: 'Inter-Medium',
    fontSize: 25,
    width: 100,
    marginTop: -10
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
  submitButton: {
    marginBottom: 60,
    justifyContent: 'center',
    backgroundColor: '#4E96AD',
    borderRadius: 30,
    width: 160,
    height: 60,
  }
});



export default healthcareNewTaskpt2;
