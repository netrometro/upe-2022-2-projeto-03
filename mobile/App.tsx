import React from 'react';
// import SingUp from './src/screens/SingUp';
import {AuthProvider} from './src/contexts/Auth';
import {Router} from './src/routes/Router';

const App = () => {
  return (
    // <SingUp/>
      <AuthProvider>
        <Router />
      </AuthProvider>
  );
};

export default App;
