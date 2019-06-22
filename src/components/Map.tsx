import React from 'react';
import styled from 'styled-components';
import { Marker, GoogleMap, withGoogleMap, WithGoogleMapProps, withScriptjs } from 'react-google-maps';

const Wrapper = styled.div`
  
`;

interface OwnProps {}

type Props = OwnProps & WithGoogleMapProps;

const Map: React.FC<Props> = (props) => {

  return (
    <Wrapper>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 54.70649, lng: 20.51095 }}
      >
        <Marker position={{ lat: 54.70649, lng: 20.51095 }} />
      </GoogleMap>
    </Wrapper>
  );
};

export default withScriptjs(withGoogleMap<any>(Map));
