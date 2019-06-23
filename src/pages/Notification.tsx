import React from 'react';
import styled from 'styled-components';
import {AppNotification, StoreState} from '../types';
import { notificationSelector } from '../selectors';
import {connect, DispatchProp} from 'react-redux';

const Wrapper = styled.div`
  
`;

interface OwnProps {

}

interface ConnectedProps {
  notification: AppNotification;
}

type Props = OwnProps & ConnectedProps & DispatchProp<any>;

const Notification: React.FC<Props> = ({}) => {

  return (
    <Wrapper>

    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  notification: notificationSelector(state),
});

export default connect(mapStateToProps)(Notification);
