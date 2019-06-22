import React from 'react';
import styled from 'styled-components';
import { StoreState } from '../types';
import { eventsListSelector, notificationsListSelector } from '../selectors';
import { connect, DispatchProp } from 'react-redux';

const Wrapper = styled.div`
  
`;

interface OwnProps {

}

interface ConnectedProps {
  notifications: Notification[];
  events: Event[];
}

type Props = OwnProps & ConnectedProps & DispatchProp<any>;

const Feed: React.FC<Props> = ({ notifications, events }) => {

  return (
    <Wrapper>

    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  notifications: notificationsListSelector(state),
  events: eventsListSelector(state),
});

export default connect<OwnProps>(mapStateToProps)(Feed);

