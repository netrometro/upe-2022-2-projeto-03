import React from 'react';
import { View, Text } from 'react-native';
import { NativeScreenContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}

export function Router(){

  return(
    <NativeScreenContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
      </Stack.Navigator>
    </NativeScreenContainer>
  )
}