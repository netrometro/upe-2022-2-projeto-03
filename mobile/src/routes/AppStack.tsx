import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../screens/Home";
import { SettingScreen } from "../screens/SettingScreen";
import { QuizScreen } from "../screens/Quiz";
// import SingUp from "../screens/SingUp";
// import SingInScreen from "../screens/SingInScreen/SingInScreen";


const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
}
