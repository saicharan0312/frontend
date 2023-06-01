import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-7.9);
  const [lat, setLat] = useState(20.35);
  const [zoom1, setZoom] = useState(9);
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpY2hhcmFuMDMxMiIsImEiOiJjbGk4OHBzYzgxN251M2VtOTJxMmZ5dW9sIn0.NyZxVDLI8vWTzKX5E9JPjg';
  useEffect(() => {
 
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: props.center,
    zoom: props.zoom,
    });

    }, [center, zoom]
  );  

  return (
    <div
      ref={mapContainer}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;