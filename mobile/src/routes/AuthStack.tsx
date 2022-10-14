<<<<<<< HEAD
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen} from '../screens/SignInScreen/SignInScreen';
import {useTheme} from 'styled-components';
=======
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SingInScreen } from "../screens/SingInScreen/SingInScreen";
>>>>>>> 391c35a2d5dc858f00a04f203033967ef64fc4fe

const Stack = createNativeStackNavigator();

export function AuthStack() {
<<<<<<< HEAD
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.onBackground,
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
=======
  return (
    <Stack.Navigator>
      <Stack.Screen name="SingIn" component={SingInScreen} />
    </Stack.Navigator>
  );
}
>>>>>>> 391c35a2d5dc858f00a04f203033967ef64fc4fe
