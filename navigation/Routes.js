import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from './AuthProvider';
import HealthStack from './HealthStack.js';
import LoginStack from './LoginStack.js';
import PatientStack from './PatientStack.js';

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const { userType } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  console.log(user ? "logged in" : "logged out");

  return (
    <NavigationContainer >
      {user ?
        (userType == "provider" ? <HealthStack /> : <HealthStack />)
        : <LoginStack />}
    </NavigationContainer>
  );
}
