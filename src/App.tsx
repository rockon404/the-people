import React from 'react';
import './App.css';
import {ThemeProvider } from 'styled-components';
import Theme from './theme';
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import { Main, Event, Login } from './pages';


const App: React.FC<RouteComponentProps<any>> = ({ history, location, match }) => {
  console.log('render', history, location, match);
  return (
    <ThemeProvider theme={Theme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/event/:slug" component={Event} />
        <Route path="/login" component={Login} />
      </Switch>
    </ThemeProvider>
  );
};

export default withRouter(App);
