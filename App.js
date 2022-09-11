/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {
  requestUserPermission,
  NotificationListener,
} from './src/utils/pushnotification_helper';

const App = () => {
  const backgroundStyle = {
    flex: 1,
  };

  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
