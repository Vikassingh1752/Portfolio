import React from "react";
import GoogleMapReact from 'google-map-react';


const Map = ({ center, zoom }) => {

  

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDTUz6y-wSZ4V5EcJKdadinrla2uwkkfSA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >



      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center:{
    lat:42.3656,
    lng:-122.8756
  },
  zoom:6
}

export default Map;
