import React from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import Theme from './theme';
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import {Main, Event, Login, Dashboard, Notification, AddNotification} from './pages';
import Header from './components/Header';
import {StoreState} from './types';
import {isSignedInSelector} from './selectors';
import {connect} from 'react-redux';

const Content = styled.div`
  padding: 100px 16px;
`;

interface ConnectedProps {
  isSignedIn: boolean;
}

type Props = ConnectedProps & RouteComponentProps<any>;

const App: React.FC<Props> = ({ history, location, match, isSignedIn }) => {
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
            {isSignedIn && <Route exact path="/dashboard" component={Dashboard} />}
            {isSignedIn && <Route path="/dashboard/add_notification" component={AddNotification} />}
            <Route path="/notification/:slug" component={Notification} />
          </Switch>
        </Content>
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: StoreState) => ({
  isSignedIn: isSignedInSelector(state),
});

export default withRouter(connect(mapStateToProps)(App));
