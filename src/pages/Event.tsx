import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import {AppEvent, AppEventType, Place, StoreState} from '../types';
import { connect, DispatchProp } from 'react-redux';
import { fetchEventBySlug } from '../actions/event';
import { RouteComponentProps } from 'react-router';
import {eventPlaceSelector, eventSelector, eventTypesSelector} from '../selectors';
import media from '../utils/media';
import {GOOGLE_MAPS_API_KEY} from '../constants';
import Map from '../components/Map';
import formatDate from '../utils/formatDate';
import Phone from '../components/core/Phone';
import Address from '../components/core/Address';

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

const Img = styled.img`
  ${media.desktop`
    width:  240px;
    height: 240px;
    object-fit: cover;
    margin-right: 24px;
  `}
  
  ${media.mobile`
    width:  100%;
    margin-bottom: 16px;
  `}
`;

const MapWrapper = styled.div`
  max-width: 680px;
  margin: 16px auto;
  height: 400px;
`;

interface OwnProps {

}

interface ConnectedProps {
  event: AppEvent;
  place: Place;
  eventTypes: AppEventType[];
}

type Props = OwnProps & ConnectedProps & DispatchProp<any> & RouteComponentProps<{ slug: string }>;

const Event: React.FC<Props> = ({ event, place, dispatch, match, eventTypes }) => {
  useEffect(() => {
    dispatch(fetchEventBySlug(match.params.slug));
  }, [match.params.slug]);

  if (!event) return <div>...loading</div>;

  return (
    <Wrapper>
      <Top>
        <Img src={event.image} />
        <div>
          <Typography variant="h6" gutterBottom>{event.title}</Typography>
          <Typography component="p">{formatDate(new Date(event.date))}</Typography>
        </div>
      </Top>
      <Address>{place.title} / {place.address}</Address>
      <Phone>{place.phone}</Phone>
      <Typography component="p">{event.description}</Typography>
      <Map
        marker={place.location}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<MapWrapper />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  event: eventSelector(state),
  place: eventPlaceSelector(state),
  eventTypes: eventTypesSelector(state),
});

export default connect(mapStateToProps)(Event);
