import React from 'react';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';


export function Router(){
  const auth = true;
  return(
    <NavigationContainer>
      {auth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
=======
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useAuth} from '../contexts/Auth';

export function Router() {
  const {authData, isLoading} = useAuth();

  if (isLoading) {
    console.log({isLoading});
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Carregando informações....</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
>>>>>>> 391c35a2d5dc858f00a04f203033967ef64fc4fe
}