import { Container } from './style';
import React, {useState } from "react";
import {Alert, Button, Image, Text, TouchableOpacity, View } from "react-native";
import api from "../../Services/api";
import { MyTextInput } from "../../components/MyTextInput";
import { MyButton } from "../../components/MyButton";
import { useNavigation } from '@react-navigation/native';
import user from '../../assets/user.png';


function CreateQuizz() {
  const [questions, setquestions] = useState<string>("");
  
  function handleCreateQuizz() {
      if(questions != '' ){
        api.post("quiz/createquizz", {
          questions: questions,    
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
        Alert.alert("Preencha a questão",)
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
        placeholder="Questão"
        value={questions}
        onChangeText={setquestions}
      />
      <MyButton onPress={() => CreateQuizz()} title="Criar Quizz" />

    </Container>

  );
}

export default CreateQuizz;