import React from 'react';
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
  );
};

export default App;