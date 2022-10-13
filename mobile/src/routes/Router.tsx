import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export function Router(){
  const auth = false;
  return(
    <NavigationContainer>
      {auth ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  )
}