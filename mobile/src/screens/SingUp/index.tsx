import { Container } from './style';
import React, {useState } from "react";
import {Alert, Button, Image, Text, TouchableOpacity, View } from "react-native";
import api from "../../Services/api";
import user from '../../assets/user.png';
import { MyTextInput } from "../../components/MyTextInput";
import { MyButton } from "../../components/MyButton";
import { useNavigation } from '@react-navigation/native';
// import SingInScreen from '../SingInScreen';

function SingUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  function handleSignUpClick() {
  if(password === password2){
    if(name != '' && email != '' && password != ''){
      api.post("auth/register", {
        name: name,
        email: email,
        password: password
    },
    ).then((response) =>{
      Alert.alert('Sucesso',(response.data.sucess))

    })
    .catch(function (error: { response: { data: { error: any; }; }; request: any; message: any; }) {
      if (error.response) {
        Alert.alert('Error',(error.response.data.error))
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    },
    );
  }else{
      Alert.alert('Opa, esqueceu algo?',"Preencha todos os campos")
    }
    
  }else{
    Alert.alert("Opa, calma lá", "As senhas não coincidem")
  } 
  }
  

  return (
    <Container>
      <Image
      resizeMode="contain"
      source={user}
      style={{width: 100, height: 100}}
      />

      <MyTextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
       <MyTextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <MyTextInput
        placeholder="Sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyTextInput
        placeholder="Repita sua senha"
        secureTextEntry
        value={password2}
        onChangeText={setPassword2}
      />
      <View style={{flexDirection: "row",justifyContent:'center'}}>
      <Text style={{fontSize: 14, fontWeight:'bold'}}>Já tem conta?</Text>
      <TouchableOpacity>
        <Text style={{fontSize:14, color:'#F94E69', fontWeight:'bold'}}>  É só logar!</Text>
      </TouchableOpacity>
      </View>
      

      <MyButton onPress={() => handleSignUpClick()} title="Cadastrar-se" />

    </Container>

  );
}

export default SingUp;