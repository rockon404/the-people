import React, {SyntheticEvent, useState} from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper/Paper';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {AppNotification} from '../types';
import {connect, DispatchProp} from 'react-redux';
import {deleteNotification} from '../actions/notifications';

const Card = styled(Paper)`
  position: relative;
  padding: 16px;
  padding-right: 40px;
`;

interface Props {
  notification: AppNotification;
}

const DashboardCard: React.FC<Props & DispatchProp<any>> = ({ notification, dispatch }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event: SyntheticEvent<any>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleDelete() {
    dispatch(deleteNotification(notification.slug));
  }

  return (
    <Card>
      {notification.title}
      <IconButton
        style={{ position: 'absolute', top: 0, right: 0 }}
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        id="long-menu"
        keepMounted
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem onClick={handleDelete}>
          Удалить
        </MenuItem>
      </Menu>
    </Card>
  );
};

export default connect()(DashboardCard);
