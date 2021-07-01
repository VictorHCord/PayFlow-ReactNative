import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Route from './route';
import 'react-native-gesture-handler';
import React from 'react';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Route />
    </>
  );
}

