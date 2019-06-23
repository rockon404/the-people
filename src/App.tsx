import React from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import Theme from './theme';
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import { Main, Event, Login, Dashboard, Notification } from './pages';
import Header from './components/Header';

const Content = styled.div`
  padding: 100px 16px;
`;

const App: React.FC<RouteComponentProps<any>> = ({ history, location, match }) => {
  console.log('render', history, location, match);
  return (
    <ThemeProvider theme={Theme}>
      <>
      <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/event/:slug" component={Event} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/notification/:slug" component={Notification} />
          </Switch>
        </Content>
      </>
    </ThemeProvider>
  );
};

export default withRouter(App);
