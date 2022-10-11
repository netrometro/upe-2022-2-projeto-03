import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './screens/Login';

// expo start --tunnel

const Stack = createStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

