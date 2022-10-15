import { Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { styles } from "./styles";
import { View, Text, Alert } from "react-native";
import api from "../../Services/api";

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
        
    },).catch(function (error) {
      if (error.response) {
        Alert.alert('Error', JSON.stringify(error.response.data.error))
        // Request made and server responded
        console.log(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
  
    });
      
    }else{
      Alert.alert('Opa, esqueceu algo?',"Preencha todos os campos")
    }
    
  }else{
    Alert.alert("Opa, calma lá", "As senhas não coincidem")
  }
    
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
      <Text style={styles.text}>Formulário de cadastro</Text>
      <Input
          placeholder="Nome"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(value) => setName(value)}
        />
        <Input
          placeholder="E-mail"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
        />

        <Input
          placeholder="Sua senha"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />

        <Input
          placeholder="Repita sua senha"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(value) => setPassword2(value)}
          secureTextEntry={true}
        />
        <Button
          icon={<Icon name="check" size={15} color="white" />}
          title="Cadastrar"
          onPress={() => handleSignUpClick()}
        />
      </View>
    </View>
  );
}

export default SingUp;