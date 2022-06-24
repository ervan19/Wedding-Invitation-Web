import "./location.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });
  if (!isLoaded) return <h3>Loading....</h3>;
  return <Map />;
}
function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: -7.267036, lng: 107.829414 }}
      mapContainerClassName="mapContainer"
    >
      <Marker position={{ lat: -7.267036, lng: 107.829414 }} />
    </GoogleMap>
  );
}
