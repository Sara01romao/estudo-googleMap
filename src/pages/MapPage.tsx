import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader,LoadScript, Marker } from '@react-google-maps/api';
import './MapPage.css'

const containerStyle = {
  width: '50%',
  height: '100vh'
};

const center = {
  lat: -23.5558,
  lng: -46.6396
};


const MapPage = () =>{
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAEHaxFNZCH18T-2lMsiFiEOjl1RCuWB9g"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={30}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
  ) : <></>
}




export default MapPage;