import React from 'react';
import Login from './src/login/login_page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function PayFlow() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
          <Stack.Screen name="LoginPage" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

