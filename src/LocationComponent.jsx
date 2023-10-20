import React from "react";
import useCurrentLocation from "./useCurrentLocation";

const LocationComponent = () => {
  const { location, getCurrentLocation, loading, error } = useCurrentLocation();

  return (
    <div>
      <h2>Posizione attuale</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {location && (
        <div>
          <p>Latitudine: {location.latitude}</p>
          <p>Longitudine: {location.longitude}</p>
        </div>
      )}
      <button onClick={getCurrentLocation}>Clicca per avere la posizione esatta</button>
    </div>
  );
};

export default LocationComponent;
