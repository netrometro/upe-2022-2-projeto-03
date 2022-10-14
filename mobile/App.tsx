import React from 'react';
<<<<<<< HEAD
import {AuthProvider} from './src/contexts/auth';
import {Router} from './src/routes/Routes';
import {ThemeProvider} from './src/theme/Theme';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
=======
import {AuthProvider} from './src/contexts/Auth';
import {Router} from './src/routes/Router';

const App = () => {
  return (
      <AuthProvider>
        <Router />
      </AuthProvider>
>>>>>>> 391c35a2d5dc858f00a04f203033967ef64fc4fe
  );
};

export default App;