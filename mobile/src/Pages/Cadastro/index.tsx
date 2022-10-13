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

  function handleSignUpClick() {
      api.post("auth/register", {
          name: name,
          email: email,
          senha: password,
      })
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