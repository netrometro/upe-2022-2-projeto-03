import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../services/authService';
import {Alert} from 'react-native';
import { user } from '../interfaces/user';
// export interface AuthData { //Aqui estou simulando os dados que virão da API
//   token: string;
//   email: string;
//   name: string;
// }

interface AuthContextData {
  user?: user;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

// const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => { //Vai prover os dados do contexto de autenticação de forma global para a aplicação
  const [user, setUser] = useState<user>();
  const [isLoading, setisLoading] = useState(true);

//   useEffect(() => {
//     loadStorageData();
//   }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const userSerialized = await AsyncStorage.getItem('@user');
      if (userSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _user: user = JSON.parse(userSerialized);
        setUser(_user);
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  // const signIn = (email, password) => {
  //   const loggedUser = {
  //     id:"123",
  //     email,
  //   };

  //   localStorage.setItem("user", JSON.stringify(loggedUser));
  //   if(password === "secret") {
  //     setUser({loggedUser});
  //   }
  // };

  async function signIn(email: string, password: string) { //Preciso chamar a minha API aqui
    try {
      const user = await authService.signIn(email, password);

      setUser(user);
      AsyncStorage.setItem('@user', JSON.stringify(user));
    } catch (error) {
      Alert.alert(error.message, 'Tente novamente');
    }
  }

  async function signOut() { //Faz logout do aplicativo
    setUser(undefined);
    AsyncStorage.removeItem('@user');
  }

  return (
    <AuthContext.Provider value={{user, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

//     try {
//       const user = await authService.signIn(email, password);

//       setUser(user);
//       AsyncStorage.setItem('@user', JSON.stringify(user));
//     } catch (error) {
//       Alert.alert(error.message, 'Tente novamente');
//     }
//   }
//   async function signOut() { //Faz logout do aplicativo
//     setUser(undefined);
//     AsyncStorage.removeItem('@user');
//   }

//   return (
//     <AuthContext.Provider value={{user, signIn, signOut, isLoading}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export function useAuth(): AuthContextData {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return context;
// }