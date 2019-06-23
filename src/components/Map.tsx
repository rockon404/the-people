import React from 'react';
import styled from 'styled-components';
import { Marker, GoogleMap, withGoogleMap, WithGoogleMapProps, withScriptjs } from 'react-google-maps';

const Wrapper = styled.div`
  
`;

interface OwnProps {
  marker: [number, number];
}

type Props = OwnProps & WithGoogleMapProps;

const Map: React.FC<Props> = ({ marker }) => {

  return (
    <Wrapper>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={marker ? { lat: marker[0], lng: marker[1] } : { lat: 54.70649, lng: 20.51095 }}
      >
        {marker && <Marker position={{ lat: marker[0], lng: marker[1] }} />}
      </GoogleMap>
    </Wrapper>
  );
};

export default withScriptjs(withGoogleMap<any>(Map));
