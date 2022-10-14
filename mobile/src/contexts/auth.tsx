import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../services/authService';
import {Alert} from 'react-native';
import {api} from '../api'
export interface AuthData { //Aqui estou simulando os dados que virão da API
  token: string;
  email: string;
  name: string;
}


interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => { //Vai prover os dados do contexto de autenticação de forma global para a aplicação
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);
  // const [userData, setUserData] = useState({email:'', password:''}) //Login
  // const req = api.get('auth/authenticate', userData)

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(email: string, password: string) { //Preciso chamar a minha API aqui
    try {
      const authData = await authService.signIn(email, password);

      setAuthData(authData);
      AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
    } catch (error) {
      Alert.alert(error.message, 'Tente novamente');
    }
  }
  async function signOut() { //Faz logout do aplicativo
    setAuthData(undefined);
    AsyncStorage.removeItem('@AuthData');
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}