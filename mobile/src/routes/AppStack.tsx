import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../screens/Home";


const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
