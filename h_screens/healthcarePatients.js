// import React from 'react';
// import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

// function patientInfo() {
//   return (
//     <View style={styles.background}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>
//           BILLY JIM
//         </Text>
//         </View>
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}>
//         <TouchableOpacity style={styles.reportBut}>
//         <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
//           REPORTS
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.newReportBut}>
//         <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
//           NEW REPORT
//         </Text>
//       </TouchableOpacity>
//       </View>
//       <View style={styles.container}> 
//         <Text style={styles.promptText}> 
//           Name:
//         </Text>
//         <TextInput style={styles.input} placeholder = 'Jim, Billy'>
//         </TextInput>
//       </View>
//       <View style={styles.container}> 
//         <Text style={styles.promptText}>
//           Birthdate:
//         </Text>
//         <TextInput style={styles.input} placeholder = '01/21/1972'>
//         </TextInput>
//       </View>
//       <View style={styles.container}> 
//         <Text style={styles.promptText}>
//           Phone Number:
//         </Text>
//         <TextInput style={styles.input} placeholder = '(604)-283-1389'>
//         </TextInput>
//       </View>
//       <View style={styles.container}> 
//         <Text style={styles.promptText}>
//           Address:
//         </Text>
//         <TextInput style={styles.input} placeholder = '222 Royal Birch View, Vancouver BC Canada V1N 9A2'>
//         </TextInput>
//       </View>
//       <View style={styles.promptText}>
//       </View>
//       <View style={styles.container}> 
//         <Text style={styles.promptText}> 
//           Medical History:
//         </Text>
//         <TextInput style={styles.input} placeholder = 'History of angina, takes nitroglycerin'>
//         </TextInput>
//         </View>
//       <TouchableOpacity style={styles.updateBut}>
//         <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
//           UPDATE
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#4C6663',
//     height: 85,
//     width: 415,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 75,
//   },
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 30,
//   },
//   promptText: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'left',
//     alignSelf: 'stretch',
//     paddingBottom: 5,
//   },
//   img: { 
//     width: 100,
//     height: 100,
//     borderRadius: 100/2,
//   },
//   background: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//   },
//   input: {
//     backgroundColor: '#E5E5E5',
//         borderRadius: 1,
//         borderWidth: 1,
//         borderColor: '#CDCDC6',
//         width: 350,
//         height: 35,
//         textAlign: 'center',
//         fontStyle: 'italic',
//         fontSize: 14,
//         // letterSpacing: 4,
//   },
//   reportBut: {
//     justifyContent: 'center',
//     alignSelf: 'flex-start',
//     backgroundColor: '#4E96AD',
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: '#CDCDC6',
//     width: 150,
//     height: 70,
//   },
//   newReportBut: {
//     justifyContent: 'center',
//     alignSelf: 'flex-end',
//     backgroundColor: '#4E96AD',
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: '#CDCDC6',
//     width: 150,
//     height: 70,
//   },
//   updateBut: {
//     marginBottom: 20,
//     justifyContent: 'center',
//     backgroundColor: '#4E96AD',
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: '#CDCDC6',
//     width: 160,
//     height: 60,
//   }
// });



// export default patientInfo;

import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function healthcarePatients() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          PATIENTS
        </Text>
        </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}> 
          Name
        </Text>
        </View>

        <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
          BILLY JIM
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.promptText}>
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addBut}>
        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
          +
        </Text>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4E96AD',
    height: 85,
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
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
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
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#74C9E4',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#CDCDC6',
    width: 60,
    height: 60,
  }
});



export default healthcarePatients;











