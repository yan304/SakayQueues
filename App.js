/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login/Login';
import Register from './screens/Login/Register';
import ForgotPassword from './screens/Login/ForgotPassword';
import Dashboard from './screens/Main/Dashboard';
import InputLogin from './screens/Login/InputLogin';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
      const [mainState, setMainState] = useState(true);
      const [loginState, setLoginState] = useState(false);
      const [registerState, setRegisterState] = useState(false);
      const [forgotState, setForgotState] = useState(false);

      const handleClose = () => {
        setLoginState(false);
        setRegisterState(false);
        setForgotState(false);
      }

      const handleLogin = () => {
        handleClose();
        setMainState(false);
        setLoginState(true);
      }

      const handleRegister = () => {
        handleClose();
        setMainState(false);
        setRegisterState(true);
      }

      const handleForgot = () => {
        handleClose();
        setForgotState(true);
      }

      const handleSubmit = () => {
        setLoginState(false);
      }

  return (
    <SafeAreaProvider>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View >
            {(!loginState && mainState) && <Login login={() => handleLogin()} register={() => handleRegister()}/> }
            {loginState && <InputLogin login={() => handleSubmit()} register={() => handleRegister()} forgot={() => handleForgot()}/>}
            {registerState && <Register back={() => handleLogin()}/>}
            {forgotState && <ForgotPassword back={() => handleLogin()}/>}
            {!mainState && !loginState && !registerState && !forgotState ? <Dashboard /> : null}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
