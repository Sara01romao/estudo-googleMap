
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
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

 

 

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        
      >
        <Marker position={center} />
      </GoogleMap>
  ) : <></>
}




export default MapPage;