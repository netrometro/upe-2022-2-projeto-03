import { Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import api from "../../Services/api";

function Cadastro() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeated, setPasswordRepeated] = useState<string>("");

  const handleSignUpClick = async () =>{
    if(name!= '' && email != '' && password != ''){
        let res = await api.signUp(name, email, password)
        console.log(res)
        if(res.token){
            alert('Deu certo')
        }else { 
            alert('erro: ' + res.error)
        }
    } else {
        alert("Preencha os campos")
    }
  }

  function handleCreateUser() {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(passwordRepeated);

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
          leftIcon={{ type: "font-awesome", name: "lock"}}
          onChangeText={(value) => setPasswordRepeated(value)}
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

export default Cadastro;