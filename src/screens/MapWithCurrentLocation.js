import React, { useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow, Polyline } from "react-google-maps";

const apiKey = "AIzaSyATtlIANZ4sPq9WQwx-OnBC41d1xfe655g"; // Replace with your actual API key

const MyMapComponent = withGoogleMap((props) => {
  const [directions, setDirections] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: new window.google.maps.LatLng(33.6844, 73.0479), // Peshawar, Pakistan
        destination: new window.google.maps.LatLng(24.8607, 67.0011), // Karachi, Pakistan
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 27.7172, lng: 67.9995 }} // Default center is somewhere in between Peshawar and Karachi
    >
      {/* Marker for Peshawar */}
      <Marker
        position={{ lat: 33.6844, lng: 73.0479 }}
        label="Peshawar"
        onClick={() => handleMarkerClick("Peshawar")}
      />

      {/* Marker for Karachi */}
      <Marker
        position={{ lat: 24.8607, lng: 67.0011 }}
        label="Karachi"
        onClick={() => handleMarkerClick("Karachi")}
      />

      {selectedMarker && (
        <InfoWindow
          position={directions && selectedMarker === "Peshawar" ? { lat: 33.6844, lng: 73.0479 } : { lat: 24.8607, lng: 67.0011 }}
          onCloseClick={handleCloseInfoWindow}
        >
          <div>
            <h3>{selectedMarker}</h3>
            <p>Additional information about {selectedMarker}</p>
          </div>
        </InfoWindow>
      )}

      {directions && (
        <>
          {/* Colored Polyline */}
          <Polyline
            path={directions.routes[0].overview_path}
            options={{
              strokeColor: "#00FF00", // Green color
              strokeOpacity: 0.8,
              strokeWeight: 5,
            }}
          />
        </>
      )}
    </GoogleMap>
  );
});

const GoogleMapContainer = () => (
  <div>
    <h1>Route from Peshawar to Karachi</h1>
    <MyMapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "400px" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  </div>
);

export default GoogleMapContainer;
