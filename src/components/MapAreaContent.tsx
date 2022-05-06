import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapPin } from 'react-icons/fa';
import styles from 'styled-components';

const MarkerContainer = styles.div`
  font-size:40px;
  color:red;
`;
const MapAreaContent = () => {
  const key: string = process.env.REACT_APP_GOOGLE_MAP_KEY as string;
  const defaultProps = {
    center: {
      lat: 18.473206480262487,
      lng: -69.9117276
    },
    zoom: 18
  };
  const MarkerComponent = ({
    text
  }: {
    text: string;
    lat: number;
    lng: number;
  }) => (
    <MarkerContainer>
      <FaMapPin /> {text}
    </MarkerContainer>
  );

  return (
    <div className="map-area">
      <div className="map-content">
        <div
          className="map-canvas"
          id="contact-map"
          style={{ width: `100%`, height: '500px' }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MarkerComponent
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text=""
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default MapAreaContent;
