import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MyButton} from '../components/MyButton';
import {style} from './style';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <MyButton
        title="Ir para Configurações"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}