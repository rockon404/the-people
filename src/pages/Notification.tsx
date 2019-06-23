import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import {AppEvent, AppEventType, AppNotification, Place, StoreState, User} from '../types';
import { connect, DispatchProp } from 'react-redux';
import { fetchEventBySlug } from '../actions/event';
import { RouteComponentProps } from 'react-router';
import {
  notificationSelector,
  notificationUserSelector,
} from '../selectors';
import media from '../utils/media';
import formatDate from '../utils/formatDate';
import Phone from '../components/core/Phone';
import TypoSecondary from '../components/core/Address';
import {fetchNotificationBySlug} from '../actions/notification';

const Wrapper = styled.div`
  width: 680px;
  max-width: 100%;
  margin: 0 auto;
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 16px;
  
  ${media.mobile`
    flex-direction: column;
  `}
`;

interface OwnProps {

}

interface ConnectedProps {
  notification: AppNotification;
  user: User;
}

type Props = OwnProps & ConnectedProps & DispatchProp<any> & RouteComponentProps<{ slug: string }>;

const Notification: React.FC<Props> = ({ notification, dispatch, match, user }) => {
  useEffect(() => {
    dispatch(fetchNotificationBySlug(match.params.slug));
  }, [match.params.slug]);

  if (!notification) return <div>...loading</div>;

  return (
    <Wrapper>
      <Typography variant="h6" gutterBottom>{notification.title}</Typography>
      <TypoSecondary>{formatDate(new Date(notification.created_at))}</TypoSecondary>
      <Typography component="p" gutterBottom>{notification.description}</Typography>
      <TypoSecondary>{user.title} / {user.address}</TypoSecondary>
      <Phone>{user.phone}</Phone>
    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  notification: notificationSelector(state),
  user: notificationUserSelector(state),
});

export default connect(mapStateToProps)(Notification);
