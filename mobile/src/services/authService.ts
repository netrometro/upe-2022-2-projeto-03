// import {AuthData} from '../contexts/Auth';
import { user } from "../interfaces/user";
import { Alert } from "react-native";
import api from "./api";
// import { useNavigation } from '@react-navigation/native';

const signIn = async (
  email: string,
  password: string,
) => {
  const response = await api.post<user>("auth/authenticate", {
    email: email,
    password: password,
  });
  console.log("Response do api.post", response)
  console.log("Response.data do api.post", response.data)
  return response.data
};

export const authService = {
  signIn,
};

// Apenas um serviço para retornar as credenciais que preciso para poder atender meus serviços

// const signIn = (email: string, password: string): Promise<AuthData> => {
//   return new Promise((resolve, reject) => { // Simulando uma chamada da API
//     setTimeout(() => {
//       if (password === '123456') {
//         resolve({
//           token: JWTTokenMock,
//           email: email,
//           name: 'Jonas Soares',
//         });
//       } else {
//         reject(new Error('credenciais incorretas'));
//       }
//     }, 1000);
//   });
// };

// export const authService = {
//   signIn,
// };

// const JWTTokenMock =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
