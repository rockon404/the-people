import React from 'react';
import styled from 'styled-components';
import { AppEvent } from '../../types';
import { Paper, Typography } from '@material-ui/core';
import media from '../../utils/media';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
`;

const Wrapper = styled(Paper)`
  padding: 16px;
  margin-bottom: 16px;
`;

const Inner = styled.div`
  display: flex;
`;

const Img = styled.img`
  margin-right: 16px;
  flex-shrink: 0;
  ${media.mobile`
    width: 80px;
    height: 80px;
    object-fit: cover;
  `}
  ${media.desktop`
    max-width: 200px;
  `}
`;

interface Props {
  event: AppEvent;
}

const EventPreview: React.FC<Props> = ({ event }) => {

  return (
    <Wrapper>
      <Inner>
        <Img src={event.image} />
        <div>
          <StyledLink to={`/event/${event.slug}`}>
            <Typography variant="h6" gutterBottom>{event.title}</Typography>
          </StyledLink>
          <Typography component="p">{event.short_description}</Typography>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default EventPreview;
