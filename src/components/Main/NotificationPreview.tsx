import React from 'react';
import styled from 'styled-components';
import {Paper, Typography} from '@material-ui/core';
import { AppNotification } from '../../types/index';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
`;

const Wrapper = styled(Paper)`
  padding: 16px;
  margin-bottom: 16px;
  border: 3px solid #ff1744;
`;

interface Props {
  notification: AppNotification;
}

const NotificationPreview: React.FC<Props> = ({ notification }) => {
  return (
    <Wrapper>
      <StyledLink to={`/notification/${notification.slug}`}>
        <Typography variant="h6" gutterBottom>{notification.title}</Typography>
      </StyledLink>
      <Typography component="p">{notification.description}</Typography>
    </Wrapper>
  );
};

export default NotificationPreview;
