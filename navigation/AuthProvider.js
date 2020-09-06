import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
/**
 * This provider is created
 * to access user in whole app
 * inspired by: https://github.com/amandeepmittal/react-native-examples/tree/master/reactnav5-stack-navigator
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState("null");

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userType,
        setUserType,
        loginPatient: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
            .then(() => {
              setUserType("patient");
              console.log(userType);
            });
          } catch (e) {
            console.log(e);
            console.log('Sign in Failed');
          }
        },
        loginProvider: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
            .then(() => {
              setUserType("provider");
              console.log(userType);
            });
          } catch (e) {
            console.log(e);
            console.log('Sign in Failed');
          }
        },
        registerProvider: async (org, name, email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
              setUserType("provider");
              console.log(userType);
              const db = firestore();
              const user_id = user.user.uid; // comes from auth
              console.log(user_id);
              const userRef = db.collection('doctors').doc(user_id);
              userRef.set({
                email,
                user_id,
                name,
                org
              });
            });
            /*.then((user) => {
              const db = firestore();
              const user_id = user.user.uid;
              db.collection('users').doc(user_id).collection('closet').doc(user_id)
              .set({});
            });*/
          } catch (e) {
            console.log(e);
            if (e.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (e.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
          }
        },
        registerPatient: async (address, doctorID, givenID, phone, name, bday, email, password) => { // doctor does this
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
              setUserType("patient");
              const db = firestore();
              const patient_id = user.user.uid;
              console.log(patient_id);
              console.log(userType);
              const userRef = db.collection('doctors').doc(doctorID)
                                .collection('patients').doc(patient_id);
              userRef.set({
                phone_number: phone,
                address,
                email,
                doctorID,
                givenID,
                patient_id,
                name,
                bday
              });
            });
            /*.then((user) => {
              const db = firestore();
              const user_id = user.user.uid;
              db.collection('users').doc(user_id).collection('closet').doc(user_id)
              .set({});
            });*/
          } catch (e) {
            console.log(e);
            if (e.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (e.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut()
            .then(() => {
              setUserType("null");
              console.log(userType);
            });
          } catch (e) {
            console.error(e);
            console.log('Sign out Failed');
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
