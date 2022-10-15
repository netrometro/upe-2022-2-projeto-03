// import React, { useState } from 'react';
// import { Image, Text } from 'react-native';
// import { Container } from './style';
// import { MyTextInput } from '../../components/MyTextInput';
// import { MyButton } from '../../components/MyButton';
// // import { useAuth } from '../../contexts/Auth';
// import user from '../../assets/user.png';
// import { Button } from '@rneui/base';
// import { useNavigation } from '@react-navigation/native';
// import SingUp from '../SingUp';

// function SingInScreen(){
//   const navigation = useNavigation();


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const {signIn} = useAuth();

//   return (
//     <Container>
//       <Image
//       resizeMode="contain"
//       source={user}
//       style={{width: 100, height: 100}}
//       />
//       <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
//       <MyTextInput
//         placeholder="senha"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <Button onPress={() => navigation.navigate("SingUp")}><Text>Não tem conta ainda? Cadastre-se</Text></Button>
//       {/* <MyButton onPress={() => signIn(email, password)} title="Login" /> */}
//     </Container>
//   );
// }

// export default SingInScreen