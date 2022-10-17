import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingUp from "../screens/SingUp";
import SingInScreen from "../screens/SingInScreen/SingInScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SingIn" component={SingInScreen} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  );
}
