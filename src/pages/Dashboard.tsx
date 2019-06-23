import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper/Paper';
import { notificationsListSelector } from '../selectors';
import {AppNotification, StoreState} from '../types';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import Button from '@material-ui/core/Button';
import DashboardCard from '../components/DashboardCard';

const Wrapper = styled.div`
  
`;

const List = styled.div`
  margin-bottom: 16px;
`;

interface OwnProps {

}

interface ConnectedProps {
  notifications: AppNotification[];
}

type Props = OwnProps & ConnectedProps & DispatchProp<any> & RouteComponentProps;

const Dashboard: React.FC<Props> = ({ notifications }) => {

  return (
    <Wrapper>
      <List>
      {notifications.map(notification => (
        <DashboardCard key={notification.slug} notification={notification} />
      ))}
      </List>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Добавить
      </Button>
    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  notifications: notificationsListSelector(state),
});

export default connect(mapStateToProps)(Dashboard);
