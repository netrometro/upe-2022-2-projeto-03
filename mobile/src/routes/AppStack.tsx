<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../screens/Home";
import { SettingScreen } from "../screens/SettingScreen";

>>>>>>> 391c35a2d5dc858f00a04f203033967ef64fc4fe

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {SettingScreen} from '../screens/SettingScreen';

// interface App

export interface AppParamList {
  Home: undefined;
  Settings: undefined;
}
const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}