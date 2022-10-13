import React, { useState } from 'react';
import { Image } from 'react-native';
import { Container } from './style';
import { MyTextInput } from '../../components/MyTextInput';
import { MyButton } from '../../components/MyButton';

import user from '../../assets/user.png';

export function SingInScreen(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {signIn} = useAuth();

  return (
    <Container>
      <Image
      resizeMode="contain"
      source={user}
      style={{width: 100, height: 100}}
      />
      {/* <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      /> */}

      <MyButton onPress={() => signIn(email, password)} title="Login" />
    </Container>
  );
}