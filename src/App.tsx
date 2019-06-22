import React from 'react';
import './App.css';
import {ThemeProvider } from 'styled-components';
import Theme from './theme';
import { Route, Switch } from 'react-router';
import { Main } from './pages';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Switch>
        <Route to="/" component={Main} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
