import React from 'react';
import styled from 'styled-components';
import { StoreState, AppEvent, AppNotification } from '../../types/index';
import { eventsListSelector, notificationsListSelector } from '../../selectors';
import { connect, DispatchProp } from 'react-redux';
import EventPreview from './EventPreview';
import NotificationPreview from './NotificationPreview';

const Wrapper = styled.div`
  width: 678px;
  max-width: 100%;
  margin: 0 auto;
`;

interface OwnProps {

}

interface ConnectedProps {
  notifications: AppNotification[];
  events: AppEvent[];
}

type Props = ConnectedProps & DispatchProp<any>;

const Feed: React.FC<Props> = ({ notifications, events }) => {

  return (
    <Wrapper>
      {notifications.map(notification => <NotificationPreview key={notification.id} notification={notification} />)}
      {events.map(event => <EventPreview key={event.slug} event={event}  />)}
    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState): ConnectedProps => ({
  notifications: notificationsListSelector(state),
  events: eventsListSelector(state),
});

export default connect(mapStateToProps)(Feed);

