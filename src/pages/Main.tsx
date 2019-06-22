import React from 'react';
import styled from 'styled-components';
import Feed from '../components/Main/Feed';
import Map from '../components/Map';
import {GOOGLE_MAPS_API_KEY} from '../constants';
const Wrapper = styled.div`
  
`;

interface Props {

}

const MapWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 16px;
  height: 400px;
`;

const Main: React.FC<Props> = () => {

  return (
    <Wrapper>
      <Feed />
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<MapWrapper />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Wrapper>
  );
};

export default Main;
